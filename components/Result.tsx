'use client'

import { ResultType } from '@/lib/result-data'

interface ResultProps {
  result: ResultType
  onApply: () => void
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const downloadCard = async (no: number) => {
  const response = await fetch(`${BASE}/cards/${no}.png`)
  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `skincoach_${no}.png`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function Result({ result, onApply }: ResultProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      {/* 상단 레이블 */}
      <p
        style={{
          fontSize: '13px',
          color: '#888888',
          marginBottom: '8px',
          textAlign: 'center',
        }}
      >
        내 유형이 나왔어요!
      </p>

      {/* 유형명 */}
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 800,
          color: '#1A1A1A',
          textAlign: 'center',
          marginBottom: '28px',
          wordBreak: 'keep-all',
        }}
      >
        {result.no}. {result.name}
      </h1>

      {/* 카드 이미지 */}
      <div style={{ marginBottom: '28px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}/cards/${result.no}.png`}
          alt={result.name}
          style={{
            width: '100%',
            maxWidth: '390px',
            borderRadius: '16px',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>

      {/* 버튼 2개 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
        <button
          className="btn-secondary"
          onClick={() => downloadCard(result.no)}
        >
          카드 저장하기
        </button>
        <button className="btn-primary" onClick={onApply}>
          출시 알림 신청하기 →
        </button>
      </div>

      {/* 인스타 공유 안내 */}
      <div
        style={{
          backgroundColor: '#E8F0DF',
          borderRadius: '16px',
          padding: '16px',
          fontSize: '13px',
          color: '#2D5016',
          lineHeight: 1.6,
          textAlign: 'center',
          wordBreak: 'keep-all',
        }}
      >
        카드를 저장하고 인스타그램 스토리에 올린 뒤<br />
        <strong>@skincoach_official</strong>을 태그해주세요.<br />
        태그하면 이벤트 참여가 완료됩니다.
      </div>
    </div>
  )
}
