<template>
  <VaCard class="flex flex-col">
    <VaCardTitle class="flex items-start justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">住院統計資訊</h1>
      <div class="flex gap-2">
        <VaSelect v-model="selectedMonth" preset="small" :options="monthsWithCurrentYear" class="w-24" />
        <VaButton class="h-2" size="small" preset="primary" @click="exportAsCSV">匯出</VaButton>
      </div>
    </VaCardTitle>
    <VaCardContent class="flex flex-col-reverse md:flex-row md:items-center justify-between gap-5 h-full">
      <section class="flex flex-col items-start w-full sm:w-1/3 md:w-2/5 lg:w-1/4 gap-2 md:gap-8 pl-4">
        <div>
          <p class="text-xl font-semibold">{{ totalIn }}</p>
          <p class="whitespace-nowrap mt-2">總出院人次</p>
        </div>
        <div class="flex flex-col sm:flex-col gap-2 md:gap-8 w-full">
          <div>
            <div class="flex items-center">
              <span class="inline-block w-2 h-2 mr-2 -ml-4" :style="{ backgroundColor: earningsColor }"></span>
              <span class="text-secondary">14日非計畫再次住院人次</span>
            </div>
            <div class="mt-2 text-xl font-semibold">10</div>
          </div>
          <div>
            <div class="flex items-center">
              <span class="inline-block w-2 h-2 mr-2 -ml-4" :style="{ backgroundColor: expensesColor }"></span>
              <span class="text-secondary">本月住院總人次</span>
            </div>
            <div class="mt-2 text-xl font-semibold">25</div>
          </div>
        </div>
      </section>
      <RevenueReportChart
        class="w-2/3 md:w-3/5 lg:w-3/4 h-full min-h-72 sm:min-h-32 pt-4"
        :revenues="revenues"
        :months="months"
      />
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VaCard } from 'vuestic-ui'
import RevenueReportChart from './RevenueReportChart.vue'
import { downloadAsCSV } from '../../../../services/toCSV'
import {
  earningsColor,
  expensesColor,
  months,
  generateRevenues,
  getRevenuePerMonth,
} from '../../../../data/charts/revenueChartData'

const revenues = generateRevenues(months)

const currentYear = new Date().getFullYear()
const monthsWithCurrentYear = months.map((month) => `${month} ${currentYear}`)

const selectedMonth = ref(monthsWithCurrentYear[0])

const earningsForSelectedMonth = computed(() => getRevenuePerMonth(selectedMonth.value.split(' ')[0], revenues))
const totalIn = computed(() => {
  return earningsForSelectedMonth.value.totalIn + earningsForSelectedMonth.value.notExpectIn
})

const exportAsCSV = () => {
  downloadAsCSV(revenues, 'revenue-report')
}
</script>
