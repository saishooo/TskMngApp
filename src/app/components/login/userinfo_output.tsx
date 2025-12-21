"use client"

import { useAuth } from "../login/AuthContext";
import { headerInnerClass } from "@/app/className";

export function UserInfo_Output() {
    const { user } = useAuth();
    return(
        <div className={ headerInnerClass }>
            <div className="w-100 h-15 mt-3 ml-3  border rounded border-gray-300">
                { user? (
                    <h1>{ user.user_name }</h1>
                ) : (
                    <h1>Logout Now</h1>
                )}
            </div>
        </div>
    );
}