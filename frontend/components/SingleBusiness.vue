<template>
    <div>
        <hr/>
        <div class="single-business mb-3">
            <div class="business-img rounded-circle">

                <vs-tooltip v-if="purchased">
                    <img
                        class="img-thumbnail rounded-circle activated"
                        src="https://images.vexels.com/media/users/3/141683/isolated/preview/7562c83a3feb6672e5ac55b1608ea003-lemon-yellow-leaves-by-vexels.png">

                    <template #tooltip>
                        Click to operate with your business and to make money.
                    </template>
                </vs-tooltip>

                <img
                    v-else
                    class="img-thumbnail rounded-circle inactive"
                    src="https://images.vexels.com/media/users/3/141683/isolated/preview/7562c83a3feb6672e5ac55b1608ea003-lemon-yellow-leaves-by-vexels.png">

            </div>

            <div class="business-details d-flex flex-column" v-if="purchased">
                <div class="detail-top">
                    <div class="business-name mb-2">
                        <span>Lemonade Shop</span>
                        <span>+ $ 412</span>
                    </div>
                    <div>
                        <div class="progress" style="height: 20px;">
                            <div class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                 role="progressbar" style="width: 25%;" aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress mt-1 border-rounded" style="height: 3px;">
                            <div class="progress-bar" role="progressbar" style="width: 40%;" aria-valuenow="40"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="detail-bottom b-actions">
                    <div>
                        <span>00:05</span>
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

            <div class="business-details d-flex flex-column" v-else>
                <div class="detail-top">
                    <div class="business-name mb-2">
                        <span>Lemonade Shop</span>
                        <span>+ $ 412</span>
                    </div>
                    <div class="progress">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                            role="progressbar" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 0%"></div>
                    </div>
                </div>
                <div class="detail-bottom b-actions">
                    <div>
                        <span>00:12</span>
                    </div>
                    <div class="d-flex">
                        <vs-tooltip>
                            <vs-button>
                                $ 20.000 - Purchase
                            </vs-button>

                            <template #tooltip>
                                Purchase this business and start making money.
                            </template>
                        </vs-tooltip>
                    </div>
                </div>
            </div>

            <div class="business-details d-flex flex-column flex-center justify-content-center" v-else>
                <div class="detail-top">
                    <div class="business-name bigger">Oil Company</div>
                    <div class="d-flex">
                        <vs-tooltip>
                            <vs-button>
                                $ 200000 - Purchase
                            </vs-button>

                            <template #tooltip>
                                Purchase the business
                            </template>
                        </vs-tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleBusiness",
        props: {
            purchased: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                progressValue: 0,
                isProgressing: false,
            }
        },
        methods: {
            operate() {

            }
        }
    }
</script>

<style scoped>

</style>
