'use strict'

class HelloComponent extends React.Component {
  render () {
    const name = this.props.name
    return <h1 id="title">Hello {name}</h1>
  }
}

ReactDOM.render(
  <HelloComponent name="Oscar" />,
  document.getElementById('app')
)
