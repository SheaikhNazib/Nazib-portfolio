import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject"; // Make sure this is a valid import
import TechStackIcon from "../components/TechStackIcon";
import { Code, Award, Boxes } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import nsu_overclock from "../assets/nsu_overclock.png"
import acm from "../assets/acm.png"
import traffic_sign from "../assets/traffic_sign.jpg"
import community_center from "../assets/community_center.jpg"
import temp from "../assets/temp_hum.png"
import school from "../assets/school.jpg"
import "aos/dist/aos.css";


const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300
      ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border
      border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const projects = [
  {
    id: 1,
    Img: nsu_overclock, // Replace with actual image link
    Title: "NSU Overclock (Game Development Project)",
    Description:
      "Developed game maps and imaginary characters using Blender and integrated assets into Unreal Engine. Implemented core gameplay mechanics using C++ and Blueprints, optimizing performance and refining the gameplay experience. Designed environment assets, including buildings, trees, and lighting effects to enhance visual realism.",
    Link: "https://www.linkedin.com/posts/sheaikh-nazibur-rahman_excited-to-share-some-glimpses-of-nsu-overclock-activity-7288571325479063552-urkT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDybhAB0bCzTsvleQICguGsu5f1wTMejZo", // Add the project link if available
  },
  {
    id: 2,
    Img: acm, // Replace with actual image link
    Title: "NSU ACM SC Website",
    Description:
      "A pattern recognition project for detecting plant diseases using machine learning techniques. I focused on dataset preparation and analysis.",
    Link: "https://nsusc.acm.org/", // Add the project link if available
  },
  {
    id: 3,
    Img: traffic_sign, // Replace with actual image link
    Title: "Traffic Sign Recognition and Classification",
    Description:
      "Implemented a deep learning model using Convolutional Neural Networks (CNN) to recognize and classify traffic signs. Trained the model on the GTSRB dataset with PyTorch, achieving over 95% accuracy. Optimized the model to reduce processing time and enhance performance.",
    Link: "#", // Add the project link if available
  },
  {
    id: 4,
    Img: community_center, // Replace with actual image link
    Title: "Community Center Management System",
    Description:
      "Built a platform for booking community centers, offering customizable food packages, date selection, and billing. Developed using Java, ensuring a seamless user experience.",
    Link: "#", // Add the project link if available
  },
  {
    id: 5,
    Img: temp, // Replace with actual image link
    Title: "Temperature and Humidity Monitoring System",
    Description:
      "Designed an embedded system using STM32F103C8T6 microcontroller and integrated a DHT11 sensor. Developed firmware using STMCubeMX for real-time data display and alerts for high temperatures (>35°C). Built a functional interface for monitoring temperature and humidity levels.",
    Link: "#", // Add the project link if available
  },
  {
    id: 6,
    Img: school, // Replace with actual image link
    Title: "School Management System",
    Description:
      "Developed a platform for storing school information and calculating student results. Built with HTML, CSS, PHP, and MySQL to ensure smooth data management. Implemented a user-friendly interface for teachers and administrators",
    Link: "#", // Add the project link if available
  },
];

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 2 : 4;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  useEffect(() => {
    AOS.init({
        once: false, // Animation runs every time the element enters the viewport
        duration: 1000,
    });
    AOS.refresh(); // Ensures it refreshes all AOS elements
}, []);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portfolio" >
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="2000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} className="bg-transparent border border-white/10 rounded-lg">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            className="text-slate-400"
            data-aos="fade-up" data-aos-duration="2000"
          >
            <Tab icon={<Code />} label="Projects" {...a11yProps(0)}/>
            <Tab icon={<Boxes />} label="Tech Stack" {...a11yProps(1)}/>
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue} >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-left" data-aos-duration="2000">
              {displayedProjects.map((project) => (
                <CardProject key={project.id} {...project} />
              ))}
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => setShowAllProjects(!showAllProjects)} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {techStacks.map((stack, index) => (
                <TechStackIcon key={index} TechStackIcon={stack.icon} Language={stack.language} />
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
