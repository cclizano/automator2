const axios = require('axios');

const CHANNEL_AUTOMATOR = 'https://hooks.slack.com/services/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';

const postNotification = async (message) => {
  if(!CHANNEL_AUTOMATOR) return;
  
  const body = {
    blocks: [
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `${message}` },
      },
    ],
  };

  await axios.post(CHANNEL_AUTOMATOR, body);
};

module.exports = {
  postNotification,
};
