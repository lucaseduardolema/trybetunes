(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(21),i=n.n(s),c=(n(29),n(3)),o=n(4),u=n(6),d=n(5),l=n(8),j=n(2),b=n.n(j),h=n(7),p=n(11),O=n(15),f="user",m=function(e){return localStorage.setItem(f,JSON.stringify(e))},v=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},x=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(f));null===t&&(t={}),v(t)(e)}))},g=function(e){return new Promise((function(t){m(Object(O.a)(Object(O.a)({},{name:"",email:"",image:"",description:""}),e)),v("OK")(t)}))},k=n(0),S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)("p",{children:"Carregando..."})}}]),n}(r.a.Component),y=S,w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleGetUser=function(){e.setState({isLoading:!0},Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:n=t.sent,e.setState({name:n.name,isLoading:!1});case 4:case"end":return t.stop()}}),t)}))))},e.state={name:"",isLoading:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleGetUser()}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.isLoading;return Object(k.jsxs)("header",{"data-testid":"header-component",children:[Object(k.jsxs)("nav",{children:[Object(k.jsx)(p.b,{"data-testid":"link-to-search",to:"/trybetunes/search",children:"Search"}),Object(k.jsx)(p.b,{"data-testid":"link-to-favorites",to:"/trybetunes/favorites",children:"Favorites"}),Object(k.jsx)(p.b,{"data-testid":"link-to-profile",to:"/trybetunes/profile",children:"Profile"})]}),n?Object(k.jsx)(y,{}):Object(k.jsx)("span",{"data-testid":"header-user-name",children:t})]})}}]),n}(r.a.Component),C=n(24),L="favorite_songs";JSON.parse(localStorage.getItem(L))||localStorage.setItem(L,JSON.stringify([]));var F=function(){return JSON.parse(localStorage.getItem(L))},I=function(e){return localStorage.setItem(L,JSON.stringify(e))},N=function(e){return function(t){setTimeout((function(){t(e)}),500)}},U=function(){return new Promise((function(e){var t=F();N(t)(e)}))},D=function(e){return new Promise((function(t){if(e){var n=F();I([].concat(Object(C.a)(n),[e]))}N("OK")(t)}))},P=function(e){return new Promise((function(t){var n=F();I(n.filter((function(t){return t.trackId!==e.trackId}))),N("OK")(t)}))},E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).isFavorite=function(){var t=e.props,n=t.favorites,a=t.trackId;n.some((function(e){return e.trackId===a}))?e.setState({isFav:!0}):e.setState({isFav:!1})},e.handleFav=function(){e.setState((function(e){return{isLoading:!0,isFav:!e.isFav}}),Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props.objTotal,!e.state.isFav){t.next=8;break}return t.next=5,D(n);case 5:e.setState({isLoading:!1}),t.next=11;break;case 8:return t.next=10,P(n);case 10:e.setState({isLoading:!1});case 11:case"end":return t.stop()}}),t)}))))},e.state={isLoading:!1,isFav:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.isFavorite()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isFav,a=this.props,r=a.trackName,s=a.previewUrl,i=a.trackId,c=Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:r}),Object(k.jsxs)("audio",{"data-testid":"audio-component",src:s,controls:!0,children:[Object(k.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," "," ",Object(k.jsx)("code",{children:"audio"}),"."]}),Object(k.jsxs)("label",{htmlFor:i,"data-testid":"checkbox-music-".concat(i),children:["Favorita",Object(k.jsx)("input",{id:i,name:"fav",type:"checkbox",value:i,checked:n,onChange:this.handleFav})]})]});return Object(k.jsx)("div",{children:t?Object(k.jsx)(y,{}):c})}}]),n}(r.a.Component),J=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=J,M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).fetchAlbum=Object(h.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,t.next=3,R(n);case 3:a=t.sent,e.setState({info:a[0],musics:a.slice(1)});case 5:case"end":return t.stop()}}),t)}))),e.favorites=function(){e.setState({isLoading:!0},Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:n=t.sent,e.setState({isLoading:!1,favorites:n});case 4:case"end":return t.stop()}}),t)}))))},e.state={isLoading:!1,info:{},musics:[],favorites:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchAlbum(),this.favorites()}},{key:"render",value:function(){var e=this.state,t=e.musics,n=e.info,a=e.isLoading,r=e.favorites,s=Object(k.jsx)("div",{children:t.map((function(e){return Object(k.jsx)(E,{trackName:e.trackName,previewUrl:e.previewUrl,trackId:e.trackId,favorites:r,objTotal:e},e.trackId)}))});return Object(k.jsxs)("div",{"data-testid":"page-album",children:[Object(k.jsx)(w,{}),Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{src:n.artworkUrl100,alt:n.artistName}),Object(k.jsx)("p",{"data-testid":"album-name",children:n.collectionName}),Object(k.jsx)("p",{"data-testid":"artist-name",children:n.artistName})]}),a?Object(k.jsx)(y,{}):s]})}}]),n}(r.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).getSongs=Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:n=t.sent,e.setState({songs:n});case 4:case"end":return t.stop()}}),t)}))),e.handleFav=function(t){var n=t.target,a=e.state.songs.find((function(e){return e.trackId===parseInt(n.value,10)}));e.setState({isLoading:!0},Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(a);case 2:return t.next=4,U();case 4:n=t.sent,e.setState({isLoading:!1,songs:n});case 6:case"end":return t.stop()}}),t)}))))},e.state={isLoading:!1,songs:[],isFav:!0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getSongs()}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoading,a=t.songs,r=t.isFav,s=Object(k.jsx)("div",{children:a.map((function(t){var n=t.trackName,a=t.previewUrl,s=t.trackId,i=t.artworkUrl60;return Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:n}),Object(k.jsx)("img",{src:i,alt:n}),Object(k.jsxs)("audio",{"data-testid":"audio-component",src:a,controls:!0,children:[Object(k.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," "," ",Object(k.jsx)("code",{children:"audio"}),"."]}),Object(k.jsxs)("label",{htmlFor:s,"data-testid":"checkbox-music-".concat(s),children:["Favorita",Object(k.jsx)("input",{id:s,name:"fav",type:"checkbox",value:s,checked:r,onChange:e.handleFav})]})]},s)}))});return Object(k.jsxs)("div",{"data-testid":"page-favorites",children:[Object(k.jsx)(w,{}),Object(k.jsx)("p",{children:"Favoritos"}),n?Object(k.jsx)(y,{}):s]})}}]),n}(r.a.Component),A=n(14),K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(A.a)({},a,r),(function(){r.length>=3?e.setState({isDisabled:!1}):e.setState({isDisabled:!0})}))},e.handleClick=function(){e.setState({isLoading:!0},Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.user,t.next=3,g({name:n});case 3:e.setState({isSavedName:!0});case 4:case"end":return t.stop()}}),t)}))))},e.state={user:"",isDisabled:!0,isLoading:!1,isSavedName:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.user,n=e.isDisabled,a=e.isLoading,r=e.isSavedName;return Object(k.jsxs)("div",{"data-testid":"page-login",className:"container-login",children:[Object(k.jsx)("span",{className:"logo-login"}),r&&Object(k.jsx)(l.a,{to:"/trybetunes/search"}),a?Object(k.jsx)(y,{}):Object(k.jsxs)("form",{children:[Object(k.jsx)("label",{htmlFor:"user",children:Object(k.jsx)("input",{"data-testid":"login-name-input",id:"user",type:"text",name:"user",value:t,placeholder:"Usu\xe1rio",onChange:this.handleChange})}),Object(k.jsx)("label",{htmlFor:"password",children:Object(k.jsx)("input",{type:"password",id:"password",placeholder:"Senha"})}),Object(k.jsx)("button",{"data-testid":"login-submit-button",type:"button",disabled:n,onClick:this.handleClick,children:"Entrar"})]})]})}}]),n}(r.a.Component),G=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{"data-testid":"page-not-found",children:Object(k.jsx)("p",{children:"404"})})}}]),n}(r.a.Component),q=G,B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleUser=Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:n=t.sent,e.setState({isLoading:!1,user:n});case 4:case"end":return t.stop()}}),t)}))),e.state={isLoading:!0,user:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleUser()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.user,a=Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{"data-testid":"profile-image",src:n.image,alt:n.name}),Object(k.jsxs)("p",{children:["Nome:",Object(k.jsx)("span",{children:n.name})]}),Object(k.jsxs)("p",{children:["Email:",Object(k.jsx)("span",{children:n.email})]}),Object(k.jsxs)("p",{children:["Descri\xe7\xe3o:",Object(k.jsx)("span",{children:n.description})]}),Object(k.jsx)(p.b,{to:"profile/edit",children:"Editar perfil"})]});return Object(k.jsxs)("div",{"data-testid":"page-profile",children:[Object(k.jsx)(w,{}),Object(k.jsx)("p",{children:"Perfil"}),Object(k.jsx)("div",{children:t?Object(k.jsx)(y,{}):a})]})}}]),n}(r.a.Component),_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).allUserInfoExist=function(){var t=e.state.user;Object.values(t).includes("")||e.setState({isDisabled:!1})},e.handleUser=Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:n=t.sent,e.setState({isLoading:!1,user:n},(function(){e.allUserInfoExist()}));case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState((function(e){return{user:Object(O.a)(Object(O.a)({},e.user),{},Object(A.a)({},a,r))}}),(function(){e.allUserInfoExist()}))},e.saveProfile=function(){var t,n=e.state.user,a=n.name,r=n.email,s=n.description,i=n.image;t={name:a,email:r,image:i,description:s},new Promise((function(e){m(Object(O.a)({},t)),v("OK")(e)})),e.setState({isSavedUser:!0})},e.state={isLoading:!0,user:{},isDisabled:!0,isSavedUser:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleUser()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.user,a=n.name,r=n.email,s=n.description,i=n.image,c=e.isDisabled,o=e.isSavedUser;return Object(k.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(k.jsx)(w,{}),Object(k.jsx)("p",{children:"Editar Perfil"}),t&&Object(k.jsx)(y,{}),Object(k.jsxs)("form",{children:[Object(k.jsxs)("label",{htmlFor:"name",children:["Editar nome:",Object(k.jsx)("input",{"data-testid":"edit-input-name",id:"name",name:"name",type:"text",value:a,onChange:this.handleChange})]}),Object(k.jsxs)("label",{htmlFor:"email",children:["Editar e-mail:",Object(k.jsx)("input",{"data-testid":"edit-input-email",id:"email",name:"email",type:"email",value:r,onChange:this.handleChange})]}),Object(k.jsxs)("label",{htmlFor:"description",children:["Editar descri\xe7\xe3o:",Object(k.jsx)("input",{"data-testid":"edit-input-description",id:"description",name:"description",type:"text",value:s,onChange:this.handleChange})]}),Object(k.jsxs)("label",{htmlFor:"image",children:["Url da imagem:",Object(k.jsx)("input",{"data-testid":"edit-input-image",id:"image",name:"image",type:"text",value:i,onChange:this.handleChange})]}),Object(k.jsx)("button",{"data-testid":"edit-button-save",type:"button",disabled:c,onClick:this.saveProfile,children:"Salvar"})]}),o&&Object(k.jsx)(l.a,{to:"/profile"})]})}}]),n}(r.a.Component),z=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r,s,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,i=s.results,c=i.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=z,Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(A.a)({},a,r),(function(){r.length>=2&&e.setState({isDisabled:!1})}))},e.searchResult=Object(h.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.search,t.next=3,H(n);case 3:a=t.sent,e.setState((function(e){return{termSearch:e.search,search:"",isLoading:!0,hasResults:!0,results:a}}),(function(){e.setState({isLoading:!1})}));case 5:case"end":return t.stop()}}),t)}))),e.state={search:"",termSearch:"",isDisabled:!0,isLoading:!1,hasResults:!1,results:[]},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isDisabled,n=e.search,a=e.isLoading,r=e.hasResults,s=e.termSearch,i=e.results;return Object(k.jsxs)("div",{"data-testid":"page-search",children:[Object(k.jsx)(w,{}),Object(k.jsx)("p",{children:"Search"}),Object(k.jsxs)("form",{children:[Object(k.jsx)("input",{"data-testid":"search-artist-input",type:"text",name:"search",value:n,onChange:this.handleChange}),Object(k.jsx)("button",{"data-testid":"search-artist-button",type:"button",disabled:t,onClick:this.searchResult,children:"Pesquisar"})]}),a&&Object(k.jsx)(y,{}),r?Object(k.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(s)}):"",i.length>0?i.map((function(e){var t=e.artistName,n=e.artworkUrl100,a=e.collectionId,r=e.collectionName;return Object(k.jsx)("div",{children:Object(k.jsxs)(p.b,{"data-testid":"link-to-album-".concat(a),to:"/album/".concat(a),children:[Object(k.jsx)("img",{src:n,alt:t}),Object(k.jsx)("p",{children:r}),Object(k.jsx)("p",{children:t})]})},a)})):Object(k.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"})]})}}]),n}(r.a.Component),V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(l.d,{children:[Object(k.jsx)(l.b,{exact:!0,path:"/trybetunes",component:K}),Object(k.jsx)(l.b,{path:"/trybetunes/search",component:Q}),Object(k.jsx)(l.b,{path:"/trybetunes/album/:id",component:M}),Object(k.jsx)(l.b,{path:"/trybetunes/favorites",component:T}),Object(k.jsx)(l.b,{exact:!0,path:"/trybetunes/profile",component:B}),Object(k.jsx)(l.b,{path:"/trybetunes/profile/edit",component:_}),Object(k.jsx)(l.b,{path:"*",component:q})]})}}]),n}(r.a.Component),W=V;i.a.render(Object(k.jsx)(p.a,{children:Object(k.jsx)(W,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.35d7162b.chunk.js.map