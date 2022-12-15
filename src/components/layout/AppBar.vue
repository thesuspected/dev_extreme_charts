<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <v-icon large class="mr-2">mdi-chart-box</v-icon>
            <h2>DevExtreme charts</h2>
        </div>

        <v-spacer />

        <v-scroll-y-transition>
            <v-btn v-if="isListNotEmpty" text @click="clearChartList">
                <span class="mr-2">Очистить список</span>
                <v-icon>mdi-backspace-outline</v-icon>
            </v-btn>
        </v-scroll-y-transition>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppBar',
    methods: {
        clearChartList() {
            this.$store.commit('CLEAR_CHART_LIST')
        },
    },
    computed: {
        isListNotEmpty() {
            return this.$store.state.chartsList.length
        },
    },
}
</script>
