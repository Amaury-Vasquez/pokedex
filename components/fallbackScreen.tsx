import { BounceLoader } from './bounceLoader';

import styles from 'styles/layout.module.css';

export const FallbackScreen = () => {
  return (
    <div className={styles.center}>
      <BounceLoader />
    </div>
  );
};
