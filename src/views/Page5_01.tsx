
import { useRef,useState } from "react"
import styles from "./page8_01.module.scss"

function Page5_01() {
  const [items, setItems] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items.filter((item:string) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const addItem = () => {
    const searchText = inputRef.current?.value;
    if (searchText !== undefined) {
      setItems((prev: string[]) => [...prev, searchText]);
    }
  };
  

  return (
    <>
      <div className={styles.main}>Page5_01
      <div>        
        <input type="text"  placeholder='新增資料' ref={inputRef}/>
        <input type="text" placeholder='搜尋資料' onChange={(e)=>setQuery(e.target.value)} />
        <br/><br/>
        <button onClick={addItem}>新增資料</button>
      </div>
      <div>
      <ul>
      {filteredItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
      </ul>
      </div>
      </div>
    </>
  )
}

export default Page5_01