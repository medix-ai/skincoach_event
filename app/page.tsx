'use client'

import { useState } from 'react'
import Intro from '@/components/Intro'
import Quiz from '@/components/Quiz'
import Result from '@/components/Result'
import WaitlistForm from '@/components/WaitlistForm'
import Complete from '@/components/Complete'
import { calculateResult } from '@/lib/scoring'
import { getResult, ResultType } from '@/lib/result-data'

type Step = 0 | 1 | 2 | 3 | 4

export default function Home() {
  const [step, setStep] = useState<Step>(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<ResultType | null>(null)

  const handleQuizComplete = (finalAnswers: string[]) => {
    setAnswers(finalAnswers)
    const code = calculateResult(finalAnswers)
    setResult(getResult(code))
    setStep(2)
  }

  return (
    <main
      style={{
        maxWidth: '430px',
        margin: '0 auto',
        padding: '0 20px',
        minHeight: '100dvh',
        backgroundColor: '#FAFAF8',
      }}
    >
      {step === 0 && <Intro onStart={() => setStep(1)} />}
      {step === 1 && (
        <Quiz onComplete={handleQuizComplete} onBack={() => setStep(0)} />
      )}
      {step === 2 && result && (
        <Result
          result={result}
          onApply={() => setStep(3)}
        />
      )}
      {step === 3 && result && (
        <WaitlistForm
          result={result}
          onComplete={() => setStep(4)}
        />
      )}
      {step === 4 && result && (
        <Complete result={result} />
      )}
    </main>
  )
}
