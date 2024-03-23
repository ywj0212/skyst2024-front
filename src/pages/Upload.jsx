import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Upload() {
  const videoOutputRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
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
      setMediaRecorder(null);
      setIsRecording(false);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <video
        ref={videoOutputRef}
        className="absolute w-full h-full object-cover"
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

      <div className="absolute bottom-5 right-1/2 translate-x-1/2 z-10">
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
    </div>
  );
}

export default Upload;
