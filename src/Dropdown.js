import React, {Component} from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
  }

  toggleState = () => {
    this.setState({isOpened: !this.state.isOpened}); //setState - обновление состояния
  }

  render() { //самый важный метод класса
    console.log('isOpened', this.state.isOpened);

    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <div>Here is what is shown in dropdown</div>;
    }

    return (
      <div onClick={this.toggleState}>
        It's dropdown baby
        {dropdownText}
      </div>
    ); //this.toggleState без круглых скобок, потому что он идет не сразу после инициализации
  }
}

export default Dropdown;
