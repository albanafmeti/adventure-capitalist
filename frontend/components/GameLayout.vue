<template>
    <div class="container-fluid">
        <div class="row">

            <div class="col-md-2 p-0 left-side d-none d-md-flex d-lg-flex">
                <div class="smaller-part"></div>
                <div class="bigger-part"></div>
            </div>

            <div class="col-md-8 col-sm-12 p-0 middle-side">
                <div class="top-part d-none d-md-flex d-lg-flex">
                    <div class="bigger-part"></div>
                    <div class="smaller-part"></div>
                </div>

                <div class="game-container">
                    <slot></slot>
                </div>

                <div class="bottom-part d-none d-md-flex d-lg-flex">
                    <div class="smaller-part"></div>
                    <div class="bigger-part"></div>
                </div>
            </div>

            <div class="col-md-2 p-0 right-side d-none d-md-flex d-lg-flex">
                <div class="bigger-part"></div>
                <div class="smaller-part"></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "GameLayout"
    }
</script>
