import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms';
import { PromptTemplate } from 'langchain/prompts';

require('dotenv').config();

export const run = async () => {

    const llm = new OpenAI({temperature: 0.9 });

    const prompt = new PromptTemplate({
        inputVariables: ['product'],
        template: "{product}を作る日本語の新会社を1つ提案してください。",
    });

    const chain = new LLMChain({ llm: llm, prompt });

    let res = await chain.call({ product: '家庭用ロボット' });
    console.log(res["text"]);
};
run();
