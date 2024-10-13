// Setup Event Listener for Page Load
        document.addEventListener('DOMContentLoaded', function() {
            // Select DOM Elements
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');
                // Initialize and Load Tasks
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

            // Function to load tasks from Local Storage and display them
            function loadTasks() {
                taskList.innerHTML = ''; // Clear current list
                tasks.forEach(task => {
                    createTaskElement(task);
                });
            }

            // Create the addTask Function
            function addTask() {
                // Retrieve and trim the input value
                const taskText = taskInput.value.trim();

                // Check if taskText is empty
                if (taskText === "") {
                    alert("Please enter a task.");
                    return;
                }

                // Create a new li element
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                // Create a remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = "Remove";
                removeButton.classList.add('remove-btn');

                // Assign the onclick event to remove the task
                removeButton.onclick = function() {
                    taskList.removeChild(listItem);
                };

                // Append the remove button to the li element
                listItem.appendChild(removeButton);

                // Append the li to the task list
                taskList.appendChild(listItem);

                // Clear the task input field
                taskInput.value = "";
            }
                // Add new task to the tasks array and Local Storage
                tasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));

                // Create task element in DOM
                createTaskElement(taskText);

                // Clear input field
                taskInput.value = '';
            }

            // Implement Task Removal with Local Storage Update
            function removeTask(taskText) {
                tasks = tasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                loadTasks(); // Reload the task list to reflect changes
            }


            // Attach Event Listeners
            addButton.addEventListener('click', addTask);

            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
// Load tasks from Local Storage when the page loads
            loadTasks();
        });
