import { motion } from 'motion/react'

export const sentenceVariants = (delay) => {
  return {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: 0.015, delayChildren: delay } }
  }
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

// method: whileInView | animate
export const Typewriter = ({ text, method="animate", delay=0, ...rest }) => (
  <motion.p
    key={text}
    variants={sentenceVariants(delay)}
    initial="hidden"
    animate={method === "animate" && "visible"}
    whileInView={method === "whileInView" && "visible"}
    viewport={method === "whileInView" && { once: true }}
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
