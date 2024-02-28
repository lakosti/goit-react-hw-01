import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <div className={css.friendsItemWrap}>
      <img className={css.friendsImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
      <p className={clsx(css.friendsStatus, { [css.cardOnline]: isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
