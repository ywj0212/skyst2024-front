import Container from "../components/Container";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";
import QuestionCard from "../components/QuestionCard";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Gallery() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(
      "https://api-skyst.mirix.kr/video/all/skyst2024/",
      {
        method: "GET", // 또는 "POST" 만약 백엔드가 POST 요청을 처리한다면
        // 필요한 경우 추가 헤더를 설정할 수 있습니다.
        headers: {
          "Content-Type": "application/json",
          // Authorization 헤더나 다른 인증/인가 헤더가 필요할 수 있습니다.
        },
      }
    );
    if (!response.ok) throw new Error("Network response was not ok.");
    const data = await response.json();
    setVideos(data.data);
  };

  return (
    <div className="bg-slate-100">
      <Container>
        <Navbar name={"영희"} />
        <Link to="/upload">
          <QuestionCard
            question={"지금 당장 자식에게 하고 싶은 말은 무엇인가요?"}
          />
        </Link>
        {videos.map((v, idx) => (
          <Link to="/player" state={{ url: v.url }}>
            <ProductCard
              key={idx}
              date={v.datetime}
              today={false}
              question={v.question}
              profileUrl={
                "https://cdn.pixabay.com/photo/2021/02/07/02/35/woman-5989926_1280.jpg"
              }
              name={"김영희"}
              videoUrl={v.url}
            />
          </Link>
        ))}
      </Container>
      <BottomNavigation />
    </div>
  );
}

export default Gallery;
