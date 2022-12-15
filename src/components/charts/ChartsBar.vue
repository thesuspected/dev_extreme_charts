<template>
    <div class="d-flex full-width justify-space-between">
        <h2 class="font-weight-medium mb-3">Список диаграмм</h2>
        <v-btn depressed color="primary" @click="$emit('handle-open-dialog')">
            <v-icon>mdi-plus</v-icon> Добавить график
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'ChartsBarPlug',
    emits: ['handle-open-dialog'],
}
</script>
