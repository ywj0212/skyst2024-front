import React, { useRef, useState, useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

function Upload() {
  const videoOutputRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [recordedMediaURL, setRecordedMediaURL] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => {
    const constraints = { audio: false, video: true };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      setMediaStream(stream);
      if (videoOutputRef.current) {
        videoOutputRef.current.srcObject = stream;
      }
    });
  }, []);

  useEffect(() => {
    // 미디어 스트림이 준비되면 자동으로 녹화를 시작합니다.
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
    }
  }, [mediaStream, mediaRecorder]);

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
  };

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
