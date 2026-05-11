export interface ResultType {
  no: number
  name: string
  code: string
}

export const resultData: Record<string, ResultType> = {
  '0000': { no: 1, name: '기본기 설계자', code: '0000' },
  '0001': { no: 2, name: '기능성 절제러', code: '0001' },
  '0010': { no: 3, name: '진정 과몰입러', code: '0010' },
  '0011': { no: 4, name: '성분 전략가', code: '0011' },
  '0100': { no: 5, name: '안정 구매형', code: '0100' },
  '0101': { no: 6, name: '원픽 기능러', code: '0101' },
  '0110': { no: 7, name: '진정템 확장형', code: '0110' },
  '0111': { no: 8, name: '랭킹 풀세트형', code: '0111' },
  '1000': { no: 9, name: '신중 쟁임형', code: '1000' },
  '1001': { no: 10, name: '액티브 사냥꾼', code: '1001' },
  '1010': { no: 11, name: '장벽 과몰입러', code: '1010' },
  '1011': { no: 12, name: '화장대 실험실형', code: '1011' },
  '1100': { no: 13, name: '가성비 안정형', code: '1100' },
  '1101': { no: 14, name: '유행 기능형', code: '1101' },
  '1110': { no: 15, name: '진정템 수집가', code: '1110' },
  '1111': { no: 16, name: '장바구니 폭주러', code: '1111' },
}

export function getResult(code: string): ResultType {
  return resultData[code] ?? resultData['0000']
}
