(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],[,function(t,e,a){t.exports={statistics_text:"Statistics_statistics_text__3FwQN",statistics_data:"Statistics_statistics_data__37or8"}},function(t,e,a){t.exports={feedback_btnList:"Feedback_feedback_btnList__2d256",feedback_btnList__item:"Feedback_feedback_btnList__item__vDwDa",feedback_btn:"Feedback_feedback_btn__2zqeB"}},,,,,,,function(t,e,a){t.exports={container:"App_container__19lIP"}},function(t,e,a){t.exports={title:"SectionTitle_title__1NfQF"}},function(t,e,a){t.exports={notification:"Notification_notification__N3UQq"}},,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(3),c=a.n(s),n=a(5),i=a.n(n),r=a(6),o=a(7),b=a(8),d=a(13),l=a(12),j=a(9),_=a.n(j),u=a(10),f=a.n(u),x=a(0);function h(t){var e=t.title,a=t.children;return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:f.a.title,children:e}),a]})}var p=a(2),O=a.n(p);function k(t){var e=t.onLeaveFeedback;return Object(x.jsxs)("ul",{className:O.a.feedback_btnList,children:[Object(x.jsx)("li",{className:O.a.feedback_btnList__item,children:Object(x.jsx)("button",{type:"button",className:O.a.feedback_btn,onClick:e,children:"Good"})}),Object(x.jsx)("li",{className:O.a.feedback_btnList__item,children:Object(x.jsx)("button",{type:"button",className:O.a.feedback_btn,onClick:e,children:"Neutral"})}),Object(x.jsx)("li",{className:O.a.feedback_btnList__item,children:Object(x.jsx)("button",{type:"button",className:O.a.feedback_btn,onClick:e,children:"Bad"})})]})}var m=a(1),v=a.n(m);function N(t){var e=t.pervState,a=t.total,s=t.positive,c=e.good,n=e.neutral,i=e.bad;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:v.a.statistics_text,children:["Good: ",Object(x.jsx)("span",{className:v.a.statistics_data,children:c})]}),Object(x.jsxs)("p",{className:v.a.statistics_text,children:["Neutral: ",Object(x.jsx)("span",{className:v.a.statistics_data,children:n})]}),Object(x.jsxs)("p",{className:v.a.statistics_text,children:["Bad: ",Object(x.jsx)("span",{className:v.a.statistics_data,children:i})]}),Object(x.jsxs)("p",{className:v.a.statistics_text,children:["Total: ",Object(x.jsx)("span",{className:v.a.statistics_data,children:a})]}),Object(x.jsxs)("p",{className:v.a.statistics_text,children:["Positive feedback: ",Object(x.jsxs)("span",{className:v.a.statistics_data,children:[s,"%"]})]})]})}var g=a(11),F=a.n(g);function L(t){var e=t.message;return Object(x.jsx)("p",{className:F.a.notification,children:e})}var S=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.feedBackIncrement=function(e){var a=e.currentTarget.textContent.toLowerCase();t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/(t.state.good+t.state.neutral+t.state.bad))},t}return Object(b.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,s=t.bad;return Object(x.jsxs)("div",{className:_.a.container,children:[Object(x.jsx)(h,{title:"Please leave feedback",children:Object(x.jsx)(k,{onLeaveFeedback:this.feedBackIncrement})}),Object(x.jsx)(h,{title:"Statistics",children:e||a||s?Object(x.jsx)(N,{pervState:this.state,total:this.countTotalFeedback(),positive:this.countPositiveFeedbackPercentage()}):Object(x.jsx)(L,{message:"No feedback given"})})]})}}]),a}(s.Component),y=S;a(19);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.querySelector("#root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f5f16f81.chunk.js.map