'use client'

import { useState, useCallback } from 'react'
import { Display } from './display'
import { Keypad } from './keypad'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [history, setHistory] = useState<string[]>([])

  const handleInput = useCallback((value: string) => {
    setDisplay((prev) => {
      if (prev === '0' && value !== '.') {
        return value
      }
      return prev + value
    })
  }, [])

  const handleClear = useCallback(() => {
    setDisplay('0')
  }, [])

  const handleDelete = useCallback(() => {
    setDisplay((prev) => {
      if (prev.length === 1) {
        return '0'
      }
      return prev.slice(0, -1)
    })
  }, [])

  const handleEquals = useCallback(() => {
    try {
      const result = eval(display)
      setHistory((prev) => [...prev, `${display} = ${result}`])
      setDisplay(result.toString())
    } catch (error) {
      setDisplay('Error')
    }
  }, [display])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <Display value={display} history={history} />
        <Keypad
          onInput={handleInput}
          onClear={handleClear}
          onDelete={handleDelete}
          onEquals={handleEquals}
        />
      </div>
    </div>
  )
}

