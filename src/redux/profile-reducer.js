const ADD_NEW_POST = 'ADD-NEW-POST';
const TEXTAREA_CHANGE_FUNCTION = 'TEXTAREA-CHANGE-FUNCTION';
const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    profile: [],
    textareaValueShow: 'Начни писать от сюда',
    postData: [
        {
            id: 1,
            fullName: 'Иванов Иван Иванович',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum dolorem eius fuga iusto molestiae nulla perspiciatis placeat ratione, ullam!',
            likes: 11
        },
        {
            id: 2,
            fullName: 'Дмитриев Дмитрий Дмитриевич',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum dolorem eius fuga iusto molestiae nulla perspiciatis placeat ratione, ullam!',
            likes: 12
        },
        {
            id: 3,
            fullName: 'Александров Александр Александрович',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum dolorem eius fuga iusto molestiae nulla perspiciatis placeat ratione, ullam!',
            likes: 17
        },
        {
            id: 4,
            fullName: 'Алексеев Алейксей Алексеевич',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum dolorem eius fuga iusto molestiae nulla perspiciatis placeat ratione, ullam!',
            likes: 14
        },
        {
            id: 5,
            fullName: 'Петров Пётр Петрович',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum dolorem eius fuga iusto molestiae nulla perspiciatis placeat ratione, ullam!',
            likes: 15
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch  (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                textareaValueShow: '',
                postData: [...state.postData, {id: 6, fullName: 'Иванов Иван Иванович', text: state.textareaValueShow, likes: 11}]
            }
        }
        case TEXTAREA_CHANGE_FUNCTION: {
            return {
                ...state,
                textareaValueShow: action.text
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addNewPost = () => ({type: ADD_NEW_POST})
export const textareaChange = (txt) => ({type: TEXTAREA_CHANGE_FUNCTION, text: txt})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})

export default profileReducer;