import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.profileWrap}>
      <div className={css.infoWrap}>
        <div className={css.profileImgWrap}>
          <img className={css.profileImg} src={image} alt="User avatar" />
        </div>
        <div className={css.profileInfoWrap}>
          <p className={css.profileName}>{name}</p>
          <p className={css.profileTag}>@{tag}</p>
          <p className={css.profileLocation}>{location}</p>
        </div>
      </div>

      <div className={css.profileListWrap}>
        <ul className={css.profileList}>
          <li className={css.profileItem}>
            <span className={css.profileTitle}>Followers</span>
            <span className={css.profileInfo}>{followers}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileTitle}>Views</span>
            <span className={css.profileInfo}>{views}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileTitle}>Likes</span>
            <span className={css.profileInfo}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
