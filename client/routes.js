import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.route('/', {
  action: () => BlazeLayout.render('layout', { content: 'hello' })
})
