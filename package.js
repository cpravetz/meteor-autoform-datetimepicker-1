Package.describe({
  name: 'abate:autoform-datetimepicker',
  version: '1.0.8',
  // Brief, one-line summary of the package.
  summary: 'Incredibly simple datetimepicker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/abate/meteor-autoform-datetimepicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'aldeed:autoform@6.2.0',
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
