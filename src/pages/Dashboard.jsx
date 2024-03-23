import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import BottomNavigation from "../components/BottomNavigation";

const ProductCard = () => {
  return (
    <div class="max-w-2xl mt-8 overflow-hidden bg-white rounded-2xl shadow-xl shadow-slate-200 dark:bg-gray-800">
      <img
        class="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGZpZSUyMGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Article"
      />

      <div class="p-6">
        <div>
          <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            오늘의 질문
          </span>
          <a
            href="#"
            class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabindex="0"
            role="link"
          >
            당신이 인생에서 가장 중요하게 생각하는 것은 무엇인가요?
          </a>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <img
                class="object-cover w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGZpZHUyMGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Avatar"
              />
              <a
                href="#"
                class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabindex="0"
                role="link"
              >
                안다해
              </a>
            </div>
            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
              2024년 3월 23일
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionCard = () => {
  return (
    <div className="max-w-2xl mt-10 overflow-hidden rounded-2xl shadow-xl shadow-indigo-100 dark:bg-gray-800">
      <div className="bg-gradient-to-tr from-indigo-200 to-indigo-300 rounded-2xl relative">
        <div class="absolute right-4 top-4">
          <FontAwesomeIcon
            icon={["fas", "fa-arrows-rotate"]}
            className="text-indigo-500 text-2xl"
          />
        </div>
        <h2 className="text-sm text-indigo-500 pt-8 px-4">오늘의 질문</h2>
        <h1 className="text-xl font-bold text-indigo-600 dark:text-white pb-8 px-4">
          자녀들에게 하고 싶은 말은 무엇인가요?
        </h1>
      </div>
    </div>
  );
};

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-100">
      <Container>
        <Navbar />
        <QuestionCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
      <BottomNavigation />
    </div>
  );
}

export default Dashboard;
