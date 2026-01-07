//ユーザー情報を登録するコンポーネントファイル

"use client";

import {
  input_className,
  headerInnerCenter_className,
  signUpBox_className,
  logButton_className,
  signUpBoxTablet_className,
  signUpBoxSmartphone_className,
  inputSmartphone_className,
  inputTablet_className,
} from "@/app/className";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export default function TskMngApp_SignUp() {
  const [login_id, setId] = useState("");
  const [login_password, setPassword] = useState("");
  const [login_password_conf, setPasswordConf] = useState("");
  const [user_name, setUserName] = useState("");
  //サイドバーを含んだセンター位置(スマホ)
  const headerInnerCenterSignUpChgSize_className =
    "fixed top-40 left-1/2 -translate-x-1/2 flex justify-center";
  const { signup } = useAuth();

  const local_signup = () => {
    signup(login_id, login_password, login_password_conf, user_name);
  };

  return (
    <>
      {/* Desktop(PC)サイズ時 横幅がlg以上で表示 */}
      <div className="hidden lg:flex">
        <div className={headerInnerCenter_className}>
          <div className={signUpBox_className}>
            <h1 className="font-bold mb-3">Sing Up</h1>
            <h1 className="mb-2">ID</h1>
            <input
              name="login_id"
              type="text"
              placeholder="User ID"
              value={login_id}
              onChange={(e) => setId(e.target.value)}
              className={input_className}
            />

            <h1 className="mb-2">Password</h1>
            <input
              name="login_password"
              type="text"
              placeholder="User Password"
              value={login_password}
              onChange={(e) => setPassword(e.target.value)}
              className={input_className}
            />

            <h1 className="mb-2">Password Confirm</h1>
            <input
              name="login_password_confirim"
              type="text"
              placeholder="User Password Confirim"
              value={login_password_conf}
              onChange={(e) => setPasswordConf(e.target.value)}
              className={input_className}
            />

            <h1 className="mb-2">User Name</h1>
            <input
              name="user_name"
              type="text"
              placeholder="User Name"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              className={input_className}
            />

            <button className={logButton_className} onClick={local_signup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile(タブレット)サイズ時 横幅がmd以上で表示、lg以下で非表示 */}
      <div className="hidden md:block lg:hidden">
        <div className={headerInnerCenterSignUpChgSize_className}>
          <div className={signUpBoxTablet_className}>
            <h1 className="font-bold mb-3">Sing Up</h1>
            <h1 className="mb-2">ID</h1>
            <input
              name="login_id"
              type="text"
              placeholder="User ID"
              value={login_id}
              onChange={(e) => setId(e.target.value)}
              className={inputTablet_className}
            />

            <h1 className="mb-2">Password</h1>
            <input
              name="login_password"
              type="text"
              placeholder="User Password"
              value={login_password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputTablet_className}
            />

            <h1 className="mb-2">Password Confirm</h1>
            <input
              name="login_password_confirim"
              type="text"
              placeholder="User Password Confirim"
              value={login_password_conf}
              onChange={(e) => setPasswordConf(e.target.value)}
              className={inputTablet_className}
            />

            <h1 className="mb-2">User Name</h1>
            <input
              name="user_name"
              type="text"
              placeholder="User Name"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              className={inputTablet_className}
            />

            <button className={logButton_className} onClick={local_signup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile(スマホ)サイズ時 横幅がmd以上になったら非表示 */}
      <div className="block md:hidden">
        <div className={headerInnerCenterSignUpChgSize_className}>
          <div className={signUpBoxSmartphone_className}>
            <h1 className="font-bold mb-3">Sing Up</h1>
            <h1 className="mb-2">ID</h1>
            <input
              name="login_id"
              type="text"
              placeholder="User ID"
              value={login_id}
              onChange={(e) => setId(e.target.value)}
              className={inputSmartphone_className}
            />

            <h1 className="mb-2">Password</h1>
            <input
              name="login_password"
              type="text"
              placeholder="User Password"
              value={login_password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputSmartphone_className}
            />

            <h1 className="mb-2">Password Confirm</h1>
            <input
              name="login_password_confirim"
              type="text"
              placeholder="User Password Confirim"
              value={login_password_conf}
              onChange={(e) => setPasswordConf(e.target.value)}
              className={inputSmartphone_className}
            />

            <h1 className="mb-2">User Name</h1>
            <input
              name="user_name"
              type="text"
              placeholder="User Name"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              className={inputSmartphone_className}
            />

            <button className={logButton_className} onClick={local_signup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
