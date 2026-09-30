
document.addEventListener('DOMContentLoaded', function(){
    // DOM elements
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const filtersBtns = document.querySelectorAll('.filter-btn');

    // task data
    let tasks =JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter ='all';

    // initialize the app
    function init() {
        renderTasks();
        updateStats();
        
        // set today's date as default for the date picker
        const today = new Date().toISOString().split('T')[0];
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
        
    }
});