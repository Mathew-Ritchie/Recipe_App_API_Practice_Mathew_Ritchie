import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-gray-500 bg-yellow-500">
      <p className="pt-5 ">This site was created by Mathew.J.Ritchie </p>
      <p className=" ">Using THE MEAL DB API. </p>
      <p className="pb-5">
        Check out my
        <a href="https://mathewritchie.netlify.app/" target="blank">
          <span className="text-gray-900 font-extrabold pl-1">Portfolio</span>
        </a>
      </p>
    </div>
  );
}
