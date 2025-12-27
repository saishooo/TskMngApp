"use client";

import { useTasks } from "./tsk_parent";
import Image from "next/image";
import {
  headerInnerClass_center,
  taskOutput_taskDisplayArea,
  taskOutput_deleteButton,
  taskBoxBig,
} from "@/app/className";
import { useAuth } from "../log/AuthContext";
import { useState } from "react";

export default function Tsk_Output_AllList() {
  const { tasks, deleteTask } = useTasks();
  const { user } = useAuth();

  const [tsk_filter, setTaskFilter] = useState("");

  const completedIcon = (
    <Image
      className="mt-1"
      src="/checked.svg"
      alt="Completed"
      width={24}
      height={24}
    />
  );

  //ログインしているユーザーID別にタスクを吸い上げ
  const login_user_tsks = tasks.filter((task) => task.user_id === user.user_id);

  //表示するタスクをfilterにかける
  const output_tsks = login_user_tsks.filter((task) => {
    if (tsk_filter === "Priority-high") {
      return task.priority === "high";
    } else if (tsk_filter === "Priority-medium") {
      return task.priority === "medium";
    } else if (tsk_filter === "Priority-low") {
      return task.priority === "low";
    }
    return true; //何も選択されていない時(select)
  });

  //絞り込み関数
  const handleFileterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTaskFilter(e.target.value);
    //setTaskFileterが動くことによって、
    //ページ全体が再レタリングされることによって、
    //output_tsksが書き換わる。
  };

  //タスクが多く保存された時の表示方法を考える
  return (
    <div className={headerInnerClass_center}>
      <div className={taskBoxBig}>
        <h1 className="font-bold mb-3">My All Tasks</h1>

        <div className="inline-flex items-center h-10">
          <h1>Filter :</h1>
          <select
            name="tsk_filter"
            value={tsk_filter}
            onChange={handleFileterChange}
            className="ml-3"
          >
            <option value="">select</option>
            <option value="Priority-high">Priority-high</option>
            <option value="Priority-medium">Priority-medium</option>
            <option value="Priority-low">Priority-low</option>
          </select>
        </div>

        <div className="pt-3 overflow-y-auto max-h-[490px]">
          {output_tsks.length === 0 ? (
            <p>No tasks have been registered.</p>
          ) : (
            output_tsks.map((task) => (
              <div key={task.id} className="flex">
                <div className="flex">
                  <div className="flex items-center justify-center w-10 h-15">
                    <p>{task.comp ? completedIcon : ""}</p>
                  </div>
                  <div className={taskOutput_taskDisplayArea}>
                    <div className="w-70">
                      <p className="font-semibold">{task.tsk_title}</p>
                      <p className="text-sm text-gray-700">{task.dead_line}</p>
                      <p className="text-sm text-gray-700">{task.priority}</p>
                    </div>
                  </div>

                  <div className={taskOutput_deleteButton}>
                    <button onClick={() => deleteTask(task.id)}>
                      <Image
                        className="mt-1"
                        src="/trash.svg"
                        alt="delete"
                        width={24}
                        height={24}
                      />
                    </button>
                    <p className="text-xs mt-1">delete</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
