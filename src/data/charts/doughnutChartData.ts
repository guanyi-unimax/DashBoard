import { TDoughnutChartData } from '../types'

export const profitBackground = '#154EC1'
export const expensesBackground = '#fff'
export const earningsBackground = '#ECF0F1'

export const doughnutChartData: TDoughnutChartData = {
  labels: ['初診人數', '就診人數'],
  datasets: [
    {
      backgroundColor: [profitBackground, earningsBackground],
      data: [42, 432],
    },
  ],
}
