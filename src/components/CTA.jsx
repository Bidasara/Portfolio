import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Liked my skills?<br className="sm:block hidden" /> Let's build something together</p>
        <Link to="/contact" className="px-3 py-2 font-semibold bg-blue-500 rounded-md text-white">
            Contact
        </Link>
    </section>
  )
}

export default CTA
