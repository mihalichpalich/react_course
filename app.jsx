// function Hero(props) { //получаем объект со свойствами из рендера
//   let count = 0; //count нельзя получить как свойство, потому что свойства не меняются

//   function handleClick() {
//     count += 1;
//     console.log(count);
//   }

//   return (
//     <div className="container">
//       <div className="count">{count}</div>
//       <img src={props.imageUrl} onClick={handleClick}/>
//       <h1>{props.title}</h1>
//       <p>{props.subtitle}</p>
//     </div>
//   );
// }

var Hero = React.createClass({
  getInitialState: function() { //задаем начальное состояние
    return {
      count: 0
    };
  },

  handleClick: function() {
    this.setState({count: this.state.count + 1}); //меняем состояние
  },

  render: function() {
    return (
      <div className="container">
        <div className="count">{this.state.count}</div>
        <img src={this.props.imageUrl} onClick={this.handleClick}/>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Hero title="React"
        subtitle="Библиотека для создания пользовательских интерфейсов"
        imageUrl="https://cdn.worldvectorlogo.com/logos/react.svg" />
    <Hero title="Angular 2"
        subtitle="Один фремворк"
        imageUrl="https://angular.io/assets/images/logos/angular/angular.png" />
  </div>,
document.getElementById('root')); //2 компонета нельзя передавать одновременно, их нужно обернуть
