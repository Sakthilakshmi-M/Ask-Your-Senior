import React,{useState} from "react";
import axios from "axios";
const DataCollectionPage = ()=>{
  const [company,setCompany] = useState('');
  const [rounds,setRounds] = useState('');
  const [description,setDescription] = useState([]);
  const [others,setOthers] = useState('');

  const handleInputChange = (index, fieldIndex, value) => {
    const newDescription = [...description];
    if (!newDescription[index]) {
      newDescription[index] = { inputField1: '', inputField2: '', inputField3: '' };
    }
    newDescription[index][`inputField${fieldIndex + 1}`] = value;
    setDescription(newDescription);
  };
  const handleGenerateFields = () => {
    const newInputValues = new Array(rounds).fill(null).map(() => ({
      inputField1: '',
      inputField2: '',
      inputField3: ''
    }));
    setDescription(newInputValues);
  };
  
  const renderInputFields = ()=>{
    const placeholder = ['Type of round','Questions Asked','Tips to prepare']
    const inputFields = []
    for(let i=0;i<rounds;i++)
    {
      const setOfInputs = description[i] || { inputField1: '', inputField2: '', inputField3: '' };
      for (let j = 0; j < 3; j++) {
        inputFields.push(
          <input
            key={`${i}-${j}`}
            type="text"
            value={setOfInputs[`inputField${j + 1}`] || ''}
            onChange={(e) => handleInputChange(i, j, e.target.value)}
            placeholder={placeholder[j]}
          />
        );
      }
    }
    return inputFields;
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await axios.post("/api/append",{company,rounds,description,others})
          .then(res=>console.log(res))
          .catch(error=>console.log(error))
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Company Name"/>
      <input type="number" min="1" value={rounds} onChange={(e)=>setRounds(parseInt(e.target.value))} placeholder="Number of rounds" />
      <div>{renderInputFields()}</div>
      <input type="text" value={others} onChange={(e)=>setOthers(e.target.value)} placeholder="Others" />
      <input type="submit" />
    </form>
    </>
  )
}

export default DataCollectionPage