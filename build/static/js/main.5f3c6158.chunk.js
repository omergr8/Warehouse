(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAoKCh0dHT7+/sjIyPl5eVpaWnw8PD8/Pz39/fz8/Orq6vT09Pp6elAQEB8fHyioqJXV1ezs7MtLS1PT09mZma/v7/Z2dlISEgLCwuIiIjFxcXf398ZGRk6OjqWlpZdXV0yMjKcnJyBgYETExNUTRjeAAAEHElEQVR4nO3ciVLqQBAFUBoim8omoBBBAvL/vyiLQsg2jZlO06l7PkD61nsp5s5MaDQAAAAAAAAAAAAAAAAAAAAAAAAAAADgQQSf2hNIC2ix0p5BVvBENOpqTyHpmJBorD2GoHNC+qrv4/ibkGjS1h5FyCUhUfisPYyIWEJav2hPIyGe8PA4vmrP499tQqJooD2Rb8mERJu+9kx+pRNS8017KK8yEhINP7TH8igzIVGrPo9jTkKiXU97NE9yE9L0XXs2P/ITUk16VVFCou8a9KrihLS036scCYm21nuVM6H5XsVIaLxXsRKa7lW8hJZ7FTchUcfoQo6f8NCrAu1p/+OehPRksVfdldBkr7ozocVe1bwzYeEGefetNZw2H8zdAYmaOQu5VfSPP/agZlm9KtSeyq9Ur+rNtEfybZlYyC20BxKwjS/kRtrTyIguvepVexQx4e8Gee0ewqv9aSHX1h5D1LFX7bSHEBY2Iu0RZO36jXsXt6Z0jl/9S+0p5CzO34m1Tbj+a8RT7UmEhJfT4o72KCLiJ/4v2sMIGN50xIH2OP4ld4jn2gN5Nkpd16jXsi3zpGasPZU/25zD75b2YL6Mc/e9J9qjedEqOmarQcRZ8YZ3YH2rxn1o0e+4tarHXTTbvdDHq3Zzu9dOWCczC7MHwA1WwqXFU8Mrd8LQ7AN45kpo/1Z0ccI6vGhSmNDwLZqrgoTpjsTVW7WdfIYolJtwUuZyKeOwdOctgkNOwrIXhL/dEat6BLITjktf8mbUxYq+ZrMSFnYkLsYGYzUXydMJZ56WaJE7YiXfRcmEa2//d3qMuljFejeR0OflvN6XO2IFbwPcJJz7XaJ1t+6I8ovCWEL/HWmwdiZ8Ei+e14QS30+M3f6p9B3yv4ShzO3YlTvil/C93HPCSGyZyLhos5D67LNjQtGXRj7dESPBjz8k3Ev/oAIjYkfy8wP5TYo3d8SR9AzCGOdSofaMJW3cETfaM5bEaMTWXwNkXD+1vinEaMTW3ztm3GWwvnXJuGRr+XjkIBi6Ixp/ebzPuP1m/AzhmXHOZTziwH3g3LR7FHvCqItbk69xXn24Iy6M/+QIoxFPjEdk1MW59owlMepiS3vGkhgXitGIHx6jEVd2gCrkgQ5QpTAase17Sqy6aL0R178ucl6Ntl4X69+In92/57C2/RNVnLoof4Aqq713RzR+95NRF4fG/xXddXFvfOfGWRet79scvBcGXBh/DE+KGvGkDgGL6qL1HZuLvLpofb8mJvsA1fpWxo2sumh9IyMhSgXcaI/kWzKi9WP9tN7tG6jWtzCy3NRF6xsY2WI3Xa0f6Ofp/jVi6/sz+dqnK8VLez8gync6QDW+ceGwoqn9tlTs1XrfBQAAAAAAAAAAAAAAAAAAAAAAAAAAqIUf92A+jyJz8XYAAAAASUVORK5CYII="},109:function(e,t,a){e.exports=a(182)},114:function(e,t,a){},115:function(e,t,a){},135:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a.n(o),r=a(15),n=a.n(r),l=(a(114),a(54)),i=a(3),c=(a(115),a(13)),d=a.n(c),h=a(27),u=a(106),p=a(101),g=a(102),m=a(108),y=a(107),f=a(22),_=a.n(f),v=a(103),w=a.n(v),S=a(104),A=(a(134),a(135),a(136),a(57)),k=a(0),b=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var o;return Object(p.a)(this,a),(o=t.call(this,e)).page=1,o.disable=!0,o.response_nodes=[],o.server_url="https://warehouse-22.herokuapp.com",o.onIsCollapsedChanging=function(e,t){var a=t.node,o=a.treeView;a.isCollapsed||(a.dataItem.items=[],o.loadTree(),localStorage.setItem("button_disable",!0)),a.isCollapsed&&localStorage.setItem("button_disable",!1)},o.getLazyData=function(e){var t=o.server_url+"/api/trees/warehouses",a="";localStorage.setItem("wdata_key",e.dataItem.key),localStorage.setItem("wdata_name",e.dataItem.warehouse),localStorage.setItem("node_level",e.level),localStorage.setItem("node_itemsSource",e.itemsSource),0===e.level?(console.log("in lazy load",e.dataItem.key),o.state.check_bool?(a=t+"?page=1&limit=10&warehouse="+String(e.dataItem.key),console.log("if id is(level0)",e.dataItem.key)):(a=t+"?page=1&limit=10&warehouse="+String(e.dataItem.key),console.log("else id is(level0)",e.dataItem.key))):o.state.check_bool?(a=t+"?page=1&limit=10&parent="+String(e.dataItem.key)+"&warehouse="+String(e.dataItem.warehouse),console.log("id is(level1) if",e.dataItem.key)):(a=t+"?page=1&limit=10&parent="+String(e.dataItem.key)+"&warehouse="+String(e.dataItem.warehouse),console.log("id is(level1) else",e.dataItem.key)),console.log("in lazy url is",a);var s=_.a.get(a).then((function(t){o.setState({hasMore:!0});var a=t.data.data.results;o.setState({total_item:t.data.data.total_results});var s=a.map((function(e){var t={};if(null!==e)return"category"===e.type&&(t.warehouse=e.warehouse),"category"===e.type||"warehouse"===e.type?(t.header=e.name,t.key=e._id,t.type=e.type,t.items=[]):"productCategory"===e.type&&(t.header=e.warehouse_product.title,t.key=e.warehouse_product._id,t.type=e.warehouse_product.type),t}));o.setState({RefreshTreeData:e.itemsSource});if(o.setState({wdata_category:[]}),o.setState({wdata_category:o.state.wdata_category.concat(s)}),0!==s.length&&("category"===s[0].type&&o.setState({wdata_category_length:s.length}),"product"===s[0].type&&"category"===o.state.wdata_category[0].type)){console.log("i am sec if");var r=Object(u.a)(o.state.wdata_category);r.splice(0,o.state.wdata_category_length),o.setState({wdata_category:r})}return o.setState({wdata_length:o.state.wdata_category.length}),o.setState({page:1}),o.page=1,o.state.wdata_category})),r=o._control2.selectedNode;return console.log("node is",r),o.disable=!0,s},o.fetchWarehouse=Object(h.a)(d.a.mark((function e(){var t,a,s,r,n,l,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("warehouse"===o._control2.selectedNode.dataItem.type&&(o.disable=!1),console.log("disable is",o.disable),!o.disable){e.next=30;break}if(t=o._control2.selectedNode,console.log("is collpse on start",t),a=localStorage.getItem("wdata_key"),s=localStorage.getItem("wdata_name"),r=localStorage.getItem("node_level"),n=o.server_url+"/api/trees/warehouses",l="",i=t.dataItem,console.log("node key is",i),void 0!==i&&(i=t.dataItem.key),i===a){e.next=25;break}return e.next=16,o.setState({check_bool:!0});case 16:return(!0===t.hasChildren&&!0===t.hasPendingChildren||"warehouse"===t.dataItem.type)&&(r="0"),c=t.treeView,t.dataItem.items.length=0,e.next=21,c.loadTree();case 21:a=t.dataItem.key,console.log("selected node is",t,"from local",a),e.next=26;break;case 25:o.setState({hasMore:!1});case 26:o.page++,console.log("node level is",r,o.page),"0"===r?(l=n+"?page="+o.page+"&limit=10&warehouse="+String(a),console.log("i am level 0",l)):(l=n+"?page="+o.page+"&limit=10&parent="+String(a)+"&warehouse="+String(s),console.log("i am level 1",l)),_.a.get(l).then(function(){var e=Object(h.a)(d.a.mark((function e(t){var a,s,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data.data.results,console.log("axios is",a,l),s=a.map((function(e){var t={};if(null!==e)return"category"===e.type&&(t.warehouse=e.warehouse),"category"===e.type||"warehouse"===e.type?(t.header=e.name,t.key=e._id,t.type=e.type,t.items=[]):"productCategory"===e.type&&(t.header=e.warehouse_product.title,t.key=e.warehouse_product._id,t.type=e.warehouse_product.type),t})),(r=o._control2.selectedNode).isCollapsed=!1,n=r.dataItem.items,console.log("node is",n,"tree data",s),null!==n&&Array.prototype.push.apply(n,s),e.next=10,o.set_length();case 10:return e.next=12,o.scroll_to();case 12:r.refresh();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 30:case"end":return e.stop()}}),e)}))),o.set_length=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o._control2.selectedNode,e.next=3,o.setState({wdata_length:t.dataItem.items.length});case 3:case"end":return e.stop()}}),e)}))),o.scroll_to=Object(h.a)(d.a.mark((function e(){var t,a,s,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o._control2,a=t.selectedNode.dataItem.items,s=a[a.length-1],console.log("i am square",a.length-1),console.log("last item is",t.itemsSource,s),e.next=7,o.findItem(t.itemsSource,s.key);case 7:return r=e.sent,e.next=10,t.getNode(r);case 10:return n=e.sent,console.log("the node is long.....",n,r),e.next=14,n.ensureVisible();case 14:case"end":return e.stop()}}),e)}))),o.disable_scroll=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==o.state.hasMore){e.next=5;break}return e.next=3,o.setState({hasMore:!1});case 3:e.next=8;break;case 5:if(!1!==o.state.hasMore){e.next=8;break}return e.next=8,o.setState({hasMore:!0});case 8:console.log(o.state.hasMore);case 9:case"end":return e.stop()}}),e)}))),o.myRef=s.a.createRef(),o.state={total_item:null,hasMore:!0,wdata_category:[],wdata_product:[],wdata_key:null,wdata_category_length:null,wdata_product_length:null,wdata_length:null,isAnimated:!0,autoCollapse:!0,expandOnClick:!0,check_bool:!1,check:null,page:1,button_disable:!0,theposition:null,treeData:[],RefreshTreeData:[],treeData2:[],allowDraggingParentNodes:!0,allowDroppingIntoEmpty:!0},o}return Object(g.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("check_render",!1),localStorage.setItem("button_disable",!0),this.loadInitialShopData(),this.loadInitialWarehouseData(),this.setState({})}},{key:"saveMappings",value:function(){console.log(this.UpdatedShopData),console.log(this.state.treeData),console.log(this.state.RefreshTreeData),this.loadInitialShopData(),this.loadInitialWarehouseData();var e=this.response_nodes;_.a.post(this.server_url+"/api/trees/shops",{selected_nodes:e}).then((function(e){console.log(e),console.log(e.data)})),this.response_nodes=[]}},{key:"refreshWareHouse",value:function(){localStorage.getItem("RefreshTreeData")&&this.setState({treeData:JSON.parse(localStorage.getItem("RefreshTreeData"))})}},{key:"render",value:function(){s.a.createRef();return s.a.createElement("div",{className:"container-fluid",style:{paddingLeft:"8%",paddingRight:"8%",paddingTop:"60px",paddingBottom:"60px"}},s.a.createElement("div",{className:"row",style:{height:"600px"}},s.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-5",style:{padding:"5%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},s.a.createElement("h3",null,"Ware Houses and products"),s.a.createElement("h2",null,this.state.wdata_length),s.a.createElement(S.a,{dataLength:this.state.wdata_length,next:this.fetchWarehouse,hasMore:this.state.hasMore,scrollableTarget:"scrollableDiv",scrollThreshold:"10px",loader:s.a.createElement("h4",null,"Loading...."),endMessage:s.a.createElement("p",{style:{textAlign:"center"}},s.a.createElement("b",null,"Yay! You have seen it all"))},s.a.createElement(A.a,{ref:this.myRef,"data-scroll-stash":"example","data-scroll-stash-anchor":".anchor",id:"scrollableDiv",className:"custom-tree is-active",itemsSource:this.state.treeData,displayMemberPath:"header",childItemsPath:"items",allowDragging:!0,dragStart:this.on_Drag_Start_From_WareHouse_Data.bind(this),dragOver:this.on_Drag_Over_Between_WareHouse.bind(this),initialized:this.initialized2.bind(this),autoCollapse:!0,expandOnClick:!0,lazyLoadFunction:this.warehouseLazyLoad.bind(this),isCollapsedChanging:this.onIsCollapsedChanging.bind(this)}))),s.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2",style:{textAlign:"center"}},s.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.saveMappings.bind(this)},"Save Mappings"),s.a.createElement("button",{type:"button",className:"btn btn-danger float-right btn-block",onClick:this.disable_scroll.bind(this)},"Stop Scroll"),s.a.createElement("h2",null,this.state.wdata_length),s.a.createElement("img",{src:w.a,alt:"Mapping",height:"40%",width:"80%",style:{paddingTop:"80%"}})),s.a.createElement("div",{className:"col-lg-5 col-md-5 col-sm-5",style:{padding:"5%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},s.a.createElement("h3",null,"Shops"),s.a.createElement("button",{id:"btnRemove",className:"btn btn-warning",onClick:this.onRemoveClick.bind(this)},"Remove Selected Node"),s.a.createElement(A.a,{className:"custom-tree",itemsSource:this.state.treeData2,displayMemberPath:"header",childItemsPath:"items",allowDragging:!0,dragEnd:this.on_Drag_End_Toward_Shop_Data.bind(this),dragOver:this.on_Drag_Over_Between_WareHouse_And_Shop.bind(this),selectedItemChanged:this.onSelectedItemChanged.bind(this),initialized:this.initialized.bind(this),lazyLoadFunction:this.shopLazyLoad.bind(this)}))))}},{key:"initTreeView",value:function(e){this._wjTreeViewControl=e}},{key:"initialized",value:function(e){this._control=e,this._control.selectedItem=this._control.itemsSource[0]}},{key:"initialized2",value:function(e){this._control2=e,this._control2.selectedItem=this._control2.itemsSource[0]}},{key:"onSelectedItemChanged",value:function(){var e=document.getElementById("btnRemove");k.setAttribute(e,"disabled",this._control.selectedItem?null:"disabled")}},{key:"onRemoveClick",value:function(){var e=this._control;if(e.selectedItem){var t=e.selectedNode.parentNode,a=t?t.dataItem[e.childItemsPath]:e.itemsSource,o=a.indexOf(e.selectedItem);a.splice(o,1),e.loadTree()}}},{key:"getRefreshTreeData",value:function(){return this.state.RefreshTreeData}},{key:"onCustomCSSClick",value:function(e){k.toggleClass(this._wjTreeViewControl.hostElement,"custom-tree",e.target.checked),this.setState({customCSS:!0})}},{key:"on_Drag_End_Toward_Shop_Data",value:function(e,t){console.log(e),this.setState({treeData:JSON.parse(localStorage.getItem("RefreshTreeData"))}),this.UpdatedShopData=e.itemsSource,this.setState({treeData2:this.UpdatedShopData});var a=JSON.parse(JSON.stringify(e.selectedNode.dataItem));a.parent=null,e.selectedNode.parentNode&&(a.parent=e.selectedNode.parentNode.dataItem),this.response_nodes.push(a),console.log(this.response_nodes)}},{key:"on_Drag_Start_From_WareHouse_Data",value:function(e,t){console.log("drad",e.itemsSource),localStorage.setItem("RefreshTreeData",JSON.stringify(e.itemsSource)),t&&t.node&&t.node.hasChildren&&(t.node.isCollapsed=!0)}},{key:"on_Drag_Over_Between_WareHouse_And_Shop",value:function(e,t){var a=t.dragSource.treeView,o=t.dropTarget.treeView;a===o&&(t.cancel=!0),a!==o&&(t.cancel=!1)}},{key:"on_Drag_Over_Between_WareHouse",value:function(e,t){var a=t.dragSource.treeView,o=t.dropTarget.treeView;a===o&&(t.cancel=!0),a!==o&&(t.cancel=!0)}},{key:"setAllowDrag1",value:function(){this.setState({allowDrag1:!this.state.allowDrag1})}},{key:"setAllowDrag2",value:function(){this.setState({allowDrag2:!this.state.allowDrag2})}},{key:"loadInitialShopData",value:function(){var e=this,t=this.server_url+"/api/trees/shops";_.a.get(t+"?page=1&limit=30").then((function(t){var a=t.data.data.results.map((function(e){var t={};if(null!==e)return"category"===e.type?(t.header=e.name,t.key=e._id,t.type=e.type,t.items=[]):"productCategory"===e.type&&(t.header=e.warehouse_product.title,t.key=e.warehouse_product._id,t.type=e.warehouse_product.type),t}));e.setState({treeData2:a})}))}},{key:"loadInitialWarehouseData",value:function(){var e=this,t=this.server_url+"/api/trees/warehouses";_.a.get(t+"?page=1&limit=30").then((function(t){var a=t.data.data.results.map((function(e){var t={};return"warehouse"===e.type&&(t.header=e.name,t.key=e._id,t.type=e.type,t.items=[]),console.log(t),t}));e.setState({treeData:a,RefreshTreeData:a})}))}},{key:"shopLazyLoad",value:function(e,t){var a=this.server_url+"/api/trees/shops"+"?page=1&limit=30&parent="+String(e.dataItem.key);_.a.get(a).then((function(e){var a=e.data.data.results.map((function(e){var t={};return"category"===e.type?(t.header=e.name,t.key=e._id,t.type=e.type,t.items=[]):"productCategory"===e.type&&(t.header=e.warehouse_product.title,t.key=e.warehouse_product._id,t.type=e.warehouse_product.type),t}));t(a)}))}},{key:"warehouseLazyLoad",value:function(e,t){var a=this;setTimeout((function(){a.getLazyData(e).then((function(e){console.log("result is",e),t(e)}))}),100)}},{key:"findItem",value:function(e,t){for(var a=0;a<e.length;a++){var o=e[a];if(console.log("in for",o.key,t),o.key===t)return o;if(o.items&&(o=this.findItem(o.items,t)))return o}return null}}]),a}(o.Component);var I=function(){return s.a.createElement(l.a,null,s.a.createElement("div",{className:"App",style:{paddingTop:"20px"}},s.a.createElement(l.b,{to:"/mappings"},s.a.createElement("button",{className:"btn btn btn-success"},"Go to Mappings"))),s.a.createElement(i.c,null,s.a.createElement(i.a,{path:"/mappings",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(141),a(178),a(179),a(181);n.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.5f3c6158.chunk.js.map