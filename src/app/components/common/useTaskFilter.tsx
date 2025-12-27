"use client";

import { useState } from "react";
import { Tasks } from "@/app/types";

export const useTaskFilter = (tasks: Tasks[]) => {
  const [tsk_filter, setTaskFilter] = useState("");

  const output_filtered_tsks = tasks.filter((task) => {
    if (tsk_filter === "Priority-high") {
      return task.priority === "high";
    } else if (tsk_filter === "Priority-medium") {
      return task.priority === "medium";
    } else if (tsk_filter === "Priority-low") {
      return task.priority === "low";
    } else if (tsk_filter === "Task-completed") {
      return task.comp === true;
    } else if (tsk_filter === "Task-incomplete") {
      return task.comp === false;
    }
    return true; //何も選択されていない時(select)
  });

  return {
    tsk_filter,
    setTaskFilter,
    output_filtered_tsks,
  };
};
