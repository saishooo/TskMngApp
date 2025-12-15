"use client";

import { useContext, useState } from "react";
import { TaskContext } from "./tsk_parent";

export default function Tsk_Input(){
    const [ tsk_title, setTskTitle ] = useState("");
    const [ dead_line,  setDeadLine ]  = useState("");

    const ctx = useContext(TaskContext);
    if (!ctx) return null;
    const { addTask } = ctx;


    const handleAdd = () => {
        addTask( tsk_title, dead_line );
        setTskTitle("");
        setDeadLine("");
    };

    return(
    <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="w-150 p-4 border border-gray-300 rounded">
            <h1 className="mb-3 font-bold">My Task Input</h1>    

            <h1 className="mb-2">Task</h1>
                <input
                    name="tsk_title"
                    type="text"
                    value={ tsk_title }
                    onChange={ (e) => setTskTitle(e.target.value) }
                    placeholder="タスク"
                    className="w-100 p-2 mb-6 border border-gray-300 rounded"
                />

            <h1 className="mb-2">DeadLine</h1>
                <input 
                    name="tsk_dead_line"
                    type="date"
                    value={ dead_line }
                    onChange={ (e) => setDeadLine(e.target.value) }
                    placeholder="XXXX-YY-ZZ"
                    className="w-100 p-2 mb-6 border border-gray-300 rounded"
                />

            <button
                className="block p-3 border border-gray-300 p-3 rounded hover:bg-gray-200"
                onClick={ handleAdd }
            >
                Add
            </button>
        </div>
    </div>
    );
}