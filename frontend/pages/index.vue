<template>
    <div class="h-100 d-flex flex-column position-relative">

        <BusyLoading v-if="!businessesLoaded || !myBusinessesLoaded" loading-text="Loading Businesses..."/>
        <BusyLoading v-else-if="!managersLoaded" loading-text="Loading Managers..."/>

        <NavBar @managers="$refs.managersDialog.show()"/>

        <div class="p-3 flex-fill d-flex flex-column">

            <UserStatus/>

            <div class="business-list flex-fill">

                <p class="text-muted text-center status-info">
                    You own {{ $pluralize('business', myBusinesses.length, true)}}.
                    <span
                        v-if="managedCount > 1">{{ managedCount }} of them are being managed from managers.</span>
                    <span v-else-if="managedCount === 1">1 is being managed by its manager.</span>
                </p>

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
                businessesLoaded: 'business/businessesLoaded',
                myBusinesses: 'user/businesses',
                myBusinessesLoaded: 'user/businessesLoaded',
                managersLoaded: 'business/managersLoaded',
            }),

            filteredBusinesses() {
                const ids = this.myBusinesses.map(b => b.id);
                return this.businesses.filter(b => !ids.includes(b.id))
            },

            managedCount() {
                return this.myBusinesses.filter(b => b.hasManager).length;
            }
        },
        mixins: [NotificationMixin, CommonMiddleware, InitialLoadMixin],
        created() {
            this.initialLoad();
        }
    }
</script>
