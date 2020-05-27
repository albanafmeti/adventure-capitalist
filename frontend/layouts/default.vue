<template>

    <div class="container-fluid">
        <div class="row">

            <div class="col-2 p-0 left-side">
                <div class="smaller-part"></div>
                <div class="bigger-part"></div>
            </div>

            <div class="col-8 p-0 middle-side">
                <div class="top-part"></div>

                <div class="game-container">
                    <nuxt/>
                </div>

                <div class="bottom-part"></div>
            </div>

            <div class="col-2 p-0 right-side">
                <div class="bigger-part"></div>
                <div class="smaller-part"></div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'default',
        computed: {
            user() {
                return this.$store.state.auth.user;
            },
        },
        mounted() {
            this.$store.commit('user/setCredits', this.user.credits);
        }
    }
</script>

<style lang="scss">

    @import "../assets/scss/style";

</style>
