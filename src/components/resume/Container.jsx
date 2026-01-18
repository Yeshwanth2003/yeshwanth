import DownloadCV from "../util/DownloadCV";

export default function Container() {
  return (
    <>
      <div className="resume-container flex-jc-al-c">
        <div className="resume-body flex-jc-al-c">
           <ResumeBox
            year={"2025-2027"}
            title={"Master of Technology in Ai"}
            ins={"IIT Kharagpur"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium optio illum sit fuga modi soluta, doloribus dolores molestias eius corporis aut itaque velit ipsam deleniti odio aliquid cupiditate! Ea."
            }
          />
          <ResumeBox
            year={"2021-2025"}
            title={"Bachelor of Technology in Ai&Ds"}
            ins={"SKCT,Coimbatore"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium optio illum sit fuga modi soluta, doloribus dolores molestias eius corporis aut itaque velit ipsam deleniti odio aliquid cupiditate! Ea."
            }
          />
          <ResumeBox
            year={"2019-2021"}
            title={"Higher Secondary School Certificate"}
            ins={"Scared Heart Matriculation School, Nilgiris"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium optio illum sit fuga modi soluta, doloribus dolores molestias eius corporis aut itaque velit ipsam deleniti odio aliquid cupiditate! Ea."
            }
          />
          <ResumeBox
            year={"2018-2019"}
            title={"Secondary School Certificate"}
            ins={"Holy Cross Convent Matriculation School, Nilgiris"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium optio illum sit fuga modi soluta, doloribus dolores molestias eius corporis aut itaque velit ipsam deleniti odio aliquid cupiditate! Ea."
            }
          />
          <ResumeBox
            year={"2016-2017"}
            title={"Diploma in Computer Application"}
            ins={"WinTech , Nilgiris"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium optio illum sit fuga modi soluta, doloribus dolores molestias eius corporis aut itaque velit ipsam deleniti odio aliquid cupiditate! Ea."
            }
          />
        </div>
        <div className="resume-footer">
          <DownloadCV />
        </div>
      </div>
    </>
  );
}
function ResumeBox({ year, title, ins, desc }) {
  return (
    <>
      <div className="resume-box flex-jc-c">
        <div className="resume-b-header flex-jc-c">
          <h1>{year}</h1>
          <h1>{title}</h1>
        </div>
        <div className="resume-b-body flex-jc-c">
          <h4>@{ins}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
