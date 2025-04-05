// import React from "react";
// // import SingleExperience from "./SingleExperience";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { fadeIn } from "../framerMotion/variants";

// // const experiences = [
// //   {
// //     job: "Front-End Developer",
// //     company: "Alex Apps",
// //     date: "2022 - Present",
// //     responsibilities: [
// //       "Implementing reusable components.",
// //       "Participating in large scale application.",
// //       "Working on the performance of web applications.",
// //       "Generating new ideas for better user experience.",
// //     ],
// //   },
// //   {
// //     job: "Course Instructor",
// //     company: "Nucamp",
// //     date: "2023 - Present",
// //     responsibilities: [
// //       "Explaining and facilitating web development concepts.",
// //       "Help students with their assignments and grade them weekly.",
// //       "Provide support for students through their learning journey.",
// //     ],
// //   },
// //   {
// //     job: "Course Instructor",
// //     company: "Sprints",
// //     date: "2024 - Present",
// //     responsibilities: [
// //       "Teaching JavaScript, React and TailwindCSS.",
// //       "Participating in preparing course materials.",
// //       "Helping students through their way in learning web development technologies.",
// //     ],
// //   },
// // ];

// const AllExperience = () => {
//   return (
//     <div className="flex md:flex-row sm:flex-col items-center justify-between">
//   {experiences.map((experience, index) => {
//     return (
//       <div key={index} className="flex items-center">
//         <SingleExperience experience={experience} />
//         {index < experiences.length - 1 && ( 
//           <motion.div
//             className="flex items-center justify-center h-full"
//             variants={fadeIn("right", 0)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.7 }}
//           >
//             <FaArrowRight className="text-6xl text-orange text-center xl:mx-14 lg:mx-6 lg:block sm:hidden" />
//           </motion.div>
//         )}
//       </div>
//     );
//   })}
// </div>

//   );
// };

// export default AllExperience;
