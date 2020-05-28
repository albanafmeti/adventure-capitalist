const initialState = {
    credits: 0,
    revenue: 0, /* - During current session - */
    expenses: 0, /* - During current session - */

    businessesLoaded: false,
    businesses: [],
};

function nextUpgradeCountGoal(currentGoal) {
    let goals = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 1000];
    let index = goals.indexOf(currentGoal);
    return goals[index + 1] ? goals[index + 1] : goals[index] * 100;
}

export const state = () => ({
    ...initialState
});

const types = {
    SET_CREDITS: 'setCredits',

    ADD_REVENUE: 'addRevenue',
    ADD_EXPENSE: 'addExpense',

    SET_BUSINESSES_LOADED: 'setBusinessesLoaded',
    SET_BUSINESSES: 'setBusinesses',

    UPGRADE_BUSINESS: 'upgradeBusiness',
    PURCHASE_BUSINESS: 'purchaseBusiness',
    ASSIGN_MANAGER: 'assignManager',

    CLEAR_STATE: 'clearState',
};

export const mutations = {

    [types.SET_CREDITS](state, credits) {
        state.credits = credits;
    },

    [types.ADD_REVENUE](state, credit) {
        state.revenue = state.revenue + credit;
    },

    [types.ADD_EXPENSE](state, credit) {
        state.expenses = state.expenses + credit;
    },

    [types.SET_BUSINESSES_LOADED](state, loaded) {
        state.businessesLoaded = loaded;
    },

    [types.SET_BUSINESSES](state, businesses) {
        state.businesses = businesses;
    },

    [types.PURCHASE_BUSINESS](state, {business, notifySuccess}) {
        state.businesses.push({
            ...business,
            upgradeCost: business.initialCost * business.coefficient,
            upgradeTime: business.initialTime,
            upgradeCount: 1,
            upgradePreviousGoal: 0,
            upgradeCountGoal: 25,
            managerId: null,
            hasManager: false,
            currentRevenue: business.initialRevenue,
            currentTime: business.initialTime
        });
        notifySuccess("CONGRATS", `You have purchased business ${business.name}.`, 6000);
    },

    [types.UPGRADE_BUSINESS](state, {business, notifySuccess}) {
        state.businesses = state.businesses.map(b => {

            if (b.id === business.id) {

                if (b.upgradeCount + 1 >= b.upgradeCountGoal) {

                    notifySuccess("CONGRATS", `Time is halved for your business ${business.name}.`, 6000);

                    return {
                        ...b,
                        upgradePreviousGoal: b.upgradeCountGoal,
                        upgradeCountGoal: nextUpgradeCountGoal(b.upgradeCountGoal),
                        upgradeTime: b.currentTime / 2,
                        currentTime: b.currentTime / 2,
                        upgradeCount: b.upgradeCount + 1,
                        upgradeCost: b.upgradeCost * b.coefficient,
                        currentRevenue: (b.upgradeCount + 1) * b.initialRevenue
                    }
                }

                return {
                    ...b,
                    upgradeCount: b.upgradeCount + 1,
                    upgradeCost: b.upgradeCost * b.coefficient,
                    currentRevenue: (b.upgradeCount + 1) * b.initialRevenue
                }
            }

            return b;
        });
    },

    [types.ASSIGN_MANAGER](state, {manager, notifySuccess}) {
        state.businesses = state.businesses.map(b => {

            if (b.type === manager.businessType) {

                notifySuccess("CONGRATS", `Manager ${manager.name} is now managing your business ${b.name}.`, 6000);

                return {
                    ...b,
                    managerId: manager.id,
                    manager: manager,
                    hasManager: true
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

    credits: state => state.credits,
    revenue: state => state.revenue,
    expenses: state => state.expenses,

    currentCredit: state => state.credits + state.revenue - state.expenses,

};
