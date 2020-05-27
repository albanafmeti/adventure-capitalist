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

                    <div class="d-flex">

                        <vs-button
                            v-if="currentCredit < business.initialCost"
                            disabled>
                            $ {{ business.initialCost }} - Purchase
                        </vs-button>

                        <vs-tooltip
                            v-else>
                            <vs-button>
                                $ {{ business.initialCost }} - Purchase
                            </vs-button>

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

    export default {
        name: "SingleBusiness",
        components: {TimeCounter, UpgradeProgressBar, ProgressBar},
        props: {
            business: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapGetters({
                currentCredit: 'user/currentCredit'
            })
        }
    }
</script>

