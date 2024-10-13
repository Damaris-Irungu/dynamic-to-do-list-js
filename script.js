// Setup Event Listener for Page Load
        document.addEventListener('DOMContentLoaded', function() {
            // Select DOM Elements
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

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

            // Attach Event Listeners
            addButton.addEventListener('click', addTask);

            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
        });
