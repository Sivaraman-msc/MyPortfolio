import React from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const contacts = [
    {
      icon: <FiPhone className="text-white text-xl" />,
      label: 'Phone',
      value: '+91 9345577440',
      bg: 'bg-blue-500'
    },
    {
      icon: <FiMail className="text-white text-xl" />,
      label: 'Email',
      value: 'sivaraman.bca.st@gmail.com',
      bg: 'bg-green-500'
    },
    {
      icon: <FiMapPin className="text-white text-xl" />,
      label: 'Location',
      value: 'Karaikkudi, Tamil Nadu',
      bg: 'bg-red-500'
    }
  ]

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bg} mb-4`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700">{item.label}</h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
