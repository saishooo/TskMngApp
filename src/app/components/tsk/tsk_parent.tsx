"use client";

import { useState, useEffect } from "react";
import { tsk_data } from "../../tsk_data/tsk_data";
import { Tasks } from "@/app/types";

//[ {children}:any ]は引数である
//anyは型の宣言, childrenはany型
//childrenはコンポネートの中に書かれた要素を受け取る
//childrenとは、<Tsk_Parent>で囲われた中のもの

//Tsk_Parentでtasks,setTasksを生成する
//Tsk_Parentはchildren関数を受け取る
export default function Tsk_Parent( {children} : any) {
  /* useState<Tasks[]>(tsk_data || []) */
  /* Tasks[]の配列を持ち、tsk_dataがあれば、tsk_dataを配列へ、そうでなければ空配列にする */
  const [tasks, setTasks] = useState<Tasks[]>(tsk_data || []);

  //saito
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        const parsed = JSON.parse(saved);
  //saito 
        setTasks(Array.isArray(parsed) ? parsed : []);
    }
  }, []);

  //saito
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //受け取った関数にtasks,setTasksを渡して、実行する
  return children( { tasks, setTasks} );
}