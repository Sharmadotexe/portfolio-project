import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects' >
        <h1 className='heading'>
            A Small Selection of {' '}
            <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className='flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, des, title, img, iconLists, link}) => (
                <div key ={id} className='sm:h-[41rem] sm:w-[570px] h-[32rem] lg:min-h-[32.5rem] flex items justify-center w-[80vw] '>
                    <PinContainer title={title} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10'>
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img 
                            src={img} 
                            alt={title}
                            className='z-10 absolute bottom-0 rotate-3 h-5/6 w-4/6 rounded-3xl'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 '>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex item items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center '>
                                {iconLists.map((icon)=>(
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center '> 
                                    <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href={link} className='flex lg:text-xl md:text-xs text-sm text-purple'>Github Link</a>
                                <FaLocationArrow className='ms-3 colour="#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects