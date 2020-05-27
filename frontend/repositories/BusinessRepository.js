export default ({$axios}) => ({

    getBusinesses(params = {}) {
        return $axios.$get(`/businesses`, {params});
    },

    getManagers(params = {}) {
        return $axios.$get(`/managers`, {params});
    },
});
