import React from 'react'

function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between p-4">
      
        <h1>Comon</h1>
        {/* nav links */}
        <ul className="flex justify-center space-x-4">

          <li>Home</li>
          <li>About</li>
          <li>Members</li>
          <li>Portfolio pages</li>
          <li>News</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>

        <h1>Join server</h1>
    </div>
  )
}

export default Navbar
