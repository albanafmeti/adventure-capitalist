export default {
    methods: {
        notify(title, text, duration = 4000) {
            this.$vs.notification({
                duration: duration,
                progress: 'auto',
                sticky: true,
                border: null,
                position: 'top-center',
                icon: '<i class="fa fa-info"></i>',
                title,
                text
            })
        },
        success(title, text, duration = 4000) {
            this.$vs.notification({
                duration: duration,
                progress: 'auto',
                sticky: true,
                border: 'success',
                position: 'top-center',
                icon: '<i class="fa fa-check"></i>',
                title,
                text
            })
        },
        error(title, text, duration = 4000) {
            this.$vs.notification({
                duration: duration,
                progress: 'auto',
                sticky: true,
                border: 'danger',
                position: 'top-center',
                icon: '<i class="fa fa-exclamation-triangle"></i>',
                title,
                text
            })
        },
        warning(title, text, duration = 4000) {
            this.$vs.notification({
                duration: duration,
                progress: 'auto',
                sticky: true,
                border: 'warn',
                position: 'top-center',
                icon: '<i class="fa fa-exclamation-triangle"></i>',
                title,
                text
            })
        }
    }
}
