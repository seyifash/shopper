"use client"
import React, {useState, useEffect} from "react";
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({
        isOpen= false,
        onClose,
        title,
        children,
        className = ""
    }){

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === 'Escape')  onClose();
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [onClose])

    return (
        <AnimatePresence>
            {
                isOpen && (
                    <>
                    {/* Modal Backdrop*/}
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={onClose}
                        initial={{opacity : 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        {/* Modal content*/}
                        <motion.div
                            className={`fixed z-50 inset-0 flex items-center justify-center p-4 ${className}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                             <div className="bg-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden">
                                {/* Header */}
                                {title && (
                                    <div className="px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {title}
                                    </h2>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-500 hover:text-gray-700 text-xl"
                                    >
                                        &times;
                                    </button>
                                    </div>
                                )}

                                <div className="p-5">{children}</div>
                             </div>

                        </motion.div>
                    </motion.div>
                    </>
                )
            }
        </AnimatePresence>
    )
}