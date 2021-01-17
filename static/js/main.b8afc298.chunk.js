(this.webpackJsonpdevelopment=this.webpackJsonpdevelopment||[]).push([[0],{77:function(t,e,i){},78:function(t,e,i){},87:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i(0),s=i.n(n),r=i(13),o=i.n(r),c=(i(77),i(68)),l=i(15),d=i(16),h=i(18),u=i(17),m=(i(78),i(47)),j=i(8),p=i(22),b=i(19),g=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).createItem=function(t){return Object(a.jsx)("div",{children:Object(a.jsxs)(j.a,{className:"fullCard mb-4",children:[Object(a.jsx)(j.a.Img,{className:"card-image",variant:"top",src:n.props.images[t.icon_name]}),Object(a.jsxs)(j.a.Body,{children:[Object(a.jsxs)(j.a.Title,{children:[t.title," "]}),Object(a.jsx)(j.a.Text,{className:"card-description",children:t.description}),Object(a.jsxs)(j.a.Text,{children:[Object(a.jsxs)(p.a,{className:"card-badge",variant:"light",children:["~ ",t.duration," mins"]}),Object(a.jsxs)(p.a,{className:"card-badge",variant:"light",children:[t.intensity," intensity"]})]}),Object(a.jsx)(b.a,{className:"blue-button",onClick:function(){return n.props.addCard(t)},children:"Do it"})]})]})})},n}return Object(d.a)(i,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{children:this.props.list.map(this.createItem)})})}}]),i}(n.Component),y=i(55),v=i(10),O=i(60),f=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(l.a)(this,i),(a=e.call(this,t)).getTitle=function(t,e){return t+" ("+e+")"},a.reset=function(){a.props.filterDuration("all"),a.props.filterIntensity("any"),a.props.changeSort("default")},a}return Object(d.a)(i,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"sticky",children:Object(a.jsxs)(O.a,{className:"toolbar",children:[Object(a.jsx)("p",{className:"toolbar-text-no-padding",children:"Filter by:"}),Object(a.jsxs)(y.a,{className:"dropdown-button",id:"dropdown-button",title:this.getTitle("Duration",this.props.duration),children:[Object(a.jsx)(v.a.Item,{eventKey:"all",onSelect:this.props.filterDuration,children:"All"}),Object(a.jsx)(v.a.Item,{eventKey:"short",onSelect:this.props.filterDuration,children:"Short"}),Object(a.jsx)(v.a.Item,{eventKey:"medium",onSelect:this.props.filterDuration,children:"Medium"}),Object(a.jsx)(v.a.Item,{eventKey:"long",onSelect:this.props.filterDuration,children:"Long"})]}),Object(a.jsxs)(y.a,{className:"dropdown-button",id:"dropdown-button",title:this.getTitle("Intensity",this.props.intensity),children:[Object(a.jsx)(v.a.Item,{eventKey:"any",onSelect:this.props.filterIntensity,children:"Any"}),Object(a.jsx)(v.a.Item,{eventKey:"low",onSelect:this.props.filterIntensity,children:"Low"}),Object(a.jsx)(v.a.Item,{eventKey:"moderate",onSelect:this.props.filterIntensity,children:"Moderate"}),Object(a.jsx)(v.a.Item,{eventKey:"high",onSelect:this.props.filterIntensity,children:"High"})]}),Object(a.jsx)("p",{className:"toolbar-text",children:"Sort by:"}),Object(a.jsxs)(y.a,{className:"dropdown-button",id:"sort-dropdown-button",title:this.props.sorter,children:[Object(a.jsx)(v.a.Item,{eventKey:"default",onSelect:this.props.changeSort,children:"Default"}),Object(a.jsx)(v.a.Item,{eventKey:"Duration (low to high)",onSelect:this.props.changeSort,children:"Duration (low to high)"}),Object(a.jsx)(v.a.Item,{eventKey:"Duration (high to low)",onSelect:this.props.changeSort,children:"Duration (high to low)"})]}),Object(a.jsx)("a",{className:"toolbar-text reset-link",onClick:this.reset,children:"reset all"})]})})}}]),i}(n.Component),x=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(l.a)(this,i),(a=e.call(this,t)).onSelectFilterDuration=function(t){a.setState({duration:t})},a.onSelectFilterIntensity=function(t){a.setState({intensity:t})},a.onSelectChangeSort=function(t){a.setState({sorter:t})},a.matchesFilterDuration=function(t){return"all"===a.state.duration||("short"===a.state.duration&&t.duration<=20||("medium"===a.state.duration&&t.duration>20&&t.duration<60||"long"===a.state.duration&&t.duration>=60))},a.matchesFilterIntensity=function(t){return"any"===a.state.intensity||a.state.intensity===t.intensity},a.matchesFilters=function(t){return a.matchesFilterDuration(t)&&a.matchesFilterIntensity(t)},a.getSorter=function(t,e){return"default"===a.state.sorter?null:"Duration (low to high)"===a.state.sorter?t.duration-e.duration:"Duration (high to low)"===a.state.sorter?e.duration-t.duration:void 0},a.state={duration:"all",intensity:"any",sorter:"default"},a}return Object(d.a)(i,[{key:"render",value:function(){this.props.list;return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{duration:this.state.duration,intensity:this.state.intensity,sorter:this.state.sorter,filterDuration:this.onSelectFilterDuration,filterIntensity:this.onSelectFilterIntensity,changeSort:this.onSelectChangeSort}),Object(a.jsx)("div",{children:Object(a.jsx)(g,{list:this.props.list.filter(this.matchesFilters).sort(this.getSorter),addCard:this.props.addCard,images:this.props.images})})]})}}]),i}(n.Component),w=(i(82),i(61)),k=i(111),S=i(64),C=i.n(S),I=i(66),N=i.n(I),D=i(65),T=i.n(D),M=i(62),_=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).createItem=function(t){return Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{className:"mb-2 px-0 cart-card",children:Object(a.jsxs)(j.a.Body,{children:[Object(a.jsx)(k.a,{className:"close-button","aria-label":"delete",onClick:function(e){n.props.removeCard(e,t)},children:Object(a.jsx)(C.a,{fontSize:"inherit"})}),Object(a.jsxs)(j.a.Title,{children:[t.title," "]}),Object(a.jsxs)(j.a.Text,{children:[Object(a.jsxs)(p.a,{className:"card-badge",variant:"light",children:["~ ",t.duration," mins"]}),Object(a.jsxs)(p.a,{className:"card-badge",variant:"light",children:[t.intensity," intensity"]})]})]})})})},n.sumMinutes=function(){var t,e=0,i=Object(w.a)(n.props.list);try{for(i.s();!(t=i.n()).done;){e+=t.value.duration}}catch(a){i.e(a)}finally{i.f()}n.setState({total_mins:e})},n.makeBullet=function(t){return console.log(t),"\u2022  "+t.title+" (~"+t.duration+" min)"},n.downloadCart=function(t){t.stopPropagation();var e=new M.a;0===n.props.list.length?e.text(["Hello!","Looks like you haven't added anything to My Day.","Return to the main page and add some activities!"],30,30):(e.text(["Hello!","Congrats on planning out some things to do today.","This is what you're going to:"],30,30),e.text(n.props.list.map(n.makeBullet),40,55)),e.save("MyDay.pdf")},n.state={total_mins:0},n}return Object(d.a)(i,[{key:"render",value:function(){var t,e,i,n=this.props.cartOpen?"my-day open":" my-day closed";return i=0==this.props.list.length?Object(a.jsx)("p",{className:"mx-3 mt-3 text-center",children:Object(a.jsx)("i",{children:'You have no activities selected! Select activities by clicking the "Do it" button on an activity card.'})}):Object(a.jsx)(m.a,{children:this.props.list.map(this.createItem)}),this.props.cartOpen?(t=Object(a.jsxs)("div",{className:"my-day-body",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"My Day"}),Object(a.jsxs)("h5",{children:[Math.floor(this.props.totalMins/60)," hr ",this.props.totalMins%60," min"]}),Object(a.jsx)("div",{className:"my-day-items",children:i})]}),Object(a.jsx)(b.a,{className:"blue-button mt-3",onClick:this.downloadCart,children:"Save Day PDF"})]}),e=Object(a.jsx)(T.a,{fontSize:"large"})):(t=Object(a.jsx)("div",{}),e=Object(a.jsx)(N.a,{fontSize:"large"})),Object(a.jsxs)("div",{className:n,onClick:this.props.toggleCart,children:[Object(a.jsxs)(b.a,{id:"cart-button",onClick:this.props.toggleCart,children:[e,"My Day ",Object(a.jsxs)("strong",{children:["(",this.props.list.length,")"]})]}),t]})}}]),i}(n.Component),F=(i(86),i(67)),z=i.n(F),K=i(59),B=i.p+"static/media/bake.9b71582e.svg",G=i.p+"static/media/meditate.b2605619.svg",H=i.p+"static/media/plant.220bf66f.svg",A=i.p+"static/media/puzzle.8507044f.svg",L=i.p+"static/media/run.9e53b763.svg",P=i.p+"static/media/text.8e2e5a20.svg",E=i.p+"static/media/tv.39a0d68a.svg",Y=i.p+"static/media/video-chat.99627540.svg",W=i.p+"static/media/art.11aafb10.svg",R=i.p+"static/media/cook.069f5503.svg",J=i.p+"static/media/language.00c5a4d9.svg",Q=i.p+"static/media/movie.47fa9658.svg",V=i.p+"static/media/nap.12965bdf.svg",q=i.p+"static/media/tea.50403a09.svg",U=i.p+"static/media/hiit.509ca245.svg",X=i.p+"static/media/hike.021ee4fc.svg",Z=i.p+"static/media/walk.c62840c9.svg",$=[{title:"Watch TV",description:"Relax and start a new show or re-watch an old favorite.",duration:30,intensity:"low",icon_name:"tv"},{title:"Bake something",description:"Find a recipe online or in a cookbook and get to work!",duration:90,intensity:"moderate",icon_name:"bake"},{title:"Text someone you miss",description:"Take a few minutes to tell someone you miss them. They probably miss you too!",duration:5,intensity:"low",icon_name:"text"},{title:"Video chat an old friend",description:"Quarantine is a great opportunity to catch up with old friends.",duration:20,intensity:"low",icon_name:"video-chat"},{title:"Go for a run",description:"No matter how far or fast, try getting out of the house (or onto the treadmill) and get your body moving. Good music or podcasts might make it more enjoyable!",duration:30,intensity:"high",icon_name:"run"},{title:"Meditate",description:"Take a moment to bring you attention inward and focus on your body and your breath. You can find guided meditations online or on free apps like Headspace.",duration:30,intensity:"low",icon_name:"meditate"},{title:"Grow a plant",description:"Whether an indoor houseplant or an outdoor garden, caring for plants and watching them grow can be great for mental health, and can be tasty or pretty too!",duration:90,intensity:"moderate",icon_name:"plant"},{title:"Do a puzzle",description:"Finally break open that puzzle that\u2019s been laying around your house, or go to your local toy store and buy one!",duration:60,intensity:"low",icon_name:"puzzle"},{title:"Watch a movie",description:"Those long movies you've always wanted to watch but still haven't? Now's their time.",duration:120,intensity:"low",icon_name:"movie"},{title:"Take a nap",description:"Sometimes the best activity is sleep. Turn off the lights, close the curtains, and get some shut-eye. You deserve it.",duration:30,intensity:"low",icon_name:"nap"},{title:"Make a cup of tea",description:"Tea makes everything better :)",duration:5,intensity:"low",icon_name:"tea"},{title:"Draw or paint",description:"Break out your artistic side! Your creation may make for great wall art or a great gift.",duration:45,intensity:"moderate",icon_name:"art"},{title:"Study a new language",description:"Download an app like Duolingo and get going on a new language or practice an old one.",duration:60,intensity:"moderate",icon_name:"language"},{title:"Cook a new recipe",description:"There are hundreds of amazing recipes out there waiting to be tried. Pick the one that looks the tastiest, gather the ingredients, and get started!",duration:90,intensity:"moderate",icon_name:"cook"},{title:"Do a HIIT workout",description:"Want a high intensity workout in a short amount of time? Search HIIT workouts to find free guided ones online.",duration:10,intensity:"high",icon_name:"hiit"},{title:"Go for a hike",description:"Get out of the house and enjoy some views! Free apps like AllTrails allow you to find nearby hikes of the length and difficulty that you're looking for.",duration:120,intensity:"high",icon_name:"hike"},{title:"Go for a walk",description:"Go outside, breathe fresh air, and get your muscles moving.",duration:20,intensity:"moderate",icon_name:"walk"}],tt={bake:B,meditate:G,plant:H,puzzle:A,run:L,text:P,tv:E,"video-chat":Y,art:W,cook:R,language:J,movie:Q,nap:V,tea:q,hiit:U,hike:X,walk:Z},et=function(t){Object(h.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(l.a)(this,i),(n=e.call(this,t)).drawCard=function(t){var e=Math.floor(Math.random()*$.length);n.setState({cardDrawn:$[e]})},n.addCard=function(t){var e={title:t.title,description:t.description,duration:t.duration,intensity:t.intensity,key:Date.now()};n.setState({cartItems:[].concat(Object(c.a)(n.state.cartItems),[e]),cartTotalMins:n.state.cartTotalMins+e.duration,alert:Object(a.jsxs)(K.a,{className:"alert-bar",onClose:function(){return n.setState({alert:null})},dismissible:!0,children:['"',t.title,'" added. See '," ",Object(a.jsx)(K.a.Link,{href:"#my-day-id",onClick:function(){return n.setState({cartOpen:!0})},children:"My Day"}),"."]})})},n.removeCard=function(t,e){console.log("remove",e),t.stopPropagation(),n.setState({cartItems:n.state.cartItems.filter((function(t){return t.key!==e.key})),cartTotalMins:n.state.cartTotalMins-e.duration})},n.toggleCart=function(t){n.setState({cartOpen:!n.state.cartOpen})},n.createItem=function(t){return Object(a.jsx)("div",{className:"centered-div",children:Object(a.jsxs)(j.a,{className:"fullCard mb-4",id:"suggested-card",children:[Object(a.jsx)(j.a.Img,{className:"card-image",variant:"top",src:tt[t.icon_name]}),Object(a.jsxs)(j.a.Body,{children:[Object(a.jsxs)(j.a.Title,{children:[t.title," "]}),Object(a.jsx)(j.a.Text,{className:"card-description",children:t.description}),Object(a.jsxs)(j.a.Text,{children:[Object(a.jsxs)(p.a,{className:"card-badge",variant:"light",children:["~ ",t.duration," mins"]}),Object(a.jsxs)(p.a,{className:"card-badge",variant:"light",children:[t.intensity," intensity"]})]}),Object(a.jsx)(b.a,{className:"blue-button",onClick:function(){return n.addCard(t)},children:"Do it"})]})]})})},n.state={cardDrawn:null,cartItems:[],cartTotalMins:0,cartOpen:!1,animationEnded:!1,alert:null},n}return Object(d.a)(i,[{key:"render",value:function(){var t,e,i,n=this,s=(this.state.cartOpen,"Yes");return null==this.state.cardDrawn?(t=Object(a.jsx)("div",{}),i=this.state.animationEnded?"yes-button":"hidden-button"):(e="Here's an idea:",t=this.createItem(this.state.cardDrawn),s="Redraw",i="redraw-button"),Object(a.jsxs)("div",{className:"body-div",children:[Object(a.jsxs)("div",{className:"landing-div",children:[Object(a.jsx)("h3",{onAnimationEnd:function(){return n.setState({animationEnded:!0})},children:"Are you bored?"}),Object(a.jsx)("h5",{className:"mt-4",children:e}),t,Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{id:i,onClick:this.drawCard,children:s})}),Object(a.jsxs)("div",{id:"browse-all",children:[Object(a.jsx)("p",{className:"mb-0",children:"Browse All"}),Object(a.jsx)(z.a,{})]})]}),Object(a.jsxs)("div",{id:"browse-id",className:"browse-div",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Quarantine Cards"}),Object(a.jsx)("div",{className:"instructions",children:Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:'Find activity ideas to help you get through quarantine! Use the dropdowns to narrow your search, and if you find an activity you want to do click "do it" to add it to your "my day" aggregator on the right.'})})}),Object(a.jsx)("div",{className:"cards-div",children:Object(a.jsx)(x,{list:$,addCard:this.addCard,images:tt})})]}),Object(a.jsx)("div",{id:"my-day-id",children:Object(a.jsx)(_,{list:this.state.cartItems,isCart:!0,removeCard:this.removeCard,totalMins:this.state.cartTotalMins,cartOpen:this.state.cartOpen,toggleCart:this.toggleCart})})]}),this.state.alert]})}}]),i}(s.a.Component),it=function(t){t&&t instanceof Function&&i.e(6).then(i.bind(null,485)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;i(t),a(t),n(t),s(t),r(t)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(et,{})}),document.getElementById("root")),it()}},[[87,1,3]]]);
//# sourceMappingURL=main.b8afc298.chunk.js.map