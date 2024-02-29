import Container from "./Container"
import "./style/alert.css"

export default function Alert({ message }) {
     return (
          <>
               <Container message={message} />
          </>
     )
}
