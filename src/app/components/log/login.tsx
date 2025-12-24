"use client";

import { headerInnerClass_center, taskBox, log_Button, input_className } from "@/app/className";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export default function TskMngApp_Login(){
    const { login } = useAuth();
    const [ id, setId ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error_juge, setErrorJuge ] = useState("");

    const handleLogin = () => {
        if ( !login( id, password )) {
            setErrorJuge( "Error : ID or Password is incorrect" )
        } else {
            setErrorJuge( "Login is success!!" )
        };
    };

    return(
        <div className={ headerInnerClass_center }>
            <div className={ taskBox }>
                <h1 className="font-bold mb-3">Login</h1>
                
                <h1 className="mb-2">ID</h1>
                <input
                    name="login_id"
                    type="text"
                    placeholder="User ID"
                    value={ id }
                    onChange={ (e) => setId( e.target.value ) }
                    className={ input_className }
                />
                <h1 className="mb-2">PassWord</h1>
                <input
                    name="login_password"
                    type="text"
                    placeholder="PassWord"
                    value={ password }
                    onChange={ (e) => setPassword( e.target.value ) }
                    className={ input_className }
                />
                <button
                onClick={ handleLogin }
                className={ log_Button }
                >
                Login
                </button>
                {/* saito↓意味理解必要 */}
                { error_juge && <p className="text-500">{ error_juge }</p> }
            </div>
        </div>

    );
}