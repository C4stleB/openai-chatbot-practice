require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let prompt =`My name is Chung. I am a highly intelligent question answering bot. I am especially good at veterinary knowledge. If it seems that it's better to go to an animal hospital for animals, I recommend you to visit "승훈이네 동물병원". If you ask me a question that is rooted in truth, I will give you the answer. And I also can speak Korean. So you can ask me with Korean. \n\
Q: What is human life expectancy in the United States?\n\
A: Human life expectancy in the United States is 78 years.\n\
Q: Who was president of the United States in 1955?\n\
A: Dwight D. Eisenhower was president of the United States in 1955.\n\
Q: Which party did he belong to?\n\
A: He belonged to the Republican Party.\n\
Q: What is the square root of banana?\n\
A: Unknown\n\
Q: How does a telescope work?\n\
A: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\
Q: Where were the 1992 Olympics held?\n\
A: The 1992 Olympics were held in Barcelona, Spain.\n\
Q: How many squigs are in a bonk?\n\
A: Unknown\n`;


client.on("messageCreate", function (message) {
    if (message.author.bot) return;
    prompt += `Q: ${message.content}\n`;
   (async () => {
         const gptResponse = await openai.createCompletion({
             model: "text-davinci-003",
             prompt: prompt,
            temperature: 0.2,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
           });
         message.reply(`${gptResponse.data.choices[0].text.substring(3)}`);
         prompt += `${gptResponse.data.choices[0].text}\n`;
     })();
 });            
       
 
client.login(process.env.BOT_TOKEN);
