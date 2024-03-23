const NotificationCard = ({ question }) => {
  return (
    <div className="group max-w-2xl mt-10 overflow-hidden rounded-2xl shadow-xl shadow-indigo-100 dark:bg-gray-800">
      <div className="bg-gradient-to-tr from-red-200 to-amber-300 rounded-2xl relative">
        <h2 className="text-sm text-red-500 pt-8 px-4">오늘 열린 영상 보러가기</h2>
        <h1 className="text-xl font-bold text-white pb-8 px-4">
          {question}
        </h1>
      </div>
    </div>
  );
};

export default NotificationCard;