import Vue from 'vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

require('dotenv').config();

export default function ({store}) {

    const socket = io(process.env.API_URL);

    Vue.use(VueSocketIOExt, socket, {store});
}
