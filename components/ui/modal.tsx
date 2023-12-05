import { motion } from 'framer-motion'
import React from 'react'

const Modal = ({ children = <></>, position = 'right', closeModal = null }: { children: React.ReactNode, position: string, closeModal: any }) => {
    return (
        <>
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
                transition={{ ease: 'easeOut', duration: 0.15 }}
                className={`
                    fixed top-0 bottom-0 bg-white 
                    w-[calc(100vw-20px)] lg:w-[400px] h-screen max-h-screen
                    flex flex-col gap-10 p-5 pb-20 z-20
                    overflow-y-auto
                    ${position === 'right' ? 'right-0' : 'left-0'}
                `}
            >
                {children}
            </motion.div>
        </>
    )
}

export default Modal