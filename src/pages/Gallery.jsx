import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

function Gallery() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Navbar />
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-4"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGZpZSUyMGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              인생에서 고마움을 느끼는 사람에 대해 이야기해주세요!
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2024년 3월 23일
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGZpZSUyMGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              자식들에게 하고 싶은 말은 무엇인가요?
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2024년 3월 23일
            </p>
          </div>
        </a>
      </Container>
      <div className="fixed bottom-4 right-1/2 translate-x-1/2">
        <button
          type="button"
          className="p-6 text-white shadow-2xl bg-indigo-500 hover:bg-indigo-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => navigate("/upload")}
        >
          <FontAwesomeIcon icon={["fas", "fa-plus"]} />
        </button>
      </div>
    </>
  );
}

export default Gallery;
