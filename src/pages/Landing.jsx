import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Landing() {
  return <>
    <div>
      <h1>타임 캡슐</h1>
      <h2>프로젝트에 대한 한 줄 설명</h2>
      <button>시작하기</button>
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
    </div>
    <div>
      <p>이 서비스에 대한 간략한 설명</p>
    </div>
    <footer>
      <p>우리 팀과 대회 소개</p>
    </footer>
  </>;
}

export default Landing;