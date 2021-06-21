import classes from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={classes.mainGrid}>
            <div className={classes.avatar}>
                <img className={classes.avaImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJDa6S5yA2FBlmLse2elZQS-wjrfc8C0PbA&usqp=CAU" alt=""/>
            </div>
            <div className={classes.info}>
                <p>Name: Иванов Иван Иванович</p>
                <p>Место проживания: Курган</p>
                <p>Место работы: Фриланс</p>
                <p>Количество лайков: 100</p>
            </div>
            <div className={classes.posts}>
                <h1>Записи</h1>
                <form action="">
                    <input className={classes.sendText} type="text"/>
                    <div className={classes.buttonWrapper}>
                        <button className={classes.sendButton}>Отправить</button>
                    </div>
                </form>
                <Posts />
            </div>
        </div>
    );
}

export default Profile;