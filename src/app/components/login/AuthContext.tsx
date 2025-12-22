"use client";

import { createContext, useContext, useState, ReactNode, useEffect} from "react";
import { User } from "@/app/types";
import { users_data } from "./user_data";

type AuthContextType = {
    user: User;
    login: ( id: string, password: string ) => boolean;
    logout: () => void;
}

//AuthContextはデータが入っている箱(鍵をuseAuthで開ける)
const AuthContext = createContext< AuthContextType >( {} as AuthContextType );

export const AuthProvider = ( { children }: { children: ReactNode }) => {
    const guestUser: User = {
        user_id: "guest",
        user_name: "Guest",
    };

    const [ user, setUser ] = useState<User>( guestUser );

    //ログイン関数
    const login = (id: string, password: string) => {
        //users_dataの中からidとpasswordが同じものを取り出す
        const found_user = users_data.find( (user_data) => (user_data.user_id === id) && (user_data.user_password === password) );
        
        if (found_user) {
            setUser({ user_id: found_user.user_id, user_name: found_user.user_name });
            localStorage.setItem( "currentUser", JSON.stringify(found_user));
            return true;    //ログイン成功
        }
        return false;       //ログイン失敗
    };

    //ログアウト関数
    const logout = () => {
        setUser( null );
        localStorage.removeItem( "currentUser" );
    }

    //ページリロード時に保持
    //あとで意味理解
    useEffect( () =>{
        const saved = localStorage.getItem( "currentUser" );
        if ( saved ) {
            const parsed: User = JSON.parse(saved);
            setUser(parsed);
        }
    },[]);

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
        );
}

//useAuthはAuthContextにアクセスするための鍵
export const useAuth = () => useContext( AuthContext );