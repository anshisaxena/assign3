import React from 'react'

import Users from './Users'
import FetchCards from './FetchCards'
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Users />
    <FetchCards />
  </div>
  )
}

export default Home
