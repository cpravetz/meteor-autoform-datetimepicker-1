Package.describe({
  name: 'abate:autoform-datetimepicker',
  version: '1.0.8',
  summary: 'Incredibly simple datetimepicker',
  git: 'https://github.com/abate/meteor-autoform-datetimepicker',
  documentation: 'README.md'
});

Npm.depends({
  'flatpickr':'4.4.3',
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'ecmascript',
    'aldeed:autoform@6.0.0',
    'underscore',
    'templating',
    'blaze',
    'momentjs:moment'
  ], 'client');

  api.addFiles([
    'autoform-datetimepicker.html',
    'autoform-datetimepicker.js'
  ], 'client');
});
