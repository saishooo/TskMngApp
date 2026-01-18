"use client";

import {
  logButton_className,
  headerInnerCenterBase_className,
  headerInnerCenterLg_className,
  LoginBoxBase_className,
  LoginBoxMd_className,
  inputBase_className,
  inputLg_className,
  inputMd_className,
} from "@/app/className";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { useAlert } from "../alert/alertContext";

export default function TskMngApp_Login() {
  const { login } = useAuth();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { showAlert } = useAlert();

  //ログイン成功・失敗のアラートする関数
  const handleLogin = () => {
    if (!login(id, password)) {
      //ログイン失敗
      showAlert("エラー : IDまたはパスワードが誤っています", "error");
    } else {
      //ログイン成功
      showAlert("ログインに成功しました", "success");
    }
  };

  return (
    <>
      <div className="flex">
        <div
          className={`
          ${headerInnerCenterBase_className}
          ${headerInnerCenterLg_className}
          `}
        >
          <div
            className={`
            ${LoginBoxBase_className}
            ${LoginBoxMd_className}
          `}
          >
            <h1 className="font-bold mb-3">ログイン</h1>

            <h1 className="mb-2">ID</h1>
            <input
              name="login_id"
              type="text"
              placeholder="ユーザーIDを入力してください"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}
                `}
            />
            <h1 className="mb-2">パスワード</h1>
            <input
              name="login_password"
              type="text"
              placeholder="パスワードを入力してください"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}`}
            />
            <button onClick={handleLogin} className={logButton_className}>
              ログイン
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
