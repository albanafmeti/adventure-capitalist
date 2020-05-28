<template>
    <div>
        <hr/>
        <div class="single-business mb-3">
            <div class="business-img rounded-circle">

                <img class="img-thumbnail rounded-circle inactive"
                     :src="business.image">

            </div>

            <div class="business-details d-flex flex-column">
                <div class="detail-top">
                    <div class="business-name mb-2">
                        <span>{{ business.name }}</span>
                        <span>+ $ {{ business.initialRevenue }}</span>
                    </div>
                    <div>

                        <ProgressBar :progress="0"/>
                        <UpgradeProgressBar :progress="0"/>

                    </div>
                </div>
                <div class="detail-bottom b-actions">
                    <div>
                        <TimeCounter ref="counter" :time="business.initialTime"/>
                    </div>

                    <div class="d-flex" @mouseenter="activeTooltip = true" @mouseleave="activeTooltip = false">

                        <vs-tooltip not-hover v-model="activeTooltip">

                            <div>
                                <vs-button
                                    v-if="currentCredit < business.initialCost"
                                    disabled>
                                    $ {{ business.initialCost }} - Purchase
                                </vs-button>

                                <vs-button
                                    v-else
                                    @click.prevent="purchaseBusiness">
                                    $ {{ business.initialCost }} - Purchase
                                </vs-button>
                            </div>

                            <template #tooltip>
                                Purchase this business and start making money.
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
    import UpgradeProgressBar from "./business/UpgradeProgressBar";
    import TimeCounter from "./business/TimeCounter";

    import {mapGetters} from 'vuex';
    import NotificationMixin from "../mixins/NotificationMixin";

    export default {
        name: "SingleBusiness",
        components: {TimeCounter, UpgradeProgressBar, ProgressBar},
        mixins: [NotificationMixin],
        props: {
            business: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                activeTooltip: false
            }
        },
        computed: {
            ...mapGetters({
                currentCredit: 'user/currentCredit'
            })
        },
        methods: {
            purchaseBusiness() {
                this.activeTooltip = false;
                this.$nextTick(() => {
                    this.$store.commit('user/addExpense', this.business.initialCost);
                    this.$store.commit('user/purchaseBusiness', {
                        business: this.business,
                        notifySuccess: this.success
                    });
                })
            }
        }
    }
</script>

