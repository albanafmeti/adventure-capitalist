export default ({$axios}) => ({
    register(data) {
        return $axios.$post(`/register`, data);
    },
});
