"use client";

import { useState, useEffect } from "react";
import { tsk_data, Tasks } from "../../tsk_data/tsk_data";

//saito childlrenの意味は？　 {children} : any
export default function Parent( {children} : any) {
  const [tasks, setTasks] = useState<Tasks[]>(tsk_data || []);

  //saito localStorage から復元
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        const parsed = JSON.parse(saved);
        //saito 
        setTasks(Array.isArray(parsed) ? parsed : []);
    }
  }, []);

  // tasks が変わるたび保存
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //saito children関数の意味
  return children( { tasks, setTasks} );
}