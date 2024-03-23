import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Upload() {
  const videoOutputRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedMediaURL, setRecordedMediaURL] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [facingMode, setFacingMode] = useState("user"); // 초기 카메라 모드를 전면으로 설정

  useEffect(() => {
    const constraints = {
      audio: true,
      video: { facingMode: facingMode },
    };

    // 기존 스트림이 있으면 닫기
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
    }

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        setMediaStream(stream);
        if (videoOutputRef.current) {
          videoOutputRef.current.srcObject = stream;
        }
      })
      .catch((error) => console.error(error));
  }, [facingMode]); // facingMode가 변경될 때마다 useEffect 실행

  const toggleFacingMode = () => {
    setFacingMode(facingMode === "user" ? "environment" : "user");
  };

  const toggleRecording = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    if (mediaStream && !mediaRecorder) {
      const newMediaRecorder = new MediaRecorder(mediaStream, {
        mimeType: "video/webm; codecs=vp9",
      });

      let mediaData = [];
      newMediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          mediaData.push(event.data);
        }
      };

      newMediaRecorder.onstop = () => {
        const blob = new Blob(mediaData, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setRecordedMediaURL(url);
      };

      newMediaRecorder.start();
      setMediaRecorder(newMediaRecorder);
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.onstop = async () => {
        const blob = new Blob(mediaData, { type: "video/webm" });
        // setRecordedMediaURL(url); // 이전 다운로드 관련 코드 제거

        // 파일 업로드를 위한 FormData 준비
        const formData = new FormData();
        formData.append("video", blob, "recorded_video.webm"); // Blob을 파일로 추가
        formData.append("question", "자녀들에게 하고 싶은 말은 무엇인가요?"); // 질문 내용 추가

        // 파일 업로드 함수 호출
        await uploadVideo(formData);

        setMediaRecorder(null);
        setIsRecording(false);
      };

      let mediaData = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          mediaData.push(event.data);
        }
      };
    }
  };

  const uploadVideo = async (formData) => {
    console.log(formData.get("question"));
    try {
      // `question` 쿼리 파라미터를 포함하여 요청 URL을 구성합니다.
      const urlWithParams = `https://api-skyst.mirix.kr/video/upload?question=${encodeURIComponent(
        formData.get("question")
      )}`;

      // fetch API를 사용하여 GET 요청을 보냅니다.
      const response = await fetch(urlWithParams, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization 헤더나 다른 인증/인가 헤더가 필요할 수 있습니다.
        },
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      // 응답에서 pre-signed URL을 추출합니다.
      const data = await response.json();
      console.log("Received pre-signed URL:", data.video);

      // 영상 업로드
      const uploadVideoResponse = await fetch(data.video, {
        method: "PUT",
        body: formData.get("video"),
        headers: {
          "Content-Type": "video/webm", // 업로드할 파일의 콘텐츠 유형 지정
        },
      });

      // 썸네일 이미지 생성
      const videoBlob = formData.get("video");
      const videoUrl = URL.createObjectURL(videoBlob);
      const video = document.createElement("video");
      video.src = videoUrl;
      video.currentTime = 0; // 영상의 첫 프레임으로 이동
      await new Promise((resolve) =>
        video.addEventListener("loadeddata", resolve)
      );

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const thumbnailBlob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/jpg")
      );

      // S3에 썸네일 이미지 업로드
      const uploadImageResponse = await fetch(data.thumbnail, {
        method: "PUT",
        body: thumbnailBlob,
        headers: {
          "Content-Type": "image/jpg",
        },
      });
    } catch (error) {
      console.error("Failed to get pre-signed URL:", error);
    }
  };

  const QuestionCard = () => {
    return (
      <div className="flex justify-center w-full relative top-16">
        <div className="max-w-md overflow-hidden rounded-2xl">
          <div className="bg-gradient-to-tr from-indigo-200 to-indigo-300 w-full rounded-2xl relative shadow-xl shadow-slate-200 px-8 py-4">
            <h2 className="text-sm text-indigo-500 pt-4">오늘의 질문</h2>
            <h1 className="text-xl font-bold text-indigo-600 dark:text-white pb-4">
              자녀들에게 하고 싶은 말은 무엇인가요?
            </h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Video Container */}
      <div className="absolute bottom-0 w-full h-full">
        <video
          ref={videoOutputRef}
          className={`w-full h-full object-cover ${
            facingMode === "user" ? "scale-x-[-1]" : ""
          }`}
          autoPlay
          playsInline
          muted
        ></video>
        {/* QuestionCard Overlay */}
      </div>
      <QuestionCard />

      {/* Back Button */}
      <div className="absolute top-5 left-4 z-10">
        <Link to="/gallery">
          <FontAwesomeIcon
            className="text-white text-xl"
            icon={["fas", "fa-chevron-left"]}
          />
        </Link>
      </div>

      {/* Recording Button */}
      <div className="absolute bottom-10 right-1/2 translate-x-1/2 z-10">
        <button
          onClick={toggleRecording}
          className={`flex items-center justify-center rounded-full border-4 transition-all duration-500 ease-in-out ${
            isRecording ? "border-white w-16 h-16" : "border-white w-16 h-16"
          }`}
        >
          <div
            className={`transition-all duration-400 ease-in-out ${
              isRecording
                ? "bg-red-500 w-8 h-8 rounded-md"
                : "bg-red-500 w-12 h-12 rounded-full"
            }`}
          ></div>
        </button>
      </div>

      {/* Toggle Facing Mode Button */}
      <div
        className="absolute bottom-12 right-10 translate-x-1/2 z-10"
        onClick={toggleFacingMode}
      >
        <FontAwesomeIcon
          className="text-white text-4xl"
          icon="fa-solid fa-camera-rotate"
        />
      </div>
    </div>
  );
}

export default Upload;
