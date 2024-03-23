import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();

  return (
    <>
      <div class="lg:flex lg:items-center lg:justify-between p-4">
        {/* 여기에 p-4 클래스 추가 */}
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            타임캡슐💊
          </h2>
        </div>
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-4"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGZpZSUyMGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              인생에서 고마움을 느끼는 사람에 대해 이야기해주세요!
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2024년 3월 23일
            </p>
          </div>
        </a>
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGZpZSUyMGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              자식들에게 하고 싶은 말은 무엇인가요?
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2024년 3월 23일
            </p>
          </div>
        </a>
      </div>
      {/* 아이콘 버튼을 맨 밑에 fixed 포지션으로 수정 */}
      <div class="fixed bottom-4 right-1/2 translate-x-1/2">
        <button
          type="button"
          class="p-6 text-white shadow-2xl bg-indigo-500 hover:bg-indigo-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => navigate("/upload")}
        >
          <FontAwesomeIcon icon={["fas", "fa-plus"]} />
        </button>
      </div>
    </>
  );
}

export default Gallery;
