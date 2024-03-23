import React, { useRef, useState, useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

function Upload() {
  const videoOutputRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [recordedMediaURL, setRecordedMediaURL] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  // 사용자의 카메라에 접근하여 비디오 스트림을 설정합니다.
  useEffect(() => {
    const constraints = { audio: false, video: true };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      setMediaStream(stream);
      if (videoOutputRef.current) {
        videoOutputRef.current.srcObject = stream;
      }
    });
  }, []);

  // 녹화 시작 함수
  const startRecording = () => {
    if (mediaStream) {
      const mediaRecorder = new MediaRecorder(mediaStream, {
        mimeType: "video/webm; codecs=vp9",
      });

      let mediaData = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          mediaData.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(mediaData, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setRecordedMediaURL(url);
      };

      mediaRecorder.start();
      setMediaRecorder(mediaRecorder);
    }
  };

  // 녹화 중지 함수
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
  };

  // 녹화된 영상 다운로드 함수
  const downloadRecordedVideo = () => {
    if (recordedMediaURL) {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = recordedMediaURL;
      link.download = "video.webm";
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Container>
      <Navbar />
      <video ref={videoOutputRef} autoPlay playsInline muted></video>
      <button onClick={startRecording} id="start-btn">
        녹화 시작
      </button>
      <button onClick={stopRecording} id="finish-btn">
        녹화 종료
      </button>
      <button onClick={downloadRecordedVideo} id="download-btn">
        다운로드
      </button>
    </Container>
  );
}

export default Upload;
