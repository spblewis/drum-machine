(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(2),l=o.n(n),s=o(4),d=o.n(s),i=(o(13),o(5)),a=o(6),c=o(1),r=o(8),u=o(7),b=(o(14),o(0)),h=[{keyCode:81,text:"Q",id:"Snare",url:"sounds/snare.wav"},{keyCode:87,text:"W",id:"Tom-high",url:"sounds/tom-high.wav"},{keyCode:69,text:"E",id:"Tom-low",url:"sounds/tom-low.mp3"},{keyCode:65,text:"A",id:"Rimshot",url:"sounds/rimshot.wav"},{keyCode:83,text:"S",id:"Ride",url:"sounds/ride.mp3"},{keyCode:68,text:"D",id:"Crash",url:"sounds/crash.mp3"},{keyCode:90,text:"Z",id:"Shaker",url:"sounds/shaker.wav"},{keyCode:88,text:"X",id:"bass",url:"sounds/bass.wav"},{keyCode:67,text:"C",id:"Cowbell",url:"sounds/cowbell.wav"}],y=[{keyCode:81,text:"Q",id:"cowbell1",url:"sounds/cowbell.wav"},{keyCode:87,text:"W",id:"cowbell2",url:"sounds/cowbell.wav"},{keyCode:69,text:"E",id:"cowbell3",url:"sounds/cowbell.wav"},{keyCode:65,text:"A",id:"cowbell4",url:"sounds/cowbell.wav"},{keyCode:83,text:"S",id:"cowbell5",url:"sounds/cowbell.wav"},{keyCode:68,text:"D",id:"cowbell6",url:"sounds/cowbell.wav"},{keyCode:90,text:"Z",id:"cowbell7",url:"sounds/cowbell.wav"},{keyCode:88,text:"X",id:"cowbell8",url:"sounds/cowbell.wav"},{keyCode:67,text:"C",id:"cowbell9",url:"sounds/cowbell.wav"}],w={backgroundColor:"#bc5100"},p=function(e){Object(r.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(i.a)(this,o),(n=t.call(this,e)).playSound=function(){n.audio.play(),n.audio.currentTime=0},n.activatePad=function(){n.playSound(),n.props.changeDisplay(n.props.id),n.setState({style:w}),setTimeout((function(){return n.setState({style:{}})}),100)},n.handleClick=function(){n.activatePad()},n.handleKeyPress=function(e){e.keyCode===n.props.keyCode&&n.activatePad()},n.state={style:{}},n.handleKeyPress=n.handleKeyPress.bind(Object(c.a)(n)),n.playSound=n.playSound.bind(Object(c.a)(n)),n.activatePad=n.activatePad.bind(Object(c.a)(n)),n}return Object(a.a)(o,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("button",{className:"drum-pad",id:this.props.id,onClick:this.handleClick,onKeyPress:this.handleKeyPress,style:this.state.style,children:[Object(b.jsx)("p",{children:this.props.text}),Object(b.jsx)("audio",{ref:function(t){return e.audio=t},className:"clip",src:this.props.url,id:this.props.text})]})}}]),o}(l.a.Component),C=function(e){Object(r.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(i.a)(this,o),(n=t.call(this,e)).needMoreCowBell=function(){n.state.moreCowbell?n.setState({moreCowbell:!n.state.moreCowbell,drumset:h}):n.setState({moreCowbell:!n.state.moreCowbell,drumset:y})},n.state={drumset:h,moreCowbell:!1,display:"Drum Machine"},n.changeDisplay=n.changeDisplay.bind(Object(c.a)(n)),n.needMoreCowBell=n.needMoreCowBell.bind(Object(c.a)(n)),n}return Object(a.a)(o,[{key:"changeDisplay",value:function(e){this.setState({display:e})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{id:"drum-machine",children:[Object(b.jsx)("div",{id:"pad-grid",children:this.state.drumset.map((function(t){return Object(b.jsx)(p,{id:t.id,text:t.text,url:t.url,keyCode:t.keyCode,onClick:e.handleClick,changeDisplay:e.changeDisplay},t.id)}))}),Object(b.jsxs)("div",{id:"control-panel",children:[Object(b.jsx)("div",{id:"display-container",children:Object(b.jsx)("h2",{id:"display",children:this.state.display})}),Object(b.jsxs)("button",{id:"cowbell",onClick:this.needMoreCowBell,children:[this.state.moreCowbell?"Less ":"More ","Cowbell!"]})]})]})}}]),o}(l.a.Component),m=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(t){var o=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,d=t.getTTFB;o(e),n(e),l(e),s(e),d(e)}))};d.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("app-container")),m(console.log)}},[[16,1,2]]]);
//# sourceMappingURL=main.4d15b463.chunk.js.map