"use client";

import {
  input_className,
  headerInnerCenter_className,
  LoginBox_className,
  logButton_className,
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
      showAlert("Error : ID or Password is incorrect", "error");
    } else {
      //ログイン成功
      showAlert("Login is success!!", "success");
    }
  };

  return (
    <div className={headerInnerCenter_className}>
      <div className={LoginBox_className}>
        <h1 className="font-bold mb-3">Login</h1>

        <h1 className="mb-2">ID</h1>
        <input
          name="login_id"
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className={input_className}
        />
        <h1 className="mb-2">PassWord</h1>
        <input
          name="login_password"
          type="text"
          placeholder="PassWord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={input_className}
        />
        <button onClick={handleLogin} className={logButton_className}>
          Login
        </button>
      </div>
    </div>
  );
}
