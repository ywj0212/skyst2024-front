function Login() {
  return <>
      <div className="flex min-h-screen content-center">
      <aside className="flex-1">
        <img className="absolute w-64 top-1/2 transform -translate-y-1/2 left-8" src="http://placehold.it/1080x2000?text=phone_mockup" />
        <img className="absolute w-72 top-1/2 transform -translate-y-1/2 left-36 shadow-2xl shadow-slate-700/20" src="http://placehold.it/1080x2000?text=phone_mockup" />
      </aside>
      <div className="flex-1">
        <div className="">
          <img className="" src="http://placehold.it/300x100?text=logo_text" />

          <label htmlFor="email">이메일</label>
          <input type="email" name="email" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" />
          <input type="submit" value="" />
          <div></div>
          <button>카카오톡으로 로그인</button>
          <button>Google로 로그인</button>
        </div>
        {/* <div className="flex-1 bg-indigo-300">
          
        </div> */}
      </div>
    </div>
  </>;
}

export default Login;