<template>
    <vs-dialog v-model="isActive" :scroll="true">
        <template #header>
            <h4 class="not-margin">
                Hire a Manager
            </h4>
        </template>


        <div class="managers-list">
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
            <SingleManager/>
        </div>

    </vs-dialog>
</template>

<script>
    import SingleManager from "./SingleManager";

    export default {
        name: "ManagersDialog",
        components: {SingleManager},
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            show() {
                this.isActive = true;
            }
        }
    }
</script>
