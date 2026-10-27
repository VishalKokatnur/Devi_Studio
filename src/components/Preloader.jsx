// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Preloader() {
//   const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     const t = setTimeout(() => setLoading(false), 2300)
//     return () => clearTimeout(t)
//   }, [])
//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div key="pre" initial={{ y: 0 }} exit={{ y: '-100%' }}
//           transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
//           className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center">
//           <motion.div exit={{ opacity: 0, scale: 0.95, y: -20 }} transition={{ duration: 0.4 }}
//             className="relative text-5xl md:text-8xl font-black tracking-tighter text-center">
//             <div className="text-red-900/30 whitespace-nowrap">Devi Studio.</div>
//             <motion.div className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
//               initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }}
//               transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}>
//               Devi Studio<span className="text-black">.</span>
//             </motion.div>
//             <div className="text-xs tracking-[0.4em] font-semibold text-white mt-4">PHOTOGRAPHY</div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2300)
    return () => clearTimeout(t)
  }, [])
  return (
    <AnimatePresence>
      {loading && (
        <motion.div key="pre" initial={{ y: 0 }} exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#e3a82b] z-[100000] flex items-center justify-center">
          <motion.div exit={{ opacity: 0, scale: 0.95, y: -20 }} transition={{ duration: 0.4 }}
            className="relative text-5xl md:text-8xl font-black tracking-tighter text-center">
            <div className="text-black/25 whitespace-nowrap">Devi Studio.</div>
            <motion.div className="absolute top-0 left-0 text-[#111] overflow-hidden whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}>
              Devi Studio<span className="text-white">.</span>
            </motion.div>
            <div className="text-xs tracking-[0.4em] font-semibold text-[#111] mt-4">PHOTOGRAPHY</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}