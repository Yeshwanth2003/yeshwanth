import Container from "./Container"
import "./style/contact.css"

export default function Contact() {
     return (
          <>
               <section id={"contactDiv"} className={"section-cmn-100 contact-section flex-jc-al-c"}>
                    <div className="contact-header flex-jc-al-c">
                         <h1>Contact Me</h1>
                         <p>Write Something here</p>
                    </div>
                    <Container />
               </section>
          </>
     )
}
