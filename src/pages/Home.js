import { useEffect, useState } from "react";
import '../App.css';

export default function App() {

    const [apiResponse, setApiResponse] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/home')
      .then(response => response.json())
      .then(data => setApiResponse(data))
    }, [])



    return (
        <div className="container">
        <div className='container-md'>
          {apiResponse.map((data) => (
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              {`Title: ${data.Title} Description: ${data.Description} Date: ${data.Date}`}
            </label>
          </div>
          ))}
        </div>
        <div className='container-md'>
          <form action='http://localhost:4000/home' method='post'>
          <div class="mb-3">
            <label for="title" class="form-label">To do chore:</label>
            <input type="text" class="form-control" id="title" placeholder="Tidy Room" name='title'/>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">description</label>
            <textarea class="form-control" id="description" rows="3" name='description'></textarea>
          </div>
          <input type='submit' value='Save' />
          </form>
        </div>
      </div>
    );
}