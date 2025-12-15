"use client";

import { createContext, useContext, useState } from "react";
import { Tasks } from "@/app/types";                  //Tasksの型を引き継ぐ

//contextに渡すデータの型
//下記のcreateContextで使用
export interface Tsk_Props{
    tasks: Tasks[];
    addTask: ( tsk_title: string, dead_line: string ) => void;
    deleteTask: ( id: number )     => void;
    toggleTask: ( id: number )     => void;
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
        dead_line: "2025-12-06-00:06:00",
        createdAt: "2025-12-06-00:06:00",
        updatedAt: "2025-12-06-00:06:00",
    }
  ]);

  //タスク追加関数
  const addTask = (tsk_title: string, dead_line: string) => {
    //prevとはsetTasksに渡される前のtasksの中身
    //prevについてもう少し詳しくあとで調べる
    const now = new Date().toISOString();

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), 
        comp: false, 
        tsk_title, 
        dead_line, 
        createdAt: now,
        updatedAt: now,
      },
    ]);
  };

  //タスクを削除する関数
  const deleteTask = (id: number) => {
    //指定されたid以外を格納し直す
    setTasks((prev) =>
      prev.filter( task => task.id !== id))
  };

  //実行済み・未実行を切り替える関数
  const toggleTask = (id: number) =>{ 
    setTasks((prev) => 
      prev.map((t) =>
        t.id === id ? { ...t, comp: !t.comp } : t
      )
    );
  };

/* [ value={{ tasks, addTask, toggleTask }} ] valueはtasks,addTaskなどをchildrenに渡す */
  return(
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

//TaskContextに格納されたデータをcontext変数に格納し、戻り値とする
export const useTasks = () => {
  // [ useContext ] Providerに保存された値を取り出す
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used inside TaskContextProvider");
  }
  return context;
};