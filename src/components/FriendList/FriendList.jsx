export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => {
        return (
          <li key={item.id} className="item">
            {item.isOnline ? (
              <span className="status">GREEN</span>
            ) : (
              <span className="status">RED</span>
            )}

            <img
              className="avatar"
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};