import "./ChatBot.css";
import {useState} from "react";
import axios from "axios";
const ChatBot = () => {
  const [query,setQuery] = useState('');
  const [response,setResponse] = useState(''); 
  const handleChange3 = (e)=>{
    setQuery(e.target.value);
  }
  const handleQuery=async (e)=>{
    e.preventDefault();
    await axios.post("https://ask-your-senior.onrender.com/api/getAns",{query})
    .then(res=>setResponse(res.data.message))
    .catch(error=>console.log(error))
  }
  return ( 
    <>
      <form onSubmit={handleQuery}>
        <input type="text" value={query} onChange={handleChange3} placeholder="Ask a query"/>
        <button type="submit">Submit</button>
      </form>
      {response && 
      <div>{response}</div>
      }
    </>
   );
}
 
export default ChatBot;