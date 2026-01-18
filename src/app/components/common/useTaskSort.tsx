//タスクの並び替えを行うファイル

"use client";

import { Tasks } from "@/app/types";

//タスクの並び替えを行う関数
//バグ防止のため、コピーして表示するよ
export const useTaskSort = (tasks: Tasks[], sortKey: string) => {
  let priorityMap: any = { high: 3, medium: 2, low: 1 };

  switch (sortKey) {
    //優先度が高いものから順に表示　high→medium→low
    case "Priority-high":
      return [...tasks].sort(
        (a, b) =>
          (priorityMap[b.priority] || 0) - (priorityMap[a.priority] || 0)
      );
    //優先度が低いものから順に表示　low→medium→high
    case "Priority-low":
      return [...tasks].sort(
        (a, b) =>
          (priorityMap[a.priority] || 0) - (priorityMap[b.priority] || 0)
      );
    //期日が早いものから順に表示
    case "DeadLine-earlier":
      return [...tasks].sort(
        (a, b) =>
          new Date(a.dead_line).getTime() - new Date(b.dead_line).getTime()
      );
    //期日が遅いものから順に表示
    case "DeadLine-later":
      return [...tasks].sort(
        (a, b) =>
          new Date(b.dead_line).getTime() - new Date(a.dead_line).getTime()
      );
    //上記以外の場合(何もしない)
    default:
      return tasks;
  }
};
