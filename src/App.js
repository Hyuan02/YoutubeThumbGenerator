import './App.css';
import { createApi } from 'unsplash-js';
import { useState, useEffect } from 'react';


const unsplash = createApi({
  accessKey: 'wTCWf-I5cXif4JS38FBrbnWvu-qLMC-b9mpGtqdpWqE',
});

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    unsplash.photos.list({ page: 1, perPage: 20 }).then(x => {
      setTemplates(x.response.results)
    })
  }, [])



  return (
    <div style={{ textAlign: "center" }} className='App'>
      <h3>Select an Image</h3>
      {
        templates.map((template) => {
          return <img style={{ width: '200px' }} key={template.id} src={template.urls.small} alt={template.alt} />
        })
      }
    </div>
  );
}

export default App;
