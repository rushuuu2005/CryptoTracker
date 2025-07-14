import React from 'react'

const Footer = () => {
  return (
    <footer className=" sticky w-[99vw] py-6 text-center text-white/70 text-l bg-violet-800 border-t-1 border-t-[#8AC8E9] rounded-lg">
      © {new Date().getFullYear()} CryptoTracker. Built for crypto enthusiasts. All rights reserved.
    </footer>
  )
}

export default Footer;