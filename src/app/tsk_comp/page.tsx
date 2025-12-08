"use client";
import { tsk_data } from "../tsk_data/tsk_data";
import { useState } from "react";

export default function Tsk_Management() {
  const [value, setValue] = useState("false");

  return (
      <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="border border-gray-300 rounded p-4 w-150">
          <h1 className="font-bold mb-3">Completed Tsk</h1>    
            <input
              type="radio"
              value="false"
              checked={value === "false"}
              onChange={(e) => setValue(e.target.value)}
              />not complete
            
            <p>select : {value}</p>

            {tsk_data.map((i) => (
              <div key={i.id} className="flex w-full hover:bg-gray-200 rounded px-4">
                <input
                  type="radio"
                  value="true"
                  checked={value === "true"}
                  onChange={(e) => setValue(e.target.value)}
                  />
                  <div className="pl-4 my-2">
                    <p className="font-semibold">{i.tsk_data}</p>
                    <p className="text-sm text-gray-700">{i.date}</p>
                  </div>
              </div>
            ))}
        </div>
      </div>
  );
}