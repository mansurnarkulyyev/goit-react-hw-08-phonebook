(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[762],{2762:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(1413),r=n(158),i=n(6871),o=n(1097),s={name:"",email:"",password:""},u={label:"Name",name:"name",type:"text",placeholder:"Type your name",required:!0},l={label:"Email",name:"email",type:"email",placeholder:"Type your email",required:!0},c={label:"Password",name:"password",type:"password",placeholder:"Type your password",required:!0},p=n(9786),d=n(9820),m=n(184),f=function(e){var t=e.onSubmit,n=(0,r.Z)({onSubmit:t,initialState:s}),f=n.state,h=n.handleChange,y=n.handleSubmit;if((0,d.Z)())return(0,m.jsx)(i.Fg,{to:"/contacts"});var b=f.name,v=f.email,x=f.password;return(0,m.jsxs)("form",{onSubmit:y,children:[(0,m.jsx)(o.Z,(0,a.Z)({value:b,onChange:h},u)),(0,m.jsx)(o.Z,(0,a.Z)({value:v,onChange:h},l)),(0,m.jsx)(o.Z,(0,a.Z)({value:x,onChange:h},c)),(0,m.jsx)(p.Z,{text:"Register",type:"submit",children:"Register"})]})};f.defaultProps={onSubmit:function(){}};var h=f,y=(n(2791),n(9434)),b=n(5029);var v=function(){var e=(0,d.Z)(),t=(0,y.I0)();return e&&i.Fg,(0,m.jsxs)("main",{children:[(0,m.jsx)("h1",{children:" Register page"}),(0,m.jsx)(h,{onSubmit:function(e){t((0,b.wB)(e))}})]})}},1097:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(2791),r=n(6382),i="text-field_block__JkCnA",o="text-field_label__VYX-y",s="text-field_input__YM8fs",u=n(184),l=function(e){var t=e.label,n=e.name,l=e.value,c=e.onChange,p=e.placeholder,d=e.required,m=e.type,f=(0,a.useMemo)((function(){return(0,r.x0)()}),[]);return(0,u.jsxs)("div",{className:i,children:[t&&(0,u.jsxs)("label",{className:o,htmlFor:f,children:[t,": "]}),(0,u.jsx)("input",{className:s,id:f,name:n,value:l,onChange:c,placeholder:p,required:d,type:m})]})},c=l;l.defaultProps={type:"text",required:!1}},158:function(e,t,n){"use strict";var a=n(4942),r=n(1413),i=n(8152),o=n(2791),s=n(2007),u=n.n(s),l=function(e){var t=e.onSubmit,n=e.initialState,s=e.isReset,u=void 0===s||s,l=(0,o.useState)((0,r.Z)({},n)),c=(0,i.Z)(l,2),p=c[0],d=c[1];return{state:p,setState:d,handleChange:function(e){var t=e.target,n=t.name,i=t.value,o=t.type,s=t.checked,u="checkbox"===o?s:i;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,u))}))},handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},p)),u&&d((0,r.Z)({},n))}}};l.defaultProps={onSubmit:function(){},initialState:{},isReset:!0},l.propTypes={onSubmit:u().func.isRequired,initialState:u().shape.isRequired,isReset:u().bool.isRequired},t.Z=l},888:function(e,t,n){"use strict";var a=n(9047);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=762.1ffd33e7.chunk.js.map