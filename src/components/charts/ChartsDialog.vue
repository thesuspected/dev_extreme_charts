<template>
    <v-dialog v-model="propModel" max-width="300px">
        <v-card>
            <v-card-title>Добавить график</v-card-title>

            <v-divider />

            <v-card-text>
                <v-select
                    v-model="form.chartType"
                    :items="chartTypesList"
                    filled
                    clearable
                    hide-details
                    class="mt-4"
                    label="Тип графика"
                    @change="form.dataSource = null"
                />
                <v-select
                    v-model="form.dataSource"
                    :items="dataSourceList"
                    :disabled="!form.chartType"
                    filled
                    clearable
                    hide-details
                    class="mt-4"
                    label="Источник данных"
                />
            </v-card-text>

            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn text @click="propModel = false"> Закрыть </v-btn>
                <v-btn
                    color="primary"
                    text
                    :disabled="!form.chartType || !form.dataSource"
                    @click="$emit('handle-add-chart', form)"
                >
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ChartsDialog',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:value', 'handle-add-chart'],
    data() {
        return {
            form: {
                chartType: null,
                dataSource: null,
            },
            chartTypesList: [
                {
                    text: 'Пирог (Pie)',
                    value: 'pie',
                },
                {
                    text: 'Линейный (Line)',
                    value: 'line',
                },
            ],
            pieChartDataSourceUrl: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047',
            lineChartDataSourceUrl: 'https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2',
        }
    },
    computed: {
        propModel: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            },
        },
        dataSourceList() {
            const dataSourceUrl =
                this.form.chartType === 'pie' ? this.pieChartDataSourceUrl : this.lineChartDataSourceUrl
            return [
                {
                    text: dataSourceUrl,
                    value: dataSourceUrl,
                },
            ]
        },
    },
    watch: {
        propModel(newVal) {
            if (!newVal) {
                this.form = {
                    chartType: null,
                    dataSource: null,
                }
            }
        },
    },
}
</script>
