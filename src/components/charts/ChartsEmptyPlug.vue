<template>
    <v-col cols="12" class="text-center">
        <v-img :src="require('@/assets/empty-box.png')" class="my-3" contain height="200" />
        <h3 class="mb-3">Список пуст</h3>
    </v-col>
</template>

<script>
export default {
    name: 'ChartsEmptyPlug',
}
</script>
