import { OpenAI } from 'langchain/llms';


require('dotenv').config();

export const run = async () => {
    const llm = new OpenAI({ temperature: 0.9 });

    const res = await llm.call(
        "コンピュータゲームを作る日本語の新会社名をを1つ提案してください"
    )
    console.log(res);
}

run();
