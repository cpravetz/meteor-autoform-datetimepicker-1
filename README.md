Fork Updated to autoform 6.2.0

![screenshot](/../master/screenshot.png?raw=true "datetimepicker screenshot")

Simple Date-Time picker for autoform

Installation
============
Prerequisites
-------------
* [datetimepicker](https://github.com/xdan/datetimepicker) which can be installed with `meteor add drewy:datetimepicker`
* [autoform](https://github.com/aldeed/meteor-autoform)

Usage
-----
Simply add type='datetimepicker' to your afQuickField
```html
{{#autoForm id='assignmentForm' collection='Posts' type='method' meteormethod='addPost'}}
  {{> afQuickField name='date' type='datetimepicker'}}
  <button type="submit">Submit</button>
{{/autoForm}}
```
Or you could optionally set datetimepicker as the default type in your schema
```javascript
Schema.Date = new SimpleSchema({
  date: {
    type: Date,
    autoForm: {
      afFieldInput: {
        type: "datetimepicker",
        opts: {
          format: "DD-MM-YYYY HH:mm"
        }
      }
    }
  }
});
```
You can also pass in options for datetimepicker (see datetimepicker [docs](http://xdsoft.net/jqplugins/datetimepicker/) for more info)
```javascript
Template.name.helpers({
  pickerOpts: function () {
    return {
      step: 15, //time step in minutes
      theme: 'dark',
    }
  }
});
```
```html
{{#autoForm id='assignmentForm' collection='Posts' type='method' meteormethod='addPost'}}
  {{> afQuickField name='date' type='datetimepicker' opts=pickerOpts}}
  <button type="submit">Submit</button>
{{/autoForm}}
```
