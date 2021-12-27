import React from 'react';

import styles from '../app/app.module.css';

export type AppProps = {}

export type DataProps = {}

export const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.main}>component</div>
  );
}

export default App;
