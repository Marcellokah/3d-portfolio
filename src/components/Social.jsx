import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { socials } from '../constants';

const SocialMediaCard = ({ index, name, designation, company, image, link }) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="black-gradient p-10 rounded-3xl xs:w-[320px] w-full">
    <div className='mt-1'>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'><span className='blue-text-gradient'>@</span> {name}</p>
          <p className='mt-1 text-secondary text-[12px]'>{designation}{company}</p>
        </div>
        <div onClick={() => window.open(link, "_blank")} className="cursor-pointer">
          <img src={image} alt={name} className="w-[150px] ease-out hover:translate-y-1 transition-all rounded-full object-cover" />
        </div>
      </div>
    </div>
  </motion.div>
)

const SocialMedias = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Follow me</p>
          <h2 className={styles.sectionHeadText}>Social Media.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap justify-evenly gap-7`}>
        {socials.map((social, index) => (
          <SocialMediaCard key={social.link} index={index} {...social} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(SocialMedias, "social");