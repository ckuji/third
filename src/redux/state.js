let store = {
    _state: {
        profileData: {
            startProfileData: [
                {
                    id: 1,
                    fullName: 'Иванов Иван Иванович',
                    placeLiving: 'Место проживания: Курган',
                    placeWorking: 'Место работы: Фриланс',
                    commonCountLikes: 99
                }
            ],
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
        },
        messagesData: {
            friendsListData: [
                {id: 1, fullName: 'Павел Терентьевич Некрасовских'},
                {id: 2, fullName: 'Александр Сергеевич Ветров'},
                {id: 3, fullName: 'Лепёхин Станислав Акрин'},
                {id: 4, fullName: 'Валенченцев Роман Георгиевич'}
            ]
        }
    },
    getState() {
        return(this._state);
    },
    _callSubscriber() {

    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-NEW-POST') {
            let post = {
                id: 6,
                fullName: 'Иванов Иван Иванович',
                text: this._state.profileData.textareaValueShow,
                likes: 11
            }
            this._state.profileData.postData.push(post);
            this._state.profileData.textareaValueShow = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === 'TEXTAREA-CHANGE-FUNCTION') {
            this._state.profileData.textareaValueShow = action.text;
            this._callSubscriber(this._state);
        }
    }

}

export default store;