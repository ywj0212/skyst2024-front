import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function Landing() {
  return <>
    <div
      style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2020/03/31/20/22/family-4989137_1280.jpg")`}}
      className="text-white group h-[40rem]"
      >
      <div className="bg-gradient-to-t from-black/30 to-transparent w-full h-full transition-all ease-in delay-75 duration-700 bg-cover text-center flex backdrop-brightness-75 group-hover:backdrop-brightness-100">
        <div className="w-full my-auto flex-col space-y-5 ">
          <h1 className="text-center transition translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-75 duration-700">
            <img className="h-36 w-full -translate-x-7" src="/timecapsule_logo.svg"/>
          </h1>
          <h2 className="transition translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-150 duration-700">프로젝트에 대한 한 줄 설명</h2>
          <button className="transition translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:delay-1000 delay-150 duration-700 ring-1 px-8 py-2 ring-white rounded"><Link to="/login">시작하기</Link></button>
          <br />
          <FontAwesomeIcon className="transition -translate-y-16 group-hover:translate-y-0 delay-0 duration-700" icon="fa-solid fa-chevron-down" />
        </div>
      </div>
    </div>
    
    <div className="">
      <p>이 서비스에 대한 간략한 설명</p>
    </div>
    <footer>
      <p>우리 팀과 대회 소개</p>
    </footer>
  </>;
}

export default Landing;