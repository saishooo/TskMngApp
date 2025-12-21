"use client";

import { useContext, useState } from "react";
import { TaskContext } from "./tsk_parent";
import { headerInnerClass_center, taskBox, taskInput_Button, input_className } from "@/app/className";
import { useAuth } from "../login/AuthContext";

export default function Tsk_Input(){
    const [ tsk_title, setTskTitle ] = useState("");
    const [ dead_line,  setDeadLine ]  = useState("");
    const { user } = useAuth();

    //ここ修正　あと意味理解必要saito
    const ctx = useContext(TaskContext);
    if (!ctx) return null;
    const { addTask } = ctx;

    //タスクを加えるローカル関数
    //↓user_idの取得方法は？　意味理解 saito
    const handleAdd = () => {
        if (!user) return;
        
        addTask( tsk_title, dead_line, user.user_id );
        setTskTitle("");
        setDeadLine("");
    };

    return(
    <div className={ headerInnerClass_center }>
        <div className={taskBox}>
            <h1 className="mb-3 font-bold">My Task Input</h1>    

            <h1 className="mb-2">Task</h1>
                <input
                    name="tsk_title"
                    type="text"
                    value={ tsk_title }
                    onChange={ (e) => setTskTitle(e.target.value) }
                    placeholder="タスク"
                    className={ input_className }
                />

            <h1 className="mb-2">DeadLine</h1>
                <input 
                    name="tsk_dead_line"
                    type="date"
                    value={ dead_line }
                    onChange={ (e) => setDeadLine(e.target.value) }
                    placeholder="XXXX-YY-ZZ"
                    className={ input_className }
                />

            <button
                className={ taskInput_Button }
                onClick={ handleAdd }
            >
                Add
            </button>
        </div>
    </div>
    );
}