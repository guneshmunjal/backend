import OpenAI from "openai";

const openai = new OpenAI();

let id = 'file-FCJ05yT50OQZOIBGIfxWpkaS';


async function main() {
  const fineTune = await openai.fineTuning.jobs.create({
    training_file: id,
    model:'gpt-3.5-turbo'
  });

  console.log(fineTune);
}

main();
