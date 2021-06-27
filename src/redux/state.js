let rerenderEntireTree = () => {

}

let state = {
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
    }
}

export let textareaChangeFunction = (text) => {
    state.profileData.textareaValueShow = text;
    rerenderEntireTree(state);
}

export let addNewPost = () => {
    let post = {
        id: 6,
        fullName: 'Иванов Иван Иванович',
        text: state.profileData.textareaValueShow,
        likes: 11
    }
    state.profileData.postData.push(post);
    // state.profileData.textareaValueShow = '';
    rerenderEntireTree(state)
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}

export default state;