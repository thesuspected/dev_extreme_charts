<template>
    <DxPieChart id="pie" :data-source="data" palette="Bright">
        <DxSeries argument-field="Группа" value-field="Доля">
            <DxLabel :visible="true">
                <DxConnector :visible="true" :width="1" />
            </DxLabel>
        </DxSeries>
    </DxPieChart>
</template>

<script>
import DxPieChart, { DxSeries, DxLabel, DxConnector } from 'devextreme-vue/pie-chart'

export default {
    components: {
        DxPieChart,
        DxSeries,
        DxLabel,
        DxConnector,
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style>
#pie * {
    margin: 0 auto;
}
</style>
