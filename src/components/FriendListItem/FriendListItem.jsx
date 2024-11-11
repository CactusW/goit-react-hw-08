import s from './FriendListItem.module.css'
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
      <>
          <div>
            <img src={avatar} alt="name" width="48" />
            <p>{name}</p>
            <p className={clsx(s.status, isOnline ? s.green : s.red)}>
              {" "}
              {isOnline ? "Online" : "Offline"}{" "}
            </p>
          </div>
      </>
    );
}
