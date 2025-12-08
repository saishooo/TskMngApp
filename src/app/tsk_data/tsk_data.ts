export interface Tasks{
    id: number;             //id
    comp: boolean;          //達成 or 未達
    tsk_data: string;       //タスク
    date: string;           //期日
}

export const tsk_data: Tasks[]=[
    {
        id:1,
        comp: false,
        tsk_data:"プログラミング",
        date: "2025-12-09-20:00:00",
    }
];