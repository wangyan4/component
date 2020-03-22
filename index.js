$(function () {
  var echartoption = {
    title: {
      text: 'Javascript语言排行变化'
    },
    tooltip: {},
    tooltip: {
      trigger: 'axis',
      axisPointer:{
        lineStyle:{
          width:2
        }
      }
    },
    xAxis: {
      data: [2000, 2005, 2010, 2015, 2020]
    },
    yAxis: {},
    series: [{
      data: [6, 9, 8, 8, 7],
      name: '排名',
      type: 'line'
    }]
  };
  echarts.init($('#main').get(0)).setOption(echartoption);

  var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5', '升', '+2.07%'],
    ['Visual Basic .NET', '6', '降', '-1.17%'],
    ['Javascript', '7', '降', '-0.85%']
  ];

  var handoption = {
    data: data,
    contextMenu: true,
    manualColumnMove: true,
    manualRowMove: true,
    manualRowResize: true,
    manualColumnResize: true,
    autoColumnsize: true,
    colWidths: 155,
    rowHeights: 32,
    className: "htCenter htMiddle",
    licenseKey: 'acdc2-1df47-1addf-b5c36-ce47f',
    colHeaders: [
      '语言名称',
      '排名',
      '升或降',
      '允变化幅度'
    ]
  };
  return new Handsontable($('#excel').get(0), handoption);
})