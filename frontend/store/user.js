const initialState = {

    credits: 0,
    revenues: 0, /* - During current session - */
    expenses: 0, /* - During current session - */

    businessesLoaded: false,
    businesses: [],
};

export const state = () => ({
    ...initialState
});

const types = {
    SET_CREDITS: 'setCredits',
    ADD_CREDIT: 'addCredit',
    SUBTRACT_CREDIT: 'subtractCredit',

    ADD_REVENUE: 'addRevenue',
    ADD_EXPENSE: 'addExpense',

    SET_BUSINESSES_LOADED: 'setBusinessesLoaded',
    SET_BUSINESSES: 'setBusinesses',

    CLEAR_STATE: 'clearState',
};

export const mutations = {

    [types.SET_CREDITS](state, credits) {
        state.credits = credits;
    },

    [types.ADD_CREDIT](state, credit) {
        state.credits = state.credits + credit;
    },

    [types.SUBTRACT_CREDIT](state, credit) {
        state.credits = state.credits - credit;
    },

    [types.SET_BUSINESSES_LOADED](state, loaded) {
        state.businessesLoaded = loaded;
    },

    [types.SET_BUSINESSES](state, businesses) {
        state.businesses = businesses;
    },

    [types.CLEAR_STATE](state) {
        Object.keys(state).forEach(key => {
            state[key] = initialState[key];
        });
    },
};

export const actions = {

    getBusinesses({commit}) {

        commit(types.SET_BUSINESSES_LOADED, false);

        return this.$repos.businessRepo.getBusinesses({mine: true}).then(response => {

            if (response.success) {
                commit(types.SET_BUSINESSES, response.data.businesses);
                commit(types.SET_BUSINESSES_LOADED, true);
            }

            return response;
        });
    },

};

export const getters = {
    businessesLoaded: state => state.businessesLoaded,
    businesses: state => state.businesses,
    business: (state) => (id) => {
        return state.businesses.find(business => business.id === id)
    },
};
