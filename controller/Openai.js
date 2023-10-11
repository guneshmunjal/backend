import OpenAI from "openai";
const apiKey = process.env.OPENAI_API_KEY;

import dotenv from "dotenv";
dotenv.config();
import express from "express"; // Import Express if you haven't already



const app = express(); // Create an Express app
app.use(express.json()); // Middleware to parse JSON request bodies



const openai = new OpenAI({
  apiKey: apiKey,
});

export const handleResponse = async (req, res) => {
  try {
    const { messages } = req.body;


    console.log("Received messages:", messages)

    const initialMessages = [{ role: "user", content: "" }];
    // Add the system message to the user's messages
    initialMessages.push({
      role: "system",
      content:"SCOTT is a sneakerhead and answers questions related to sneakers ONLY predicts the correct reselling price that particular sneaker model. It tells between what price range the person should pay for that particular sneaker model.AND DONT ANSWER IF user ASKS SAME QUESTION TWICE and NEVER MENTION STOCKX,GOAT ETC.answer in less than 70 words"
    },
   );

    const finalMessages = initialMessages.concat(messages);

    const completion = await openai.chat.completions.create({
      messages: finalMessages,
      model: "ft:gpt-3.5-turbo-0613:personal::87j2up1F",
      max_tokens: 250,
    });

    console.log("hellllllllllll", messages);

    // Access the generated text directly from the 'choices' property
    let generatedText = "";

    if (completion.choices && completion.choices.length > 0) {
      generatedText = completion.choices[0].message.content;
    }

    console.log("Generated Text:", generatedText);

    return res.send({
      message: "working",
      success: true,
      generatedText: generatedText,
    });
  } catch (error) {
    return res.send({
      message: `The error is ${error}`,
      success: false,
    });
  }
};
