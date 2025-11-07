
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bello-blue">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We're ready to discuss your next project. Contact us today for proposals and inquiries.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <InfoItem icon={<LocationIcon />} title="Head Office" lines={['21, Princess Street,', 'Lagos Island, Lagos State.']} />
              <InfoItem icon={<PhoneIcon />} title="Telephone" lines={['+234 818 813 3006', '+234 803 354 1514']} />
              <InfoItem icon={<MailIcon />} title="Email" lines={['bellogbemisola181@yahoo.com']} isEmail />
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input type="text" name="name" id="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bello-blue focus:border-bello-blue border-gray-300 rounded-md" placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bello-blue focus:border-bello-blue border-gray-300 rounded-md" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="subject" id="subject" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bello-blue focus:border-bello-blue border-gray-300 rounded-md" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bello-blue focus:border-bello-blue border-gray-300 rounded-md" placeholder="Your message"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-bello-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bello-red transition duration-300">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoItemProps {
    icon: React.ReactNode;
    title: string;
    lines: string[];
    isEmail?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, lines, isEmail = false }) => (
    <div className="flex">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bello-blue text-white">
                {icon}
            </div>
        </div>
        <div className="ml-4">
            <h4 className="text-lg leading-6 font-medium text-gray-900">{title}</h4>
            {lines.map((line, i) => (
                isEmail ? 
                <a key={i} href={`mailto:${line}`} className="mt-1 text-base text-bello-blue hover:text-bello-red">{line}</a>
                : <p key={i} className="mt-1 text-base text-gray-600">{line}</p>
            ))}
        </div>
    </div>
);


const LocationIcon = () => (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const PhoneIcon = () => (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);
const MailIcon = () => (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);

export default Contact;
