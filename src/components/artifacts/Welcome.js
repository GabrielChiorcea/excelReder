import { useEffect, useState } from 'react';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(null);

  const set = [
    {
      class: styles.textAnimation,
      txt: 'Bine ai venit',
    },
    {
      class: styles.textAnimation,
      txt: 'Welina',
    },
    {
      class: styles.textAnimation,
      txt: 'Welcome',
    },
    {
      class: styles.textAnimation,
      txt: 'Powitanie',
    },
    {
      class: styles.textAnimation,
      txt: 'いらっしゃいませ',
    },
    {
      class: styles.textAnimation,
      txt: 'Accueillir',
    },
    {
      class: styles.textAnimation,
      txt: 'Bienvenido',
    },
    {
      class: styles.textAnimation,
      txt: 'Üdvözöljük',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % set.length);
      setCurrentSet(null);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [set.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet(
        <p className={set[currentIndex].class}>{set[currentIndex].txt}</p>
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, set]);

  return (
    <div className={styles.WelcomeContainer}>
      <div className={styles.textHolder}>{currentSet}</div>
    </div>
  );
};

export default Welcome;
