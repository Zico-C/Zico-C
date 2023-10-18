import { useState,useEffect,useRef } from "react"
// import { useTranslation} from "react-i18next";



const View = () => {
    const [name, setName] = useState('');
    const renderCount = useRef(1);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        renderCount.current += 1;
    });
    useEffect(() => {
        // 在組件加載後，將焦點設置到 input 元素
        inputRef.current?.focus();
    }, []);
    return (
        <div className='Home'>
            <div>
            <input ref={inputRef} onChange={(e) => setName(e.target.value)}  />
            <div>我的名字是 {name}</div>
            <div>我重新渲染了 {renderCount.current} 次</div>
            </div>
        </div>
    )
}

export default View