import React from 'react'
import Fizota from '../assets/Fizota.png'
import LogicTech from '../assets/LogicTech.png'
import FizotaCert from '../assets/FizotaCertificate.jfif'
import LogicTechCert from '../assets/LogicTechCertificate.jfif'
export default function Internship() {
  const internships = [
    {
      logo: Fizota,
      cert: FizotaCert,
      company: 'FIZOTA',
      course: 'Full Stack Developer - Internship',
      date: 'Dec 2024 - Mar 2025',
      description:
        'Built and deployed MERN stack applications with responsive UI. Developed RESTful APIs and optimized backend performance.',
    },
    {
      logo: LogicTech,
      cert:LogicTechCert,
      company: 'Logic Technologies',
      course: 'Full Stack Developer - Internship',
      date: 'Jun 2024 - Aug 2024',
      description:
        'Developed Full-stack web applications using MERN Stack along with HTML,CSS,JS. Testing Backend APIs using Postman.',
    },
  ]

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12 text-gray-800">

      <div className="flex flex-wrap gap-6 justify-between">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="group relative w-full md:w-[48%] bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center p-6 gap-6 z-10 relative">
              <img
                src={intern.logo}
                alt={`${intern.company} logo`}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-700">{intern.company}</h3>
                <p className="text-gray-700 mb-4 font-medium">{intern.course}</p>
                <p className="text-sm text-gray-500 mb-2">{intern.date}</p>
                <p className="text-gray-700">{intern.description}</p>
              </div>
            </div>

            <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <img src={intern.cert} alt="Certificate" className="max-w-[90%] max-h-[90%] rounded-md shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
