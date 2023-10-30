/***************************************
 * Filename: ComplexCode.js
 * Description: This code showcases a complex implementation of a task management system with advanced features.
 ***************************************/

// Import required modules from external libraries
const moment = require("moment");
const uuid = require("uuid/v4");

// Define the Task class
class Task {
  constructor(id, title, description, dueDate, priority, status) {
    this.id = id || uuid();
    this.title = title;
    this.description = description;
    this.dueDate = moment(dueDate).format("YYYY-MM-DD");
    this.priority = priority || "Medium";
    this.status = status || "To Do";
  }

  // Method to update task status
  updateStatus(newStatus) {
    this.status = newStatus;
    this.logStatusChange();
  }

  // Method to log task status change
  logStatusChange() {
    console.log(`Task ${this.id} status changed to: ${this.status}`);
  }
}

// Define the TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Method to add a new task
  addTask(title, description, dueDate, priority) {
    const task = new Task(null, title, description, dueDate, priority);
    this.tasks.push(task);
    console.log(`Task (${task.id}) added: ${task.title}`);
  }

  // Method to get all tasks
  getAllTasks() {
    return this.tasks;
  }

  // Method to filter tasks by status
  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  }

  // Method to update task status by ID
  updateTaskStatusById(taskId, newStatus) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.updateStatus(newStatus);
    } else {
      console.log(`Task (${taskId}) not found.`);
    }
  }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add some sample tasks
taskManager.addTask(
  "Implement Login",
  "Implement user login functionality with authentication.",
  "2022-01-10",
  "High"
);

taskManager.addTask(
  "Design Dashboard",
  "Design an interactive dashboard for data visualization.",
  "2022-01-15",
  "Medium"
);

taskManager.addTask(
  "Optimize Performance",
  "Optimize codebase for better performance.",
  "2022-01-20",
  "Medium"
);

// Get all tasks and print the details
const allTasks = taskManager.getAllTasks();
console.log("All Tasks:");
console.log(allTasks);

// Update a task's status and print the changes
taskManager.updateTaskStatusById(allTasks[0].id, "In Progress");

// Get tasks by status and print the details
const inProgressTasks = taskManager.getTasksByStatus("In Progress");
console.log("Tasks In Progress:");
console.log(inProgressTasks);

// ...
// Perform additional operations and utilize the advanced features of the task management system

/***************************************
 * This is just a simplified example to showcase a sophisticated task management system.
 * In an actual implementation, additional features like data persistence, user authentication,
 * user roles, notifications, etc. would be integrated into the system.
 ***************************************/