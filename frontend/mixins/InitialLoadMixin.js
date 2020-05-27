import {mapActions} from 'vuex';
import HandleErrorMixin from "./HandleErrorMixin";

export default {
    mixins: [HandleErrorMixin],
    methods: {
        ...mapActions({
            getBusinesses: 'business/getBusinesses',
            getManagers: 'business/getManagers',
        }),
        async initialLoad() {
            try {
                await this.getBusinesses();
                await this.getManagers();
            } catch (error) {
                this.handleError(error);
            }
        }
    }
}
