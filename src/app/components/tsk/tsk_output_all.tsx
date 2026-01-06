"use client";

import { useTasks } from "./tsk_parent";
import Image from "next/image";
import {
  headerInnerCenter_className,
  taskBoxBig_className,
  taskOutput_taskDisplayArea_className,
  taskOutput_deleteButton_className,
  headerInnerCenterTablet_className,
  headerInnerCenterSmartphone_className,
  taskBoxBigTablet_className,
  taskBoxBigSmartphone_className,
  taskOutput_taskDisplayAreaSmartphone_className,
  taskOutput_taskDisplayAreaTablet_className,
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
    <>
      {/* Desktop(PC)サイズ時 横幅がlg以上で表示 */}
      <div className="hidden lg:flex">
        <div className={headerInnerCenter_className}>
          <div className={taskBoxBig_className}>
            <h1 className="font-bold mb-3">My All Tasks</h1>

            <div className="flex items-center h-10">
              <div className="flex items-center">
                <h1 className="me-2">Filter :</h1>

                <SelectTaskFilter
                  value={tsk_filter}
                  options={allFileterOption}
                  onChange={setTaskFilter}
                />
              </div>

              <div className="flex items-center ml-8">
                <h1 className="mr-2">Sorte :</h1>

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

            <div className="pt-3 overflow-y-auto max-h-[490px]">
              {output_filtered_sort_tsks.length === 0 ? (
                <p>No tasks have been registered.</p>
              ) : (
                //タスクがある場合
                output_filtered_sort_tsks.map((task) => (
                  <div key={task.id} className="flex">
                    <div className="flex">
                      <div className="flex items-center justify-center w-10 h-15">
                        <p>{task.comp ? completedIcon : ""}</p>
                      </div>
                      <div className={taskOutput_taskDisplayArea_className}>
                        <div className="w-70">
                          <p className="font-semibold">{task.tsk_title}</p>
                          <p className="text-sm text-gray-700">
                            {task.dead_line}
                          </p>
                          <p className="text-sm text-gray-700">
                            {task.priority}
                          </p>
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
                        <p className="text-xs mt-1">delete</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile(タブレット)サイズ時 横幅がmd以上で表示、lg以下で非表示 */}
      <div className="hidden md:block lg:hidden">
        <div className={headerInnerCenterTablet_className}>
          <div className={taskBoxBigTablet_className}>
            <h1 className="font-bold mb-3">My All Tasks</h1>

            <div className="flex items-center h-10">
              <div className="flex items-center">
                <h1 className="me-2">Filter :</h1>

                <SelectTaskFilter
                  value={tsk_filter}
                  options={allFileterOption}
                  onChange={setTaskFilter}
                />
              </div>

              <div className="flex items-center ml-8">
                <h1 className="mr-2">Sorte :</h1>

                <SelectTaskFilter
                  value={sortValue}
                  options={sortOptions}
                  onChange={setSortValue}
                />
              </div>
            </div>

            <div className="pt-3 overflow-y-auto max-h-[400px]">
              {output_filtered_sort_tsks.length === 0 ? (
                <p>No tasks have been registered.</p>
              ) : (
                //タスクがある場合
                output_filtered_sort_tsks.map((task) => (
                  <div key={task.id} className="flex">
                    <div className="flex">
                      <div className="flex items-center justify-center w-10 h-15">
                        <p>{task.comp ? completedIcon : ""}</p>
                      </div>
                      <div
                        className={taskOutput_taskDisplayAreaTablet_className}
                      >
                        <div className="w-70">
                          <p className="font-semibold">{task.tsk_title}</p>
                          <p className="text-sm text-gray-700">
                            {task.dead_line}
                          </p>
                          <p className="text-sm text-gray-700">
                            {task.priority}
                          </p>
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
                        <p className="text-xs mt-1">delete</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile(スマホ)サイズ時 横幅がmd以上になったら非表示 */}
      <div className="block md:hidden">
        <div className={headerInnerCenterSmartphone_className}>
          <div className={taskBoxBigSmartphone_className}>
            <h1 className="font-bold mb-3">My All Tasks</h1>

            <div className="flex flex-col h-10 mb-4">
              <div className="flex items-center">
                <h1 className="w-16">Filter :</h1>
                <SelectTaskFilter
                  value={tsk_filter}
                  options={allFileterOption}
                  onChange={setTaskFilter}
                />
              </div>

              <div className="flex items-center">
                <h1 className="w-16">Sorte :</h1>

                <SelectTaskFilter
                  value={sortValue}
                  options={sortOptions}
                  onChange={setSortValue}
                />
              </div>
            </div>

            <div className="pt-3 overflow-y-auto max-h-[400px]">
              {output_filtered_sort_tsks.length === 0 ? (
                <p>No tasks have been registered.</p>
              ) : (
                //タスクがある場合
                output_filtered_sort_tsks.map((task) => (
                  <div key={task.id} className="flex">
                    <div className="flex">
                      <div className="flex items-center justify-center w-10 h-15">
                        <p>{task.comp ? completedIcon : ""}</p>
                      </div>
                      <div
                        className={
                          taskOutput_taskDisplayAreaSmartphone_className
                        }
                      >
                        <div>
                          <p className="font-semibold">{task.tsk_title}</p>
                          <p className="text-sm text-gray-700">
                            {task.dead_line}
                          </p>
                          <p className="text-sm text-gray-700">
                            {task.priority}
                          </p>
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
                        <p className="text-xs mt-1">delete</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
