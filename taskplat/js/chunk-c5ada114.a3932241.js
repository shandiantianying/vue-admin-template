(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5ada114"],{"14c3":function(t,e,a){var n=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var o=a.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},1894:function(t,e,a){},"1ae0":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a("bc3a"),r=a.n(n);function o(t){var e=r.a.create({baseURL:"http://127.0.0.1:8080/gssb/",timeout:5e4});return e(t)}},"1dde":function(t,e,a){var n=a("d039"),r=a("b622"),o=a("60ae"),i=r("species");t.exports=function(t){return o>=51||!n((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3ed2":function(t,e,a){},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),o=a("7b0b"),i=a("50c4"),c=a("a691"),s=a("1d80"),l=a("8aa5"),u=a("14c3"),d=Math.max,f=Math.min,p=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){return[function(a,n){var r=s(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,r,n):e.call(String(r),a,n)},function(t,o){if(n.REPLACE_KEEPS_$0||"string"===typeof o&&-1===o.indexOf("$0")){var s=a(e,t,this,o);if(s.done)return s.value}var p=r(t),m=String(this),h="function"===typeof o;h||(o=String(o));var x=p.global;if(x){var b=p.unicode;p.lastIndex=0}var y=[];while(1){var k=u(p,m);if(null===k)break;if(y.push(k),!x)break;var E=String(k[0]);""===E&&(p.lastIndex=l(m,i(p.lastIndex),b))}for(var I="",w=0,j=0;j<y.length;j++){k=y[j];for(var z=String(k[0]),V=d(f(c(k.index),m.length),0),S=[],D=1;D<k.length;D++)S.push(v(k[D]));var R=k.groups;if(h){var N=[z].concat(S,V,m);void 0!==R&&N.push(R);var P=String(o.apply(void 0,N))}else P=g(z,m,V,S,R,o);V>=w&&(I+=m.slice(w,V)+P,w=V+z.length)}return I+m.slice(w)}];function g(t,a,n,r,i,c){var s=n+t.length,l=r.length,u=h;return void 0!==i&&(i=o(i),u=m),e.call(c,u,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===r[d-1]?o.charAt(1):r[d-1]+o.charAt(1):e}c=r[u-1]}return void 0===c?"":c}))}}))},8137:function(t,e,a){"use strict";e["a"]={login:"v1/user/checkUser",tdinit:"/v1/initTaskData?pageNum=PAGENUM",tdprefill:"/v1/ytxTaskData?pageNum=PAGENUM",tdsenddeclare:"/v1/fsbbTaskData?pageNum=PAGENUM",tddeclarepay:"/v1/scjyskjnTaskData?pageNum=PAGENUM",userPwdedit:"/v1/user/editUserPwd",cpdataQuery:"v1/creditpre/queryDatalist?ageNum=PAGENUM",sinfoQuery:"v1/shareInfo/queryData?ageNum=PAGENUM",sinfoshhQuery:"v1/shareInfo/queryShhData?ageNum=PAGENUM",atinit:"/v1/scjycshTaskData?pageNum=PAGENUM",attaxpay:"/v1/scjyskjnTaskData?pageNum=PAGENUM",atsenddeclare:"/v1/scjyyjnsbbTaskData?pageNum=PAGENUM",tdinitdata:"v1/chartData/incomeAndTaxData",tdpreRecordData:"v1/chartData/preRecordData",tdsendDeclarData:"v1/chartData/sendDeclarData",atinitdata:"v1/chartData/atinitdata",attaxpaydata:"v1/chartData/attaxpaydata",cpchartdata:"v1/chartData/cpchartdata"}},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},"8fff":function(t,e,a){"use strict";var n=a("1894"),r=a.n(n);r.a},9263:function(t,e,a){"use strict";var n=a("ad6d"),r=a("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||l;d&&(c=function(t){var e,a,r,c,d=this,f=l&&d.sticky,p=n.call(d),m=d.source,h=0,v=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",v=" "+v,h++),a=new RegExp("^(?:"+m+")",p)),u&&(a=new RegExp("^"+m+"$(?!\\s)",p)),s&&(e=d.lastIndex),r=o.call(f?a:d,v),f?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:s&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&i.call(r[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),t.exports=c},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),o=a("e8b5"),i=a("861d"),c=a("7b0b"),s=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("60ae"),m=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),x=d("concat"),b=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},y=!g||!x;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,n,r,o,i=c(this),d=u(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],b(o)){if(r=s(o.length),f+r>h)throw TypeError(v);for(a=0;a<r;a++,f++)a in o&&l(d,f,o[a])}else{if(f>=h)throw TypeError(v);l(d,f++,o)}return d.length=f,d}})},"9aaa":function(t,e,a){"use strict";var n=a("3ed2"),r=a.n(n);r.a},"9f7f":function(t,e,a){"use strict";var n=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},c260:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[t._t("default")],2)},r=[],o={name:"Root",data:function(){return{}},components:{},created:function(){},mounted:function(){},methods:{}},i=o,c=(a("8fff"),a("2877")),s=Object(c["a"])(i,n,r,!1,null,"846a6e3a",null);e["a"]=s.exports},d784:function(t,e,a){"use strict";var n=a("6eeb"),r=a("d039"),o=a("b622"),i=a("9263"),c=a("9112"),s=o("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,f){var p=o(t),m=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=m&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[s]=function(){return a},a.flags="",a[p]=/./[p]),a.exec=function(){return e=!0,null},a[p](""),!e}));if(!m||!h||"replace"===t&&(!l||!u)||"split"===t&&!d){var v=/./[p],g=a(p,""[t],(function(t,e,a,n,r){return e.exec===i?m&&!r?{done:!0,value:v.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u}),x=g[0],b=g[1];n(String.prototype,t,x),n(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},e209:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Root",[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":120}},[a("Row",[a("i-col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"纳税人识别号:",prop:"nsrsbh"}},[a("Input",{attrs:{placeholder:""},model:{value:t.formValidate.nsrsbh,callback:function(e){t.$set(t.formValidate,"nsrsbh",e)},expression:"formValidate.nsrsbh"}})],1)],1),a("i-col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"纳税人名称:",prop:"nsrmc"}},[a("Input",{attrs:{placeholder:""},model:{value:t.formValidate.nsrmc,callback:function(e){t.$set(t.formValidate,"nsrmc",e)},expression:"formValidate.nsrmc"}})],1)],1),a("i-col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"实名账号:",prop:"smzh"}},[a("Input",{attrs:{placeholder:""},model:{value:t.formValidate.smzh,callback:function(e){t.$set(t.formValidate,"smzh",e)},expression:"formValidate.smzh"}})],1)],1)],1),a("Row",[a("i-col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"sessionid:",prop:"smbz"}},[a("Input",{attrs:{placeholder:""},model:{value:t.formValidate.smbz,callback:function(e){t.$set(t.formValidate,"smbz",e)},expression:"formValidate.smbz"}})],1)],1),a("i-col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"返回信息:",prop:"xyxx"}},[a("Input",{attrs:{placeholder:""},model:{value:t.formValidate.xyxx,callback:function(e){t.$set(t.formValidate,"xyxx",e)},expression:"formValidate.xyxx"}})],1)],1),a("i-col",{attrs:{span:"7"}},[a("FormItem",{attrs:{label:"状态",prop:"ztbz"}},[a("Select",{attrs:{placeholder:"Select your city"},model:{value:t.formValidate.ztbz,callback:function(e){t.$set(t.formValidate,"ztbz",e)},expression:"formValidate.ztbz"}},[a("Option",{attrs:{value:"0"}},[t._v("未处理")]),a("Option",{attrs:{value:"2"}},[t._v("处理失败")]),a("Option",{attrs:{value:"1"}},[t._v("处理成功")]),a("Option",{attrs:{value:"3",selected:""}},[t._v("全部")])],1)],1)],1)],1),a("Row",[a("i-col",{attrs:{span:"12"}},[a("FormItem",{attrs:{prop:"date",label:"创建时间起止："}},[a("DatePicker",{staticClass:"creatDate",attrs:{type:"date",placeholder:"",format:"yyyy-MM-dd"},on:{"on-change":function(e){t.formValidate.cjsj=e}},model:{value:t.formValidate.cjsj,callback:function(e){t.$set(t.formValidate,"cjsj",e)},expression:"formValidate.cjsj"}}),t._v("- "),a("DatePicker",{staticClass:"creatDate",attrs:{type:"date",placeholder:"",format:"yyyy-MM-dd"},on:{"on-change":function(e){t.formValidate.cjsjz=e}},model:{value:t.formValidate.cjsjz,callback:function(e){t.$set(t.formValidate,"cjsjz",e)},expression:"formValidate.cjsjz"}})],1)],1),a("i-col",{attrs:{span:"8"}},[a("FormItem",[a("Button",{attrs:{loading:t.isShowLoading,type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("查询")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleReset("formValidate")}}},[t._v("重置")])],1)],1)],1)],1),a("i-table",{attrs:{border:"",columns:t.columnsFiled,data:t.dateItems},scopedSlots:t._u([{key:"action",fn:function(e){e.row;var n=e.index;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.show(n)}}},[t._v("详情")])]}}])}),a("Page",{attrs:{total:t.totalcount,"show-total":""},on:{"on-change":t.changePage}})],1)},r=[],o=(a("99af"),a("ac1f"),a("5319"),a("8137")),i=a("1ae0"),c=a("c260"),s={name:"Cphome",data:function(){return{totalcount:0,columnsFiled:[{title:"实名账号",key:"smzh"},{title:"sessionid",key:"smbz"},{title:"纳税人识别号",key:"nsrsbh"},{title:"纳税人名称",key:"nsrmc"},{title:"创建时间",key:"cjsj"},{title:"最后更新时间",key:"zhgxsj"},{title:"状态",width:"60px",key:"ztbz",render:function(t,e){var a=e.row.ztbz;return"1"===a?t("span",{style:"background-color: green"},"成"):"0"===a?t("span",{style:"background-color: #A9A9A9"},"未 "):t("span",{style:"background-color: red"},"败")}},{title:"年度",width:"60px",key:"cxnd"},{title:"返回信息",key:"xyxx",ellipsis:!0},{title:"操作",slot:"action",width:78,align:"center"}],isShowLoading:!1,pageNum:1,dateItems:[],formValidate:{nsrsbh:"",nsrmc:"",ztbz:"3",cjsj:"",cjsjz:"",smzh:"",smbz:"",xyxx:""}}},components:{Root:c["a"]},created:function(){},mounted:function(){},methods:{show:function(t){this.$Modal.info({title:"详情信息",content:"纳税人识别号：".concat(this.dateItems[t].nsrsbh,"<br>纳税人名称：").concat(this.dateItems[t].nsrmc,"<br>返回信息：").concat(this.dateItems[t].xyxx)})},changePage:function(t){this.pageNum=t,this.handleSubmit()},handleSubmit:function(){var t=this,e={};e=this.formValidate,this.isShowLoading=!0,Object(i["a"])({url:o["a"].cpdataQuery.replace("PAGENUM",this.pageNum),method:"POST",data:e}).then((function(e){console.log("request query data!"),console.log(e.data),t.isShowLoading=!1,t.dateItems=e.data.list,console.log(e.data.pageInfo.total),t.totalcount=e.data.pageInfo.total,0===t.totalcount&&t.$Message.warning("查询无数据！")})).catch((function(e){t.isShowLoading=!1,t.$Message.error("您的网络连接异常，请稍候再试！")})),this.isShowLoading=!1},handleReset:function(){this.$refs[name].resetFields()}}},l=s,u=(a("9aaa"),a("2877")),d=Object(u["a"])(l,n,r,!1,null,"0b0daa88",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-c5ada114.a3932241.js.map