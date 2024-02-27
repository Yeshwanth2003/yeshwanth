import { useEffect, useRef } from "react";

export default function Options() {
  // pointer to all lists
  const li_ref = useRef();
  //   pointer ref
  useListPointer(li_ref);

  return (
    <>
      <div className="header-optns-holder flex">
        <ul ref={li_ref} className="header-ul flex-jc-sb-al-c">
          <li
            pointingto={"homeDiv"}
            className="flex-jc-al-c pointing_underline"
          >
            Home
          </li>
          <li pointingto={"aboutDiv"} className="flex-jc-al-c">
            About
          </li>
          <li pointingto={"resumeDiv"} className="flex-jc-al-c">
            Resume
          </li>
          <li pointingto={"skillsDiv"} className="flex-jc-al-c">
            Skills
          </li>
          <li pointingto={"projectsDiv"} className="flex-jc-al-c">
            Projects
          </li>
          <li
            pointingto={"rolesDiv"}
            className="flex-jc-al-c"
          >
            Roles
          </li>
          <li pointingto={"contactDiv"} className="flex-jc-al-c">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

// utility ref
function useListPointer(all_list) {
  useEffect(() => {
    if (all_list.current) {
      const allChildNodes = all_list.current.children;
      for (const i of allChildNodes) {
        const moveTo = document.getElementById(i.getAttribute("pointingto"));
        i.addEventListener("click", (ev) => {
          ev.target.classList.add("pointing_underline");
          moveTo.scrollIntoView({ behavior: "smooth" });
          for (const j of allChildNodes) {
            if (ev.target == j) continue;
            j.classList.remove("pointing_underline");
          }
        });
      }
    }
  }, [all_list]);
}
