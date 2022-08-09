import axios from "axios";
import { useEffect, useState } from "react";
import s from "./App.module.scss";
import { HitNode } from './components/hitNode';

function App() {

  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://hn.algolia.com/api/v1/search?query=redux");
      setData(response.data);
    }
    console.log("Fetching");
    fetchData();
  }, []);

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
      {hitsList}
    </div>
  );
}

export default App;
