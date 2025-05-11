import React from 'react'
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

export default function Project() {
  const projects = [
    {
      name: '1. Ticket Booking System',
      tech: 'React, Node.js, MongoDB, Express.js, Css',
      description:
        'Built a beginner level project using MERN, where users can book movie, bus, cricket & event tickets through an easy-out interface .',
      images: [proj1Img1, proj1Img2, proj1Img3, proj1Img4, proj1Img5, proj1Img6],
    },
    {
      name: '2. BugHound - Bug Tracking system (In-Progress)',
      tech: 'React, Node.js, MongoDB , Express.js, TailwindCSS',
      description:
        'Built a Bug tracking system using MERN with secure Login(Auth/Authorization). Testers report bugs & developers fix issues , role based access. integrated cloudinary for uploads.',
      images: [proj2Img1,proj2Img2,proj2Img3,proj2Img4,proj2Img5,proj2Img6],
    },

  ]

  return (
    <section id="project" className="max-w-6xl mx-auto px-6 py-12 text-gray-800">

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div className='shadow-md' key={index}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-gray-500 font-medium mb-1">Technologies: {project.tech}</p>
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
      </div>
    </section>
  )
}
