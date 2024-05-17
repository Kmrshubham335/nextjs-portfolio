import AndroidIcon from "@/components/common/AndroidIcon"
import CSSIcon from "@/components/common/CSSIcon"
import GithubIcon from "@/components/common/GithubIcon"
import HtmlIcon from "@/components/common/HtmlIcon"
import JavascriptIcon from "@/components/common/JavascriptIcon"
import LinkedInIcon from "@/components/common/LinkedInIcon"
import MongoIcon from "@/components/common/MongoIcon"
import MySQLIcon from "@/components/common/MySQLIcon"
import { NextIcon } from "@/components/common/NextIcon"
import NodeJsIcon from "@/components/common/NodeJsIcon"
import ReactIcon from "@/components/common/ReactIcon"
import SpringBootIcon from "@/components/common/SpringBootIcon"
import TailwindCss from "@/components/common/TailwindCssIcon"
import TSIcon from "@/components/common/TSIcon"


export const navBarLink = [
    {
        "title":"About",
        "href":"#about"
    },
    {
        "title":"Projects",
        "href":"#projects"
    },
    {
        "title":"Skills",
        "href":"#skills"
    },
    {
        "title":"Contact",
        "href":"#contact"
    }
]

export const attachment = {
    "title":"Resume",
    "href":"/static/Shubham_Kumar.pdf"
}

export const ABOUT_SECTION = {
    displayText:"Welcome to the digital universe, where I'm the architect of tomorrow's experiences.",
    name:"Shubham",
    title:"Digital Alchemist: Transforming Tomorrow's Experiences",
    description:"I believe in designing tomorrow's experiences today, and I'm dedicated to exploring new ideas and pushing the limits of innovation. Through my work, I strive to create impactful solutions that inspire and delight users.",
    greeting:'👋'
}

export const projects = [
    {
        title:"CollabCanva",
        description:"Developed a real-time collaborative platform called CollabCanvas using ReactJS, NextJS, Tailwind CSS,Clerk, and Convex.",
        hosting_link:"https://collabcanvas-alpha.vercel.app/",
        tech_stack:[NextIcon,ReactIcon,HtmlIcon,CSSIcon],
        image:'/static/images/project-1.png'
    },
    {
        title:"MedTrue",
        description:"Empowering Health, One Tap at a Time: Manage, Book, Analyze.",
        github_link:"",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon,AndroidIcon],
        image:'/static/images/project-2.jpg'
    },
    {
        title:"HarmonyFlow",
        description:"Harmonize Your Yoga Journey with AI-Powered Wisdom.",
        github_link:"",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon,NodeJsIcon,MongoIcon],
        image:'/static/images/project-3.png'
    },
    {
        title:"Task Management",
        description:"Effortless Productivity: Simplify, Organize, Achieve.",
        github_link:"",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon,SpringBootIcon,MySQLIcon],
        image:'/static/images/project-4.png'
    }
]

export const skills = [
    ReactIcon,TSIcon,HtmlIcon,CSSIcon,JavascriptIcon,MongoIcon,NodeJsIcon, MySQLIcon,NextIcon 
]

// src/data/portfolio.ts


export const contact = {
  title: "Contact",
  description: "Need software solutions that streamline your business? Let's collaborate on innovative tech projects.",
  links: [
    {
      icon: GithubIcon as IconType,
      link: 'https://github.com/pardeep16/',
    },
    {
      icon: LinkedInIcon as IconType,
      link: 'https://www.linkedin.com/in/pardeep16/',
    },
  ],
};

// src/types/IconType.ts
import { ComponentType, SVGProps } from 'react';

export type IconType = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
