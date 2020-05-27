<template>
    <div class="progress mt-1 border-rounded" style="height: 6px;">
        <div class="progress-bar" role="progressbar" ref="progress" :aria-valuenow="progress"
             aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</template>

<script>
    export default {
        name: "UpgradeProgressBar",
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
