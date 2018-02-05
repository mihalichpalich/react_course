import React, { Component } from 'react';

import Header from './Header.js';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class App extends Component {


  render() { //самый важный метод класса
    return (
      <div>
        <Header items={menu} /> {/*пробрасываем menu в Header через атрибут items*/}
      </div>
    );
  }
}

export default App;
