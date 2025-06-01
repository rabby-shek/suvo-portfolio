import React from 'react'

const Footer = () => {
  const year = new Date();
  const getThisYear = year.getFullYear(); 
  return (
  <footer className="text-center text-lg-start">
  {/* Copyright */}
  <div className="text-center p-3">
    © {getThisYear} Copyright: MD Rabby Shek Suvo
  </div>
</footer>

  )
}

export default Footer
