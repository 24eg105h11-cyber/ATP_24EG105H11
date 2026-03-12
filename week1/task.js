  // TODO: Import validator functions
                    import { validateTitle, validatePriority, validateDueDate} from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                   if(!validatePriority(priority) && !validateDueDate(dueDate) && !validateTitle(title)){
                    return "Not Valid"
                   }
                    tasks.push({title,priority,dueDate})
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks;
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      
                    }

                  export {addTask,getAllTasks,completeTask}
