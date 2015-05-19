Package.describe({
  name: 'drewy:autoform-datetimepicker',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Incredibly simple datetimepicker',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:drew-y/meteor-autoform-datetimepicker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['autoform-datetimepicker.js', 'underscore']);
});

Package.onTest(function(api) {
  api.use('aldeed:autoform');
  api.addFiles(['autoform-datetimepicker.html', 'autoform-datetimepicker.html']);
});
