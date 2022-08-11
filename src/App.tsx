import axios from "axios";
import { useEffect, useState } from "react";
import s from "./App.module.scss";
import { HitNode } from './components/hitNode';

function App() {

  const [data, setData] = useState<any>({});
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setData(response.data);
    }
    fetchData();
  }, [query, setQuery]);

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  let hitsList = [];

  if(data.hits) {
    hitsList = data.hits.map((node: any) => {
      return <HitNode 
        title={node.title} 
        author={node.author} 
        url={node.url}
        key={node.objectID}
        ></HitNode>
     })
  }

  return (
    <div className={s.app}>
      <input type="text" value={query} onChange={onQueryChange}></input>
      {hitsList}
    </div>
  );
}

export default App;
