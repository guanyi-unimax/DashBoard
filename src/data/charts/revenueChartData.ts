export const earningsColor = '#49A8FF'
export const expensesColor = '#154EC1'

export const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

export type Revenues = {
  month: string
  totalIn: number
  notExpectIn: number
}

export const generateRevenues = (months: string[]): Revenues[] => {
  return months.map((month: string) => {
    const totalMonthIn = Math.floor(Math.random() * 100)
    return {
      month,
      totalIn: totalMonthIn,
      notExpectIn: Math.floor(totalMonthIn * Math.random()),
    }
  })
}

export const getRevenuePerMonth = (month: string, revenues: Revenues[]): Revenues => {
  const revenue = revenues.find((revenue) => revenue.month === month)
  return revenue || { month, totalIn: 0, notExpectIn: 0 }
}
