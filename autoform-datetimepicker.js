Template.datetimepicker.onRendered(function() {
  $(this.firstNode).datetimepicker(this.data.atts.opts);
});

Template.datetimepicker.helpers({
  atts: function () {
    var atts = _.omit(this.atts, 'opts');
    return atts;
  }
});

AutoForm.addInputType("datetimepicker", {
  template: "datetimepicker",
  valueOut: function () {
    return this.val();
  }
});
