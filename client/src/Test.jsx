import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/images/generations', {
        prompt: text,
        model: 'image-alpha-001',
        api_key:'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'
      });
      setImageUrl(response.data.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>AI Text-to-Image Generation</h1>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={generateImage}>Generate Image</button>
      {imageUrl && <img src={imageUrl} alt="Generated image" />}
    </div>
  );
}

export default App;
