(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[405],{9405:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var r=t(9434),a=t(2791),u=t(9249),i=t(184);function o(e){var n=e.children;return(0,i.jsx)("section",{className:"section",children:n})}function c(e){var n=e.children;return(0,i.jsx)("div",{className:"container",children:n})}var s=t(9439),l=t(2007),f=t.n(l),p=t(63),d="NOT_FOUND";var m=function(e,n){return e===n};function h(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?m:r,u=t.maxSize,i=void 0===u?1:u,o=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:d},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return d}return{get:r,put:function(n,a){r(n)===d&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var n=s.get(arguments);if(n===d){if(n=e.apply(null,arguments),o){var t=s.getEntries(),r=t.find((function(e){return o(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function v(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function b(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,l=s.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],d=v(r),m=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return u=m.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:d,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var x=b(h),y=function(e){return e.phonebook.contacts},g=function(e){return e.filter.filter},j=function(e){return e.phonebook.isLoading},N=x([y,g],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}));function C(){var e=(0,a.useState)(""),n=(0,s.Z)(e,2),t=n[0],u=n[1],o=(0,a.useState)(""),c=(0,s.Z)(o,2),l=c[0],f=c[1],d=(0,r.I0)(),m=(0,r.v9)(y),h=function(e){u(""),f("")},v=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":u(r);break;case"number":f(r);break;default:return}};return(0,i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),null===m||void 0===m?void 0:m.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts"));else{var n={name:t,number:l,completed:!1};d((0,p.Bm)(n)),h()}},children:[(0,i.jsx)("div",{className:"inputBox",children:(0,i.jsxs)("label",{className:"inputLabel",children:["Name",(0,i.jsx)("input",{className:"inputContent",type:"text",value:t,onChange:v,name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name",required:!0})]})}),(0,i.jsx)("div",{className:"inputBox",children:(0,i.jsxs)("label",{className:"inputLabel",children:["Number",(0,i.jsx)("input",{className:"inputContent",type:"tel",value:l,onChange:v,name:"number",placeholder:"XXX XXX XXXX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Number",required:!0})]})}),(0,i.jsx)("button",{className:"inputButton",type:"submit",children:"Add contact"})]})}C.prototype={addContact:f().func.isRequired,handleChange:f().func.isRequired,name:f().string.isRequired,number:f().number.isRequired};var k=t(1634);function w(){var e=(0,r.I0)(),n=(0,r.v9)(g);return(0,i.jsx)("form",{children:(0,i.jsx)("div",{className:"inputBox",children:(0,i.jsxs)("label",{className:"inputLabel",children:["Find contacts by name",(0,i.jsx)("input",{className:"inputContent",type:"text",value:n,onChange:function(n){var t=n.currentTarget.value;e((0,k.I)(t))},name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Filter",required:!0})]})})})}w.prototype={value:f().string.isRequired,onValueChanges:f().func.isRequired};var _=t(1413),E=function(e){var n=e.contact,t=(0,r.I0)(),u=(0,a.useState)(!1),o=(0,s.Z)(u,2),c=o[0],l=o[1],f=(0,a.useState)(n.name),d=(0,s.Z)(f,2),m=d[0],h=d[1],v=(0,a.useState)(n.number),b=(0,s.Z)(v,2),x=b[0],y=b[1],g=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":return void h(r);case"number":return void y(r);default:return}};return(0,i.jsxs)("li",{className:"listContacts",children:[c?(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsxs)("label",{children:["Name",(0,i.jsx)("input",{onChange:g,name:"name",type:"text",value:m})]}),"  ",(0,i.jsxs)("label",{children:["Number",(0,i.jsx)("input",{onChange:g,name:"number",type:"text",value:x})]})]}):(0,i.jsxs)("div",{className:"titleContact",children:[(0,i.jsxs)("span",{className:"contact",children:["Name: ",n.name]}),"  ",(0,i.jsxs)("span",{className:"contact",children:["Number: ",n.number]})]}),(0,i.jsx)("button",{className:"listButton",type:"button",onClick:function(){if(l((function(e){return!e})),c&&(m!==n.name||x!==n.number))return t((0,p.E_)((0,_.Z)((0,_.Z)({},n),{},{name:m,number:x})))},children:c?"Save":"Edit"}),(0,i.jsx)("button",{className:"listButton",type:"button",onClick:function(){return e=n.id,void t((0,p.a4)(e));var e},children:"x"})]})};function R(){var e=(0,r.I0)(),n=(0,r.v9)(N),t=(0,r.v9)(j);return(0,a.useEffect)((function(){e((0,p.mk)())}),[e]),(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)("div",{children:"Loading..."}):(0,i.jsx)("ul",{children:n.map((function(e,n){return(0,i.jsx)(E,{contact:e},e.id)}))})})}function q(){var e=(0,r.I0)(),n=(0,r.v9)(u.um.getUsername),t=(0,r.v9)(u.um.getIsLoggedIn),s=(0,r.v9)(u.um.getError);return(0,a.useEffect)((function(){e(e(u.r5.fetchCurrentUser()))}),[e]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o,{children:[(0,i.jsxs)(c,{children:[(0,i.jsx)("h1",{className:"title",children:"Phonebook"}),(0,i.jsx)(C,{})]}),n.length?(0,i.jsxs)(c,{children:[(0,i.jsx)("h2",{className:"title",children:"Contacts"}),(0,i.jsx)(w,{}),t&&!s&&(0,i.jsx)("b",{children:"Request in progress..."}),(0,i.jsx)(R,{})]}):(0,i.jsx)("h1",{className:"title",children:"Phonebook"})]})})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function u(){}u.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,u,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=405.e6e2a07b.chunk.js.map