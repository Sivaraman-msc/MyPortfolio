import React from 'react';

export default function Education() {
  const educationData = [
    {
      degreeName: 'BCA',
      fullname: 'Bachelor of Computer Applications',
      year: '2020-2023',
      college: 'Vidhyaa Giri College of Arts & Science',
      location: 'Puduvayal',
      CGPA: '8.42',
    },
    {
      degreeName: 'M.Sc CS',
      fullname: 'Master of Science in Computer Science',
      year: '2023-2025',
      college: 'Vidhyaa Giri College of Arts & Science',
      location: 'Puduvayal',
    },
  ];

  return (
    <div id="education" className="max-w-4xl sm:mx-auto lg:w-230 px-6 py-10 mt-10 text-gray-700">
      <div className="flex flex-col gap-6 border-l-4 border-gray-500 pl-6">
        {educationData.map((degree, index) => (
          <div
            key={index}
            className="flex justify-between items-start bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col p-3">
              <h3 className="text-lg font-semibold text-gray-700">{degree.degreeName}</h3>
              <h3 className="text-lg font-semibold text-gray-700 pb-4">{degree.fullname}</h3>
              <p className="text-gray-600 text-sm">{degree.year}</p>
              <p className="text-gray-600 text-sm">{degree.college}</p>
              <p className="text-gray-600 text-sm">{degree.location}</p>
            </div>
            {degree.CGPA && <div className="text-sm">CGPA: {degree.CGPA}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
