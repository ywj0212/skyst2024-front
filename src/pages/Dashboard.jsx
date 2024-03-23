import Container from "../components/Container";
import StoryContainer from "../components/StoryContainer";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";
import NotificationCard from "../components/NotificationCard";
import ProductCard from "../components/ProductCard";
import StoryCard from "../components/StoryCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const [isNotification, setIsNotification] = useState(false);
  const [newVidUrl, setNewVidUrl] = useState("");
  const Notification = async () => {
    if (videos.length == 0) return;
    await getVideos();
    setIsNotification(true);
  };
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
    setVideos(data.data.reverse());
  };

  return (
    <div className="bg-slate-100 pb-24">
      <div className="hidden h-80 opacity-80"></div>
      <div className="hidden h-0 opacity-0"></div>
      <div
        className={
          "transition duration-300 flex-col " +
          (isNotification ? " h-80 opacity-100 " : " h-0 opacity-0 ") +
          " z-10 absolute inset-x-0 top-0 bg-gradient-to-b from-amber-400/70 to-transparent"
        }
      >
        <div className="flex-1 mx-auto">
          <Link onClick={() => setNewVidUrl(videos[0].url)} to="/player" state={{ url: newVidUrl }}>
            <NotificationCard
              question={"지금 당장 자식에게 하고 싶은 말은 무엇인가요?"}
            />
          </Link>
        </div>
      </div>
      <Container>
        <Navbar name={"다해"} />
        <div className="mt-16 flex justify-between items-center">
          <div className="min-w-0 flex-1">
            <h2
              onClick={Notification}
              className="text-2xl leading-7 text-slate-800 sm:truncate sm:text-3xl sm:tracking-tight"
            >
              이전의 추억들
            </h2>
          </div>
        </div>
        <StoryContainer>
          {videos.map((v, idx) => (
            <Link to="/player" state={{ url: v.url }}>
              <StoryCard key={idx} date={v.datetime} videoUrl={v.url} />
            </Link>
          ))}
        </StoryContainer>

        <ProductCard
          date={"2024년 3월 23일"}
          today={false}
          question={"오늘 당신의 기분은 어떠신가요?"}
          profileUrl={
            "https://cdn.pixabay.com/photo/2021/02/07/02/35/woman-5989926_1280.jpg"
          }
          name={"김영희"}
          thumbnailUrl={
            "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg"
          }
          availableAfter={"2024년 4월 1일"}
        />

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
      <BottomNavigation addButton={false} />
    </div>
  );
}

export default Dashboard;
