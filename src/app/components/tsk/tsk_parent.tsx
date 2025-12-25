"use client";

import { createContext, useContext, useState } from "react";
import { Tasks } from "@/app/types"; //Tasksの型を引き継ぐ

//contextに渡すデータの型
//下記のcreateContextで使用
export interface Tsk_Props {
  tasks: Tasks[];
  addTask: (
    tsk_title: string,
    dead_line: string,
    priority: string,
    user_id: string
  ) => void;
  updateTask: (
    id: number,
    newTitle: string,
    newDeadLine: string,
    newPriority: string
  ) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export const TaskContext = createContext<Tsk_Props | null>(null);

export default function Tsk_Parent({
  children,
}: {
  children: React.ReactNode;
}) {
  //タスクの初期値として登録
  const [tasks, setTasks] = useState<Tasks[]>([
    {
      id: 1,
      comp: false,
      tsk_title: "プログラミング(sample)",
      dead_line: "2025-12-06-00:06:00",
      priority: "high",
      createdAt: "2025-12-06-00:06:00",
      updatedAt: "2025-12-06-00:06:00",
      user_id: "sai.shooo",
    },
    {
      id: 2,
      comp: false,
      tsk_title: "リファクタリング",
      dead_line: "2025-12-22-22:28:00",
      priority: "medium",
      createdAt: "2025-12-22-22:28:00",
      updatedAt: "2025-12-22-22:28:00",
      user_id: "user2",
    },
  ]);

  //タスク追加関数
  const addTask = (
    tsk_title: string,
    dead_line: string,
    priority: string,
    user_id: string
  ) => {
    const nowTime = new Date().toISOString();

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        comp: false,
        tsk_title,
        dead_line,
        priority,
        createdAt: nowTime,
        updatedAt: nowTime,
        user_id,
      },
    ]);
  };

  //タスクの名前や期限をアップデート関数
  const updateTask = (
    id: number,
    newTitle: string,
    newDeadLine: string,
    newPriority: string
  ) => {
    const nowTime = new Date().toISOString();

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              tsk_title: newTitle,
              dead_line: newDeadLine,
              priority: newPriority,
              updatedAt: nowTime,
            }
          : task
      )
    );
  };

  //タスクを削除する関数
  const deleteTask = (id: number) => {
    //指定されたid以外を格納し直す
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  //実行済み・未実行を切り替える関数
  const toggleTask = (id: number) => {
    const nowTime = new Date().toISOString();

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, comp: !task.comp, updatedAt: nowTime }
          : task
      )
    );
  };

  /* [ value={{ tasks, addTask, toggleTask }} ] valueはtasks,addTaskなどをchildrenに渡す */
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, toggleTask }}
    >
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
