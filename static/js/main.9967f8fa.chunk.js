(window.webpackJsonpwander=window.webpackJsonpwander||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/tutorial_image.8e0f6c08.jpeg"},36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAKCAYAAAD2Fg1xAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAEsAAAAAQAAASwAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAADKgAwAEAAAAAQAAAAoAAAAAcUNBxAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAASBJREFUOBFjYBjMIO0/K9h52f8LGLL+R8Od2vCfCc6GMjAE0BUMKP8XAzPU/hcMjAzzgZ6xAfOvAnlDDjT85wC7Oed/NdAjrxkK/kuC+aH/YZ4Ecwd3jEBC/RdD6H82himMrQxMDIcYfjFsBguvZvzLgCWJQbQMVrLhPwvcadn/bwJjZiGc////EEtmuf/ZwY5P+8/PkP3/GxAXgPnQWGEcMtHTwPiPoeQ/N0MP41dgjFgBi4GjDP8YXBimMu4FJj2U/AKPrUHNgOWLrP8JwFj5zJDxXxrkXkYgRx7oM2Yg/D+oPYDqOHaGLwwPGLgZ1gKFFYGxogXyyCsgRxiIfwO9hT/jgLwKUgGjgUyqAlhQ4nMFRA1MxWcGDgYhhh8MSwHRFlI5rDM4+gAAAABJRU5ErkJggg=="},38:function(e,t,a){e.exports=a.p+"static/media/event_banner.ebbd430a.jpeg"},40:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(34),c=a.n(r),i=(a(45),a(3)),o=a(4),u=a(6),l=a(5),m=a(7),A=a(9),p=a(16),d=a(35),g=a.n(d),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("img",{className:"tutorial_image",alt:"",src:g.a}))}}]),t}(n.Component),E=a(36),b=a.n(E);var f=function(e){var t,a=e.location,n=e.name,r=e.day;return t="0"===e.link?s.a.createElement("div",{className:"menu_go",style:{background:"#ced4da"}},"GO"):s.a.createElement(A.b,{to:{pathname:"/login",state:{quiz_name:n}}},s.a.createElement("div",{className:"menu_go"},"GO")),s.a.createElement("div",{className:"menu"},s.a.createElement("div",{className:"menu_name"},s.a.createElement("h6",null,a),s.a.createElement("h2",null,n),s.a.createElement("h6",null,r)),s.a.createElement("div",{className:"menu_arrow"},s.a.createElement("img",{className:"arrow_image",alt:"",src:b.a})),t)},v=a(38),k=a.n(v);var _=function(){return s.a.createElement("div",{className:"banner"},s.a.createElement(A.b,{to:"/tutorial"},s.a.createElement("img",{className:"banner_image",alt:"",src:k.a})))},j=a(13),w=function(e){function t(e){var a;Object(i.a)(this,t);var n=(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).props.cookies;return a.state={user_id:n.get("user_id"),token:n.get("token"),quizBool:!1,quiz_name:"",fake:"",stage:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){function e(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}if(""!==e("quiz_name"))if(""===this.state.user_id||null===this.state.user_id||void 0===this.state.user_id);else{var t=e("quiz_name"),a=e("fake"),n=e("stage");this.setState({quiz_name:t,fake:a,stage:n,quizBool:!0})}}},{key:"render",value:function(){return this.state.quizBool?s.a.createElement(p.a,{push:!0,to:"/quizpage/".concat(this.state.quiz_name,"/").concat(this.state.fake,"/").concat(this.state.stage,"/").concat(this.state.user_id)}):s.a.createElement("div",null,s.a.createElement(_,null),s.a.createElement("h3",{className:"eventText"},"EVENT"),s.a.createElement("div",{className:"menus"},s.a.createElement(f,{location:"\uc11c\uc6b8",name:"\uc911\uc559\ub300\ud559\uad50",day:"19.10.31(\ubaa9)~19.11.01(\uae08)",link:"0"}),s.a.createElement(f,{location:"\uc885\ub85c",name:"\ub099\uc0b0\uacf5\uc6d0",day:"19.11.02(\ud1a0)",link:""}),s.a.createElement(f,{name:"\ucee4\ubc0d\uc468",day:"19.XX.XX",link:"0"})))}}]),t}(n.Component),O=Object(j.b)(w),z=a(39),y=a(1),x=a.n(y),q=a(8),C=a(15),N=a.n(C);function P(){return(P=Object(q.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("https://wanderland.site/api/user/login",{headers:{"Content-Type":"application/x-www-form-urlencoded"},email:t,phone:a});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var G=function(e,t){return P.apply(this,arguments)};function I(){return(I=Object(q.a)(x.a.mark((function e(t,a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("https://wanderland.site/api/user/auto",{headers:{"Content-Type":"application/x-www-form-urlencoded"},user_id:t,token:a});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var M=function(e,t){return I.apply(this,arguments)},L=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).getCookies=Object(q.a)(x.a.mark((function e(){var t,n,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.cookies,e.next=3,t.get("user_id");case 3:return n=e.sent,e.next=6,t.get("token");case 6:s=e.sent,a.setState({user_id:n,token:s});case 8:case"end":return e.stop()}}),e)}))),a.loginAuto=Object(q.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(a.state.user_id,a.state.toekn);case 2:t=e.sent,console.log(t),a.setState({isLoging:!0});case 5:case"end":return e.stop()}}),e)}))),a.handleChange=function(e){a.setState(Object(z.a)({},e.target.name,e.target.value))},a.handleOnClick=Object(q.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.state.email&&null!==a.state.email&&void 0!==a.state.email&&""!==a.state.phone&&null!==a.state.phone&&void 0!==a.state.phone){e.next=4;break}alert("\uc774\uba54\uc77c\uacfc \uc804\ud654\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694."),e.next=18;break;case 4:return e.next=6,G(a.state.email,a.state.phone);case 6:if(!(t=e.sent).complete){e.next=17;break}return a.setState({user_id:t.user_id,isLoging:!0}),n=a.props.cookies,e.next=12,n.set("user_id",t.user_id,{path:"/"});case 12:return e.next=14,n.set("token",t.token,{path:"/"});case 14:a.setState({isLoging:!0}),e.next=18;break;case 17:alert("\uc774\uba54\uc77c\uacfc \uc804\ud654\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.");case 18:case"end":return e.stop()}}),e)})));var n=a.props.cookies;return a.state={user_id:n.get("user_id"),token:n.get("token"),quiz_name:a.props.location.state.quiz_name,isLoging:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){""===this.state.user_id||null===this.state.user_id||void 0===this.state.user_id?console.log(this.state.user_id):(console.log(this.state.user_id),this.loginAuto())}},{key:"render",value:function(){return this.state.isLoging?s.a.createElement(p.a,{push:!0,to:"/quizhome/".concat(this.state.quiz_name,"/").concat(this.state.user_id)}):s.a.createElement("section",{className:"container"},s.a.createElement("form",{className:"LoginForm"},s.a.createElement("input",{className:"form-control",type:"email",id:"inputEmail",placeholder:"EMAIL",name:"email",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("input",{className:"form-control",type:"number",id:"inputPhone",placeholder:"PHONE( - \uc5c6\uc774 \uc785\ub825)",name:"phone",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"button",onClick:this.handleOnClick},"START")),s.a.createElement("br",null),s.a.createElement("div",{className:"agree"},s.a.createElement(A.b,{to:"/privacy"},"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68")),s.a.createElement("div",{className:"agree"},s.a.createElement(A.b,{to:"/agree"},"\uc774\uc6a9 \uc57d\uad00")))}}]),t}(n.Component),S=Object(j.b)(L);function B(){return(B=Object(q.a)(x.a.mark((function e(t,a,n){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("https://wanderland.site/api/quiz/join",{headers:{"Content-Type":"application/x-www-form-urlencoded"},user_id:t,quizzes:[{quiz_name:a,stage:n}],new:!0});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var D=function(e,t,a){return B.apply(this,arguments)};var R=function(e){var t=e.name,a=e.stage,n=e.fake,r=e.comment,c=e.success,i=e.user_id;return 1===c?function(e){var t=e.name,a=e.stage,n=e.fake,r=(e.comment,e.success,e.user_id);return s.a.createElement(A.b,{to:"/quizpage/".concat(t,"/").concat(n,"/").concat(a,"/").concat(r)},s.a.createElement("div",{className:"quiz",style:{background:"#006BFF"}},a))}({name:t,stage:a,fake:n,comment:r,success:c,user_id:i}):function(e){e.name;var t=e.stage;e.fake,e.comment,e.success;return s.a.createElement("div",{className:"quiz",style:{background:"#ced4da"}},t)}({name:t,stage:a,fake:n,comment:r,success:c,user_id:i})},F=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).getQuiz=Object(q.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(a.state.user_id,a.state.quiz_name,a.state.stage);case 2:t=e.sent,console.log(t),console.log(t.quizzes[0].stage),a.setState({stage:t.quizzes[0].stage});case 6:case"end":return e.stop()}}),e)})));var n=a.props,s=n.cookies,r=n.match;return a.state={user_id:r.params.user_id,token:s.get("token"),quiz_name:r.params.quiz_name,stage:[0,0,0,0,0]},console.log(a.state),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getQuiz()}},{key:"render",value:function(){return s.a.createElement("div",{className:"quizHome"},s.a.createElement("div",{className:"quizTitle"},"Quiz"),s.a.createElement("div",{className:"quizName"},this.state.quiz_name),s.a.createElement("center",null,s.a.createElement(R,{name:this.state.quiz_name,stage:"1",fake:"1302",comment:"",success:this.state.stage[0],user_id:this.state.user_id}),s.a.createElement(R,{name:this.state.quiz_name,stage:"2",fake:"2333",comment:"",success:this.state.stage[1],user_id:this.state.user_id}),s.a.createElement(R,{name:this.state.quiz_name,stage:"3",fake:"3142",comment:"",success:this.state.stage[2],user_id:this.state.user_id}),s.a.createElement(R,{name:this.state.quiz_name,stage:"4",fake:"4312",comment:"",success:this.state.stage[3],user_id:this.state.user_id}),s.a.createElement(R,{name:this.state.quiz_name,stage:"5",fake:"5432",comment:"",success:this.state.stage[4],user_id:this.state.user_id})))}}]),t}(n.Component),Q=Object(j.b)(F);function U(){return(U=Object(q.a)(x.a.mark((function e(t,a,n){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("https://wanderland.site/api/quiz/update",{headers:{"Content-Type":"application/x-www-form-urlencoded"},user_id:t,quizzes:[{quiz_name:a,stage:n}]});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var Z=function(e,t,a){return U.apply(this,arguments)},Y=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=Object(q.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(a.state.user_id,a.state.quiz_name,a.state.stage-1);case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));var n=a.props,s=n.cookies,r=n.match;return a.state={user_id:s.get("user_id"),token:s.get("token"),quiz_name:r.params.quiz_name,now_stage:r.params.stage,stage:r.params.stage,fake:r.params.fake},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(A.b,{to:"/quizhome/".concat(this.state.quiz_name,"/").concat(this.state.user_id)},s.a.createElement("div",{className:"quizTitle",style:{color:"#006BFF"}},"< ","Quiz ",this.state.stage)),s.a.createElement("img",{className:"quiz_img",src:window.location.origin+"/quizzes/chungang/"+this.state.fake+".jpg",alt:""}),s.a.createElement("div",{className:"quiz_comment"},"\ubaa8\ub4e0 QR\ucf54\ub4dc\ub97c \ucc3e\uace0 \ub3cc\uc544\uc624\uc138\uc694."),s.a.createElement("div",{className:"quiz_hint"},"\ubb38\uc81c\uc758 \uc815\ub2f5\uc744 \ubaa8\ub974\uc2e4 \uacbd\uc6b0 \uce74\uce74\uc624\ud1a1 \ucc44\ub110'wanderland'\ub97c \ucd94\uac00\ud558\uace0 \ubb38\uc758 \uc8fc\uc138\uc694."))}}]),t}(n.Component),W=Object(j.b)(Y),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={agree:'\uc774\uc6a9 \uc57d\uad00\n\n        [\uc774\ubca4\ud2b8 \uc774\uc6a9 \uc57d\uad00]\n        \n        1. \ubcf8 \uc774\ubca4\ud2b8 \ucc38\uac00 \uc2dc, \ubcf8 \uc774\uc6a9 \uc57d\uad00\uc5d0 \ub3d9\uc758\ud558\ub294 \uac83\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4.\n        2. \ubcf8 \uc774\ubca4\ud2b8\ub294 \uc774\ubca4\ud2b8 \uae30\uac04 \ub3d9\uc548 \uc774\ubca4\ud2b8 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\ud574 \uc774\ubca4\ud2b8\uc5d0 \ub4f1\ub85d\ud55c \ucc38\uac00\uc790\uc5d0 \ud55c\ud574 \ucc38\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n        \n        [\uc774\ubca4\ud2b8 \ucc38\uac00]\n        4. \ubcf8 \uc774\ubca4\ud2b8\uc5d0 \ucc38\uac00\ud558\ub824\uba74 \ucc38\uac00\uc790\ub4e4\uc740 \uc774\ubca4\ud2b8 \uae30\uac04 \ub3d9\uc548 \uc774\ubca4\ud2b8 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\ud574 \uc774\ubca4\ud2b8\uc5d0  \uc815\ubcf4\ub97c \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4.\n        i. \ubc18\ub4dc\uc2dc \uc544\ub798 \uc694\uac74\uc744 \ubaa8\ub450 \ucda9\uc871\ud574\uc57c \ud569\ub2c8\ub2e4.\n        a. \uad8c\ud55c\uc744 \uc704\uc784 \ubc1b\uc740 \uac1c\uc778("\uc9c0\uba85\ub41c \ub300\ub9ac\uc778")\uc774 \uac1c\uc778\ub97c \ub300\uc2e0\ud558\uc5ec \uc774\ubca4\ud2b8\uc5d0 \ucc38\uac00\ud560 \uc218 \uc788\uc73c\ub098 \ubcf8\uc778\uc758 \uba85\uc758\ub85c \ub610\ub294 \ubcf8\uc778 \uac1c\uc778\uc758 \uc790\uaca9\uc73c\ub85c\ub294 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ucc38\uac00\uc790 \ub2f9 \uc624\uc9c1 \ud55c \uba85\uc758 "\uc9c0\uba85\ub41c \ub300\ub9ac\uc778"\ub9cc\uc774 \ud5c8\uc6a9\ub429\ub2c8\ub2e4.\n        5. \ubbf8\uc131\ub144\uc790\uc758 \uacbd\uc6b0 \ubc18\ub4dc\uc2dc \ubd80\ubaa8 \ub610\ub294 \uc131\uc778 \ubcf4\ud638\uc790\uc758 \uc0ac\uc804 \ub3d9\uc758\ub97c \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4.\n        6. 4PEEPS\ub294 \uae30\uc220\uc801 \uc7a5\uc560\ub098 \ud1b5\uc2e0\ub9dd \ud63c\uc7a1, \uadf8 \uc678 \ub2e4\ub978 \uc774\uc720\ub85c \ubcf8 \uc774\ubca4\ud2b8\uc5d0 \ucc38\uac00\ud558\uc9c0 \ubabb\ud558\uac70\ub098, \ucc38\uac00 \uc2dc\uae30\ub97c \ub193\uce58\uac70\ub098, \uc798\ubabb \ucc38\uac00\ud558\uc600\uc744 \uacbd\uc6b0 \uadf8\uc5d0 \ub300\ud55c \uc5b4\ub5a4 \ucc45\uc784\ub3c4 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n        \n        [\ubcf4\uc0c1]\n        7. \ucc38\uac00\uc790\ub294 \uc774\ubca4\ud2b8 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uba85\uc2dc\ub41c \uae30\uac04 \ub3d9\uc548 \uc774\ubca4\ud2b8\uc5d0 \ub4f1\ub85d\ud560 \uacbd\uc6b0 \uc774\ubca4\ud2b8\uc5d0 \ucc38\uc5ec\ud558\uace0 \uc0c1\ud488\uc744 \uc218\ucde8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n        8. FedEx\ub294 \ubcc4\ub3c4\uc758 \uacf5\uc9c0 \uc5c6\uc774 \uc5ec\uae30\uc5d0 \uba85\uc2dc\ub41c \ubcf4\uc0c1\uc744 \ub3d9\ub4f1\ud55c \uac00\uce58\uc758 \ub2e4\ub978 \ubb3c\ud488\uc73c\ub85c \ub300\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n        \n        [\uc77c\ubc18 \uc774\uc6a9 \uc57d\uad00]\n        9. 4PEEPS\ub294 \ubc95\uc5d0 \uba85\uc2dc\ub41c \ucc45\uc784\uc744 \uc81c\uc678\ud558\uace0\ub294 \ubcf8 \uc774\ubca4\ud2b8\uc640 \uad00\ub828\ud558\uc5ec \uc77c\uc5b4\ub098\ub294 \uc190\uc2e4 \ub610\ub294 \ud53c\ud574(\ud2b9\ubcc4, \uac04\uc811\uc801, \uc0ac\uace0\ub85c \uc778\ud55c \ub610\ub294 \uacb0\uacfc\uc801 \uc190\uc2e4\uc744 \ud3ec\ud568\ud558\ub098 \uc774\uc5d0 \ud55c\uc815\ub418\uc9c0 \uc54a\uc74c), \uac1c\uc778 \ubd80\uc0c1 \ubc0f \uacbd\ud488\uc744 \uc218\ub839\ud568\uc73c\ub85c\uc368 \ubc1c\uc0dd\ud558\ub294 \uc138\uae08 \ubd80\uacfc \uad00\ub828 \uc0ac\ud56d\uc5d0 \ub300\ud574\uc11c\ub294 \uc5b4\ub5a0\ud55c \ucc45\uc784\ub3c4 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n        10. 4PEEPS\ub294 \ubcf8 \uc774\ubca4\ud2b8\uc758 \ucc38\uac00\uc790\uc5d0\uac8c \uba85\uc2dc\ub41c \ubcf4\uc0c1\uc744 \uc81c\uacf5\ud558\uae30 \uc804\uc5d0, \ucc38\uac00\uc790\uac00 \ubcf8 \uc57d\uad00\uc5d0\uc11c \uc694\uad6c\ud558\ub294 \ucc38\uac00 \ubc0f \ubcf4\uc0c1\uc5d0 \uc801\uaca9\ud558\uba70 \ubc0f \uc57d\uad00\uc744 \uc900\uc218\ud55c \uac83\uc5d0 \ub300\ud574 \uc99d\uba85\uc744 \uc694\uad6c\ud560 \uad8c\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ubcf8 \uc99d\uba85\uc740 \ucc38\uac00\uc790\uac00 \ubcf4\uc0c1\uc744 \ubc1b\ub294 \uac83\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4.\n        11. \ubcf8 \uc774\ubca4\ud2b8\uac00 \uc870\uc791, \ubd88\ubc95\uac1c\uc785, \uc0ac\uae30, \uae30\uc220\uc801 \uacb0\ud568 \ubc0f 4PEEPS \ud1b5\uc81c \ubc16\uc758 \uae30\ud0c0 \uc694\uc778 \ub4f1\uc73c\ub85c \uc778\ud574 \uc608\uc815\ub300\ub85c \uc9c4\ud589\ud560 \uc218 \uc5c6\uace0, \uc774\ub7ec\ud55c \uc0c1\ud669\uc774 \uad00\ub9ac \ubcf4\uc548, \uacf5\uc815\uc131, \uc644\uc804\uc131 \ubc0f \uc6d0\ud65c\ud55c \uc774\ubca4\ud2b8 \uc9c4\ud589\uc744 \ubc29\ud574\ud558\uac70\ub098 \uc601\ud5a5\uc744 \ub07c\uce60 \uacbd\uc6b0 4PEEPS\ub294 \ub3c5\uc790\uc801 \ud310\ub2e8\uc5d0 \ub530\ub77c \ubcf8 \uc774\ubca4\ud2b8\ub97c \ucde8\uc18c, \ucca0\ud68c, \ubcc0\uacbd, \ud639\uc740 \uc5f0\uae30\ud560 \uad8c\ub9ac\ub97c \ubcf4\uc720\ud569\ub2c8\ub2e4.\n        12. \ubcf8 \uc774\uc6a9\uc57d\uad00\uacfc \ud574\ub2f9 \uc774\ubca4\ud2b8\uc758 \uc548\ub0b4\ucc45\uc790, \ub9c8\ucf00\ud305 \ub610\ub294 \ud64d\ubcf4\uc790\ub8cc\uac00 \uc0c1\ucda9\ub420 \uc2dc, \ubcf8 \uc774\uc6a9\uc57d\uad00\uc5d0 \ub530\ub985\ub2c8\ub2e4.\n        13. \ubcf8 \uc774\ubca4\ud2b8\uc640 \uad00\ub828\ud558\uc5ec \ubd84\uc7c1\uc774 \ubc1c\uc0dd\ud560 \uacbd\uc6b0, 4PEEPS\uc758 \uacb0\uc815\uc774 \ucd5c\uc885 \ud6a8\ub825\uc744 \uac00\uc9c0\uba70 \uc774\ud6c4 \uae30\ud0c0 \ub300\uc751\uc740 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad00\ub828 \ubc95 \ubc0f \uaddc\uc815\uc5d0 \ubc18\ud558\ub294 \uacbd\uc6b0 4PEEPS\ub294 \uacbd\ud488/\ubcf4\uc0c1\uc744 \uc81c\uacf5\ud560 \uc758\ubb34\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.\n        \n        4PEEPS\ub294 \uad00\ub828\ubc95\uc774 \ud5c8\ub77d\ud558\ub294 \ud55c \ubcc4\ub3c4\uc758 \uacf5\uc9c0 \uc5c6\uc774 \ubcf8 \uc774\uc6a9 \uc57d\uad00\uc744 \ubcc0\uacbd\ud560 \uad8c\ub9ac\ub97c \ubcf4\uc720\ud569\ub2c8\ub2e4.'},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,this.state.agree)}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68 WANDERLAND \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 \ud3ec\ud54d\uc2a4(\uc774\ud558 \ud68c\uc0ac)\ub294 \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ubc95 \uc81c30\uc870\uc5d0 \ub530\ub77c \uc815\ubcf4\uc8fc\uccb4(\uace0\uac1d)\uc758 \uac1c\uc778\uc815\ubcf4\ub97c \ubcf4\ud638\ud558\uace0 \uc774\uc640 \uad00\ub828\ud55c \uace0\ucda9\uc744 \uc2e0\uc18d\ud558\uace0 \uc6d0\ud65c\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uae30 \uc704\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\uc9c0\uce68\uc744 \uc218\ub9bd, \uacf5\uac1c\ud569\ub2c8\ub2e4. \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68\uc740 \ubc95\ub839 \ubc0f \uc815\ubd80\uc9c0\uce68\uc758 \ubcc0\uacbd\uacfc \ubcf4\ub2e4 \ub098\uc740 \uc11c\ube44\uc2a4 \uc81c\uacf5\uc744 \uc704\ud574\uc11c \uadf8 \ub0b4\uc6a9\uc774 \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. 1. \uac1c\uc778\uc815\ubcf4\uc758 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801 \ud68c\uc0ac\uc5d0\uc11c\ub294 \uac1c\uc778\uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \ubaa9\uc801\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. \uac00\uc785\uc758\uc0ac \ud655\uc778, \uac00\uc785 \ubc0f \uac00\uc785\ud69f\uc218 \uc81c\ud55c, \uace0\uac1d\uc5d0 \ub300\ud55c \uc11c\ube44\uc2a4 \uc81c\uacf5\uc5d0 \ub530\ub978 \ubcf8\uc778 \uc2dd\ubcc4\u2024\uc778\uc99d, \ubd88\ub7c9\ud68c\uc6d0\uc758 \ubd80\uc815 \uc774\uc6a9\ubc29\uc9c0\uc640 \ube44\uc778\uac00 \uc0ac\uc6a9\ubc29\uc9c0, \ud68c\uc6d0\uc790\uaca9 \uc720\uc9c0\u2024\uad00\ub9ac \uc2e0\uaddc\uc11c\ube44\uc2a4(\ucf58\ud150\uce20) \uac1c\ubc1c \ubc0f \ud2b9\ud654, \ud1b5\uacc4\ud559\uc801 \ud2b9\uc131\uc5d0 \ub530\ub978 \uc11c\ube44\uc2a4 \uc81c\uacf5 \ubc0f \uad11\uace0 \uac8c\uc7ac, \uc811\uc18d \ube48\ub3c4 \ud30c\uc545, \ud68c\uc6d0\uc758 \uc11c\ube44\uc2a4 \uc774\uc6a9\uc5d0 \ub300\ud55c \ud1b5\uacc4 \ub4f1 \ud68c\uc0ac\uac00 \uc6b4\uc601\ud558\ub294 \uc0ac\uc774\ud2b8(wanderland.kr)\ub97c \ud1b5\ud574 \ud68c\uc6d0\uc5d0\uac8c \ucd5c\uc801\uc758 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5 \uac1c\uc778\uc815\ubcf4\uac00 \ubd80\uc815\ud655\ud558\uc5ec \uc11c\ube44\uc2a4\uc758 \ud488\uc9c8\uc5d0 \uc9c0\uc7a5\uc744 \ucd08\ub798\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud648\ud398\uc774\uc9c0 \uc6b4\uc601\uc790\uac00 \ud574\ub2f9\uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uac70\ub098 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud68c\uc6d0\uc774 \uc628\ub77c\uc778 \uc0c1\uc5d0\uc11c \uc790\ubc1c\uc801\uc73c\ub85c \uc81c\uacf5\ud558\ub294 \uac1c\uc778\uc815\ubcf4\ub294 \uc81c3\uc790\uac00 \uc218\uc9d1\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70 \uc774\uc5d0 \ub300\ud55c \ucc45\uc784\uc740 \ud68c\uc6d0\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc5c5\ubb34\uc218\ud589\uc744 \uc704\ud574 \uac1c\uc778\uc815\ubcf4\ub97c \ud655\uc778\ud558\ub294 \uac83\uc740 \uc811\uadfc \uad8c\ud55c\uc774 \uc788\ub294 \uc5c5\ubb34\ub2f4\ub2f9\uc790(\uac1c\uc778\uc815\ubcf4\ucde8\uae09\uc790)\uc5d0 \ud55c\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. 2. \uac1c\uc778\uc815\ubcf4\uc758 \ucc98\ub9ac \ubc0f \ubcf4\uc720\uae30\uac04 \ud68c\uc0ac\ub294 \uc815\ubcf4\uc8fc\uccb4\ub85c\ubd80\ud130 \uac1c\uc778\uc815\ubcf4\ub97c \uc218\uc9d1\ud560 \ub54c \ub3d9\uc758\ubc1b\uc740 \uac1c\uc778\uc815\ubcf4 \ubcf4\uc720\u2024\uc774\uc6a9\uae30\uac04 \ub610\ub294 \ubc95\ub839\uc5d0 \ub530\ub978 \uac1c\uc778\uc815\ubcf4 \ubcf4\uc720\u2024\uc774\uc6a9\uae30\uac04 \ub0b4\uc5d0\uc11c \uac1c\uc778\uc815\ubcf4\ub97c \ucc98\ub9ac\u2024\ubcf4\uc720\ud569\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac \ubc0f \ubcf4\uc720 \uae30\uac04\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. \ud578\ub4dc\ud3f0 \ubc88\ud638 \ubcf4\uc874 \uc774\uc720 : \ubd88\ub7c9\ud68c\uc6d0\uc758 \ubd80\uc815\uc774\uc6a9\ubc29\uc9c0\uc640 \ube44\uc778\uac00 \uc0ac\uc6a9\ubc29\uc9c0 \ubc0f \uc11c\ube44\uc2a4 \uc774\uc6a9\uc758 \ud63c\uc120\ubc29\uc9c0 \ubcf4\uc874 \uae30\uac04 : \uc11c\ube44\uc2a4 \ud0c8\ud1f4\uc2dc\uae4c\uc9c0 \uc6f9\uc0ac\uc774\ud2b8 \ubc29\ubb38\uae30\ub85d \ubcf4\uc874 \uc774\uc720 : \ud1b5\uc2e0\ube44\ubc00\ubcf4\ud638\ubc95 \ubcf4\uc874 \uae30\uac04 : \uc11c\ube44\uc2a4 \ud0c8\ud1f4\uc2dc\uae4c\uc9c0 \ubcf8\uc778\ud655\uc778\uc5d0 \uad00\ud55c \uae30\ub85d \ubcf4\uc874 \uc774\uc720 : \uc815\ubcf4\ud1b5\uc2e0\ub9dd \uc774\uc6a9\ucd09\uc9c4 \ubc0f \uc815\ubcf4\ubcf4\ud638 \ub4f1\uc5d0 \uad00\ud55c \ubc95\ub960 \ubcf4\uc874 \uae30\uac04 : \uc11c\ube44\uc2a4 \ud0c8\ud1f4\uc2dc\uae4c\uc9c0 \ud45c\uc2dc/\uad11\uace0\uc5d0 \uad00\ud55c \uae30\ub85d \ubcf4\uc874 \uc774\uc720 : \uc815\ubcf4\ud1b5\uc2e0\ub9dd \uc774\uc6a9\ucd09\uc9c4 \ubc0f \uc815\ubcf4\ubcf4\ud638 \ub4f1\uc5d0 \uad00\ud55c \ubc95\ub960 \ubcf4\uc874 \uae30\uac04 : \uc11c\ube44\uc2a4 \ud0c8\ud1f4\uc2dc\uae4c\uc9c0 \uc18c\ube44\uc790\uc758 \ubd88\ub9cc \ub610\ub294 \ubd84\uc7c1\ucc98\ub9ac\uc5d0 \uad00\ud55c\uae30\ub85d \ubcf4\uc874 \uc774\uc720 : \uc804\uc790\uc0c1\uac70\ub798\ub4f1\uc5d0\uc11c\uc758 \uc18c\ube44\uc790\ubcf4\ud638\uc5d0 \uad00\ud55c \ubc95\ub960 \ubcf4\uc874 \uae30\uac04 : \uc11c\ube44\uc2a4 \ud0c8\ud1f4\uc2dc\uae4c\uc9c0 3. \uac1c\uc778\uc815\ubcf4\uc758 \uc81c3\uc790 \uc81c\uacf5 \ud68c\uc0ac\ub294 \ubc95\ub839\uc758 \uaddc\uc815\uc5d0 \uc758\uac70\ud558\uc5ec, \uc218\uc0ac \ubaa9\uc801\uc73c\ub85c \ubc95\ub839\uc5d0 \uc815\ud574\uc9c4 \uc808\ucc28\uc640 \ubc29\ubc95\uc5d0 \ub530\ub77c \uc218\uc0ac\uae30\uad00\uc758 \uc694\uad6c\uac00 \uc788\ub294 \uacbd\uc6b0, \ub610\ub294 \uace0\uac1d\uc774 \ubcc4\ub3c4\ub85c \ub3d9\uc758\ud55c \uacbd\uc6b0 \uc678\uc5d0\ub294 \uac1c\uc778\uc815\ubcf4\ub97c \uc81c3\uc790\uc5d0\uac8c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. 4. \uc815\ubcf4\uc8fc\uccb4\uc640 \ubc95\uc815\ub300\ub9ac\uc778\uc758 \uad8c\ub9ac\u2024\uc758\ubb34 \ubc0f \ud589\uc0ac\ubc29\ubc95 \uc815\ubcf4\uc8fc\uccb4\ub294 \ud68c\uc0ac\uc5d0 \ub300\ud574 \uc5b8\uc81c\ub4e0\uc9c0 \ub2e4\uc74c \uac01 \ud638\uc758 \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638 \uad00\ub828 \uad8c\ub9ac\ub97c \ud589\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac1c\uc778\uc815\ubcf4 \uc5f4\ub78c\uc694\uad6c \uc624\ub958 \ub4f1\uc774 \uc788\uc744 \uacbd\uc6b0 \uc815\uc815 \uc694\uad6c \uc0ad\uc81c\uc694\uad6c \ucc98\ub9ac\uc815\uc9c0 \uc694\uad6c 5. \ucc98\ub9ac\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9 \ud68c\uc0ac\ub294 \ub2e4\uc74c\uc758 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9\uc744 \ucc98\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud734\ub300\uc804\ud654\ubc88\ud638, \uc774\uba54\uc77c\uc8fc\uc18c 6. \uac1c\uc778\uc815\ubcf4\uc758 \ud30c\uae30 \ud68c\uc0ac\ub294 \uac1c\uc778\uc815\ubcf4 \ubcf4\uc720\uae30\uac04\uc758 \uacbd\uacfc, \ucc98\ub9ac\ubaa9\uc801 \ub2ec\uc131 \ub4f1 \uac1c\uc778\uc815\ubcf4\uac00 \ubd88\ud544\uc694\ud558\uac8c \ub418\uc5c8\uc744 \ub54c\uc5d0\ub294 \uc9c0\uccb4\uc5c6\uc774 \ud574\ub2f9 \uac1c\uc778\uc815\ubcf4\ub97c \ud30c\uae30\ud569\ub2c8\ub2e4. \ud68c\uc0ac\ub294 \ub2e4\uc74c\uc758 \ubc29\ubc95\uc73c\ub85c \uac1c\uc778\uc815\ubcf4\ub97c \ud30c\uae30\ud569\ub2c8\ub2e4. \uc804\uc790\uc801 \ud30c\uc77c : \uad00\ub828 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc601\uad6c \uc0ad\uc81c \uc885\uc774 \ubb38\uc11c : \ubd84\uc1c4\ud558\uac70\ub098 \uc18c\uac01 7. \uac1c\uc778\uc815\ubcf4\uc758 \uc548\uc804\uc131 \ud655\ubcf4\uc870\uce58 \ud68c\uc0ac\ub294 \uac1c\uc778\uc815\ubcf4\uc758 \uc548\uc804\uc131 \ud655\ubcf4\ub97c \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \uc870\uce58\ub97c \ucde8\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud68c\uc0ac\ub294 \uac1c\uc778\uc815\ubcf4\uac00 \ub204\ucd9c\ub418\uc9c0 \uc54a\ub3c4\ub85d \uae30\uc220\uc801, \uad00\ub9ac\uc801 \ub300\ucc45\uc744 \uac15\uad6c\ud558\ub294\ub370 \ucd5c\uc120\uc744 \ub2e4\ud569\ub2c8\ub2e4. \uad00\ub9ac\uc801 \uc870\uce58 : \uac1c\uc778\uc815\ubcf4 \uc811\uadfc \uad8c\ud55c\uc744 \ub2e8\uacc4\uc801\uc73c\ub85c \ubd80\uc5ec\ud558\uc5ec \uc811\uadfc \uac00\ub2a5\ud55c \uc9c1\uc6d0\uc744 \ucd5c\uc18c\ud55c\uc73c\ub85c \uc81c\ud55c, \ubcf8 \uc815\ucc45\uc758 \uc900\uc218 \ubc0f \uae30\ud0c0 \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ub97c \uc704\ud55c \uc9c0\uc18d\uc801\uc778 \uad50\uc721 \uc2e4\uc2dc, \uac1c\uc778\uc815\ubcf4 \uc811\uadfc\uc744 \uc704\ud55c \uc6b4\uc601\uc790 \ube44\ubc00\ubc88\ud638 \uc815\uae30\uc801\uc778 \uac31\uc2e0, \uc554\ud638 \uc54c\uace0\ub9ac\uc998\uc744 \uc774\uc6a9\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c \uc0c1\uc758 \uac1c\uc778\uc815\ubcf4\ub97c \uc548\uc804\ud558\uac8c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ubcf4\uc548\uc7a5\uce58. \uae30\uc220\uc801 \uc870\uce58 : \uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\uc2dc\uc2a4\ud15c(\ub610\ub294 \uac1c\uc778\uc815\ubcf4\uac00 \uc800\uc7a5\ub41c \ucef4\ud4e8\ud130)\uc758 \ube44\ubc00\ubc88\ud638 \uc124\uc815 \ub4f1 \uc811\uadfc\uad8c\ud55c \uad00\ub9ac, \ubc31\uc2e0\uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub4f1\uc744 \uc774\uc6a9\ud558\uc5ec \ucef4\ud4e8\ud130 \ubc14\uc774\ub7ec\uc2a4 \ubc29\uc9c0\uc7a5\uce58, \uac1c\uc778\uc815\ubcf4\uac00 \uc800\uc7a5\ub41c \ud30c\uc77c\uc758 \uc554\ud638\ud654. \ubb3c\ub9ac\uc801 \uc870\uce58 : \uac1c\uc778\uc815\ubcf4 \uad00\ub828 \ubb38\uc11c \uc989\uc2dc \ud30c\uc1c4 8. \uac1c\uc778\uc815\ubcf4 \uc790\ub3d9 \uc218\uc9d1 \uc7a5\uce58\uc758 \uc124\uce58\u2219\uc6b4\uc601 \ubc0f \uac70\ubd80\uc5d0 \uad00\ud55c \uc0ac\ud56d \ucfe0\ud0a4\uc758 \uc0ac\uc6a9 \ud68c\uc0ac\ub294 \uc774\uc6a9\uc790\uc5d0\uac8c \uac1c\ubcc4\uc801\uc778 \ub9de\ucda4\uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574 \uc774\uc6a9\uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uace0 \uc218\uc2dc\ub85c \ubd88\ub7ec\uc624\ub294 \u2018\ucfe0\ud0a4(cookie)\u2019\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ucfe0\ud0a4\ub294 \uc6f9\uc0ac\uc774\ud2b8\ub97c \uc6b4\uc601\ud558\ub294\ub370 \uc774\uc6a9\ub418\ub294 \uc11c\ubc84(http)\uac00 \uc774\uc6a9\uc790\uc758 \ucef4\ud4e8\ud130 \ube0c\ub77c\uc6b0\uc800\uc5d0\uac8c \ubcf4\ub0b4\ub294 \uc18c\ub7c9\uc758 \uc815\ubcf4\uc785\ub2c8\ub2e4. \ud68c\uc6d0\uaed8\uc11c \ud648\ud398\uc774\uc9c0\uc5d0 \uc811\uc18d\uc744 \ud558\uba74 \ubcf8 \ud68c\uc0ac\uc758 \ucef4\ud4e8\ud130\ub294 \ud68c\uc6d0\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc788\ub294 \ucfe0\ud0a4\uc758 \ub0b4\uc6a9\uc744 \uc77d\uace0, \ud68c\uc6d0\uc758 \ucd94\uac00\uc815\ubcf4\ub97c \ud68c\uc6d0\uc758 \ucef4\ud4e8\ud130\uc5d0\uc11c \ucc3e\uc544 \ucd94\uac00 \uc785\ub825\uc5c6\uc774 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ucfe0\ud0a4\ub294 \ud68c\uc6d0\uc758 \ucef4\ud4e8\ud130\ub294 \uc2dd\ubcc4\ud558\uc9c0\ub9cc \ud68c\uc6d0\uc744 \uac1c\uc778\uc801\uc73c\ub85c \uc2dd\ubcc4\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud68c\uc6d0\uaed8\uc11c\ub294 \uc6f9\ube0c\ub77c\uc6b0\uc800\uc758 \uc635\uc158\uc744 \uc870\uc815\ud568\uc73c\ub85c\uc368 \ubaa8\ub4e0 \ucfe0\ud0a4\ub97c \ub2e4 \ubc1b\uc544\ub4e4\uc774\uac70\ub098, \ucfe0\ud0a4\uac00 \uc124\uce58\ub420 \ub54c \ud1b5\uc9c0\ub97c \ubcf4\ub0b4\ub3c4\ub85d \ud558\uac70\ub098, \uc544\ub2c8\uba74 \ubaa8\ub4e0 \ucfe0\ud0a4\ub97c \uac70\ubd80\ud560 \uc218 \uc788\ub294 \uc120\ud0dd\uad8c\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8, \ucfe0\ud0a4\uc758 \uc800\uc7a5\uc744 \uac70\ubd80\ud560 \uacbd\uc6b0 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc758 \uc774\uc6a9\uc5d0 \uc81c\ud55c\uc774 \uc0dd\uae38 \uc218 \uc788\uc74c\uc744 \uc720\ub150\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \ub85c\uadf8 \uc815\ubcf4\uc758 \uc774\uc6a9 \uc0ac\uc6a9\uc790\uac00 \uc774 \uc6f9\uc0ac\uc774\ud2b8\ub098 \uc774 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud560 \ub54c \uc0ac\uc6a9\uc790 \uc811\uc18d \ube48\ub3c4, \uc5d0\ub7ec \ub85c\uadf8 \ub4f1\uc758 \uc815\ubcf4\uac00 \uc218\uc9d1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc815\ubcf4\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub354 \ub098\uc740 \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uace0 \uc774 \uc11c\ube44\uc2a4\ub97c \uac1c\uc120\ud558\uae30 \uc704\ud55c \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\ub4e4\uc758 \uc774 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ub300\ud55c \uc774\uc6a9\uc744 \ud3c9\uac00\ud558\ub294\ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. Google Analytics \uc0ac\uc6a9 \uc774 \uc11c\ube44\uc2a4\uc758 \uc774\uc6a9 \ud604\ud669 \ud3c9\uac00\ub97c \uc704\ud574, Google Analytics\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc811\uc18d \uc218 \ubc0f \uc5d0\ub7ec \ub85c\uadf8 \uc815\ubcf4\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Google Analytics \uc0ac\uc6a9 \uc2dc, \uac1c\uc778 \uc2dd\ubcc4 \uc815\ubcf4\ub294 \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Google Analytics\ub97c \uc0ac\uc6a9\ud574 \uc218\uc9d1\ud55c \ub370\uc774\ud130\ub294 Google \uac1c\uc778\uc815\ubcf4\ubcf4\ud638 \uc815\ucc45\uc5d0 \ub530\ub77c \uad00\ub9ac\ud569\ub2c8\ub2e4. Google Analytics\uc758 \uc11c\ube44\uc2a4 \uc57d\uad00 \ubc0f \uac1c\uc778\uc815\ubcf4\ubcf4\ud638 \uc815\ucc45\uc5d0 \ub300\ud55c \uc815\ubcf4\ub294 Google Analytics \ud648\ud398\uc774\uc9c0\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624. Google Analytics \uc11c\ube44\uc2a4 \uc57d\uad00 [ \ud074\ub9ad ] Google \uc815\ucc45 \ubc0f \uc6d0\uce59 [ \ud074\ub9ad ] 9. \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ucc45\uc784\uc790 \ud68c\uc0ac\ub294 \uace0\uac1d\uc758 \uac1c\uc778\uc815\ubcf4\ub97c \ubcf4\ud638\ud558\uace0 \uac1c\uc778\uc815\ubcf4\uc640 \uad00\ub828\ud55c \ubd88\ub9cc\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud558\uc5ec \uc544\ub798\uc640 \uac19\uc774 \uac1c\uc778\uc815\ubcf4\uad00\ub9ac\ucc45\uc784\uc790\ub97c \uc9c0\uc815\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uace0\uac1d\uc740 \ud68c\uc0ac\uc758 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uc2dc\uba70 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uac1c\uc778\uc815\ubcf4\ubcf4\ud638 \uad00\ub828 \ubbfc\uc6d0\uc744 \uac1c\uc778\uc815\ubcf4\uad00\ub9ac\ucc45\uc784\uc790\uc5d0\uac8c \uc2e0\uace0\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud68c\uc0ac\ub294 \uace0\uac1d\uc758 \uc2e0\uace0\uc0ac\ud56d\uc5d0 \ub300\ud574 \uc2e0\uc18d\ud558\uac8c \ucda9\ubd84\ud55c \ub2f5\ubcc0\uc744 \ub4dc\ub9b4 \uac83\uc785\ub2c8\ub2e4. \uac1c\uc778\uc815\ubcf4 \uad00\ub828 \ub2f4\ub2f9\uc790 \uc131\uba85 : \uac15\uc815\uc11d \uc5f0\ub77d\ucc98 : 010-7597-2044 \uc774\uba54\uc77c : 4peeps.kang@gmail.com 10. \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68 \ubcc0\uacbd \uc774 \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68\uc740 2019. 10. 31\ubd80\ud130 \uc801\uc6a9\ub429\ub2c8\ub2e4.")}}]),t}(n.Component),X=function(){return s.a.createElement(A.a,null,s.a.createElement("h1",{className:"title"},s.a.createElement("a",{href:"/",style:{textDecoration:"none"}},"WANDERLAND")),s.a.createElement(p.b,{exact:!0,path:"/",component:O}),s.a.createElement(p.d,null,s.a.createElement(p.b,{exact:!0,path:"/tutorial",component:h}),s.a.createElement(p.b,{path:"/login",component:S}),s.a.createElement(p.b,{path:"/agree",component:J}),s.a.createElement(p.b,{path:"/privacy",component:T}),s.a.createElement(p.b,{path:"/quizhome/:quiz_name/:user_id",component:Q}),s.a.createElement(p.b,{path:"/quizpage/:quiz_name/:fake/:stage/:user_id",component:W})))},K=(a(69),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(j.a,null,s.a.createElement("div",{className:"app"},s.a.createElement(X,null)))}}]),t}(n.Component));a(70);c.a.render(s.a.createElement(K,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9967f8fa.chunk.js.map