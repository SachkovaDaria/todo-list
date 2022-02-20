import { renderTask } from './renderElements.js';

/**
 * @param {Node|String} parent
 * @param {Array} tasks // массив задач
 * @param {Array} typeTasks // отсортированный массив задач по type
 */

const typeFilter = function (typeTasks, parent) {
    parent.innerHTML = '';
    for (let i = 0; i < typeTasks.length; i++) {
        renderTask(typeTasks[i], parent);
    }
};

const renderTypeTaskFilter = (tasks, type, parent) => {
    const typeTask = tasks.filter(function (task) {
        return task.type == type;

    });
    typeFilter(typeTask, parent);
}

const getStatusTaskFilter = (tasks, status, parent) => {
    const statusTask = tasks.filter(function (task) {
        return task.status == status;
    });

    typeFilter(statusTask, parent);
}

const getUndeletedTaskList = (tasks, parent) => {
    const allTasks = tasks;
    const newTasks = allTasks.slice();

    const undeletedTasks = [];

    newTasks.forEach((el) => {
        if (el.status !== 'DELETE' && el.status !== 'COMPLETE') {
            undeletedTasks.push(el);
        }
    });

    typeFilter(undeletedTasks, parent);
}

const getFiltersActive = (listFilters) => {

    for (let value of listFilters) {

        value.addEventListener("click", function () {
            let current = document.querySelector(".task__filter-item--active");
            if (!value.classList.contains('task__filter-item--active')) {
                value.classList.add("task__filter-item--active");
                current.classList.remove("task__filter-item--active");
            }

        });
    }

}

const resetFilters = (listFilters, allTaskFilter) => {

    listFilters.forEach((el) => {
        if (el.classList.contains('task__filter-item--active')) {
            el.classList.remove("task__filter-item--active");
        }
        allTaskFilter.classList.add('task__filter-item--active');
    })
}


export { typeFilter, renderTask, renderTypeTaskFilter, getStatusTaskFilter, getUndeletedTaskList, getFiltersActive, resetFilters }