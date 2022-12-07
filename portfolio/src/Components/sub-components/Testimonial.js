import React from "react";
const leftHandler = 700; // it will handle the Left going value of container
export default function Testimonial() {
  function scrolli(position) {
    console.log("In the Scrolli function");
    let scrollBox = document.querySelector(".scrollBox");
    let translate = String(
      window.getComputedStyle(scrollBox).getPropertyValue("left")
    );
    let width = String(
      window.getComputedStyle(scrollBox).getPropertyValue("width")
    );

    let point = translate.indexOf("p");
    let wpoint = width.indexOf("p");

    translate = translate.slice(0, point) * 1;
    width = width.slice(0, wpoint) * 1;
    console.log(width + translate);
    if (position === "left") {
      console.log("left panel working");
      if (translate < 0) {
        translate = translate + 250;
        scrollBox.style.left = translate + "px";
      }
    }
    if (position === "right") {
      if (translate > leftHandler) {
        if (width - translate > 0) {
          translate = translate + 250;
          scrollBox.style.left = -translate + "px";
        }
      } else {
        if (width + translate > 500) {
          translate = translate - 250;
          scrollBox.style.left = translate + "px";
        }
      }
    }
  }
  return (
    <div>
      <div className="textimonial mb-10">
        <section className="testimonials bg-black   dark:bg-black ">
          <h1 className="text-white text-2xl lg:mx-10  lg:text-4xl  font-bold">
            Some Nice Reviews
          </h1>
          <div className="flex overflow-hidden ">
            <div className="scrollBox relative duration-200 ease-in-out left-[0%] flex">
              <div className="px-4 py-8 h-[30rem] min-w-[15rem] lg:min-w-[30rem] mx-2 text-center lg:py-16  lg:px-6">
                <figure className=" mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-[20px]  lg:text-2xl font-medium text-gray-900 dark:text-white">
                      "Hey that's one of the best web developer. One thing That
                      I like the most is his friendly attitude to his customers.
                      Althought he fullfill all my requirments in making the web
                      app."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://thispersondoesnotexist.com/image"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        Terris flair
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Web developer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="px-4 py-8  h-[34rem]  min-w-[15rem] lg:min-w-[30rem] mx-2 text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-[17px] lg:text-2xl font-medium text-gray-900 dark:text-white">
                      "Thanks again for the work you have done, it looks
                      fantastic thank you! I do really appreciate it. Many
                      thanks for a great website, we are extremely pleased with
                      the result. Finally I would like to say thanks for a great
                      job and I am over the moon with the finished work I would
                      recommend you to anyone."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        Riza Batool
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Web Designer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className=" px-4 py-8 h-[30rem]  min-w-[15rem] lg:min-w-[30rem]  mx-2 text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-[20px] lg:text-2xl font-medium text-gray-900 dark:text-white">
                      "I am amazed by your work that is honestly superb. This
                      man is making gorgeious websites in some nice expenses.
                      again i like your work."
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://cdn-agekd.nitrocdn.com/AORzPGZUXpHbzmGEVKTcNoXbmxeWdHNp/assets/static/optimized/rev-75609d3/files/Brandon-O-e1482942080144.jpg"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        Roden Steve
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Mern developer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className=" px-4 py-8  h-[30rem] min-w-[15rem] lg:min-w-[30rem] mx-2 text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-[20px] lg:text-2xl font-medium text-gray-900 dark:text-white">
                      "I have ordered too many times to this developer And each
                      time he gave more better performance then before I really
                      like his efforts"
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        Alexa hardy
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        Wordpress developer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="mx-auto flex justify-center">
            <button
              onClick={() => {
                scrolli("left");
              }}
              className="outline-none leftBtn text-xl py-2 mx-4 px-4 bg-pink-700 hover:bg-pink-800  text-white font-bold rounded-full transition duration-200"
            >
              &larr;
            </button>
            <button
              onClick={() => {
                scrolli("right");
              }}
              className="outline-none rightBtn text-xl py-2 px-4 bg-pink-700 hover:bg-pink-800  text-white font-bold rounded-full transition duration-200"
            >
              &rarr;
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
