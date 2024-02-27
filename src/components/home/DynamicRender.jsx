import { useEffect, useRef, useState } from "react";

// setting global so that every global scope can access
const list1 = "My Name is ".split("");
const list2 = "Yeshwanth S".split("");
const list3 = "A Full Stack Developer".split("");
export default function DynamicRender() {
  const dynamicHeader1 = useRef();
  const dynamicHeader2 = useRef();
  const dynamicHeader3 = useRef();

  useEffect(() => {
    HomeAniOne({ dynamicHeader1, dynamicHeader2, dynamicHeader3 }, {});
  }, []);

  return (
    <>
      <div className="home-dr-field flex-jc-al-c">
        <h1 className="home-title-box">
          <span ref={dynamicHeader1}></span>
          {/* <br></br> */}
          <span ref={dynamicHeader2} className="home-title-gold"></span>
          <br></br>
          <span ref={dynamicHeader3} className="home-title-limited"></span>
        </h1>
        <div className="home-footer">
          <a
            href="https://github.com/Yeshwanth2003?tab=repositories"
            target={"_blank"}
          >
            <button>My Work</button>
          </a>
          <button className="gold">Hire Me</button>
        </div>
      </div>
    </>
  );
}
// homw Animation two
function HomeAniTwo({}, { dynamicHeader1, dynamicHeader2, dynamicHeader3 }) {
  setTimeout(() => {
    HomeAniOne({ dynamicHeader1, dynamicHeader2, dynamicHeader3 }, {});
  }, 1000);
}
// home animation one
function HomeAniOne({ dynamicHeader1, dynamicHeader2, dynamicHeader3 }, {}) {
  // initilize to zero or no value
  dynamicHeader1.current.innerHTML = "";
  dynamicHeader2.current.innerHTML = "";
  dynamicHeader3.current.innerHTML = "";

  list1.map((val, index) => {
    // span1
    setTimeout(() => {
      dynamicHeader1.current.innerHTML += val;
    }, index * 100);
    if (index === list1.length - 1) {
      // span2
      setTimeout(() => {
        list2.map((val, index) => {
          setTimeout(() => {
            dynamicHeader2.current.innerHTML += val;
          }, index * 100);
          if (index === list2.length - 1) {
            // span3
            setTimeout(() => {
              list3.map((val, index) => {
                setTimeout(() => {
                  dynamicHeader3.current.innerHTML += val;
                }, index * 100);
                if (index === list3.length - 1) {
                  // recurn over and over again by calling next function
                  setTimeout(() => {
                    HomeAniTwo(
                      {},
                      { dynamicHeader1, dynamicHeader2, dynamicHeader3 }
                    );
                  }, index * 200);
                }
              });
            }, (index + 1) * 100);
          }
        });
      }, (index + 1) * 100);
    }
  });
}
