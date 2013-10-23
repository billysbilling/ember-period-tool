module.exports = require('ember-tool').extend(require('ember-period-field').PeriodFieldMixin, {
    icon: 'icons/calendar',

    text: Em.computed.alias('value.name')
});
