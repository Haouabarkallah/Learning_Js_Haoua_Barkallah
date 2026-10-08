
document.addEventListener('DOMContentLoaded', function(){
    // DOM elements
    const taskForm = document.getElementById('taskform');
    const taskList = document.getElementById('taskList');
    const filtersBtns = document.querySelectorAll('.filter-btn');

    // task data
    let tasks =JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter ='all';
    const today = new Date().toISOString().split('T')[0];

    // initialize the app
    function init() {
        renderTasks();
        updateStats();
        
        // set today's date as default for the date picker
        document.getElementById('taskDueDate').value =today;

    }

    // add task event listerner
    taskForm.addEventListener('submit',function(event){
        event.preventDefault();

        const title =document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate =document.getElementById('taskDueDate').value;
        const priority = document.getElementById('taskPriority').value;

        addTask(title,description,dueDate,priority);

        // reset form
        taskForm.reset();
        document.getElementById('taskDueDate').value =today;

    });

    //filter btn event listeners
    filtersBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            // update active state
            filtersBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // set current filter and render tasks
            currentFilter =this.dataset.filter;
            renderTasks();
        });
    });

    // add new task
    function addTask(title,description,dueDate, priority){
        const newTask = {
            id: Date.now(),
            title,
            description,
            dueDate,
            priority,
            completed: false,
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();
        updateStats();
    }

    // render tasks based on current filter
    function renderTasks(){
        //filter tasks based on current selection
        let filteredTasks = tasks;

        if (currentFilter === 'pending'){
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (currentFilter === 'completed'){
            filteredTasks = tasks.filter(task => task.completed);

        } else if (currentFilter === 'high'){
            filteredTasks = tasks.filter(task => task.priority === 'high');
        }
        // clear task list 
        taskList.innerHTML ='';

        if (filteredTasks.length === 0){
            const emptyState = document.createElement('div');
            emptyState.className ='empty-state';
            emptyState.innerHTML =` 
            <i class="fas fa-clipboard-list"></i>
            <h3>No tasks found</h3>
            <p>Try changing your filters or add a new task</p>
            `;
            taskList.appendChild(emptyState);
            return;
        }

        // render each task
        filteredTasks.forEach(task =>{
            const taskElement = document.createElement('div');
            taskElement.className = ` task-item ${task.priority} ${task.completed ? 'completed' : ''}`;
            const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : ' No due date';

            taskElement.innerHTML = `
            <div class="task-info">
                <div class="task-title">
                    ${task.title}
                    <span class="priority-badge">${task.priority}</span>                
                </div>
                <div class="task-desc">
                    ${task.description  || 'No description'}
                </div>
                <div class="task-meta">
                    <span><i class="fas fa-calendar"></i>  ${dueDate}</span>             

                    <span><i class="fas fa-clock"></i> Created: ${new Date (task.createdAt).toLocaleDateString()}</span>             
                </div>
            </div>
            <div class="task-actions">
               ${!task.completed ? ` 
                    <button class="action-btn complete-btn" data-id ="${task.id}">
                        <i class="fas fa-check"></i> 
                    </button>
                `: ''}
                <button class="action-btn delete-btn" data-id ="${task.id}">
                    <i class="fas fa-trash"></i> 

            </div>      
            `;
            taskList.appendChild(taskElement);

        });

        // add event listeners to action btn
        document.querySelectorAll('.complete-btn').forEach(btn => {
            btn.addEventListener('click',function(){
                const taskId =parseInt(this.dataset.id);
                completeTask(taskId);

            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click',function(){
                const taskId =parseInt(this.dataset.id);
                deleteTask(taskId);

            });
        });


    }

    // complete a task
    function completeTask(taskId){
        tasks = tasks.map(task =>{
            if (task.id === taskId) {
                return { ...task, completed: true};
            }
            return task;
        });

        saveTasks();
        renderTasks();
        updateStats();
    }

    // delete a task
    function deleteTask(taskId){
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        renderTasks();
        updateStats();

    }

    // update task statistics
    function updateStats(){
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const pendingTasks = totalTasks - completedTasks;

        document.getElementById('totalTasks').textContent = totalTasks;
        document.getElementById('completedTasks').textContent = completedTasks;
        document.getElementById('pendingTasks').textContent = pendingTasks;
    }
    // save tasks to localstorage
    function saveTasks (){
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

    // initialize the app
    init();
    
});