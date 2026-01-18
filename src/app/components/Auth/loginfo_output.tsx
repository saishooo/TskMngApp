//ログイン情報を表示するコンポーネントファイル

"use client";

import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

//ログイン情報を表示するコンポーネント
export function LogInfo_Output() {
  const { user, logout } = useAuth();
  const isLoggedIn = user.user_id !== "guest";
  const router = useRouter();

  //classNameの宣言
  const headerInnerBase_className = "fixed top-32 left-1/2 -translate-x-1/2";
  const headerInnerLg_className = "lg:top-16 flex justify-center";

  const LoginButtonBase_className =
    "ml-4 w-18 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const LoginButtonMd_className = "md:ml-8";

  const SignUpButtonBase_className =
    "ml-2 w-16 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const SignUpButtonMd_className = "md:ml-4 w-16";

  const LogoutButtonBase_className =
    "ml-28 w-16 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const LogoutButtonMd_className = "md:ml-14";

  const loginNowBase_className =
    "flex items-center w-90 h-13 mt-3 ml-0 border rounded border-gray-300";
  const loginNowMd_className = "md:ml-3";

  const logoutNowBase_className =
    "flex items-center w-90 h-13 mt-3 border rounded border-gray-300";
  const logoutNowLg_className = "md:w-115";

  return (
    <>
      <div className="flex">
        <div
          className={`
          ${headerInnerBase_className}
          ${headerInnerLg_className}
          `}
        >
          {isLoggedIn ? (
            <div
              className={`
              ${loginNowBase_className}
              ${loginNowMd_className}
            `}
            >
              <div className="flex ml-3 w-40 md:w-55">
                <h1 className="font-bold text-green-600">ログイン :</h1>
                <p className="ml-2">{user.user_name}</p>
              </div>
              <button
                className={`
              ${LogoutButtonBase_className}
              ${LogoutButtonMd_className}
              `}
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div
              className={`
            ${logoutNowBase_className}
            ${logoutNowLg_className}
            `}
            >
              <div className="flex ml-3 w-40 md:w-55">
                <h1 className="font-bold text-blue-600">ログアウト :</h1>
                <p className="ml-2">ゲスト</p>
              </div>
              <button
                className={`
                  ${LoginButtonBase_className}
                  ${LoginButtonMd_className}
                `}
                onClick={() => router.push("/Auth/login")}
              >
                ログイン
              </button>
              <p className="flex ml-2 md:ml-4">or</p>
              <button
                className={`
                  ${SignUpButtonBase_className}
                  ${SignUpButtonMd_className}
                `}
                onClick={() => router.push("/Auth/signup")}
              >
                登録
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
