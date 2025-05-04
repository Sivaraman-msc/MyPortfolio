import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

import htmlImg from '../assets/HTML.png'
import cssImg from '../assets/CSS.png'
import jsImg from '../assets/js.jfif'
import reactImg from '../assets/ReactLogo.png'
import expressImg from '../assets/express.png'
import mongodbImg from '../assets/mongoDB.png'
import nodejsImg from '../assets/Node.png'
import githubImg from '../assets/GitHub.png'

const skills = [
  { name: 'HTML', image: htmlImg },
  { name: 'CSS', image: cssImg },
  { name: 'JavaScript', image: jsImg },
  { name: 'React', image: reactImg },
  { name: 'Express', image: expressImg },
  { name: 'MongoDB', image: mongodbImg },
  { name: 'Node.js', image: nodejsImg },
  { name: 'GitHub', image: githubImg }
]

const data = {
  labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Express','mongoDB', 'Node.js', 'GitHub'],
  datasets: [
    {
      label: 'Skill Level',
      data: [100, 90, 74, 84, 90,85,95, 75],
      barThickness:40,
      backgroundColor: ['orange', 'blue', 'gold', 'skyblue', 'red', 'green', 'pink', 'gray']
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: { display: true },
    title: { display: true }
  }
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12 text-gray-800">

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md w-[250px] p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-[180px] object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{skill.name}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mx-auto max-w-4xl">
      <Bar data={data} options={options} />
      </div>
      
    </section>
  )
}
