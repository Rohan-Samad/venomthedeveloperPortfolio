import React from "react";

export default function SkillBox() {
  return (
    <div>
      <div className="skillBox text-white mt-40">
        <div className="basicSkills text-5xl my-2 font-bold text-center">
          Mine Basic Skills in
        </div>
        <div className="py-16">
          <ul className="flex flex-wrap justify-around">
            <li className="html">
              {" "}
              <div className="flex justify-center items-center my-3">
                <i
                  className="fa-solid fa-code flex justify-center text-center text-xl duration-150 ease-in-out font-bold items-center w-5 h-5 p-5 rounded-full text-orange-500 bg-white "
                  style={{ display: "flex" }}
                ></i>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-white hover:text-pink-500">
                HTML5
              </div>
            </li>
            <li className="css">
              <div className="flex justify-center items-center my-3">
                <i
                  className="fa-brands fa-css3 flex justify-center text-center text-xl duration-150 ease-in-out font-bold items-center w-5 h-5 p-5 rounded-full text-blue-500 bg-white "
                  style={{ display: "flex" }}
                ></i>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-white hover:text-pink-500">
                CSS3
              </div>
            </li>
            <li className="tailwind">
              <div className="flex justify-center items-center my-3">
                <i
                  className="fa-solid fa-leaf flex justify-center text-center text-xl duration-150 ease-in-out font-bold items-center w-5 h-5 p-5 rounded-full text-cyan-500 bg-white "
                  style={{ display: "flex" }}
                ></i>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-white hover:text-pink-500">
                Tailwind Css
              </div>
            </li>
            <li className="javascript">
              <div className="flex justify-center items-center my-3">
                <i
                  className="fa-brands fa-square-js flex justify-center text-center text-xl duration-150 ease-in-out font-bold items-center w-5 h-5 p-5 rounded-full text-yellow-500 bg-white "
                  style={{ display: "flex" }}
                ></i>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-white hover:text-pink-500">
                Javascript
              </div>
            </li>
            <li className="react">
              <div className="flex justify-center items-center my-3">
                <i
                  className="fa-brands fa-react flex justify-center text-center text-xl duration-150 ease-in-out font-bold items-center w-5 h-5 p-5 rounded-full text-cyan-500 bg-white "
                  style={{ display: "flex" }}
                ></i>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-white hover:text-pink-500">
                React
              </div>
            </li>
            <li className="express">
              <div className="flex justify-center items-center my-3">
                <i
                  className="fa-brands fa-cc-amex flex justify-center text-center text-xl duration-150 ease-in-out font-bold items-center w-5 h-5 p-5 rounded-full text-purple-500 bg-white "
                  style={{ display: "flex" }}
                ></i>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-white hover:text-pink-500">
                Express
              </div>
            </li>
            <li className="nodejs">
              <div className="flex justify-center items-center my-3">
                <i
                  className="fa-brands fa-node flex justify-center text-center text-xl duration-150 ease-in-out font-bold items-center w-5 h-5 p-5 rounded-full text-green-500 bg-white "
                  style={{ display: "flex" }}
                ></i>
              </div>
              <div className="rounded-lg px-4 py-2 hover:bg-white hover:text-pink-500">
                Nodejs
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
