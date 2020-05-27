<template>
    <div class="h-100 d-flex flex-column position-relative">

        <BusyLoading v-if="false" loading-text="Loading Game..."/>

        <NavBar @managers="$refs.managersDialog.show()"/>

        <div class="p-3 flex-fill d-flex flex-column">

            <UserStatus/>

            <div class="business-list flex-fill">

                <p class="text-muted text-center status-info">You own 3 businesses. 2 of them are operating by
                    managers.</p>

                <div class="row">

                    <div class="col-12">

                        <MySingleBusiness :business="business"/>
                        <SingleBusiness/>
                        <SingleBusiness/>
                        <SingleBusiness/>
                        <SingleBusiness/>
                        <SingleBusiness/>
                        <SingleBusiness/>

                    </div>

                </div>

            </div>

        </div>

        <ManagersDialog ref="managersDialog"/>

    </div>
</template>

<script>
    import NavBar from "../components/common/NavBar";
    import BusyLoading from "../components/common/BusyLoading";
    import UserStatus from "../components/common/UserStatus";
    import SingleBusiness from "../components/SingleBusiness";
    import ManagersDialog from "../components/ManagersDialog";
    import MySingleBusiness from "../components/MySingleBusiness";
    import NotificationMixin from "../mixins/NotificationMixin";
    import CommonMiddleware from "../mixins/CommonMiddleware";
    import InitialLoadMixin from "../mixins/InitialLoadMixin";

    export default {
        components: {MySingleBusiness, ManagersDialog, SingleBusiness, UserStatus, BusyLoading, NavBar},
        data() {
            return {
                isManagersDialogOpen: false,
                business: {
                    id: 10,
                    name: "Lemonade",
                    managerId: null
                }
            }
        },
        mixins: [NotificationMixin, CommonMiddleware, InitialLoadMixin],
        mounted() {
            this.initialLoad();
        }
    }
</script>

<style>
</style>
