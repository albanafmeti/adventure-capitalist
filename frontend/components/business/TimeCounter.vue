<template>
    <span>{{ toHHMMSS(seconds) }}</span>
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
            },
            toHHMMSS(secs) {
                var sec_num = parseInt(secs, 10);
                var hours = Math.floor(sec_num / 3600);
                var minutes = Math.floor(sec_num / 60) % 60;
                var seconds = sec_num % 60;

                return [hours, minutes, seconds]
                    .map(v => v < 10 ? "0" + v : v)
                    .filter((v, i) => v !== "00" || i > 0)
                    .join(":")
            }
        },
        mounted() {
            console.log('time', this.time);
        },
        beforeDestroy() {
            this.timeIntervals.forEach(interval => {
                clearInterval(interval)
            });
        }
    }
</script>
