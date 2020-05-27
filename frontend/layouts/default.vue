<template>

    <div class="container-fluid">
        <div class="row">

            <div class="col-2 p-0 left-side">
                <div class="smaller-part"></div>
                <div class="bigger-part"></div>
            </div>

            <div class="col-8 p-0 middle-side">
                <div class="top-part"></div>

                <div class="game-container">
                    <nuxt/>
                </div>

                <div class="bottom-part"></div>
            </div>

            <div class="col-2 p-0 right-side">
                <div class="bigger-part"></div>
                <div class="smaller-part"></div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'default'
    }
</script>

<style lang="scss">

    @import "../assets/scss/style";

    .left-side, .middle-side, .right-side {
        display: flex;
        height: 100vh;
        flex-direction: column;
    }

    .left-side {
        .smaller-part {
            flex: 4;
            border-bottom: 2px solid $primary;
            margin-bottom: 1px;
        }

        .bigger-part {
            flex: 10;
            border-top: 2px solid $primary;
        }
    }

    .middle-side {
        .top-part {
            flex: 2;
        }

        .game-container {
            flex: 15;
            border: 2px solid $dark;
        }

        .bottom-part {
            flex: 2;
        }
    }

    .right-side {
        .smaller-part {
            flex: 4;
            border-top: 2px solid $danger;
            margin-top: 1px;
        }

        .bigger-part {
            flex: 10;
            border-bottom: 2px solid $danger;
        }
    }

</style>
