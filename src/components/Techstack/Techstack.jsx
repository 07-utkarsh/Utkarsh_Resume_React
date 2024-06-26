import "./Techstack.css";
import Techstackicon from "./Techstackicon/Techstackicon";
import { techstackRowOne, techstackRowTwo } from "../../constants";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:'linear',
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})

function Techstack() {

  return (
    <div className="techstack_container">
      <motion.p
      whileInView={{opacity:1, y:0}}
      intial={{opacity:0, y:-100}}
      transition={{duration:1.5, delay:1}}
      className="techstack_title">Tech Stack</motion.p>
      <div className="techstack_icon_container">
        {techstackRowOne.map(function (element, index) {
          return (
            <Techstackicon
              key={element.iconName}
              title={element.iconName}
              altProperty={element.iconAltProperty}
              image={element.iconImage}
              duration={element.duration}
            />
          );
        })}
        
      </div>
      <div className="techstack_icon_container">
        {techstackRowTwo.map(function (element, index) {
          return (
            <Techstackicon
              key={element.iconName}
              title={element.iconName}
              altProperty={element.iconAltProperty}
              image={element.iconImage}
              duration={element.duration}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Techstack;