<template>
    <div class="progress" style="height: 20px;">
        <div class="progress-bar bg-success progress-bar-striped progress-bar-animated"
             role="progressbar" ref="progress" :aria-valuenow="progress"
             aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: ["progress"],
        watch: {
            progress(value) {
                this.$refs.progress.style.width = value + "%";
                this.$forceUpdate();
            }
        },
        mounted() {
            this.$refs.progress.style.width = this.progress + "%";
            this.$forceUpdate();
        }
    }
</script>

<style scoped>
    .progress-bar {
        transition: width 0.01s linear !important;
    }
</style>
