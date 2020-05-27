<template>
    <div>
        <hr/>
        <div class="single-manager">
            <div class="d-flex align-items-center">
                <div class="mr-3">
                    <i class="fa fa-2x fa-user-circle-o"></i>
                </div>
                <div>
                    <div class="manager-name">Jim Thorton</div>
                    <div class="manager-desc">Runs Lemonade Shops</div>
                </div>
            </div>
            <div>
                <vs-tooltip>
                    <vs-button>
                        Hire
                    </vs-button>

                    <template #tooltip>
                        If you hire a manager your business will operate faster and without your need to be present.
                    </template>
                </vs-tooltip>
            </div>
            <!--<div>
                <i class="fa fa-check"></i>&nbsp;&nbsp;Hired
            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleManager"
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

    }
</style>
