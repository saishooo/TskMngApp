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

export default function Tsk_Output_AllList() {
  const { tasks, deleteTask, } = useTasks();
  const { user } = useAuth();

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
  const all_user_tsk = tasks.filter((task) => task.user_id === user.user_id);

  //タスクが多く保存された時の表示方法を考える
  return (
    <div className={headerInnerClass_center}>
      <div className={taskBoxBig}>
        <h1 className="font-bold mb-3">My All Tasks</h1>
        <div className="pt-3 overflow-y-auto max-h-[530px]">
          {all_user_tsk.length === 0 ? (
            <p>No tasks have been registered.</p>
          ) : (
            all_user_tsk.map((task) => (
              <div key={task.id} className="flex">
                  <div className="flex">
                    <div className="flex items-center justify-center w-10 h-15">
                      <p>{task.comp ? completedIcon : ""}</p>
                    </div>
                    <div className={taskOutput_taskDisplayArea}>
                      <div className="w-70">
                        <p className="font-semibold">{task.tsk_title}</p>
                        <p className="text-sm text-gray-700">
                          {task.dead_line}
                        </p>
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
