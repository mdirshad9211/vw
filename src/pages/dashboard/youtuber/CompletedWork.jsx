import React from 'react';

const CompletedWork = () => {
  const completedWork = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
    },  
  ]
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Completed Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {completedWork.map((work, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={work.image} alt={work.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-bold mt-2">{work.title}</h3>
            <p className="text-gray-600">{work.description}</p>
          </div>
        ))} 
      </div>    
    </div>

  )

}

export default CompletedWork;