//ユーザー情報を登録するコンポーネントファイル

"use client";

import {
  logButton_className,
  headerInnerCenterBase_className,
  headerInnerCenterLg_className,
  signUpBoxBase_className,
  signUpBoxLg_className,
  signUpBoxMd_className,
  inputBase_className,
  inputLg_className,
  inputMd_className,
} from "@/app/className";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export default function TskMngApp_SignUp() {
  const [login_id, setId] = useState("");
  const [login_password, setPassword] = useState("");
  const [login_password_conf, setPasswordConf] = useState("");
  const [user_name, setUserName] = useState("");
  const { signup } = useAuth();

  const local_signup = () => {
    signup(login_id, login_password, login_password_conf, user_name);
  };

  return (
    <>
      <div className="flex">
        <div className={`
          ${headerInnerCenterBase_className}
          ${headerInnerCenterLg_className}
          `}>
          <div className={`
            ${signUpBoxBase_className}
            ${signUpBoxLg_className}
            ${signUpBoxMd_className}
            `}>
            <h1 className="font-bold mb-3">Sing Up</h1>
            <h1 className="mb-2">ID</h1>
            <input
              name="login_id"
              type="text"
              placeholder="User ID"
              value={login_id}
              onChange={(e) => setId(e.target.value)}
              className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}
              `}
            />

            <h1 className="mb-2">Password</h1>
            <input
              name="login_password"
              type="text"
              placeholder="User Password"
              value={login_password}
              onChange={(e) => setPassword(e.target.value)}
              className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}
                `}
            />

            <h1 className="mb-2">Password Confirm</h1>
            <input
              name="login_password_confirim"
              type="text"
              placeholder="User Password Confirim"
              value={login_password_conf}
              onChange={(e) => setPasswordConf(e.target.value)}
              className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}
              `}
            />

            <h1 className="mb-2">User Name</h1>
            <input
              name="user_name"
              type="text"
              placeholder="User Name"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              className={`
              ${inputBase_className}
              ${inputLg_className}
              ${inputMd_className}
              `}
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
