'use client'

import { ResultType } from '@/lib/result-data'

interface CompleteProps {
  result: ResultType
}

const downloadCard = async (no: number, name: string) => {
  const response = await fetch(`/skincoach_event/cards/${no}.png`)
  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `skincoach_${no}.png`
  link.click()
  URL.revokeObjectURL(url)
}

export default function Complete({ result }: CompleteProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100dvh',
        paddingTop: '40px',
        paddingBottom: '40px',
        textAlign: 'center',
      }}
    >
      {/* 체크 아이콘 */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: '#E8F0DF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 18L15 25L28 11"
            stroke="#2D5016"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 제목 */}
      <h1
        style={{
          fontSize: '22px',
          fontWeight: 700,
          color: '#1A1A1A',
          marginBottom: '8px',
        }}
      >
        신청이 완료되었습니다
      </h1>

      {/* 서브 */}
      <p style={{ fontSize: '15px', color: '#888888', marginBottom: '32px' }}>
        출시 소식을 가장 먼저 보내드릴게요.
      </p>

      {/* 구분선 */}
      <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#E5E5E5',
          marginBottom: '32px',
        }}
      />

      {/* 스토리 공유 유도 */}
      <p
        style={{
          fontSize: '15px',
          fontWeight: 600,
          color: '#1A1A1A',
          marginBottom: '16px',
          wordBreak: 'keep-all',
        }}
      >
        아직 스토리에 공유 안 하셨나요?
      </p>

      {/* 카드 저장 버튼 */}
      <div style={{ width: '100%', marginBottom: '16px' }}>
        <button
          className="btn-secondary"
          onClick={() => downloadCard(result.no, result.name)}
        >
          카드 저장하기
        </button>
      </div>

      {/* 태그 안내 */}
      <div
        style={{
          backgroundColor: '#E8F0DF',
          borderRadius: '16px',
          padding: '16px',
          fontSize: '13px',
          color: '#2D5016',
          lineHeight: 1.6,
          width: '100%',
          wordBreak: 'keep-all',
        }}
      >
        <strong>@skincoach_official</strong> 태그하면 이벤트 완료!
      </div>
    </div>
  )
}
