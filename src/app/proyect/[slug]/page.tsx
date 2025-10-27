/* eslint-disable @next/next/no-img-element */
import { SlowBuffer } from "buffer";
import React from "react";


// mas adelante para conectarlo a mi base de mongo: const project = await Project.findOne({ slug: params.slug });

const projects = [
  {
    slug: "v-mind-project",
    title: "V-MIND-PROJECT",
    description:
      "A gamified learning platform that personalizes your learning journey...",
    year: "2025",
    image: "/image-project-1.jpg",
  },
  {
    slug: "library",
    title: "LIBRARY",
    description:
      "A modern online library system with book tracking, search, and reviews.",
    year: "2025",
    image: "/image-project-2.jpg",
  },
  {
    slug: "user-management",
    title: "USER MANAGEMENT",
    description:
      "A complete user management dashboard with CRUD and authentication.",
    year: "2022",
    image: "/image-project-3.png",
  },
  {
    slug: "counter",
    title: "COUNTER",
    description: 
    "A simple counter app with increment, decrement, and reset features.",
    year: "2020",
    image: "/image-project-1.jpg",
  }
];

export default function ProjectDetail({params,}: {params: { slug: string };})
{
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <div className="p-10 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-2">{project.year}</p>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-2xl shadow-md w-full max-w-md mb-6"
      />
      <p className="text-lg text-gray-700 max-w-2xl">{project.description}</p>
    </div>
  );
}
