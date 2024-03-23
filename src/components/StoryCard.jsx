import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoryCard = ({ date, thumbnailUrl}) => {
  return (
    <div style={{backgroundImage: "url(" + thumbnailUrl + ")"}} className="flex-col snap-center grow-0 shrink-0 w-64 h-96 bg-cover mt-8 overflow-hidden rounded-2xl shadow-xl shadow-slate-200">
      <p className="grow-0 text-right h-12 p-4 flex-1 text-white">
        {date}
      </p>
    </div>
  );
};

export default StoryCard;