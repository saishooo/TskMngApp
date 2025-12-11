"use client";

import { createContext, useContext, useState } from "react";
import { Tasks } from "@/app/types";                  //Tasksの型を引き継ぐ


export interface Tsk_Props{
    tasks: Tasks[];
    addTask: (tsk_title: string, date: string) => void;
    toggleTask: (id: number)     => void;
}

export const TaskContext = createContext<Tsk_Props | null>(null);

export default function Tsk_Parent( {children} : { children: React.ReactNode}) {
  const [tasks, setTasks] = useState<Tasks[]>([
    {
        id: 1,
        comp: false,
        tsk_title: "プログラミング(初期値)",
        date: "2025-12-06-00:06:00",
    }
  ]);

  const addTask = (tsk_title: string, date: string) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), comp: false, tsk_title, date},
    ]);
  };

  const toggleTask = (id: number) =>{ 
    setTasks((prev) => 
      prev.map((t) =>
        t.id === id ? { ...t, comp: !t.comp } : t
      )
    );
  };

  return(
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

// saito
//エラーを返す関数？
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used inside TaskContextProvider");
  }
  return context;
};