Template.datetimepicker.onRendered(function() {
  opts = this.data.atts.opts;
  $(this.firstNode).datetimepicker(opts);
});

Template.datetimepicker.helpers({
  atts: function () {
    var atts = _.omit(this.atts, 'opts');
    return atts;
  }
});

AutoForm.addInputType("datetimepicker", {
  template: "datetimepicker",
  valueIn: function (val, atts) {
    var format = atts.opts.format || "DD-MM-YYYY HH:mm";
    if (!val) {
      return val;
    }
    return moment(val).format(format);
  },
  valueOut: function () {
    // XXX this should be converted back using atts.opts.format ...
    return moment(this.val(), "DD-MM-YYYY HH:mm").toDate();
  },
  // XXX Maybe useful
  // valueConverters: {
  //   "string": function (val) {
  //     return (val instanceof Date) ? val.toString() : val;
  //   },
  //   "stringArray": function (val) {
  //     if (val instanceof Date) {
  //       return [val.toString()];
  //     }
  //     return val;
  //   },
  //   "number": function (val) {
  //     return (val instanceof Date) ? val.getTime() : val;
  //   },
  //   "numberArray": function (val) {
  //     if (val instanceof Date) {
  //       return [val.getTime()];
  //     }
  //     return val;
  //   },
  //   "dateArray": function (val) {
  //     if (val instanceof Date) {
  //       return [val];
  //     }
  //     return val;
  //   }
  // }
});
