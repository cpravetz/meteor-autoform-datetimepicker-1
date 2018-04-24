import 'flatpickr'
import 'flatpickr/dist/flatpickr'
// import { moment } from 'meteor/momentjs:moment'
import moment from 'moment'

// Range *******************************
Template.flatpickerange.onRendered(function onRendered() {
  const template = this
  let opts = {}
  const { data } = template
  if ((data) && (data.atts.opts)) { opts = _.extend(opts, data.atts.opts) }
  opts = _.extend(opts, { mode: 'range' })
  template.$(template.firstNode).flatpickr(opts)
})

Template.flatpickerange.helpers({
  atts() {
    const { atts } = Template.currentData()
    return _.omit(atts, 'opts')
  },
})

AutoForm.addInputType('flatpickerange', {
  template: 'flatpickerange',
  valueIn(val, atts) {
    if (!val) { return val }
    let format = 'YYYY-MM-DD'
    if ((atts.opts) && (atts.opts.format)) {
      ({ format } = atts.opts)
    }
    const s = moment(val.start).format(format)
    const e = moment(val.end).format(format)
    return `${s} to ${e}`
  },
  valueOut() {
    const range = this.val().split(' to ')
    if (range.length === 2) {
      const start = moment(range[0], 'YYYY-MM-DD').toDate()
      const end = moment(range[1], 'YYYY-MM-DD').toDate()
      return { start, end }
    } return {}
  },
})

// Date/Time (flatpickr) ***************************************

Template.flatpicker.onRendered(function onRendered() {
  const template = this
  let opts = {}
  if ((template.data) && (template.data.atts.opts)) {
    opts = _.extend(opts, template.data.atts.opts)
  }
  template.$(template.firstNode).flatpickr(opts)
})

Template.flatpicker.helpers({
  atts() { return _.omit(this.atts, 'opts') },
})

AutoForm.addInputType('flatpicker', {
  template: 'flatpicker',
  valueIn(val, atts) {
    let format = 'YYYY-MM-DD'
    if ((atts.opts) && (atts.opts.format)) { ({ format } = atts.opts) }
    if (!val) { return val }
    return moment(val).format(format)
  },
  valueOut() {
    const momentOut = moment(this.val(), 'YYYY-MM-DD')
    return momentOut.isValid() ? momentOut.toDate() : this.val()
  },
})

// Time (datetimepicker) ***************************************

Template.timepicker.onRendered(function onRendered() {
  const template = this
  const { opts } = this.data.atts
  opts.datepicker = false
  if (!opts.format) {
    opts.format = 'H:i'
  }
  template.$(template.firstNode).datetimepicker(opts)
})

Template.timepicker.helpers({
  atts() { return _.omit(this.atts, 'opts') },
})

AutoForm.addInputType('timepicker', {
  template: 'timepicker',
})

// Date/Time (bootstrap picker) ******************************************

Template.datetimepicker.onRendered(function onRendered() {
  const template = this
  const { opts } = this.data.atts
  template.$(template.firstNode).datetimepicker(opts)
})

Template.datetimepicker.helpers({
  atts() { return _.omit(this.atts, 'opts') },
})

AutoForm.addInputType('datetimepicker', {
  template: 'datetimepicker',
  valueIn(val, atts) {
    let format = 'DD-MM-YYYY HH:mm'
    if ((atts.opts) && (atts.opts.format)) { ({ format } = atts.opts) }
    if (!val) { return val }
    return moment(val).format(format)
  },
  valueOut() {
    const momentOut = moment(this.val(), 'DD-MM-YYYY HH:mm')
    return momentOut.isValid() ? momentOut.toDate() : this.val()
  },
})
