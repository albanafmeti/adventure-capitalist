<template>
    <div class="loading-circle">
        <div ref="loader"></div>
    </div>
</template>

<script>
    export default {
        name: "BusyLoading",
        props: {
            loadingText: {
                type: String,
                default: null
            }
        },
        mounted() {
            this.$vs.loading({type: 'corners', target: this.$refs.loader, text: this.loadingText});
        }
    }
</script>
