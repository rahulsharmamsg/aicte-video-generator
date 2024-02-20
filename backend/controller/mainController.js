import { AzureKeyCredential, OpenAIClient} from "@azure/openai";
import { spawn,exec} from "child_process";


  const ChatGbt = async (req,res)=>{

const textQuery = req.body.text+ " change into only paraphrased sentence"; 

    const endpoint = "https://aicteoaigpt.openai.azure.com/";
    const azureApiKey = "b374dbd7a98f4b9383407f35dbd997ca";
    
        try {
    
            const messages = [
                { role: "system", content: "You are a helpful assistant who explains about government schemes in India" },
                { role: "user", content: textQuery },
            ];
            const client = new OpenAIClient(
                endpoint,
                new AzureKeyCredential(azureApiKey)
            );
            const deploymentId = "AICTEGPTOAI";
            const result = await client.getChatCompletions(deploymentId, messages);
            console.log(result,'result from api')
            if (result) {
                const data = {
                    query: textQuery,
                    answer: result?.choices[0]?.message.content.replace(/\n/g, ""),
                }
                console.log(data)
                return res.send({success:"Success",data:data.answer});
            }
        } catch (err) {
            console.error(err);
            res.send(err);
        }

}

async function convertTextToAudio(audioSrc, volume, speed, pitch) {
 
}

const audioChnage = async(req,res)=>{

 const {speed,volume,pitch,audioSrc} = req.body
const audioUrl = await convertTextToAudio(audioSrc, volume, speed, pitch);

res.json({ audioUrl });

}



export {
    ChatGbt,
    audioChnage
}

