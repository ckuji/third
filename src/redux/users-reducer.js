const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';

let initialState = {
    users: [],
    pageSize: 5,
    allPageCount: 50,
    pageActive: 3
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, status: true}
                    }
                    return u;
                } )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, status: false}
                    }
                    return u;
                } )
            }
        case SETUSERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                pageActive: action.pageActive
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SETUSERS, users})
export const setActivePage = (pageActive) => ({type: SET_ACTIVE_PAGE, pageActive})

export default usersReducer;