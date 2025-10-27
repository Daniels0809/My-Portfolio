"use client";

import { TrayectCard } from "@/components/card/TrayectCard";
import Link from "next/link";
import React from "react";

const projects = [
  {
    icon: "/image-project-1.jpg",
    age: "2025",
    title: "V-MIND-PROJECT",
    slug: "v-mind-project",
    text: "A gamified learning platform that personalizes your learning journey through interactive roadmaps, progress tracking, and AI-powered recommendations.",
  },
  {
    icon: "/image-project-2.jpg",
    age: "2025",
    title: "LIBRARY",
    slug: "library",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
  },
  {
    icon: "/image-project-3.png",
    age: "2022",
    title: "USER MANAGEMENT",
    slug: "user-management",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
  },
  {
    icon: "/image-project-1.jpg",
    age: "2020",
    title: "COUNTER",
    slug: "counter",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
  },
];


const Projects = () => {


  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-70 sm:p-20 containerProjects">
      <div className="titleDashboard">
        <h1 className="block span2">Projects</h1>
      </div>

      <div className="blockProjects about grid md:grid-cols-2 gap-10 mb-16">
        {projects.map((p) => (
          <Link href={`/proyect/${p.slug}`} key={p.slug}>
            <TrayectCard
              icon={p.icon}
              age={p.age}
              title={p.title}
              text={p.text}
            />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
