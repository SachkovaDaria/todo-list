const taskTypeToClassName = {
    'LOW': 'low-task',
    'MIDDLE': 'middle-task',
    'HIGHT': 'hight-task',
};

const createTaskTemplate = (task) => {
    const { title, type, status } = task;

    return (
        `<li class="task ${taskTypeToClassName[type]} 
        ${task.status == 'COMPLETE' ? 'done-task' : ''} 
        ${task.status == 'DELETE' ? 'delete-task' : ''}" data-task="${task.id}"> 

        <input class="task-text" ${task.status == 'EDIT' ? 'autofocus' : 'readonly'} value="${title}">

            <button class="task-btn-remake ${task.status == 'DELETE' ? 'visually-hidden' : ''} ${task.status == 'EDIT' ? 'visually-hidden' : ''}"></button> 
            
            <input type="checkbox"  ${task.status == 'COMPLETE' ? 'checked' : ''}  class="task-btn-done ${task.status == 'DELETE' ? 'visually-hidden' : ''} ">

            ${task.status == 'DELETE' ? '' : '<button class="task-btn-delete"></button>'} 
            
            ${task.status == 'EDIT' ? '<button class="task-btn-save"></button>' : ''}
        </li>`
    );
};


export { createTaskTemplate };
