import { useEffect, useRef } from "react";
import Options from "./Options";
import "./style/header.css";

// Header's Index
export default function Header() {
  // header ref
  const header_ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 70) {
        header_ref.current.classList.add("header-on-scroll")
        return
      }
      header_ref.current.classList.remove("header-on-scroll")
    })
  }, [])
  return (
    <>
      <header ref={header_ref} className="flex-jc-al-c">
        <div className="flex-jc-sb-al-c header-wrapper">
          <div className="flex-al-c header-p1">Yeshwanth</div>
          <div className="header-p2">
            <div className="header-mobileTri flex-jc-al-c">
              <div>
                <label htmlFor="headerIN">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="rgb(181, 181, 181)">
                    <path d="M4 12H20M4 8H20M4 16H12" stroke="rgb(181, 181, 181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
              </div>
              <input id="headerIN" type={"checkbox"} />
            </div>
            <Options />
          </div>
        </div>
      </header>
    </>
  );
}
