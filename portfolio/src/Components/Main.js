import React, { useEffect, useState } from "react";
import spiderweb from "/images/spiderweb.png";
import venomSitting from "/images/venomSitting.png";
import venomAttacking from "/images/venomAttacking.png";
import venomAttacking2 from "/images/venomAttacking2.png";
import venomstandingPic from "/images/venomstandingPic.png";
import Testimonial from "/sub-components/Testimonial";
import SkillBox from "/sub-components/SkillBox";
import Contact from "/Contact";
let ammo = 123;

export default function Main() {
  const [hoverTimeout, setHoverTimeout] = useState(0);
  function changingVenomPosition(left, top, right, bottom, degree = 0) {
    let VAL;
    if (right === 1) {
      VAL = document.getElementById("venomAttackingLeft");
      VAL.classList.remove("hidden");
    } else {
      VAL = document.getElementById("venomAttackingRight");
      VAL.classList.remove("hidden");
    }
    setTimeout(() => {
      VAL.style.left = left + "%";
      VAL.style.top = top + "%";
      VAL.style.right = right + "%";
      VAL.style.bottom = bottom + "%";
      VAL.style.transform = `rotate(${degree}deg)`;
    }, [10]);
  }

  const hoveringFunc = (num, e) => {
    const sec = new Date(e.timeStamp).getSeconds();
    ammo = sec;
    let vigra = setTimeout(() => {
      if (sec === ammo) {
        let audio2 = document.querySelector("audio");
        let source = document.querySelector("#source");

        document.querySelector("body").classList.add("cursor-none");
        audio2.click();
        audio2.play();
        // audio2.append(source);

        let VAL;
        if (num < 5) {
          VAL = document.getElementById("venomAttackingLeft");
        } else if (num > 5) {
          VAL = document.getElementById("venomAttackingRight");
        }
        let VAS = document.querySelector(".venomSittingpos");
        VAS.classList.add("hidden");

        if (num === 1) {
          changingVenomPosition(-6, -18, 1, 1);
        } else if (num === 2) {
          changingVenomPosition(-5, 15, 1, 1);
        } else if (num === 3) {
          changingVenomPosition(0, 20, 1, 1, -70);
        } else if (num === 4) {
          changingVenomPosition(20, -15, 1, 1, 30);
        } else if (num === 6) {
          changingVenomPosition(1, 1, 50, 0, 110);
        } else if (num === 7) {
          changingVenomPosition(20, -18, 2, 1);
        } else if (num === 8) {
          changingVenomPosition(20, 18, 2, 1);
        } else if (num === 9) {
          changingVenomPosition(20, 20, 2, 50, 70);
        }
        setTimeout(() => {
          VAL.style.left = "5rem";
          VAL.style.top = "5rem";
          VAL.style.transform = "rotate(0deg)";
          VAL.classList.add("hidden");
          VAS.classList.remove("hidden");
        }, [400]);
      }
      setTimeout(() => {
        document.querySelector("body").classList.remove("cursor-none");
      }, [7000]);
    }, [700]);
    setHoverTimeout(vigra);
  };

  function stoppingFunc() {
    clearTimeout(hoverTimeout);
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".opa").classList.remove("hidden");
    }, [2000]);
    setTimeout(() => {
      document.querySelector(".opa").classList.add("hidden");
    }, [6000]);
  }, []);

  return (
    <>
      <div className="mainBox  bg-black p-9 pb-10">
        <div className="flex items-center flex-col lg:flex-row justify-around my-24">
          {/* <iframe src="../images/crunchvoice.mp3" allow="autoplay" /> */}
          <audio className="hidden">
            {" "}
            <source id="source" src="/crunchvoice.m4a" type="audio/mp3" />
          </audio>
          {/* <source id="source" src="/crunchvoice.mp3" type="audio/mp3" /> */}
          <div className="VenomName flex flex-col justify-center items-center font-semibold text-5xl lg:text-7xl w-[27rem]  my-9 overflow-hidden text-white">
            <div className="webName">
              Venom{" "}
              <div className="underline w-0 h-1 duration-200 ease-in-out bg-pink-600"></div>
            </div>{" "}
            <div className="the">
              {" "}
              The{" "}
              <div className="underline w-0 h-1 duration-200 ease-in-out bg-pink-600"></div>
            </div>{" "}
            <div className="develo">
              {" "}
              Developer{" "}
              <div className="underline w-0 h-1 duration-200 ease-in-out bg-pink-600"></div>
            </div>
            <p className="para text-center mt-4 text-sm p-3 px-16 lg:px-0">
              A Professional Full Stack Web Developer That Can Meet Your
              Requirments
            </p>
          </div>

          <div
            id="venomSitting"
            className="VenomSitting relative w-[12rem] h-[12rem] mb-6 "
          >
            <div className="opa absolute p-1 h-max w-max rounded-lg left-20 top-3 hidden z-40 text-sm bg-white text-black font-bold">
              Your Cursor is Disturbing Me 👿
            </div>
            <img
              src={venomAttacking}
              id="venomAttackingLeft"
              className="absolute z-[6] w-[10rem] hidden left-[18%] duration-100   top-[2%]"
              alt="Nothing"
            />
            <img
              src={venomAttacking2}
              id="venomAttackingRight"
              className="absolute z-[6] hidden w-[10rem] left-[18%] duration-100   top-[2%]"
              alt="Nothing"
            />
            <div
              onMouseEnter={(e) => {
                hoveringFunc(1, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div1  z-20 border-red-600 absolute w-[4rem] h-[4rem]"
            ></div>
            <div
              className="div2   z-20 border-red-600 top-[4rem] absolute w-[4rem] h-[4rem]"
              onMouseEnter={(e) => {
                hoveringFunc(2, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
            ></div>
            <div
              onMouseEnter={(e) => {
                hoveringFunc(3, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div3   z-20 border-red-600 bottom-0 absolute w-[4rem] h-[4rem]"
            ></div>
            <div
              onMouseEnter={(e) => {
                hoveringFunc(4, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div4   z-20 left-[4rem] border-red-600 absolute w-[4rem] h-[4rem]"
            ></div>
            <div
              onMouseEnter={(e) => {
                hoveringFunc(5, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div5   z-20 border-red-600 left-[4rem] top-[4rem] absolute w-[4rem] h-[4rem]"
            ></div>
            <div
              onMouseEnter={(e) => {
                hoveringFunc(6, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div6   z-20 border-red-600 left-[4rem] bottom-0 absolute w-[4rem] h-[4rem]"
            ></div>
            <div
              onMouseEnter={(e) => {
                hoveringFunc(7, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div7   z-20 border-red-600 right-0 absolute w-[4rem] h-[4rem]"
            ></div>
            <div
              onMouseEnter={(e) => {
                hoveringFunc(8, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div8   z-20 border-red-600 right-0 top-[4rem] absolute w-[4rem] h-[4rem]"
            ></div>
            <div
              onMouseEnter={(e) => {
                hoveringFunc(9, e);
              }}
              onMouseLeave={(e) => {
                stoppingFunc();
              }}
              className="div9   z-20 border-red-600 right-0 bottom-0 absolute w-[4rem] h-[4rem]"
            ></div>

            <div className="lanbtn left-[37%] -top-6 px-16 bg-yellow-600 ">
              {" "}
              Html
            </div>
            <div className="lanbtn -left-[15%] top-[34%] px-16  -rotate-[67deg] bg-green-500 ">
              {" "}
              Javascript
            </div>
            <div className="lanbtn left-[7%] -bottom-3   bg-blue-500 px-24">
              {" "}
              Css
            </div>
            <div className="lanbtn  right-[15%] -bottom-2 bg-pink-600 ">
              {" "}
              React
            </div>
            <div className="lanbtn -right-[14%] top-[34%]  rotate-[67deg] px-[17px] bg-purple-500 ">
              {" "}
              NodeJs
            </div>
            <img
              src={venomSitting}
              // id="venomSittingPose"
              className="venomSittingpos absolute z-[6]  w-[7rem] left-[21%] top-[18%]"
              alt="NOthing"
            />
            <img
              src={spiderweb}
              className="absolute w-[12rem] h-[11rem]"
              alt="NOthing"
            />
          </div>
        </div>
        <a
          target="_blank"
          className="rounded-lg border-t-2 border-b-2 border-pink-600 text-white text-xl px-5 py-2 font-bold cursor-pointer flex justify-center "
          href="https://www.fiverr.com/share/Dgjxq7"
        >
          <div>Place an Order !</div>
        </a>
        <SkillBox />
        <div className="venomPicPoetry my-32 flex justify-around items-center ">
          <div className="overflow-hidden rounded-lg">
            <img
              className="w-96 rounded-lg hover:scale-110 duration-200"
              src={venomstandingPic}
              alt="Venom Is The Best"
            />
          </div>
          <div className=" w-96 ml-4 text-white">
            <div className="poetry text-3xl w-60 lg:w-96 text-white font-bold flex">
              MAKE IT WORK, MAKE IT RIGHT, MAKE IT FAST!
            </div>
            <p className="text-sm my-5 flex justify-center">
              A professional Web developer since "2021"
            </p>
          </div>
        </div>
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}
