import css from '../Counter/counter.module.css';
import React from 'react';
import Controls from './Controls/Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };
  render() {
    return (
      <div className={css.counter}>
        <span className={css.counter__value}>{this.state.value}</span>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
