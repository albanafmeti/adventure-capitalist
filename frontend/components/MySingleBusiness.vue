<template>
    <div>
        <hr/>
        <div class="single-business mb-3">
            <div class="business-img rounded-circle">
                <vs-tooltip>
                    <img
                        @click.prevent="operate"
                        class="img-thumbnail rounded-circle activated"
                        src="https://images.vexels.com/media/users/3/141683/isolated/preview/7562c83a3feb6672e5ac55b1608ea003-lemon-yellow-leaves-by-vexels.png">

                    <template #tooltip>
                        Click to operate with your business and to make money.
                    </template>
                </vs-tooltip>
            </div>

            <div class="business-details d-flex flex-column">
                <div class="detail-top">
                    <div class="business-name mb-2">
                        <span>Lemonade Shop</span>
                        <span>+ $ 412</span>
                    </div>
                    <div>

                        <ProgressBar :progress="progress"/>

                        <div class="progress mt-1 border-rounded" style="height: 3px;">
                            <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="40"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="detail-bottom b-actions">
                    <div>
                        <TimeCounter ref="counter" :time="currentLevel.time"/>
                    </div>
                    <div>
                        <span class="text-muted business-manager">Managed by Jim Terry</span>
                    </div>
                    <div class="d-flex">
                        <vs-tooltip>
                            <vs-button>
                                $ 1200 - Upgrade
                            </vs-button>

                            <template #tooltip>
                                If you upgrade your business, you can make more money faster.
                            </template>
                        </vs-tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProgressBar from "./business/ProgressBar";
    import TimeCounter from "./business/TimeCounter";

    export default {
        name: "MySingleBusiness",
        components: {TimeCounter, ProgressBar},
        props: {
            business: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                progress: 0,
                isProgressing: false,
                hasManager: !this.business.managerId
            }
        },
        computed: {
            currentLevel() {
                return {
                    profit: 412,
                    time: 15000,
                    upgrade: 1200,
                    upgradeSteps: 5,
                    upgradeStepIncrease: 0.2
                }
            }
        },
        methods: {
            operate() {

                let progress = 100 * 100 / this.currentLevel.time;

                let interval = setInterval(() => {

                    if (this.progress >= 100) {
                        clearInterval(interval);
                        this.progress = 0;

                        // TODO: Add some credit to profits.

                    } else {
                        this.progress += progress;
                    }

                }, 100);

                this.$refs.counter.start();
            }
        },
    }
</script>

<style scoped>

</style>
