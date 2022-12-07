import React, { useContext, useState } from "react";

import axios from "axios";
import alertContex from "../contex/alertContex";

export default function Contact() {
  const [btnName, setBtnName] = useState("Submit");
  const i = useContext(alertContex);

  const changing = async (e) => {
    setBtnName("Processing...");

    let email = document.getElementById("email");
    let message = document.getElementById("message");
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      i.showAlertFunc("There should be correct Email");
    } else {
      if (email.value.length <= 0 || message.value.length <= 0) {
        i.showAlertFunc("There should be an Email or Message");
      } else {
        let obj = {
          email: email.value,
          message: message.value,
        };
        try {
          let result = await axios("/api/sendMail", {
            method: "POST",
            data: obj,
          });

          if (result.data.status === "success") {
            i.showAlertFunc("Message has been sent Successfully!");
            email.value = "";
            message.value = "";
          } else if (result.data.status === "fail") {
            i.showAlertFunc(result.data.message);
          }
          if (!result) {
            i.showAlertFunc("An internal Server Occured");
          }
        } catch (err) {
          i.showAlertFunc("An internal Server Occured Try after some Time!");
          console.log(err);
        }
      }
    }
    setBtnName("Submit");
  };
  return (
    <div className="bg-black w-full lg:w-full flex justify-center items-center">
      <section className="my-52 lg:my-32 p-8 BoxShadow rounded-lg text-white font-semibold">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl ">Contact Us😊</h1>
        </div>
        <div className="ContactBox">
          <div>
            <input
              id="email"
              type="email"
              placeholder="Enter Email here"
              className="ContactInput my-5 bg-black border-b-2 border-pink-600  rounded-lg p-3 text-lg  lg:w-96 outline-none"
            />
          </div>
          {/* <div className="text-white my-5">Enter Your Message</div> */}
          <textarea
            id="message"
            placeholder="Enter Message Here"
            rows={2}
            className="ContactInput bg-black border-b-2 border-pink-600  rounded-lg p-3 text-lg w-[15rem] lg:w-96 outline-none"
          />
        </div>
        <button
          // disabled={
          //   // document.getElementById("email").value.length < 0 &&
          //   // document.getElementById("message").value.length < 0
          //   true
          // }
          onClick={() => {
            changing();
          }}
          className="  text-center float-right mt-8 px-4 py-2 text-white font-semibold bg-pink-600 hover:bg-white hover:text-pink-500  rounded-lg"
        >
          {btnName}
        </button>
      </section>
    </div>
  );
}
