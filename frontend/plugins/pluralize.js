let pluralize = require('pluralize');

export default (ctx, inject) => {
    inject('pluralize', pluralize)
}
