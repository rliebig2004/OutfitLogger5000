import { useState } from 'react'
import Sidebar from './components/sidebar';
import './App.css'

export default function App() {
  const [imageWidth, setImageWidth] = useState(50);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setImageWidth(value);
  }
  return (
    <>
      <Sidebar />
      <h1>Outift Logger 3000</h1>
      <div className='model-container'>
        <input
          className='height-slider'
          type="range"
          id="slider"
          min="25"
          max="50"
          value={imageWidth}
          step="1"
          onChange={handleSliderChange}
        />
        <img id="image" src="./images/mannequin.jpeg" alt="Image" style={{ width: `${imageWidth}%` }} />
      </div>
    </>
  )
}