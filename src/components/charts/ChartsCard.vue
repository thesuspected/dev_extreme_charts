<template>
    <v-card>
        <v-card-title>
            <span v-text="cardTitle" />

            <v-spacer />

            <v-btn icon @click="$emit('handle-remove-chart')">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text>
            <pie-chart v-if="chart.type === 'pie'" :data="chart.data" />
            <line-chart v-else :data="chart.data" />
        </v-card-text>
    </v-card>
</template>

<script>
import PieChart from '@/components/charts/chart-types/PieChart'
import LineChart from '@/components/charts/chart-types/LineChart'

export default {
    name: 'ChartsCard',
    components: {
        PieChart,
        LineChart,
    },
    props: {
        chart: Object,
        index: Number,
    },
    emits: ['handle-remove-chart'],
    computed: {
        cardTitle() {
            return `${this.chart.type} chart`
        },
    },
}
</script>
