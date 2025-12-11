"use client";

import { createContext, useContext, useState } from "react";
import { Tasks } from "@/app/types";                  //Tasksの型を引き継ぐ

//contextに渡すデータの型
//下記のcreateContextで使用
export interface Tsk_Props{
    tasks: Tasks[];
    addTask: (tsk_title: string, date: string) => void;
    toggleTask: (id: number)     => void;
}

// Context 作成（初期値 null）
//Contextは共有できるデータの箱
//Providerとはその箱の中身を入れ、アプリ全体に配る

//importした[ createContext ]を使用
//[ createContext ]関数　
//[ <Tsk_Props | null> ]　Contextにどちらかが入る
//Providerが中身を入れない限りnullが入る
//TaskContextにはTaskContextType型のデータかnullが格納される
export const TaskContext = createContext<Tsk_Props | null>(null);

// [ {children} ] 子要素を取り出す
// [ :{children: React.ReactNode} ] childrenの型をReact.ReactNodeに定義している
// React.ReacatNodeは、ほぼすべてのReactの描写可能なものを引数として許可する型
// layout.tstでTsk_Parentコンポーネントを使用
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
    //prevとはsetTasksに渡される一つ前のtasksの中身
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

/* [ value={{ tasks, addTask, toggleTask }} ] valueはtasks,addTaskなどをchildrenに渡す */
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