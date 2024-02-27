import { useContext, useRef, useState } from "react";
import GitProvider from "../Provider/GitProvider";
import DownloadCV from "../util/DownloadCV";
import useLiveUpdateElem from "../../customHooks/useLiveUpdateElem";

export default function Right() {
  return (
    <>
      <div className="about-right-div flex-jc-c">
        <div className="about-right-h flex-jc-c">
          <h1>About Me</h1>
          <p>
            Be born with fame if birth you want, If not of birth you must not
            vaunt.
          </p>
        </div>
        <div className="about-bio">
          <ul className="about-ul flex-jc-c">
            <li className="about-li flex-al-c">
              <div>Name:</div>
              <div>Yeshwanth S</div>
            </li>
            <li className="about-li flex-al-c">
              <div>Date of birth:</div>
              <div>August 08, 2003</div>
            </li>
            <li className="about-li flex-al-c">
              <div>Address:</div>
              <div>9/66c Devala, Gudalur, Nilgiris, TamilNadu India</div>
            </li>
            <li className="about-li flex-al-c">
              <div>PinCode:</div>
              <div>643212</div>
            </li>
            <li className="about-li flex-al-c">
              <div>Email:</div>
              <div>
                <a href="mailto: yeshwanth.rmm.8@gmail.com">
                  yeshwanth.rmm.8@gmail.com
                </a>
              </div>
            </li>
            <li className="about-li flex-al-c">
              <div>Phone:</div>
              <div>
                <a href="tel:+919360195496">+919360195496</a>
              </div>
            </li>
          </ul>
        </div>
        <AboutFooter />
      </div>
    </>
  );
}

function AboutFooter() {
  const { no_of_Repo } = useContext(GitProvider);
  const pjStatElem = useRef();
  const [rep_stat, setRepStat] = useState(0);

  // initiates the live updates in on the given
  useLiveUpdateElem({
    element: pjStatElem,
    state: rep_stat,
    setState: setRepStat,
    initialCount: no_of_Repo,
  });

  return (
    <>
      <div className="about-footer flex-jc-c">
        <p ref={pjStatElem}>
          <span>{rep_stat}</span> Projects Completed
        </p>
        <DownloadCV />
      </div>
    </>
  );
}
