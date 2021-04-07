(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(e,c,n){},74:function(e,c,n){},75:function(e,c,n){"use strict";n.r(c);var t,s=n(1),a=n.n(s),r=n(50),l=n.n(r),i=(n(64),n(29)),j=n(30),u=n(33),h=n(32),o=n(8),b=n(59),m=n(31),d=n(7),O=n(35),x=n(28),p=n(77),g=n(36),f=n.n(g),_=n(51),y=n.n(_),N=n(3);function v(e){var c=e.launch,n=c.flight_number,t=c.mission_name,s=c.launch_date_local,a=c.launch_success;return Object(N.jsx)("div",{className:"card card-body mb-3",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-md-9",children:[Object(N.jsxs)("h4",{children:["Mission:"," ",Object(N.jsx)("span",{className:f()({"text-success":a,"text-danger":!a}),children:t})]}),Object(N.jsxs)("p",{children:["Date: ",Object(N.jsx)(y.a,{format:"YYYY-MM-DD HH:mm",children:s})]})]}),Object(N.jsx)("div",{className:"col-md-3",children:Object(N.jsx)(m.b,{to:"/launch/".concat(n),className:"btn btn-secondary",children:"Launch Details"})})]})})}function k(){return Object(N.jsxs)("div",{className:"my-3",children:[Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})}var L,F=Object(x.a)(t||(t=Object(O.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]))),D=function(e){Object(u.a)(n,e);var c=Object(h.a)(n);function n(){return Object(i.a)(this,n),c.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(s.Fragment,{children:[Object(N.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(N.jsx)(k,{}),Object(N.jsx)(p.a,{query:F,children:function(e){var c=e.loading,n=e.error,t=e.data;return c?Object(N.jsx)("h4",{children:"Loading..."}):(n&&console.log(n),Object(N.jsx)(s.Fragment,{children:t.launches.map((function(e){return Object(N.jsx)(v,{launch:e},e.flight_number)}))}))}})]})}}]),n}(s.Component),C=Object(x.a)(L||(L=Object(O.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]))),Y=function(e){Object(u.a)(n,e);var c=Object(h.a)(n);function n(){return Object(i.a)(this,n),c.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),Object(N.jsx)(s.Fragment,{children:Object(N.jsx)(p.a,{query:C,variables:{flight_number:e},children:function(e){var c=e.loading,n=e.error,t=e.data;if(c)return Object(N.jsx)("h4",{children:"Loading..."});n&&console.log(n);var s=t.launch,a=s.mission_name,r=s.flight_number,l=s.launch_year,i=s.launch_success,j=s.rocket,u=j.rocket_id,h=j.rocket_name,o=j.rocket_type;return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h1",{className:"display-4 my-3",children:[Object(N.jsx)("span",{className:"text-dark",children:"Mission:"})," ",a]}),Object(N.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(N.jsxs)("ul",{className:"list-group",children:[Object(N.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",r]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",l]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Launch Successful:"," ",Object(N.jsx)("span",{className:f()({"text-success":i,"text-danger":!i}),children:i?"Yes":"No"})]})]}),Object(N.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(N.jsxs)("ul",{className:"list-group",children:[Object(N.jsxs)("li",{className:"list-group-item",children:["Rocket ID: ",u]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",h]}),Object(N.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",o]})]}),Object(N.jsx)("hr",{}),Object(N.jsx)(m.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})}})})}}]),n}(s.Component),q=(n(74),n.p+"static/media/logo.91169fa6.png"),w=new b.a({uri:"/graphql"}),I=function(e){Object(u.a)(n,e);var c=Object(h.a)(n);function n(){return Object(i.a)(this,n),c.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(N.jsx)(o.a,{client:w,children:Object(N.jsx)(m.a,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("img",{src:q,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),Object(N.jsx)(d.a,{exact:!0,path:"/",component:D}),Object(N.jsx)(d.a,{exact:!0,path:"/launch/:flight_number",component:Y})]})})})}}]),n}(s.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,a=c.getLCP,r=c.getTTFB;n(e),t(e),s(e),a(e),r(e)}))};l.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(I,{})}),document.getElementById("root")),M()}},[[75,1,2]]]);
//# sourceMappingURL=main.a8051844.chunk.js.map