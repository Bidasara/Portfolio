import React from 'react'
import { skills } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="max-container flex flex-col">
       <h1 className="head-text">
        Hello, I'm <span className='font-semibold text-blue-700'>Harshit</span>
       </h1>
       <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>An Undergraduate student from Delhi Technological University based in Delhi,specializing in technical education through hands-on learning and building applications.</p>
       </div>
       <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>
          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill)=>(
               <div className="block-container h-20 w-20">
                  <div className="btn-front rounded-xl flex justify-center items-center">
                     <img src={skill.imageUrl} alt={skill.name}
                      className=" w-1/2 h-1/2 object-contain" />
                  </div>
               </div>
            ))}
          </div>
       </div>
       <div>
         <hr className=" bg-slate-200" />
         <CTA/>
       </div>
    </section>
  )
}

export default About
