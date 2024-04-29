var uainfo = navigator.userAgentData;
var uavals;

uainfo.getHighEntropyValues(['fullVersionList','architecture','bitness','formFactor','model','wow64'])
  .then(
    (res)=>{
      console.log(res);
      document.getElementById("uaDataP").innerHTML = JSON.stringify(res,null,2);
      uavals = res;
    }
  );

console.log("Available vars: uainfo, uavals");
