import { AzureKeyCredential, OpenAIClient} from "@azure/openai";
import { spawn,exec} from "child_process";

  const ChatGbt = async (req,res)=>{

const textQuery = req.body.text; 
console.log(textQuery)
 
const pythonScriptPath = './shortlen.py';
console.log(pythonScriptPath)

const command = `python ${pythonScriptPath} "${textQuery}"`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return res.send({status:500,message:"Internal server error"});
    }
    try {
        const parsedOutput = JSON.parse(stdout);
        // return res.status(200).send(parsedOutput);
        return res.send({status:200,message:parsedOutput});
    } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
        return res.send({status:500,message:"comapany not found"});
    }
});



    // const endpoint = "https://aicteoaigpt.openai.azure.com/";
    // const azureApiKey = "b374dbd7a98f4b9383407f35dbd997ca";
    
    //     try {
    
    //         const messages = [
    //             { role: "system", content: "You are a helpful assistant who explains about government schemes in India" },
    //             { role: "user", content: textQuery },
    //         ];
    //         const client = new OpenAIClient(
    //             endpoint,
    //             new AzureKeyCredential(azureApiKey)
    //         );
    //         const deploymentId = "AICTEGPTOAI";
    //         const result = await client.getChatCompletions(deploymentId, messages);
    //         console.log(result,'result from api')
    //         if (result) {
    //             const data = {
    //                 query: textQuery,
    //                 answer: result?.choices[0]?.message.content.replace(/\n/g, ""),
    //             }
    //             console.log(data)
    //             return res.send({success:"Success",data:data.answer});
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         res.send(err);
    //     }

}
export {
    ChatGbt
}

