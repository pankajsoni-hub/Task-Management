import { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, selectedTask, setSelectedTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [selectedTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;

        const taskData = { title, description, completed: false };

        if (selectedTask) {
            editTask(selectedTask._id, taskData);
        } else {
            addTask(taskData);
        }

        setTitle("");
        setDescription("");
        setSelectedTask(null);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">{selectedTask ? "Edit Task" : "Add New Task"}</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full rounded-md mb-2"
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full rounded-md mb-2 h-20"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
                {selectedTask ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
};

export default TaskForm;
