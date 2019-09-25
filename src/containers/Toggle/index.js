import React, { useState, useContext } from 'react'
import { ToggleComponent } from '../../components'
import { ThemeContext } from '../../context'

const Toggle = (props) => {
  const toggleHandler = useCheck(false)
  return (
    <ToggleComponent
      {...toggleHandler}
    />
  )
}

const useCheck = (initialValue) => {
  const [checked, onChange] = useState(initialValue)
  const { setValue } = useContext(ThemeContext)

  const handleChange = (checked) => {
    if (!checked) setValue('dark')
    if (checked) setValue('light')
    onChange(checked)
  }

  return { checked, onChange: handleChange }
}

// class Toggle extends Component {
//   constructor () {
//     super()
//     this.state = { checked: false }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange (checked) {
//     this.setState({ checked })
//   }

//   render () {
//     return (
//       <ToggleComponent
//         onChange={this.handleChange}
//         checked={this.state.checked}
//       />
//     )
//   }
// }

export { Toggle }
