# openai-chatbot-practice
 
## Prerequisites

- A Discord bot(You can create it at [Discord Developer Portal](https://discord.com/developers/applications))
- Node.js v16+ installed on your machine
- An OpenAI API key

## Run application
run your Node.js application in your terminal with the following command:

```
npm start
```

## Secure environment variables
The dotenv package is used to access environment variables required to interact with both the Discord and OpenAI APIs.

Create the .env file with the following command:

```
touch .env
```

Open up the .env file using your preferred IDE and place the following lines into the file:

```
OPENAI_API_KEY=XXXXXXXX
BOT_TOKEN=XXXXXXXX
```

Replace the `OPENAI_API_KEY` placeholder with the OpenAI API key from your OpenAI Developer Quickstart profile and replace the `BOT_TOKEN` placeholder with the hidden token from the Discord Bot Developer Portal.