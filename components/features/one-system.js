'use client'
import React, { useEffect, useRef, useState } from 'react'
import { SVG } from '@svgdotjs/svg.js'
import { motion } from 'framer-motion'
import { Minus, Plus } from '../icons'
import categories from "@/lib/one-system-data.json";
import { icons } from '../icons'


const CircularMenu = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [expandedCategory, setExpandedCategory] = useState('payments');
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Initialize SVG and set up interactivity
  useEffect(() => {
    if (containerRef.current && !svgRef.current) {
      const draw = SVG().addTo(containerRef.current).size('100%', 700);
      svgRef.current = draw;

      const circlesGroup = draw.group().addClass('circles-container');
      const centerX = 350;
      const centerY = 100;

      // Draw circles from largest to smallest to fix stacking
      [...categories].reverse().forEach((cat) => {
        const group = circlesGroup.group().addClass('circle-group');

        const circle = group
          .circle(cat.radius * 3)
          .center(centerX, centerY)
          .fill({ color: cat.color, opacity: 1 })
          .stroke({ color: '#fff', width: 4, opacity: 1 })
          .attr('id', `circle-${cat.id}`);

        const iconSvg = icons[cat.id] || '';
        const iconText = group
          .foreignObject(50, 50) 
          .center(centerX - 30, centerY + cat.radius * 1.3)
          .fill({opacity: 1})
          .html(iconSvg);

        const text = group
          .text(cat.label)
          .font({ size: 20, family: 'Helvetica', weight: 'bold' })
          .fill({color: '#333', opacity: 1})
          .move(iconText.cx() + 15, iconText.cy() - 25);

        group.click(() => {
          setExpandedCategory(cat.id);
        });

        group.mouseenter(() => {
          setHoveredCategory(cat.id);
        });
        
        group.mouseleave(() => {
          setHoveredCategory(null);
        });
      
      });

      const centerCircleGroup = circlesGroup.group().addClass('center-circle-group');

    // Center circle (red background for the logo)
    const centerCircle = centerCircleGroup
      .circle(100) // Size of the center circle
      .center(centerX +10, centerY)
      .fill({ color: '#A81C07' }) // Red color

    // logo inside the center circle
    const logoSvg = `
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.8467 27.5227L16.6667 12.9212L2.84667 0.443831C2.61357 0.232896 2.31633 0.0891848 1.99264 0.0309148C1.66894 -0.0273552 1.33337 0.00244082 1.02846 0.116526C0.723547 0.23061 0.46303 0.423845 0.279935 0.671734C0.0968401 0.919623 -0.000587882 1.211 2.66884e-06 1.50893V9.28959C9.63988e-05 9.6878 0.175106 10.0697 0.486669 10.3517L16.6667 24.9562L17.1567 25.3955L32.8467 39.5577L33.3333 40V39.8526C33.5511 39.9468 33.7811 39.996 34.0233 40H42.6433C42.9731 39.9999 43.2955 39.9116 43.5696 39.7461C43.8437 39.5806 44.0573 39.3454 44.1833 39.0703C44.3092 38.7952 44.342 38.4925 44.2773 38.2007C44.2126 37.9088 44.0535 37.6407 43.82 37.4305L32.8467 27.5227ZM32.8467 12.4789L19.5133 0.443831C19.3382 0.282037 19.1241 0.158804 18.8877 0.0836726C18.6512 0.00854167 18.3988 -0.0164713 18.15 0.0105695C17.9149 0.0370756 17.6882 0.106821 17.4841 0.215496C17.28 0.324171 17.1028 0.469468 16.9633 0.642409C16.768 0.896826 16.6644 1.19942 16.6667 1.50893V9.28959C16.6676 9.68823 16.8439 10.0702 17.1567 10.3517L47.1567 37.4305C47.3899 37.6404 47.6869 37.7832 48.01 37.8409C48.3331 37.8986 48.668 37.8685 48.9722 37.7546C49.2764 37.6406 49.5364 37.4478 49.7193 37.2006C49.9023 36.9534 49.9999 36.6627 50 36.3654V28.5878C50.0004 28.3901 49.9576 28.1943 49.8741 28.0115C49.7906 27.8288 49.668 27.6626 49.5133 27.5227L32.8467 12.4789ZM36.18 0.443831C35.9469 0.232896 35.6497 0.0891848 35.326 0.0309148C35.0023 -0.0273552 34.6667 0.00244082 34.3618 0.116526C34.0569 0.23061 33.7964 0.423845 33.6133 0.671734C33.4302 0.919623 33.3327 1.211 33.3333 1.50893V9.28959C33.3343 9.68823 33.5106 10.0702 33.8233 10.3517L47.1567 22.3867C47.3899 22.5966 47.6869 22.7394 48.01 22.7971C48.3331 22.8548 48.668 22.8247 48.9722 22.7108C49.2764 22.5968 49.5364 22.404 49.7193 22.1568C49.9023 21.9096 49.9999 21.6189 50 21.3216V13.544C50.0004 13.3463 49.9576 13.1505 49.8741 12.9677C49.7906 12.7849 49.668 12.6188 49.5133 12.4789L36.18 0.443831ZM78.3367 35.0897C75.5199 34.758 72.9039 33.5943 70.8967 31.7801L55.2033 17.6178C54.9702 17.4069 54.673 17.2632 54.3493 17.2049C54.0256 17.1466 53.69 17.1764 53.3851 17.2905C53.0802 17.4046 52.8197 17.5978 52.6366 17.8457C52.4535 18.0936 52.3561 18.385 52.3567 18.6829V38.4956C52.3567 38.8946 52.5323 39.2773 52.8448 39.5594C53.1574 39.8415 53.5813 40 54.0233 40H78.3333C78.7754 40 79.1993 39.8415 79.5118 39.5594C79.8244 39.2773 80 38.8946 80 38.4956V36.6904C80 35.86 79.25 35.195 78.3367 35.0897ZM60.3567 35.186C59.6494 35.186 58.9711 34.9324 58.4711 34.481C57.971 34.0296 57.69 33.4174 57.69 32.779C57.69 32.1406 57.971 31.5284 58.4711 31.077C58.9711 30.6256 59.6494 30.372 60.3567 30.372C61.0639 30.372 61.7422 30.6256 62.2423 31.077C62.7424 31.5284 63.0233 32.1406 63.0233 32.779C63.0233 33.4174 62.7424 34.0296 62.2423 34.481C61.7422 34.9324 61.0639 35.186 60.3567 35.186ZM2.84667 30.5314C2.61357 30.3205 2.31633 30.1768 1.99264 30.1185C1.66894 30.0602 1.33337 30.09 1.02846 30.2041C0.723547 30.3182 0.46303 30.5114 0.279935 30.7593C0.0968401 31.0072 -0.000587882 31.2986 2.66884e-06 31.5965V38.4956C2.66884e-06 38.8946 0.175597 39.2773 0.488158 39.5594C0.800719 39.8415 1.22464 40 1.66667 40H9.31C10.05 40 10.61 39.5938 10.85 39.0703C10.9805 38.7959 11.0157 38.4922 10.9508 38.1994C10.8859 37.9066 10.7241 37.6385 10.4867 37.4305L2.84667 30.5314ZM16.6667 27.965L2.84667 15.4876C2.61377 15.2769 2.31684 15.1332 1.99346 15.0749C1.67007 15.0165 1.33477 15.046 1.03 15.1598C0.725226 15.2735 0.464676 15.4662 0.281327 15.7137C0.0979779 15.9611 7.27184e-05 16.2521 2.66884e-06 16.5497V24.3304C9.63988e-05 24.7286 0.175106 25.1105 0.486669 25.3925L16.18 39.5577L16.6667 40H25.9767C26.3065 39.9999 26.6288 39.9116 26.9029 39.7461C27.177 39.5806 27.3906 39.3454 27.5166 39.0703C27.6426 38.7952 27.6753 38.4925 27.6106 38.2007C27.546 37.9088 27.3868 37.6407 27.1533 37.4305L16.6667 27.965Z" fill="white"/>
      </svg>
    `; 
    const logo = centerCircleGroup
      .foreignObject(50, 50) // Size of the logo
      .center(centerX, centerY)
      .attr({ 'style': 'overflow: visible' }) // Ensure the logo isn't clipped
      .html(logoSvg);

      highlightCategory();
    }
  }, []);

  // Update SVG highlighting when expandedCategory or hoveredCategory changes
  useEffect(() => {
    if (svgRef.current) {
      highlightCategory();
    }
  }, [expandedCategory, hoveredCategory]);

  // Highlight the expanded or hovered category's circle
  function highlightCategory() {
    const draw = svgRef.current;
    categories.forEach((cat) => {
      const circle = draw.findOne(`#circle-${cat.id}`);
      if (circle) {
        // Prioritize expanded category, then hovered category
        if (cat.id === expandedCategory) {
          circle.animate(300).attr({ 'fill': '#F7B4A8' });
        } else if (cat.id === hoveredCategory) {
          circle.animate(300).attr({ 'fill': '#FCCEE8' });
        } else {
          circle.animate(300).attr({ 'fill': cat.color });
        }
      }
    });
  }

  // Toggle expansion for a category
  const toggleCategory = (categoryId) => {
    setExpandedCategory((prev) =>
      prev === categoryId ? null : categoryId
    );
  };

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Header */}
      <div className="text-center py-10 text-red-600 font-bold text-small md:text-medium lg:text-large font-helvetica-semibold 2xl:text-[4rem]">
        One system. Built for every kind of business.
      </div>

      <div className="flex flex-col md:flex-row justify-around md:mr-20">
        {/* SVG Container */}
        <div className="hidden md:block w-full md:w-3/5" ref={containerRef}></div>

        {/* Info Panel */}
        <motion.div
          className="w-full md:h-[50%] md:w-[45%] bg-neutral-light p-6 md:p-10 rounded-2xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={` py-4 text-tiny md:text-small 2xl:text-[2rem]}`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory(cat.id)}
              >
                <div>
                  <h1 className="text-red-600 font-semibold font-helvetica-semibold 2xl:text-[1.8rem]">{cat.title}</h1>
                  <div className="font-medium text-tiny md:text-small 2xl:text-[2rem] py-2 text-red_reign font-helvetica-semibold">
                    {cat.subtitle}
                  </div>
                </div>
                <button
                  className="text-red-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCategory(cat.id);
                  }}
                >
                  {expandedCategory === cat.id ? <Minus /> : <Plus />}
                </button>
              </div>

              {expandedCategory === cat.id && (
                <div className="text-tiny md:text-small 2xl:text-[2rem] py-2 text-gray-700 font-helvetica-regular">
                  {cat.description}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CircularMenu;