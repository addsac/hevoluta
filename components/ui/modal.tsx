import { motion } from 'framer-motion'
import React from 'react'

const Modal = ({ children = <></>, position = 'right', closeModal = null }: { children: React.ReactNode, position: string, closeModal: any }) => {
    return (
        <div>
            {/* background */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
                className="fixed inset-0 w-screen h-screen bg-black/[0.26] backdrop-blur-md z-10"
                onClick={() => closeModal()}
            />

            {/* dialog */}
            <motion.div 
                initial={{ x: position === 'right' ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: position === 'right' ? '100%' : '-100%' }}
                transition={{ ease: 'easeOut', duration: 0.15, delay: 0.1 }}
                className={`
                    fixed top-0 bottom-0 bg-white w-[400px] flex flex-col gap-20 p-5 z-20
                    ${position === 'right' ? 'right-0' : 'left-0'}
                `}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Modal