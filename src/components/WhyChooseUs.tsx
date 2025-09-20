"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Personalized Lessons",
    description:
      "Learn at your own pace with tailored instruction from experienced music teachers. Whether you’re a beginner or advancing your skills, each lesson is designed around your goals and favorite genres.",
  },
  {
    title: "Ensemble & Band Practice",
    description:
      "Play alongside fellow students in small groups or full ensembles. Develop timing, listening, and collaboration skills while experiencing the joy of performing together.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Showcase your progress in regular recitals and community concerts. Gain confidence on stage and celebrate your musical journey with friends and family.",
  },
  {
    title: "Theory & Ear Training",
    description:
      "Build a solid foundation in music theory and sharpen your ear for melody, harmony, and rhythm. These essential skills help you understand and create music with ease.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Showcase your progress in regular recitals and community concerts. Gain confidence on stage and celebrate your musical journey with friends and family Showcase your progress in regular recitals and community concerts. Gain confidence on stage and celebrate your musical journey with friends and family.",
  }
];


const WhyChooseUs = () => {
  return (
    <div >
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
