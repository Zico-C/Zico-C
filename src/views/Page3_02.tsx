
import ReactECharts from 'echarts-for-react';


const View = () => {
    // 基于准备好的dom，初始化echarts实例
    const option = {
        // 圖表的標題配置
        title: {
          text: 'ECharts 入门示例'// 圖表的標題文字
        },
        // 提示框配置，當滑鼠懸停在圖表上時會顯示提示資訊
        tooltip: {},
        // x軸配置，用於設置橫軸（通常是類別軸）
        xAxis: {
          // 橫軸的數據項目
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        // y軸配置，用於設置縱軸
        yAxis: {},
        // 系列配置，這裡是一個柱狀圖
        series: [
          {
            // 系列名稱
            name: '销量',
            // 系列類型，這裡是柱狀圖
            type: 'bar',
            // 系列的數據，這是柱狀圖的數據
            data: [5, 20, 36, 10, 10, 20],
            
          }
        ]
      };
    const option2 ={
      title:{
        text:"圓餅圖練習"
      },
      tooltip: {
        trigger :'item'
      },
      legend :{
        top :'5%',
        left :'center'
      },
      series: [
        {
          name :'Access From',
          type :'pie',
          radius :['40%', '70%'],
          avoidLabelOverlap :false,
          label: {
            show :false,
            position :'inside'
          },
          emphasis :{
            label: {
              show :true,
              fontSize :30,
              fontWeight :'bold'
            }
          },
          labelLine :{
            show :false
          },
          data :[
            { value :1048, name: '冰箱' },
            { value :735, name :'電風扇' },
            { value :580, name :'冷氣' },
            { value :484, name :'吹風機' },
            { value :300, name :'電視' }
          ]
        }
      ]
    }
    return(
        <div className='Home'>
            <p>這是Page3_02頁面內容</p>
      {/* 使用 ReactECharts 组件来渲染图表 */}
      <ReactECharts option={option} style={{ height: '400px'}} />
      <ReactECharts option={option2} style={{ height: '400px'}} />
        </div>
    )
}

export default View