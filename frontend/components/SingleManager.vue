<template>
    <div v-if="!isHired">
        <hr/>
        <div class="single-manager">
            <div class="d-flex align-items-center">
                <div class="mr-3 manager-image">
                    <!--                    <i class="fa fa-2x fa-user-circle-o"></i>-->
                    <img class="img-thumbnail" :src="manager.image"/>
                </div>
                <div>
                    <div class="manager-name">{{ manager.name }}</div>
                    <div class="manager-desc">{{ manager.description }}</div>
                </div>
            </div>
            <div class="d-flex flex-column align-items-end" @mouseenter="activeTooltip = true"
                 @mouseleave="activeTooltip = false">
                <span class="manager-cost">$ {{ manager.cost }}</span>

                <vs-tooltip not-hover v-model="activeTooltip">
                    <vs-button
                        disabled
                        v-if="currentCredit < manager.cost || !hasActiveBusiness">
                        Hire
                    </vs-button>

                    <vs-button v-else @click.prevent="hireManager">
                        Hire
                    </vs-button>

                    <template #tooltip>
                        If you hire a manager your business will operate faster and without your need to be present.
                    </template>
                </vs-tooltip>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import NotificationMixin from "../mixins/NotificationMixin";

    export default {
        name: "SingleManager",
        mixins: [NotificationMixin],
        props: {
            manager: {
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
                currentCredit: 'user/currentCredit',
                myBusinesses: 'user/businesses',
                businesses: 'business/businesses',
            }),
            isHired() {
                return this.myBusinesses.find(b => b.managerId === this.manager.id);
            },
            business() {
                return this.businesses.find(b => b.type === this.manager.businessType);
            },
            hasActiveBusiness() {
                return this.myBusinesses.find(b => b.type === this.manager.businessType);
            }
        },
        methods: {
            hireManager() {
                this.activeTooltip = false;
                this.$nextTick(() => {
                    this.$store.commit('user/addExpense', this.manager.cost);
                    this.$store.commit('user/assignManager', {
                        manager: this.manager,
                        notifySuccess: this.success
                    });
                });
            }
        }
    }
</script>

<style lang="scss">
    .single-manager {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .manager-name {
            font-weight: bold;
        }

        .manager-image {
            img {
                border-radius: 50%;
                height: 55px;
                padding: 1px;
            }
        }

        .manager-cost {
            padding: 0 6px;
        }
    }
</style>
