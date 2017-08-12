import React, { Component } from 'react';

class SingleInputForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this, props.onSubmit);
  }

  onSubmit(submitMethod, event) {
    event.preventDefault();
    submitMethod(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={(node) => { this.input = node; }} />
          <button type="submit">{this.props.text}</button>
        </form>
        {this.props.subtitle}
      </div>
    );
  }
}

export default SingleInputForm;
