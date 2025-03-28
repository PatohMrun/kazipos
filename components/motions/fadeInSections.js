

'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Word = ({ word, index, totalWords, scrollYProgress }) => {
    const start = index / totalWords;
    const end = (index + 1) / totalWords;
    const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0.1, 0.1, 1, 1]);
    return <motion.span style={{ opacity }}>{word} </motion.span>;
};

const Paragraph = ({ sentence, scrollYProgress }) => {
    const words = sentence.split(" ");
    return (
        <p>
            {words.map((word, index) => (
                <Word
                    key={index}
                    word={word}
                    index={index}
                    totalWords={words.length}
                    scrollYProgress={scrollYProgress}
                />
            ))}
        </p>
    );
};

export default Paragraph;