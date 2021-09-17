import classes from './Users.module.css';

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                imgLink: "https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-19-450x450.png",
                status: true,
                fullName: 'Bahromov Y.A.',
                about: 'I live in the most beautiful place in the world',
                country: 'Russia',
                city: 'Pscov'
            },
            {
                id: 2,
                imgLink: "https://magicmag.net/image/cache/data/items/3481/7w-900x900.jpg",
                status: false,
                fullName: 'Ereomeko I.N.',
                about: 'programming and drawing',
                country: 'Russia',
                city: 'Moscow'
            },
            {
                id: 3,
                imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy0fvz7Y4g9FZCln7XRj2kltS7aEMF_GZAw&usqp=CAU",
                status: false,
                fullName: 'Volkov D.D.',
                about: 'Privet',
                country: 'Ukraine',
                city: 'Odessa'
            },
            {
                id: 4,
                imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAp4ekY4MSk_HbORGCyKNTRs3_uOe1JEgQlA&usqp=CAU",
                status: true,
                fullName: 'Zapasniy E.G.',
                about: 'I can tell about me very interesting information',
                country: 'Cuba',
                city: 'Unknown'
            }
        ])
    }

    return (
        <div className={classes.users}>
            <div className={classes.allUsersStart}>All users</div>
            {props.users.map(
                u =>
                    <div className={classes.unit}>
                        <div>
                            <div className={classes.imgWrapper}>
                                <img className={classes.img} src={u.imgLink} alt=""/>
                            </div>
                            {
                                u.status === true
                                    ? <button className={classes.flwBtn} onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                    : <button className={classes.flwBtn} onClick={ () => {props.follow(u.id)} }>Follow</button>
                            }
                        </div>
                        <div className={classes.unitContent}>
                            <div>
                                <div className={classes.fullName}>{u.fullName}</div>
                                <div className={classes.about}>{u.about}</div>
                            </div>
                            <div>
                                <div className={classes.country}>{u.country}</div>
                                <div className={classes.city}>{u.city}</div>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default Users