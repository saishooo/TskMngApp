"use client"

import { useAuth } from "../login/AuthContext";
import { headerInnerClass } from "@/app/className";

export function UserInfo_Output() {
    const { user } = useAuth();
    return(
        <div className={ headerInnerClass }>
            <div className="flex items-center w-90 h-13 mt-3 ml-3  border rounded border-gray-300">
                { user? (
                    <div className="flex ml-3">
                        <h1 className="font-bold">Login Now :</h1>
                        <p className="ml-2">{ user.user_name }</p>
                        <p className="ml-2">さん</p>
                    </div>
                ) : (
                    <div className="flex ml-3">
                        <h1 className="font-bold">Logout Now</h1>
                        <p className="ml-2">Guest</p>
                    </div>
                )}
            </div>
        </div>
    );
}