import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map((item) => (
          <li key={item.id}>
            <FriendListItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
