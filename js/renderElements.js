import { createTaskTemplate } from './components/task-card.js';
import { createFilterListTemplate } from './components/filter.js';
import { RenderPosition, createElement, render } from './render.js';

/**
 * @param {Object} task // данные задачи
 * @param {Node|String} taskElement // разметка для задачи 
 */

const initTaskDoneListener = (taskElement, task) => {
    const checkboxElement = taskElement.querySelector('.task-btn-done');
    checkboxElement.addEventListener('change', (evt) => {
        const el = evt.target;
        task.status = el.checked ? 'COMPLETE' : 'PROGRESS';
        rerenderTask(taskElement, task);
    });
};

const ititTaskDeleteLIstener = (taskElement, task) => {
    taskElement.addEventListener('click', (evt) => {
        const el = evt.target;
        if (!el.classList.contains('task-btn-delete')) {
            return;
        }
        task.status = 'DELETE';
        task.type = 'NOACTIVE';
        rerenderTask(taskElement, task);
    });
}

const ititTaskEditListener = (taskElement, task) => {

    taskElement.addEventListener('click', (evt) => {
        const el = evt.target;
        const itemElement = el.closest('li.task');
        const taskContent = itemElement.querySelector('.task-text');

        if (!el.classList.contains('task-btn-remake')) {
            return;
        }

        if (task.status == 'PROGRESS') {
            task.status = 'EDIT';
            taskContent.focus();
        }

        rerenderTask(taskElement, task);
    });

}

const ititTaskSaveListener = (taskElement, task) => {
    taskElement.addEventListener('click', (evt) => {
        const el = evt.target;
        const itemElement = el.closest('li.task');
        const taskContent = itemElement.querySelector('.task-text');
        if (!el.classList.contains('task-btn-save')) {
            return;
        }

        if (task.status == 'EDIT') {
            task.status = 'PROGRESS';
            task.title = taskContent.value;
        }

        rerenderTask(taskElement, task);
    });
}


const initListeners = (taskElement, task) => {
    initTaskDoneListener(taskElement, task);
    ititTaskDeleteLIstener(taskElement, task);
    ititTaskEditListener(taskElement, task);
    if (task.status == 'EDIT') {
        ititTaskSaveListener(taskElement, task);
    }
};

const rerenderTask = (taskElement, task) => {
    const newTaskItemTemplate = createTaskTemplate(task);
    const newTaskElement = createElement(newTaskItemTemplate);
    initListeners(newTaskElement, task);
    taskElement.replaceWith(newTaskElement);
};

/**
 * @param {Object}task // данные задачи
 * @param {Node|String} parent // элемент для встави в ДОМ
 */

const renderTask = (task, parent) => {
    const taskItemTemplate = createTaskTemplate(task);
    const taskElement = createElement(taskItemTemplate);
    initListeners(taskElement, task);
    render(parent, taskElement, RenderPosition.BEFOREEND);
};

const renderFilterList = (parent) => {
    const FiltersItemTemplate = createFilterListTemplate();
    const FiltersElements = createElement(FiltersItemTemplate);

    render(parent, FiltersElements, RenderPosition.BEFOREBEGIN);
};


export { renderTask, renderFilterList };