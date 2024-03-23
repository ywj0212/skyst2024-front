const NotificationCard = ({ question }) => {
  return (
    <div className="opacity-100 group max-w-2xl m-0 mx-auto mt-16 overflow-hidden rounded-2xl shadow-xl shadow-black/10">
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