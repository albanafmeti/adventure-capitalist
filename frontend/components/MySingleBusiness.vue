<template>
    <div>
        <hr/>
        <div class="single-business my-business mb-3">
            <div class="business-img rounded-circle position-relative">

                <div class="badge badge-primary rounded-circle">
                    {{ business.upgradeCount }}
                </div>

                <vs-tooltip>
                    <img
                        @click.prevent="operate(false)"
                        class="img-thumbnail rounded-circle activated"
                        :class="{'not-clickable': isOperating }"
                        :src="business.image">

                    <template #tooltip>
                        Click to operate with your business and to make money.
                    </template>
                </vs-tooltip>
            </div>

            <div class="business-details d-flex flex-column">
                <div class="detail-top">
                    <div class="business-name mb-2">
                        <span>{{ business.name }}</span>
                        <span>+ $ {{ business.currentRevenue }}</span>
                    </div>
                    <div>

                        <ProgressBar :progress="progress"/>
                        <UpgradeProgressBar :progress="upgradeProgress * 100"/>

                    </div>
                </div>
                <div class="detail-bottom b-actions">
                    <div>
                        <TimeCounter ref="counter" :time="timeValue"/>
                    </div>

                    <div v-if="business.hasManager" class="d-none d-md-block d-lg-block">
                        <span class="text-muted business-manager">Managed by {{ business.manager.name }}</span>
                    </div>

                    <div class="d-flex">

                        <vs-tooltip>

                            <vs-button disabled
                                       v-if="currentCredit < business.upgradeCost">
                                $ {{ business.upgradeCost.toFixed(2) }} - Upgrade
                            </vs-button>

                            <vs-button v-else @click.prevent="upgradeBusiness">
                                $ {{ business.upgradeCost.toFixed(2) }} - Upgrade
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
    import UpgradeProgressBar from "./business/UpgradeProgressBar";
    import {mapGetters} from 'vuex';
    import NotificationMixin from "../mixins/NotificationMixin";

    export default {
        name: "MySingleBusiness",
        components: {UpgradeProgressBar, TimeCounter, ProgressBar},
        mixins: [NotificationMixin],
        props: {
            business: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                progress: 0,
                isOperating: false,
                timeValue: this.business.currentTime,

                operationIntervals: []
            }
        },
        computed: {
            ...mapGetters({
                currentCredit: 'user/currentCredit'
            }),
            upgradeProgress() {
                return (this.business.upgradeCount - this.business.upgradePreviousGoal) / (this.business.upgradeCountGoal - this.business.upgradePreviousGoal)
            }
        },
        watch: {
            business(newValue, oldValue) {
                if (!oldValue.hasManager && newValue.hasManager) {
                    this.operate(true);
                }
            }
        },
        methods: {
            operate(automate = false) {

                if (this.isOperating) {
                    return;
                }

                this.isOperating = true;
                let progress = 100 * 100 / this.business.currentTime;

                let interval = setInterval(() => {

                    if (this.progress >= 100) {
                        clearInterval(interval);
                        this.progress = 0;
                        this.timeValue = this.business.currentTime;
                        this.isOperating = false;
                        this.$store.commit('user/addRevenue', this.business.currentRevenue);

                        if (automate) {
                            this.operate(automate);
                        }

                    } else {
                        this.progress += progress;
                    }

                }, 100);

                this.operationIntervals.push(interval);
                this.$refs.counter.start();
            },

            upgradeBusiness() {
                this.$store.commit('user/addExpense', this.business.upgradeCost);
                this.$store.commit('user/upgradeBusiness', {
                    business: this.business,
                    notifySuccess: this.success
                });
            },
        },
        mounted() {
            if (this.business.hasManager) {
                this.operate(true);
            }
        },
        beforeDestroy() {
            this.operationIntervals.forEach(interval => {
                clearInterval(interval)
            });
        }
    }
</script>

<style scoped>
    .not-clickable {
        cursor: default !important;
    }
</style>
