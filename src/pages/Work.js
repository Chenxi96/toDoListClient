import { useState } from "react";
import '../App.css';

export default function App() {

    const [apiResponse, setApiResponse] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/update')
        .then(response => response.json())
        .then(data => setApiResponse(data))
    }


    return (
        <div className="container">
        <div className='container-md'>
          <form action='http://localhost:4000/' method='post'>
          <div class="mb-3">
            <label for="title" class="form-label">Work to do:</label>
            <input type="text" class="form-control" id="title" placeholder="organize file" name='title'/>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">description</label>
            <textarea class="form-control" id="description" rows="3" name='description'></textarea>
          </div>
          <input type='submit' value='Save' />
          </form>
        </div>
        <div className='container-md'>
          {apiResponse.map((data) => (
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              {`Title: ${data.Title} Description: ${data.Description}`}
            </label>
          </div>
          ))}
          <div>
          <button type='button' name="refresh" onClick={fetchData}>refresh</button>
          </div>
        </div>
      </div>
    );
}