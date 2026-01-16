import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "todos.db");

export const db = new Database(dbPath);

//起動時にテーブル作成をする
db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    comp INTRGER DEFAULT 0,
    tsk_title TEXT NOT NULL,
    dead_line TEXT,
    priority TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    user_id TEXT NOT NULL
    );
    `);
