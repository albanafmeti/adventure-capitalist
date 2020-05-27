<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <nuxt-link class="navbar-brand" to="/">
            <img src="~/assets/images/logo.png">&nbsp;Adventure Capitalist
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
    export default {
        name: "NavBar",
        methods: {
            logout() {
                this.$auth.logout();
                this.$store.commit("user/clearState");
            }
        }
    }
</script>
