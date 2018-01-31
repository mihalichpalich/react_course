var image = React.createElement('img', {src: 'https://cdn.worldvectorlogo.com/logos/react.svg'});
var title = React.createElement('h1', null, 'React'); //1-й аргумент - название DOM-элемента, 2-й - свойства, 3-й - содержимое создаваемого элемента
var subtitle = React.createElement('p', null, 'Библиотека для создания пользовательских интерфейсов');
var container = React.createElement('div', {className: 'container'}, image, title, subtitle);

ReactDOM.render(container, document.getElementById('root')); //1-й аргумент - название созданного реакт-элемента, 2-й - место, куда его нужно поместить