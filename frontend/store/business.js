const initialState = {
    businessesLoaded: false,
    businesses: [],

    managersLoaded: false,
    managers: [],
};

export const state = () => ({
    ...initialState
});

const types = {
    SET_BUSINESSES_LOADED: 'setBusinessesLoaded',
    SET_BUSINESSES: 'setBusinesses',

    SET_MANAGERS_LOADED: 'setManagersLoaded',
    SET_MANAGERS: 'setManagers',

    CLEAR_STATE: 'clearState',
};

export const mutations = {
    [types.SET_BUSINESSES_LOADED](state, loaded) {
        state.businessesLoaded = loaded;
    },

    [types.SET_BUSINESSES](state, businesses) {
        state.businesses = businesses;
    },

    [types.SET_MANAGERS_LOADED](state, loaded) {
        state.managersLoaded = loaded;
    },

    [types.SET_BUSINESSES](state, businesses) {
        state.businesses = businesses;
    },

    [types.SET_MANAGERS](state, managers) {
        state.managers = managers;
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

        return this.$repos.businessRepo.getBusinesses().then(response => {

            if (response.success) {
                commit(types.SET_BUSINESSES, response.data.businesses);
                commit(types.SET_BUSINESSES_LOADED, true);
            }

            return response;
        });
    },

    getManagers({commit}) {

        commit(types.SET_MANAGERS_LOADED, false);

        return this.$repos.businessRepo.getManagers().then(response => {

            if (response.success) {
                commit(types.SET_MANAGERS, response.data.managers);
                commit(types.SET_MANAGERS_LOADED, true);
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
