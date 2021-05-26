const Discord = require('discord.js');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
async function runSample(projectId = 'glassai-oklt', txt) {
    // A unique identifier for the given session
    const sessionId = uuid.v4();
  
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
  
    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: txt.toString(),
          // The language used by the client (en-US)
          languageCode: 'en-US',
        },
      },
    };
  
    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText
}
module.exports = {
	name: 'message',
	once: false,
	async execute(client,msg) {
		if(msg.channel.name === "glassai"){
            var result = await runSample('glassai-oklt',msg.content)
        }
	},
};