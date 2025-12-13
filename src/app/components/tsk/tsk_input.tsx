"use client";

import { useContext, useState } from "react";
import { TaskContext, useTasks } from "./tsk_parent";

export default function Tsk_Input(){
    //saito
    const { tasks } = useTasks();

    const [ title, setTitle ] = useState("");
    const [ date,  setDate ]  = useState("");

    //saito
    const ctx = useContext(TaskContext);
    if (!ctx) return null;
    const { addTask } = ctx;


    const handleAdd = () => {
        addTask( title, date );
        setTitle("");
        setDate("");
    };

    return(
    <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="border border-gray-300 rounded p-4 w-150">
            <h1 className="font-bold mb-3">Task Input</h1>    

            <h1 className="mb-2">Task</h1>
                <input
                    name="tsk_title"
                    type="text"
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                    placeholder="タスク"
                    className="border border-gray-300 rounded p-2 w-100 mb-6"
                />

            <h1 className="mb-2">Red Line</h1>
                <input 
                    name="tsk_date"
                    type="date"
                    value={ date }
                    onChange={ (e) => setDate(e.target.value) }
                    placeholder="XXXX-YY-ZZ"
                    className="border border-gray-300 rounded p-2 w-100 mb-6"
                />

            <button
                className="block border border-gray-300 p-3 rounded hover:bg-gray-200"
                onClick={ handleAdd }
            >
                Add
            </button>
        </div>
    </div>
    );
}