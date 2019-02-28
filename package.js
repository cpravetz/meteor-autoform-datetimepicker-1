Package.describe({
  name: 'abate:autoform-datetimepicker',
  version: '1.0.8',
  summary: 'Incredibly simple datetimepicker',
  git: 'https://github.com/abate/meteor-autoform-datetimepicker',
  documentation: 'README.md',
})

Npm.depends({
  flatpickr: '4.4.4',
  'moment-timezone': '0.5.23',
  // 'jquery-datetimepicker': '2.4.7',
})

Package.onUse((api) => {
  api.versionsFrom('1.5')

  api.use([
    'ecmascript',
    'aldeed:autoform@6.0.0',
    'underscore',
    'templating',
    'blaze',
    // XXX we should use the jquery-datetimepicker npm package instead
    'drewy:datetimepicker',
  ], 'client')

  api.addFiles([
    'autoform-datetimepicker.html',
    'autoform-datetimepicker.js',
  ], 'client')

  api.export(['setPickerTimezone'])
})
