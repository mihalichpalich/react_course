import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired, //isRequired показывает, что эти данные нужно передавать обязательно
    isLoading: PropTypes.bool, //bool может быть не обязательно
    submit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['news', 'photos']), //хотим получить на вход тип, который будет равняться строке 'news' или 'photos'
    user: PropTypes.shape({ //свойство должно быть объектом определенной формы (указываются имена свойств объекта и их типы)
      name: PropTypes.string,
      age: PropTypes.number
    }),
    users: PropTypes.arrayOf( //свойство должно быть массивом значений определенного типа
      PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
      })
    )
  };

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
