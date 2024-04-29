var uainfo = navigator.userAgentData;
//console.log(uainfo);

var uavals = uainfo.getHighEntropyValues(['fullVersionList','architecture','bitness','formFactor','model','wow64'])
  .then(
    (res)=>{
      console.log(res);
      document.getElementById("uaDataP").innerHTML = JSON.stringify(res,null,2);
      return res;
    }
  );
