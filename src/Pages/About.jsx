import { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, Briefcase, Calendar, MapPin } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import nazib_pic from '../assets/my_pic.jpg';

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));
Header.displayName = "Header";

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src={nazib_pic}
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));
ProfileImage.displayName = "ProfileImage";

const ExperienceCard = memo(() => (
  <div className="mt-16 mb-8">
    <div className="text-center mb-8">
      <h3
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Experience
      </h3>
      <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full"></div>
    </div>
    
    <div
      className="relative bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background gradient */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-50"></div>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-start gap-4 mb-4 sm:mb-0">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform hover:rotate-6">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Associate Full Stack Developer
            </h4>
            <p className="text-[#a855f7] font-semibold text-lg">TutorsPlan</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:items-end text-sm text-gray-400">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4" />
            <span>Mar 2025 – Current</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
      
      {/* Responsibilities */}
      <div className="space-y-4">
        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"></div>
          Key Responsibilities
        </h5>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
            <span className="text-sm sm:text-base leading-relaxed">
              Built responsive, user-friendly interfaces using Next.js React, Tailwind CSS, and JavaScript, ensuring seamless performance across devices and browsers.
            </span>
          </li>
          
          <li className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
            <span className="text-sm sm:text-base leading-relaxed">
              Implemented reusable components and optimized page rendering to enhance user experience and maintain design consistency.
            </span>
          </li>
          
          <li className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
            <span className="text-sm sm:text-base leading-relaxed">
              Collaborated with UI/UX designers to translate Figma designs into clean, interactive frontend code with attention to detail and accessibility standards.
            </span>
          </li>
          
          <li className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
            <span className="text-sm sm:text-base leading-relaxed">
              Coordinated with backend developers to integrate APIs and manage data flow efficiently across the platforms.
            </span>
          </li>
          
          <li className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
            <span className="text-sm sm:text-base leading-relaxed">
              Contributed to the development of interactive learning experiences and browser-based educational games using modern JavaScript technologies.
            </span>
          </li>
          
          <li className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
            <span className="text-sm sm:text-base leading-relaxed">
              Actively participated in code reviews, debugging, and continuous improvement of frontend workflows using Git and agile methodologies.
            </span>
          </li>
        </ul>
      </div>
      
      {/* Technologies used */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"></div>
          Technologies
        </h5>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Figma', 'Git', 'APIs'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
));
ExperienceCard.displayName = "ExperienceCard";

import PropTypes from "prop-types";

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span
          className="text-4xl font-bold text-white"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>

      <div>
        <p
          className="text-sm uppercase tracking-wider text-gray-300 mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p
            className="text-xs text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

StatCard.displayName = "StatCard";

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

const AboutPage = () => {
  // Memoized calculations
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");

    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience
    };
  }, []);

  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Memoized stats data
  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "6+",
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: "contact me...",
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "0.5 years",
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I&#39;m
              </span>
              <span
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Sheaikh Nazibur Rahman
              </span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Passionate and results-driven Computer Science enthusiast with hands-on experience in full-stack development, 3D design, and game development. Adept at leveraging emerging technologies to develop innovative solutions, with a strong
              foundation in programming, machine learning, and embedded systems. Skilled in designing and implementing interactive
              applications, optimizing system performance, and collaborating within teams to deliver high-quality projects. Seeking
              opportunities to apply technical expertise, expand knowledge, and contribute to forward-thinking organizations in a dynamic environment.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href="https://drive.google.com/drive/folders/1I8gj9Xb7rmTyT5y9-ymj15JPAB3brZpb?usp=sharing" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        <ExperienceCard />

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);