<template>
    <div class="h-100 d-flex flex-column position-relative">

        <BusyLoading v-if="false" loading-text="Loading Game..."/>

        <NavBar @managers="$refs.managersDialog.show()"/>

        <div class="p-3 flex-fill d-flex flex-column">

            <UserStatus/>

            <div class="business-list flex-fill">

                <p class="text-muted text-center status-info">
                    You own {{ $pluralize('business', myBusinesses.length, true)}}. 2 of them are operating by
                    managers.</p>

                <div class="row">

                    <div class="col-md-12">
                        <MySingleBusiness v-for="business in myBusinesses" :key="business.id" :business="business"/>
                    </div>

                    <div class="col-12">

                        <SingleBusiness v-for="business in filteredBusinesses" :key="business.id" :business="business"/>

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

    import {mapActions, mapGetters} from 'vuex';

    export default {
        components: {MySingleBusiness, ManagersDialog, SingleBusiness, UserStatus, BusyLoading, NavBar},
        data() {
            return {
                isManagersDialogOpen: false,
            }
        },
        computed: {
            ...mapGetters({
                businesses: 'business/businesses',
                myBusinesses: 'user/businesses',
            }),

            filteredBusinesses() {
                const ids = this.myBusinesses.map(b => b.id);
                return this.businesses.filter(b => !ids.includes(b.id))
            }
        },
        mixins: [NotificationMixin, CommonMiddleware, InitialLoadMixin],
        created() {
            this.initialLoad();
        }
    }
</script>
