import React, { useState, useRef } from "react";
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        from_name: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

        emailjs.sendForm('service_8xvhvfp', 'template_0dwb1rt', form.current, {
            publicKey: 'pd6Vf-cETl7l6sCpU',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div class="mx-auto my-16 relative isolate w-[90%] bg-white">
            <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
                    <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div
                            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true">
                                <defs>
                                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1"
                                        patternUnits="userSpaceOnUse">
                                        <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" stroke-width="0" fill="white"></rect><svg x="100%" y="-1"
                                    class="overflow-visible fill-gray-50">
                                    <path d="M-470.5 0h201v201h-201Z" stroke-width="0"></path>
                                </svg>
                                <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
                            </svg>
                        </div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Feel free to reach out to us for any inquiries or assistance.
                            We're here to help!</p>
                        <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Email</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true" class="h-7 w-6 text-gray-400">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                        </path>
                                    </svg>
                                </dt>
                                <dd><Link class="hover:text-gray-900" to="mailto:prideagrosolutions@gmail.com">prideagrosolutions@gmail.com</Link></dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Address</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true" class="h-7 w-6 text-gray-400">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z">
                                        </path>
                                    </svg>
                                </dt>
                                <dd className="text-left">Pune</dd>
                            </div>
                        </dl>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Contact;
