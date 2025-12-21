export interface Tasks{
    id: number;             //id
    comp: boolean;          //達成 or 未達
    tsk_title: string;      //タスク
    dead_line: string;      //期日
    createdAt: string;      //追加日
    updatedAt: string;      //更新日
}

export type User = {
    user_id: string;        //ユーザーID
    user_password: string;  //ユーザーパスワード
    user_name: string;      //ユーザーネーム
}