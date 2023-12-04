import { motion } from 'framer-motion'
import React from 'react'

const ModalCenter = ({ children = <></>, closeModal = null }: { children: React.ReactNode, closeModal: any }) => {
    return (
        <>
            {/* background */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
                className="fixed inset-0 w-screen h-screen bg-black/[0.26] backdrop-blur-md z-40" 
                onClick={() => closeModal()}
            />

            {/* dialog */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
                className="
                    fixed top-0 left-0 right-0
                    w-[500px] h-auto 
                    bg-white border border-black p-10 flex flex-col gap-10 
                    mx-auto mt-10 z-50
                "
            >
                {children}
            </motion.div>
        </>
    )
}

export default ModalCenter