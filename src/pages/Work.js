import { useState, useEffect } from "react";
import '../App.css';

export default function App() {

    const [apiWork, setWork] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/work')
      .then(response => response.json())
      .then(data => setWork(data))
    }, []);

    const dateString = (string) => {
      return new Date(string).toLocaleDateString([], {
        month: 'long',
        year: 'numeric',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    }



    return (
        <div className="container">
        <div className='container-md'>
          <h2>To Do Task:</h2>
          {apiWork.map((data) => (
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => {
              document.getElementById('flexCheckDefault').style.textDecoration = 'line-through'
            }}/>
            <label class="form-check-label" for="flexCheckDefault">
            {`Title: ${data.Title} Description: ${data.Description} Date: ${dateString(data.Date)}`}
            </label>
          </div>
          ))}
        </div>
        <div className='container-md'>
          <form action='http://localhost:4000/work' method='post'>
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
      </div>
    );
}