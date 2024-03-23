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

  const [question, setQuestion] = useState("");

  const questions = [
    "자녀가 태어났을 때 느낀 감정은 어땠나요?",
    "자녀에게 전하고 싶은 가장 중요한 삶의 교훈은 무엇인가요?",
    "우리 가족의 소중한 추억 중 하나를 말해주세요.",
    "자녀가 어릴 때 좋아했던 이야기나 놀이는 무엇이었나요?",
    "자녀가 어려움을 겪을 때 어떻게 위로하고 싶나요?",
    "당신의 어린 시절 이야기 중 자녀와 공유하고 싶은 것이 있나요?",
    "자녀에게 전하고 싶은 가장 중요한 가치는 무엇인가요?",
    "당신이 자녀에게 가장 자랑스러워하는 순간은 언제였나요?",
    "미래에 자녀가 이루었으면 하는 꿈은 무엇인가요?",
    "당신의 삶에서 가장 행복했던 순간은 언제인가요?",
    "자녀에게 전하고 싶은 사랑의 메시지가 있다면 무엇인가요?",
    "당신이 자녀에게 배운 가장 중요한 교훈은 무엇인가요?",
    "자녀와 함께하고 싶은 미래의 활동이나 여행은 무엇인가요?",
    "가족으로서 우리에게 가장 중요한 것은 무엇이라고 생각하나요?",
    "자녀가 자라면서 당신에게 가장 큰 영향을 준 사건은 무엇인가요?",
    "당신의 삶에서 가장 도전적이었던 순간은 어떻게 극복했나요?",
    "자녀에게 남기고 싶은 가장 소중한 추억은 무엇인가요?",
    "가족 전통 중 하나를 소개해주세요.",
    "자녀가 커서 알게 될 때까지 기다린 비밀이 있나요?",
  ];

  useEffect(() => {
    setQuestion(questions[Math.floor(Math.random() * questions.length)]);
  }, [])

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
        formData.append("question", question); // 질문 내용 추가

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

      const response = await fetch(urlWithParams, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      console.log("Received pre-signed URL:", data.video);

      // 영상 업로드
      const uploadVideoResponse = await fetch(data.video, {
        method: "PUT",
        body: formData.get("video"),
        headers: {
          "Content-Type": "video/webm",
        },
      });
    } catch (error) {
      console.error("Failed to get pre-signed URL:", error);
    }
  };

  const QuestionCard = () => {
    return (
      <div className="flex justify-center w-full relative top-16 px-[1rem]">
        <div className="max-w-md overflow-hidden rounded-2xl">
          <div className="bg-gradient-to-tr from-indigo-400 to-indigo-500 w-full rounded-2xl relative shadow-xl shadow-slate-200 px-6 py-4">
            <h2 className="text-sm text-white pt-4">오늘의 질문</h2>
            <h1 className="text-xl font-bold text-white dark:text-white pb-4">
              {question}
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
