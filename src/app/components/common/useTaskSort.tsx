"use client";

import { Tasks } from "@/app/types";

export const useTaskSort = (tasks: Tasks[], sortKey: string) => {
  let priorityMap: any = { high: 3, medium: 2, low: 1 };

  switch (sortKey) {
    case "Priority-ZXY":
      return [...tasks].sort(
        (a, b) =>
          (priorityMap[b.priority] || 0) - (priorityMap[a.priority] || 0)
      );
    case "Priority-ABC":
      return [...tasks].sort(
        (a, b) =>
          (priorityMap[a.priority] || 0) - (priorityMap[b.priority] || 0)
      );
    default:
      return tasks;
  }
};
