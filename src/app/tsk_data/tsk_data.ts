export interface Tasks{
    id: number;             //id
    comp: boolean;          //達成 or 未達
    tsk_title: string;       //タスク
    date: string;           //期日
}

//初期値のみの表示
export const tsk_data: Tasks[]=[
    {
        id: 1,
        comp: false,
        tsk_title: "プログラミング",
        date: "2025-12-06-00:06:00",
    },
];