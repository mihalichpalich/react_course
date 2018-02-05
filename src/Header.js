import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log('items', this.props.items); // берем переданный menu, из атрибута items, который находится в props

    return (
      <div>
        {this.props.items.map((item, index) =>
          <a href="{item.link}" key={index}>{item.label}</a> //у каждого элемента должен быть уникальный ключ key
        )}
      </div>
    );
  }
}

export default Header;
