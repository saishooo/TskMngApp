export default function Tsk_Input(){
    return(
    <div className="fixed top-25 left-64 right-64 h-[350px] flex justify-center">
        <div className="border border-gray-300 rounded p-4 w-150">
            <h1 className="mb-2">タスク</h1>
                <input
                    type="text"
                    placeholder="タスク"
                    className="border border-gray-300 rounded p-2 w-100 mb-6"
                />

            <h1 className="mb-2">期日</h1>
                <input 
                    type="date"
                    placeholder="XXXX-YY-ZZ"
                    className="border border-gray-300 rounded p-2 w-100 mb-6"
                />

            <button
                className="block border border-gray-300 p-3 rounded hover:bg-gray-200"
            >
                追加
            </button>
        </div>
    </div>
    );
}