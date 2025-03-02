import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, toggleComplete, deleteTask, selectTask }) => {
    return (
        <div className="relative p-4 bg-white border rounded-lg shadow-md my-3">
            <div className="absolute top-2 right-2 flex space-x-2">
                <button 
                    onClick={() => !task.completed && selectTask(task)}
                    className={`text-yellow-500 ${task.completed ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={task.completed}
                >
                    <FaEdit size={18} />
                </button>
                <button onClick={() => deleteTask(task._id)} className="text-red-500">
                    <FaTrash size={18} />
                </button>
            </div>

            <h3 className={`text-lg font-bold ${task.completed ? "line-through text-gray-500" : ""}`}>
                {task.title}
            </h3>
            <p className="text-gray-600">{task.description}</p>
            <button
                onClick={() => toggleComplete(task)}
                className={`mt-3 px-3 py-1 rounded-md ${
                    task.completed ? "bg-gray-500" : "bg-blue-500"
                } text-white`}
            >
                {task.completed ? "Undo" : "Complete"}
            </button>
        </div>
    );
};

export default TaskItem;
