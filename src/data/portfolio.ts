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
import TSIcon from "@/components/common/TSIcon"
import { link } from "fs"


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
    "href":"/resume-path"
}

export const ABOUT_SECTION = {
    displayText:"Transforming code into seamless user experiences.",
    name:"Pradeep",
    title:"Software Engineer",
    description:"With 6+ years of hands-on experience, I specialize in end-to-end web and mobile development, combining front-end finesse with back-end prowess to build dynamic and responsive digital solutions.",
    greeting:'👋'
}

export const projects = [
    {
        title:"Store 24",
        description:"Discover Fashion's Finest: Shop, Connect, Elevate.",
        github_link:"",
        tech_stack:[ReactIcon,TSIcon,HtmlIcon,CSSIcon],
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
    ReactIcon,TSIcon,HtmlIcon,CSSIcon,JavascriptIcon, SpringBootIcon,MongoIcon,NodeJsIcon, MySQLIcon,NextIcon 
]

export const contact = {
    "title":"Contact",
    "description":"Need software solutions that streamline your business? Let's collaborate on innovative tech projects.",
    links:[
        {
            icon:GithubIcon,
            link:'https://github.com/pardeep16/'
        },
        {
            icon:LinkedInIcon,
            link:'https://www.linkedin.com/in/pardeep16/'
        }
    ]
}