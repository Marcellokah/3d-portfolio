import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {/* As a junior front end developer with a focus on React JS, I bring a passion for creating clean, efficient, and engaging user experiences to every project I work on. Whether building dynamic web applications or designing intuitive interfaces, I strive to create digital experiences that are not only functional, but also visually appealing and enjoyable to use. With a strong foundation in HTML, CSS, and JavaScript, as well as experience with popular front end libraries and frameworks, I am always eager to learn and apply new skills to my work. I am excited to continue growing and developing my abilities as a front end developer and to contribute to innovative and impactful projects. */}

        Welcome to my portfolio website! My name is Marcell Almási and I am a junior front end developer based in Hungary. I am currently on the hunt for my first professional opportunity in the industry, and I am excited to share with you the projects and skills that I have been working on. Though I am a dropout from the University of Szeged where I was studying computer science, I have continued to pursue my passion for programming on my own, and I have developed a strong foundation in front end development, particularly with React JS. My portfolio showcases my dedication to learning and creating high-quality digital experiences, and I am eager to connect with like-minded professionals and potential employers. Thank you for taking the time to explore my work!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");