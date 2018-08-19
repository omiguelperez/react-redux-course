'use strict'

const container = document.getElementById('app')

const CountContext = React.createContext(0)

/* Pure Component with UI */
function HelloComponent (props) {
  return <CountContext.Consumer>
    {
      count => <h1 id="title" onClick={props.handleClick}>
        Hello {props.name} {count}
      </h1>
    }
  </CountContext.Consumer>
}

/* State component with Logic */
class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    console.log('El componente se va a montar!')
  }

  componentDidMount () {
    console.log('El componente se ha montado!')
    // document.addEventListener('click', this.handleClick)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('Componente recibe propiedades y estados', nextProps, nextState)

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

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('Componente antes de actualizar', prevProps, prevState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Componente ha sido actualizado', prevProps, prevState)
  }

  componentWillUnmount () {
    // document.removeEventListener('click', this.handleClick)
  }

  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render () {
    return <CountContext.Provider value={this.state.count}>
      <HelloComponent
        name={this.props.name}
        count={this.state.count}
        handleClick={this.handleClick}
      />
    </CountContext.Provider>
  }
}

ReactDOM.render(
  <MyComponent name="Oscar" />,
  container
)

/* I want update state when component recieve new props */
setTimeout(() => {
  ReactDOM.render(
    <MyComponent name="Miguel" />,
    container
  )
}, 2000)
