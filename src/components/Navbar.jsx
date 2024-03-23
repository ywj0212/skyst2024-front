import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div>
      <div className="flex justify-center relative bottom-8">
        <img
          src="/timecapsule_logo.svg"
          alt="Time Capsule Logo"
          className="w-48"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="min-w-0 flex-1">
          <h3 className="text-slate-800">다시 만나서 반가워요 👋</h3>
          <h2 className="text-2xl font-bold leading-7 text-slate-800 sm:truncate sm:text-3xl sm:tracking-tight">
            다해님
          </h2>
        </div>
        <FontAwesomeIcon
          className="text-slate-600 text-2xl"
          icon={["fas", "fa-bars"]}
        />
      </div>
    </div>
  );
}

export default Navbar;
