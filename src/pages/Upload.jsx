import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        formData.append("question", "여기에 질문 내용을 추가"); // 질문 내용 추가

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
    try {
      const response = await fetch("http://api-skyst.mirix.kr/video/upload", {
        // 실제 API 엔드포인트 URL로 교체
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Server or network error");

      const result = await response.json();
      console.log("Upload successful:", result);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoOutputRef}
        className={`absolute w-full h-full object-cover ${
          facingMode === "user" ? "scale-x-[-1]" : ""
        }`}
        autoPlay
        playsInline
        muted
      ></video>
      <div className="absolute top-0 left-0 p-5 z-10 text-white">
        <Navbar />
      </div>
      <div className="absolute top-20 left-5 right-5 p-5 z-10 text-white bg-black bg-opacity-70 rounded-xl mx-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          자식들에게 하고 싶은 말은 무엇인가요?
        </h5>
      </div>

      <div className="absolute bottom-10 right-1/2 translate-x-1/2 z-10">
        <button
          onClick={toggleRecording}
          className={`p-2 rounded-full border-2 transition-transform duration-500 ease-in-out ${
            isRecording ? "bg-red-700 border-white" : "border-red-500"
          }`}
        >
          <div
            className={`w-12 h-12 ${
              isRecording ? "bg-white" : "rounded-full bg-red-500"
            } transition-all duration-500 ease-in-out`}
          ></div>
        </button>
      </div>
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
