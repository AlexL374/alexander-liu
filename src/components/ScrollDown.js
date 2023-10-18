import './css/ScrollDown.css';
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

function ScrollDown() {
    const { ref, inView, entry } = useInView({
        threshold: 0.75
      });
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const animationDuration = 2.25;

    return (
        <>
            <div className="scroll-down-outer">
                <div className="cursor-pointer w-fit h-fit">
                    <motion.div 
                        animate={{
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: animationDuration,
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: 0.75,
                        }}
                        className="top-angle angle"
                    />
                    <motion.div 
                        animate={{
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: animationDuration,
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: 1.5,
                        }}
                        className="middle-angle angle"
                    />
                    <motion.div 
                        animate={{
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: animationDuration,
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: 2.25,
                        }}
                        className="bottom-angle angle"
                    />
                </div>
            </div>
        </>
    );
}

export default ScrollDown;