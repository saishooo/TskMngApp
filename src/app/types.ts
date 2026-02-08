//複数のファイルで使用する型の宣言をするファイル

export interface Tasks {
  id: number; //id
  comp: boolean; //達成 or 未達
  tsk_title: string | null; //タスク
  dead_line: string | null; //期日
  priority: string | null; //優先度
  createdAt: string | null; //追加日
  updatedAt: string | null; //更新日
  user_id: string | null; //ユーザーID
}

export interface AuthUser {
  user_id: string; //ユーザーID
  user_password: string; //ユーザーパスワード
  user_name: string; //ユーザーネーム
}

export interface User {
  user_id: string; //ユーザーID
  user_password: string; //ユーザーパスワード
  user_name: string; //ユーザーネーム
}
