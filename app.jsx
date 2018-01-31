function Hero() {
  return (
    <div className="container">
      <img src="https://cdn.worldvectorlogo.com/logos/react.svg" />
      <h1>React</h1>
      <p>Библиотека для создания пользовательских интерфейсов</p>
    </div>
  );
}

ReactDOM.render(<Hero />, document.getElementById('root'));
