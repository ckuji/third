const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_SHOW_MESSAGE = 'CHANGE-SHOW-MESSAGE';

let initialState = {
    friendsListData: [
        {id: 1, fullName: 'Павел Терентьевич Некрасовских'},
        {id: 2, fullName: 'Александр Сергеевич Ветров'},
        {id: 3, fullName: 'Лепёхин Станислав Акрин'},
        {id: 4, fullName: 'Валенченцев Роман Георгиевич'}
    ],
    dialogsListData: [
        {id: 1, text: 'Привет, это моё первое сообщение в диалоге'},
        {id: 2, text: 'Следущее сообщение после первого'}
    ],
    textareaCurrentValue: 'Сообщение от сюда'
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SHOW_MESSAGE: {
            return {
                ...state,
                textareaCurrentValue: action.text
            }
        }
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                textareaCurrentValue: '',
                dialogsListData: [...state.dialogsListData, {id: 3, text: state.textareaCurrentValue}]
            }
        }
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => (
    {type: ADD_NEW_MESSAGE}
)

export const changeShowMessageActionCreator = (sym) => (
    {type: CHANGE_SHOW_MESSAGE, text: sym}
)

export default messagesReducer;