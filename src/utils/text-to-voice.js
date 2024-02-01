import { ApiCall } from "./apicall";

export const textToVoiceService = async (post) => {
   // const token = localStorage.getItem("tok");
    // if(!token){
    //     alert("please login again!");
    //     return;
    // }
    let config = {"Content-Type": "application/json"}
    const res = await  ApiCall("post", "text-to-voice", config,post);
    return Buffer.from(res.data.audio.data, "binary");
}
