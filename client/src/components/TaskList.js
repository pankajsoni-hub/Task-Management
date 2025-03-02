import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../services/taskService";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const { data } = await getTasks();
        setTasks(data);
    };

    const handleAddTask = async (task) => {
        await addTask(task);
        fetchTasks();
    };

    const handleUpdateTask = async (id, updatedTask) => {
        await updateTask(id, updatedTask);
        fetchTasks();
        setSelectedTask(null);
    };

    const handleToggleComplete = async (task) => {
        await updateTask(task._id, { ...task, completed: !task.completed });
        fetchTasks();
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div className="max-w-lg mx-auto mt-5 p-5">
            <h2 className="text-2xl font-bold text-center mb-4">Task Manager</h2>
            <TaskForm addTask={handleAddTask} editTask={handleUpdateTask} selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
            {tasks.length === 0 ? (
                <p className="text-gray-500 text-center">No tasks available</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        toggleComplete={handleToggleComplete}
                        deleteTask={handleDeleteTask}
                        selectTask={setSelectedTask}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
