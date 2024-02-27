import DynamicRender from "./DynamicRender";

export default function Container() {
  return (
    <>
      <section
        id="homeDiv"
        className="section-cmn-100 home-section flex-jc-al-c"
      >
        <div className="home-body">
          <div className="home-greet">Hello!</div>
          <div className="home-main flex-jc-al-c">
            <DynamicRender />
          </div>
        </div>
      </section>
    </>
  );
}
