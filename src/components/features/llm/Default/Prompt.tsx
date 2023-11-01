import { PromptTemplate } from 'langchain/prompts';

require('dotenv').config();

export const run = async () => {
    const prompt = new PromptTemplate({
        inputVariables: ['product'],
        template: "{product}を作る日本語の新会社を1つ提案してください。",
    });

    console.log(prompt.format({ product: '家庭用ロボット' }));
}

run();
