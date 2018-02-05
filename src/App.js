import React, {Component} from 'react';

class App extends Component {
  submit = () => {
    console.log('submit', this.testInput.value);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="test" ref={(input) => this.testInput = input}/>{/* ref лучше использовать когда нельзя использовать props или state*/}
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default App;
