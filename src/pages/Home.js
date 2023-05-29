import { useEffect, useState } from "react";
import '../App.css';

export default function App(props) {

    const [apiHome, setHome] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/home')
      .then(response => response.json())
      .then(data => setHome(data))
    }, [])

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
          {apiHome.map((data) => (
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              {`Title: ${data.Title} Description: ${data.Description} Date: ${dateString(data.Date)}`}
            </label>
          </div>
          ))}
        </div>

        {console.log(props)}
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