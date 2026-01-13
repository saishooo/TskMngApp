"use client";

import { useContext, useState } from "react";
import { TaskContext } from "./tsk_parent";
import {
  taskInputButton_className,
  headerInnerCenterBase_className,
  headerInnerCenterMd_className,
  headerInnerCenterLg_className,
  taskBoxBase_className,
  taskBoxSm_className,
  taskBoxLg_className,
  taskBoxMd_className,
  inputBase_className,
  inputLg_className,
  inputMd_className,
  headerInnerCenterSm_className,
} from "@/app/className";
import { useAuth } from "../Auth/AuthContext";

export default function Tsk_Input() {
  const [tsk_title, setTskTitle] = useState("");
  const [dead_line, setDeadLine] = useState("");
  const [priority, setPriority] = useState("");
  const { user } = useAuth();

  //ここ修正　あと意味理解必要saito
  const ctx = useContext(TaskContext);
  if (!ctx) return null;
  const { addTask } = ctx;

  //タスクを加えるローカル関数
  //↓user_idの取得方法は？　意味理解 saito
  const handleAdd = () => {
    if (!user) return;

    addTask(tsk_title, dead_line, priority, user.user_id);
    setTskTitle("");
    setDeadLine("");
  };

  return (
    <>
      {/* Desktop(PC)サイズ時 横幅がlg以上で表示*/}
      <div className="flex justify-center">
        <div className="f">
          <div
            className={`
          ${headerInnerCenterBase_className}
          ${headerInnerCenterLg_className}
          ${headerInnerCenterMd_className}
          ${headerInnerCenterSm_className}
          `}
          >
            <div
              className={`
          ${taskBoxBase_className}
          ${taskBoxLg_className}
          ${taskBoxMd_className}
          ${taskBoxSm_className}
          `}
            >
              <h1 className="mb-3 font-bold">My Task Input</h1>

              <h1 className="mb-2">Task</h1>
              <input
                name="tsk_title"
                type="text"
                value={tsk_title}
                onChange={(e) => setTskTitle(e.target.value)}
                placeholder="Task"
                className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}
                `}
              />

              <h1 className="mb-2">DeadLine</h1>
              <input
                name="tsk_dead_line"
                type="date"
                value={dead_line}
                onChange={(e) => setDeadLine(e.target.value)}
                placeholder="XXXX-YY-ZZ"
                className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}
                `}
              />

              <h1 className="mb-2">Priority</h1>
              <select
                name="tsk_priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className={`
                ${inputBase_className}
                ${inputLg_className}
                ${inputMd_className}
                `}
              >
                <option value="">Select</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <button className={taskInputButton_className} onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
