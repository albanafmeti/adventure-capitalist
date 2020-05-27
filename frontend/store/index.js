const initialState = {
    modalOpen: false
};

export const state = () => ({
    ...initialState
});

const types = {
    SET_MODAL_OPEN: 'setModalOpen',
};

export const mutations = {
    [types.SET_MODAL_OPEN](state, open) {
        state.modalOpen = open;
    },
};

export const getters = {
    modalOpen: state => state.modalOpen
};
