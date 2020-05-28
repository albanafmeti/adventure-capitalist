<template>
    <span>{{ minutes }}:{{ secs }}</span>
</template>

<script>
    export default {
        name: "TimeCounter",
        props: ["time"],
        data() {
            return {
                seconds: this.time / 1000,
                timeIntervals: [],
            }
        },
        watch: {
            time(value) {
                this.seconds = value / 1000;
            }
        },
        computed: {
            minutes() {
                const n = Math.round(this.seconds / 60);
                return ("0" + n).slice(-2);
            },
            secs() {
                const n = Math.round(this.seconds) - this.minutes * 60;
                return ("0" + n).slice(-2);
            },
        },
        methods: {
            start() {
                let interval = setInterval(() => {

                    if (this.seconds <= 0) {
                        clearInterval(interval);
                        this.seconds = this.time / 1000;

                    } else if (this.seconds >= 1) {
                        this.seconds -= 1;
                    } else {
                        this.seconds = 0;
                    }

                }, 1000);

                this.timeIntervals.push(interval);
            }
        },
        beforeDestroy() {
            this.timeIntervals.forEach(interval => {
                clearInterval(interval)
            });
        }
    }
</script>
