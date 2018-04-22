import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.css'
import { moment } from 'meteor/momentjs:moment'

Template.flatpickerange.onRendered(function() {
  const template = this
  let opts = {}
  const data = template.data
  if ((data) && (data.atts.opts))
    opts = _.extend(opts,data.atts.opts)
  opts = _.extend(opts,{mode: "range"})
  $(template.firstNode).flatpickr(opts)
});

Template.flatpickerange.helpers({
  atts() {
    const atts = Template.currentData().atts
    return _.omit(atts, 'opts') }
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
    if (range.length == 2) {
      start = moment(range[0], "YYYY-MM-DD").toDate();
      end = moment(range[1], "YYYY-MM-DD").toDate();
      return { start, end }
    }
    else return {}
  },
})

Template.flatpicker.onRendered(function() {
  const template = this
  let opts = {}
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
    const momentOut = moment(this.val(), "YYYY-MM-DD");
    return momentOut.isValid() ? momentOut.toDate() : this.val();
  },
})

Template.datetimepicker.onRendered(function() {
  const opts = this.data.atts.opts;
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
    const momentOut = moment(this.val(), "DD-MM-YYYY HH:mm");
    return momentOut.isValid() ? momentOut.toDate() : this.val();
  },
});
