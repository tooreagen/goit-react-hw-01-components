import {
  ProfileContainer,
  Img,
  Description,
  Username,
  Tag,
  Location,
  StatsList,
  StatsItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{stats.followers}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{stats.views}</ItemQuantity>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{stats.likes}</ItemQuantity>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};
