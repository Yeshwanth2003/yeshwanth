import React from "react";

export default function Body() {
  return (
    <>
      <div className="skill-body flex-jc-sb-al-c">
        <div className="skill-body-ctn flex-jc-al-c">
          <SkillBox name={"C/C++(Core Languages)"} percent={"60"} />
          <SkillBox name={"Javascript"} percent={"85"} />
          <SkillBox name={"Web Development(HTML,CSS)"} percent={"85"} />
          <SkillBox name={"React JS(Frontend framework)"} percent={"90"} />
          <SkillBox
            name={"React Native(Android/IOS framework)"}
            percent={"50"}
          />
          <SkillBox name={"Node Js(For Backend)"} percent={"70"} />
          <SkillBox name={"MySQL(For Database)"} percent={"80"} />
          <SkillBox name={"MongoDB"} percent={"45"} />
          {/* Two more box can be added for decent look */}
        </div>
        <div className="skill-body-footer flex-jc-al-c">
          <p>
            Other Known Technologies are SSE,SSR,WebSocket,WebRTC............
          </p>
        </div>
      </div>
    </>
  );
}

function SkillBox({ name, percent }) {
  return (
    <>
      <div className="skill-skillbox">
        <div className="skill-skillb-1 flex-jc-sb-al-c">
          <span className="skill-skillb-name">{name}</span>
          <span className="skill-skillb-percent">{percent}%</span>
        </div>
        <div className="skill-skillb-2 flex-al-c">
          <div
            className="skill-skillb-bar"
            style={{ "--percent": `${percent}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
