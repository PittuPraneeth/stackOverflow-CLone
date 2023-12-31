import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/black.png'
const Widget = () => {
  return (
    <div className='widget'>
      <h4>The overflow blog</h4>
      <div className='right-sidebar-div1'>
        <div className='right-sidebar-div2'>
            <img src={pen} alt="pen" width='18' />
            <p> Observability is key to future of software (and your DevOps career)</p>
        </div>      
        <div className='right-sidebar-div2'>
            <img src={pen} alt="pen" width='18' />
            <p> Podcast 374: How valuable is your screen name?</p>
        </div>   
      </div>

      <h4>Feature on meta</h4>
      <div className='right-sidebar-div1'>
        <div className='right-sidebar-div2'>
            <img src={comment} alt="comment" width='18' />
            <p> Review queue workflows -Final release.... </p>
        </div>      
        <div className='right-sidebar-div2'>
            <img src={comment} alt="comment" width='18' />
            <p> Please welcome valued Associates: #958 - V2Blast #959 - SpencerG</p>
        </div>
        <div className='right-sidebar-div2'>
            <img src={blacklogo} alt="logo" width='18' />
            <p> Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
        </div>      
      </div>

      <h4>Meta Posts</h4>
      <div className='right-sidebar-div1'>
        <div className='right-sidebar-div2'>
            <p>38</p>
            <p> Why was this spam flag declined, yet the question is marked as spam?</p>
        </div>      
        <div className='right-sidebar-div2'>
           <p>28 </p>
            <p> What is the best course of action when a user has high enough rep to...</p>
        </div>   
        <div className='right-sidebar-div2'>
            <p>48 </p>
            <p> Is a link to the "How to ask" help page a useful comment?</p>
        </div>   
      </div>


    </div>
  )
}

export default Widget
