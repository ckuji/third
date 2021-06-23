import classes from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div className={classes.mainGrid}>
            <div className={classes.avatar}>
                <img className={classes.avaImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJDa6S5yA2FBlmLse2elZQS-wjrfc8C0PbA&usqp=CAU" alt=""/>
            </div>
            <div className={classes.info}>
                <p>{props.profileData.startProfileData[0].fullName}</p>
                <p>{props.profileData.startProfileData[0].placeLiving}</p>
                <p>{props.profileData.startProfileData[0].placeWorking}</p>
                <p>Общее количество лайков: {props.profileData.startProfileData[0].commonCountLikes}</p>
            </div>
            <div className={classes.posts}>
                <h1>Записи</h1>
                <form action="">
                    <textarea className={classes.sendText} name="" id="" cols="30" rows="10"></textarea>
                    <div className={classes.buttonWrapper}>
                        <button className={classes.sendButton}>Отправить</button>
                    </div>
                </form>
                <Posts postData={props.profileData.postData} />
            </div>
        </div>
    );
}

export default Profile;