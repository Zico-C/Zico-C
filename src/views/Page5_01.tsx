import { useState, useEffect } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from 'react-simple-captcha';

function RandomCode() {
  const [captcha, setCaptcha] = useState('');

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleCaptchaChange = (e:any) => {
    setCaptcha(e.target.value);
  };

    console.log(captcha)

  const doSubmit = () => {
    let user_captcha = captcha;

    if (validateCaptcha(user_captcha)===true) {
        alert('成功');
        loadCaptchaEnginge(4); 
        setCaptcha("");
    }

    else {
        alert('失敗');
        setCaptcha("");
    }
};


  return (
    <div>
      <h1>隨機驗證碼生成器</h1>
      <LoadCanvasTemplateNoReload />
      <input type="text" onChange={handleCaptchaChange} />
      <button  onClick={() => doSubmit()}>Submit</button>
    </div>
  );
}

export default RandomCode;
