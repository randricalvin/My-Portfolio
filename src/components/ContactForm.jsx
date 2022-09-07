import React from 'react';
import emailjs from 'emailjs-com';
import send  from '../assets/contact/send.svg'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gd5i47d', 'template_ruhgxtb', e.target, 'sxfWim9O4aQa5hsXP')
      .then((result) => {
        toast.success(`Votre message a bien été envoyé.`);
        console.log(result.text);
          
      }, (error) => {
        toast.error(`Un problème est survenue, veuillez réessayer.`);
        console.log(error.text);
      });
      e.target.reset();

      
  };
  console.log(sendEmail)

  return (
    <div className='flex-col'>
    <form className='input-form' onSubmit={sendEmail}>
        <div className='name-input flex flex-row'>
            <input className='w-1/2 mr-5 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg' type="text" placeholder="Firstname" name="from_name" required/>
            <input className='w-1/2 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg' type="text" placeholder="Lastname" name="from_name" required/>
        </div>
        <input className='w-full my-5 rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg' type="email" placeholder="Email" name="email" required/>
        <input className='w-full rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg' type="tel" placeholder="Phone" name="phone"/>
        <textarea className='w-full h-40 my-5 resize-none rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#5C64CF] focus:shadow-lg' type='message' placeholder='Message' name="message" required/>
        <div className='page-contact-button flex justify-center'>
            <button className='rounded-lg button-send bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out' value="Send Message">Send
                <img className='ml-3 w-6' src={send} alt="sending message" />
            </button>
        </div>
        
    </form>
</div>
  );
};

export default ContactForm;