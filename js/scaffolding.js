const Type = {
    LOW: "LOW",
    MIDDLE: "MIDDLE",
    HIGHT: 'HIGHT',
};

const Status = {
    PROGRESS: 'PROGRESS',
    COMPLETE: 'COMPLETE',
    DELETE: 'DELETE',
    EDIT: 'EDIT'
};

function idCount() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = idCount();

// const Task = function (title, type,status) {
//     this.title = title;
//     this.type = type;
//     this.status = status;
//     this.id = counter();
// };


class Task {
    constructor(title, type,status) {
        this.title = title;
        this.type = type;
        this.status = status;
        this.id = counter();
    }
};








export { Type, Status, Task };