'use client'

import { motion } from 'framer-motion'
import { Delete } from 'lucide-react'

interface KeypadProps {
  onInput: (value: string) => void
  onClear: () => void
  onDelete: () => void
  onEquals: () => void
}

const buttons = [
  ['C', 'DELETE', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]

export function Keypad({ onInput, onClear, onDelete, onEquals }: KeypadProps) {
  const handleClick = (value: string) => {
    switch (value) {
      case 'C':
        onClear()
        break
      case 'DELETE':
        onDelete()
        break
      case '=':
        onEquals()
        break
      case '×':
        onInput('*')
        break
      case '÷':
        onInput('/')
        break
      default:
        onInput(value)
    }
  }

  return (
    <div className="grid gap-2.5 p-5">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-3">
          {row.map((btn) => (
            <motion.button
              key={btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                btn === '0' ? 'col-span-2' : ''
              } ${
                ['C', 'DELETE', '%', '÷', '×', '-', '+', '='].includes(btn)
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              } ${
                btn === 'DELETE' ? 'flex items-center justify-center' : ''
              } rounded-full h-14 sm:h-18 text-2xl sm:text-3xl font-semibold shadow-md focus:outline-none`}
              onClick={() => handleClick(btn)}
            >
              {btn === 'DELETE' ? (
                <Delete className="w-7 h-7" />
              ) : (
                btn
              )}
            </motion.button>
          ))}
        </div>
      ))}
    </div>
  )
}

