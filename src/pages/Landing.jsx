import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function Landing() {
  return <>
    <div
      style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2020/03/31/20/22/family-4989137_1280.jpg")`}}
      className="text-white group h-screen bg-cover"
      >
      <div className="bg-gradient-to-t from-black/30 to-transparent w-full h-full transition-all ease-in delay-75 duration-700 text-center flex backdrop-brightness-75 group-hover:backdrop-brightness-100">
        <div className="w-full my-auto flex-col space-y-5 transform -translate-y-24">
          <h1 className="text-center transition translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-75 duration-700">
            <img className="h-36 w-full -translate-x-7" src="/timecapsule_logo_white.svg"/>
          </h1>
          <h2 className="transition translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-150 duration-700">Timeless Love via TimeCapsule</h2>
          <button className="transition translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:delay-1000 delay-150 duration-700 ring-1 px-8 py-2 ring-white rounded"><Link to="/login">시작하기</Link></button>
          <br />
          <FontAwesomeIcon className="transition -translate-y-16 group-hover:translate-y-0 delay-0 duration-700" icon="fa-solid fa-chevron-down" />
        </div>
      </div>
    </div>
  </>;
}

export default Landing;