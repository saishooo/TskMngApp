"use client";

import { useContext, useState } from "react";
import { TaskContext } from "./tsk_parent";
import { headerInnerClass, taskBox, taskInput_Button, input_className } from "@/app/className";

export default function Tsk_Input(){
    const [ tsk_title, setTskTitle ] = useState("");
    const [ dead_line,  setDeadLine ]  = useState("");

    //ここ修正　あと意味理解必要
    const ctx = useContext(TaskContext);
    if (!ctx) return null;
    const { addTask } = ctx;

    //タスクを加えるローカル関数
    const handleAdd = () => {
        addTask( tsk_title, dead_line );
        setTskTitle("");
        setDeadLine("");
    };

    return(
    <div className={headerInnerClass}>
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