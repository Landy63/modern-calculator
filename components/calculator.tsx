'use client'

import { useState, useCallback, useEffect } from 'react'
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

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key
    if (/^[0-9.]$/.test(key)) {
      handleInput(key)
    } else if (key === 'Enter') {
      handleEquals()
    } else if (key === 'Backspace') {
      handleDelete()
    } else if (key === 'Escape') {
      handleClear()
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleInput(key)
    }
  }, [handleInput, handleEquals, handleDelete, handleClear])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-none mx-auto">
      <Display value={display} history={history} />
      <Keypad
        onInput={handleInput}
        onClear={handleClear}
        onDelete={handleDelete}
        onEquals={handleEquals}
      />
    </div>
  )
}

