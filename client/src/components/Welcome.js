import React from 'react'
import {useHistory} from 'react-router-dom'

function Welcome() {
  const history=useHistory()
  return (
    <div>
      {
        history.push('/signin')
      }
    </div>
  )
}

export default Welcome