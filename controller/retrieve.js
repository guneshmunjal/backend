import OpenAI from "openai";

const openai = new OpenAI();
// isme finetuning vali id aayegi not uploadfile vaali
async function main() {
  const fineTune = await openai.fineTuning.jobs.retrieve('ftjob-IpJUK5HGfzLEhpgthuBzGhuw');
  
  console.log(fineTune);
}

main();
