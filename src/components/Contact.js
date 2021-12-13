import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import emailkey from '../emailkey';
import emailjs from 'emailjs-com';
import { themeContext } from '../context/theme/themeContext';

const Contact = () => {

    const themesContext = useContext(themeContext);
    const { darkmode } = themesContext;

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const { name, email, message } = form;

    // Change state
    const handleChange = e => {
        setForm({
            ...form,
            [ e.target.name ] : e.target.value
        });
    }

    const encode = data => {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
    }

    const showAlert = status => {
        if (status === 'success') {
            return Swal.fire(
                'Success',
                'Your message was sended, thanks !',
                'success',
                'Cool'
            );
        } else {
            return Swal.fire(
                'Error',
                'There was an error !',
                'error',
                'Cool'
            ); 
        }
    }


    // Submit the form
    const handleSubmit = e => {
        e.preventDefault();

        // valid data
        if(name.trim() === '' || email.trim() === '' || message.trim() === '') {
            Swal.fire(
                'Error!',
                'All fields are required',
                'error',
                'Cool'
            );
            return;
        }

        // if ok, send the request with fetch
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
          .then(() => {
            // show the alert  
            showAlert('success')
        })
          .catch((error) => showAlert('error'));
        
        // send the email
        emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, e.target, emailkey.USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        // clear the form
        setForm({
            name: '',
            email: '',
            message: ''
        });
    }
    
    
    return ( 
        <section id="contact" className={`relative ${ (darkmode === false) ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white' }`}>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.9540443416545!2d13.349463715999395!3d52.53426564292405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8519d8ad43a9d%3A0xee8b61f02f7ae059!2sStephanstra%C3%9Fe%2060%2C%2010559%20Berlin!5e0!3m2!1ses-419!2sde!4v1639426408716!5m2!1ses-419!2sde"
                    
                />
                <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-2/2 px-6">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            ADDRESS
                        </h2>
                        <p className={`mt-1 ${ (darkmode === false) ? 'text-gray-100' : 'text-gray-200' }`}>
                            Stephan St. 60 <br />
                            Berlin, GER
                        </p>
                    </div>
                    <div className="lg:w-2/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            EMAIL
                        </h2>
                        <button className="text-indigo-400 leading-relaxed">
                            mansi.manito@gmail.com
                        </button>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                            PHONE
                        </h2>
                        <p className={`leading-relaxed ${ (darkmode === false) ? 'text-gray-100' : 'text-gray-200' }`}>+4901744538564</p>
                    </div>
                </div>
                </div>
                <form
                    netlify="true"
                    name="contact"
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                    onSubmit={handleSubmit}
                
                >
                <h2 className={`${ (darkmode === false) ? 'text-black' : 'text-white' } sm:text-4xl text-3xl mb-1 font-medium title-font`}>
                    Contact Me
                </h2>
                <p className="leading-relaxed mb-5">
                    Get in touch with me, you can also try the whatsapp floating button to send me a whatsapp text!
                </p>
                <div className="relative mb-4">
                    <label htmlFor="name" className={`leading-7 text-sm ${ (darkmode === false) ? 'text-gray-900' : 'text-gray-400' }`}>
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className={`leading-7 text-sm ${ (darkmode === false) ? 'text-gray-900' : 'text-gray-400' }`}>
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    />
                </div>
                <div className="relative mb-4">
                    <label
                    htmlFor="message"
                    className={`leading-7 text-sm ${ (darkmode === false) ? 'text-gray-900' : 'text-gray-400' }`}>
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={message}
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Contact me
                </button>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;