Template.datetimepicker.onRendered(function() {
  $(this.firstNode).datetimepicker(this.data.atts.opts);
});

Template.datetimepicker.helpers({
  atts: function () {
    console.log(this);
    var atts = _.omit(this.atts, 'opts');
    return atts;
  }
});

AutoForm.addInputType("datetimepicker", {
  template: "datetimepicker",
  valueOut: function () {
    return this.val();
  },
  valueConverters: {
    date: function (val) {
      return moment(val).toDate();
    }
  }
});
