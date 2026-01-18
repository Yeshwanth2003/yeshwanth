import Container from "./Container"
import "./style/alert.css"

export default function Alert({ message,visible}) {
     return (
          <>
               {visible && <Container message={message} />}
          </>
     )
}
