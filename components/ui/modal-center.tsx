import { motion } from 'framer-motion'
import React from 'react'

const ModalCenter = ({ children = <></>, closeModal = null }: { children: React.ReactNode, closeModal: any }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.15 }}
            className="fixed inset-0 flex flex-col min-h-scren min-w-screen max-h-screen max-w-screen overflow-auto z-40 bg-black/[0.26] backdrop-blur-md"
        >
            {/* top */}
            <div 
                className="w-screen min-h-[64px]"
                onClick={() => closeModal()}
            />
            {/* center */}
            <div className="w-screen h-auto flex">
                {/* left */}
                <div className="w-5 lg:w-full" onClick={() => closeModal()} />
                {/* center */}
                <div className="w-full lg:min-w-[500px] h-auto bg-white border border-black p-10 flex flex-col gap-10">
                    {children}
                </div>
                {/* right */}
                <div className="w-5 lg:w-full" onClick={() => closeModal()} />
            </div>
            {/* bottom */}
            <div 
                className="w-screen h-full min-h-[64px]" 
                onClick={() => closeModal()}
            />
        </motion.div>
    )
}

export default ModalCenter