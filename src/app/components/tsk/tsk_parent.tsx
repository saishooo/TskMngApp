"use client";

import { createContext, useContext, useState } from "react";
import { Tasks } from "@/app/types";                  //Tasksの型を引き継ぐ

//contextに渡すデータの型
//下記のcreateContextで使用
export interface Tsk_Props{
    tasks: Tasks[];
    addTask: ( tsk_title: string, dead_line: string ) => void;
    updateTask: ( id: number, newTitle: string, newDeadLine:string ) => void;
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

// Context 作成（初期値 null）
//Contextは共有できるデータの箱
//Providerとはその箱の中身を入れ、アプリ全体に配る
export default function Tsk_Parent( {children} : { children: React.ReactNode}) {
  //タスクの初期値として登録
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
  const addTask = ( tsk_title: string, dead_line: string ) => {
    const nowTime = new Date().toISOString();

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), 
        comp: false, 
        tsk_title, 
        dead_line, 
        createdAt: nowTime,
        updatedAt: nowTime,
      },
    ]);
  };

  //タスクの名前や期限をアップデート関数
  const updateTask = ( id: number, newTitle: string, newDeadLine: string ) => {
    const nowTime = new Date().toISOString();

    setTasks(prev =>
      prev.map(task =>
        task.id === id
        ? { ...task, tsk_title: newTitle, dead_line: newDeadLine,updatedAt: nowTime }
        : task
      )
    );
  };

  //タスクを削除する関数
  const deleteTask = ( id: number ) => {
    //指定されたid以外を格納し直す
    setTasks((prev) =>
      prev.filter( task => task.id !== id))
  };

  //実行済み・未実行を切り替える関数
  const toggleTask = ( id: number ) =>{ 
    const nowTime = new Date().toISOString();

    setTasks((prev) => 
      prev.map((task) =>
        task.id === id ? { ...task, comp: !task.comp, updatedAt: nowTime} : task
      )
    );
  };

/* [ value={{ tasks, addTask, toggleTask }} ] valueはtasks,addTaskなどをchildrenに渡す */
  return(
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleTask }}>
      { children }
    </TaskContext.Provider>
  );
}

//TaskContextに格納されたデータをcontext変数に格納し、戻り値とする
export const useTasks = () => {
  // [ useContext ] Providerに保存された値を取り出す
  const context = useContext( TaskContext );
  if ( !context ) {
    throw new Error("useTasks must be used inside TaskContextProvider");
  }
  return context;
};