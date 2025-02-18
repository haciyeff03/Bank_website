import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discout" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white '>20%</span> Discount For {""}
          <span className='text-white'>1 Month</span> Account
          </p>
      </div>
      <div className='flex flex-row items-center justify-between w-full'>
<h1 className='flex-1 font-semibold font-poppins ss:-text-[72px] text-[52px] text-white ss:leading-[90px] leading-[75px]'>The Next  <br className='hidden sm:block' /> {" "}
<span className='text-gradient'>Generation</span> {" "}
<br />
  Payment Method.
</h1>
<div className='hidden mr-0 ss:flex md:mr-4'>
  <GetStarted/>
  
</div>
      </div>
    </div>
  </section>
)


export default Hero