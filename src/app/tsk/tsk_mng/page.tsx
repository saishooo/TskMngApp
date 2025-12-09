"use client";

import { tsk_data } from "../../tsk_data/tsk_data";
import { useState } from "react";

export default function Tsk_Management() {
  const [tasks, setTasks] = useState(tsk_data);

  //達成・未達を切り替える関数
  const handleChange =(id: number, value: boolean) =>{
    setTasks(tasks.map(t =>
      t.id === id ? {...t, comp: value} : t
    ));
  };

  return (
      <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="border border-gray-300 rounded p-4 w-150">
          <h1 className="font-bold mb-3">My Task</h1>    

            {tasks.map((task) => (
              <div key={task.id} className="flex w-full hover:bg-gray-200 rounded px-4">
                <input
                  type="radio"
                  value="false"
                  checked={task.comp === false}
                  onChange={() => handleChange(task.id, false)}
                  />
                
                <input
                  type="radio"
                  value="true"
                  checked={task.comp === true}
                  onChange={() => handleChange(task.id, true)}
                  />
                  <div className="pl-4 my-2">
                    <p className="font-semibold">{task.tsk_title}</p>
                    <p className="text-sm text-gray-700">{task.date}</p>
                  </div>

                  <p>select : {task.comp? "達成":"未達"}</p>
              </div>
            ))}
        </div>
      </div>
  );
}