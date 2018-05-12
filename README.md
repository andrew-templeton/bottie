# bottie
## Simple BotKit bot with NLP

### *Original blog post avaliable on Andrew Templeton's blog:* 

http://blog.templeton.host/self-training-nlp-enabled-slack-bot-tutorial/


#### Meet Kurt, Bottie's bigger, badder cousin
The AI landscape has changed a lot in the last two years. Kurt will replace Bottie - with slot detection, custom lambda fulfillment, and CloudFormation support for AWS Lex bot creation. Stay tuned!  
[Kurt's Repository](https://github.com/andrew-templeton/kurt)


<br><br>
## **Step 1** - Get Your Slack Bot Token

- Go to Slack's Custom Integrations panel and click on the Bots link: https://my.slack.com/apps/build/custom-integration
- Name your Bot and **COPY** the API Token value into your clipboard


<br><br>
## **Step 2** - Download the bottie code to your computer

If you're here on **GitHub**, you already know what to do. Navigate to the downloaded project folder *(on your computer)* and run the the following commands *[no dollar sign is required, used for reference only]*:

- **RUN** - `$ npm install;`
- **RUN** - `$ export SLACK_TOKEN='<COPIED_TOKEN from your Slack-Bot API>';`
- **RUN** - `$ node index`


<br><br>
## **Step 3** - Learn and build on the bottie code
To learn how to interact and use the Bot, [read Andrews blog post](
http://blog.templeton.host/self-training-nlp-enabled-slack-bot-tutorial/). It's a great starting point for those looking to build / extend a bot to fit their project needs.  


<br>
**Bonus points:** Examples of how to use sentiment and make JSON calls have been included in this example. You might also want to look at Adam-nnl's bot (https://github.com/adam-nnl/owb-bot/) for other ideas on how to extend bottie.
