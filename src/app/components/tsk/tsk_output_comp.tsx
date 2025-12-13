"use client";

import { useTasks } from "./tsk_parent";
import Image from "next/image";

export default function Tsk_Output_Completed() {
  const { tasks, deleteTask, toggleTask } = useTasks();

  const completed_tsk = tasks.filter( task => task.comp === true);
  
  return (
      <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="border border-gray-300 rounded p-4 w-150">
          <h1 className="font-bold mb-3">Completed Tsk</h1>    

            { completed_tsk.length === 0 ? (
                <p>完了タスクはありません</p>
            ) : (
            completed_tsk.map(task => (
                <div key={task.id} className="flex">
                    <div className="flex rounded hover:bg-gray-200 px-4 w-130 h-15">
                        <input
                        type="radio"
                        value="false"
                        checked={task.comp === false }
                        onChange={() => toggleTask(task.id)}
                        />
                        <div className="pl-4 my-2">
                            <p className="font-semibold">{task.tsk_title}</p>
                            <p className="text-sm text-gray-700">{task.date}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-20 rounded hover:bg-red-200">
                        <button
                        onClick={() => deleteTask(task.id)}
                        >
                        <Image className="mt-1" src="/trash.svg" alt="menu" width={24} height={24} />
                        </button>
                        <p className="text-xs mt-1">削除</p>
                    </div>
                </div>
                ))
            )}
        </div>
      </div>
  );
}