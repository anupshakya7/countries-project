import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

  return (
    <h3>
    Something went wrong: {error.status}
    </h3>
  )
}

export default Error
