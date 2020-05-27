import {mapActions} from 'vuex';
import HandleErrorMixin from "./HandleErrorMixin";

export default {
    mixins: [HandleErrorMixin],
    methods: {
        ...mapActions({
            getBusinesses: 'business/getBusinesses',
            getMyBusinesses: 'user/getBusinesses',
            getManagers: 'business/getManagers',
        }),
        async initialLoad() {
            try {
                await this.getMyBusinesses();
                await this.getBusinesses();
                await this.getManagers();
            } catch (error) {
                console.log(error);
                this.handleError(error);
            }
        }
    }
}
