// "use client";
// import { useEffect, useState } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "tsparticles-slim";

// const Background = () => {
//     const [init, setInit] = useState(false);

//   useEffect(() => {
//     loadSlim().then(() => {
//       setInit(true);
//     });
//   }, []);

//   if (!init) return null;



//   return (
//    <Particles
//       id="tsparticles"
//       options={{
//         background: {
//           color: "#0d3b4c",
//         },
//         particles: {
//           number: { value: 80 },
//           color: { value: "#9be7c4" },
//           links: {
//             enable: true,
//             color: "#9be7c4",
//             distance: 130,
//             opacity: 0.5,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 1.5,
//           },
//           size: {
//             value: 2,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "grab",
//             },
//           },
//           modes: {
//             grab: {
//               distance: 140,
//               links: {
//                 opacity: 1,
//               },
//             },
//           },
//         },
//       }}
//     />
//   )
// }

// export default Background
