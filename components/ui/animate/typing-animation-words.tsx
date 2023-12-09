import { motion } from 'framer-motion'

export default function TypingAnimaitonWords({ words = '' } : { words : string }) {
    return (
        words.split('').map((word, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.08, ease: 'linear', delay: index * 0.005 }}
            >
                {word}
            </motion.span>
        ))
    )
}
