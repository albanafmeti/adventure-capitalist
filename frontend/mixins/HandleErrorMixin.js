export default {
    methods: {
        handleError(error) {
            const response = error.response;
            if (response.status === 422) {
                const errorMsg = response.data.errors[0].message;
                return this.error(response.data.message, errorMsg);
            } else {
                return this.error("Error", response.data.message);
            }
        }
    }
}
