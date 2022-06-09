import React from 'react';
import Container from '@mui/material/Container';


const Menu = () => {

  return (
    <Container
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary',
        '&:hover': {
          backgroundColor: 'primary',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
    <div className='menu-container'>
      <form>
      Im looking for service for my...
      <input type='checkbox' />
      <label>Dog</label>
      <input type='checkbox' />
      <label>Cat</label>

      <br />
      
      <select>
        <option>I need...</option>
        <option>Boarding</option>
        <option>Drop-In Visits</option>
        <option>House Sitting</option>
        <option>Doggy Day Care</option>
        <option>Dog Walking</option>
      </select>
      
      
      
      <label>location</label>
      <input></input>

      <label>Dates</label>
      <input type='date' ></input> to <input type='date' ></input>

      <label>my pet size</label>
      <select>
        <option> &lt; 10 lb </option>
        <option> 10 - 15 lb </option>
        <option> 15 - 20 lb </option>
        <option> &gt; 0 lb </option>
      </select>
      </form>
      <button>submit</button>
    </div>
    </ Container>
  )
}

export default Menu;