import React from 'react'
import picTwo from './picTwo.jpg'
import {TypeAnimation} from 'react-type-animation'
import {  FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={picTwo} alt="" />
            <div className='w-full h-screen bg-white/50 absolute top-0 left-0'>
                <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className=' sm:text-5xl text-4xl font-bold text-gray-800'>I'm John Doe</h1>
                    <h2 className=' flex items-center sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000
                            ]}
                            wrapper="div"
                            cursor={true}
                            style={{ fontSize: '1em', padding: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className=' flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter size={20} className=' cursor-pointer'/>
                        <FaFacebookF size={20} className=' cursor-pointer'/>
                        <FaInstagram size={20} className=' cursor-pointer'/>
                        <FaLinkedinIn size={20} className=' cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
