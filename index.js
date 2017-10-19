const _ = {
  get: require('lodash.get'),
  set: require('lodash.set')
}
const got = require('got')

/**
 * Stores the senders’ facebook user profile in
 * `context.messenger.sender.profile`
 *
 * **requires** `pageAccessToken` middleware to be installed.
 * **requires** logging middleware, e.g. `buyan`
 *
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
module.exports = function() {
  return async function(message, context) {
    const pageAccessToken = _.get(
      context,
      `messenger.recipient.pageAccessToken`
    )
    if (!pageAccessToken) return

    try {
      const { body } = await got(
        [
          `https://graph.facebook.com/${context.messenger.sender.id}`,
          '?fields=first_name,last_name,locale,timezone,gender',
          `&access_token=${pageAccessToken}`
        ].join(''),
        { json: true }
      )
      delete body.id
      _.set(context, 'messenger.sender.profile', body)
    } catch (err) {
      if (context.log && typeof context.log.error === 'function') {
        context.log.error({ err }, 'Error getting user profile')
      }
    }
  }
}
