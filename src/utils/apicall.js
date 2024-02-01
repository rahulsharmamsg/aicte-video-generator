import axios from "axios";

export const ApiCall = async ( method, path, config, data ) => {
    // const url = `http://localhost:5000/${ path }`
    //const url = `http://localhost:5000/${ path }/`
     const url = `https://voiceapi.aicte-india.org/${ path }`
    try {
        const response = await axios[method](url, data,{config} );
        return response.data;
    } catch ( error ) {
        console.log( error, 'error message' );
    }
}
