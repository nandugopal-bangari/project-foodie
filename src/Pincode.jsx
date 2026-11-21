import axios from "axios";
import { useState } from "react";

function Pincode() {
  const [mypincode, setMyPincode] = useState("");
  const [data, setData] = useState([]);

  const pinLogics = async () => {
    await axios
      .get(`https://api.postalpincode.in/pincode/${mypincode}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Postal PIN Code API</h2>

      <input
        type="text"
        placeholder="Enter PIN Code"
        value={mypincode}
        onChange={(e) => setMyPincode(e.target.value)}
      />

      <button onClick={pinLogics}>Get Data</button>

      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default Pincode;
