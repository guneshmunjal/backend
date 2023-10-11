import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const list = await openai.fineTuning.jobs.listEvents('ftjob-IpJUK5HGfzLEhpgthuBzGhuw');

  for await (const fineTune of list) {
    console.log(fineTune);
  }
}

main();