"use client";

import { useState, useEffect } from "react";
import { tsk_data, Tasks } from "../../tsk_data/tsk_data";
import Tsk_Input from "./tsk_input";

export default function Parent() {
  const [tasks, setTasks] = useState<Tasks[]>(tsk_data || []);

  // localStorage から復元
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        const parsed = JSON.parse(saved);
        setTasks(Array.isArray(parsed) ? parsed : []);
    }
  }, []);

  // tasks が変わるたび保存
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Tsk_Input tasks={tasks} setTasks={setTasks} />
    </div>
  );
}