<template>
  <VaCard>
    <VaCardTitle>
      <h1 class="card-title text-tag text-secondary font-bold uppercase">一般急性病房平均住院天數</h1>
    </VaCardTitle>
    <VaCardContent>
      <section>
        <div class="text-xl font-bold mb-2">14天</div>
        <p class="text-xs text-danger">
          <VaIcon name="arrow_upward" />
          3天
          <span class="text-secondary"> 相較前月</span>
        </p>
      </section>
      <div class="w-full flex items-center">
        <VaChart :data="chartData" class="h-24" type="line" :options="options" />
      </div>
    </VaCardContent>
  </VaCard>
</template>

<script setup lang="ts">
import { VaCard } from 'vuestic-ui'
import VaChart from '../../../../components/va-charts/VaChart.vue'
import { useChartData } from '../../../../data/charts/composables/useChartData'
import { lineChartData } from '../../../../data/charts/lineChartData'
import { ChartOptions } from 'chart.js'

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
