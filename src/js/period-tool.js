var i18nContext = require('i18n-context')('ember_period_tool', require.resolve('../locales')),
    t = i18nContext.t;

module.exports = require('ember-tool').extend(require('ember-period-field').PeriodFieldMixin, {
    icon: 'icons/calendar',

    text: function() {
        if (this.get('showDefaultText')) {
            return this.get('value.name') || t('all_time');
        }
        return this.get('value.name');
    }.property('value.name', 'showDefaultText'),

    hasAction: true,

    showDefaultText: false
});
