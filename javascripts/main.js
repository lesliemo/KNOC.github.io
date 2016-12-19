// Need JavaScript for KNOC.github.io/javascripts/KYGreenBookDirectory-source-code.js Google Map API integration
// original documentation notation found in this document [console.log('This would be the main JS file.');] -- not sure whether it is needed

slackin.default({
token: 'xoxp-113683597219-113750768658-118059386353-764a02a3d4b04c45e2390de74d8cee50', // required
interval: 1000,
org: 'https://slack.kentuckynerdsofcolor.com', // required
path: 'https://lesliemo.github.io/KNOC.github.io/connect.html', // defaults to '/'
channels: 'channel,channel,...', // for single channel mode
silent: false // suppresses warnings
}).listen(3000)
