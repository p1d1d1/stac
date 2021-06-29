(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"53ca":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}},"556b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.errored?r("b-alert",{attrs:{variant:"danger",show:""}},[r("p",[t._v(t._s(t._entity.message))]),r("p",[t._v("Please note that some servers don't allow external access via web browsers (e.g., when CORS headers are not present).")]),r("p",[t._v("Errored URL: "+t._s(t.url))]),r("p",[r("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Go back")])])]):t.loaded?r("b-container",{class:t.loaded&&"loaded"},[r("b-row",[r("b-col",{attrs:{md:"12"}},[r("header",[r("b-breadcrumb",{attrs:{items:t.breadcrumbs}})],1)])],1),r("b-row",[r("b-col",{attrs:{md:t.keywords.length>0||null!=t.license||t.spatialExtent.length>0?8:12}},[r("h1",{staticClass:"scroll"},[t._v(t._s(t.title))]),t.version?r("p",[r("small",[t._v("Version "+t._s(t.version))])]):t._e(),r("p",{staticClass:"scroll"},[r("small",[r("a",{attrs:{href:t.url,target:"_blank"}},[r("code",[t._v(t._s(t.url))])])])]),t.description?r("div",{domProps:{innerHTML:t._s(t.description)}}):t._e(),r("b-tabs",{attrs:{value:t.tabIndex},on:{input:t.selectTab,"activate-tab":t.activateTab}},[r("b-tab",{key:"collections",attrs:{disabled:!this.collectionCount,title:"Collections"}},[r("b-table",{attrs:{items:t.collections,fields:t.collectionFields,"per-page":t.childrenPerPage,"current-page":t.currentCollectionPage,outlined:!0,responsive:"",small:"",striped:""},scopedSlots:t._u([{key:"cell(link)",fn:function(e){return[r("router-link",{attrs:{to:e.item.to}},[t._v(t._s(e.item.id))])]}}])}),t.collectionCount>t.childrenPerPage?r("b-pagination",{attrs:{limit:15,"total-rows":t.collectionCount,"per-page":t.childrenPerPage,"hide-goto-end-buttons":!0},model:{value:t.currentCollectionPage,callback:function(e){t.currentCollectionPage=e},expression:"currentCollectionPage"}}):t._e()],1),r("b-tab",{key:"catalogs",attrs:{disabled:!this.childCount,title:"Catalogs"}},[r("b-table",{attrs:{items:t.children,fields:t.childFields,"per-page":t.childrenPerPage,"current-page":t.currentChildPage,outlined:!0,responsive:"",small:"",striped:""},scopedSlots:t._u([{key:"cell(link)",fn:function(e){return[r("router-link",{attrs:{to:e.item.to}},[t._v(t._s(e.item.title))])]}}])}),t.childCount>t.childrenPerPage?r("b-pagination",{attrs:{limit:15,"total-rows":t.childCount,"per-page":t.childrenPerPage,"hide-goto-end-buttons":!0},model:{value:t.currentChildPage,callback:function(e){t.currentChildPage=e},expression:"currentChildPage"}}):t._e()],1),r("b-tab",{key:"items",attrs:{disabled:!this.hasExternalItems&&!this.itemCount,title:"Items"}},[r("b-table",{attrs:{items:t.items,fields:t.itemFields,"per-page":t.itemsPerPage,"current-page":t.currentItemListPage,"sort-compare":t.sortCompare,outlined:!0,responsive:"",small:"",striped:""},scopedSlots:t._u([{key:"cell(link)",fn:function(e){return[r("router-link",{attrs:{to:e.item.to}},[t._v(t._s(e.item.title))])]}}])}),t.itemCount>t.itemsPerPage?r("b-pagination",{attrs:{limit:15,"total-rows":t.itemCount,"per-page":t.itemsPerPage,"hide-goto-end-buttons":!0},model:{value:t.currentItemPage,callback:function(e){t.currentItemPage=e},expression:"currentItemPage"}}):t._e()],1),this.bands.length>0?r("b-tab",{key:"bands",attrs:{title:"Bands"}},[r("b-table",{attrs:{items:t.bands,fields:t.bandFields,responsive:"",small:"",striped:""}})],1):t._e(),this.thumbnail?r("b-tab",{attrs:{title:"Thumbnail"}},[r("a",{attrs:{href:t.thumbnail}},[r("img",{attrs:{id:"thumbnail",align:"center",src:t.thumbnail}})])]):t._e(),this.assets.length?r("b-tab",{key:"assets",attrs:{title:"Assets"}},[r("AssetTab",{attrs:{assets:t.assets,bands:t.bands,hasBands:t.hasBands}})],1):t._e(),this.shownLinks.length?r("b-tab",{key:"links",attrs:{title:"Links"}},[r("LinkTab",{attrs:{links:t.shownLinks}})],1):t._e(),this.zarrMetadataUrl?r("b-tab",{key:"zarr-metadata",attrs:{title:"Zarr Metadata"}},[r("ZarrMetadataTab",{attrs:{"zarr-metadata-url":t.zarrMetadataUrl}})],1):t._e()],1)],1),t.keywords.length>0||null!=t.license||t.spatialExtent.length>0?r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{"bg-variant":"light"}},[t.spatialExtent.length>0?r("div",{attrs:{id:"locator-map"}}):t._e(),r("MetadataSidebar",{attrs:{summaries:t.summaries,stacVersion:t.stacVersion,keywords:t.keywords,license:t.license,temporalExtent:t.temporalExtent,providers:t.providers}})],1)],1):t._e()],1)],1):r("b-spinner",{attrs:{label:"Loading..."}}),r("footer",{staticClass:"footer"},[r("b-container",[r("span",{staticClass:"poweredby text-muted"},[t._v(" Powered by "),r("a",{attrs:{href:"https://github.com/radiantearth/stac-browser"}},[t._v("STAC Browser")]),t._v(" v"+t._s(t.browserVersion)+" ")])])],1)],1)},a=[],i=r("3835"),s=r("53ca"),o=r("1da1"),l=r("5530"),c=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("7db0"),r("d81d"),r("ac1f"),r("5319"),r("8a79"),r("a15b"),r("caad"),r("2532"),r("99af"),r("a4d3"),r("e01a"),r("4de4"),r("b0c0"),r("c740"),r("fb6a"),r("25f0"),r("a9e3"),r("e11e")),u=r.n(c),d=r("2f62"),h=r("791e"),p=r("7f1d"),b=r.n(p),m=r("e0eb"),f=r("199e"),g=r("720b"),y=25,v=Object(l["a"])(Object(l["a"])({},h["a"]),{},{name:"Catalog",props:{ancestors:{type:Array,required:!0},path:{type:String,required:!0},resolve:{type:Function,required:!0},slugify:{type:Function,required:!0},url:{type:String,required:!0}},components:{LinkTab:f["a"],AssetTab:g["a"],MetadataSidebar:function(){return r.e("metadata-sidebar").then(r.bind(null,"5b84"))},ZarrMetadataTab:function(){return r.e("zarr-metadata-tab").then(r.bind(null,"189a"))}},data:function(){return{stacVersion:null,externalItemCount:0,externalItemsPerPage:0,externalItemPaging:!1,childFields:[{key:"link",label:"Title",sortable:!0}],collectionFields:[{key:"link",label:"Identifier",sortable:!1},{key:"title",label:"Title",sortable:!0}],currentChildPage:1,currentCollectionPage:1,childrenPerPage:25,itemFields:[{key:"link",label:"Title",sortable:!1},{key:"dateAcquired",label:"Date Acquired",sortable:!0,formatter:function(t){if(null!=t){var e=new Date(t);return isNaN(e.getTime())?"":e.toUTCString()}return""}}],currentItemPage:1,currentItemListPage:1,locatorMap:null,tabIndex:0,tabsChanged:!1}},asyncComputed:{collections:{default:[],lazy:!0,get:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.links.find((function(t){return"data"===t.rel})),void 0!==r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.prev=3,e.next=6,Object(m["a"])(r.href);case 6:if(n=e.sent,n.ok){e.next=14;break}return e.t0=console,e.next=11,n.text();case 11:return e.t1=e.sent,e.t0.warn.call(e.t0,e.t1),e.abrupt("return",[]);case 14:return e.next=16,n.json();case 16:if(a=e.sent,a&&Array.isArray(a.collections)){e.next=24;break}return e.t2=console,e.next=21,n.text();case 21:return e.t3=e.sent,e.t2.warn.call(e.t2,e.t3),e.abrupt("return",[]);case 24:return i=a.collections.map((function(e){var n=t.path.replace(/^\/collection/,"");n.endsWith("/")||(n+="/");var a=r.href+"/collections/"+e.id;if(Array.isArray(e.links)){var i=e.links.find((function(t){return"self"==t.rel}));i&&i.href&&(a=i.href)}var s=t.resolve(a,t.url),o=t.slugify(s),l=[n,o].join("");return Object.assign(e,{path:a,to:l,title:e.title||e.id||a,url:s})})),e.abrupt("return",i);case 28:return e.prev=28,e.t4=e["catch"](3),console.warn(e.t4),e.abrupt("return",[]);case 32:case"end":return e.stop()}}),e,null,[[3,28]])})))()}},externalItems:{default:[],lazy:!0,get:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.links.find((function(t){return"items"===t.rel})),void 0!==r){e.next=3;break}return e.abrupt("return",[]);case 3:return e.prev=3,n=r.href.includes("?")?"&":"?",e.next=7,Object(m["a"])("".concat(r.href).concat(n,"page=").concat(t.currentItemPage));case 7:if(a=e.sent,a.ok){e.next=15;break}return e.t0=console,e.next=12,a.text();case 12:return e.t1=e.sent,e.t0.warn.call(e.t0,e.t1),e.abrupt("return",[]);case 15:return e.next=17,a.json();case 17:return i=e.sent,null!=i.context?(t.externalItemCount=i.context.matched,t.externalItemsPerPage=i.context.limit,t.externalItemPaging=!0):t.externalItemCount=i.features.length,s=t.path.replace(/^\/collection/,""),o=i.features.map((function(e,a){return{item:e,to:"/item".concat(s,"/").concat(t.slugify("".concat(r.href).concat(n,"page=").concat(t.currentItemPage,"#").concat(a))),title:e.properties.title||e.id,dateAcquired:e.properties.datetime}})),e.abrupt("return",o);case 24:return e.prev=24,e.t2=e["catch"](3),console.warn(e.t2),e.abrupt("return",[]);case 28:case"end":return e.stop()}}),e,null,[[3,24]])})))()}}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])({},h["a"].computed),Object(d["c"])(["getEntity"])),{},{_entity:function(){var t=this.getEntity(this.url);if(t instanceof Error)return t;this.stacVersion=t.stac_version;var e=JSON.parse(JSON.stringify(t));return b.a.stac(e)},_description:function(){return this.catalog.description},_items:function(){return this.links.filter((function(t){return"item"===t.rel}))},_license:function(){return this.catalog.license||this.rootCatalog&&this.rootCatalog.license},_title:function(){return this.catalog.title},bands:function(){return Array.isArray(this.summaries["eo:bands"])?this.summaries["eo:bands"]:[]},catalog:function(){return this.entity},collectionCount:function(){return this.collections.length},childCount:function(){return this.children.length},children:function(){var t=this;return this.links.filter((function(t){return"child"===t.rel})).map((function(e){var r=t.path.replace(/^\/collection/,"");r.endsWith("/")||(r+="/");var n=t.resolve(e.href,t.url),a=t.slugify(n),i=[r,a].join("");return{path:e.href,to:i,title:e.title||e.id||e.href,url:n}}))},extent:function(){return this.catalog.extent||this.rootCatalog&&this.rootCatalog.extent||{}},hasExternalItems:function(){return null!=this.links.find((function(t){return"items"===t.rel}))},itemCount:function(){return this.hasExternalItems?this.externalItemCount:this.links.filter((function(t){return"item"===t.rel})).length},items:function(){var t=this,e=(this.currentItemPage-1)*this.itemsPerPage,r=this.currentItemPage*this.itemsPerPage;return this.hasExternalItems?this.externalItems:this._items.map((function(n,a){var i=t.resolve(n.href,t.url);a>=e&&a<r&&t.load(i);var s=t.getEntity(i);return null!=s?{item:s,to:"/item".concat(t.path,"/").concat(t.slugify(i)),title:s.properties.title||n.title||s.id||n.href,dateAcquired:s.properties.datetime}:{to:"/item".concat(t.path,"/").concat(t.slugify(i)),title:n.title||n.href,url:i}}))},itemsPerPage:function(){return this.externalItemPaging?this.externalItemsPerPage:y},jsonLD:function(){var t=this.providers.reduce((function(t,e){var r=Array.isArray(e.roles)?e.roles:[];return r.reduce((function(t,r){switch(r){case"licensor":t.copyrightHolder=t.copyrightHolder||[],t.copyrightHolder.push({"@type":"Organization",description:e.description,name:e.name,url:e.url});break;case"producer":t.producer=t.producer||[],t.producer.push({"@type":"Organization",description:e.description,name:e.name,url:e.url});break;case"processor":t.contributor=t.contributor||[],t.contributor.push({"@type":"Organization",description:e.description,name:e.name,url:e.url});break;case"host":t.provider=t.provider||[],t.provider.push({"@type":"Organization",description:e.description,name:e.name,url:e.url});break}return t}),t)}),{"@context":"https://schema.org/","@type":"DataCatalog",name:this.title,description:this.description,citation:this.catalog["sci:citation"],identifier:this.catalog["sci:doi"]||this.catalog.id,keywords:this.keywords,license:this.licenseUrl,isBasedOn:this.url,version:this.version,url:this.path,workExample:(this.catalog["sci:publications"]||[]).map((function(t){return{identifier:t.doi,citation:t.citation}})),hasPart:this.children.map((function(t){var e=t.title,r=t.to,n=t.url;return{"@type":"DataCatalog",name:e,isBasedOn:n,url:r}})),dataset:this.items.map((function(t){var e=t.item,r=t.title,n=t.to,a=t.url;return{identifier:e?e.id:void 0,name:r,isBasedOn:a,url:n}}))}),e=this.breadcrumbs[this.breadcrumbs.length-1];return null!=e&&(t.isPartOf={"@type":"DataCatalog",name:e.text,isBasedOn:e.url,url:e.to}),this.spatialExtent.length>0&&(t.spatialCoverage={"@type":"Place",geo:{"@type":"GeoShape",box:this.spatialExtent[0].join(" ")}}),this.isTemporalExtentUnbounded||(t.temporalCoverage=this.temporalExtent[0].map((function(t){return t||".."})).join("/")),t},spatialExtent:function(){var t=this.extent.spatial;return t&&"object"===Object(s["a"])(t)&&Array.isArray(t.bbox)?t.bbox.filter((function(t){return Array.isArray(t)&&t.length>=4})):[]},summaries:function(){return this.catalog.summaries||{}},temporalExtent:function(){var t=this.extent.temporal;return t&&"object"===Object(s["a"])(t)&&Array.isArray(t.interval)?t.interval.filter((function(t){return Array.isArray(t)&&2===t.length})):[]},isTemporalExtentUnbounded:function(){return!(this.temporalExtent.length>0)||this.temporalExtent[0].findIndex((function(t){return"string"===typeof t}))>=0},version:function(){return this.catalog.version}}),watch:Object(l["a"])(Object(l["a"])({},h["a"].watch),{},{currentChildPage:function(t,e){t!==e&&this.updateState({cp:t})},currentItemPage:function(t,e){t!==e&&this.updateState({ip:t})},collections:function(){this.tabsChanged||this.$route.query.t&&"0"!==this.$route.query.t||!(this.collections.length>0)||this.selectTab(0)},externalItems:function(){this.tabsChanged||this.$route.query.t&&"2"!==this.$route.query.t||!(this.externalItems.length>0)||this.selectTab(2)}}),methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},h["a"].methods),Object(d["b"])(["load"])),{},{initialize:function(){var t=this;this.spatialExtent.length>0&&this.$nextTick((function(){return t.initializeLocatorMap()})),this.syncWithQueryState()},initializeLocatorMap:function(){if(null!=this.locatorMap&&this.locatorMap.remove(),0!==this.spatialExtent.length){var t;this.locatorMap=u.a.map("locator-map",{attributionControl:!1,zoomControl:!1,boxZoom:!1,doubleClickZoom:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1}),u.a.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png",{attribution:'Map data <a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(this.locatorMap),u.a.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}@2x.png",{zIndex:1e3}).addTo(this.locatorMap),t=this.spatialExtent.length>1?this.spatialExtent.slice(1):this.spatialExtent;var e=[t.map((function(t){var e=Object(i["a"])(t,4),r=e[0],n=e[1],a=e[2],s=e[3];return[[r,n],[r,s],[a,s],[a,n],[r,n]]}))],r=u.a.geoJSON({type:"MultiPolygon",coordinates:e},{pane:"tilePane",style:{weight:2,color:"#ffd65d",opacity:1,fillOpacity:.15}}).addTo(this.locatorMap);this.locatorMap.fitBounds(r.getBounds(),{padding:[95,95]})}},selectTab:function(t){var e=this;"number"!==typeof t&&(t=parseInt(t,10),isNaN(t))||(this.tabsChanged&&this.tabIndex!==t&&this.updateState({t:t}),this.$nextTick((function(){e.tabIndex=t})))},activateTab:function(){this.tabsChanged=!0},sortCompare:function(t,e,r){return"link"===r&&(r="title"),null==t[r]?-1:null==e[r]?1:"number"===typeof t[r]&&"number"===typeof e[r]?t[r]<e[r]?-1:t[r]>e[r]?1:0:t[r].toString().localeCompare(e[r].toString(),void 0,{numeric:!0})},syncWithQueryState:function(){this.selectTab(this.$route.query.t),this.currentChildPage=Number(this.$route.query.cp)||1,this.currentItemPage=Number(this.$route.query.ip)||1,this.currentItemListPage=this.hasExternalItems?1:this.currentItemPage}})}),x=v,k=(r("bf67"),r("adc6"),r("2877")),P=Object(k["a"])(x,n,a,!1,null,"74c8c351",null);e["default"]=P.exports},"8a79":function(t,e,r){"use strict";var n=r("23e7"),a=r("06cf").f,i=r("50c4"),s=r("5a34"),o=r("1d80"),l=r("ab13"),c=r("c430"),u="".endsWith,d=Math.min,h=l("endsWith"),p=!c&&!h&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(t){var e=String(o(this));s(t);var r=arguments.length>1?arguments[1]:void 0,n=i(e.length),a=void 0===r?n:d(i(r),n),l=String(t);return u?u.call(e,l,a):e.slice(a-l.length,a)===l}})},adc6:function(t,e,r){"use strict";r("f4bf")},bf67:function(t,e,r){"use strict";r("f177")},c740:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").findIndex,i=r("44d2"),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},f177:function(t,e,r){},f4bf:function(t,e,r){}}]);
//# sourceMappingURL=catalog.1b45ceb6.js.map