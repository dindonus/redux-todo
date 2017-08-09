import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor() {
    super()
    this.input = null
  }
  onSubmit(event) {
    event.preventDefault()
    if (!this.input.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.input.value))
    this.input.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={node => {this.input = node}} />
          <button type="submit">Add Todo</button>
        </form>
        {this.props.name} is {this.props.occupation}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  occupation: "passing props"
})

export default AddTodo = connect(mapStateToProps)(AddTodo)
