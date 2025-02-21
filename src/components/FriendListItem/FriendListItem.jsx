import css from './FriendListItem.module.css';
import clsx from "clsx";

export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <div className={css.item}>
          <img className={css.image} src={avatar} alt="Avatar" />
          <p className={css.name}>{name}</p>
            <p className={clsx(css.status, isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};
