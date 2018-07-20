import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>404 - You're Lost</h1>
    <p>
      You're now in the Twilight Zone. It's ok, we know you don't want to be
      here. So here's a <Link to="/">door</Link>. You can go back{' '}
      <Link to="/">Home</Link> there.
    </p>
  </div>
)

export default NotFound
