import Container from "../components/Container";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";
import NotificationCard from "../components/NotificationCard";
import ProductCard from "../components/ProductCard";

function Dashboard() {

  return (
    <div className="bg-slate-100">
      <Container>
        <Navbar />
        <NotificationCard question={"지금 당장 자식에게 하고 싶은 말은 무엇인가요?"} />
        <ProductCard  
                      date={"2024년 3월 23일"}
                      today={false}
                      question={"오늘 당신의 기분은 어떠신가요?"}
                      profileUrl={"https://cdn.pixabay.com/photo/2021/02/07/02/35/woman-5989926_1280.jpg"}
                      name={"김영희"}
                      thumbnailUrl={"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg"}
                    />
      </Container>
      <BottomNavigation />
    </div>
  );
}

export default Dashboard;
