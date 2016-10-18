# bottie
##Simple BotKit bot with NLP

*Original blog post (for documentation) avaliable on Andrew Templeton's blog:* 
http://blog.templeton.host/self-training-nlp-enabled-slack-bot-tutorial/


**Step 1** - Get Your Slack Bot Token

- Go to Slack's Custom Integrations panel and click on the Bots link: https://my.slack.com/apps/build/custom-integration
- Name your Bot and the API Token value into your clipboard



**Step 2** - Download the bottie code to your computer

If you're here on **GitHub**, you already know what to do. Navigate to the downloaded project folder *(on your computer)* and run the the following commands *[no dollar sign is required, used for reference only]*:

- **RUN** - `$ npm install;`
- **RUN** - `$ export SLACK_TOKEN='*COPIED_TOKEN from your Slack-Bot API*';`
- **RUN** - `$ node index`


To learn how to interact and use the Bot, read Andrews blog post. It's a great starting point for those looking to build / extend a bot to fit their project needs.  Examples of how to use sentiment and make JSON calls have been included in this example. You might also want to look at Adam-nnl's bot (https://github.com/adam-nnl/owb-bot/) for other ideas on how to extend bottie.
