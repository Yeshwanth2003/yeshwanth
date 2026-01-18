import Container from "./Container"
import "./style/resume.css"

export default function Resume() {
     return (
          <>
               <section id="resumeDiv" className="section-cmn-100-m resume-section flex-jc-al-c">
                    <div className="resume-header flex-jc-al-c">
                         <h1>Resume</h1>
                         <p>All my educational qualifications
                         </p>
                    </div>
                    <Container />
               </section>
          </>
     )
}
