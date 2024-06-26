import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    if (id == "monster_energy0323") {
      navigate("/gallery");
    } else if (id == "skyst2024") {
      navigate("/dashboard");
    } else {
      setInvalid(true);
    }
  };

  return (
    <>
      <div className="flex min-h-screen content-center">
        <aside className="hidden lg:block flex-1">
          <img
            className="absolute w-64 top-1/2 transform -translate-y-1/2 right-1/2 -translate-x-44"
            src="http://placehold.it/1080x2000?text=phone_mockup"
          />
          <img
            className="absolute w-72 top-1/2 transform -translate-y-1/2 right-1/2 -translate-x-8 shadow-2xl shadow-slate-700/20"
            src="http://placehold.it/1080x2000?text=phone_mockup"
          />
        </aside>
        <div className="flex-1 flex">
          <div className="mx-10 my-auto w-full lg:max-w-96 flex-col space-y-6">
            <img
              className="mx-auto mb-6 h-36 w-2/3 -translate-x-1"
              src="/timecapsule_logo.svg"
            />
            {invalid ? (
              <div className="text-red-500 pt-8">
                <p>* 아이디 또는 비밀번호가 잘못되었습니다.</p>
              </div>
            ) : null}
            <div>
              <label htmlFor="id" className="text-slate-700 font-bold">
                아이디
              </label>
              <br />
              <input
                onChange={(e) => setId(e.target.value)}
                className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                type="text"
                name="id"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-slate-700 font-bold">
                비밀번호
              </label>
              <br />
              <input
                className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                type="password"
                name="password"
              />
            </div>
            <button
              onClick={onLogin}
              className="w-full h-12 bg-indigo-500 text-white rounded-xl"
            >
              로그인
            </button>
            <div className="flex space-x-4">
              <div className="flex-grow h-0 my-auto border-b border-slate-300"></div>
              <div className="flex-grow-0 text-slate-700 font-semibold">
                또는
              </div>
              <div className="flex-grow h-0 my-auto border-b border-slate-300"></div>
            </div>
            <button className="w-full h-12 bg-yellow-300 text-slate-700 rounded-xl">
              카카오톡으로 로그인
            </button>
            <button className="w-full h-12 bg-white border text-slate-700 rounded-xl">
              Google로 로그인
            </button>

            <div className="text-center text-slate-700">
              계정이 없으신가요?{" "}
              <Link to="/register" className="text-indigo-500 underline">
                가입하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
