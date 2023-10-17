import ReactECharts from 'echarts-for-react';

const View = () => {
    const options = {
        title: {
            text: '來店人數', // 设置标题文本
            // 可以根据需要设置标题的其他属性，例如 textStyle
            textStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#333' // 标题文字颜色
            }
        },
        legend: {
            data:['食材費用','廣告費用','雜費費用','人事費用','耗材費用'],
            itemWidth:20,
            // 设置 selectedMode 为 'single'，是只能選單選、'multiple'可以複選
            selectedMode: 'multiple',
            // 使用 selected 属性来控制图例项的选中状态，true 表示默认选中
            selected: {
                '食材費用': true,
                '廣告費用': true,
                '雜費費用': true,
                '人事費用': true,
                '耗材費用': true
            }
        },
        grid: { top: '15%', right: '15%', bottom: '10%', left: '6%' },
        xAxis: {
          type: 'category',
          data: ['周一','周二','周三','周四','周五','周六','周日'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
            {
                name:'食材費用',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'廣告費用',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 5555, 330, 310]
            },
            {
                name:'雜費費用',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'人事費用',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'耗材費用',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ],
        tooltip: {
          trigger: 'axis',
        },
        // 数据更新动画的缓动效果。
        animation: true,
        animationEasingUpdate: 'cubicInOut',
      };

    return (
        <div className='Home'>
            <p>這是Page3_03頁面內容</p>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <ReactECharts  option={options} style={{ height: '400px', width: '80%' }}/>
            </div>
        </div>
    )
}

export default View