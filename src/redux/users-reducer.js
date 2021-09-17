const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';

let initialState = {
    users: [],
    pageSize: 5,
    allPageCount: 21,
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

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SETUSERS, users})
export const setActivePageAC = (pageActive) => ({type: SET_ACTIVE_PAGE, pageActive})

export default usersReducer;