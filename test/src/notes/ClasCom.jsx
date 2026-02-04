import { Component } from "react";

class ClassCom extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "Amit",
      increment: () => {
        this.setState({ count: this.state.count + 1 });
        // this.setState({ name: (this.state.name = "Rahul") });
      },
      decrement: () => {
        this.setState({ count: this.state.count - 1 });
      },
    };
  }
  render() {
    return (
      <div>
        {/* <h1>Class com: {this.state.name}</h1> */}
        <h1>Class com: {this.state.count}</h1>
        <button onClick={this.state.increment}>Plus+</button>
        <button onClick={this.state.decrement}>Minus-</button>
      </div>
    );
  }
}

export default ClassCom;
