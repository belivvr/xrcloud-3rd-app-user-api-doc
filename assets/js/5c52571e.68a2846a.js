"use strict";(self.webpackChunkxrcloud_3rd_app_user_api_doc=self.webpackChunkxrcloud_3rd_app_user_api_doc||[]).push([[476],{9613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5079:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=t(2848),i=t(9213),s=(t(9496),t(9613)),a=["components"],o={sidebar_position:2},p="Scenes",c={unversionedId:"api/scenes",id:"api/scenes",title:"Scenes",description:"API Address",source:"@site/docs/api/scenes.md",sourceDirName:"api",slug:"/api/scenes",permalink:"/docs/xrcloud/docs/api/scenes",editUrl:"https://github.com/belivvr/docs/xrcloud/tree/main/docs/docs/api/scenes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/docs/xrcloud/docs/api/authorization"},next:{title:"Avatars",permalink:"/docs/xrcloud/docs/api/avatars"}},l={},u=[{value:"API Address",id:"api-address",level:3},{value:"Description",id:"description",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:3},{value:"API Address",id:"api-address-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Response",id:"response-1",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"scenes"},"Scenes"),(0,s.kt)("h3",{id:"api-address"},"API Address"),(0,s.kt)("p",null,"[GET]"," ",(0,s.kt)("inlineCode",{parentName:"p"},"https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes")),(0,s.kt)("h3",{id:"description"},"Description"),(0,s.kt)("p",null,"Get all ",(0,s.kt)("inlineCode",{parentName:"p"},"scene")," registered in your Application."),(0,s.kt)("h3",{id:"headers"},"Headers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Authorization: Bearer refresh_token\n")),(0,s.kt)("h3",{id:"response"},"Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'Http Status: 200 OK\nContent-Type: application/json\n\n[\n  {\n    "resourceId": "scene1 id",\n    "resourceType": "SCENE",\n    "active": true,\n    "name": "scene1",\n    "publishType": "PUBLIC",\n    "thumbnailUrl": "https://scene-thumbnail-url",\n    "insertedAt": "2022-04-30T07:28:06.574Z",\n    "updatedAt": "2022-04-30T07:28:06.574Z"\n  },\n  {\n    "resourceId": "scene2 id",\n    "resourceType": "SCENE",\n    "active": true,\n    "name": "scene2",\n    "publishType": "PUBLIC",\n    "thumbnailUrl": "https://scene-thumbnail-url",\n    "insertedAt": "2022-04-30T07:28:06.574Z",\n    "updatedAt": "2022-04-30T07:28:06.574Z"\n  }\n]\n')),(0,s.kt)("h3",{id:"api-address-1"},"API Address"),(0,s.kt)("p",null,"[GET]"," ",(0,s.kt)("inlineCode",{parentName:"p"},"https://3rd-api.xrcloud.belivvr.com/v1/apps/{appId}/resources/scenes/{sceneId}")),(0,s.kt)("h3",{id:"description-1"},"Description"),(0,s.kt)("p",null,"Get a ",(0,s.kt)("inlineCode",{parentName:"p"},"scene")," registered in your Application."),(0,s.kt)("h3",{id:"headers-1"},"Headers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Authorization: Bearer refresh_token\n")),(0,s.kt)("h3",{id:"response-1"},"Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'Http Status: 200 OK\nContent-Type: application/json\n\n{\n  "resourceId": "scene1 id",\n  "resourceType": "SCENE",\n  "active": true,\n  "name": "scene1",\n  "publishType": "PUBLIC",\n  "thumbnailUrl": "https://scene-thumbnail-url",\n  "insertedAt": "2022-04-30T07:28:06.574Z",\n  "updatedAt": "2022-04-30T07:28:06.574Z"\n}\n')))}m.isMDXComponent=!0}}]);