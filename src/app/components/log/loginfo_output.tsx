"use client";

import { useAuth } from "./AuthContext";
import { headerInnerClass } from "@/app/className";
import { useRouter } from "next/navigation";

export function LogInfo_Output() {
  const { user, logout } = useAuth();
  const isLoggedIn = user.user_id !== "guest";
  const router = useRouter();

  const Login_button =
    "ml-8 w-16 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const Logout_button =
    "ml-14 w-16 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
  const SignUp_button =
    "ml-4 w-20 h-10 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";

  return (
    <div className={headerInnerClass}>
        {isLoggedIn ? (
          <div className="flex items-center w-90 h-13 mt-3 ml-3  border rounded border-gray-300">
            <div className="flex ml-3 w-55">
              <h1 className="font-bold text-green-600">Login Now :</h1>
              <p className="ml-2">{user.user_name}</p>
              <p className="ml-2">さん</p>
            </div>
            <button className={Logout_button} onClick={logout}>
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
              className={Login_button}
              onClick={() => router.push("/log/login")}
            >
              Login?
            </button>
            <p className="flex ml-4">or</p>
            <button
              className={SignUp_button}
              onClick={() => router.push("/log/login")}
            >
              Sing Up?
            </button>
          </div>
        )}
    </div>
  );
}
