'use client'

import { useState } from 'react'
import { quizData } from '@/lib/quiz-data'

interface QuizProps {
  onComplete: (answers: string[]) => void
  onBack: () => void
}

export default function Quiz({ onComplete, onBack }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)

  const total = quizData.length
  const current = quizData[currentIndex]
  const progress = ((currentIndex) / total) * 100

  const handleSelect = (label: string) => {
    if (selected) return
    setSelected(label)

    setTimeout(() => {
      const newAnswers = [...answers, label]
      if (currentIndex + 1 >= total) {
        onComplete(newAnswers)
      } else {
        setAnswers(newAnswers)
        setCurrentIndex(currentIndex + 1)
        setSelected(null)
      }
    }, 300)
  }

  const handleBack = () => {
    if (currentIndex === 0) {
      onBack()
    } else {
      setAnswers(answers.slice(0, -1))
      setCurrentIndex(currentIndex - 1)
      setSelected(null)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
        paddingTop: '0',
        paddingBottom: '40px',
      }}
    >
      {/* 상단 고정 진행률 바 */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#FAFAF8',
          paddingTop: '16px',
          paddingBottom: '16px',
          zIndex: 10,
        }}
      >
        {/* 이전 버튼 + 진행률 텍스트 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <button
            onClick={handleBack}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: '#1A1A1A',
              padding: '4px 0',
            }}
          >
            ←
          </button>
          <span style={{ fontSize: '13px', color: '#888888', fontWeight: 500 }}>
            Q{currentIndex + 1} / {total}
          </span>
        </div>

        {/* 진행률 바 */}
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: '#E5E5E5',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#2D5016',
              borderRadius: '2px',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>

      {/* 질문 */}
      <div style={{ paddingTop: '32px', flex: 1 }}>
        <h2
          style={{
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: 1.4,
            color: '#1A1A1A',
            marginBottom: '24px',
            wordBreak: 'keep-all',
          }}
        >
          {current.question}
        </h2>

        {/* 선택지 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {current.options.map((option) => {
            const isSelected = selected === option.label
            return (
              <button
                key={option.label}
                onClick={() => handleSelect(option.label)}
                style={{
                  minHeight: '64px',
                  borderRadius: '16px',
                  border: isSelected ? 'none' : '1.5px solid #E5E5E5',
                  backgroundColor: isSelected ? '#2D5016' : 'white',
                  color: isSelected ? 'white' : '#1A1A1A',
                  fontSize: '15px',
                  fontWeight: isSelected ? 600 : 400,
                  padding: '16px 18px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.2s',
                  lineHeight: 1.4,
                  wordBreak: 'keep-all',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : '#F5F5F3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  {option.label}
                </span>
                {option.text}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
