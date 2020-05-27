const initialState = {

    credits: 0,
    revenues: 0, /* - During current session - */
    expenses: 0, /* - During current session - */

    userLoaded: false,
    user: false,

    businesses: false,
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

    SET_USER_LOADED: 'setUserLoaded',
    SET_USER: 'setUser',

    SET_BUSINESSES: 'setBusinesses',
    UPGRADE_BUSINESS_LEVEL: 'upgradeBusinessLevel',
    UPGRADE_BUSINESS_STEP: 'upgradeBusinessStep',

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

    [types.SET_USER_LOADED](state, loaded) {
        state.userLoaded = loaded;
    },

    [types.SET_USER](state, user) {
        state.user = user;
    },

    [types.SET_BUSINESSES](state, businesses) {
        state.businesses = businesses;
    },

    [types.UPGRADE_BUSINESS_LEVEL](state, business) {
        state.businesses = state.businesses.map(b => {

            if (b.id === business.id) {

                return {
                    ...b,
                    level: b.level + 1,
                    step: 0
                }
            }

            return b;
        });
    },

    [types.UPGRADE_BUSINESS_STEP](state, business) {
        state.businesses = state.businesses.map(b => {

            if (b.id === business.id) {

                const levels = b.levels;
                const newStep = b.step + 1;

                if (newStep >= b.levelData.steps) {
                    return {
                        ...b,
                        level: b.level + 1,
                        levelData: levels[b.level + 1],
                        step: 0
                    }
                }

                /*profit: 412,
                time: 15,
                price: 1200,
                steps: 5,
                stepProfitIncrease: 0.1*/

                const levelData = b.levelData;

                return {
                    ...b,
                    levelData: {
                        ...levelData,
                        profit: levelData.profit + (levelData.stepProfitIncrease * levelData.profit),
                    },
                    step: b.step + 1,
                }
            }

            return b;
        });
    },

    [types.CLEAR_STATE](state) {
        Object.keys(state).forEach(key => {
            state[key] = initialState[key];
        });
    },
};

export const actions = {

    loadUser() {

    },

    getClients({commit}) {

        commit(types.SET_CLIENTS_LOADED, false);

        return this.$repos.clientRepo.getClients().then(response => {

            if (response.success) {
                commit(types.SET_CLIENTS, response.data.clients);
                commit(types.SET_CLIENTS_LOADED, true);
            }

            return response;
        });
    },

    createClient({commit}, data) {
        return this.$repos.clientRepo.createClient(data).then(response => {

            if (response.success) {
                commit(types.ADD_CLIENT, response.data.client);
            }

            return response;
        });
    },

    updateClient({commit}, {id, data}) {
        return this.$repos.clientRepo.updateClient(id, data).then(response => {

            if (response.success) {
                commit(types.UPDATE_CLIENT, response.data.client);
            }

            return response;
        });
    },

    deleteClient({commit}, client) {
        return this.$repos.clientRepo.deleteClient(client.id).then(response => {

            if (response.success) {
                commit(types.DELETE_CLIENT, client);
            }

            return response;
        });
    },

};

export const getters = {
    clientsLoaded: state => state.clientsLoaded,
    clients: state => state.clients,
    client: (state) => (id) => {
        return state.clients.find(client => client.id === id)
    },
};
