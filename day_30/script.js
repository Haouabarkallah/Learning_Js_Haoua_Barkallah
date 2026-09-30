
document.addEventListener('DOMContentLoaded', function()){
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
    

}