import AndroidIcon from "@/components/common/AndroidIcon"
import CSSIcon from "@/components/common/CSSIcon"
import GithubIcon from "@/components/common/GithubIcon"
import HtmlIcon from "@/components/common/HtmlIcon"
import JavaIcon from "@/components/common/JavaIcon"
import JavascriptIcon from "@/components/common/JavascriptIcon"
import LinkedInIcon from "@/components/common/LinkedInIcon"
import MongoIcon from "@/components/common/MongoIcon"
import MySQLIcon from "@/components/common/MySQLIcon"
import { NextIcon } from "@/components/common/NextIcon"
import NodeJsIcon from "@/components/common/NodeJsIcon"
import ReactIcon from "@/components/common/ReactIcon"
import SpringBootIcon from "@/components/common/SpringBootIcon"
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
    "href":"/static/Shubham_Resume.pdf"
}

export const ABOUT_SECTION = {
    displayText:"Welcome to the digital universe, where I'm the architect of tomorrow's experiences.",
    name:"Shubham",
    title:"Digital Alchemist: Transforming Tomorrow's Experiences",
    description:"I am an aspiring full stack web developer. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web application using React and its ecosystem.",
    about:"Hello! Myself Shubham Kumar and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I started my BCA journey. Me and my friends used to build web application with different tech stacks to explore the different tools invented for building web applications. Thats where I got the urge to learn all kinds of computer languages.Fast-forward to today, and I have made few web app projects of my own and am currently looking to join an organization.",
    about_second:"I possess a strong ability to quickly adapt to new tools and frameworks. As an avid learner, I am excited about the opportunity to contribute my skills while expanding my knowledge in a professional setting. I understand the importance of collaborative teamwork in achieving project success. My experiences working on group projects and participating in coding competitions have prepared me to contribute effectively within a team environment.",
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
        title:"Tic tac Toe",
        description:"A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against a friend locally on any device, with responsive design for seamless gameplay.",
        github_link:"https://github.com/Kmrshubham335/Complete-WebDevelopment-Resource/tree/main/JavaScript/Project_JS",
        tech_stack:[JavascriptIcon,HtmlIcon,CSSIcon],
        image:'/static/images/project-2.png'
    },
    {
        title:"ExpressJS Login Authentication",
        description:"Implementing secure user authentication in ExpressJS using EJS for dynamic views. This application allows users to register, login, and access protected routes securely. Utilizes sessions and cookies for persistent login sessions.",
        github_link:"",
        tech_stack:[HtmlIcon,CSSIcon,NodeJsIcon,MongoIcon],
        image:'/static/images/project-3.png'
    },
    {
        title:"To-Do-List",
        description:"A simple yet powerful To-Do List application built with modern web technologies. Organize your tasks, set priorities, and track your progress effortlessly. ",
        github_link:"",
        tech_stack:[HtmlIcon,CSSIcon,JavascriptIcon],
        image:'/static/images/project-4.png'
    }
]

export const skills = [
    ReactIcon,TSIcon,HtmlIcon,CSSIcon,JavascriptIcon,MongoIcon,NodeJsIcon, MySQLIcon,NextIcon,GithubIcon,JavaIcon
]




export const contact = {
  links: [
    {
      icon: GithubIcon as IconType,
      link: 'https://github.com/Kmrshubham335/',
    },
    {
      icon: LinkedInIcon as IconType,
      link: 'https://www.linkedin.com/in/shubhamkumar68/',
    },
  ],
};

// src/types/IconType.ts
import { ComponentType, SVGProps } from 'react';

export type IconType = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
