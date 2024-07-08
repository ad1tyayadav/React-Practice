import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Download from './Download';
import { motion } from 'framer-motion';

function Cardtext({ reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={.1} className='text-white relative p-[28px] w-[20%] h-[40%] mt-[20px] bg-zinc-900 rounded-[38px] pl-8 overflow-hidden'>
            <IoDocumentTextOutline />
            <p className='mt-4 tracking-tighter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iusto facere corrupti eum pariatur?</p>
            <div className='text-white items-end absolute z-20 bottom-20 right-0 w-full font-semibold flex justify-center gap-40'>
                <p>.6mb</p>
                <button>
                    <FaCloudDownloadAlt />
                </button>
            </div>
            <Download />
        </motion.div>
    )
}

export default Cardtext