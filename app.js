'use strict'

/* Pure Component with UI */
function HelloComponent (props) {
  return <h1 id="title" onClick={props.handleClick}>
    Hello {props.name} {props.count}
  </h1>
}

/* State component with Logic */
class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render () {
    return <HelloComponent
      name={this.props.name}
      count={this.state.count}
      handleClick={this.handleClick}
    />
  }
}

ReactDOM.render(
  <MyComponent name="Oscar" />,
  document.getElementById('app')
)
