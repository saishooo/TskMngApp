//プルダウンで使用する、selectの選択内容を記したファイル

export const filterOptions = [
  { value: "Normal", label: "ノーマル" },
  { value: "Priority-high", label: "優先度高" },
  { value: "Priority-medium", label: "優先度中" },
  { value: "Priority-low", label: "優先度低" },
];

export const allFileterOption = [
  { value: "Normal", label: "ノーマル" },
  { value: "Priority-high", label: "優先度高" },
  { value: "Priority-medium", label: "優先度中" },
  { value: "Priority-low", label: "優先度低" },
  { value: "Task-completed", label: "達成済み" },
  { value: "Task-incomplete", label: "未達成" },
];

export const sortOptions = [
  { value: "Normal", label: "ノーマル" },
  { value: "Priority-high", label: "優先度(↓)" },
  { value: "Priority-low", label: "優先度(↑)" },
  { value: "DeadLine-earlier", label: "期限(早)" },
  { value: "DeadLine-later", label: "期限(遅)" },
  //{ value: "Created", label: "Created" },
  //{ value: "Updated", label: "Updated" },
];
