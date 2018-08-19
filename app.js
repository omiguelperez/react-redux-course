'use strict'

const container = document.getElementById('app')

const CountContext = React.createContext()

function HelloComponent (props) {
  return <CountContext.Consumer>
    {
      count => <h1 id="title" onClick={props.handleClick}>
        Hello {props.name} {count}
      </h1>
    }
  </CountContext.Consumer>
}

function Counter (WrappedComponent) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = { count: 0 }
      this.handleClick = this.handleClick.bind(this)
    }
  
    shouldComponentUpdate (nextProps, nextState) {
      const { name } = this.props
      const { count } = this.state
      
      /* Update state count after click  */
      if (name === nextProps.name && count !== nextState.count)
        return true
      
      /* Update name after 2 seconds */
      if (name !== nextProps.name && count === nextState.count) {
        this.state.count *= 2
        return true
      }
      
      return false
    }
  
    handleClick () {
      this.setState({
        count: this.state.count + 1
      })
    }
    
    render () {
      return <CountContext.Provider value={this.state.count}>
        <WrappedComponent
          name={this.props.name}
          count={this.state.count}
          handleClick={this.handleClick}
        />
      </CountContext.Provider>
    }
  }
}

const CounterHOC = Counter(HelloComponent)

ReactDOM.render(
  <CounterHOC name="Oscar" />,
  container
)

/* I want update state when component recieve new props */
setTimeout(() => {
  ReactDOM.render(
    <CounterHOC name="Miguel" />,
    container
  )
}, 2000)
