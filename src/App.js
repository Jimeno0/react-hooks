import React, { useState, useEffect } from 'react'
import { ThemeContext } from './context'
import {
  Background,
  MonogramLogo,
  Spacing,
  MadridLogo,
  Pattern,
  ReactLogo,
  Layout
} from './components'
import { Toggle } from './containers'

const App = (props) => {
  const scroll = useScroll(0)
  return (
    <ThemeContext.Consumer>
      {({ value }) => {
        return (
          <Layout theme={value}>
            <Toggle />
            <Background scroll={scroll} />
            <Pattern />
            <MonogramLogo scroll={scroll} />
            <ReactLogo scroll={scroll} />
            <MadridLogo scroll={scroll} />
            <Spacing id='scroll' size='200vh' />
          </Layout>
        )
      }}
    </ThemeContext.Consumer>
  )
}

const useScroll = (initialValue) => {
  const [scroll, setScroll] = useState(initialValue)

  const handleScroll = (e) => {
    const height = e.target.scrollTop
    setScroll(height)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })
  return scroll
}

// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       scroll: 0
//     }
//     this.handleScroll = this.handleScroll.bind(this)
//   }

//   componentDidMount () {
//     document.addEventListener('scroll', this.handleScroll, true)
//   }

//   handleScroll (e) {
//     const height = e.target.scrollTop
//     this.setState({ scroll: height })
//   }

//   componentWillUnmount () {
//     document.removeEventListener('scroll', this.handleScroll)
//   }

//   render () {
//     const { scroll } = this.state
//     return (
//       <Layout>
//         <Toggle />
//         <Background scroll={scroll} />
//         <Pattern />
//         <MonogramLogo scroll={scroll} />
//         <ReactLogo scroll={scroll} />
//         <MadridLogo scroll={scroll} />
//         <Spacing id='scroll' size='200vh' />
//       </Layout>
//     )
//   }
// }

export default App
