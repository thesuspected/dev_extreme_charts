<template>
    <v-container>
        <charts-bar @handle-open-dialog="chartsDialogVisible = true" />
        <div class="charts-list">
            <v-scale-transition mode="out-in">
                <charts-empty-plug v-if="!chartsList.length" />
                <div v-else>
                    <v-slide-y-transition group>
                        <charts-card
                            v-for="(chart, i) in chartsList"
                            :key="i"
                            :chart="chart"
                            class="mb-4"
                            @handle-remove-chart="handleRemoveChart(i)"
                        />
                    </v-slide-y-transition>
                </div>
            </v-scale-transition>
        </div>
        <charts-dialog v-model="chartsDialogVisible" @handle-add-chart="handleAddChart" />
    </v-container>
</template>

<script>
import ChartsBar from '@/components/charts/ChartsBar.vue'
import ChartsEmptyPlug from '@/components/charts/ChartsEmptyPlug.vue'
import ChartsCard from '@/components/charts/ChartsCard.vue'
import ChartsDialog from '@/components/charts/ChartsDialog.vue'

export default {
    name: 'ChartsPage',
    components: {
        ChartsBar,
        ChartsEmptyPlug,
        ChartsCard,
        ChartsDialog,
    },
    data() {
        return {
            chartsDialogVisible: false,
        }
    },
    methods: {
        handleAddChart(form) {
            this.chartsDialogVisible = false
            this.$store.dispatch('GET_PIE_CHART_DATA', form)
        },
        handleRemoveChart(index) {
            this.$store.commit('DELETE_CHART_BY_INDEX', index)
        },
    },
    computed: {
        chartsList() {
            return this.$store.state.chartsList
        },
    },
}
</script>

<style>
.charts-list {
    display: flex;
    flex-direction: column;
}
</style>
