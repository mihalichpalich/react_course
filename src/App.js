import React, {Component} from 'react';

import {css} from 'aphrodite/no-important'; //отключаем !important
import styles from './AppStyles.js';

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div>Our App</div>
        <div className={css(styles.square)}></div>
      </div>
    );
  }
}

export default App;
