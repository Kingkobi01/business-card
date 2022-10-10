import React from 'react'

const Info = () => {
  return (
    <div className='info'>
      <img className='info--img' src="images/laura.png" alt="" />
      <h2 className='name'>Adwoa Mansa</h2>
      <p className="job">Frontend Developer</p>
      <small><a href="index.html">adwoamansa.website</a></small>
      <div className="contacts">
        <div className="email">
          <img src="images/Mail.png" alt="" />
          Email
        </div>
        <div className="linkedIn">
          <img src="images/linkedin.png" alt="" />
          LinkedIn
        </div>
      </div>
    </div>
  )
}

export default Info