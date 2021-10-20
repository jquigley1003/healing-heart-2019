/* eslint-disable @typescript-eslint/no-var-requires */
import * as functions from "firebase-functions";

// const Mailchimp = require('mailchimp-api-v3');
const mailchimp = require("@mailchimp/mailchimp_marketing");
const MAILCHIMP_APIKEY = functions.config().mailchimp.apikey;
const MAILCHIMP_SERVER = functions.config().mailchimp.server;
// const mailchimp = new Mailchimp(MAILCHIMP_APIKEY);


mailchimp.setConfig({
  apiKey: MAILCHIMP_APIKEY,
  server: MAILCHIMP_SERVER,
});

export const getNewsletters = functions.https.onCall(async (data, context) => {
// await mailchimp.request({
// method: 'get',
// path: '/campaigns/',
// query: {
// status: 'sent',
// count: 50,
// since_create_item: '2019-01-01T15:30:51+00:00'
// }
// })
// .then((result: any) => {
// return result;
// })

  const response = await mailchimp.campaigns.list({
    status: "sent", count: 100,
  });
  return response;
});
