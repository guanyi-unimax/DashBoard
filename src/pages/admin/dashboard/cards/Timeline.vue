<template>
  <VaCard>
    <VaCardTitle class="flex items-start">
      <h1 class="card-title text-tag text-secondary font-bold uppercase">住院佔床率</h1>
    </VaCardTitle>
    <VaCardContent>
      <section>
        <div class="text-xl font-bold mb-2">40%</div>
        <p class="text-xs text-danger">
          <VaIcon name="arrow_upward" />
          22%
          <span class="text-secondary"> 相較前月</span>
        </p>
      </section>
      <div class="w-full flex items-center">
        <VaChart :data="chartData" class="h-52" type="line" :options="options" />
      </div>
    </VaCardContent>
  </VaCard>
</template>

<script setup lang="ts">
import { VaCard } from 'vuestic-ui'
import VaChart from '../../../../components/va-charts/VaChart.vue'
import { useChartData } from '../../../../data/charts/composables/useChartData'
import { ChartOptions } from 'chart.js'
import { TLineChartData } from '../../../../data/types'

const lineChartData: TLineChartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: '佔床率',
      backgroundColor: 'rgba(75,192,192,0.4)',
      data: [20, 30, 51, 25, 12, 40, 75, 10, 35, 14, 17, 7], // Random values
    },
  ],
}

const chartData = useChartData(lineChartData)

const options: ChartOptions<'line'> = {
  scales: {
    x: {
      display: false,
      grid: {
        display: false, // Disable X-axis grid lines ("net")
      },
    },
    y: {
      display: false,
      grid: {
        display: false, // Disable Y-axis grid lines ("net")
      },
      ticks: {
        display: false, // Hide Y-axis values
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
}
</script>
