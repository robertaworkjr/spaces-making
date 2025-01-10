import React, { useState, useEffect } from 'react'

function Dashboard() {
  const [projects, setProjects] = useState([])
  const [newProject, setNewProject] = useState({ name: '', description: '' })

  useEffect(() => {
    // In a real app, you'd fetch projects from an API here
    const savedProjects = JSON.parse(localStorage.getItem('projects') || '[]')
    setProjects(savedProjects)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProject(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedProjects = [...projects, { ...newProject, id: Date.now() }]
    setProjects(updatedProjects)
    localStorage.setItem('projects', JSON.stringify(updatedProjects))
    setNewProject({ name: '', description: '' })
  }

  const steps = [
    {
      title: "Choose a Pre-trained Model",
      description: "Select a text classification model from Hugging Face's model hub, such as 'distilbert-base-uncased-finetuned-sst-2-english' for sentiment analysis."
    },
    {
      title: "Create a New Space",
      description: "Click on 'New Space' and select 'Gradio' as the SDK for building the interface."
    },
    {
      title: "Set Up the Environment",
      description: "In your Space, create a requirements.txt file with: transformers, torch, gradio"
    },
    {
      title: "Write the Agent Code",
      description: "Create an app.py file with the code to load the model and create a Gradio interface."
    },
    {
      title: "Deploy Your Agent",
      description: "Commit your changes and Hugging Face will automatically deploy your Space."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <p className="text-xl">Explore and create amazing AI-powered applications!</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
            {projects.length === 0 ? (
              <p>You haven't created any projects yet. Start by creating one!</p>
            ) : (
              <div className="space-y-4">
                {projects.map(project => (
                  <div key={project.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Create New Project</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Project Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProject.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
                Create Project
              </button>
            </form>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Set Up Your First AI Agent</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">Follow these steps to create a simple text classification agent:</p>
          <ol className="list-decimal list-inside space-y-4">
            {steps.map((step, index) => (
              <li key={index}>
                <span className="font-semibold">{step.title}:</span> {step.description}
              </li>
            ))}
          </ol>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Sample Code for app.py:</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`
import gradio as gr
from transformers import pipeline

# Load pre-trained model
classifier = pipeline("sentiment-analysis")

# Define classification function
def classify_text(text):
    result = classifier(text)[0]
    return f"Sentiment: {result['label']}, Score: {result['score']:.4f}"

# Create Gradio interface
iface = gr.Interface(
    fn=classify_text,
    inputs="text",
    outputs="text",
    title="Simple Sentiment Analysis"
)

iface.launch()
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
