export interface Axes {
  axis1: number // 구매방식: 낮을수록 계획형, 높을수록 폭주형
  axis2: number // 판단기준: 낮을수록 성분형, 높을수록 리뷰·랭킹형
  axis3: number // 루틴스타일: 낮을수록 미니멀, 높을수록 레이어링
  axis4: number // 피부전략: 낮을수록 장벽회복, 높을수록 기능성개선
}

type ScoreMap = Record<string, Partial<Axes>>

// 각 문항별 선택지 → 점수 매핑
const scoreTable: ScoreMap[] = [
  // Q1
  {
    A: { axis1: -2 },
    B: { axis2: 2, axis1: 1 },
    C: { axis1: 3 },
    D: { axis2: -3 },
  },
  // Q2
  {
    A: { axis3: -2 },
    B: {},
    C: { axis3: 3 },
    D: { axis3: 2, axis1: 1 },
  },
  // Q3
  {
    A: { axis3: -2, axis4: -1 },
    B: { axis4: -2 },
    C: { axis3: 2, axis4: 1 },
    D: { axis1: 2, axis4: 1 },
  },
  // Q4
  {
    A: { axis4: 1 },
    B: { axis4: 1 },
    C: { axis4: 2 },
    D: { axis4: -3 },
    E: { axis4: 2 },
  },
  // Q5
  {
    A: { axis2: -2, axis4: 2 },
    B: { axis2: -1, axis3: 2 },
    C: { axis4: 2, axis2: -1 },
    D: { axis2: -1 },
    E: { axis2: 2 },
  },
  // Q6
  {
    A: { axis2: 2 },
    B: { axis1: 1, axis2: 1 },
    C: { axis2: -3 },
    D: { axis2: 1 },
    E: { axis2: 2, axis1: 1 },
  },
  // Q7
  {
    A: { axis3: 2 },
    B: { axis2: -2 },
    C: { axis3: 1 },
    D: { axis1: 2 },
    E: { axis4: -1 },
  },
  // Q8
  {
    A: { axis3: 2, axis4: 1 },
    B: { axis4: -2 },
    C: { axis3: -1 },
    D: { axis3: -1 },
    E: { axis3: 2, axis1: 1 },
  },
  // Q9
  {
    A: { axis1: 2 },
    B: { axis1: 1, axis4: 2 },
    C: { axis1: 1, axis3: 1 },
    D: { axis1: 2 },
  },
  // Q10
  {
    A: { axis3: 2, axis4: 1 },
    B: { axis4: -1 },
    C: { axis3: 2 },
    D: { axis3: -2 },
  },
  // Q11
  {
    A: { axis1: -2 },
    B: { axis3: 2, axis1: 1 },
    C: { axis3: -1 },
    D: { axis3: 3, axis1: 2 },
  },
  // Q12
  {
    A: { axis1: -2, axis3: -1 },
    B: { axis4: 2 },
    C: { axis1: 1 },
    D: { axis1: 3 },
  },
]

export function calculateResult(answers: string[]): string {
  const axes: Axes = { axis1: 0, axis2: 0, axis3: 0, axis4: 0 }

  answers.forEach((answer, idx) => {
    const scores = scoreTable[idx]?.[answer]
    if (!scores) return
    if (scores.axis1 !== undefined) axes.axis1 += scores.axis1
    if (scores.axis2 !== undefined) axes.axis2 += scores.axis2
    if (scores.axis3 !== undefined) axes.axis3 += scores.axis3
    if (scores.axis4 !== undefined) axes.axis4 += scores.axis4
  })

  const code =
    (axes.axis1 >= 0 ? '1' : '0') +
    (axes.axis2 >= 0 ? '1' : '0') +
    (axes.axis3 >= 0 ? '1' : '0') +
    (axes.axis4 >= 0 ? '1' : '0')

  return code
}
