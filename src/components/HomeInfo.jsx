import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox=({text,link,btnText})=>(
    <div className="bg-amber-800 relative flex mb-4">
        <p className=" font-medium sm:text-lg text-center ">{text}</p>
        <Link to={link} className=" bg-white py-2 px-3 center-custom absolute -bottom-14 left-32 rounded-lg text-amber-700 text-sm font-semibold">
            {btnText}
        </Link>
    </div>
)
const renderContent={
    4:(
        <h1 className="sm:text-xl sm:leading-snug text-center bg-amber-800 py-4 px-8 mx-5 text-white rounded-2xl">
            <InfoBox text="Need a project done or looking for a dev? Then do connect" link="/contact" btnText="Let's Connect"/>
        </h1>
    ),
    3:(
        <h1 className="sm:text-xl sm:leading-snug bg-amber-800 py-4 px-8 mx-5 text-white rounded-2xl">
            <InfoBox text="Picked up many skills along the Journey" link="/contact" btnText="Learn More" /></h1>
    ),
    1:(
        <h1 className="sm:text-l sm:leading-snug text-center bg-amber-800 py-4 px-8 mx-5 text-white rounded-2xl">Hi 👋, i am <span className=" font-bold">Harshit</span>
        <br />
        A student from Delhi Technological University</h1>
    ),
    2:(
        <h1 className="sm:text-xl sm:leading-snug text-center bg-amber-800 py-4 px-8 mx-5 text-white rounded-2xl">
            <InfoBox text="Made many projects. Visit 👇 to look through some" link="/projects" btnText="Visit my Portfolio"/>
        </h1>
    )
}
const HomeInfo = ({CurrentStage}) => {
    return renderContent[CurrentStage] || null
}

export default HomeInfo
