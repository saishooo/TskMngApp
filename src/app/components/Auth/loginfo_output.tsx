//ログイン情報を表示するコンポーネントファイル

"use client";

import { useAuth } from "./AuthContext";
import { headerInner_className } from "@/app/className";
import { useRouter } from "next/navigation";

//ログイン情報を表示するコンポーネント
export function LogInfo_Output() {
  const { user, logout } = useAuth();
  const isLoggedIn = user.user_id !== "guest";
  const router = useRouter();

  //classNameの宣言
  const Login_button_className =
    "ml-8 w-16 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const Logout_button_className =
    "ml-14 w-16 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const SignUp_button_className =
    "ml-4 w-20 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const headerInnerMobile_className =
    "fixed top-32 flex justify-center left-1/2 -translate-x-1/2";

  return (
    <>
      {/* Desktopサイズ時 */}
      <div className="hidden lg:flex">
        <div className={headerInner_className}>
          {isLoggedIn ? (
            <div className="flex items-center w-90 h-13 mt-3 ml-3  border rounded border-gray-300">
              <div className="flex ml-3 w-55">
                <h1 className="font-bold text-green-600">Login Now :</h1>
                <p className="ml-2">{user.user_name}</p>
              </div>
              <button className={Logout_button_className} onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center w-115 h-13 mt-3 ml-3  border rounded border-gray-300">
              <div className="flex ml-3 w-55">
                <h1 className="font-bold text-blue-600">Logout Now :</h1>
                <p className="ml-2">Guest</p>
              </div>
              <button
                className={Login_button_className}
                onClick={() => router.push("/Auth/login")}
              >
                Login?
              </button>
              <p className="flex ml-4">or</p>
              <button
                className={SignUp_button_className}
                onClick={() => router.push("/Auth/signup")}
              >
                Sing Up?
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobileサイズ時 */}
      <div className="lg:hidden">
        <div className={headerInnerMobile_className}>
          {isLoggedIn ? (
            <div className="flex items-center w-90 h-13 mt-3 ml-3  border rounded border-gray-300">
              <div className="flex ml-3 w-55">
                <h1 className="font-bold text-green-600">Login Now :</h1>
                <p className="ml-2">{user.user_name}</p>
              </div>
              <button className={Logout_button_className} onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center w-115 h-13 mt-3 ml-3  border rounded border-gray-300">
              <div className="flex ml-3 w-55">
                <h1 className="font-bold text-blue-600">Logout Now :</h1>
                <p className="ml-2">Guest</p>
              </div>
              <button
                className={Login_button_className}
                onClick={() => router.push("/Auth/login")}
              >
                Login?
              </button>
              <p className="flex ml-4">or</p>
              <button
                className={SignUp_button_className}
                onClick={() => router.push("/Auth/signup")}
              >
                Sing Up?
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
