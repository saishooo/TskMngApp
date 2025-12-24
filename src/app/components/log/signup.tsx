"use client";

import { headerInnerClass_center, signUpBox, log_Button, input_className } from "@/app/className";
//import { useAuth } from "./AuthContext";
import { useState } from "react";

export default function TskMngApp_SignUp(){
    const [ login_id, setId ] = useState("");
    const [ login_password, setPassword ] = useState("");
    const [ login_password_conf, setPasswordConf ] = useState("");

    return(
        <div className={ headerInnerClass_center }>
            <div className={ signUpBox }>
                <h1 className="font-bold mb-3">Sing Up</h1>
                <h1 className="mb-2">ID</h1>
                <input
                    name="login_id"
                    type="text"
                    placeholder="User ID"
                    value={ login_id }
                    onChange={ (e) => setId( e.target.value ) }
                    className={ input_className }
                />

                <h1 className="mb-2">Password</h1>
                <input
                    name="login_password"
                    type="text"
                    placeholder="User Password"
                    value={ login_password }
                    onChange={ (e) => setPassword( e.target.value ) }
                    className={ input_className }
                />

                <h1 className="mb-2">Password Confirm</h1>
                <input
                    name="login_password_confirim"
                    type="text"
                    placeholder="User Password Confirim"
                    value={ login_password_conf }
                    onChange={ (e) => setPasswordConf( e.target.value ) }
                    className={ input_className }
                />

                <button
                className={ log_Button }
                >
                Sign Up
                </button>
            </div>
        </div>
    );
}

