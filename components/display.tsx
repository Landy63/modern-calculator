'use client'

import { motion } from 'framer-motion'

interface DisplayProps {
  value: string
  history: string[]
}

export function Display({ value, history }: DisplayProps) {
  return (
    <div className="bg-gray-800 p-5 text-right">
      <div className="h-14 overflow-y-auto mb-2">
        {history.slice(-2).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            {item}
          </motion.div>
        ))}
      </div>
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-3xl sm:text-4xl font-bold truncate"
      >
        {value}
      </motion.div>
    </div>
  )
}

