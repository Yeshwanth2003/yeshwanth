import Right from "./Right";
export default function Container() {
  return (
    <>
      <section id="aboutDiv" className="section-cmn-100 flex-jc-al-c">
        <div className="about-inner about-left"></div>
        <div className="about-inner about-right">
          <Right />
        </div>
      </section>
    </>
  );
}
