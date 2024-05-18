import React from 'react';
import { contact } from '@/data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto py-10 xl:py-32 flex flex-col gap-8 items-center justify-center dark:text-white">
      <p className="text-2xl text-textGreen font-semibold flex items-center tracking-wide">Get in Touch</p>
      <h2 className="text-5xl font-semibold">Let's Connect</h2>
      <p className="max-w-[600px] text-center">
        While I am in the early stages of my career and actively seeking new opportunities, I welcome any inquiries or messages. Whether you have a question, want to connect, or just say hi, feel free to reach out, and I will do my best to respond promptly!
      </p>
      <div className="flex gap-6">
        {contact.links.map((link, index) => (
          <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 flex items-center justify-center border rounded-full shadow-md hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
              <link.icon className="h-6 w-6" />
            </button>
          </a>
        ))}
      </div>
      <a href="mailto:shubhamkumar01924@gmail.com">
        <button className="w-52 md:w-72 h-16 text-lg border rounded-full shadow-md hover:shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
          Get in Touch
        </button>
      </a>
    </section>
  );
};

export default Contact;
  