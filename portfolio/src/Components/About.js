import react from "react";
import venomJoking from "/images/venomJoking.png";
import SkillBox from "./sub-components/SkillBox";
export default function About() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="bg-black w-[45rem] mx-auto flex pt-24 pb-5">
          <div className="">
            <img className="w-24" src={venomJoking} alt="" />
          </div>
          <div className="aboutName w-52 lg:w-[30rem]">
            <div className="aboutName font-bold text-4xl py-5 px-4 ">Hey!</div>
            <p className=" justify-center ">
              I am venom (<span className="text-pink-600"> Rohan Samad</span>)
              from planet Klytnar. I am Making Full-Stack-Websites. The
              professional Websites for your bussiness. I am Doing Web
              development since 2021. I had Learned many front-end and backened
              Languagues. I am also a freeLancer, You can also Visit my{" "}
              <a
                className="text-pink-600 inline"
                href="https://www.fiverr.com/share/Dgjxq7"
              >
                {" "}
                Fiverr Account
              </a>
              . I am graduating from Islamia University of Bahalwalpur. I had
              did long courses on Web Development!
              <br />
              Be prepared to become surprised after watching our designs. Our
              work is like painting, but our paint never dries out. We offer our
              art to make this world more beautiful visually. We are fighters
              who try hard to offer beauty through technology.
            </p>
          </div>
        </div>
        <div>
          <SkillBox />
        </div>
      </div>
    </>
  );
}
