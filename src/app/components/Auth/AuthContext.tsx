"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { User } from "@/app/types";
import { users_data } from "./user_data";
import { useAlert } from "../alert/alertContext";

type AuthContextType = {
  user: User;
  signup: (
    id: string,
    password: string,
    passwordConf: string,
    user_name: string
  ) => boolean;
  login: (id: string, password: string) => boolean;
  logout: () => void;
};

//AuthContextはデータが入っている箱(鍵をuseAuthで開ける)
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //ゲストユーザー情報
  const guestUser: User = {
    user_id: "guest",
    user_password: "",
    user_name: "Guest",
  };

  const { showAlert } = useAlert();

  //登録済みユーザー(配列)
  const [users, setUsersAdd] = useState<User[]>(users_data);

  //現在ログインしているユーザー情報
  const [user, setUser] = useState<User>(guestUser);

  //サインアップ関数
  const signup = (
    id: string,
    password: string,
    passwordConf: string,
    userName: string
  ): boolean => {
    //空欄チェック
    if (!id || !password || !passwordConf || !userName) {
      showAlert("All fields are required", "error");
      return false;
    }
    //パスワード一致チェック
    if (password !== passwordConf) {
      showAlert("Passwords do not match", "error");
      return false;
    }
    //ユーザーIDがすでに使用されていないか
    if (users.some((user) => user.user_id === id)) {
      showAlert("This ID is already in use", "error");
      return false;
    }

    //登録したユーザーを入れる
    const newUser: User = {
      user_id: id,
      user_password: password,
      user_name: userName,
    };

    //登録済みユーザーに追加する
    setUsersAdd((prev) => [...prev, newUser]);

    //登録したユーザーでログインする
    setUser(newUser);
    //↓saito 意味理解
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    showAlert("ユーザー登録が成功しました", "success");

    return true;
  };

  //ログイン関数
  const login = (id: string, password: string) => {
    //users_dataの中からidとpasswordが同じものを取り出す
    const found_user = users_data.find(
      (users) => users.user_id === id && users.user_password === password
    );

    if (found_user) {
      setUser({
        user_id: found_user.user_id,
        user_password: found_user.user_name,
        user_name: found_user.user_name,
      });
      localStorage.setItem("currentUser", JSON.stringify(found_user));
      return true; //ログイン成功
    }
    return false; //ログイン失敗
  };

  //ログアウト関数
  const logout = () => {
    setUser(guestUser);
    localStorage.removeItem("currentUser");
    showAlert("ログアウト", "error");
  };

  //ページリロード時に保持
  //saitoあとで意味理解
  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) {
      const parsed: User = JSON.parse(saved);
      setUser(parsed);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//useAuthはAuthContextにアクセスするための鍵
export const useAuth = () => useContext(AuthContext);
