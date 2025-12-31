//複数のページで使用されるclassNameの指定をするファイル

//ヘッダーとサイドバーを除いた内側(PC)
export const headerInner_className = "fixed top-16 left-64 flex justify-center";
//ヘッダーとサイドバーを除いた内側(スマホ)
export const headerInnerChgSixe_className = "fixed top-16 flex justify-center";

//サイドバーを含んだセンター位置(PC)
export const headerInnerCenter_className =
  "fixed top-40 left-64 w-[calc(100%-16rem)] flex justify-center";
//サイドバーを含んだセンター位置(スマホ)
export const headerInnerCenterChgSize_className =
  "fixed top-60 left-1/2 -translate-x-1/2 flex justify-center";

//タスクボックス(スマホ)
export const taskBox_className =
  "w-100 p-4 h-[410px] border rounded border-gray-300";
//タスクボックス(PC)
export const taskBoxChgSize_className =
  "w-[400px] p-4 h-[410px] border rounded border-gray-300";
//タスクボックス-大きいサイズ(PC)
export const taskBoxBig_className =
  "w-150 p-4 h-[600px] border rounded border-gray-300";
//タスクボックス-大きいサイズ(スマホ)
export const taskBoxBigChgSize_className =
  "w-[480px] p-4 h-[510px] border rounded border-gray-300";

//ログインタスクボックス(PC)
export const LoginBox_className =
  "w-150 p-4 h-[310px] border rounded border-gray-300";
//ログインタスクボックス(スマホ)
export const LoginBoxChgSize_className =
  "w-100 p-4 h-[310px] border rounded border-gray-300";
//サインアップボックス(PC)
export const signUpBox_className =
  "w-150 p-4 h-[510px] border rounded border-gray-300";
//サインアップボックス(スマホ)
export const signUpBoxChgSize_className =
  "w-100 p-4 h-[510px] border rounded border-gray-300";

//タスク表示(PC)
export const taskOutput_taskDisplayArea_className =
  "flex items-center justify-between w-110 px-4 my-2 rounded hover:bg-gray-200";
//タスク表示(スマホ)
export const taskOutput_taskDisplayAreaChgSize_className =
  "flex items-center justify-between w-80 px-4 my-2 rounded hover:bg-gray-200";

export const taskOutput_deleteButton_className =
  "flex flex-col items-center justify-center w-20 rounded hover:bg-red-200";
export const taskOutput_updateButton_className =
  "flex flex-col items-center justify-center w-20 rounded hover:bg-green-200";

export const taskInputButton_className =
  "block p-3 w-25 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";
export const logButton_className =
  "block p-3 w-25 text-white font-bold rounded bg-gray-600 hover:bg-gray-400";

export const input_className = "w-90 p-2 mb-6 border rounded border-gray-300";

export const inputChgSize_className =
  "w-90 p-2 mb-6 border rounded border-gray-300";
