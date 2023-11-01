import { ConversationChain } from "langchain/chains";
import { OpenAI } from "langchain/llms";

require("dotenv").config();

export const run = async () => {

    const llm = new OpenAI({ temperature: 0 });

    const chain = new ConversationChain({ llm: llm });

    const input1 = "こんにちは!";
    const res1 = await chain.call({ input: input1 });
    console.log("Human: ", input1);
    console.log("AI: ", res1["response"]);

    const input2 = "AIの好きな料理は?";
    const res2 = await chain.call({ input: input2 });
    console.log("Human: ", input2);
    console.log("AI: ", res2["response"]);

    const input3 = "その料理の作り方は?";
    const res3 = await chain.call({ input: input3 });
    console.log("Human: ", input3);
    console.log("AI: ", res3["response"]);
};
run();
