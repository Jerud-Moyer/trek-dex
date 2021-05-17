import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterItem.module.css';

type Props = {
  name: string;
  imageUrl: string;
  id: number;
  forAdmin: boolean;
}

const CharacterItem: React.FC<Props> = ({ name, imageUrl, id, forAdmin }) => {
  return (
    <div>
      <Link to={forAdmin ?`/update/${id}` : `/detail/${id}`} className={styles.link}>
        <figure>
          <img src={imageUrl} alt={name} className={styles.img} />
          <figcaption>{name}</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default CharacterItem
