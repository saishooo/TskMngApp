export interface Tasks{
    id: number;             //id
    comp: boolean;          //達成 or 未達
    tsk_title: string;       //タスク
    date: string;           //期日
}


//TypeScriptの型（タイプ）を定義している
//Propsという名前の型を定義した
export interface Tsk_Props{
    tasks: Tasks[];     //Tasks型()の配列 id,comp,tsk_title,dateの形
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;    //Tasks[]の更新を行う関数
}