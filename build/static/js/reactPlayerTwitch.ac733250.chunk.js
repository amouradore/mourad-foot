(self.webpackChunkyalla_foot=self.webpackChunkyalla_foot||[]).push([[42],{267:(e,t,a)=>{var l,r=a(897).default,s=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,y=(e,t,a,l)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let r of i(t))h.call(e,r)||r===a||n(e,r,{get:()=>t[r],enumerable:!(l=o(t,r))||l.enumerable});return e},d=(e,t,a)=>(((e,t,a)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),c={};((e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})})(c,{default:()=>E}),e.exports=(l=c,y(n({},"__esModule",{value:!0}),l));var u=((e,t,a)=>(a=null!=e?s(p(e)):{},y(!t&&e&&e.__esModule?a:n(a,"default",{value:e,enumerable:!0}),e)))(a(43)),m=a(206),P=a(520);class E extends u.Component{constructor(){super(...arguments),d(this,"callPlayer",m.callPlayer),d(this,"playerID",this.props.config.playerId||"".concat("twitch-player-").concat((0,m.randomString)())),d(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),d(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:a,onError:l,config:s,controls:n}=this.props,o=P.MATCH_URL_TWITCH_CHANNEL.test(e),i=o?e.match(P.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(P.MATCH_URL_TWITCH_VIDEO)[1];t?o?this.player.setChannel(i):this.player.setVideo("v"+i):(0,m.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,r({video:o?"":i,channel:o?i:"",height:"100%",width:"100%",playsinline:a,autoplay:this.props.playing,muted:this.props.muted,controls:!!o||n,time:(0,m.parseStartTime)(e)},s.options));const{READY:l,PLAYING:p,PAUSE:h,ENDED:y,ONLINE:d,OFFLINE:c,SEEK:u}=t.Player;this.player.addEventListener(l,this.props.onReady),this.player.addEventListener(p,this.props.onPlay),this.player.addEventListener(h,this.props.onPause),this.player.addEventListener(y,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(d,this.props.onLoaded),this.player.addEventListener(c,this.props.onLoaded)}),l)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}d(E,"displayName","Twitch"),d(E,"canPlay",P.canPlay.twitch),d(E,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.ac733250.chunk.js.map