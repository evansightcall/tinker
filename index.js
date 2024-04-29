function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/(\"(\\\\u[a-zA-Z0-9]{4}|\\\\[^u]|[^\\\\\"])*\"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^\"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}



var uainfo = navigator.userAgentData;
//console.log(uainfo);

var uavals = uainfo.getHighEntropyValues(['fullVersionList','architecture','bitness','formFactor','model','wow64'])
  .then(
    (res)=>{
      console.log(res);
      //document.getElementById("uaDataP").innerHTML = JSON.stringify(res,null,2);
      document.getElementById("uaDataP").innerHTML = syntaxHighlight(res);
      return res;
    }
  );


