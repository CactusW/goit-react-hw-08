import s from './Profile.module.css'
import React from "react";

export default function Profile({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = { followers: 0, views: 0, likes: 0 },
}) {
  return (
    <div className={s.frame}>
      <div className={s.name}>
        <div className={s.imageWrapper}>
          <img className={s.img} src={image} alt="User avatar" />
        </div>
        <p className={s.fullname}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.stats}>
          <span>Followers</span>
          <span className={s.statsIndic}>{stats.followers}</span>
        </li>
        <li className={s.stats}>
          <span>Views</span>
          <span className={s.statsIndic}>{stats.views}</span>
        </li>
        <li className={s.stats}>
          <span>Likes</span>
          <span className={s.statsIndic}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};