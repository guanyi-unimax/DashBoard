<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1">
    <DataSectionItem
      v-for="metric in dashboardMetrics"
      :key="metric.id"
      :title="metric.title"
      :value="metric.value"
      :change-text="metric.changeText"
      :up="metric.changeDirection === 'up'"
      :icon-background="metric.iconBackground"
      :icon-color="metric.iconColor"
    >
    </DataSectionItem>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useColors } from 'vuestic-ui'
import DataSectionItem from './DataSectionItem.vue'

interface DashboardMetric {
  id: string
  title: string
  value: string
  icon: string
  changeText: string
  changeDirection: 'up' | 'down'
  iconBackground: string
  iconColor: string
}

const { getColor } = useColors()

const dashboardMetrics = computed<DashboardMetric[]>(() => [
  {
    id: 'openInvoices',
    title: '門診藥費點數佔總醫療費用點數之比率',
    value: '35.48%',
    icon: 'mso-attach_money',
    changeText: '3.00%',
    changeDirection: 'down',
    iconBackground: getColor('info'),
    iconColor: getColor('on-success'),
  },
  {
    id: 'ongoingProjects',
    title: '門診健保申報平均每件診療點數',
    value: '15',
    icon: 'mso-folder_open',
    changeText: '25.36%',
    changeDirection: 'up',
    iconBackground: getColor('danger'),
    iconColor: getColor('on-info'),
  },
  {
    id: 'employees',
    title: '門診健保申報醫療費用點數成長率',
    value: '25%',
    icon: 'mso-account_circle',
    changeText: '2.5%',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-danger'),
  },
  {
    id: 'newProfit',
    title: '住院健保申報醫療費用點數成長率',
    value: '27%',
    icon: 'mso-grade',
    changeText: '4%',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'FirstOpd',
    title: '初診率',
    value: '10%',
    icon: 'mso-account_circle',
    changeText: '4%',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'IpdOnBed',
    title: '今日就診人數',
    value: '432人',
    icon: 'mso-account_circle',
    changeText: '30人',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'IpdOnBed',
    title: '初診人數',
    value: '432人',
    icon: 'mso-account_circle',
    changeText: '30人',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'EmgIpdDays',
    title: '急性病房平均住院天數',
    value: '10天',
    icon: 'mso-account_circle',
    changeText: '3天',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'IpdOnBed',
    title: '住院佔床率',
    value: '40%',
    icon: 'mso-account_circle',
    changeText: '22%',
    changeDirection: 'up',
    iconBackground: getColor('success'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'IpdOnBed',
    title: '平均住院日',
    value: '30天',
    icon: 'mso-account_circle',
    changeText: '5天',
    changeDirection: 'down',
    iconBackground: getColor('success'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'IpdOnBed',
    title: '門診病人住院率',
    value: '50%',
    icon: 'mso-account_circle',
    changeText: '10%',
    changeDirection: 'up',
    iconBackground: getColor('danger'),
    iconColor: getColor('on-warning'),
  },
  {
    id: 'IpdOnBed',
    title: '14日非計畫再次住院人次',
    value: '10人',
    icon: 'mso-account_circle',
    changeText: '1人',
    changeDirection: 'up',
    iconBackground: getColor('info'),
    iconColor: getColor('on-warning'),
  },
])
</script>
