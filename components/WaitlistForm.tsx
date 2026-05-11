'use client'

import { useState } from 'react'
import { ResultType } from '@/lib/result-data'

interface WaitlistFormProps {
  result: ResultType
  onComplete: () => void
}

const skinConcerns = [
  '여드름/트러블',
  '모공/피지',
  '기미/잡티',
  '건조/장벽',
  '탄력/주름',
]

export default function WaitlistForm({ result, onComplete }: WaitlistFormProps) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [concern, setConcern] = useState('')
  const [instagram, setInstagram] = useState('')
  const [betaInterest, setBetaInterest] = useState(false)
  const [marketingAgree, setMarketingAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !contact || !concern) {
      setError('필수 항목을 모두 입력해주세요.')
      return
    }
    if (!marketingAgree) {
      setError('마케팅 정보 수신에 동의해주세요.')
      return
    }

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (!formspreeId) {
      setError('폼 설정이 완료되지 않았습니다.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          skinConcern: concern,
          instagram,
          betaInterest,
          marketingAgree,
          resultName: result.name,
          resultNo: result.no,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (res.ok) {
        onComplete()
      } else {
        setError('제출 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch {
      setError('네트워크 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '52px',
    borderRadius: '12px',
    border: '1.5px solid #E5E5E5',
    padding: '0 16px',
    fontSize: '15px',
    color: '#1A1A1A',
    backgroundColor: 'white',
    outline: 'none',
    fontFamily: 'inherit',
  }

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 600,
    color: '#1A1A1A',
    marginBottom: '6px',
    display: 'block',
  }

  return (
    <div
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      {/* 제목 */}
      <h1
        style={{
          fontSize: '22px',
          fontWeight: 800,
          color: '#1A1A1A',
          marginBottom: '8px',
          wordBreak: 'keep-all',
        }}
      >
        스킨코치 출시 알림 받기
      </h1>
      <p
        style={{
          fontSize: '14px',
          color: '#888888',
          lineHeight: 1.6,
          marginBottom: '32px',
          wordBreak: 'keep-all',
        }}
      >
        앱 출시 즉시 알려드릴게요.<br />
        조기 신청자에게는 프리미엄 기능 무료 체험 혜택을 드립니다.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* 이름 */}
          <div>
            <label style={labelStyle}>
              이름 또는 닉네임 <span style={{ color: '#2D5016' }}>*</span>
            </label>
            <input
              style={inputStyle}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
            />
          </div>

          {/* 이메일/전화번호 */}
          <div>
            <label style={labelStyle}>
              이메일 또는 전화번호 <span style={{ color: '#2D5016' }}>*</span>
            </label>
            <input
              style={inputStyle}
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="email@example.com 또는 010-0000-0000"
            />
          </div>

          {/* 피부 고민 */}
          <div>
            <label style={labelStyle}>
              피부 고민 1순위 <span style={{ color: '#2D5016' }}>*</span>
            </label>
            <select
              style={selectStyle}
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
            >
              <option value="">선택해주세요</option>
              {skinConcerns.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* 인스타그램 */}
          <div>
            <label style={labelStyle}>인스타그램 아이디 (선택)</label>
            <input
              style={inputStyle}
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="@"
            />
          </div>

          {/* 체크박스들 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#1A1A1A',
                lineHeight: 1.4,
              }}
            >
              <input
                type="checkbox"
                checked={betaInterest}
                onChange={(e) => setBetaInterest(e.target.checked)}
                style={{ marginTop: '2px', accentColor: '#2D5016', width: '16px', height: '16px', flexShrink: 0 }}
              />
              베타 테스트 참여 의향이 있어요 (선택)
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#1A1A1A',
                lineHeight: 1.4,
              }}
            >
              <input
                type="checkbox"
                checked={marketingAgree}
                onChange={(e) => setMarketingAgree(e.target.checked)}
                style={{ marginTop: '2px', accentColor: '#2D5016', width: '16px', height: '16px', flexShrink: 0 }}
              />
              마케팅 정보 수신에 동의합니다 <span style={{ color: '#2D5016' }}>*</span>
            </label>
          </div>

          {/* 에러 메시지 */}
          {error && (
            <p style={{ fontSize: '13px', color: '#E53E3E', textAlign: 'center' }}>
              {error}
            </p>
          )}

          {/* 제출 버튼 */}
          <button
            className="btn-primary"
            type="submit"
            disabled={loading}
            style={{ opacity: loading ? 0.6 : 1 }}
          >
            {loading ? '신청 중...' : '신청 완료하기'}
          </button>
        </div>
      </form>
    </div>
  )
}
