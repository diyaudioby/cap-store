(this["webpackJsonpcap-store"]=this["webpackJsonpcap-store"]||[]).push([[0],{355:function(e,t,a){e.exports=a(705)},705:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(65),c=a.n(r),i=a(350),s=a(93),o=a(319),u=a(320),d=a(17),m=a(349),h=a(351),p=a(712),E=a(714),f=a(352),y=p.a.Column,g=p.a.HeaderCell,O=p.a.Cell,b=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).keys=["manufacture","series","cap","volt","d","h"],n.emptyOptions=n.getEmptyOptions(n.keys),n.tableHeight=window.innerHeight-100,n.state={loading:!0,data:[],table:[],options:{},selectedOptions:{}},n.selectOption=n.selectOption.bind(Object(d.a)(n)),n.clear=n.clear.bind(Object(d.a)(n)),console.log(n.winHeight),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/data.json").then((function(e){return e.json()})).then((function(t){return e.setState({loading:!1,data:t,table:t,options:e.getFullOptions(t),selectedOptions:{}})}))}},{key:"getEmptyOptions",value:function(e){return e.reduce((function(e,t){return e[t]=[],e}),{})}},{key:"getFullOptions",value:function(e){return this.keys.reduce((function(t,a){var n=Object(s.a)(new Set(e.map((function(e){return e[a]}))));"volt"===a&&(n=n.sort((function(e,t){return(e=e.replace("V",""))-(t=t.replace("V",""))})));var l=n.map((function(e){var t={};return t.value=e,t.label=e,t}));return t[a]=l,t}),{})}},{key:"selectOption",value:function(e,t){var a=Object(i.a)({},this.state.selectedOptions);a[t]=Object(s.a)(e);var n=Object(s.a)(this.state.data);Object.keys(a).forEach((function(e){var t=a[e];0!==t.length&&(n=n.filter((function(a){return t.some((function(t){return t===a[e]}))})))})),this.setState({selectedOptions:a,table:n})}},{key:"clear",value:function(){this.setState({selectedOptions:this.emptyOptions,table:Object(s.a)(this.state.data)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{padding:20}},l.a.createElement("div",{style:{height:50}},this.keys.map((function(t){return l.a.createElement(E.a,{size:"sm",key:t,searchable:!1,placeholder:t,data:e.state.options[t],onSelect:function(a){return e.selectOption(a,t)},onClean:function(){return e.selectOption([],t)},value:e.state.selectedOptions[t],style:{minWidth:120,marginRight:20}})})),l.a.createElement(f.a,{size:"sm",appearance:"primary",onClick:this.clear},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")),l.a.createElement(p.a,{virtualized:!0,affixHeader:!0,bordered:!0,loading:this.state.loading,height:this.tableHeight,data:this.state.table},l.a.createElement(y,{width:100,align:"center"},l.a.createElement(g,null,"id"),l.a.createElement(O,{dataKey:"id"})),l.a.createElement(y,{width:150,align:"center"},l.a.createElement(g,null,"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),l.a.createElement(O,{dataKey:"manufacture"})),l.a.createElement(y,{width:100,align:"center"},l.a.createElement(g,null,"\u0421\u0435\u0440\u0438\u044f"),l.a.createElement(O,{dataKey:"series"})),l.a.createElement(y,{width:100,align:"center"},l.a.createElement(g,null,"\u0415\u043c\u043a\u043e\u0441\u0442\u044c, uF"),l.a.createElement(O,{dataKey:"cap"})),l.a.createElement(y,{width:100,align:"center"},l.a.createElement(g,null,"\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435, V"),l.a.createElement(O,{dataKey:"volt"})),l.a.createElement(y,{width:100,align:"center"},l.a.createElement(g,null,"Diameter"),l.a.createElement(O,{dataKey:"d"})),l.a.createElement(y,{width:100,align:"center"},l.a.createElement(g,null,"Height"),l.a.createElement(O,{dataKey:"h"})),l.a.createElement(y,{width:120,align:"center"},l.a.createElement(g,null,"\u041a\u0440\u0430\u0442\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430"),l.a.createElement(O,{dataKey:"min"})),l.a.createElement(y,{width:100,align:"center"},l.a.createElement(g,null,"Price, RUB"),l.a.createElement(O,{dataKey:"sell"})),l.a.createElement(y,{flexGrow:1},l.a.createElement(g,null,"Full Name"),l.a.createElement(O,{dataKey:"fullData"}))))}}]),a}(n.Component),v=function(){return l.a.createElement(b,null)};a(704);c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[355,1,2]]]);
//# sourceMappingURL=main.b51f80a1.chunk.js.map