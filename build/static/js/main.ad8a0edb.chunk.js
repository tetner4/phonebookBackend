(this["webpackJsonpphonebook3.0"]=this["webpackJsonpphonebook3.0"]||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var o=t(2),c=t(17),r=t.n(c),s=t(8),u=t(3),a=t(0),l=function(e){var n=e.person,t=e.deletePerson;return Object(a.jsxs)("li",{children:[n.name," ",n.number," ",Object(a.jsx)("button",{onClick:function(){return t(n.id)},children:" Delete "})]})},i=function(e){var n=e.persons,t=e.allPersons,o=e.deletePerson;return console.log(n.length),0===n.length?Object(a.jsx)("ul",{children:t.map((function(e,n){return Object(a.jsx)(l,{person:e,deletePerson:o},n)}))}):Object(a.jsx)("ul",{children:n.map((function(e,n){return Object(a.jsx)(l,{person:e,deletePerson:o},n)}))})},d=function(e){var n=e.value,t=e.onChange;return Object(a.jsxs)("div",{children:["filter shown with ",Object(a.jsx)("input",{value:n,onChange:t})]})},b={color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderSadius:"5px",padding:"10px",marginBottom:"10px"},j={color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderSadius:"5px",padding:"10px",marginBottom:"10px"},f=function(e){var n=e.message;return null===n?null:n.includes("ERROR")?Object(a.jsx)("div",{style:j,children:n}):Object(a.jsx)("div",{style:b,children:n})},h=function(e){var n=e.onSubmit,t=e.newName,o=e.handleNameChange,c=e.newNumber,r=e.handleNumberChange;return Object(a.jsxs)("form",{onSubmit:n,children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:t,onChange:o})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:c,onChange:r})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},m=t(4),p=t.n(m),g="/api/persons",O=function(){return p.a.get(g).then((function(e){return e.data}))},x=function(e){return p.a.post(g,e).then((function(e){return e.data})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))},v=function(e,n){return p.a.put("".concat(g,"/").concat(e),n).then((function(e){return e.data})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))},w=function(e){return p.a.delete("".concat(g,"/").concat(e)).then((function(e){return e.data}))},y=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)([]),l=Object(u.a)(r,2),b=l[0],j=l[1],m=Object(o.useState)(""),p=Object(u.a)(m,2),g=p[0],y=p[1],S=Object(o.useState)(""),C=Object(u.a)(S,2),R=C[0],k=C[1],N=Object(o.useState)(""),E=Object(u.a)(N,2),P=E[0],T=E[1],q=Object(o.useState)(null),B=Object(u.a)(q,2),D=B[0],z=B[1];Object(o.useEffect)((function(){O().then((function(e){j(e)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(f,{message:D}),Object(a.jsx)(d,{value:P,onChange:function(e){T(e.target.value);var n=new RegExp(P,"i");c((function(){return b.filter((function(e){return e.name.match(n)}))}))}}),Object(a.jsx)("h2",{children:"Add new person"}),Object(a.jsx)(h,{onSubmit:function(e){e.preventDefault();var n=b.filter((function(e){return e.name===g})),t=n[0],o=Object(s.a)(Object(s.a)({},t),{},{number:R});0!==n.length?window.confirm("".concat(t.name," is already added to the phonebook, replace the old number with a new one ?"))&&v(o.id,o).then((function(e){console.log("".concat(e.name," successfully updated")),j(b.map((function(n){return n.id!==t.id?n:e}))),y(""),k(""),z("".concat(o.name," was successfully updated")),setTimeout((function(){z(null)}),5e3)})).catch((function(e){console.log(e),j(b.filter((function(e){return e.id!==o.id}))),y(""),k(""),z("[ERROR] ".concat(o.name," was already deleted from server")),setTimeout((function(){z(null)}),5e3)})):x({name:g,number:R}).then((function(e){j(b.concat(e)),y(""),k(""),z("".concat(g," was successfully added")),setTimeout((function(){z(null)}),5e3)})).catch((function(e){z("[ERROR] ".concat(e.response.data.error)),setTimeout((function(){z(null)}),5e3),console.log(e.response.data)}))},newName:g,handleNameChange:function(e){y(e.target.value)},newNumber:R,handleNumberChange:function(e){k(e.target.value)}}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(i,{persons:t,allPersons:b,deletePerson:function(e){var n=b.filter((function(n){return n.id===e})),t=n[0].name,o=n[0].id;window.confirm("Delete ".concat(t," ?"))&&(w(o),console.log("".concat(t," successfully deleted")),z("".concat(t," was successfully deleted")),j(b.filter((function(e){return e.id!==o}))),setTimeout((function(){z(null)}),5e3))}})]})};r.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ad8a0edb.chunk.js.map