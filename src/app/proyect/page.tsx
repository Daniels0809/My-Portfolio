"use client";

import { TrayectCard } from "@/components/card/TrayectCard";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-70 sm:p-20 containerProjects">
        <div className="">
          <div className="titleDashboard">
          <h1 className="block span2">Projects</h1>
          </div>
        </div>

        <div className="blockProjects about grid md:grid-cols-2  gap-10  mb-16">
          <div className="">
            <TrayectCard
              icon="/image-project-1.jpg"
              age="2025"
              title="V-MIND-PROJECT"
              text="A gamified learning platform that personalizes your learning journey through interactive roadmaps, progress tracking, and AI-powered recommendations."
            />
          </div>
          <div>
            <TrayectCard
              icon="/image-project-2.jpg"
              age="2025"
              title="LIBRARY"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error officia unde dolor consequatur excepturi nisi illo explicabo, corporis quae perferendis distinctio sapiente iusto? Commodi facilis cupiditate sequi fugit eaque minus?" 
            />
            
          </div>
          <div>
            <TrayectCard
              icon="/image-project-3.png"
              age="2022"
              title="USER MANAGEMENT"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error officia unde dolor consequatur excepturi nisi illo explicabo, corporis quae perferendis distinctio sapiente iusto? Commodi facilis cupiditate sequi fugit eaque minus?"
            />
          </div>{" "}
          <div>
            <TrayectCard
              icon="/image-project-1.jpg"
              age="2020"
              title="COUNTER"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error officia unde dolor consequatur excepturi nisi illo explicabo, corporis quae perferendis distinctio sapiente iusto? Commodi facilis cupiditate sequi fugit eaque minus?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
