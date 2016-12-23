define(function (require) {
  require('angular');
  require('ui/angular-bootstrap/index');

  return require('ui/modules')
  .get('kibana', ['ui.bootstrap', 'pascalprecht.translate'])
  .config(function ($tooltipProvider) {
    $tooltipProvider.setTriggers({ 'mouseenter': 'mouseleave click' });
  })
  .config(function ($translateProvider, $translatePartialLoaderProvider) {
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '{part}/i18n/{lang}.json'
  });
  $translateProvider
    .uniformLanguageTag('bcp47')
    .registerAvailableLanguageKeys(['cn', 'en', 'de'], {
    		'cn*': 'cn',
        'en*': 'en',
        'de*': 'de',
        '*': 'cn'
    })
    .determinePreferredLanguage()
    .fallbackLanguage('cn');
})
  ;

});

