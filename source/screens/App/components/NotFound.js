import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>404 - You&#39;re Lost</h1>
    <p>
      You&#39;re now in the Twilight Zone. It&#39;s ok, we know you don&#39;t
      want to be here. So here&#39;s a <Link to="/">door</Link>. You can go back
      <Link to="/">Home</Link> there.
    </p>
  </div>
)

export default NotFound
