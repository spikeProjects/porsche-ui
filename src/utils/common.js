import moment from 'moment';
const dateFormat = 'YYYY-MM-DD';
const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

export const sortTableFunc=(data,params,sorter,name='orderBy')=>{
  Object.keys(data).forEach((item)=>{
    if(item===sorter.field)params[name]=`${data[item]} ${sorter.order==='ascend'?'asc':'desc'}`;
  });
  return params;
};

export const getTimeZone=()=>{
  return -(new Date().getTimezoneOffset()/60);
};

export const formatDate=(value,format=dateTimeFormat)=>{
  if(!value)return '';
  if(typeof value !== 'number') return moment(new Date(value)).format(format);
  return moment(new Date(value*1000)).format(format);
};

export const formatDateToUtc=(value,type)=>{
  let date=new Date(value).getTime()/1000;
  if(type){
    let time=type==='start'?'00:00:00':'23:59:59';
    let day=moment(new Date(value)).format(dateFormat);
    date=new Date(`${day} ${time}`).getTime()/1000;
  }
  return Math.round(date);
};

export const compareDate=(start,end,day=365)=>{//比较两个日期是否相差多少天，默认365
  if(!start || !end) return true;
  let time=day*24*60*60*1000;
  let dValue=Math.abs(new Date(start).getTime()-new Date(end).getTime());
  return time>dValue;
};

export const titleCase=(str)=>{
  if(!str)return '';
  let arr = str.toLowerCase().split(" ");
  for (let i=0;i<arr.length;i++){
    let char = arr[i].charAt(0);
    arr[i] = arr[i].replace(char, function replace(char){
      return char.toUpperCase();
    });
  }
  return arr.join(' ');
};

export const statusArrToValueFunc=(value,data,key='dictValue',label='description')=>{
  if(!value && value!==0)return '';
  let index=data.findIndex((item)=>item[key]===value||Number(item[key])===value);
  return index>-1?data[index][label]:'';
};

export const statusArrToValueSfFunc=(value,data,key='dictKey',label='dictValue')=>{
  if((!value && value!==0) || !data)return '';
  let index=data.findIndex((item)=>item[key]===value||Number(item[key])===value);
  return index>-1?data[index][label]:'';
};

export const startToEndTime=(startTime,endTime)=>{
  let timeDiff = endTime - startTime
  const hour = Math.floor(timeDiff / 3600);
  timeDiff = timeDiff % 3600;
  const minute = Math.floor(timeDiff / 60);
  timeDiff = timeDiff % 60;
  const second = timeDiff;
  const dataContent = typeof(startTime)&&typeof(endTime)==="number"? [hour+'小时', minute+'分', second+'秒'] :'';
  return dataContent
};

export const blobToDownloadExcel=(data,title,fileType='xls')=>{
  let blob = new Blob([data], {type: 'application/octet-stream;charset=utf-8'});
  if(window.navigator && window.navigator.msSaveOrOpenBlob){
    window.navigator.msSaveOrOpenBlob(blob, `${title}.${fileType}`);
    return;
  }
  let url = window.URL.createObjectURL(blob);
  let aLink = document.createElement("a");
  aLink.style.display = "none";
  aLink.href = url;
  aLink.setAttribute("download", `${title}.${fileType}`);
  document.body.appendChild(aLink);
  aLink.click();
  document.body.removeChild(aLink);
  window.URL.revokeObjectURL(url);
};

export const fetchInformationImage = fileId => {
  return `/ss-utilitycenter/v1/file/thumbnail/${fileId}`;
};

export const fetchInformationBigImage = fileId => {
  return `/ss-utilitycenter/v1/file/download/${fileId}`;
};

export const compare = (x, y) => {
  return x.date > y.date;
};

export const getPath = (data) =>{
  let pathVal=[];
  let forFunc=(arr, pathVal)=>{
    arr.forEach((item)=>{
      if(item.children && item.children.length){
        forFunc(item.children, pathVal);
      }else {
        pathVal.push(item.routePath);
        (item.permissionList || []).forEach((list)=>{
          pathVal.push(list.permissionCode);
        });
      }
    })
  };
  forFunc(data, pathVal);
  return pathVal;
};

export const getMenu = (data) =>{
  let pathVal=[];
  let forFunc=(arr, pathVal, type, name=[])=>{
    arr.forEach((item)=>{
      let nameValue=[];
      if(type==='start'){
        nameValue=[item.assetName];
      }else {
        nameValue= [...name, item.assetName];
      }
      if(item.children && item.children.length){
        forFunc(item.children, pathVal, 'no-start', nameValue);
      }else {
        pathVal.push({currentMenu:nameValue, routePath:item.routePath});
      }
    })
  };
  forFunc(data, pathVal, 'start');
  return pathVal;
};

export const addHtmlFormat = value => {
  return (
    `<!DOCTYPE html>
        <html lang="en">
         <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>保时捷资讯</title>
            <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
              word-wrap:break-word;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
         </head>
         <body>
            <div class="container">${value}</div>
         </body>
       </html>`
  );
};

