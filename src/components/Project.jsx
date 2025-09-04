import React from 'react'
import { FiLink } from 'react-icons/fi'

import proj1Img1 from '../assets/projectone1.png'
import proj1Img2 from '../assets/projectone2.png'
import proj1Img3 from '../assets/projectone3.png'
import proj1Img4 from '../assets/projectone4.png'
import proj1Img5 from '../assets/projectone5.png'
import proj1Img6 from '../assets/projectone6.png'
import proj2Img1 from '../assets/projectTwo1.png'
import proj2Img2 from '../assets/projectTwo2.png'
import proj2Img3 from '../assets/projectTwo3.png'
import proj2Img4 from '../assets/projectTwo4.png'
import proj2Img5 from '../assets/projectTwo5.png'
import proj2Img6 from '../assets/projectTwo6.png'
import proj3Img1 from '../assets/projectThree1.png'
import proj3Img2 from '../assets/projectThree2.png'
import proj3Img3 from '../assets/projectThree3.png'
import proj3Img4 from '../assets/projectThree4.png'
import proj3Img5 from '../assets/projectThree5.png'
import proj3Img6 from '../assets/projectThree6.png'

export default function Project() {
  const projects = [
    {
      name: '1. Ticket Booking System',
      tech: 'React, Node.js, MongoDB, Express.js, CSS',
      description:
        'Built a beginner-level project using MERN, where users can book movie, bus, cricket & event tickets through an easy-out interface.',
      images: [proj1Img1, proj1Img2, proj1Img3, proj1Img4, proj1Img5, proj1Img6],
      link: 'https://github.com/Sivaraman-msc/Ticket-Booking.git'
    },
    {
      name: '2. BugHound - Bug Tracking system (In-Progress)',
      tech: 'React, Node.js, MongoDB, Express.js, TailwindCSS',
      description:
        'Built a bug tracking system using MERN with secure login (Auth/Authorization). Testers report bugs & developers fix issues. Role-based access. Integrated Cloudinary for uploads.',
      images: [proj2Img1, proj2Img2, proj2Img3, proj2Img4, proj2Img5, proj2Img6],
      link: 'https://github.com/Sivaraman-msc/BugHound.git'
    },{
      name:'3. CodeSieve - Candidate Code Evaluation',
      tech:'React, Node.js, MongoDB, Express.js, TailwindCSS',
      description:'CodeSieve is an online coding interview platform where recruiters assign coding tasks and candidates submit their solutions.',
      images: [proj3Img1, proj3Img2, proj3Img3, proj3Img4, proj3Img5,proj3Img6],
      link:'https://github.com/Sivaraman-msc/CodeSieve.git'
    }
  ]

  return (
    <section id="project" className="max-w-6xl mx-auto px-6 py-12 text-gray-800 space-y-16">
      {projects.map((project, index) => (
        <div className="shadow-md p-6 rounded-lg bg-white" key={index}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                <FiLink size={18} />
                <span className="underline">Link</span>
              </a>
            )}
          </div>

          <p className="text-gray-500 font-medium mb-1">
            <span className="font-semibold">Technologies:</span> {project.tech}
          </p>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Screenshot ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-64"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
