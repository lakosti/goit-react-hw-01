import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={css.friendsWrap}>
      <ul className={css.friendsList}>
        {friends.map((item) => (
          <li className={css.friendsItem} key={item.id}>
            <FriendListItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
