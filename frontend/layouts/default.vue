<template>

    <game-layout>
        <nuxt/>
    </game-layout>

</template>

<script>

    import {mapGetters} from 'vuex';
    import GameLayout from "../components/GameLayout";

    export default {
        name: 'default',
        components: {GameLayout},
        computed: {
            user() {
                return this.$store.state.auth.user;
            },
            loggedIn() {
                return this.$auth.loggedIn;
            },
            ...mapGetters({
                currentCredit: 'user/currentCredit',
                businesses: 'user/businesses',
            })
        },
        methods: {},
        mounted() {
            if (this.loggedIn) {

                this.$store.commit('user/setCredits', this.user.credits);

                this.$socket.client.open();
                this.synchronizeDataInterval = setInterval(() => {

                    this.$socket.client.emit('synchronize', {
                        accessToken: this.$auth.getToken('local').replace("Bearer ", ""),
                        currentCredit: this.currentCredit,
                        businesses: this.businesses,
                    });

                }, 5000);
            }

            window.onbeforeunload = (event) => {
                this.$socket.client.emit('synchronize', {
                    accessToken: this.$auth.getToken('local').replace("Bearer ", ""),
                    currentCredit: this.currentCredit,
                    businesses: this.businesses,
                });
                return "Storing values before leaving...";
            };

        },
        beforeDestroy() {
            clearInterval(this.synchronizeDataInterval);
            this.$socket.client.close();
        }
    }
</script>

<style lang="scss">

    @import "../assets/scss/style";

</style>
