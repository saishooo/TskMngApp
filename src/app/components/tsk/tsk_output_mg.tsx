"use client";

import { useTasks } from "./tsk_parent";
import { useState } from "react";
import { Tasks } from "@/app/types";
import Image from "next/image";

export default function Tsk_Output_Management() {
  // ↓ オブジェクトからtasksとtoggleTask関数を取り出している
  const { tasks, updateTask, deleteTask, toggleTask } = useTasks();
  
  const [ editingTaskId, setEditingTaskId ] = useState< number | null >( null );
  const [ editTitle,  setEditTitle ] = useState( "" );
  const [ editDeadLine, setEditDeadLine ] = useState( "" );

  //ラジオボタン
  const TaskRadioButton = ( { task }: { task: Tasks } ) => (
    <div className="flex w-10 h-15 px-4">
      <input
          type="radio"
          value="true"
          checked={ task.comp === true }
          onChange={() => toggleTask( task.id )}
      />
    </div>
  );

  const Local_UpdateTask = ( id: number, newTitle: string, newDeadLine: string )=>{
    updateTask( id, newTitle, newDeadLine );
    setEditingTaskId( null );
    setEditTitle("");
    setEditDeadLine("");
  };

  const management_tsk = tasks.filter( task => task.comp === false );

  return (
      <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="w-150 p-4 border border-gray-300 rounded">
          <h1 className="font-bold mb-3">My Tasks</h1>    

            { management_tsk.length === 0 ? (
              <p>There are no unfinished tasks.</p>
            ) : (
            management_tsk.map(( task ) => (
              <div key={ task.id } className="flex">
                  { editingTaskId !== task.id && (
                    <div className="flex">
                        <TaskRadioButton task = { task } />
                      <div className="flex items-center justify-between w-110 px-4 my-2 hover:bg-gray-200 rounded" 
                        onClick = {() => {
                          setEditingTaskId( task.id );
                          setEditTitle( task.tsk_title );
                          setEditDeadLine( task.dead_line );
                        }}
                        >
                        
                        <div>
                          <p className="font-semibold">{ task.tsk_title }</p>
                          <p className="text-sm text-gray-700">{ task.dead_line }</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center w-20 rounded hover:bg-red-200">
                          <button
                          onClick={() => deleteTask( task.id )}
                          >
                            <Image 
                            className="mt-1" 
                            src="/trash.svg" 
                            alt="delete" 
                            width={24} 
                            height={24} />
                          </button>
                          <p className="text-xs mt-1">delete</p>

                      </div>
                    </div>
                  )}
                  { editingTaskId === task.id && (
                    <div className="flex">
                      <TaskRadioButton task = { task } />

                      <div className="flex items-center justify-between w-110 px-4 my-2 hover:bg-gray-200 rounded"
                      onClick = {() => setEditingTaskId( null )}>
                        
                        <div>
                          <input
                          className="block font-semibold text-gray-600 h-10"
                          value={ editTitle }
                          placeholder={ task.tsk_title }
                          onChange = { ( e ) => setEditTitle( e.target.value ) }
                          onClick  = { ( e ) => e.stopPropagation()}
                          />
                          <input
                          className="block text-sm text-gray-700 h-10"
                          type="date"
                          value={editDeadLine}
                          placeholder={ task.dead_line }
                          onChange = { ( e ) => setEditDeadLine( e.target.value ) }
                          onClick  = { ( e ) => e.stopPropagation()}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center w-20 rounded hover:bg-green-200">
                        <button
                          onClick={ () => Local_UpdateTask( task.id, editTitle, editDeadLine ) }
                          >
                            <Image 
                              className="mt-1" 
                              src="/update.svg" 
                              alt="delete" 
                              width={24} 
                              height={24} />
                          </button>
                          <p className="text-xs mt-1">Update</p>
                        </div>
                      </div>            
                  )}
                </div>
            ))
          )}
        </div>
      </div>
  );
}