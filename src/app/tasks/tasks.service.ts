import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Low Angular',
      summary: 'Learn all low',
      dueDate: '2025-12-30'
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Normal Angular',
      summary: 'Learn all normal',
      dueDate: '2025-12-32'
    }
  ];

  constructor() {
    const tasks = localStorage.getItem('task');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId == userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime.toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summry,
      dueDate: taskData.date
    })
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('task', JSON.stringify(this.tasks));
  }
}