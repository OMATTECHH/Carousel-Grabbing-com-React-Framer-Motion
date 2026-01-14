import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react";

import Img1 from "../../assets/wallhaven-3qkmpy_1920x1080.png";
import Img2 from "../../assets/wallhaven-7jjyd9_1920x1080.png";
import Img3 from "../../assets/wallhaven-gwwo37_1920x1080.png";
import Img4 from "../../assets/wallhaven-we76xx_1920x1080.png";

const Conteudo = () => {

    const layout = [Img1, Img2, Img3, Img4];
    const carrosel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const scrollWidth = carrosel.current.scrollWidth
        const offsetWidth = carrosel.current.offsetWidth
        setWidth(scrollWidth - offsetWidth)
    },[])

    useEffect
  return (
    <>
    <div className='p-3'>
    <div className='min-w-95 text-center'>
        <motion.h1 initial={{x: 100}} animate={{x: 0}} transition={{duration: 1}} className='text-center text-6xl font-bold uppercase title'>grabbing</motion.h1>
    </div>
    <section>
        <div className='flex justify-center items-center  min-h-dvh main relative'>

            <motion.div className='struct w-full max-w-95 sm:max-w-160 md:max-w-200 lg:max-w-5xl xl:max-w-375 absolute top-50' 
            whileTap={{cursor: "grabbing"}}
            ref={carrosel}>

                <motion.div className='inner'
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                initial={{x: 250}}
                animate={{x: 0}}
                transition={{duration: 1}}>

                    {layout.map((i) => (

                        <motion.div key={i} className='item min-w-70 min-h-45 sm:min-w-80 sm:min-h-55 md:min-w-115  md:min-h-65 lg:min-w-175 lg:min-h-100'>
                            <img src={i} alt="wallhavemRandom" loading='lazy' draggable={false}/>
                        </motion.div>
                    ))}

                </motion.div>

            </motion.div>

        </div>
    </section>
    </div>
    </>
  )
}

export default Conteudo
