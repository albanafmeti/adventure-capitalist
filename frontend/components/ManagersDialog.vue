<template>
    <vs-dialog v-model="isActive" :scroll="true">
        <template #header>
            <h4 class="not-margin">
                Hire a Manager
            </h4>
        </template>


        <div class="managers-list">
            <SingleManager v-for="manager in managers" :key="manager.id" :manager="manager"/>
        </div>

    </vs-dialog>
</template>

<script>
    import SingleManager from "./SingleManager";
    import {mapGetters} from 'vuex';

    export default {
        name: "ManagersDialog",
        components: {SingleManager},
        data() {
            return {
                isActive: false
            }
        },
        computed: {
            ...mapGetters({
                managers: "business/managers"
            })
        },
        methods: {
            show() {
                this.isActive = true;
            }
        }
    }
</script>
