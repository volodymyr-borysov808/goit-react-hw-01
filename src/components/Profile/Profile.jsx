import css from './Profile.module.css';

export default function Profile({image, name, tag, location, stats: {followers, views, likes}}) {
  return (
    <>
      <div className={css.wrapper}>
  <div className={css.imageContainer}>
    <img
      className={css.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={css.header}>{name}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.bottomWrapper}>
    <li className={css.item}>
      <span>Followers</span>
      <span className={css.number}>{followers}</span>
    </li>
    <li className={css.item}>
      <span>Views</span>
      <span className={css.number}>{views}</span>
    </li>
    <li className={css.item}>
      <span>Likes</span>
      <span className={css.number}>{likes}</span>
    </li>
  </ul>
</div>
    </>
  )
};