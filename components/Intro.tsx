'use client'

interface IntroProps {
  onStart: () => void
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
        paddingTop: '24px',
        paddingBottom: '40px',
      }}
    >
      {/* 상단 브랜드명 */}
      <div
        style={{
          fontSize: '13px',
          color: '#2D5016',
          fontWeight: 600,
          letterSpacing: '0.08em',
        }}
      >
        SKINCOACH
      </div>

      {/* 메인 콘텐츠 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '48px' }}>
        {/* 메인 카피 */}
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 800,
            lineHeight: 1.2,
            color: '#1A1A1A',
            marginBottom: '16px',
            wordBreak: 'keep-all',
          }}
        >
          다가오는 올영 세일,<br />
          이번에도 감으로<br />
          담으실 건가요?
        </h1>

        {/* 서브 카피 */}
        <p
          style={{
            fontSize: '15px',
            color: '#888888',
            lineHeight: 1.6,
            marginBottom: '32px',
            wordBreak: 'keep-all',
          }}
        >
          12문항으로 알아보는 내 스킨케어 장바구니 성향
        </p>

        {/* 정보 뱃지 */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '48px' }}>
          <span
            style={{
              padding: '8px 14px',
              backgroundColor: '#E8F0DF',
              borderRadius: '20px',
              fontSize: '13px',
              color: '#2D5016',
              fontWeight: 500,
            }}
          >
            ⏱ 약 2분 소요
          </span>
          <span
            style={{
              padding: '8px 14px',
              backgroundColor: '#E8F0DF',
              borderRadius: '20px',
              fontSize: '13px',
              color: '#2D5016',
              fontWeight: 500,
            }}
          >
            🗂 총 16가지 유형
          </span>
        </div>

        {/* CTA 버튼 */}
        <button className="btn-primary" onClick={onStart}>
          내 장바구니 유형 확인하기 →
        </button>
      </div>

      {/* 하단 계정 */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#888888',
          paddingTop: '24px',
        }}
      >
        @skincoach_official
      </div>
    </div>
  )
}
