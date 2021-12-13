import React, { FC } from 'react'

const Button: FC = ({ children }) => {
  return (
    <button className="bg-gray-600 bg-opacity-100 rounded-md">
      <div className="text-white text-xs leading-5 py-2 px-4">{children}</div>
    </button>
  )
}

export default Button
