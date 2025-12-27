"use client";

import { Tasks } from "@/app/types";

export const useTaskSort = (tasks: Tasks[], sortKey: string) => {
  let priorityMap: any = { high: 3, medium: 2, low: 1 };

  switch (sortKey) {
    case "Priority-high":
      return [...tasks].sort(
        (a, b) =>
          (priorityMap[b.priority] || 0) - (priorityMap[a.priority] || 0)
      );
    case "Priority-low":
      return [...tasks].sort(
        (a, b) =>
          (priorityMap[a.priority] || 0) - (priorityMap[b.priority] || 0)
      );
    case "DeadLine-earlier":
      return [...tasks].sort(
        (a, b) =>
          new Date(a.dead_line).getTime() - new Date(b.dead_line).getTime()
      );
    case "DeadLine-later":
      return [...tasks].sort(
        (a, b) =>
          new Date(b.dead_line).getTime() - new Date(a.dead_line).getTime()
      );

    default:
      return tasks;
  }
};
