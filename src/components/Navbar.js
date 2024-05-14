import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between'>
        <div>Lakrandi Ayeshani</div>
        <div className='nav-options flex'>
            <div>About</div>
            <div>Project</div>
            <div>Experience</div>
            <div>Education</div>
        </div>
    </div>
  )
}

export default Navbar