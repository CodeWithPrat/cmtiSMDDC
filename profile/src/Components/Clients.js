import React, { useState } from 'react';
import { motion } from 'framer-motion';

import acumac from "../Images/collaborators/acumac.png"
import hal from "../Images/collaborators/HAL.png"
import hexagon from "../Images/collaborators/hexagon.png"
import imtma from "../Images/collaborators/IMTMA.png"
import seimens from "../Images/collaborators/seimens.png"
import uttunga from "../Images/collaborators/uttunga.png"

import bellogo from "../Images/SponsoredProjects/Bel_logo.jpg"
import csir from "../Images/SponsoredProjects/CSIR.png"
import drishti from "../Images/SponsoredProjects/drishti.png"
import dst from "../Images/SponsoredProjects/DST.png"
import TieIndia from "../Images/SponsoredProjects/TIEIndia.png"

import am from "../Images/BenefittedWithSDP/AM.png"
import bdhc from "../Images/BenefittedWithSDP/BDHC.png"
import dgqa from "../Images/BenefittedWithSDP/DGQA.png"
import halimg from "../Images/BenefittedWithSDP/HAL.png"
import kennametal from "../Images/BenefittedWithSDP/kennametal.png"
import NITW from "../Images/BenefittedWithSDP/NITW.png"
import tcs from "../Images/BenefittedWithSDP/tcs.png"

const Collaborators = [
    {
        id: 1,
        image: acumac

    },
    {
        id: 2,
        image: hal
    },
    {
        id: 3,
        image: hexagon
    },
    {
        id: 4,
        image: imtma
    },
    {
        id: 5,
        image:seimens
    },
    {
        id: 6,
        image: uttunga
    }
];

const SponsoredProjects = [

    {
        id: 2,
        image: csir
    },
    {
        id: 3,
        image: drishti
    },
    {
        id: 1,
        image: dst
    },
    {
        id: 4,
        image: TieIndia
    }
]

const BenefittedWithSDP = [
    {
        id: 1,
        image: am

    },
    {
        id: 2,
        image: bdhc
    },
    {
        id: 3,
        image: dgqa
    },
    {
        id: 4,
        image: halimg
    },
    {
        id: 5,
        image: kennametal
    },
    {
        id: 6,
        image: NITW
    },
    {
        id: 7,
        image: tcs
    },
    {
        id: 8,
        image: bellogo
    }
]

const Clients = () => {
    const sections = [
      {
        title: "Our Collaborators",
        data: Collaborators,
        gradient: "from-blue-500 via-indigo-400 to-violet-500",
        bgGlow: "bg-blue-500/20"
      },
      {
        title: "Some of our Sponsored Projects",
        data: SponsoredProjects,
        gradient: "from-violet-500 via-purple-400 to-fuchsia-500",
        bgGlow: "bg-violet-500/20"
      },
      {
        title: "Institutes who are benefitted with our skill development program",
        data: BenefittedWithSDP,
        gradient: "from-fuchsia-500 via-pink-400 to-rose-500",
        bgGlow: "bg-fuchsia-500/20"
      }
    ];
  
    const InfiniteScroll = ({ images, direction = 1 }) => {
      const baseVelocity = -1;
      
      return (
        <div className="relative flex overflow-hidden w-full py-4">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10" />
          
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -50 * images.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: images.length * 5,
                ease: "linear",
              },
            }}
            style={{ paddingRight: '50px' }}
          >
            {[...images, ...images].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 relative group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <img
                    src={item.image}
                    alt={`Client ${item.id}`}
                    className="w-40 h-28 object-contain filter transition-all duration-300 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-xl group-hover:ring-2 group-hover:ring-blue-500/50 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>
        </div>
  
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12 py-12">
            {sections.map((section, index) => (
              <section key={index} className="relative">
                <div className={`absolute ${
                  index % 2 === 0 ? '-left-32' : '-right-32'
                } -top-32 w-64 h-64 ${section.bgGlow} rounded-full blur-3xl opacity-50`} />
                
                <div className="relative">
                  <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent
                    tracking-tight leading-none`}>
                    {section.title}
                  </h2>
                  <InfiniteScroll 
                    images={section.data} 
                    direction={index % 2 === 0 ? 1 : -1}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const styles = `
    @keyframes blob {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(20px, -50px) scale(1.1);
      }
      50% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      75% {
        transform: translate(-40px, -25px) scale(1.05);
      }
    }
  
    .animate-blob {
      animation: blob 15s infinite cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .animation-delay-2000 {
      animation-delay: 2s;
    }
  `;
  
  export default Clients;