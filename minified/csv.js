!function(r){"use strict";var a=/"((?:[^"\\]|\\.)*)"|([^,\s]+)|,\s*(?=,|$)|^\s*,/g;r.calculate=function(r){var e=r.split(/\n+\s*/),s=e[0].match(a).length,l=[],t=function(r){var a=r.replace(/,\s*$/,""),e=a.replace(/^\s*"/,""),s=e.replace(/"\s*$/,""),l=s.replace(/\\"/,'"');return l};for(var c in e){var i=e[c],n=i.match(a),u=[],o=!1;if(!i.match(/(^\s*$)|(^#.*)/))if(n){u=n.map(t),o=s!=n.length;var p=o?"error":"";l.push({value:u,rowClass:p})}else{var v='La fila "'+i+'" no es un valor de CSV permitido.';l.push({value:v.split("").splice(s),rowClass:"error"})}}return l}}(this);