import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../components/Container";
import StoryContainer from "../components/StoryContainer";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";
import NotificationCard from "../components/NotificationCard";
import ProductCard from "../components/ProductCard";
import StoryCard from "../components/StoryCard";

function Dashboard() {

  return (
    <div className="bg-slate-100 pb-24">
      <Container>
        <Navbar />
        <NotificationCard question={"지금 당장 자식에게 하고 싶은 말은 무엇인가요?"} />

        <div className="mt-16 flex justify-between items-center">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl leading-7 text-slate-800 sm:truncate sm:text-3xl sm:tracking-tight">
              이전의 추억들
            </h2>
          </div>
        </div>
        <StoryContainer>
          <StoryCard  date={"2024년 3월 23일"}
                      thumbnailUrl={"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg"} />
          <StoryCard  date={"2024년 3월 23일"}
                      thumbnailUrl={"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg"} />
          
        </StoryContainer>

        <ProductCard  
                      date={"2024년 3월 23일"}
                      today={false}
                      question={"오늘 당신의 기분은 어떠신가요?"}
                      profileUrl={"https://cdn.pixabay.com/photo/2021/02/07/02/35/woman-5989926_1280.jpg"}
                      name={"김영희"}
                      thumbnailUrl={"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg"}
                      availableAfter={"2024년 4월 1일"}
                    />
        <ProductCard  
                      date={"2024년 3월 23일"}
                      today={false}
                      question={"오늘 당신의 기분은 어떠신가요?"}
                      profileUrl={"https://cdn.pixabay.com/photo/2021/02/07/02/35/woman-5989926_1280.jpg"}
                      name={"김영희"}
                      thumbnailUrl={"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg"}
                      availableAfter={"2024년 4월 1일"}
                    />
      </Container>
      <BottomNavigation addButton={false} />
    </div>
  );
}

export default Dashboard;
