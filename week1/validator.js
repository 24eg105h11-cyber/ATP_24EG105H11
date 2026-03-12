// try to make the program into pieces as many as possible.
 // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        if(!title || title.length<=3){
                            return "Title required"
                        }
                        return "Title is valid"
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                        if(!priority || (priority!='low' && priority!='high' && priority!='medium')){
                            return 'Enter valid priority'
                        }
                        return 'Valid Priority'
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        let dueDate=new Date('2024-10-20')
                        let today=new Date()
                        if(dueDate>today){
                            return "Invalid"
                        }
                      }
                      export { validateTitle, validatePriority, validateDueDate}
