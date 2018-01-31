// var jsx =
// <div className="container">
//   <img src="https://cdn.worldvectorlogo.com/logos/react.svg" />
//   <h1>React</h1>
//   <p>Библиотека для создания пользовательских интерфейсов</p>
// </div>;

// ReactDOM.render(jsx, document.getElementById('root'));

// var h1 = React.createElement('h1', null, 'React');
// var div = React.createElement('div', null, h1);

var jsx =
<div>
  <h1>React</h1>
</div>;

console.log(jsx);

var dom = ReactDOM.render(jsx, document.getElementById('root'));

console.log(dom);