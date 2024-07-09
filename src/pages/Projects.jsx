import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
const Projects = () => {
  return (
    <section className="max-container flex flex-col">
       <h1 className="head-text">
        My <span className='font-semibold text-blue-700'>Projects</span>
       </h1> 
       <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>Work Under Progress 🛠️ Check out some of my projects down below</p>
       </div>

       <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project)=>(
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={project.iconUrl} alt="Project Icon" 
                  className="w-1/2 h-1/2 object-contain"/>
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-semibold">{project.name}</h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div><Link to={project.link} target='_blank' rel="noopener noreferrer" className="font-semibold text-blue-500">Live</Link><br /><Link to={project.githublink} target='_blank' rel="noopener noreferrer" className="font-semibold text-blue-500">Github link</Link></div>
              </div>
            </div>
          ))}
       </div>
       <hr className="border-slate-200" />
       <CTA/>
    </section>
  )
}

export default Projects
