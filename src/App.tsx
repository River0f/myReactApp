
import { useEffect, useState } from "react";
import { fetchHits } from "./api/api";
import s from "./App.module.scss";
import { HitNode } from './components/hitNode';
import { HitObject } from "./interfaces";

function App() {

  const [data, setData] = useState<any>({});
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    let didCancel = false;
    fetchHits(query).then((hits) => {
      setData(hits);
    });
    return () => {
      didCancel = true;
    }
  }, [query, setQuery]);

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  let hitsList = [];

  if(data.hits) {
    hitsList = data.hits.map((node: HitObject) => {
      return <HitNode 
        key={node.objectID}
        hitData={node}
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
