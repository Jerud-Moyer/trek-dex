import React from 'react';
import styles from './Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingBox}>
      <img 
        src="https://www.animatedimages.org/data/media/635/animated-star-trek-image-0016.gif" 
        alt="U.S.S.Enterprise spinning" 
      />
      <h1>NOMAD LOADING...</h1>
    </div>
  )
}

export default Loading
