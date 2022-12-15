<template>
    <DxChart id="chart" :data-source="data" palette="Violet">
        <DxCommonSeriesSettings type="line" argument-field="Дата" />
        <DxSeries v-for="source in sources" :key="source.value" :value-field="source.value" :name="source.name" />
        <DxMargin :bottom="10" />
        <DxArgumentAxis :value-margins-enabled="false" discrete-axis-division-mode="crossLabels">
            <DxGrid :visible="true" />
        </DxArgumentAxis>
        <DxTooltip :enabled="true" />
    </DxChart>
</template>
<script>
import {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxGrid,
    DxMargin,
    DxTooltip,
} from 'devextreme-vue/chart'

export default {
    components: {
        DxChart,
        DxSeries,
        DxArgumentAxis,
        DxCommonSeriesSettings,
        DxGrid,
        DxMargin,
        DxTooltip,
    },
    data() {
        return {
            sources: [{ name: 'Процент', value: 'Процент' }],
        }
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
