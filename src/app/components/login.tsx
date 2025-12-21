import { headerInnerClass, taskBox } from "../className";

export default function TskMngApp_Login(){
    const input_className = "w-100 p-2 mb-6 border rounded border-gray-300";

    return(
        <div className={ headerInnerClass }>
            <div className={ taskBox }>
                <h1 className="font-bold mb-3">Login</h1>
                <h1 className="mb-2">ID</h1>
                <input
                    name="login_id"
                    type="text"
                    placeholder="ID"
                    className={ input_className }
                />
                <h1 className="mb-2">PassWord</h1>
                <input
                    name="login_password"
                    type="text"
                    placeholder="PassWord"
                    className={ input_className }
                />
                <button
                className="block p-3 w-18 border border-gray-300 rounded hover:bg-gray-200"
            >
                Login
            </button>
            </div>
        </div>

    );
}