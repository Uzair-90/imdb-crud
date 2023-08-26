import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';

function DeleteTitleRatings() {
  const [tconst, setTconst] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/title_ratings/${tconst}`);

      // Handle success, show a success message or perform any other actions needed
      setMessage('Delete successful');
      console.log('Delete successful:', response.data);
    } catch (error) {
      // Handle error, show an error message or perform any other actions needed
      setMessage('Error deleting data');
      console.error('Error deleting title_ratings data:', error);
    }
  };

  return (
    <form>
      <h2>Delete Title Ratings</h2>
      <div>
        <label htmlFor="tconst">Enter Tconst to Delete:</label>
        <input type="text" id="tconst" value={tconst} onChange={(e) => setTconst(e.target.value)} />
      </div>
      <button className='glow-on-hover' onClick={handleDelete}>Delete Title Ratings</button>
      <div>{message}</div>
    </form>
  );
}

export default DeleteTitleRatings;
