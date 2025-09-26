import React from 'react'
import Button from '../../components/Button/Button'
import './Home.css'
import { ChevronRight } from "lucide-react";
import heroImage from '../../assets/images/heroImage.png'
import InfiniteMarqueeSlider from '../../components/InfiniteMarqueeSlider';

const Home = () => {
  return (
    <div className='home'>
        <div className="gridBg">
            <div className='heroTxtBox'>
                <p className='heroTxt1'>Your Notes and Tasks Are Messy... <br /> Our AI Makes Them Work for You</p>
                <p className='heroTxt2'>Organize your thoughts, track your to-dos, and get smart suggestions in one unified workspace designed for start-up founders.</p>
                <Button 
                    width="250px"
                    height="55px"
                    title="Get Started" 
                    Icon={ChevronRight}
                />
            </div>
            {/* <InfiniteMarqueeSlider/> */}
        </div>
        
        <div className='heroImgBox'>
            <img src={heroImage} alt="" className='heroImg'/>
        </div>
       

        <div className="stats">
            <div className="stat">
                <div className='statHead'>
                    <p className='statHeadTxt'>92<span style={{color: '#ab3cfa'}}>%</span></p>
                    <p style={{color: '#ab3cfa'}}>Increased Productivity</p>
                </div>
                
                <p className='statTxt'>Most users report completing tasks faster and feeling more in control of their day</p>
            </div>

            <div className="stat">
                <div className='statHead'>
                    <p className='statHeadTxt'>4.5M<span style={{color: '#ab3cfa'}}>+</span></p>
                    <p style={{color: '#ab3cfa'}}>Notes Organized Automatically</p>
                </div>
                
                <p className='statTxt'>Our AI has helped declutter millions of messy notes into clear, actionable insights.</p>
            </div>

            <div className="stat">
                <div className='statHead'>
                    <p className='statHeadTxt'>100K<span style={{color: '#ab3cfa'}}>+</span></p>
                    <p style={{color: '#ab3cfa'}}>Users and Growing</p>
                </div>

                <p className='statTxt'>From solo builders to scaling teams, thousands use StartNotesAi to stay productive.</p>
            </div>
        </div>
    </div>
  )
}

export default Home