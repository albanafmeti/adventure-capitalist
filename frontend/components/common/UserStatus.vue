<template>
    <div class="user-status pb-2">

        <div class="user-avatar">
            <vs-avatar size="40" primary>
                <template #text>
                    {{ user.username }}
                </template>
            </vs-avatar>

            <label class="ml-3">{{ user.username }}</label>
        </div>

        <div class="user-credits">
            $ {{ currentCredit.toFixed(2) }}
        </div>

    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        name: "UserStatus",
        computed: {
            ...mapGetters({
                currentCredit: 'user/currentCredit',
            }),
            user() {
                return this.$store.state.auth.user;
            }
        }
    }
</script>
