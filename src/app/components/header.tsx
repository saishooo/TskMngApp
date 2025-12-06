"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //menuクリック時の処理
  const menuClick = () =>{
    setSidebarOpen(!sidebarOpen);
  };

  return(
      <>
        <header className="bg-gray-600 h-16 flex items-center px-4">
          <div className="flex w-full">
            <h1 className="font-bold text-2xl text-white">Task Management</h1>
            <button 
              className="ml-auto"
              onClick={menuClick}
              >
              <Image src="/menu.svg" alt="menu" width={24} height={24} />
            </button>
          </div>
        </header>
        
        {sidebarOpen && (
          <aside className="fixed top-16 right-0 w-64 h-full bg-gray-100">
            <nav className="space-y-2">
              <Link href="/" className="font-bold block p-2 rounded hover:bg-gray-200">
                Home
              </Link>
              <Link href="/" className="font-bold block p-2 rounded hover:bg-gray-200">
                Task
              </Link>
            </nav> 

            <button 
              className="lock p-5 rounded hover:bg-gray-200"
              onClick={() => setSidebarOpen(false)}
            >
              閉じる
            </button>

          </aside>
        )}
      </>
    );
}