import React from 'react';

class Button extends React.Component {
    state = { counter: 0 };
    
    handleClick = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1 
      }));
    };
    
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.counter}
        </button>
      );
    }
  }

  export default Button