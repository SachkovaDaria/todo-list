import { Status, Task } from './js/scaffolding.js';
import { getUndeletedTaskList, renderTypeTaskFilter, getStatusTaskFilter, getFiltersActive, resetFilters } from './js/filter.js';
import { renderTask, renderFilterList } from './js/renderElements.js';

/**
 * {
 *   title: string;
 *   type: 'LOW' | 'MIDDLE' | 'HIGH' | 'NOACTIVE' 
 *   status: 'PROGRESS' | 'COMPLETE' | 'DELETE' | 'EDIT' 
 *   id: numder
 * }
 */


const tasks = [];
const taskList = document.querySelector('.task__list');
renderFilterList(taskList);


const taskBtnAdd = document.querySelector('.task__add');
const taskText = document.querySelector('.task__text');
const taskOption = document.querySelector('.todo-list__statusSelect');
const completeTaskFilter = document.querySelector('.filter__done');
const lowTaskFilter = document.querySelector('.filter__low');
const middleTaskFilter = document.querySelector('.filter__middle');
const hightTaskFilter = document.querySelector('.filter__hight');
const allTaskFilter = document.querySelector('.filter__all');
const deleteTaskFilter = document.querySelector('.filter__delete');
const listFilters = document.querySelectorAll('.task__filter-item');


getFiltersActive(listFilters);

const addTask = () => {
    const title = taskText.value;

    if (title.length == 0) {
        alert('поле не может быть пустым, введите текст задачи');
        return;
    }

    const type = taskOption.value;
    const status = Status.PROGRESS;
    const newTask = new Task(title, type, status);

    tasks.push(newTask);
    renderTask(newTask, taskList);
    getUndeletedTaskList(tasks, taskList);
    taskText.value = '';
    resetFilters(listFilters, allTaskFilter);
}

taskBtnAdd.addEventListener('click', (evt) => {
    evt.preventDefault();
    addTask();
});


// события фильтрации

middleTaskFilter.addEventListener('click', () => renderTypeTaskFilter(tasks, "MIDDLE", taskList));
hightTaskFilter.addEventListener('click', () => renderTypeTaskFilter(tasks, "HIGHT", taskList));
lowTaskFilter.addEventListener('click', () => renderTypeTaskFilter(tasks, "LOW", taskList));
completeTaskFilter.addEventListener('click', () => getStatusTaskFilter(tasks, "COMPLETE", taskList));
deleteTaskFilter.addEventListener('click', () => getStatusTaskFilter(tasks, "DELETE", taskList));
allTaskFilter.addEventListener('click', () => getUndeletedTaskList(tasks, taskList));
















