"use client";

import { useTasks } from "./tsk_parent";
import Image from "next/image";
import {
  taskOutput_deleteButton_className,
  headerInnerCenterBase_className,
  headerInnerCenterLg_className,
  taskBoxBigBase_className,
  taskBoxBigLg_className,
  taskBoxBigMd_className,
  taskOutput_taskDisplayBase_className,
  taskOutput_taskDisplayLg_className,
  taskOutput_taskDisplayMd_className,
  overflowBase_className,
  overflowLg_className,
  overflowMd_className,
} from "@/app/className";
import { useAuth } from "../Auth/AuthContext";
import { useTaskFilter } from "../common/useTaskFilter";
import { SelectTaskFilter } from "../common/slectTaskFilter";
import { useState } from "react";
import { useTaskSort } from "../common/useTaskSort";
import { allFileterOption, sortOptions } from "../common/taskOption";

//タスクを全て表示するコンポーネント
export default function Tsk_Output_AllList() {
  const { tasks, deleteTask } = useTasks();
  const { user } = useAuth();

  //タスク完了画像
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

  //フィルターにかけたタスク
  const { tsk_filter, setTaskFilter, output_filtered_tsks } =
    useTaskFilter(login_user_tsks);

  const [sortValue, setSortValue] = useState("");
  //フィルターにかけたタスクをさらに、ソートする
  const output_filtered_sort_tsks = useTaskSort(
    output_filtered_tsks,
    sortValue
  );

  //タスクが多く保存された時の表示方法を考える
  return (
    <div className="flex">
      <div
        className={`
        ${headerInnerCenterBase_className}
        ${headerInnerCenterLg_className}
        `}
      >
        <div
          className={`
          ${taskBoxBigBase_className}
          ${taskBoxBigLg_className}
          ${taskBoxBigMd_className}
          `}
        >
          <h1 className="font-bold mb-3">すべてのタスクリスト</h1>

          <div className="flex flex-col h-10 md:flex-row mb-0">
            <div className="flex items-center">
              <h1 className="w-16 md:w-16 me-2 whitespace-nowrap">絞り込み:</h1>

              <SelectTaskFilter
                value={tsk_filter}
                options={allFileterOption}
                onChange={setTaskFilter}
              />
            </div>

            <div className="flex items-center md:ml-8">
              <h1 className="w-16 md:w-16 mr-2 whitespace-nowrap">並び替え:</h1>

              <SelectTaskFilter
                value={sortValue}
                options={sortOptions}
                onChange={setSortValue}
              />
            </div>
            {/*
          <div className="flex items-center ml-20 hrounded hover:bg-gray-200">
            <button>
              <Image src="/search.svg" alt="search" width={30} height={30} />
            </button>
          </div>
          */}
          </div>

          <div
            className={`
              ${overflowBase_className}
              ${overflowLg_className}
              ${overflowMd_className}
              `}
          >
            {output_filtered_sort_tsks.length === 0 ? (
              <p>登録されているタスクはありません。</p>
            ) : (
              //タスクがある場合
              output_filtered_sort_tsks.map((task) => (
                <div key={task.id} className="flex">
                  <div className="flex">
                    <div className="flex items-center justify-center w-10 h-15">
                      <p>{task.comp ? completedIcon : ""}</p>
                    </div>
                    <div
                      className={`
                        ${taskOutput_taskDisplayBase_className}
                        ${taskOutput_taskDisplayLg_className}
                        ${taskOutput_taskDisplayMd_className}
                        `}
                    >
                      <div className="w-70">
                        <p className="font-semibold">{task.tsk_title}</p>
                        <p className="text-sm text-gray-700">
                          {task.dead_line}
                        </p>
                        <p className="text-sm text-gray-700">{task.priority}</p>
                      </div>
                    </div>

                    <div className={taskOutput_deleteButton_className}>
                      <button onClick={() => deleteTask(task.id)}>
                        <Image
                          className="mt-1"
                          src="/trash.svg"
                          alt="delete"
                          width={24}
                          height={24}
                        />
                      </button>
                      <p className="text-xs mt-1">削除</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
