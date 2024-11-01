import { defineStore } from "pinia";
import type { TaskState } from "@/models/TaskState";
import type { Task } from "@/models/TaskModel";

export const useTaskStore = defineStore({
    id: 'task',
    state: () : TaskState => ({
        loading: false,
        data: [],
    }),
    actions: {
        addTask(task: Task): void {
            let tId: number = this.data.length
            let newTask: Task = {...task, id:tId}
            this.data.push(newTask);
        },
        removeTask(task: Task): void {
            this.data = this.data.filter(item => item.id !== task.id)
        },
    }
})