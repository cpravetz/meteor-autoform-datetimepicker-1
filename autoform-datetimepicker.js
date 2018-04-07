import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.css'
import { moment } from 'meteor/momentjs:moment'

Template.flatpickerange.onRendered(function() {
  template = this
  opts = {}
  if ((template.data) && (template.data.atts.opts))
    opts = _.extend(opts,template.data.atts.opts)
  opts = _.extend(opts,{mode: "range"})
  $(template.firstNode).flatpickr(opts)
});

Template.flatpickerange.helpers({
  atts() { return _.omit(this.atts, 'opts') }
});

AutoForm.addInputType("flatpickerange", {
  template: "flatpickerange",
  valueIn: function (val, atts) {
    if (!val) { return val }
    else {
      var format = "YYYY-MM-DD"
      if ((atts.opts) && (atts.opts.format))
        format = atts.opts.format;
      s = moment(val.start).format(format);
      e = moment(val.end).format(format);
      return `${s} to ${e}`
    }
  },
  valueOut: function () {
    range = this.val().split(' to ')
    console.log(range);
    if (range.length == 2) {
      start = moment(range[0], "YYYY-MM-DD").toDate();
      end = moment(range[1], "YYYY-MM-DD").toDate();
      console.log({ start, end });
      return { start, end }
    }
    else return {}
  },
})

Template.flatpicker.onRendered(function() {
  template = this
  opts = {}
  if ((template.data) && (template.data.atts.opts))
    opts = _.extend(opts,template.data.atts.opts)
  $(template.firstNode).flatpickr(opts)
});

Template.flatpicker.helpers({
  atts() { return _.omit(this.atts, 'opts') }
});

AutoForm.addInputType("flatpicker", {
  template: "flatpicker",
  valueIn: function (val, atts) {
    var format = "YYYY-MM-DD";
    if ((atts.opts) && (atts.opts.format))
      format = atts.opts.format;
    if (! val) { return val; }
    return moment(val).format(format);
  },
  valueOut: function () {
    return moment(this.val(), "YYYY-MM-DD").toDate();
  },
})

Template.datetimepicker.onRendered(function() {
  opts = this.data.atts.opts;
  $(this.firstNode).datetimepicker(opts);
});

Template.datetimepicker.helpers({
  atts() { return _.omit(this.atts, 'opts') }
});

AutoForm.addInputType("datetimepicker", {
  template: "datetimepicker",
  valueIn: function (val, atts) {
    var format = "DD-MM-YYYY HH:mm";
    if ((atts.opts) && (atts.opts.format))
      format = atts.opts.format;
    if (! val) { return val; }
    return moment(val).format(format);
  },
  valueOut: function () {
    return moment(this.val(), "DD-MM-YYYY HH:mm").toDate();
  },
});
