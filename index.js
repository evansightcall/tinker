var uainfo = navigator.userAgentData;
//console.log(uainfo);
document.getElementById("uaDataP").html(
  JSON.stringify(
    uainfo.getHighEntropyValues(['fullVersionList','architecture','bitness','formFactor','model','wow64']).then((res)=>{console.log(res); return res;}),
    2
  )
);
