

const createFilterListTemplate = () => {

    return (
        `<div class="task__filter">
        <button class="task__filter-item filter__low">низкий</button>
        <button class="task__filter-item filter__middle">средний</button>
        <button class="task__filter-item filter__hight">высокий</button>
        <button class="task__filter-item filter__done">готово</button>
        <button class="task__filter-item filter__all task__filter-item--active">показать все</button>
        <button class="task__filter-item filter__delete">удаленные</button>
        </div>`
    );
};


export { createFilterListTemplate };