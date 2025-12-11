"use client";

import { useState, useEffect } from "react";
import { tsk_data } from "../../tsk_data/tsk_data";   //初期値が入っているタスクデータ
import { Tasks } from "@/app/types";                  //Tasksの型を引き継ぐ

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

  useEffect(() => {
    //[ localStrage ]とはブラウザに保存されているデータ
    //[ getItem("XXX") ] "XXX"で保存されているデータがあればJSONテキスト形式で返却される
    const saved = localStorage.getItem("tasks");
    if (saved) {
        //[ JSON.parse() ] JSONテキストを配列の形に変化する
        const parsed = JSON.parse(saved);

        //[ Array.isArray() ] は配列かどうか確認する
        setTasks(Array.isArray(parsed) ? parsed : []);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //受け取った関数にtasks,setTasksを渡して、実行する
  return children( { tasks, setTasks} );
}