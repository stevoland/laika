"use strict";(self.webpackChunkapollo_testing_toolkit_link_docs=self.webpackChunkapollo_testing_toolkit_link_docs||[]).push([[133],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6333:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],a={id:"pitfalls",title:"Pitfalls",sidebar_label:"Pitfalls",custom_edit_url:null,hide_title:!0},c="Pitfalls",s={unversionedId:"pitfalls",id:"pitfalls",isDocsHomePage:!1,title:"Pitfalls",description:"Interceptor specificity vs ordering",source:"@site/docs/pitfalls.md",sourceDirName:".",slug:"/pitfalls",permalink:"/docs/pitfalls",editUrl:null,tags:[],version:"current",frontMatter:{id:"pitfalls",title:"Pitfalls",sidebar_label:"Pitfalls",custom_edit_url:null,hide_title:!0},sidebar:"default",previous:{title:"Logging and recording",permalink:"/docs/logging-and-recording"},next:{title:"ApolloTestingToolkit.TestingToolkitInterceptionManager",permalink:"/docs/api/classes/ApolloTestingToolkit.TestingToolkitInterceptionManager"}},p=[{value:"Interceptor specificity vs ordering",id:"interceptor-specificity-vs-ordering",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("h2",{id:"interceptor-specificity-vs-ordering"},"Interceptor specificity vs ordering"),(0,o.kt)("p",null,"Every interceptor you create should be as specific as needed in a given session. At the very least, ensure the order of creating interceptors is from most specific, to least specific."),(0,o.kt)("p",null,"This is because any operations that are executed by your client will end up being intercepted\nby the ",(0,o.kt)("strong",{parentName:"p"},"first")," interceptor that matches the constraints of the ",(0,o.kt)("a",{parentName:"p",href:"api/modules/typedefs#matcher"},(0,o.kt)("em",{parentName:"a"},"Matcher")),"."),(0,o.kt)("p",null,"To ilustrate, think about what would happen if you did this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const absolutelyEverythingInterceptor = apolloTestingToolkit.intercept(/* no constraints */);\n\nconst onlyActiveUsersInterceptor = apolloTestingToolkit.intercept({\n  clientName: 'users',\n  operationName: 'getActiveUsers',\n});\n\n// this will not work:\nonlyActiveUsersInterceptor.mockResultOnce(\n  {result: {data: {users: [{id: 1, name: 'Mouse'}, {id: 2, name: 'Bamboo'}]}}},\n);\n")),(0,o.kt)("p",null,"Now, say a React component with ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery(getActiveUsersQuery)")," is mounted.\nOur mocked result will not end up being sent to the React component.\nWhy? Because the first interceptor that satisfied all constraints (i.e. ",(0,o.kt)("em",{parentName:"p"},"none"),"),\nwas actually ",(0,o.kt)("inlineCode",{parentName:"p"},"absolutelyEverythingInterceptor"),"."),(0,o.kt)("p",null,"Since we haven't configured any behavior for this interceptor, it will passthrough\nthe request to the backend."),(0,o.kt)("p",null,"However if you'd reverse the order of creation of each intercept, this would work correctly."))}f.isMDXComponent=!0}}]);