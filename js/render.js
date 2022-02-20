const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

/**
 * @param {string} template
 */
const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
};

/**
 * @param {ParentNode} parent
 * @param {Node|String} child
 * @param {RenderPosition} place
 */
const render = (parent, child, place) => {
    switch (place) {
        case RenderPosition.BEFOREBEGIN:
            parent.before(child);
            break;

        case RenderPosition.AFTERBEGIN:
            parent.prepend(child);
            break;

        case RenderPosition.BEFOREEND:
            parent.append(child);
            break;

        case RenderPosition.AFTEREND:
            parent.after(child);
            break;
    }
};


export { RenderPosition, createElement, render };
