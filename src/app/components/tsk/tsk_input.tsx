"use client";

import { useState } from "react";
import { Tasks } from "../../tsk_data/tsk_data";


//TypeScriptの型（タイプ）を定義している
//Propsという名前の型を定義した
interface Props{
    tasks: Tasks[];     //Tasks型()の配列 id,comp,tsk_title,dateの形
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;    //Tasks[]の更新を行う関数
}

//[ {tasks, setTasks}:Props ]→Props型のtasks,setTasksを引数として受け取る
export default function Tsk_Input({ tasks, setTasks }: Props){
    const [form,  setForm]  = useState({tsk_title: "", tsk_date: "" });

    //引数eをany型にする
    //[ e ] event情報を受け取る
    //formに変化した値をセットする
    const handleChange = ( e: any ) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const addTask = () => {
        setTasks([
            ...tasks,
            {
                id: tasks.length+1,
                comp: false,
                tsk_title: form.tsk_title,
                date: form.tsk_date,
            },
        ]);

        setForm({tsk_title: "", tsk_date: ""});
    }

    return(
    <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="border border-gray-300 rounded p-4 w-150">
            <h1 className="font-bold mb-3">Task Input</h1>    

            <h1 className="mb-2">Task</h1>
                <input
                    name="tsk_title"
                    type="text"
                    value={form.tsk_title}
                    onChange={handleChange}
                    placeholder="タスク"
                    className="border border-gray-300 rounded p-2 w-100 mb-6"
                />

            <h1 className="mb-2">Red Line</h1>
                <input 
                    name="tsk_date"
                    type="date"
                    value={form.tsk_date}
                    onChange={handleChange}
                    placeholder="XXXX-YY-ZZ"
                    className="border border-gray-300 rounded p-2 w-100 mb-6"
                />

            <button
                className="block border border-gray-300 p-3 rounded hover:bg-gray-200"
                onClick={addTask}
            >
                Add
            </button>

            <p>タイトル: {form.tsk_title}</p>
            <p>日時: {form.tsk_date}</p>

            {tasks.map((task)=>(
                <div key={task.id} className="flex w-full hover:bg-gray-200 rounded px-4">
                    <p className="font-semibold">{task.tsk_title}</p>
                </div>
            ))}

        </div>
    </div>
    );
}