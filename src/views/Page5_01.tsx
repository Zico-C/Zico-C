
import { useRef,useState } from "react"



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
      <div className='Home'>Page5_01</div>
      <div>
        <input type="text" placeholder='搜尋資料' onChange={(e)=>setQuery(e.target.value)} />
        <input type="text"  placeholder='新增資料' ref={inputRef}/>
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
      
    </>
  )
}

export default Page5_01