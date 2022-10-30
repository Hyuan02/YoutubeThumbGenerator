import './App.css';
import { createApi } from 'unsplash-js';
import { useState, useEffect } from 'react';


const unsplash = createApi({
  accessKey: 'wTCWf-I5cXif4JS38FBrbnWvu-qLMC-b9mpGtqdpWqE',
});

function App() {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    console.log(unsplash.search.getPhotos({
      query: 'a',
      page: 1,
      perPage: 20
    }).then(x => {
      console.log(x.response)
    }))
  })



  return (
    <div className='App'>
      Hello World!
    </div>
  );
}

export default App;
