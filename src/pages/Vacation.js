import { useState, useEffect } from "react";
import '../App.css';

export default function App() {

    const [apiVacation, setVacation] = useState([]);
    const [sendApi, setSendApi] = useState();

    useEffect(() => {
      fetch('http://localhost:4000/vacation')
      .then(response => response.json())
      .then(data => setVacation(data))
    }, []);

    useEffect(() => {
      fetch('http://localhost:4000/vacationdelete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendApi)
      })
        .then(res => res.json())
    }, [sendApi])
    
    const dateString = (string) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
      return new Date(string).toLocaleDateString([], options);
    };

    return (
        <div className="container">
        <div className='container-md'>
          <h2>To Do Task:</h2>
          {apiVacation.map((data) => (
            <div class="form-check" key={data._id}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => {
              setSendApi(data)
              window.location.reload(false)
            }}/>
            <label class="form-check-label" for="flexCheckDefault">
              {`Title: ${data.Title} Description: ${data.Description} Date: ${dateString(data.Date)}`}
            </label>
          </div>
          ))}
        </div>
        <div className="container-md">
            <h2>Completed:</h2>
        </div>
        <div className='container-md'>
          <form action='http://localhost:4000/vacation' method='post'>
          <div class="mb-3">
            <label for="title" class="form-label">Things to do:</label>
            <input type="text" class="form-control" id="title" placeholder="stuff to bring" name='title'/>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">description</label>
            <textarea class="form-control" id="description" rows="3" name='description'></textarea>
          </div>
          <input type='submit' value='Save'/>
          </form>
        </div>
      </div>
    );
}