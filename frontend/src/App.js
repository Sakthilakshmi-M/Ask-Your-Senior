import {useState,useEffect} from "react";
import DataCollectionPage from "./pages/DataCollectionPage";
import axios from "axios";
const App = () => {
  const [companyName,setCompanyName] = useState('');
  const [rounds,setRounds] = useState('');
  const [query,setQuery] = useState('');
  const handleChange1 = (e)=>{
    setCompanyName(e.target.value);
  }
  const handleChange2 = (e)=>{
    setRounds(e.target.value);
  }
  const handleChange3 = (e)=>{
    setQuery(e.target.value);
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch("/api/append",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName,rounds }),
      })
      if (response.ok) {
        alert('CompanyName appended successfully!');
      } else {
        alert('Failed to append companyName.');
      }
    }
    catch(error)
    {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }
  const handleQuery=async (e)=>{
    e.preventDefault();
    await axios.post("/api/getAns",{query})
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
  }
  return ( 
    <div>
      <DataCollectionPage />
      <form onSubmit={handleSubmit}>
        <input type="text" value={companyName} onChange={handleChange1} placeholder="Company Name"/>
        <input type="text" value={rounds} onChange={handleChange2} placeholder="Rounds" />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleQuery}>
        <input type="text" value={query} onChange={handleChange3} placeholder="Ask a query"/>
        <button type="submit">Submit</button>
      </form>
    </div>
   );
}
 
export default App;