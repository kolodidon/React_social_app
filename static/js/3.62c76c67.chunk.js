(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[3],{249:function(e,a,s){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__1J6-q",messages:"Dialogs_messages__1J3nn"}},250:function(e,a,s){e.exports={contacts:"Contacts_contacts__zYElz"}},251:function(e,a,s){e.exports={contact:"Contact_contact__2vCpC",contactActive:"Contact_contactActive__1mhSm",contactImage:"Contact_contactImage__2AQ9y"}},252:function(e,a,s){e.exports={writeMessage:"WriteMessage_writeMessage__3lzIj",writeMessageTextarea:"WriteMessage_writeMessageTextarea__1wU4N",writeMessageButton:"WriteMessage_writeMessageButton__33GGU",messagesList:"WriteMessage_messagesList__1xpvr",error:"WriteMessage_error__1IFvF"}},253:function(e,a,s){e.exports={message:"Message_message__3Irgf"}},255:function(e,a,s){"use strict";s.r(a);var t=s(107),n=s(11),c=s(0),r=(s(1),s(249)),i=s.n(r),o=s(250),g=s.n(o),m=s(251),d=s.n(m),u=s(13),l=function(e){return Object(c.jsxs)("div",{className:d.a.contact,children:[Object(c.jsx)("img",{className:d.a.contactImage,src:e.avatar,alt:"Avatar"}),Object(c.jsx)(u.b,{to:"/dialogs/"+e.id,children:e.name})]})},j=function(e){var a=e.contactData.map((function(e){return Object(c.jsx)(l,{id:e.id,name:e.name,avatar:e.avatar},e.id)}));return Object(c.jsx)("div",{className:g.a.contacts,children:a})},x=s(252),_=s.n(x),b=s(253),p=s.n(b),h=function(e){return Object(c.jsx)("span",{className:p.a.message,children:e.text})},M=s(52),v=s(33),O=function(e){var a=v.a().shape({message:v.b().required("First type your message")});return Object(c.jsx)(M.a,{initialValues:{message:""},onSubmit:function(a,s){var t=s.resetForm;e.onAddMessage(a.message),t({values:""})},validationSchema:a,children:function(e){var a=e.values,s=e.errors,t=e.touched,n=e.handleChange,r=e.handleBlur,i=e.isValid,o=e.handleSubmit,g=e.dirty;return Object(c.jsxs)("form",{className:_.a.writeMessage,children:[Object(c.jsx)("textarea",{className:_.a.writeMessageTextarea,placeholder:"Type your message...",name:"message",onChange:n,onBlur:r,value:a.message}),Object(c.jsx)("button",{className:_.a.writeMessageButton,disabled:!i&&!g,onClick:o,type:"submit",children:"Send"}),t.message&&s.message&&Object(c.jsx)("p",{className:_.a.error,children:s.message})]})}})},f=function(e){var a=e.messageData.map((function(e){return Object(c.jsx)(h,{id:e.id,text:e.text},e.id)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:_.a.messagesList,children:a}),Object(c.jsx)(O,{onAddMessage:e.onAddMessage})]})},w=s(8),D=function(e){return e.isAuth?Object(c.jsxs)("div",{className:i.a.dialogsWrapper,children:[Object(c.jsx)(j,{contactData:e.contactData}),Object(c.jsx)("div",{className:i.a.messages,children:Object(c.jsx)(f,{messageData:e.messageData,newMessageText:e.newMessageText,onAddMessage:e.onAddMessage})})]}):Object(c.jsx)(w.a,{to:"/login"})},N=s(106),A=s(24);a.default=Object(A.d)(Object(n.b)((function(e){return{newMessageText:e.messagesPage.newMessageText,messageData:e.messagesPage.messageData,contactData:e.messagesPage.contactData}}),(function(e){return{onAddMessage:function(a){e(Object(t.a)(a))}}})),N.a)(D)}}]);
//# sourceMappingURL=3.62c76c67.chunk.js.map