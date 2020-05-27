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
            $ 1.200.323
        </div>

    </div>
</template>

<script>
    export default {
        name: "UserStatus",
        computed: {
            user() {
                return this.$store.state.auth.user;
            }
        }
    }
</script>
