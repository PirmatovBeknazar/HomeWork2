import React from 'react'

const Name = (props) => {
  return (
    <div>
      <ol>
        <li>
            {props.userName}
            {props.lastName}
        </li>
      </ol>
    </div>
  )
}

export default Name
