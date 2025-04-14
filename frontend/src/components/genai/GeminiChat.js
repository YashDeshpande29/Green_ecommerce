// import { useState } from "react";
// import axios from "axios";
// import { BACKEND_URL_LINK } from '../../routes/url'



// function ProductChat() {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState("");

//   const askGemini = async () => {
//     try {
//       const res = await axios.post(`${BACKEND_URL_LINK}/api/v6/recommend`, { prompt: query });
//       console.log("Frontend Received:", res.data); // Debugging
//       setResponse(res.data.output || "No response from AI.");
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setResponse("Error connecting to AI service.");
//     }
//   };
  
  

//   return (
//     <div className="p-4">
//       <input 
//         type="text" 
//         value={query} 
//         onChange={(e) => setQuery(e.target.value)} 
//         placeholder="Ask AI about products..." 
//         className="border p-2 rounded"
//       />
//       <button onClick={askGemini} className="bg-blue-500 text-white px-4 py-2 ml-2">
//         Ask AI
//       </button>
//       <p className="mt-4">{response}</p>
//     </div>
//   );
// }

// export default ProductChat;

