import React, { Component } from 'react';

class CustomCaptcha extends Component {
  constructor(props:any) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      captchaText: this.generateCaptchaText(),
      backgroundColor: 'transparent', // 设置背景颜色为透明
    };
  }

  componentDidMount() {
    this.drawCaptcha();
  }

  generateCaptchaText() {
    // 生成随机验证码文本的逻辑
    // 你可以根据需要进行自定义
    // 返回一个包含验证码文本的字符串
  }

  drawCaptcha() {
    const canvas = this.canvasRef?.current;
    const ctx = canvas.getContext('2d');

    // 设置背景颜色
    ctx.fillStyle = this.state.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 设置文本颜色
    ctx.fillStyle = 'black'; // 设置为黑色，你可以自定义颜色
    ctx.font = '30px Arial'; // 设置字体和字号
    ctx.fillText(this.state.captchaText, 10, 40); // 绘制验证码文本
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={150}
        height={60}
      />
    );
  }
}

export default CustomCaptcha;
