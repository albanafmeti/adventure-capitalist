<template>
    <span>{{ minutes }}:{{ secs }}</span>
</template>

<script>
    export default {
        name: "TimeCounter",
        props: ["time"],
        data() {
            return {
                seconds: this.time / 1000
            }
        },
        computed: {
            minutes() {
                const n = Math.floor(this.seconds / 60);
                return ("0" + n).slice(-2);
            },
            secs() {
                const n = this.seconds - this.minutes * 60;
                return ("0" + n).slice(-2);
            },
        },
        methods: {
            start() {
                var interval = setInterval(() => {

                    if (this.seconds <= 0) {
                        clearInterval(interval);
                    } else {
                        this.seconds -= 1;
                    }

                }, 1000);
            }
        }
    }
</script>

<style scoped>

</style>
