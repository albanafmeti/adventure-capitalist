<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <nuxt-link class="navbar-brand" to="/">
            <img src="~/assets/images/logo.png">&nbsp;AdVenture Capitalist
        </nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <vs-tooltip>
                        <a class="nav-link" href="#" @click.prevent="$emit('managers')">Managers</a>

                        <template #tooltip>
                            Hire a manager to speed up your business.
                        </template>
                    </vs-tooltip>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">Log out</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "NavBar",
        computed: {
            ...mapGetters({
                businesses: 'user/businesses',
                currentCredit: 'user/currentCredit',
            })
        },
        methods: {
            logout() {
                const token = this.$auth.getToken('local').replace("Bearer ", "");
                this.$auth.logout();
                this.$socket.client.emit('synchronize', {
                    accessToken: token,
                    currentCredit: this.currentCredit,
                    businesses: this.businesses,
                });
                this.$store.commit("user/clearState");
            }
        }
    }
</script>
