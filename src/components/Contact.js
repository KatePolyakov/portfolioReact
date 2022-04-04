import React from "react";
import { ChatIcon } from "@heroicons/react/solid";


import './styles/MainStyle.css';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ChatIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-500">
            Contacts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Section under renovation...
          </p>
        </div>

      </div>
    </section>
  );
}