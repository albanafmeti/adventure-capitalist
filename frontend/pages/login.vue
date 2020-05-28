<template>
    <div class="h-100 d-flex flex-column">

        <div class="p-3 flex-fill position-relative d-flex flex-column align-items-center justify-content-center">

            <BusyLoading v-if="isLoading" :loading-text="isLoading"/>

            <div class="game-logo">
                <img src="~/assets/images/logo.png">
            </div>
            <div class="game-title mb-5">AdVenture Capitalist</div>

            <div class="tabs">
                <div class="tab-item" :class="{active: activeTab === 'login'}" @click.prevent="activeTab = 'login'">
                    Sign In
                </div>
                <div class="tab-item" :class="{active: activeTab === 'register'}"
                     @click.prevent="activeTab = 'register'">
                    Register
                </div>
            </div>

            <div class="tab-content pt-5 pb-4" v-if="activeTab === 'login'">
                <div class="center content-inputs mb-4 d-flex">
                    <vs-input dark state="dark" v-model="username" label-placeholder="username"/>
                </div>
                <div class="center content-inputs">
                    <vs-input dark state="dark" type="password" v-model="password" label-placeholder="password"/>
                </div>
            </div>

            <div class="tab-content pt-5 pb-4" v-if="activeTab === 'register'">
                <div class="center content-inputs mb-4 d-flex">
                    <vs-input dark state="dark" v-model="username" label-placeholder="username"/>
                </div>
                <div class="center content-inputs mb-4">
                    <vs-input dark state="dark" type="password" v-model="password" label-placeholder="password"/>
                </div>
                <div class="center content-inputs">
                    <vs-input dark state="dark" type="password" v-model="passwordConfirmation"
                              label-placeholder="confirm password"/>
                </div>
            </div>

            <div class="w-100" v-if="activeTab === 'login'">
                <div class="play-btn">
                    <vs-button warn border @click.prevent="login">
                        <i class="fa fa-play"></i>&nbsp;&nbsp;PLAY
                    </vs-button>
                </div>
            </div>

            <div class="w-100" v-else>
                <div class="play-btn">
                    <vs-button warn border @click.prevent="register">
                        <i class="fa fa-check"></i>&nbsp;&nbsp;REGISTER
                    </vs-button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import NavBar from "../components/common/NavBar";
    import BusyLoading from "../components/common/BusyLoading";
    import UserStatus from "../components/common/UserStatus";
    import SingleBusiness from "../components/SingleBusiness";
    import NotificationMixin from "../mixins/NotificationMixin";
    import HandleErrorMixin from "../mixins/HandleErrorMixin";

    export default {
        components: {SingleBusiness, UserStatus, BusyLoading, NavBar},
        layout: 'login',
        data() {
            return {
                activeTab: 'login',
                username: null,
                password: null,
                passwordConfirmation: null,

                isLoading: false
            }
        },
        mixins: [NotificationMixin, HandleErrorMixin],
        watch: {
            activeTab() {
                this.username = null;
                this.password = null;
                this.passwordConfirmation = null;
            }
        },
        methods: {
            async login() {

                try {

                    this.isLoading = "Logging in...";

                    const response = await this.$auth.login({
                        data: {username: this.username, password: this.password}
                    });

                    if (response.data.success) {
                        this.success("WELCOME", response.data.message, 6000);
                    }
                } catch (error) {
                    this.handleError(error);
                } finally {
                    this.isLoading = false;
                }
            },

            async register() {
                try {

                    this.isLoading = "Creating account...";
                    const response = await this.$repos.userRepo.register({
                        username: this.username,
                        password: this.password,
                        passwordConfirmation: this.passwordConfirmation,
                    });

                    if (response.success) {
                        this.success("CONGRATS", response.message);
                        this.activeTab = 'login';
                    }

                } catch (error) {
                    this.handleError(error);
                } finally {
                    this.isLoading = false;
                }
            }
        }
    }
</script>
