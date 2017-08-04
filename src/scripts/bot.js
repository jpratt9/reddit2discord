const snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: 'local:com.excalibot:v1.0.0 (by /u/Excalibur457)',
  clientId: 'VaUeAB0jWxA0vA',
  clientSecret: 'k5ttkZQ4KKwv-e4MjPZxqSWhEUw',
  refreshToken: '20039964432-srkYB4x7GTJD3dvtuxvDGrDnYZ0'
});
const me = r.getUser('excalibur457');
me.getSubmissions().then(console.log);

//console.log(me);