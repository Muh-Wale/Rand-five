import React from 'react'
import ProjectItem from './ProjectItem'
import uno from '../assets/uno.png'
import dos from '../assets/dos.png'
import tres from '../assets/tres.png'
import quatre from '../assets/quatre.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className=' text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className=' text-center py-8'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, facilis sint quis qui perspiciatis pariatur nam cumque eligendi officia odit!.Modi, facilis sint quis qui perspiciatis pariatur nam cumque eligendi officia odit!.
            </p>
            <div className=' grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={uno} title='Crypto App'/>
                <ProjectItem img={dos} title='Property App'/>
                <ProjectItem img={tres} title='Netflix App'/>
                <ProjectItem img={quatre} title='Twitch App'/>
            </div>
        </div>
    )
}

export default Projects
