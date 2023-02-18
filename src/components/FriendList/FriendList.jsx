import { List, ListItem, Status, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <ListItem key={item.id}>
            {item.isOnline ? (
              <Status color={'green'}></Status>
            ) : (
              <Status color={'red'}></Status>
            )}
            <img
              className="avatar"
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <Name>{item.name}</Name>
          </ListItem>
        );
      })}
    </List>
  );
};
