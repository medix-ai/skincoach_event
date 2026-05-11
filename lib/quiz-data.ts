export interface QuizOption {
  label: string
  text: string
}

export interface QuizQuestion {
  id: number
  question: string
  options: QuizOption[]
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: '올영 세일이 시작되면 가장 먼저 하는 행동은?',
    options: [
      { label: 'A', text: '필요한 것만 메모해서 산다' },
      { label: 'B', text: '랭킹/리뷰부터 확인한다' },
      { label: 'C', text: '장바구니에 일단 많이 담는다' },
      { label: 'D', text: '성분표부터 확인한다' },
    ],
  },
  {
    id: 2,
    question: '지금 사용하는 세럼/앰플 개수는?',
    options: [
      { label: 'A', text: '0~1개' },
      { label: 'B', text: '2개' },
      { label: 'C', text: '3개 이상' },
      { label: 'D', text: '매일 다르다' },
    ],
  },
  {
    id: 3,
    question: '피부가 안 좋아졌을 때 가장 먼저 하는 행동은?',
    options: [
      { label: 'A', text: '제품을 줄인다' },
      { label: 'B', text: '진정 제품을 추가한다' },
      { label: 'C', text: '각질 제거를 한다' },
      { label: 'D', text: '새 제품을 산다' },
    ],
  },
  {
    id: 4,
    question: '가장 신경 쓰는 피부 고민은?',
    options: [
      { label: 'A', text: '여드름/트러블' },
      { label: 'B', text: '모공/피지' },
      { label: 'C', text: '기미/잡티' },
      { label: 'D', text: '건조/장벽' },
      { label: 'E', text: '탄력/주름' },
    ],
  },
  {
    id: 5,
    question: '현재 루틴에서 쓰고 있는 성분은?',
    options: [
      { label: 'A', text: '레티놀' },
      { label: 'B', text: 'AHA/BHA' },
      { label: 'C', text: '비타민C' },
      { label: 'D', text: '나이아신아마이드' },
      { label: 'E', text: '잘 모르겠다' },
    ],
  },
  {
    id: 6,
    question: '제품 살 때 가장 많이 보는 기준은?',
    options: [
      { label: 'A', text: '리뷰' },
      { label: 'B', text: '가격' },
      { label: 'C', text: '성분' },
      { label: 'D', text: '브랜드' },
      { label: 'E', text: '패키지/유행' },
    ],
  },
  {
    id: 7,
    question: '내 루틴에서 가장 헷갈리는 부분은?',
    options: [
      { label: 'A', text: '바르는 순서' },
      { label: 'B', text: '같이 써도 되는 조합' },
      { label: 'C', text: '사용 빈도' },
      { label: 'D', text: '뭘 사야 하는지' },
      { label: 'E', text: '뭐가 문제인지' },
    ],
  },
  {
    id: 8,
    question: '이번 세일 때 가장 사고 싶은 제품군은?',
    options: [
      { label: 'A', text: '세럼/앰플' },
      { label: 'B', text: '크림' },
      { label: 'C', text: '선크림' },
      { label: 'D', text: '클렌저' },
      { label: 'E', text: '패드/마스크팩' },
    ],
  },
  {
    id: 9,
    question: '세일 때 가장 자주 하는 실수는?',
    options: [
      { label: 'A', text: '비슷한 제품을 또 산다' },
      { label: 'B', text: '고함량 제품을 충동구매한다' },
      { label: 'C', text: '마스크팩/패드를 많이 산다' },
      { label: 'D', text: '필요한 것만 산다고 해놓고 더 산다' },
    ],
  },
  {
    id: 10,
    question: '내 화장대에 가장 많은 제품군은?',
    options: [
      { label: 'A', text: '세럼/앰플' },
      { label: 'B', text: '크림/보습제' },
      { label: 'C', text: '마스크팩/패드' },
      { label: 'D', text: '선크림/클렌저' },
    ],
  },
  {
    id: 11,
    question: '제품을 새로 샀을 때 사용 방식은?',
    options: [
      { label: 'A', text: '하나씩 천천히 써본다' },
      { label: 'B', text: '기존 루틴에 바로 추가한다' },
      { label: 'C', text: '피부 안 좋을 때만 쓴다' },
      { label: 'D', text: '여러 개를 같이 시작한다' },
    ],
  },
  {
    id: 12,
    question: '이번 세일 목표는?',
    options: [
      { label: 'A', text: '필요한 기본템만 리필' },
      { label: 'B', text: '피부 고민 하나를 해결할 제품 찾기' },
      { label: 'C', text: '좋다는 제품 몇 개 체험' },
      { label: 'D', text: '장바구니 비우기' },
    ],
  },
]
