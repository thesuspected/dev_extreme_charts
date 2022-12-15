<template>
    <v-app class="app-block">
        <app-bar />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import AppBar from './components/layout/AppBar'

export default {
    name: 'App',
    components: {
        AppBar,
    },
}
</script>

<style>
.app-block {
    background: #fafafa !important;
}
</style>
