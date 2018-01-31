function Hero(props) { //получаем объект со свойствами из рендера
  return (
    <div className="container">
      <img src={props.imageUrl} />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

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
