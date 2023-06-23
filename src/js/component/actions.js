export const CHANGE_TITLE = 'CHANGE_TITLE';

const changeTitle = (pageTitle) => {
    return {
        type: CHANGE_TITLE,
        pageTitle: pageTitle
    }
}

export {changeTitle}