import React from 'react'
import Body from './Body'
import Header from './Header'
import "./style/skill.css"

export default function SkillIndex() {
     return (
          <>
               <section id='skillsDiv' className='section-cmn-100 flex-jc-al-c'>
                    <div className='skill-wrapper'>
                         <Header />
                         <Body />
                    </div>
               </section>
          </>
     )
}
