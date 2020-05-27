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
                        @click.prevent="operate"
                        class="img-thumbnail rounded-circle activated"
                        :src="business.image">

                    <template #tooltip>
                        Click to operate with your business and to make money.
                    </template>
                </vs-tooltip>
            </div>

            <div class="business-details d-flex flex-column">
                <div class="detail-top">
                    <div class="business-name mb-2">
                        <span>{{ business.name }} ( {{ business.upgradeCount }} )</span>
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

                    <div v-if="business.hasManager">
                        <span class="text-muted business-manager">Managed by Jim Terry</span>
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
                timeValue: this.business.currentTime
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
        methods: {
            operate() {

                let progress = 100 * 100 / this.business.currentTime;

                let interval = setInterval(() => {

                    if (this.progress >= 100) {
                        clearInterval(interval);
                        this.progress = 0;
                        this.timeValue = this.business.currentTime;

                        this.$store.commit('user/addRevenue', this.business.currentRevenue);

                    } else {
                        this.progress += progress;
                    }

                }, 100);

                this.$refs.counter.start();
            },
            upgradeBusiness() {
                this.$store.commit('user/addExpense', this.business.upgradeCost);
                this.$store.commit('user/upgradeBusiness', {
                    business: this.business,
                    notifySuccess: this.success
                });
            }
        },
    }
</script>

<style scoped>

</style>
