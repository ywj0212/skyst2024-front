import { Link } from "react-router-dom";

function Register() {
  return <>
    <div className="flex min-h-screen content-center">
      <aside className="hidden lg:block flex-1">
        <img className="absolute w-64 top-1/2 transform -translate-y-1/2 right-1/2 -translate-x-44" src="http://placehold.it/1080x2000?text=phone_mockup" />
        <img className="absolute w-72 top-1/2 transform -translate-y-1/2 right-1/2 -translate-x-8 shadow-2xl shadow-slate-700/20" src="http://placehold.it/1080x2000?text=phone_mockup" />
      </aside>
      <div className="flex-1 flex">
        <div className="mx-10 my-auto w-full lg:max-w-96 flex-col space-y-6">
          <img className="mx-auto mb-6" src="http://placehold.it/300x100?text=logo_text" />

          <div>
            <label htmlFor="email">이메일</label>
            <br />
            <input className="w-full rounded" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <br />
            <input className="w-full rounded" type="password" name="password" />
          </div>
          <div>
            <label htmlFor="password_check">비밀번호 확인</label>
            <br />
            <input className="w-full rounded" type="password" name="password_check" />
          </div>
          <button className="w-full h-12 bg-blue-500 text-white rounded">회원가입</button>

          <div className="flex space-x-4">
            <div className="flex-grow h-0 my-auto border-b border-black"></div>
            <div className="flex-grow-0">또는</div>
            <div className="flex-grow h-0 my-auto border-b border-black"></div>
          </div>
          <button className="w-full h-12 bg-yellow-300 rounded">카카오톡으로 회원가입</button>
          <button className="w-full h-12 bg-white border rounded">Google로 회원가입</button>
        </div>
      </div>
    </div>
  </>;
}

export default Register;