(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),s=(a(21),a(23),a(3)),o=a(4),c=a(8),u=a(6),d=a(7),h=a(1),m=a(5),p=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"fetchData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Books";if(e)return fetch("https://fakerestapi.azurewebsites.net/api/".concat(e)).then(function(e){return e.json()}).then(function(e){return e||["no data found!"]}).catch(function(e){return new Error(e)})}}]),e}(),g=a(11),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).viewOptions=[5,10,15,20,30,40,"All"],a.sortByOptions=["Title","Description","Page Count","Date"],a.closeFilterPanel=a.closeFilterPanel.bind(Object(h.a)(Object(h.a)(a))),a.setWrapperAroundMe=a.setWrapperAroundMe.bind(Object(h.a)(Object(h.a)(a))),a.handleClickOutsideMe=a.handleClickOutsideMe.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"closeFilterPanel",value:function(e){this.props.onCloseFilter(e)}},{key:"handleSortBy",value:function(e){console.log(e),this.props.onSortyBy(e.target.value)}},{key:"handleViewItems",value:function(e){console.log(e),this.props.onUpdateViewItems(e.target.value)}},{key:"setWrapperAroundMe",value:function(e){this.wrapperEle=e}},{key:"handleClickOutsideMe",value:function(e){this.wrapperEle&&!this.wrapperEle.contains(e.target)&&this.closeFilterPanel(!1)}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutsideMe)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutsideMe)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"filter-panel ".concat(this.props.cssClassname),ref:this.setWrapperAroundMe},r.a.createElement("a",{href:"#",className:"close",onClick:function(){e.closeFilterPanel(!1)}},r.a.createElement(m.a,{icon:"times"})),r.a.createElement("h3",null,"Filter"),r.a.createElement("form",{onSubmit:function(){return!1}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"viewItemsControl"},"View items"),r.a.createElement("select",{className:"form-control",id:"viewItemsControl",onChange:function(t){return e.handleViewItems(t)}},r.a.createElement("option",null,"Select"),this.viewOptions.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"soryByControl"},"Sort By"),r.a.createElement("select",{className:"form-control",id:"soryByControl",onChange:function(t){return e.handleSortBy(t)}},r.a.createElement("option",null,"Select"),this.sortByOptions.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={gotoPageNo:"",totalRecords:0,defaultItems:0,prevCnt:0,nextCnt:0,currentPage:1},a.handlePrevious=a.handlePrevious.bind(Object(h.a)(Object(h.a)(a))),a.handleNext=a.handleNext.bind(Object(h.a)(Object(h.a)(a))),a.handlePage=a.handlePage.bind(Object(h.a)(Object(h.a)(a))),a.gotoPage=a.gotoPage.bind(Object(h.a)(Object(h.a)(a))),a.handlePageInputChange=a.handlePageInputChange.bind(Object(h.a)(Object(h.a)(a))),a.handlePageInputKeyDown=a.handlePageInputKeyDown.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handlePageInputChange",value:function(e){var t=e.target.value;t.length?this.setState({gotoPageNo:parseFloat(t)}):this.setState({gotoPageNo:""})}},{key:"handlePageInputKeyDown",value:function(e){13===e.keyCode&&this.gotoPage()}},{key:"handlePage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prevCnt,a=e.nextCnt,n=this.props.onSetNewGridRecords;(void 0===n?function(e){return e}:n)({prevCnt:t,nextCnt:a})}},{key:"gotoPage",value:function(){var e=this.state,t=e.totalRecords,a=e.gotoPageNo,n=e.defaultItems;e.currentPage;if(a&&a<=t/n){var r=(a-1)*n,i=a*n;this.setState({currentPage:a,prevCnt:r,nextCnt:i}),this.handlePage({prevCnt:r,nextCnt:i})}}},{key:"handlePrevious",value:function(){var e=this.state,t=e.prevCnt,a=e.nextCnt,n=e.defaultItems,r=e.currentPage;t>0&&(t=parseFloat(t)-n,a=parseFloat(a)-n,r-=1,this.setState({prevCnt:t,nextCnt:a,currentPage:r,gotoPageNo:""}),this.handlePage({prevCnt:t,nextCnt:a}))}},{key:"handleNext",value:function(){var e=this.state,t=e.prevCnt,a=e.nextCnt,n=e.defaultItems,r=e.currentPage,i=e.totalRecords;a<i?(t=parseFloat(t)+n,a=parseFloat(t)+n,r+=1,this.setState({prevCnt:t,nextCnt:a,currentPage:r,gotoPageNo:""}),this.handlePage({prevCnt:t,nextCnt:a})):(a=i,this.setState({nextCnt:a}))}},{key:"componentWillMount",value:function(){var e=this.props.gridData.length,t=this.state;t.totalRecords=e,t.defaultItems=this.props.defaultItems,this.setState({pagination:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.totalRecords,n=t.defaultItems,i=t.currentPage,l=t.prevCnt,s=t.nextCnt,o=t.gotoPageNo;return r.a.createElement("div",null,r.a.createElement("div",{className:"tabular-info clearfix"},r.a.createElement("h5",{className:"float-left"},r.a.createElement("span",null,a)," books in store."),r.a.createElement("h6",{className:"float-left"},r.a.createElement("span",null,"Page ","".concat(i,"/").concat(a/n))),r.a.createElement("div",{className:"float-right col-4"},r.a.createElement("div",{className:"input-group input-group-sm float-right"},r.a.createElement("input",{type:"text",name:"gotoPageInput",className:"form-control goto-input",value:o,onChange:this.handlePageInputChange,onKeyDown:this.handlePageInputKeyDown,maxLength:5}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:this.gotoPage,name:"gotoPageButton",className:"btn btn-outline-secondary",type:"button"},"Go"))),r.a.createElement("ul",{className:"pagination pagination-sm float-right"},r.a.createElement("li",{className:l?"page-item":"page-item disabled"},r.a.createElement("a",{className:"page-link",href:"#",onClick:function(){return e.handlePrevious()}},"Previous")),r.a.createElement("li",{className:s===a?"page-item disabled":"page-item"},r.a.createElement("a",{className:"page-link",href:"#",onClick:function(){return e.handleNext()}},"Next"))))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={gridData:[],dataTableRecords:[],totalRecords:0,viewItems:0,direction:{ID:"desc",Title:"desc",PageCount:"desc",PublishDate:"desc"}},a.setNewGridRecords=a.setNewGridRecords.bind(Object(h.a)(Object(h.a)(a))),a.sortBy=a.sortBy.bind(Object(h.a)(Object(h.a)(a))),a.updateViewItems=a.updateViewItems.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"sortBy",value:function(e){console.clear();var t=""!==e?e.replace(/ /gi,""):null;if(t){var a=this.state,n=a.dataTableRecords,r=a.direction,i=[];switch(t){case"Title":i=r&&"asc"===r[t]?n.sort(function(e,a){var n=e[t].split(" "),r=Object(g.a)(n,2),i=r[0],l=(r[1],e[t].split(" ")),s=Object(g.a)(l,2),o=s[0];s[1];return i>o?1:-1}):n.sort(function(e,a){var n=e[t].split(" "),r=Object(g.a)(n,2),i=r[0],l=(r[1],e[t].split(" ")),s=Object(g.a)(l,2),o=s[0];s[1];return o>i?1:-1}),this.setState({dataTableRecords:i});break;default:i=r&&"asc"===r[t]?n.sort(function(e,a){return e[t]>a[t]?1:-1}):n.sort(function(e,a){return a[t]>e[t]?1:-1}),this.setState({dataTableRecords:i})}r[t]="asc"===r[t]?"desc":"asc",this.setState({direction:r})}}},{key:"updateViewItems",value:function(e){if(e&&""!==e)if("number"!==typeof e&&"all"===e.toLowerCase()){var t=this.state.totalRecords;this.setNewGridRecords({prevCnt:0,nextCnt:t}),this.setState({viewItems:t})}else this.setNewGridRecords({prevCnt:0,nextCnt:parseFloat(e)}),this.setState({viewItems:e})}},{key:"renderFilter",value:function(){return r.a.createElement(f,{cssClassname:this.props.isFilterTrigged?"active":"",onCloseFilter:this.props.onCloseFilter,onSortyBy:this.sortBy,onUpdateViewItems:this.updateViewItems})}},{key:"setNewGridRecords",value:function(e){var t=e.prevCnt,a=e.nextCnt,n=this.state.gridData.slice(t,a);if(n.length)return this.setState({dataTableRecords:n}),n}},{key:"componentWillMount",value:function(){var e=this.props.gridData;this.setState({totalRecords:e.length,gridData:e})}},{key:"componentDidMount",value:function(){this.setNewGridRecords({prevCnt:0,nextCnt:this.props.defaultItems,viewItems:this.props.defaultItems})}},{key:"renderTable",value:function(){var e=this,t=this.state.dataTableRecords?this.state.dataTableRecords:[];if(t.length){var a=this.state.direction;return r.a.createElement("div",null,r.a.createElement("h2",null,"Books"),this.state.totalRecords?r.a.createElement(v,{gridData:this.state.gridData,defaultItems:5,onSetNewGridRecords:this.setNewGridRecords,handlePrevious:this.handlePrevious,handleNext:this.handleNext}):null,r.a.createElement("div",{className:this.state.viewItems>5?"grid-table-panel":""},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"8%"},r.a.createElement("a",{href:"#",onClick:function(){return e.sortBy("ID")}},"ID ",r.a.createElement(m.a,{icon:"asc"===a.ID?"caret-up":"caret-down"}))),r.a.createElement("td",{width:"15%"},r.a.createElement("a",{href:"#",onClick:function(){return e.sortBy("Title")}},"Title ",r.a.createElement(m.a,{icon:"asc"===a.Title?"caret-up":"caret-down"}))),r.a.createElement("td",{width:"40%"},"Description"),r.a.createElement("td",{width:"10%",className:"text-center"},r.a.createElement("a",{href:"#",onClick:function(){return e.sortBy("PageCount")}},"Page Count ",r.a.createElement(m.a,{icon:"asc"===a.PageCount?"caret-up":"caret-down"}))),r.a.createElement("td",{width:"10%",className:"text-right"},r.a.createElement("a",{href:"#",onClick:function(){return e.sortBy("PublishDate")}},"Publish Date ",r.a.createElement(m.a,{icon:"asc"===a.PublishDate?"caret-up":"caret-down"}))),r.a.createElement("td",{width:"12%",className:"text-center"},"Action"))),r.a.createElement("tbody",{className:"grid-table-panel"},t.map(function(e){return r.a.createElement("tr",{key:e.ID},r.a.createElement("td",null,e.ID),r.a.createElement("td",null,e.Title),r.a.createElement("td",null,e.Description),r.a.createElement("td",{className:"text-center"},e.PageCount),r.a.createElement("td",{className:"text-right"},new Date(e.PublishDate).getFullYear()),r.a.createElement("td",null,e.Description))})))),this.renderFilter())}}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderTable())}}]),t}(n.Component),E=(a(27),a(10)),C=a(15),y=a(9);E.b.add(C.a,y.c,y.d,y.e,y.g,y.f,y.b,y.a);var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isFilterTrigged:!1,flashOut:!1,heading:{title:"Getting your lab ready!",icon:["fas","mug-hot"]},fetchedData:[],defaultItems:5},a.showFilter=a.showFilter.bind(Object(h.a)(Object(h.a)(a))),a.closeFilter=a.closeFilter.bind(Object(h.a)(Object(h.a)(a))),a.flashHeader=a.flashHeader.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;p.fetchData("Books").then(function(t){e.setState({fetchedData:t});var a=e.state.heading;a.title="Welcome to Code Test Lab!",a.icon="",t&&(e.flashHeader(),e.setState({heading:a,flashOut:!e.state.flashOut}))})}},{key:"closeFilter",value:function(e){this.setState({isFilterTrigged:e})}},{key:"showFilter",value:function(){this.setState({isFilterTrigged:!this.state.isFilterTrigged})}},{key:"flashHeader",value:function(){document.querySelector("body").classList.add("flash-out")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,this.state.heading.title,"  ",r.a.createElement("br",null),this.state.heading.icon?r.a.createElement(m.a,{icon:this.state.heading.icon}):""),this.state.flashOut&&!this.state.isFilterTrigged?r.a.createElement("a",{href:"#",className:"filter-icon",onClick:function(t){e.showFilter(t)}},r.a.createElement(m.a,{icon:"cog"})):""),r.a.createElement("div",{className:"container-fluid app-body"},this.state.fetchedData.length?r.a.createElement(b,{gridData:this.state.fetchedData,defaultItems:this.state.defaultItems,isFilterTrigged:this.state.isFilterTrigged,onCloseFilter:this.closeFilter}):"No data to display!!"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.24a38d9a.chunk.js.map