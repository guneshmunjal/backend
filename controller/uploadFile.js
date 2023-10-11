import OpenAI from "openai";

const openai = new OpenAI();
import fs from 'fs';
async function upload(){
    const response = await openai.files.create({
        file:  fs.createReadStream('./data.jsonl'),
        purpose : 'fine-tune' 
    })
    console.log(response);
      
}

upload();