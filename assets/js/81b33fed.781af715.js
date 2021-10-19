"use strict";(self.webpackChunkapollo_testing_toolkit_link_docs=self.webpackChunkapollo_testing_toolkit_link_docs||[]).push([[132],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),k=s(n),g=i,d=k["".concat(p,".").concat(g)]||k[g]||u[g]||l;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5376:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var o=n(3117),i=n(102),l=(n(7294),n(3905)),r=["components"],a={id:"ApolloTestingToolkit",title:"Module: ApolloTestingToolkit",sidebar_label:"ApolloTestingToolkit",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/modules/ApolloTestingToolkit",id:"api/modules/ApolloTestingToolkit",isDocsHomePage:!1,title:"Module: ApolloTestingToolkit",description:"Testing Toolkit's InterceptionManager",source:"@site/docs/api/modules/ApolloTestingToolkit.md",sourceDirName:"api/modules",slug:"/api/modules/ApolloTestingToolkit",permalink:"/apollo-testing-toolkit-link/docs/api/modules/ApolloTestingToolkit",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ApolloTestingToolkit",title:"Module: ApolloTestingToolkit",sidebar_label:"ApolloTestingToolkit",sidebar_position:0,custom_edit_url:null},sidebar:"default",previous:{title:"How to install in your project",permalink:"/apollo-testing-toolkit-link/docs/how-to-install"},next:{title:"Usage in Cypress",permalink:"/apollo-testing-toolkit-link/docs/usage-in-cypress"}},c=[{value:"Classes",id:"classes",children:[],level:2}],u={toc:c};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Testing Toolkit's ",(0,l.kt)("a",{parentName:"p",href:"../classes/ApolloTestingToolkit.TestingToolkitInterceptionManager"},(0,l.kt)("inlineCode",{parentName:"a"},"InterceptionManager")),"\nis the place where most of the magic happens.\nAll the operations are routed through the it, and the manager can decide what happens to them along the way.\nBy default every connection is passed through and no additional action is taken."),(0,l.kt)("p",null,"By default, an instance of the manager is installed as ",(0,l.kt)("inlineCode",{parentName:"p"},"apolloTestingToolkit")," property\non the global object (most likely ",(0,l.kt)("inlineCode",{parentName:"p"},"window"),"), accessible as ",(0,l.kt)("inlineCode",{parentName:"p"},"window.apolloTestingToolkit"),"\nor simply as ",(0,l.kt)("inlineCode",{parentName:"p"},"apolloTestingToolkit"),"."),(0,l.kt)("p",null,"Key functionality:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../classes/ApolloTestingToolkit.TestingToolkitInterceptionManager#intercept"},(0,l.kt)("inlineCode",{parentName:"a"},"apolloTestingToolkit.intercept()")),":"),(0,l.kt)("p",{parentName:"li"},"If you use ",(0,l.kt)("inlineCode",{parentName:"p"},"jest"),", you can think of the toolkit like the ",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," global,\nwhere the equivalent of ",(0,l.kt)("inlineCode",{parentName:"p"},"jest.fn()")," is ",(0,l.kt)("a",{parentName:"p",href:"../classes/ApolloTestingToolkit.TestingToolkitInterceptionManager#intercept"},(0,l.kt)("inlineCode",{parentName:"a"},"apolloTestingToolkit.intercept()")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../classes/ApolloTestingToolkit.LogApi"},(0,l.kt)("inlineCode",{parentName:"a"},"apolloTestingToolkit.log"))),(0,l.kt)("p",{parentName:"li"},"The other thing the manager is responsible for is logging."),(0,l.kt)("p",{parentName:"li"},"Logging functionality is behind a separate API available under ",(0,l.kt)("a",{parentName:"p",href:"../classes/ApolloTestingToolkit.LogApi"},(0,l.kt)("inlineCode",{parentName:"a"},"apolloTestingToolkit.log")),"."))),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/ApolloTestingToolkit.InterceptApi"},"InterceptApi")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/ApolloTestingToolkit.LogApi"},"LogApi")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/ApolloTestingToolkit.TestingToolkitInterceptionManager"},"TestingToolkitInterceptionManager"))))}k.isMDXComponent=!0}}]);