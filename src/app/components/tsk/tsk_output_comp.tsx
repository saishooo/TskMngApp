"use client";

import { useTasks } from "./tsk_parent";

export default function Tsk_Output_Completed() {
  const { tasks, toggleTask } = useTasks();

  const completed_tsk = tasks.filter( task => task.comp === true);
  
  return (
      <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="border border-gray-300 rounded p-4 w-150">
          <h1 className="font-bold mb-3">Completed Tsk</h1>    

            { completed_tsk.length === 0 ? (
                <p>完了タスクはありません</p>
            ) : (
            completed_tsk.map(task => (
                <div key={task.id} className="flex w-full hover:bg-gray-200 rounded px-4">
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
                ))
            )}
        </div>
      </div>
  );
}