import Vue from 'vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

export default function ({store, env}) {

    const socket = io(env.SOCKET_URL, {
        autoConnect: false
    });

    Vue.use(VueSocketIOExt, socket, {store});
}
