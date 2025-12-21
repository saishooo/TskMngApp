"use client";

import { createContext, useContext, useState, ReactNode} from "react";
import { User, AuthUser } from "@/app/types";
import { users_data } from "./user_data";

type AuthContextType = {
    user: User | null;
    login: ( id: string, password: string ) => boolean;
    logout: () => void;
}

//AuthContextはデータが入っている箱(鍵をuseAuthで開ける)
const AuthContext = createContext< AuthContextType >( {} as AuthContextType );

export const AuthProvider = ( { children }: { children: ReactNode }) => {
    const [ user, setUser ] = useState<User | null>( null );

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
    useState( () =>{
        const saved = localStorage.getItem( "currentUser" );
        if ( saved ) setUser(JSON.parse(saved));
    });

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
        );
}

//useAuthはAuthContextにアクセスするための鍵
export const useAuth = () => useContext( AuthContext );