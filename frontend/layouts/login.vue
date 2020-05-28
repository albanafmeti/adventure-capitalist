<template>

    <game-layout>
        <nuxt/>
    </game-layout>

</template>

<script>

    import GameLayout from "../components/GameLayout";

    export default {
        name: 'default',
        components: {GameLayout},
    }
</script>

<style lang="scss">

    @import "../assets/scss/style";

</style>
