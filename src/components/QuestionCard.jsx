import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuestionCard = ({ question }) => {
  return (
    <div className="group max-w-2xl mt-10 overflow-hidden rounded-2xl shadow-xl shadow-indigo-100 dark:bg-gray-800">
      <div className="bg-gradient-to-tr from-indigo-400 to-indigo-500 rounded-2xl relative">
        <div className="absolute right-4 top-4">
          <FontAwesomeIcon
            icon={["fas", "fa-arrows-rotate"]}
            className="text-white text-xl"
          />
        </div>
        <h2 className="text-sm text-white pt-8 px-4">오늘의 질문</h2>
        <h1 className="text-xl font-bold text-white pb-8 px-4">{question}</h1>
      </div>
    </div>
  );
};

export default QuestionCard;
