var clangWasmToolchain=(()=>{var Ue=Object.defineProperty;var _s=Object.getOwnPropertyDescriptor;var ns=Object.getOwnPropertyNames;var es=Object.prototype.hasOwnProperty;var ts=(e,_,n)=>_ in e?Ue(e,_,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[_]=n;var is=(e,_,n)=>()=>{if(n)throw n[0];try{return e&&(_=e(e=0)),_}catch(t){throw n=[t],t}};var Ct=(e,_)=>{for(var n in _)Ue(e,n,{get:_[n],enumerable:!0})},as=(e,_,n,t)=>{if(_&&typeof _=="object"||typeof _=="function")for(let i of ns(_))!es.call(e,i)&&i!==n&&Ue(e,i,{get:()=>_[i],enumerable:!(t=_s(_,i))||t.enumerable});return e};var rs=e=>as(Ue({},"__esModule",{value:!0}),e);var x=(e,_,n)=>ts(e,typeof _!="symbol"?_+"":_,n);var ya={};Ct(ya,{AsyncCompress:()=>xs,AsyncDecompress:()=>As,AsyncDeflate:()=>ma,AsyncGunzip:()=>ca,AsyncGzip:()=>xs,AsyncInflate:()=>_i,AsyncUnzipInflate:()=>Fs,AsyncUnzlib:()=>fa,AsyncZipDeflate:()=>Ls,AsyncZlib:()=>ws,Compress:()=>Bt,DecodeUTF8:()=>Ns,Decompress:()=>$t,Deflate:()=>z_,EncodeUTF8:()=>Is,FlateErrorCode:()=>vs,Gunzip:()=>je,Gzip:()=>Bt,Inflate:()=>D_,Unzip:()=>Us,UnzipInflate:()=>Os,UnzipPassThrough:()=>wa,Unzlib:()=>Qe,Zip:()=>Cs,ZipDeflate:()=>Rs,ZipPassThrough:()=>le,Zlib:()=>zt,compress:()=>gs,compressSync:()=>Wt,decompress:()=>Es,decompressSync:()=>Ss,deflate:()=>da,deflateSync:()=>ue,gunzip:()=>ua,gunzipSync:()=>Ye,gzip:()=>gs,gzipSync:()=>Wt,inflate:()=>ni,inflateSync:()=>Vn,strFromU8:()=>ti,strToU8:()=>fn,unzip:()=>Ps,unzipSync:()=>ks,unzlib:()=>pa,unzlibSync:()=>Ke,zip:()=>Ms,zipSync:()=>Ds,zlib:()=>ys,zlibSync:()=>Xt});function yn(e,_){return typeof e=="function"&&(_=e,e={}),this.ondata=_,e}function da(e,_,n){return n||(n=_,_={}),typeof n!="function"&&M(7),Xn(e,_,[zn],function(t){return pn(ue(t.data[0],t.data[1]))},0,n)}function ue(e,_){return wn(e,_||{},0,0)}function ni(e,_,n){return n||(n=_,_={}),typeof n!="function"&&M(7),Xn(e,_,[Wn],function(t){return pn(Vn(t.data[0],Yt(t.data[1])))},1,n)}function Vn(e,_){return de(e,{i:2},_&&_.out,_&&_.dictionary)}function gs(e,_,n){return n||(n=_,_={}),typeof n!="function"&&M(7),Xn(e,_,[zn,aa,function(){return[Wt]}],function(t){return pn(Wt(t.data[0],t.data[1]))},2,n)}function Wt(e,_){_||(_={});var n=Bn(),t=e.length;n.p(e);var i=wn(e,_,qt(_),8),a=i.length;return Qt(i,_),q(i,a-8,n.d()),q(i,a-4,t),i}function ua(e,_,n){return n||(n=_,_={}),typeof n!="function"&&M(7),Xn(e,_,[Wn,ra,function(){return[Ye]}],function(t){return pn(Ye(t.data[0],t.data[1]))},3,n)}function Ye(e,_){var n=Kt(e);return n+8>e.length&&M(6,"invalid gzip data"),de(e.subarray(n,-8),{i:2},_&&_.out||new H(la(e)),_&&_.dictionary)}function ys(e,_,n){return n||(n=_,_={}),typeof n!="function"&&M(7),Xn(e,_,[zn,sa,function(){return[Xt]}],function(t){return pn(Xt(t.data[0],t.data[1]))},4,n)}function Xt(e,_){_||(_={});var n=Ze();n.p(e);var t=wn(e,_,_.dictionary?6:2,4);return Jt(t,_),q(t,t.length-4,n.d()),t}function pa(e,_,n){return n||(n=_,_={}),typeof n!="function"&&M(7),Xn(e,_,[Wn,oa,function(){return[Ke]}],function(t){return pn(Ke(t.data[0],Yt(t.data[1])))},5,n)}function Ke(e,_){return de(e.subarray(Zt(e,_&&_.dictionary),-4),{i:2},_&&_.out,_&&_.dictionary)}function Es(e,_,n){return n||(n=_,_={}),typeof n!="function"&&M(7),e[0]==31&&e[1]==139&&e[2]==8?ua(e,_,n):(e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?ni(e,_,n):pa(e,_,n)}function Ss(e,_){return e[0]==31&&e[1]==139&&e[2]==8?Ye(e,_):(e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?Vn(e,_):Ke(e,_)}function fn(e,_){if(_){for(var n=new H(e.length),t=0;t<e.length;++t)n[t]=e.charCodeAt(t);return n}if($i)return $i.encode(e);for(var i=e.length,a=new H(e.length+(e.length>>1)),r=0,s=function(m){a[r++]=m},t=0;t<i;++t){if(r+5>a.length){var l=new H(r+8+(i-t<<1));l.set(a),a=l}var o=e.charCodeAt(t);o<128||_?s(o):o<2048?(s(192|o>>6),s(128|o&63)):o>55295&&o<57344?(o=65536+(o&1047552)|e.charCodeAt(++t)&1023,s(240|o>>18),s(128|o>>12&63),s(128|o>>6&63),s(128|o&63)):(s(224|o>>12),s(128|o>>6&63),s(128|o&63))}return W_(a,0,r)}function ti(e,_){if(_){for(var n="",t=0;t<e.length;t+=16384)n+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return n}else{if(Vt)return Vt.decode(e);var i=ha(e),a=i.s,n=i.r;return n.length&&M(8),a}}function Ms(e,_,n){n||(n=_,_={}),typeof n!="function"&&M(7);var t={};ei(e,"",t,_);var i=Object.keys(t),a=i.length,r=0,s=0,l=a,o=new Array(a),m=[],d=function(){for(var p=0;p<m.length;++p)m[p]()},u=function(p,w){qe(function(){n(p,w)})};qe(function(){u=n});var c=function(){var p=new H(s+22),w=r,S=s-r;s=0;for(var A=0;A<l;++A){var f=o[A];try{var T=f.c.length;Pn(p,s,f,f.f,f.u,T);var b=30+f.f.length+un(f.extra),y=s+b;p.set(f.c,y),Pn(p,r,f,f.f,f.u,T,s,f.m),r+=16+b+(f.m?f.m.length:0),s=y+T}catch(g){return u(g,null)}}ii(p,r,o.length,S,w),u(null,p)};a||c();for(var v=function(p){var w=i[p],S=t[w],A=S[0],f=S[1],T=Bn(),b=A.length;T.p(A);var y=fn(w),g=y.length,E=f.comment,I=E&&fn(E),C=I&&I.length,G=un(f.extra),Y=f.level==0?0:8,B=function(L,W){if(L)d(),u(L,null);else{var F=W.length;o[p]=ce(f,{size:b,crc:T.d(),c:W,f:y,m:I,u:g!=w.length||I&&E.length!=C,compression:Y}),r+=30+g+G+F,s+=76+2*(g+G)+(C||0)+F,--a||c()}};if(g>65535&&B(M(11,0,1),null),!Y)B(null,A);else if(b<16e4)try{B(null,ue(A,f))}catch(L){B(L,null)}else m.push(da(A,f,B))},h=0;h<l;++h)v(h);return d}function Ds(e,_){_||(_={});var n={},t=[];ei(e,"",n,_);var i=0,a=0;for(var r in n){var s=n[r],l=s[0],o=s[1],m=o.level==0?0:8,d=fn(r),u=d.length,c=o.comment,v=c&&fn(c),h=v&&v.length,p=un(o.extra);u>65535&&M(11);var w=m?ue(l,o):l,S=w.length,A=Bn();A.p(l),t.push(ce(o,{size:l.length,crc:A.d(),c:w,f:d,m:v,u:u!=r.length||v&&c.length!=h,o:i,compression:m})),i+=30+u+p+S,a+=76+2*(u+p)+(h||0)+S}for(var f=new H(a+22),T=i,b=a-i,y=0;y<t.length;++y){var d=t[y];Pn(f,d.o,d,d.f,d.u,d.c.length);var g=30+d.f.length+un(d.extra);f.set(d.c,d.o+g),Pn(f,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+g+(d.m?d.m.length:0)}return ii(f,i,t.length,b,T),f}function Ps(e,_,n){n||(n=_,_={}),typeof n!="function"&&M(7);var t=[],i=function(){for(var p=0;p<t.length;++p)t[p]()},a={},r=function(p,w){qe(function(){n(p,w)})};qe(function(){r=n});for(var s=e.length-22;o_(e,s)!=101010256;--s)if(!s||e.length-s>65558)return r(M(13,0,1),null),i;var l=C_(e,s+8);if(l){var o=l,m=o_(e,s+16),d=o_(e,s-20)==117853008;if(d){var u=o_(e,s-12);d=o_(e,u)==101075792,d&&(o=l=o_(e,u+32),m=o_(e,u+48))}for(var c=_&&_.filter,v=function(p){var w=xa(e,m,d),S=w[0],A=w[1],f=w[2],T=w[3],b=w[4],y=w[5],g=Ta(e,y);m=b;var E=function(C,G){C?(i(),r(C,null)):(G&&(a[T]=G),--l||r(null,a))};if(!c||c({name:T,size:A,originalSize:f,compression:S}))if(!S)E(null,W_(e,g,g+A));else if(S==8){var I=e.subarray(g,g+A);if(f<524288||A>.8*f)try{E(null,Vn(I,{out:new H(f)}))}catch(C){E(C,null)}else t.push(ni(I,{size:f},E))}else E(M(14,"unknown compression type "+S,1),null);else E(null,null)},h=0;h<o;++h)v(h)}else r(null,{});return i}function ks(e,_){for(var n={},t=e.length-22;o_(e,t)!=101010256;--t)(!t||e.length-t>65558)&&M(13);var i=C_(e,t+8);if(!i)return{};var a=o_(e,t+16),r=o_(e,t-20)==117853008;if(r){var s=o_(e,t-12);r=o_(e,s)==101075792,r&&(i=o_(e,s+32),a=o_(e,s+48))}for(var l=_&&_.filter,o=0;o<i;++o){var m=xa(e,a,r),d=m[0],u=m[1],c=m[2],v=m[3],h=m[4],p=m[5],w=Ta(e,p);a=h,(!l||l({name:v,size:u,originalSize:c,compression:d}))&&(d?d==8?n[v]=Vn(e.subarray(w,w+u),{out:new H(c)}):M(14,"unknown compression type "+d):n[v]=W_(e,w,w+u))}return n}var zi,hs,H,M_,me,kn,Gn,se,Vi,ji,jt,$e,Yi,Qi,kt,oe,rn,J,B_,sn,J,J,J,J,Un,J,Ki,qi,Ji,Zi,We,H_,ze,Hn,W_,vs,_a,M,de,q_,On,Xe,Ve,Gt,Fn,Je,Ht,na,J_,ea,ta,Bn,Ze,wn,ce,Xi,Be,Ts,ia,Wn,zn,aa,ra,sa,oa,pn,Yt,Xn,X_,$n,C_,o_,Pt,q,Qt,Kt,la,qt,Jt,Zt,z_,ma,D_,_i,Bt,xs,je,ca,zt,ws,Qe,fa,$t,As,ei,$i,Vt,ba,ha,Ns,Is,va,Ta,xa,ga,un,Pn,ii,le,Rs,Ls,Cs,wa,Os,Fs,Us,qe,Aa=is(()=>{zi={},hs=(function(e,_,n,t,i){var a=new Worker(zi[_]||(zi[_]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(r){var s=r.data,l=s.$e$;if(l){var o=new Error(l[0]);o.code=l[1],o.stack=l[2],i(o,null)}else i(null,s)},a.postMessage(n,t),a}),H=Uint8Array,M_=Uint16Array,me=Int32Array,kn=new H([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gn=new H([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),se=new H([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Vi=function(e,_){for(var n=new M_(31),t=0;t<31;++t)n[t]=_+=1<<e[t-1];for(var i=new me(n[30]),t=1;t<30;++t)for(var a=n[t];a<n[t+1];++a)i[a]=a-n[t]<<5|t;return{b:n,r:i}},ji=Vi(kn,2),jt=ji.b,$e=ji.r;jt[28]=258,$e[258]=28;Yi=Vi(Gn,0),Qi=Yi.b,kt=Yi.r,oe=new M_(32768);for(J=0;J<32768;++J)rn=(J&43690)>>1|(J&21845)<<1,rn=(rn&52428)>>2|(rn&13107)<<2,rn=(rn&61680)>>4|(rn&3855)<<4,oe[J]=((rn&65280)>>8|(rn&255)<<8)>>1;B_=(function(e,_,n){for(var t=e.length,i=0,a=new M_(_);i<t;++i)e[i]&&++a[e[i]-1];var r=new M_(_);for(i=1;i<_;++i)r[i]=r[i-1]+a[i-1]<<1;var s;if(n){s=new M_(1<<_);var l=15-_;for(i=0;i<t;++i)if(e[i])for(var o=i<<4|e[i],m=_-e[i],d=r[e[i]-1]++<<m,u=d|(1<<m)-1;d<=u;++d)s[oe[d]>>l]=o}else for(s=new M_(t),i=0;i<t;++i)e[i]&&(s[i]=oe[r[e[i]-1]++]>>15-e[i]);return s}),sn=new H(288);for(J=0;J<144;++J)sn[J]=8;for(J=144;J<256;++J)sn[J]=9;for(J=256;J<280;++J)sn[J]=7;for(J=280;J<288;++J)sn[J]=8;Un=new H(32);for(J=0;J<32;++J)Un[J]=5;Ki=B_(sn,9,0),qi=B_(sn,9,1),Ji=B_(Un,5,0),Zi=B_(Un,5,1),We=function(e){for(var _=e[0],n=1;n<e.length;++n)e[n]>_&&(_=e[n]);return _},H_=function(e,_,n){var t=_/8|0;return(e[t]|e[t+1]<<8)>>(_&7)&n},ze=function(e,_){var n=_/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(_&7)},Hn=function(e){return(e+7)/8|0},W_=function(e,_,n){return(_==null||_<0)&&(_=0),(n==null||n>e.length)&&(n=e.length),new H(e.subarray(_,n))},vs={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},_a=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],M=function(e,_,n){var t=new Error(_||_a[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,M),!n)throw t;return t},de=function(e,_,n,t){var i=e.length,a=t?t.length:0;if(!i||_.f&&!_.l)return n||new H(0);var r=!n,s=r||_.i!=2,l=_.i;r&&(n=new H(i*3));var o=function(U){var $=n.length;if(U>$){var a_=new H(Math.max($*2,U));a_.set(n),n=a_}},m=_.f||0,d=_.p||0,u=_.b||0,c=_.l,v=_.d,h=_.m,p=_.n,w=i*8;do{if(!c){m=H_(e,d,1);var S=H_(e,d+1,3);if(d+=3,S)if(S==1)c=qi,v=Zi,h=9,p=5;else if(S==2){var b=H_(e,d,31)+257,y=H_(e,d+10,15)+4,g=b+H_(e,d+5,31)+1;d+=14;for(var E=new H(g),I=new H(19),C=0;C<y;++C)I[se[C]]=H_(e,d+C*3,7);d+=y*3;for(var G=We(I),Y=(1<<G)-1,B=B_(I,G,1),C=0;C<g;){var L=B[H_(e,d,Y)];d+=L&15;var A=L>>4;if(A<16)E[C++]=A;else{var W=0,F=0;for(A==16?(F=3+H_(e,d,3),d+=2,W=E[C-1]):A==17?(F=3+H_(e,d,7),d+=3):A==18&&(F=11+H_(e,d,127),d+=7);F--;)E[C++]=W}}var X=E.subarray(0,b),N=E.subarray(b);h=We(X),p=We(N),c=B_(X,h,1),v=B_(N,p,1)}else M(1);else{var A=Hn(d)+4,f=e[A-4]|e[A-3]<<8,T=A+f;if(T>i){l&&M(0);break}s&&o(u+f),n.set(e.subarray(A,T),u),_.b=u+=f,_.p=d=T*8,_.f=m;continue}if(d>w){l&&M(0);break}}s&&o(u+131072);for(var Q=(1<<h)-1,__=(1<<p)-1,p_=d;;p_=d){var W=c[ze(e,d)&Q],b_=W>>4;if(d+=W&15,d>w){l&&M(0);break}if(W||M(2),b_<256)n[u++]=b_;else if(b_==256){p_=d,c=null;break}else{var h_=b_-254;if(b_>264){var C=b_-257,t_=kn[C];h_=H_(e,d,(1<<t_)-1)+jt[C],d+=t_}var E_=v[ze(e,d)&__],O_=E_>>4;E_||M(3),d+=E_&15;var N=Qi[O_];if(O_>3){var t_=Gn[O_];N+=ze(e,d)&(1<<t_)-1,d+=t_}if(d>w){l&&M(0);break}s&&o(u+131072);var tn=u+h_;if(u<N){var i_=a-N,O=Math.min(N,tn);for(i_+u<0&&M(3);u<O;++u)n[u]=t[i_+u]}for(;u<tn;++u)n[u]=n[u-N]}}_.l=c,_.p=p_,_.b=u,_.f=m,c&&(m=1,_.m=h,_.d=v,_.n=p)}while(!m);return u!=n.length&&r?W_(n,0,u):n.subarray(0,u)},q_=function(e,_,n){n<<=_&7;var t=_/8|0;e[t]|=n,e[t+1]|=n>>8},On=function(e,_,n){n<<=_&7;var t=_/8|0;e[t]|=n,e[t+1]|=n>>8,e[t+2]|=n>>16},Xe=function(e,_){for(var n=[],t=0;t<e.length;++t)e[t]&&n.push({s:t,f:e[t]});var i=n.length,a=n.slice();if(!i)return{t:J_,l:0};if(i==1){var r=new H(n[0].s+1);return r[n[0].s]=1,{t:r,l:1}}n.sort(function(T,b){return T.f-b.f}),n.push({s:-1,f:25001});var s=n[0],l=n[1],o=0,m=1,d=2;for(n[0]={s:-1,f:s.f+l.f,l:s,r:l};m!=i-1;)s=n[n[o].f<n[d].f?o++:d++],l=n[o!=m&&n[o].f<n[d].f?o++:d++],n[m++]={s:-1,f:s.f+l.f,l:s,r:l};for(var u=a[0].s,t=1;t<i;++t)a[t].s>u&&(u=a[t].s);var c=new M_(u+1),v=Ve(n[m-1],c,0);if(v>_){var t=0,h=0,p=v-_,w=1<<p;for(a.sort(function(b,y){return c[y.s]-c[b.s]||b.f-y.f});t<i;++t){var S=a[t].s;if(c[S]>_)h+=w-(1<<v-c[S]),c[S]=_;else break}for(h>>=p;h>0;){var A=a[t].s;c[A]<_?h-=1<<_-c[A]++-1:++t}for(;t>=0&&h;--t){var f=a[t].s;c[f]==_&&(--c[f],++h)}v=_}return{t:new H(c),l:v}},Ve=function(e,_,n){return e.s==-1?Math.max(Ve(e.l,_,n+1),Ve(e.r,_,n+1)):_[e.s]=n},Gt=function(e){for(var _=e.length;_&&!e[--_];);for(var n=new M_(++_),t=0,i=e[0],a=1,r=function(l){n[t++]=l},s=1;s<=_;++s)if(e[s]==i&&s!=_)++a;else{if(!i&&a>2){for(;a>138;a-=138)r(32754);a>2&&(r(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(r(i),--a;a>6;a-=6)r(8304);a>2&&(r(a-3<<5|8208),a=0)}for(;a--;)r(i);a=1,i=e[s]}return{c:n.subarray(0,t),n:_}},Fn=function(e,_){for(var n=0,t=0;t<_.length;++t)n+=e[t]*_[t];return n},Je=function(e,_,n){var t=n.length,i=Hn(_+2);e[i]=t&255,e[i+1]=t>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<t;++a)e[i+a+4]=n[a];return(i+4+t)*8},Ht=function(e,_,n,t,i,a,r,s,l,o,m){q_(_,m++,n),++i[256];for(var d=Xe(i,15),u=d.t,c=d.l,v=Xe(a,15),h=v.t,p=v.l,w=Gt(u),S=w.c,A=w.n,f=Gt(h),T=f.c,b=f.n,y=new M_(19),g=0;g<S.length;++g)++y[S[g]&31];for(var g=0;g<T.length;++g)++y[T[g]&31];for(var E=Xe(y,7),I=E.t,C=E.l,G=19;G>4&&!I[se[G-1]];--G);var Y=o+5<<3,B=Fn(i,sn)+Fn(a,Un)+r,L=Fn(i,u)+Fn(a,h)+r+14+3*G+Fn(y,I)+2*y[16]+3*y[17]+7*y[18];if(l>=0&&Y<=B&&Y<=L)return Je(_,m,e.subarray(l,l+o));var W,F,X,N;if(q_(_,m,1+(L<B)),m+=2,L<B){W=B_(u,c,0),F=u,X=B_(h,p,0),N=h;var Q=B_(I,C,0);q_(_,m,A-257),q_(_,m+5,b-1),q_(_,m+10,G-4),m+=14;for(var g=0;g<G;++g)q_(_,m+3*g,I[se[g]]);m+=3*G;for(var __=[S,T],p_=0;p_<2;++p_)for(var b_=__[p_],g=0;g<b_.length;++g){var h_=b_[g]&31;q_(_,m,Q[h_]),m+=I[h_],h_>15&&(q_(_,m,b_[g]>>5&127),m+=b_[g]>>12)}}else W=Ki,F=sn,X=Ji,N=Un;for(var g=0;g<s;++g){var t_=t[g];if(t_>255){var h_=t_>>18&31;On(_,m,W[h_+257]),m+=F[h_+257],h_>7&&(q_(_,m,t_>>23&31),m+=kn[h_]);var E_=t_&31;On(_,m,X[E_]),m+=N[E_],E_>3&&(On(_,m,t_>>5&8191),m+=Gn[E_])}else On(_,m,W[t_]),m+=F[t_]}return On(_,m,W[256]),m+F[256]},na=new me([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),J_=new H(0),ea=function(e,_,n,t,i,a){var r=a.z||e.length,s=new H(t+r+5*(1+Math.ceil(r/7e3))+i),l=s.subarray(t,s.length-i),o=a.l,m=(a.r||0)&7;if(_){m&&(l[0]=a.r>>3);for(var d=na[_-1],u=d>>13,c=d&8191,v=(1<<n)-1,h=a.p||new M_(32768),p=a.h||new M_(v+1),w=Math.ceil(n/3),S=2*w,A=function(P_){return(e[P_]^e[P_+1]<<w^e[P_+2]<<S)&v},f=new me(25e3),T=new M_(288),b=new M_(32),y=0,g=0,E=a.i||0,I=0,C=a.w||0,G=0;E+2<r;++E){var Y=A(E),B=E&32767,L=p[Y];if(h[B]=L,p[Y]=B,C<=E){var W=r-E;if((y>7e3||I>24576)&&(W>423||!o)){m=Ht(e,l,0,f,T,b,g,I,G,E-G,m),I=y=g=0,G=E;for(var F=0;F<286;++F)T[F]=0;for(var F=0;F<30;++F)b[F]=0}var X=2,N=0,Q=c,__=B-L&32767;if(W>2&&Y==A(E-__))for(var p_=Math.min(u,W)-1,b_=Math.min(32767,E),h_=Math.min(258,W);__<=b_&&--Q&&B!=L;){if(e[E+X]==e[E+X-__]){for(var t_=0;t_<h_&&e[E+t_]==e[E+t_-__];++t_);if(t_>X){if(X=t_,N=__,t_>p_)break;for(var E_=Math.min(__,t_-2),O_=0,F=0;F<E_;++F){var tn=E-__+F&32767,i_=h[tn],O=tn-i_&32767;O>O_&&(O_=O,L=tn)}}}B=L,L=h[B],__+=B-L&32767}if(N){f[I++]=268435456|$e[X]<<18|kt[N];var U=$e[X]&31,$=kt[N]&31;g+=kn[U]+Gn[$],++T[257+U],++b[$],C=E+X,++y}else f[I++]=e[E],++T[e[E]]}}for(E=Math.max(E,C);E<r;++E)f[I++]=e[E],++T[e[E]];m=Ht(e,l,o,f,T,b,g,I,G,E-G,m),o||(a.r=m&7|l[m/8|0]<<3,m-=7,a.h=p,a.p=h,a.i=E,a.w=C)}else{for(var E=a.w||0;E<r+o;E+=65535){var a_=E+65535;a_>=r&&(l[m/8|0]=o,a_=r),m=Je(l,m+1,e.subarray(E,a_))}a.i=r}return W_(s,0,t+Hn(m)+i)},ta=(function(){for(var e=new Int32Array(256),_=0;_<256;++_){for(var n=_,t=9;--t;)n=(n&1&&-306674912)^n>>>1;e[_]=n}return e})(),Bn=function(){var e=-1;return{p:function(_){for(var n=e,t=0;t<_.length;++t)n=ta[n&255^_[t]]^n>>>8;e=n},d:function(){return~e}}},Ze=function(){var e=1,_=0;return{p:function(n){for(var t=e,i=_,a=n.length|0,r=0;r!=a;){for(var s=Math.min(r+2655,a);r<s;++r)i+=t+=n[r];t=(t&65535)+15*(t>>16),i=(i&65535)+15*(i>>16)}e=t,_=i},d:function(){return e%=65521,_%=65521,(e&255)<<24|(e&65280)<<8|(_&255)<<8|_>>8}}},wn=function(e,_,n,t,i){if(!i&&(i={l:1},_.dictionary)){var a=_.dictionary.subarray(-32768),r=new H(a.length+e.length);r.set(a),r.set(e,a.length),e=r,i.w=a.length}return ea(e,_.level==null?6:_.level,_.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+_.mem,n,t,i)},ce=function(e,_){var n={};for(var t in e)n[t]=e[t];for(var t in _)n[t]=_[t];return n},Xi=function(e,_,n){for(var t=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),r=0;r<t.length;++r){var s=t[r],l=a[r];if(typeof s=="function"){_+=";"+l+"=";var o=s.toString();if(s.prototype)if(o.indexOf("[native code]")!=-1){var m=o.indexOf(" ",8)+1;_+=o.slice(m,o.indexOf("(",m))}else{_+=o;for(var d in s.prototype)_+=";"+l+".prototype."+d+"="+s.prototype[d].toString()}else _+=o}else n[l]=s}return _},Be=[],Ts=function(e){var _=[];for(var n in e)e[n].buffer&&_.push((e[n]=new e[n].constructor(e[n])).buffer);return _},ia=function(e,_,n,t){if(!Be[n]){for(var i="",a={},r=e.length-1,s=0;s<r;++s)i=Xi(e[s],i,a);Be[n]={c:Xi(e[r],i,a),e:a}}var l=ce({},Be[n].e);return hs(Be[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+_.toString()+"}",n,l,Ts(l),t)},Wn=function(){return[H,M_,me,kn,Gn,se,jt,Qi,qi,Zi,oe,_a,B_,We,H_,ze,Hn,W_,M,de,Vn,pn,Yt]},zn=function(){return[H,M_,me,kn,Gn,se,$e,kt,Ki,sn,Ji,Un,oe,na,J_,B_,q_,On,Xe,Ve,Gt,Fn,Je,Ht,Hn,W_,ea,wn,ue,pn]},aa=function(){return[Qt,qt,q,Bn,ta]},ra=function(){return[Kt,la]},sa=function(){return[Jt,q,Ze]},oa=function(){return[Zt]},pn=function(e){return postMessage(e,[e.buffer])},Yt=function(e){return e&&{out:e.size&&new H(e.size),dictionary:e.dictionary}},Xn=function(e,_,n,t,i,a){var r=ia(n,t,i,function(s,l){r.terminate(),a(s,l)});return r.postMessage([e,_],_.consume?[e.buffer]:[]),function(){r.terminate()}},X_=function(e){return e.ondata=function(_,n){return postMessage([_,n],[_.buffer])},function(_){_.data[0]?(e.push(_.data[0],_.data[1]),postMessage([_.data[0].length])):e.flush(_.data[1])}},$n=function(e,_,n,t,i,a,r){var s,l=ia(e,t,i,function(o,m){o?(l.terminate(),_.ondata.call(_,o)):Array.isArray(m)?m.length==1?(_.queuedSize-=m[0],_.ondrain&&_.ondrain(m[0])):(m[1]&&l.terminate(),_.ondata.call(_,o,m[0],m[1])):r(m)});l.postMessage(n),_.queuedSize=0,_.push=function(o,m){_.ondata||M(5),s&&_.ondata(M(4,0,1),null,!!m),_.queuedSize+=o.length,l.postMessage([o,s=m],o.buffer instanceof ArrayBuffer?[o.buffer]:[])},_.terminate=function(){l.terminate()},a&&(_.flush=function(o){l.postMessage([0,o])})},C_=function(e,_){return e[_]|e[_+1]<<8},o_=function(e,_){return(e[_]|e[_+1]<<8|e[_+2]<<16|e[_+3]<<24)>>>0},Pt=function(e,_){return o_(e,_)+o_(e,_+4)*4294967296},q=function(e,_,n){for(;n;++_)e[_]=n,n>>>=8},Qt=function(e,_){var n=_.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=_.level<2?4:_.level==9?2:0,e[9]=3,_.mtime!=0&&q(e,4,Math.floor(new Date(_.mtime||Date.now())/1e3)),n){e[3]=8;for(var t=0;t<=n.length;++t)e[t+10]=n.charCodeAt(t)}},Kt=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&M(6,"invalid gzip data");var _=e[3],n=10;_&4&&(n+=(e[10]|e[11]<<8)+2);for(var t=(_>>3&1)+(_>>4&1);t>0;t-=!e[n++]);return n+(_&2)},la=function(e){var _=e.length;return(e[_-4]|e[_-3]<<8|e[_-2]<<16|e[_-1]<<24)>>>0},qt=function(e){return 10+(e.filename?e.filename.length+1:0)},Jt=function(e,_){var n=_.level,t=n==0?0:n<6?1:n==9?3:2;if(e[0]=120,e[1]=t<<6|(_.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,_.dictionary){var i=Ze();i.p(_.dictionary),q(e,2,i.d())}},Zt=function(e,_){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&M(6,"invalid zlib data"),(e[1]>>5&1)==+!_&&M(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};z_=(function(){function e(_,n){if(typeof _=="function"&&(n=_,_={}),this.ondata=n,this.o=_||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new H(98304),this.o.dictionary){var t=this.o.dictionary.subarray(-32768);this.b.set(t,32768-t.length),this.s.i=32768-t.length}}return e.prototype.p=function(_,n){this.ondata(wn(_,this.o,0,0,this.s),n)},e.prototype.push=function(_,n){this.ondata||M(5),this.s.l&&M(4);var t=_.length+this.s.z;if(t>this.b.length){if(t>2*this.b.length-32768){var i=new H(t&-32768);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;this.b.set(_.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(_.subarray(a),32768),this.s.z=_.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(_,this.s.z),this.s.z+=_.length;this.s.l=n&1,(this.s.z>this.s.w+8191||n)&&(this.p(this.b,n||!1),this.s.w=this.s.i,this.s.i-=2),n&&(this.s=this.o={},this.b=J_)},e.prototype.flush=function(_){if(this.ondata||M(5),this.s.l&&M(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,_){var n=new H(6);n[0]=this.s.r>>3;var t=Je(n,this.s.r,J_);this.s.r=0,this.ondata(n.subarray(0,t>>3),!1)}},e})(),ma=(function(){function e(_,n){$n([zn,function(){return[X_,z_]}],this,yn.call(this,_,n),function(t){var i=new z_(t.data);onmessage=X_(i)},6,1)}return e})();D_=(function(){function e(_,n){typeof _=="function"&&(n=_,_={}),this.ondata=n;var t=_&&_.dictionary&&_.dictionary.subarray(-32768);this.s={i:0,b:t?t.length:0},this.o=new H(32768),this.p=new H(0),t&&this.o.set(t)}return e.prototype.e=function(_){if(this.ondata||M(5),this.d&&M(4),!this.p.length)this.p=_;else if(_.length){var n=new H(this.p.length+_.length);n.set(this.p),n.set(_,this.p.length),this.p=n}},e.prototype.c=function(_){this.s.i=+(this.d=_||!1);var n=this.s.b,t=de(this.p,this.s,this.o);this.ondata(W_(t,n,this.s.b),this.d),this.o=W_(t,this.s.b-32768),this.s.b=this.o.length,this.p=W_(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(_,n){this.e(_),this.c(n)},e})(),_i=(function(){function e(_,n){$n([Wn,function(){return[X_,D_]}],this,yn.call(this,_,n),function(t){var i=new D_(t.data);onmessage=X_(i)},7,0)}return e})();Bt=(function(){function e(_,n){this.c=Bn(),this.l=0,this.v=1,z_.call(this,_,n)}return e.prototype.push=function(_,n){this.c.p(_),this.l+=_.length,z_.prototype.push.call(this,_,n)},e.prototype.p=function(_,n){var t=wn(_,this.o,this.v&&qt(this.o),n&&8,this.s);this.v&&(Qt(t,this.o),this.v=0),n&&(q(t,t.length-8,this.c.d()),q(t,t.length-4,this.l)),this.ondata(t,n)},e.prototype.flush=function(_){z_.prototype.flush.call(this,_)},e})(),xs=(function(){function e(_,n){$n([zn,aa,function(){return[X_,z_,Bt]}],this,yn.call(this,_,n),function(t){var i=new Bt(t.data);onmessage=X_(i)},8,1)}return e})();je=(function(){function e(_,n){this.v=1,this.r=0,D_.call(this,_,n)}return e.prototype.push=function(_,n){if(D_.prototype.e.call(this,_),this.r+=_.length,this.v){var t=this.p.subarray(this.v-1),i=t.length>3?Kt(t):4;if(i>t.length){if(!n)return}else this.v>1&&this.onmember&&this.onmember(this.r-t.length);this.p=t.subarray(i),this.v=0}D_.prototype.c.call(this,0),this.s.f&&!this.s.l?(this.v=Hn(this.s.p)+9,this.s={i:0},this.o=new H(0),this.push(new H(0),n)):n&&D_.prototype.c.call(this,n)},e})(),ca=(function(){function e(_,n){var t=this;$n([Wn,ra,function(){return[X_,D_,je]}],this,yn.call(this,_,n),function(i){var a=new je(i.data);a.onmember=function(r){return postMessage(r)},onmessage=X_(a)},9,0,function(i){return t.onmember&&t.onmember(i)})}return e})();zt=(function(){function e(_,n){this.c=Ze(),this.v=1,z_.call(this,_,n)}return e.prototype.push=function(_,n){this.c.p(_),z_.prototype.push.call(this,_,n)},e.prototype.p=function(_,n){var t=wn(_,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(Jt(t,this.o),this.v=0),n&&q(t,t.length-4,this.c.d()),this.ondata(t,n)},e.prototype.flush=function(_){z_.prototype.flush.call(this,_)},e})(),ws=(function(){function e(_,n){$n([zn,sa,function(){return[X_,z_,zt]}],this,yn.call(this,_,n),function(t){var i=new zt(t.data);onmessage=X_(i)},10,1)}return e})();Qe=(function(){function e(_,n){D_.call(this,_,n),this.v=_&&_.dictionary?2:1}return e.prototype.push=function(_,n){if(D_.prototype.e.call(this,_),this.v){if(this.p.length<6&&!n)return;this.p=this.p.subarray(Zt(this.p,this.v-1)),this.v=0}n&&(this.p.length<4&&M(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),D_.prototype.c.call(this,n)},e})(),fa=(function(){function e(_,n){$n([Wn,oa,function(){return[X_,D_,Qe]}],this,yn.call(this,_,n),function(t){var i=new Qe(t.data);onmessage=X_(i)},11,0)}return e})();$t=(function(){function e(_,n){this.o=yn.call(this,_,n)||{},this.G=je,this.I=D_,this.Z=Qe}return e.prototype.i=function(){var _=this;this.s.ondata=function(n,t){_.ondata(n,t)}},e.prototype.push=function(_,n){if(this.ondata||M(5),this.s)this.s.push(_,n);else{if(this.p&&this.p.length){var t=new H(this.p.length+_.length);t.set(this.p),t.set(_,this.p.length)}else this.p=_;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,n),this.p=null)}},e})(),As=(function(){function e(_,n){$t.call(this,_,n),this.queuedSize=0,this.G=ca,this.I=_i,this.Z=fa}return e.prototype.i=function(){var _=this;this.s.ondata=function(n,t,i){_.ondata(n,t,i)},this.s.ondrain=function(n){_.queuedSize-=n,_.ondrain&&_.ondrain(n)}},e.prototype.push=function(_,n){this.queuedSize+=_.length,$t.prototype.push.call(this,_,n)},e})();ei=function(e,_,n,t){for(var i in e){var a=e[i],r=_+i,s=t;Array.isArray(a)&&(s=ce(t,a[1]),a=a[0]),ArrayBuffer.isView(a)?n[r]=[a,s]:(n[r+="/"]=[new H(0),s],ei(a,r,n,t))}},$i=typeof TextEncoder<"u"&&new TextEncoder,Vt=typeof TextDecoder<"u"&&new TextDecoder,ba=0;try{Vt.decode(J_,{stream:!0}),ba=1}catch{}ha=function(e){for(var _="",n=0;;){var t=e[n++],i=(t>127)+(t>223)+(t>239);if(n+i>e.length)return{s:_,r:W_(e,n-1)};i?i==3?(t=((t&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,_+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?_+=String.fromCharCode((t&31)<<6|e[n++]&63):_+=String.fromCharCode((t&15)<<12|(e[n++]&63)<<6|e[n++]&63):_+=String.fromCharCode(t)}},Ns=(function(){function e(_){this.ondata=_,ba?this.t=new TextDecoder:this.p=J_}return e.prototype.push=function(_,n){if(this.ondata||M(5),n=!!n,this.t){this.ondata(this.t.decode(_,{stream:!0}),n),n&&(this.t.decode().length&&M(8),this.t=null);return}this.p||M(4);var t=new H(this.p.length+_.length);t.set(this.p),t.set(_,this.p.length);var i=ha(t),a=i.s,r=i.r;n?(r.length&&M(8),this.p=null):this.p=r,this.ondata(a,n)},e})(),Is=(function(){function e(_){this.ondata=_}return e.prototype.push=function(_,n){this.ondata||M(5),this.d&&M(4),this.ondata(fn(_),this.d=n||!1)},e})();va=function(e){return e==1?3:e<6?2:e==9?1:0},Ta=function(e,_){return _+30+C_(e,_+26)+C_(e,_+28)},xa=function(e,_,n){var t=C_(e,_+28),i=C_(e,_+30),a=ti(e.subarray(_+46,_+46+t),!(C_(e,_+8)&2048)),r=_+46+t,s=ga(e,r,i,n,o_(e,_+20),o_(e,_+24),o_(e,_+42)),l=s[0],o=s[1],m=s[2];return[C_(e,_+10),l,o,a,r+i+C_(e,_+32),m]},ga=function(e,_,n,t,i,a,r){var s=i==4294967295,l=a==4294967295,o=r==4294967295,m=_+n,d=s+l+o;if(t&&d){for(;_+4<m;_+=4+C_(e,_+2))if(C_(e,_)==1)return[s?Pt(e,_+4+8*l):i,l?Pt(e,_+4):a,o?Pt(e,_+4+8*(l+s)):r,1];t<2&&M(13)}return[i,a,r,0]},un=function(e){var _=0;if(e)for(var n in e){var t=e[n].length;t>65535&&M(9),_+=t+4}return _},Pn=function(e,_,n,t,i,a,r,s){var l=t.length,o=n.extra,m=s&&s.length,d=un(o);q(e,_,r!=null?33639248:67324752),_+=4,r!=null&&(e[_++]=20,e[_++]=n.os),e[_]=20,_+=2,e[_++]=n.flag<<1|(a<0&&8),e[_++]=i&&8,e[_++]=n.compression&255,e[_++]=n.compression>>8;var u=new Date(n.mtime==null?Date.now():n.mtime),c=u.getFullYear()-1980;if((c<0||c>119)&&M(10),q(e,_,c<<25|u.getMonth()+1<<21|u.getDate()<<16|u.getHours()<<11|u.getMinutes()<<5|u.getSeconds()>>1),_+=4,a!=-1&&(q(e,_,n.crc),q(e,_+4,a<0?-a-2:a),q(e,_+8,n.size)),q(e,_+12,l),q(e,_+14,d),_+=16,r!=null&&(q(e,_,m),q(e,_+6,n.attrs),q(e,_+10,r),_+=14),e.set(t,_),_+=l,d)for(var v in o){var h=o[v],p=h.length;q(e,_,+v),q(e,_+2,p),e.set(h,_+4),_+=4+p}return m&&(e.set(s,_),_+=m),_},ii=function(e,_,n,t,i){q(e,_,101010256),q(e,_+8,n),q(e,_+10,n),q(e,_+12,t),q(e,_+16,i)},le=(function(){function e(_){this.filename=_,this.c=Bn(),this.size=0,this.compression=0}return e.prototype.process=function(_,n){this.ondata(null,_,n)},e.prototype.push=function(_,n){this.ondata||M(5),this.c.p(_),this.size+=_.length,n&&(this.crc=this.c.d()),this.process(_,n||!1)},e})(),Rs=(function(){function e(_,n){var t=this;n||(n={}),le.call(this,_),this.d=new z_(n,function(i,a){t.ondata(null,i,a)}),this.compression=8,this.flag=va(n.level)}return e.prototype.process=function(_,n){try{this.d.push(_,n)}catch(t){this.ondata(t,null,n)}},e.prototype.push=function(_,n){le.prototype.push.call(this,_,n)},e})(),Ls=(function(){function e(_,n){var t=this;n||(n={}),le.call(this,_),this.d=new ma(n,function(i,a,r){t.ondata(i,a,r)}),this.compression=8,this.flag=va(n.level),this.terminate=this.d.terminate}return e.prototype.process=function(_,n){this.d.push(_,n)},e.prototype.push=function(_,n){le.prototype.push.call(this,_,n)},e})(),Cs=(function(){function e(_){this.ondata=_,this.u=[],this.d=1}return e.prototype.add=function(_){var n=this;if(this.ondata||M(5),this.d&2)this.ondata(M(4+(this.d&1)*8,0,1),null,!1);else{var t=fn(_.filename),i=t.length,a=_.comment,r=a&&fn(a),s=i!=_.filename.length||r&&a.length!=r.length,l=i+un(_.extra)+30;i>65535&&this.ondata(M(11,0,1),null,!1);var o=new H(l);Pn(o,0,_,t,s,-1);var m=[o],d=function(){for(var p=0,w=m;p<w.length;p++){var S=w[p];n.ondata(null,S,!1)}m=[]},u=this.d;this.d=0;var c=this.u.length,v=ce(_,{f:t,u:s,o:r,t:function(){_.terminate&&_.terminate()},r:function(){if(d(),u){var p=n.u[c+1];p?p.r():n.d=1}u=1}}),h=0;_.ondata=function(p,w,S){if(p)n.ondata(p,w,S),n.terminate();else if(h+=w.length,m.push(w),S){var A=new H(16);q(A,0,134695760),q(A,4,_.crc),q(A,8,h),q(A,12,_.size),m.push(A),v.c=h,v.b=l+h+16,v.crc=_.crc,v.size=_.size,u&&v.r(),u=1}else u&&d()},this.u.push(v)}},e.prototype.end=function(){var _=this;if(this.d&2){this.ondata(M(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){_.d&1&&(_.u.splice(-1,1),_.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var _=0,n=0,t=0,i=0,a=this.u;i<a.length;i++){var r=a[i];t+=46+r.f.length+un(r.extra)+(r.o?r.o.length:0)}for(var s=new H(t+22),l=0,o=this.u;l<o.length;l++){var r=o[l];Pn(s,_,r,r.f,r.u,-r.c-2,n,r.o),_+=46+r.f.length+un(r.extra)+(r.o?r.o.length:0),n+=r.b}ii(s,_,this.u.length,t,n),this.ondata(null,s,!0),this.d=2},e.prototype.terminate=function(){for(var _=0,n=this.u;_<n.length;_++){var t=n[_];t.t()}this.d=2},e})();wa=(function(){function e(){}return e.prototype.push=function(_,n){this.ondata(null,_,n)},e.compression=0,e})(),Os=(function(){function e(){var _=this;this.i=new D_(function(n,t){_.ondata(null,n,t)})}return e.prototype.push=function(_,n){try{this.i.push(_,n)}catch(t){this.ondata(t,null,n)}},e.compression=8,e})(),Fs=(function(){function e(_,n){var t=this;n<32e4?this.i=new D_(function(i,a){t.ondata(null,i,a)}):(this.i=new _i(function(i,a,r){t.ondata(i,a,r)}),this.terminate=this.i.terminate)}return e.prototype.push=function(_,n){this.i.terminate&&(_=W_(_,0)),this.i.push(_,n)},e.compression=8,e})(),Us=(function(){function e(_){this.onfile=_,this.k=[],this.o={0:wa},this.p=J_}return e.prototype.push=function(_,n){var t=this;if(this.onfile||M(5),this.p||M(4),this.c>0){var i=Math.min(this.c,_.length),a=_.subarray(0,i);if(this.c-=i,this.d?this.d.push(a,!this.c):this.k[0].push(a),_=_.subarray(i),_.length)return this.push(_,n)}else{var r=0,s=0,l=void 0,o=void 0;this.p.length?_.length?(o=new H(this.p.length+_.length),o.set(this.p),o.set(_,this.p.length)):o=this.p:o=_;for(var m=o.length,d=this.c,u=d&&this.d,c=function(){var w=o_(o,s);if(w==67324752){r=1,l=s,v.d=null,v.c=0;var S=C_(o,s+6),A=C_(o,s+8),f=S&2048,T=S&8,b=C_(o,s+26),y=C_(o,s+28);if(m>s+30+b+y){var g=[];v.k.unshift(g),r=2;var E=o_(o,s+18),I=o_(o,s+22),C=ti(o.subarray(s+30,s+=30+b),!f),G=ga(o,s,y,2,E,I,0),Y=G[0],B=G[1],L=G[3];T&&(Y=-1-L),s+=y,v.c=Y;var W,F={name:C,compression:A,start:function(){if(F.ondata||M(5),!Y)F.ondata(null,J_,!0);else{var X=t.o[A];X||F.ondata(M(14,"unknown compression type "+A,1),null,!1),W=Y<0?new X(C):new X(C,Y,B),W.ondata=function(p_,b_,h_){F.ondata(p_,b_,h_)};for(var N=0,Q=g;N<Q.length;N++){var __=Q[N];W.push(__,!1)}t.k[0]==g&&t.c?t.d=W:W.push(J_,!0)}},terminate:function(){W&&W.terminate&&W.terminate()}};Y>=0&&(F.size=Y,F.originalSize=B),v.onfile(F)}return"break"}else if(d){if(w==134695760)return l=s+=12+(d==-2&&8),r=3,v.c=0,"break";if(w==33639248)return l=s-=4,r=3,v.c=0,"break"}},v=this;s<m-4;++s){var h=c();if(h==="break")break}if(this.p=J_,d<0){var p=r?o.subarray(0,l-12-(d==-2&&8)-(o_(o,l-16)==134695760&&4)):o.subarray(0,s);u?u.push(p,!!r):this.k[+(r==2)].push(p)}if(r&2)return this.push(o.subarray(s),n);this.p=o.subarray(s)}n&&(this.c&&M(13),this.p=null)},e.prototype.register=function(_){this.o[_.compression]=_},e})(),qe=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()}});var nc={};Ct(nc,{CLANG_DRIVER_DEFAULT_ARGS:()=>Kr,compilerDiagnostics:()=>Qr,createToolchain:()=>_c});var ie=class extends Error{constructor(n,t){super(n,{cause:t.cause});x(this,"code");x(this,"phase");x(this,"runtimeId");x(this,"profileId");x(this,"recoverable");this.name="WasmIdleError",this.code=t.code,this.phase=t.phase,this.runtimeId=t.runtimeId,this.profileId=t.profileId,this.recoverable=t.recoverable??!1}};var F_=class extends ie{constructor(_,n={}){super(_,{...n,code:"runtime-configuration",phase:n.phase??"configuration",recoverable:n.recoverable??!1}),this.name="RuntimeConfigurationError"}};var S_=class extends ie{constructor(_,n={}){super(_,{...n,code:"asset-integrity",phase:n.phase??"asset",recoverable:n.recoverable??!1}),this.name="AssetIntegrityError"}};var Di=new Set(["application/javascript","text/javascript"]);async function Oi(e){let _=e.stage??"compressed",n={runtimeId:e.runtimeId,profileId:e.profileId};if(!e.asset||e.asset.includes("\0"))throw new S_("Runtime asset identity must be a non-empty safe string",n);if(!ArrayBuffer.isView(e.bytes)||Object.prototype.toString.call(e.bytes)!=="[object Uint8Array]")throw new S_(`Runtime asset ${e.asset} did not provide byte data`,n);let t,i,a;if(typeof e.expected=="string"){if(_==="uncompressed")throw new S_(`Runtime asset ${e.asset} is missing uncompressed integrity metadata`,n);t=e.expected}else if(e.expected&&typeof e.expected=="object")if(_==="compressed")t=e.expected.sha256,i=e.expected.bytes,e.expected.uncompressedSha256===void 0&&e.expected.uncompressedBytes===void 0&&(a=e.expected.mediaType);else{if(e.expected.uncompressedSha256===void 0||e.expected.uncompressedBytes===void 0)throw new S_(`Runtime asset ${e.asset} is missing uncompressed integrity metadata`,n);t=e.expected.uncompressedSha256,i=e.expected.uncompressedBytes,a=e.expected.mediaType}else throw new S_(`Runtime asset ${e.asset} has invalid integrity metadata`,n);if(!/^[a-f0-9]{64}$/u.test(t))throw new S_(`Runtime asset ${e.asset} has an invalid expected ${_} SHA-256 digest`,n);if(i!==void 0&&(!Number.isSafeInteger(i)||i<0))throw new S_(`Runtime asset ${e.asset} has an invalid expected ${_} byte size`,n);if(i!==void 0&&e.bytes.byteLength!==i)throw new S_(`Runtime asset ${e.asset} ${_} size mismatch: expected ${i} bytes, received ${e.bytes.byteLength}`,n);if(a!==void 0){if(!a.includes("/"))throw new S_(`Runtime asset ${e.asset} has an invalid expected MIME type`,n);let o=e.mimeType?.split(";",1)[0]?.trim().toLowerCase()||"missing",m=a.trim().toLowerCase();if(o!==m&&!(Di.has(o)&&Di.has(m)))throw new S_(`Runtime asset ${e.asset} MIME type mismatch: expected ${m}, received ${o}`,n)}if(!globalThis.crypto?.subtle)throw new S_("Web Crypto SHA-256 is unavailable",n);let r=e.bytes.byteOffset===0&&e.bytes.byteLength===e.bytes.buffer.byteLength&&e.bytes.buffer instanceof ArrayBuffer?e.bytes.buffer:Uint8Array.from(e.bytes).buffer,s=new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256",r)),l=Array.from(s,o=>o.toString(16).padStart(2,"0")).join("");if(l!==t)throw new S_(`Runtime asset ${e.asset} ${_} SHA-256 mismatch: expected ${t}, received ${l}`,n);return Object.freeze({asset:e.asset,stage:_,sha256:l,bytes:e.bytes.byteLength,mediaType:a?e.mimeType?.split(";",1)[0]?.trim().toLowerCase():void 0})}var ss="1.4.0",Fi=ss;var Ui=64*1024*1024;function Ut(e){let _=Object.freeze(Ge(e)),n=async i=>{if(!(!_.enabled||typeof i!="string"||!i||i.length>64*1024))try{let a=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(i)),r=Array.from(new Uint8Array(a),s=>s.toString(16).padStart(2,"0")).join("");return{url:`https://wasm-idle.invalid/.generated-assets/${_.namespace}/${r}`,validationKey:`generated-v1:${r}`}}catch{return}},t=(i,a)=>i.references.some(r=>r.url===a.url&&r.validationKey===a.validationKey);return Object.freeze({async read(i,a){s_(a);let r=await n(i);if(r)return Ot(_,a,async(s,l,o)=>{let m=(await Pe(l)).find(u=>t(u,r));if(!m||m.bytes>Math.min(_.maxEntryBytes,_.maxBytes,Ui))return;let d=await s.match(ae(_,m.sha256));try{if(!d)throw new Error("Generated artifact body is missing");let u=await us(d,m.bytes,o);await Tn(Oi({asset:r.url,bytes:u,expected:m}),o),s_(o);try{ki(m,{...r,sha256:m.sha256,bytes:m.bytes},_),await xn(l,"readwrite",c=>c.put(m))}catch{}return u}catch{s_(o),await ke(s,l,_,m);return}})},async write(i,a,r){if(s_(r),!Hi(_)||!a.byteLength||a.byteLength>Math.min(_.maxBytes,_.maxEntryBytes,Ui))return!1;let s=await n(i);if(!s)return!1;let l=Uint8Array.from(a),o;try{o=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",l)),m=>m.toString(16).padStart(2,"0")).join("")}catch{return!1}return await Ot(_,r,async(m,d)=>{let u=await Pe(d),c=new Set(u.map(p=>ae(_,p.sha256)));for(let p of await m.keys())c.has(p.url)||await m.delete(p);for(let p of u)p.sha256===o||!t(p,s)||(p.references=p.references.filter(w=>w.url!==s.url||w.validationKey!==s.validationKey),p.references.length?await xn(d,"readwrite",w=>w.put(p)):await ke(m,d,_,p));u=await Pe(d);let v=u.find(p=>p.sha256===o),h=v??{sha256:o,bytes:l.byteLength,lastUsed:0,references:[]};if(h.bytes!==l.byteLength||(ki(h,{...s,sha256:o,bytes:l.byteLength},_),!await ps(m,d,_,u,v?0:l.byteLength,v?0:1,o)))return!1;s_(r),await m.put(ae(_,o),new Response(l,{headers:{"Content-Type":"application/octet-stream","Content-Length":String(l.byteLength)}}));try{await xn(d,"readwrite",p=>p.put(h))}catch(p){throw v||await m.delete(ae(_,o)),p}return!0})??!1},async remove(i,a){let r=await n(i);r&&await Ot(_,a,async(s,l)=>{for(let o of await Pe(l))t(o,r)&&(o.references=o.references.filter(m=>m.url!==r.url||m.validationKey!==r.validationKey),o.references.length?await xn(l,"readwrite",m=>m.put(o)):await ke(s,l,_,o))})}})}var Pi=Object.freeze({enabled:!0,maxBytes:512*1024*1024,maxEntryBytes:512*1024*1024,maxEntries:4096,storageReserveBytes:64*1024*1024,eviction:"lru",namespace:"wasm-idle",version:Fi}),Ft=3e3,os=3e4,Mt=new Set,ls={};function Ge(...e){return ms([ls,...e])}function ms(e){let _={...Pi};for(let n of e)if(n===!1)_.enabled=!1;else if(n)for(let[t,i]of Object.entries(n))i!==void 0&&Object.hasOwn(Pi,t)&&(_[t]=i);for(let n of["maxBytes","maxEntryBytes","maxEntries","storageReserveBytes"])if(!Number.isSafeInteger(_[n])||_[n]<0)throw new TypeError(`Invalid asset cache ${n}`);if(typeof _.enabled!="boolean"||!["lru","none"].includes(_.eviction))throw new TypeError("Invalid asset cache policy");if(typeof _.namespace!="string"||!/^[a-zA-Z0-9._-]{1,100}$/u.test(_.namespace))throw new TypeError("Invalid asset cache namespace");if(typeof _.version!="string"||!_.version||_.version.length>256)throw new TypeError("Invalid asset cache version");return _}function s_(e){if(e?.aborted)throw e.reason!==void 0?e.reason:new DOMException("Aborted","AbortError")}function Dt(e){return`wasm-idle-assets-v1:${e.namespace}`}function ae(e,_){return`https://wasm-idle.invalid/.runtime-assets/${e.namespace}/${_}`}function Hi(e){try{return e.enabled&&e.maxBytes>0&&e.maxEntryBytes>0&&e.maxEntries>0&&typeof globalThis.caches<"u"&&typeof globalThis.indexedDB<"u"&&typeof globalThis.navigator?.locks?.request=="function"}catch{return!1}}function Tn(e,_){return new Promise((n,t)=>{let i=()=>{_.removeEventListener("abort",i),t(_.reason)};e.then(a=>{_.removeEventListener("abort",i),_.aborted?t(_.reason):n(a)},a=>{_.removeEventListener("abort",i),t(a)}),_.aborted?i():_.addEventListener("abort",i,{once:!0})})}function ds(e,_){return s_(_),new Promise((n,t)=>{let i=!1,a=indexedDB.open(e,1),r=()=>{i=!0,_.removeEventListener("abort",r),t(_.reason)};_.addEventListener("abort",r,{once:!0}),a.onupgradeneeded=()=>{i?a.transaction?.abort():a.result.createObjectStore("assets",{keyPath:"sha256"})},a.onsuccess=()=>{_.removeEventListener("abort",r),i?a.result.close():(i=!0,n(a.result))},a.onerror=()=>{_.removeEventListener("abort",r),i=!0,t(a.error)}})}function xn(e,_,n){return s_(e.signal),new Promise((t,i)=>{let a=e.connection.transaction("assets",_),r=()=>{try{a.abort()}catch{}},s=setTimeout(r,Ft);e.signal.addEventListener("abort",r,{once:!0});let l=()=>{clearTimeout(s),e.signal.removeEventListener("abort",r)},o;try{o=n(a.objectStore("assets"))}catch(m){l();try{a.abort()}catch{}i(m);return}a.oncomplete=()=>{l(),e.signal.aborted?i(e.signal.reason):t(o.result)},a.onabort=()=>{l(),i(e.signal.aborted?e.signal.reason:a.error??new Error("Asset cache database transaction failed"))}})}async function Ot(e,_,n,t="exclusive"){if(s_(_),!Hi(e))return;let i=new AbortController,a=()=>i.abort(_?.reason);_?.addEventListener("abort",a,{once:!0});let r=Dt(e),s=setTimeout(()=>{Mt.add(r),i.abort(new Error("Asset cache lock timed out"))},Mt.has(r)?Ft:os);try{let l=navigator.locks.request(r,{signal:i.signal,mode:t},async()=>{let o=i.signal;Mt.delete(r),s_(o),clearTimeout(s),s=setTimeout(()=>i.abort(new Error("Asset cache operation timed out")),Ft);let m=await ds(Dt(e),o);try{s_(o);let d=await Tn(caches.open(Dt(e)),o);s_(o);let c=await n({match:(...v)=>(s_(o),Tn(d.match(...v),o)),keys:(...v)=>(s_(o),Tn(d.keys(...v),o)),put:async(...v)=>{s_(o),await d.put(...v),s_(o)},delete:async(...v)=>{s_(o);let h=await d.delete(...v);return s_(o),h}},{connection:m,signal:o},o);return s_(o),c}finally{m.close()}});return await Tn(l,i.signal)}catch{s_(_);return}finally{clearTimeout(s),_?.removeEventListener("abort",a)}}function ki(e,_,n){let t=_.version??n.version;if(!e.references.some(i=>i.version===t&&i.url===_.url&&i.validationKey===_.validationKey)){if(e.references.length>=4096)throw new Error("Asset cache reference limit reached");e.references.push({version:t,url:_.url,validationKey:_.validationKey})}e.lastUsed=Date.now()}function Gi(e){return!!e&&/^[a-f0-9]{64}$/u.test(e.sha256)&&Number.isSafeInteger(e.bytes)&&e.bytes>=0&&Number.isFinite(e.lastUsed)&&Array.isArray(e.references)&&e.references.length<=4096&&e.references.every(_=>typeof _?.version=="string"&&typeof _.url=="string"&&(_.validationKey===void 0||typeof _.validationKey=="string"))}async function Pe(e){let _=await xn(e,"readonly",n=>n.getAll());for(let n of _)Gi(n)||await xn(e,"readwrite",t=>t.delete(n.sha256));return _.filter(Gi)}async function ke(e,_,n,t){await e.delete(ae(n,t.sha256)),await xn(_,"readwrite",i=>i.delete(t.sha256))}async function cs(e){try{return s_(e),await Tn(Promise.resolve(navigator.storage?.estimate?.()),e)}catch{s_(e);return}}async function us(e,_,n){s_(n);let t=e.body?.getReader();if(!t)return new Uint8Array;let i=[],a=0;try{for(;;){s_(n);let{done:l,value:o}=await Tn(t.read(),n);if(l)break;if(a+=o.byteLength,a>_)throw new Error("Cached asset exceeds expected size");i.push(o)}}catch(l){throw t.cancel().catch(()=>{}),l}finally{t.releaseLock()}let r=new Uint8Array(a),s=0;for(let l of i)r.set(l,s),s+=l.byteLength;return r}async function fs(e,_,n){let t=await cs(n);return typeof t?.quota!="number"||typeof t.usage!="number"||!Number.isFinite(t.quota)||!Number.isFinite(t.usage)?e.maxBytes:Math.max(0,Math.min(e.maxBytes,t.quota-t.usage+_-e.storageReserveBytes))}async function ps(e,_,n,t,i,a,r){let s=t.reduce((d,u)=>d+u.bytes,0),l=t.length,o=await fs(n,s,_.signal);if(i>o||a>n.maxEntries)return!1;let m=()=>s+i<=o&&l+a<=n.maxEntries;if(m())return!0;if(n.eviction==="none")return!1;for(let d of[...t].sort((u,c)=>u.lastUsed-c.lastUsed||u.sha256.localeCompare(c.sha256)))if(d.sha256!==r&&(await ke(e,_,n,d),s-=d.bytes,l--,m()))return!0;return m()}var cn=class extends Error{constructor(n,t,i={}){super(t);x(this,"code");x(this,"path");x(this,"limit");x(this,"actual");this.name="WorkspaceValidationError",this.code=n,this.path=i.path,this.limit=i.limit,this.actual=i.actual}},bs=Object.freeze({maxFiles:256,maxFileBytes:2*1024*1024,maxTotalBytes:8*1024*1024,maxPathBytes:1024,caseSensitive:!1}),dc=new TextEncoder;var He=Object.getPrototypeOf(Uint8Array.prototype),cc=Object.getOwnPropertyDescriptor(He,Symbol.toStringTag).get,uc=Object.getOwnPropertyDescriptor(He,"byteLength").get,fc=Object.getOwnPropertyDescriptor(He,"byteOffset").get,pc=Object.getOwnPropertyDescriptor(He,"buffer").get;function L_(e){if(e.debugMode!==void 0){if(e.debugMode==="none"||e.debugMode==="trace"||e.debugMode==="lldb")return e.debugMode;throw new Error(`unsupported wasm-clang debug mode: ${String(e.debugMode)}`)}return e.debug?"trace":"none"}function Dn(e,..._){let n={};for(let t of _)n[t]=(e[t]||(()=>0)).bind(e);return n}function re(e,_,n=-1){let t=n===-1?e.length:_+n,i="";for(let a=_;a<t&&e[a];++a)i+=String.fromCharCode(e[a]);return i}function Bi(e,_,n=-1){let t=n===-1?e.length:_+n,i=[];for(let a=_;a<t&&e[a];++a)i.push(e[a]);return new TextDecoder().decode(Uint8Array.from(i))}function Wi(e,_,n){let t="";for(let a of e.subarray(_,_+n))t+=String.fromCharCode(a);if(t.length!==n||/[^0-7\0 ]/.test(t)||!/^ *[0-7]+[\0 ]*$/.test(t))throw new Error("TAR has an invalid octal number");let i=Number.parseInt(t,8);if(!Number.isSafeInteger(i))throw new Error("TAR number exceeds the safe integer range");return i}var gn=class{constructor(_){x(this,"memory");x(this,"view");x(this,"buffer");x(this,"u8");x(this,"u32");this.memory=_,this.buffer=_.buffer,this.view=new DataView(this.buffer),this.u8=new Uint8Array(this.buffer),this.u32=new Uint32Array(this.buffer)}check(){this.buffer.byteLength===0&&(this.buffer=this.memory.buffer,this.view=new DataView(this.buffer),this.u8=new Uint8Array(this.buffer),this.u32=new Uint32Array(this.buffer))}read8(_){return this.u8[_]}read32(_){return this.u32[_>>2]}readInt32(_){return this.view.getInt32(_,!0)}readFloat32(_){return this.view.getFloat32(_,!0)}readFloat64(_){return this.view.getFloat64(_,!0)}readStr(_,n){return re(this.u8,_,n)}readStrR(_,n){return Bi(this.u8,_,n)}write8(_,n){this.u8[_]=n}write32(_,n){this.u32[_>>2]=n}write64(_,n,t=0){this.write32(_,n),this.write32(_+4,t)}writeStr(_,n){return _+=this.write(_,n),this.write8(_,0),n.length+1}writeUint8(_,n){return new Uint8Array(this.buffer,_,n.length).set(n),n.length}write(_,n){return n instanceof ArrayBuffer?this.writeUint8(_,new Uint8Array(n)):n instanceof SharedArrayBuffer?this.writeUint8(_,new Uint8Array(n)):typeof n=="string"?this.writeUint8(_,n.split("").map(t=>t.charCodeAt(0))):this.writeUint8(_,n)}};var Ea=new WeakMap;function Sa(e){let _=e??globalThis.fetch;if(!_)throw new Error("Fetch is unavailable while loading runtime assets");let n=Ea.get(_);return n||(n={modules:new Map,buffers:new Map},Ea.set(_,n)),{provider:_,cache:n}}var Na=new WeakMap;function Ia(e){return Na.get(e)??Promise.resolve(void 0)}async function Gs(e){try{return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",e)),_=>_.toString(16).padStart(2,"0")).join("")}catch{return}}var Hs=e=>e.byteLength>=2&&e[0]===31&&e[1]===139,jn=128*1024*1024,_t=4*1024*1024,Ra=64*1024;async function La(e,_,n,t){let i=e.getReader(),a=t,r=!1;if(a?.aborted){r=!0;let v=f_(a);try{Promise.resolve(i.cancel(v)).catch(()=>{})}catch{}try{i.releaseLock()}catch{}throw v}let s,l=a?new Promise((v,h)=>{s=()=>{if(r)return;r=!0;let p=f_(a);try{Promise.resolve(i.cancel(p)).catch(()=>{})}catch{}h(p)},a.addEventListener("abort",s,{once:!0})}):void 0,o=new Uint8Array(Math.min(Ra,n)),m=0,d=!1,u,c;try{for(c_(a);;){let v=i.read(),{done:h,value:p}=l?await Promise.race([v,l]):await v;if(c_(a),h)break;if(!p)continue;let w=m+p.byteLength;if(w>n)throw new Error(`Runtime asset ${_} decompressed size exceeds the ${n} byte limit`);if(w>o.byteLength){let S=Math.min(n,Math.max(w,Math.max(o.byteLength*2,1))),A=new Uint8Array(S);A.set(o.subarray(0,m)),o=A}o.set(p,m),m=w}c_(a),u=o.subarray(0,m),d=!0}catch(v){if(a?.aborted)throw f_(a);if(!r){r=!0;try{Promise.resolve(i.cancel(v)).catch(()=>{})}catch{}}throw v}finally{s&&a?.removeEventListener("abort",s);try{i.releaseLock()}catch(v){d&&(c={error:v})}}if(c)throw c.error;return u}function Ca(e){let _;try{_=new URL(e,typeof location<"u"?location.href:void 0)}catch{throw new Error("Runtime asset URL must be absolute outside a browser document")}if(_.protocol!=="http:"&&_.protocol!=="https:")throw new Error("Runtime assets must use HTTP(S)");if(_.username||_.password)throw new Error("Runtime asset URLs must not include credentials");if(_.hash)throw new Error("Runtime asset URLs must not include fragments");return _}function Ma(e){let _=e.headers.get("Content-Length");if(_===null)return 0;let n=Number(_);if(!/^\d+$/u.test(_)||!Number.isSafeInteger(n))throw new Error("Runtime asset has an invalid Content-Length");return n}function f_(e){return e.reason??new DOMException("Runtime asset load aborted","AbortError")}function fe(e,_,n){return _?new Promise((t,i)=>{let a=!1,r=()=>{a||(a=!0,_.removeEventListener("abort",r),i(f_(_)))};_.addEventListener("abort",r,{once:!0}),e.then(s=>{if(a){n&&Promise.resolve().then(()=>n(s,_.reason)).catch(()=>{});return}a=!0,_.removeEventListener("abort",r),t(s)},s=>{a||(a=!0,_.removeEventListener("abort",r),i(s))}),_.aborted&&r()}):e}function c_(e){if(e?.aborted)throw f_(e)}function N_(e,_){try{e.body?.cancel(_).catch(()=>{})}catch{}}async function Da(e,_,n,t,i){if(i?.aborted){let p=f_(i);throw N_(e,p),p}let a;try{a=Ma(e)}catch(p){throw N_(e,p),p}if(a>n)throw N_(e),new Error(`Runtime asset ${_} size exceeds the ${n} byte limit`);if(!e.body){let p=new Uint8Array(await fe(e.arrayBuffer(),i));if(i?.aborted)throw f_(i);if(p.byteLength>n)throw new Error(`Runtime asset ${_} size exceeds the ${n} byte limit`);return t?.set?.(1),p}let r=i,s=e.body.getReader(),l=!1,o=p=>{if(!l){l=!0;try{Promise.resolve(s.cancel(p)).catch(()=>{})}catch{}}};if(r?.aborted){let p=f_(r);o(p);try{s.releaseLock()}catch{}throw p}let m,d=r?new Promise((p,w)=>{m=()=>{let S=f_(r);o(S),w(S)},r.addEventListener("abort",m,{once:!0})}):void 0,u,c=0,v,h;try{for(u=new Uint8Array(Math.min(n,a||Ra));;){c_(r);let p=s.read(),{done:w,value:S}=d?await Promise.race([p,d]):await p;if(c_(r),w)break;if(!S)continue;let A=c+S.byteLength;if(A>n){let f=new Error(`Runtime asset ${_} size exceeds the ${n} byte limit`);throw o(f),f}if(A>u.byteLength){let f=Math.min(n,Math.max(A,Math.max(u.byteLength*2,1))),T=new Uint8Array(f);T.set(u.subarray(0,c)),u=T}u.set(S,c),c=A,a>0&&t?.set?.(c/a)}c_(r),v=u.subarray(0,c)}catch(p){if(r?.aborted){let w=f_(r);throw o(w),w}throw o(p),p}finally{m&&r?.removeEventListener("abort",m);try{s.releaseLock()}catch(p){r?.aborted||(h={error:p})}}if(r?.aborted){let p=f_(r);throw o(p),p}if(h)throw h.error;return v}async function Oa(e,_={}){let n=_.maxBytes??_t;if(!Number.isSafeInteger(n)||n<=0)throw new Error("Runtime JSON byte limit must be a positive safe integer");let t=Ca(e.toString()),i=_.label?.trim()||"runtime JSON",a=_.fetchImpl??globalThis.fetch?.bind(globalThis);if(!a)throw new Error(`Fetch is unavailable while loading ${i}`);if(_.signal?.aborted)throw f_(_.signal);let r={cache:"no-store",credentials:"omit",redirect:"error",referrerPolicy:"no-referrer"};_.signal&&(r.signal=_.signal);let s=Promise.resolve(a(t.toString(),r)),l=await fe(s,_.signal,(d,u)=>{N_(d,u)});if(_.signal?.aborted){let d=f_(_.signal);throw N_(l,d),d}if(l.url){let d;try{d=new URL(l.url)}catch{throw N_(l),new Error(`${i} returned an invalid final URL`)}if(d.href!==t.href)throw N_(l),new Error(`${i} returned an unexpected final URL`)}if(!l.ok)throw N_(l),new Error(`Failed to load ${i} from ${t}: ${l.status}`);let o=await Da(l,t,n,void 0,_.signal),m;try{m=new TextDecoder("utf-8",{fatal:!0}).decode(o)}catch(d){throw new Error(`${i} is not valid UTF-8`,{cause:d})}try{return JSON.parse(m)}catch(d){throw new Error(`${i} is not valid JSON`,{cause:d})}}async function Bs(e,_="runtime asset",n=jn,t){if(!Number.isSafeInteger(n)||n<0)throw new Error("Runtime asset decompression limit must be a non-negative safe integer");if(c_(t),!Hs(e)){if(e.byteLength>n)throw new Error(`Runtime asset ${_} decompressed size exceeds the ${n} byte limit`);return e}if(typeof DecompressionStream!="function")throw new Error(`Failed to decompress runtime asset ${_}: DecompressionStream('gzip') is unavailable`);try{let i=Uint8Array.from(e),a=new ReadableStream({start(l){l.enqueue(i),l.close()}}),r=new DecompressionStream("gzip"),s=a.pipeThrough({readable:r.readable,writable:r.writable});return await La(s,_,n,t)}catch(i){throw t?.aborted?f_(t):new Error(`Failed to decompress runtime asset ${_}: ${i instanceof Error?i.message:String(i)}`)}}async function Ws(e,_,n,t,i){if(i?.aborted){let b=f_(i);throw N_(e,b),b}let a;try{a=Ma(e)}catch(b){throw N_(e,b),b}if(a>n)throw N_(e),new Error(`Runtime asset ${_} download size exceeds the ${n} byte limit`);if(!e.body){let b=new Uint8Array(await fe(e.arrayBuffer(),i));if(c_(i),b.byteLength>n)throw new Error(`Runtime asset ${_} download size exceeds the ${n} byte limit`);let y=await Bs(b,_,n,i);return c_(i),t?.set?.(1),y}let r=e.body.getReader(),s=[],l=0,o=0,m=!1,d=!1,u=!1,c=()=>{d||(d=!0,r.releaseLock())},v=b=>{if(!(d||u)){u=!0;try{Promise.resolve(r.cancel(b)).catch(()=>{})}catch{}try{c()}catch{}}};if(i?.aborted){let b=f_(i);throw v(b),b}let h,p=i?new Promise((b,y)=>{h=()=>{let g=f_(i);v(g),y(g)},i.addEventListener("abort",h,{once:!0})}):void 0;try{for(c_(i);l<2;){let b=r.read(),{done:y,value:g}=p?await Promise.race([b,p]):await b;if(c_(i),y){m=!0,c();break}if(!g)continue;let E=o+g.byteLength;if(E>n){let I=new Error(`Runtime asset ${_} download size exceeds the ${n} byte limit`);throw v(I),I}s.push(g),l+=g.byteLength,o=E,a>0&&t?.set?.(Math.min(o/a,1))}c_(i)}catch(b){throw v(b),i?.aborted?f_(i):b}finally{h&&i?.removeEventListener("abort",h)}let w,S;for(let b of s){for(let y of b)if(w===void 0?w=y:S===void 0&&(S=y),S!==void 0)break;if(S!==void 0)break}let A=0,f=new ReadableStream({async pull(b){if(A<s.length){b.enqueue(s[A++]);return}if(m){b.close();return}try{let{done:y,value:g}=await r.read();if(c_(i),y){m=!0,c(),b.close();return}if(!g)return;let E=o+g.byteLength;if(E>n){let I=new Error(`Runtime asset ${_} download size exceeds the ${n} byte limit`);v(I),b.error(I);return}o=E,a>0&&t?.set?.(Math.min(o/a,1)),b.enqueue(g)}catch(y){v(y),b.error(y)}},cancel(b){v(b)}}),T=f;if(w===31&&S===139){if(typeof DecompressionStream!="function"){let y=new Error(`Failed to decompress runtime asset ${_}: DecompressionStream('gzip') is unavailable`);throw v(y),y}let b=new DecompressionStream("gzip");T=f.pipeThrough({readable:b.readable,writable:b.writable})}try{let b=await La(T,_,n,i);return t?.set?.(1),b}catch(b){throw v(b),i?.aborted?f_(i):new Error(`Failed to decompress runtime asset ${_}: ${b instanceof Error?b.message:String(b)}`)}}async function zs(e,_,n,t){c_(t);let{unzipSync:i}=await Promise.resolve().then(()=>(Aa(),ya));c_(t);let a,r=i(e,{filter(s){if(s.name.endsWith("/")||a!==void 0)return!1;if(s.originalSize>n)throw new Error(`Runtime asset ${_} extracted size exceeds the ${n} byte limit`);return a=s.name,!0}});c_(t);for(let[s,l]of Object.entries(r))if(!s.endsWith("/"))return l;throw new Error("No entry found")}var Fa=async(e,_,n=jn,t,i)=>{if(!Number.isSafeInteger(n)||n<0)throw new Error("Runtime asset byte limit must be a non-negative safe integer");c_(t);let{provider:a,cache:r}=Sa(i),s=r.buffers,l=`${e}\0${n}`,o=t?void 0:s.get(l);o||(o=(async()=>{let d=Ca(e),u={credentials:"omit",redirect:"error",referrerPolicy:"no-referrer"};t&&(u.signal=t);let c;try{let h=Promise.resolve(a(d,u));c=await fe(h,t,(p,w)=>{N_(p,w)})}catch(h){throw t?.aborted?f_(t):h}if(t?.aborted){let h=f_(t);throw N_(c,h),h}if(c.url){let h;try{h=new URL(c.url)}catch{throw N_(c),new Error("Runtime asset returned an invalid final URL")}if(h.href!==d.href)throw N_(c),new Error("Runtime asset returned an unexpected final URL")}if(!c.ok)throw N_(c),new Error(`Failed to load runtime asset ${d}: ${c.status}`);if(d.pathname.endsWith(".gz"))return await Ws(c,d,n,_,t);let v=await Da(c,d,n,_,t);return d.pathname.endsWith(".zip")?await zs(v,d,n,t):v})(),t||(o=o.catch(d=>{throw s.get(l)===o&&s.delete(l),d}),s.set(l,o)));let m=await o;return c_(t),_?.set?.(1),m},Z_=async(e,_,n=jn,t,i)=>{let a=await Fa(e,_,n,t,i);return c_(t),Uint8Array.from(a)};async function bn(e,_,n,t=jn,i){c_(n);let{provider:a,cache:r}=Sa(i),s=r.modules,l=`${e}\0${t}`,o=n?void 0:s.get(l);if(o)return o;let m=(async()=>{let d=await Fa(e,_,t,n,a);c_(n);let u=d.buffer;if(!(u instanceof ArrayBuffer))throw new TypeError("Runtime asset compilation requires an ArrayBuffer");let c=new Uint8Array(u,d.byteOffset,d.byteLength),v=await fe(WebAssembly.compile(c),n);return c_(n),Na.set(v,Gs(c)),v})();return n||(m=m.catch(d=>{throw s.get(l)===m&&s.delete(l),d}),s.set(l,m)),m}function Ua(e,_){return WebAssembly.instantiate(e,_)}var pe=class extends Error{constructor(n){super(`process exited with code ${n}.`);x(this,"code");this.code=n}},be=class extends Error{constructor(_,n){super(`${_}.${n} not implemented.`)}},An=class extends Error{constructor(_="abort"){super(_)}},ai=class extends Error{constructor(_){super(_)}};function ri(e){if(!e)throw new ai("assertion failed.")}var Xs=["&&","||","==","!=","<=",">=","+","-","*","/","%","<",">","!"],si=e=>!!e&&typeof e=="object"&&!Array.isArray(e)&&e.__debugExpressionKind==="array",Pa=e=>!!e&&typeof e=="object"&&!Array.isArray(e)&&e.__debugExpressionKind==="object",oi=(e,_)=>{let n=e[_];if(n!=="'"&&n!=='"')throw new Error("expected quoted string");let t=_+1,i="";for(;t<e.length;){let a=e[t];if(!a)break;if(a==="\\"){let r=e[t+1];if(!r)throw new Error("unterminated string literal");r==="n"?i+=`
`:r==="r"?i+="\r":r==="t"?i+="	":i+=r,t+=2;continue}if(a===n)return{value:i,next:t+1};i+=a,t+=1}throw new Error("unterminated string literal")},$s=e=>{let _=[];for(let n=0;n<e.length;){let t=e[n];if(!t)break;if(/\s/.test(t)){n+=1;continue}if(t==="("||t===")"){_.push({type:"paren",value:t}),n+=1;continue}if(t==="["||t==="]"){_.push({type:"bracket",value:t}),n+=1;continue}if(t==="."){_.push({type:"dot"}),n+=1;continue}let i=Xs.find(s=>e.startsWith(s,n));if(i){_.push({type:"operator",value:i}),n+=i.length;continue}if(t==="'"||t==='"'){let s=oi(e,n);_.push({type:"string",value:s.value}),n=s.next;continue}let a=e.slice(n).match(/^\d+(?:\.\d+)?/);if(a?.[0]){_.push({type:"number",value:a[0]}),n+=a[0].length;continue}let r=e.slice(n).match(/^[A-Za-z_]\w*/);if(r?.[0]){r[0]==="true"||r[0]==="false"||r[0]==="True"||r[0]==="False"?_.push({type:"boolean",value:r[0]==="true"||r[0]==="True"}):r[0]==="null"||r[0]==="None"?_.push({type:"null"}):r[0]==="and"?_.push({type:"operator",value:"&&"}):r[0]==="or"?_.push({type:"operator",value:"||"}):r[0]==="not"?_.push({type:"operator",value:"!"}):_.push({type:"identifier",value:r[0]}),n+=r[0].length;continue}throw new Error(`unsupported token near "${e.slice(n)}"`)}return _},nt=(e,_=0)=>{let n=_;for(;/\s/.test(e[n]||"");)n+=1;let t=e[n];if(t==="["){n+=1;let a=[];for(;;){for(;/\s/.test(e[n]||"");)n+=1;if(e[n]==="]")return{value:a,next:n+1};if(e.startsWith("...",n)){for(a.truncated=!0,n+=3;/\s/.test(e[n]||"");)n+=1;if(e[n]==="]")return{value:a,next:n+1};throw new Error("unsupported array preview")}let r=nt(e,n);for(a.push(r.value),n=r.next;/\s/.test(e[n]||"");)n+=1;if(e[n]===","){n+=1;continue}if(e[n]==="]")return{value:a,next:n+1};throw new Error("unsupported array preview")}}if(t==="("){n+=1;let a=[];for(;;){for(;/\s/.test(e[n]||"");)n+=1;if(e[n]===")")return{value:a,next:n+1};if(e.startsWith("...",n)){for(a.truncated=!0,n+=3;/\s/.test(e[n]||"");)n+=1;if(e[n]===")")return{value:a,next:n+1};throw new Error("unsupported tuple preview")}let r=nt(e,n);for(a.push(r.value),n=r.next;/\s/.test(e[n]||"");)n+=1;if(e[n]===","){n+=1;continue}if(e[n]===")")return{value:a,next:n+1};throw new Error("unsupported tuple preview")}}if(t==="{"){n+=1;let a={};for(;;){for(;/\s/.test(e[n]||"");)n+=1;if(e[n]==="}")return{value:a,next:n+1};if(e.startsWith("...",n))throw new Error("unavailable");let r="";if(e[n]==="'"||e[n]==='"'){let l=oi(e,n);r=l.value,n=l.next}else{let l=e.slice(n).match(/^[A-Za-z_]\w*/)?.[0];if(!l)throw new Error("unsupported object preview");r=l,n+=l.length}for(;/\s/.test(e[n]||"");)n+=1;if(e[n]!==":")throw new Error("unsupported object preview");n+=1;let s=nt(e,n);for(a[r]=s.value,n=s.next;/\s/.test(e[n]||"");)n+=1;if(e[n]===","){n+=1;continue}if(e[n]==="}")return{value:a,next:n+1};throw new Error("unsupported object preview")}}if(t==="'"||t==='"')return oi(e,n);if(e.startsWith("true",n))return{value:!0,next:n+4};if(e.startsWith("false",n))return{value:!1,next:n+5};if(e.startsWith("True",n))return{value:!0,next:n+4};if(e.startsWith("False",n))return{value:!1,next:n+5};if(e.startsWith("null",n))return{value:null,next:n+4};if(e.startsWith("None",n))return{value:null,next:n+4};let i=e.slice(n).match(/^-?\d+(?:\.\d+)?/);if(i?.[0])return{value:Number(i[0]),next:n+i[0].length};throw new Error("unsupported preview")},ka=e=>{let _=e.trim();if(!_||_==="?")throw new Error("unavailable");if(_==="true"||_==="false"||_==="True"||_==="False")return _==="true"||_==="True";if(_==="null"||_==="None")return null;let n=Number(_);if(!Number.isNaN(n))return n;if(_.startsWith("[")||_.startsWith("(")||_.startsWith("{")||_.startsWith("'")||_.startsWith('"')){let t=nt(_);if(_.slice(t.next).trim())throw new Error("unsupported preview");return t.value}throw new Error("unsupported preview")},Vs=e=>`'${e.replaceAll("\\","\\\\").replaceAll("'","\\'").replaceAll(`
`,"\\n").replaceAll("\r","\\r").replaceAll("	","\\t")}'`,he=(e,_,n)=>{if(e===null)return"null";if(typeof e=="number"||typeof e=="boolean")return`${e}`;if(typeof e=="string")return _?Vs(e):e;if(n>=4)return"...";if(Array.isArray(e)){let r=Math.min(e.length,8);return`[${e.slice(0,r).map(l=>he(l,!0,n+1)).join(", ")}${e.truncated||e.length>r?", ...":""}]`}if(si(e)){let r=e.keys?.()||[],s=Math.min(r.length||e.length||0,8),l=[];for(let m=0;m<s;m+=1){let d=r[m]??m;l.push(he(e.get(d),!0,n+1))}let o=e.truncated||e.length!=null&&e.length>s;return`[${l.join(", ")}${o?", ...":""}]`}if(Pa(e)){let r=e.keys?.()||[],s=Math.min(r.length,8);return`{${r.slice(0,s).map(o=>`${o}: ${he(e.get(o),!0,n+1)}`).join(", ")}${r.length>s?", ...":""}}`}let t=Object.keys(e),i=Math.min(t.length,8);return`{${t.slice(0,i).map(r=>`${r}: ${he(e[r],!0,n+1)}`).join(", ")}${t.length>i?", ...":""}}`},js=e=>he(e,!1,0),Ga=(e,_)=>{let n=e.trim();if(!n)throw new Error("empty expression");let t=$s(n),i=new Map,a=f=>{if(i.has(f))return i.get(f);let T=_(f);return i.set(f,T),T},r=(f,T)=>{if(!Number.isInteger(T))throw new Error("unsupported index access");if(Array.isArray(f)){if(T<0||T>=f.length)throw new Error("unavailable");return f[T]}if(si(f)){if(f.length!=null&&(T<0||T>=f.length))throw new Error("unavailable");return f.get(T)}throw new Error("unsupported index access")},s=(f,T)=>{if(Array.isArray(f)||si(f)||!f)throw new Error("unsupported member access");if(Pa(f)){if(!f.has(T))throw new Error("unavailable");return f.get(T)}if(typeof f!="object"||!Object.hasOwn(f,T))throw new Error("unavailable");return f[T]},l=0,o=!0,m=f=>{let T=o;o=!1;try{return f()}finally{o=T}},d=()=>{let f=t[l];if(!f)throw new Error("unexpected end of expression");if(f.type==="number")return l+=1,Number(f.value);if(f.type==="boolean")return l+=1,f.value;if(f.type==="null")return l+=1,null;if(f.type==="string")return l+=1,f.value;if(f.type==="identifier"){l+=1;let T=o?a(f.value):null;for(;;){let b=t[l];if(b?.type==="bracket"&&b.value==="["){l+=1;let y=Number(S()),g=t[l];if(!g||g.type!=="bracket"||g.value!=="]")throw new Error("missing closing bracket");l+=1,T=o?r(T,y):null;continue}if(b?.type==="dot"){l+=1;let y=t[l];if(!y||y.type!=="identifier")throw new Error("missing property name");l+=1,T=o?s(T,y.value):null;continue}break}return T}if(f.type==="paren"&&f.value==="("){l+=1;let T=S(),b=t[l];if(!b||b.type!=="paren"||b.value!==")")throw new Error("missing closing parenthesis");return l+=1,T}throw new Error("expected value")},u=()=>{let f=t[l];return f?.type==="operator"&&f.value==="!"?(l+=1,!u()):f?.type==="operator"&&f.value==="-"?(l+=1,-Number(u())):f?.type==="operator"&&f.value==="+"?(l+=1,Number(u())):d()},c=()=>{let f=u();for(;;){let T=t[l];if(T?.type!=="operator"||!["*","/","%"].includes(T.value))return f;l+=1;let b=u();T.value==="*"&&(f=Number(f)*Number(b)),T.value==="/"&&(f=Number(f)/Number(b)),T.value==="%"&&(f=Number(f)%Number(b))}},v=()=>{let f=c();for(;;){let T=t[l];if(T?.type!=="operator"||!["+","-"].includes(T.value))return f;l+=1;let b=c();T.value==="+"&&(typeof f=="string"||typeof b=="string"?f=`${f??"null"}${b??"null"}`:f=Number(f)+Number(b)),T.value==="-"&&(f=Number(f)-Number(b))}},h=()=>{let f=v();for(;;){let T=t[l];if(T?.type!=="operator"||!["<","<=",">",">="].includes(T.value))return f;l+=1;let b=v(),y=typeof f=="string"&&typeof b=="string"?f:Number(f),g=typeof f=="string"&&typeof b=="string"?b:Number(b);T.value==="<"&&(f=y<g),T.value==="<="&&(f=y<=g),T.value===">"&&(f=y>g),T.value===">="&&(f=y>=g)}},p=()=>{let f=h();for(;;){let T=t[l];if(T?.type!=="operator"||!["==","!="].includes(T.value))return f;l+=1;let b=h();T.value==="=="&&(f=f===b),T.value==="!="&&(f=f!==b)}},w=()=>{let f=p();for(;;){let T=t[l];if(!T||T.type!=="operator"||T.value!=="&&")break;l+=1;let b=o&&f?p():m(p);o&&(f=!!f&&!!b)}return f},S=()=>{let f=w();for(;;){let T=t[l];if(!T||T.type!=="operator"||T.value!=="||")break;l+=1;let b=o&&!f?w():m(w);o&&(f=!!f||!!b)}return f},A=S();if(l!==t.length)throw new Error("unexpected trailing tokens");return js(A)};var Ha=Int32Array.BYTES_PER_ELEMENT*2,Ys=-1,li=new TextEncoder,Qs=new TextDecoder,Ba=e=>e instanceof Int32Array?e:new Int32Array(e),Wa=e=>new Uint8Array(e.buffer,e.byteOffset+Ha,e.byteLength-Ha),Ks=(e,_)=>{let n=li.encode(e);if(n.length<=_)return{bytes:n,rest:""};let t=0,i=e.length;for(;t<i;){let r=Math.ceil((t+i)/2);li.encode(e.slice(0,r)).length<=_?t=r:i=r-1}let a=e.slice(0,t);return{bytes:li.encode(a),rest:e.slice(t)}},za=(e,_)=>{if(!e.length)return!1;let n=Ba(_),t=Wa(n),i=e[0]||"",{bytes:a,rest:r}=Ks(i,t.length);return t.fill(0),t.set(a),Atomics.store(n,1,a.length),Atomics.add(n,0,1),Atomics.notify(n,0),r?e[0]=r:e.shift(),!0},Xa=e=>{let _=Ba(e),n=Atomics.load(_,1);if(n===Ys)return null;let t=Wa(_);return Qs.decode(t.slice(0,n))};var D=0,En=44,qs=20,et=58,tt=2,$a=4,Js=16,Va=32,ja=64,Ya=1<<21,Zs=1<<22,mi=1,_o=4,Qa=8,Ka=4,no=0,eo=1,to=2,io=789514,ve=class{constructor(_,n,t,...i){x(this,"ready");x(this,"mem",null);x(this,"memfs");x(this,"instance",null);x(this,"exports");x(this,"trace",()=>{});x(this,"isTraceEnabled");x(this,"debugSession");x(this,"useJsReadOverlay",!1);x(this,"useJsSourceReadOverlay",!1);x(this,"argv");x(this,"environ");x(this,"handles",new Map);x(this,"nextHandle",1024);x(this,"syntheticFileHandles",new Set);x(this,"nextSyntheticInode",1);x(this,"syntheticInodes",new Map);x(this,"readFileHandles",new Map);x(this,"writeFileHandles",new Map);x(this,"temporaryOutputs",new Set);let a=i.at(-1),r=a&&typeof a=="object"?i.pop():{},s=i;this.argv=[t,...s],this.environ={USER:"wasm-clang"},this.memfs=n,this.useJsReadOverlay=t==="wasm-ld"||t==="ld.lld"||t==="lld",this.useJsSourceReadOverlay=t==="clang"||t==="clang++"||t==="cobc";let l=Dn(this,"__wasm_idle_debug_enter","__wasm_idle_debug_leave","__wasm_idle_debug_line","__wasm_idle_debug_value_num","__wasm_idle_debug_value_bool","__wasm_idle_debug_value_addr","__wasm_idle_debug_value_text"),o={...Dn(this,"proc_exit","environ_sizes_get","environ_get","args_sizes_get","args_get","random_get","clock_time_get","poll_oneoff","fd_filestat_set_times","path_filestat_set_times","sock_accept","sock_recv","sock_send","sock_shutdown","path_link","path_rename"),...this.memfs.exports,...Dn(this,"path_open","path_filestat_get","path_readlink","path_unlink_file","fd_fdstat_get","fd_fdstat_set_flags","fd_filestat_get","fd_filestat_set_size","fd_datasync","fd_read","fd_pread","fd_seek","fd_tell","fd_write","fd_close")},m=r.extraImports?.env||{};this.ready=Ua(_,{...r.extraImports,wasi_unstable:o,wasi_snapshot_preview1:o,env:{...m,...l}}).then(d=>{this.instance=d,r.instanceRef&&(r.instanceRef.current=d),this.exports=this.instance.exports,this.mem=new gn(this.exports.memory),this.memfs.hostMem=this.mem})}async run(){await this.ready,this.isTraceEnabled?.()!==!1&&this.trace(`start(argv=${JSON.stringify(this.argv)}, exports=${JSON.stringify(Object.keys(this.exports||{}))})`);try{this.exports._start()}catch(_){let n=!0;if(_ instanceof pe){if(this.isTraceEnabled?.()!==!1&&this.trace(`proc_exit(code=${_.code})`),_.code===io)return this.isTraceEnabled?.()!==!1&&this.trace("allow_rAF_after_exit"),!0;if(this.memfs.flushOutput?.(),this.isTraceEnabled?.()!==!1&&this.trace(`disallow_rAF_after_exit(code=${_.code})`),_.code==0)return!1;n=!1}this.memfs.flushOutput?.(),_ instanceof be&&this.isTraceEnabled?.()!==!1&&this.trace(`not_implemented(${_.message})`);let t=`\x1B[91mError: ${_.message}`;throw n&&(t=t+`
${_.stack}`),t+=`\x1B[0m
`,this.memfs.stdout(t),_}finally{for(let _ of this.temporaryOutputs??[])this.memfs.removeFile(_);this.temporaryOutputs?.clear()}this.memfs.flushOutput?.(),this.isTraceEnabled?.()!==!1&&this.trace("start() returned without proc_exit")}proc_exit(_){throw this.isTraceEnabled?.()!==!1&&this.trace(`proc_exit_throw(code=${_})`),new pe(_)}toNumber(_){return typeof _=="bigint"?Number(_):_}writeU32(_,n){this.mem.view.setUint32(_,n>>>0,!0)}writeU64(_,n){let t=BigInt(n);this.mem.view.setUint32(_,Number(t&0xffffffffn),!0),this.mem.view.setUint32(_+4,Number(t>>32n&0xffffffffn),!0)}readMemfsFile(_){let n=[_,_.replace(/^\/+/,""),_.replace(/^\.\//,""),_.replace(/^\/+/,"").replace(/^\.\//,"")];for(let t of n)if(this.memfs.hasFile(t))try{return Uint8Array.from(this.memfs.getFileContents(t))}catch{}return null}shouldUseJsReadForPath(_){return this.useJsReadOverlay?!0:this.useJsSourceReadOverlay}syntheticInodeForPath(_){let t=_.replace(/^\/+/,"").replace(/^\.\//,"")||_,i=this.syntheticInodes.get(t);return i||(i=this.nextSyntheticInode++,this.syntheticInodes.set(t,i)),i}copyFileToIovs(_,n,t,i,a){this.mem.check();let r=0;for(let s=0;s<i;s+=1){let l=this.mem.read32(t);t+=4;let o=this.mem.read32(t);if(t+=4,o<=0)continue;let m=Math.max(0,_.length-n),d=Math.min(o,m);if(d>0&&(this.mem.write(l,_.subarray(n,n+d)),n+=d,r+=d),d<o)break}return this.writeU32(a,r),{copied:r,position:n}}writeRegularFileStat(_,n,t){this.mem.check(),this.writeU64(_,1),this.writeU64(_+8,this.syntheticInodeForPath(t)),this.mem.write8(_+16,Ka),this.writeU64(_+24,1),this.writeU64(_+32,n),this.writeU64(_+40,0),this.writeU64(_+48,0),this.writeU64(_+56,0)}seekPosition(_,n,t,i){let a=this.toNumber(t);return i===no?Math.max(0,a):i===eo?Math.max(0,_+a):i===to?Math.max(0,n+a):null}ensureWriteCapacity(_,n){if(_.contents.length>=n)return;let t=Math.max(1024,_.contents.length);for(;t<n;)t*=2;let i=new Uint8Array(t);i.set(_.contents.subarray(0,_.size)),_.contents=i}atomicOutputTarget(_){let n=_.match(/^(.+)-[0-9a-f]+(\.[^.]+)\.tmp$/);return n?`${n[1]}${n[2]}`:null}storeFileContents(_,n){if(this.useJsReadOverlay||this.useJsSourceReadOverlay){this.memfs.setFile(_,n);return}this.memfs.addFile(_,n)}path_open(_,n,t,i,a,r,s,l,o){this.mem.check();let m=this.mem.readStr(t,i),d=this.toNumber(r),u=(d&ja)!==0||(a&(mi|Qa))!==0;this.isTraceEnabled?.()!==!1&&this.trace(`path_open_request(path=${JSON.stringify(m)}, rights=${d}, oflags=${a}, write=${u})`);let c=!u&&this.shouldUseJsReadForPath(m)&&(d&tt)!==0?this.readMemfsFile(m):null;if(!u&&this.shouldUseJsReadForPath(m)&&(d&tt)!==0&&!c)return this.isTraceEnabled?.()!==!1&&this.trace(`path_open_read_missing(path=${JSON.stringify(m)})`),En;let v=D,h;if((this.useJsReadOverlay||this.useJsSourceReadOverlay)&&(u||c)){if(u){let w=this.memfs.hasFile(m);if(!w&&(a&mi)===0)return En;if(w&&(a&mi)!==0&&(a&_o)!==0)return qs}h=this.nextHandle++,this.syntheticFileHandles.add(h),this.writeU32(o,h),this.isTraceEnabled?.()!==!1&&this.trace(`path_open_overlay(fd=${h}, path=${JSON.stringify(m)})`)}else{if(v=this.memfs.exports.path_open(_,n,t,i,a,r,s,l,o),v!==D)return v;h=this.mem.read32(o)}if(u){let S=((a&Qa)===0?this.readMemfsFile(m):null)||new Uint8Array(0);return this.writeFileHandles.set(h,{path:m,contents:S,position:0,size:S.length}),this.readFileHandles.delete(h),this.isTraceEnabled?.()!==!1&&this.trace(`path_open_write(fd=${h}, path=${JSON.stringify(m)}, size=${S.length})`),v}if(!this.shouldUseJsReadForPath(m)||(d&tt)===0)return v;let p=c||this.readMemfsFile(m);return p&&(this.readFileHandles.set(h,{path:m,contents:p,position:0}),this.isTraceEnabled?.()!==!1&&this.trace(`path_open_read(fd=${h}, path=${JSON.stringify(m)}, size=${p.length})`)),v}path_filestat_get(_,n,t,i,a){this.mem.check();let r=this.mem.readStr(t,i);if(!this.shouldUseJsReadForPath(r))return this.memfs.exports.path_filestat_get(_,n,t,i,a);let s=this.memfs.getFileSize(r);return s===void 0?this.memfs.isFileDeleted(r)?En:this.memfs.exports.path_filestat_get(_,n,t,i,a):(this.writeRegularFileStat(a,s,r),this.isTraceEnabled?.()!==!1&&this.trace(`path_filestat_get(path=${JSON.stringify(r)}, size=${s})`),D)}fd_fdstat_get(_,n){let t=this.readFileHandles.get(_)||this.writeFileHandles.get(_);if(!t)return this.memfs.exports.fd_fdstat_get(_,n);let i=this.writeFileHandles.has(_)?ja|$a|Va|Js|Ya|Zs:tt|$a|Va|Ya;return this.mem.check(),this.mem.write8(n,Ka),this.mem.write8(n+1,0),this.mem.write8(n+2,0),this.mem.write8(n+3,0),this.writeU64(n+8,i),this.writeU64(n+16,0),this.isTraceEnabled?.()!==!1&&this.trace(`fd_fdstat_get(fd=${_}, path=${JSON.stringify(t.path)})`),D}fd_filestat_get(_,n){let t=this.writeFileHandles.get(_),i=this.readFileHandles.get(_),a=t||i;if(!a)return this.memfs.exports.fd_filestat_get(_,n);let r=t?t.size:i?.contents.length||0;return this.writeRegularFileStat(n,r,a.path),this.isTraceEnabled?.()!==!1&&this.trace(`fd_filestat_get(fd=${_}, path=${JSON.stringify(a.path)}, size=${r})`),D}fd_filestat_set_size(_,n){let t=this.writeFileHandles.get(_);if(!t)return this.memfs.exports.fd_filestat_set_size(_,n);let i=this.toNumber(n);return this.ensureWriteCapacity(t,i),i>t.size&&t.contents.fill(0,t.size,i),t.size=i,t.position>i&&(t.position=i),this.isTraceEnabled?.()!==!1&&this.trace(`fd_filestat_set_size(fd=${_}, size=${i})`),D}fd_read(_,n,t,i){let a=this.readFileHandles.get(_);if(!a)return this.memfs.exports.fd_read(_,n,t,i);let r=this.copyFileToIovs(a.contents,a.position,n,t,i);return a.position=r.position,this.isTraceEnabled?.()!==!1&&this.trace(`fd_read(fd=${_}, bytes=${r.copied})`),D}fd_pread(_,n,t,i,a){let r=this.readFileHandles.get(_);if(!r)return this.memfs.exports.fd_pread(_,n,t,i,a);let s=this.copyFileToIovs(r.contents,this.toNumber(i),n,t,a);return this.isTraceEnabled?.()!==!1&&this.trace(`fd_pread(fd=${_}, offset=${this.toNumber(i)}, bytes=${s.copied})`),D}fd_seek(_,n,t,i){let a=this.writeFileHandles.get(_);if(a){let l=this.seekPosition(a.position,a.size,n,t);return l==null?this.memfs.exports.fd_seek(_,n,t,i):(a.position=l,this.mem.check(),this.writeU64(i,a.position),this.isTraceEnabled?.()!==!1&&this.trace(`fd_seek_write(fd=${_}, offset=${this.toNumber(n)}, whence=${t})`),D)}let r=this.readFileHandles.get(_);if(!r)return this.memfs.exports.fd_seek(_,n,t,i);let s=this.seekPosition(r.position,r.contents.length,n,t);return s==null?this.memfs.exports.fd_seek(_,n,t,i):(r.position=s,this.mem.check(),this.writeU64(i,r.position),this.isTraceEnabled?.()!==!1&&this.trace(`fd_seek(fd=${_}, offset=${this.toNumber(n)}, whence=${t})`),D)}fd_tell(_,n){let t=this.writeFileHandles.get(_)?.position??this.readFileHandles.get(_)?.position;if(t==null){let i=this.memfs.exports.fd_tell;return typeof i=="function"?i(_,n):En}return this.mem.check(),this.writeU64(n,t),this.isTraceEnabled?.()!==!1&&this.trace(`fd_tell(fd=${_}, offset=${t})`),D}fd_datasync(_){if(this.writeFileHandles.has(_)||this.readFileHandles.has(_))return D;let n=this.memfs.exports.fd_datasync;return typeof n=="function"?n(_):D}fd_fdstat_set_flags(_,n){if(this.writeFileHandles.has(_)||this.readFileHandles.has(_))return D;let t=this.memfs.exports.fd_fdstat_set_flags;return typeof t=="function"?t(_,n):D}path_readlink(_,n,t,i,a,r){return this.mem.check(),this.writeU32(r,0),this.isTraceEnabled?.()!==!1&&this.trace(`path_readlink(path=${JSON.stringify(this.mem.readStr(n,t))})`),En}path_unlink_file(_,n,t){this.mem.check();let i=this.mem.readStr(n,t);return this.isTraceEnabled?.()!==!1&&this.trace(`path_unlink_file(path=${JSON.stringify(i)})`),this.memfs.removeFile(i)?D:En}fd_write(_,n,t,i){let a=this.writeFileHandles.get(_);if(!a)return this.memfs.exports.fd_write(_,n,t,i);this.mem.check();let r=0;for(let s=0;s<t;s+=1){let l=this.mem.read32(n);n+=4;let o=this.mem.read32(n);n+=4,!(o<=0)&&(this.ensureWriteCapacity(a,a.position+o),a.contents.set(new Uint8Array(this.mem.buffer,l,o),a.position),a.position+=o,a.size=Math.max(a.size,a.position),r+=o)}return this.writeU32(i,r),this.isTraceEnabled?.()!==!1&&this.trace(`fd_write(fd=${_}, bytes=${r})`),D}fd_close(_){let n=this.syntheticFileHandles.delete(_);if(this.readFileHandles.has(_)){this.readFileHandles.delete(_);let a=n?D:this.memfs.exports.fd_close(_);return this.isTraceEnabled?.()!==!1&&this.trace(`fd_close_read(fd=${_}, close=${a})`),a}let t=this.writeFileHandles.get(_);if(t){this.writeFileHandles.delete(_);let a=n?D:this.memfs.exports.fd_close(_),r=t.contents.subarray(0,t.size);this.storeFileContents(t.path,r);let s=this.atomicOutputTarget(t.path);return s&&(this.storeFileContents(s,r),(this.useJsReadOverlay||this.useJsSourceReadOverlay)&&this.temporaryOutputs.add(t.path)),this.isTraceEnabled?.()!==!1&&this.trace(`fd_close_write(fd=${_}, path=${JSON.stringify(t.path)}, size=${t.size}, close=${a}, target=${JSON.stringify(s)})`),D}if(n)return D;let i=this.memfs.exports.fd_close(_);return i===D&&(_===1||_===2)&&this.memfs.flushOutput?.(_),i}debugEvaluate(_){let n=this.debugSession;if(!n)throw new Error("unavailable");let t=[...n.frames].reverse().find(s=>s.functionId===n.currentFunctionId),i=n.currentLine,a=[...n.variableMetadata[n.currentFunctionId]||[]].reverse().filter(s=>i>=s.fromLine&&i<=s.toLine),r=[...n.globalVariableMetadata||[]].reverse().filter(s=>i>=s.fromLine&&i<=s.toLine);return Ga(_,s=>{let l=(u,c)=>{let v=u.dimensions?.length?u.dimensions:u.length?[u.length]:[],h=Number(c);if(!Number.isFinite(h)||h<=0||!v.length||!u.elementKind&&!u.structFields?.length)throw new Error("unavailable");this.mem?.check?.();let p=u.structFields?.length&&u.structSize?u.structSize:u.elementKind==="double"?8:u.elementKind==="bool"||u.elementKind==="char"?1:4,w=(f,T)=>{if(f==="bool")return!!this.mem.read8(T);if(f==="char"){let b=this.mem.read8(T);return b>=32&&b<=126?String.fromCharCode(b):b}return f==="float"?this.mem.readFloat32(T):f==="double"?this.mem.readFloat64(T):this.mem.readInt32(T)},S=f=>({__debugExpressionKind:"object",has:T=>!!u.structFields?.some(b=>b.name===T),get:T=>{let b=u.structFields?.find(y=>y.name===T);if(!b)throw new Error("unavailable");return w(b.kind,f+b.offset)},keys:()=>u.structFields?.map(T=>T.name)||[]}),A=(f,T)=>({__debugExpressionKind:"array",length:T[0],truncated:T[0]>8,get:b=>{if(!Number.isInteger(b)||b<0||b>=T[0])throw new Error("unavailable");if(T.length>1){let y=T.slice(1).reduce((g,E)=>g*E,1)*p;return A(f+b*y,T.slice(1))}if(u.structFields?.length&&u.structSize)return S(f+b*u.structSize);if(!u.elementKind)throw new Error("unavailable");return w(u.elementKind,f+b*p)},keys:()=>Array.from({length:Math.min(T[0],8)},(b,y)=>y)});return A(h,v)},o=(u,c)=>{if(c==null||c==="?")throw new Error("unavailable");return u.kind==="array"?l(u,c):ka(c)},m=a.find(u=>u.name===s);if(m)return o(m,t?.values.get(m.slot));let d=r.find(u=>u.name===s);if(d)return o(d,n.globalValues.get(d.slot));throw new Error("unavailable")})}pauseDebugSession(_,n,t,i){let a=_.buffer;if(!a)return D;_.currentFunctionId=n,_.currentLine=t;let r=[..._.frames].reverse().find(c=>c.functionId===n);r&&(r.line=t),_.pauseOnEntry=!1,_.stepArmed=!1,_.nextLineArmed=!1,_.nextLineDepth=0,_.stepOutArmed=!1,this.isTraceEnabled?.()!==!1&&this.trace(`pause(function=${n}, line=${t}, reason=${i})`);let s=_.variableMetadata[n]?.flatMap(c=>{if(t<c.fromLine||t>c.toLine)return[];if(c.kind==="array"){this.mem?.check?.();let h=Number(r?.values.get(c.slot)??Number.NaN),p=c.dimensions?.length?c.dimensions:c.length?[c.length]:[];if(!Number.isFinite(h)||h<=0||!p.length||!c.elementKind&&!c.structFields?.length)return[{name:c.name,value:"?"}];if(c.structFields?.length&&c.structSize){let f=Math.min(p[0],8),T=[];for(let b=0;b<f;b+=1){let y=[];for(let g of c.structFields){let E=h+b*c.structSize+g.offset;if(g.kind==="bool"){y.push(`${g.name}: ${this.mem.read8(E)?"true":"false"}`);continue}if(g.kind==="char"){let I=this.mem.read8(E);y.push(`${g.name}: ${I>=32&&I<=126?`'${String.fromCharCode(I)}'`:`${I}`}`);continue}if(g.kind==="float"){y.push(`${g.name}: ${this.mem.readFloat32(E)}`);continue}if(g.kind==="double"){y.push(`${g.name}: ${this.mem.readFloat64(E)}`);continue}y.push(`${g.name}: ${this.mem.readInt32(E)}`)}T.push(`{${y.join(", ")}}`)}return[{name:c.name,value:`[${T.join(", ")}${p[0]>f?", ...":""}]`}]}if(!c.elementKind)return[{name:c.name,value:"?"}];let w=c.elementKind==="double"?8:c.elementKind==="bool"||c.elementKind==="char"?1:4;if(p.length===2){let f=Math.min(p[0],4),T=Math.min(p[1],8),b=[];for(let y=0;y<f;y+=1){let g=[];for(let E=0;E<T;E+=1){let I=h+(y*p[1]+E)*w;if(c.elementKind==="bool"){g.push(this.mem.read8(I)?"true":"false");continue}if(c.elementKind==="char"){let C=this.mem.read8(I);g.push(C>=32&&C<=126?`'${String.fromCharCode(C)}'`:`${C}`);continue}if(c.elementKind==="float"){g.push(`${this.mem.readFloat32(I)}`);continue}if(c.elementKind==="double"){g.push(`${this.mem.readFloat64(I)}`);continue}g.push(`${this.mem.readInt32(I)}`)}b.push(`[${g.join(", ")}${p[1]>T?", ...":""}]`)}return[{name:c.name,value:`[${b.join(", ")}${p[0]>f?", ...":""}]`}]}let S=Math.min(p[0],8),A=[];for(let f=0;f<S;f+=1){let T=h+f*w;if(c.elementKind==="bool"){A.push(this.mem.read8(T)?"true":"false");continue}if(c.elementKind==="char"){let b=this.mem.read8(T);A.push(b>=32&&b<=126?`'${String.fromCharCode(b)}'`:`${b}`);continue}if(c.elementKind==="float"){A.push(`${this.mem.readFloat32(T)}`);continue}if(c.elementKind==="double"){A.push(`${this.mem.readFloat64(T)}`);continue}A.push(`${this.mem.readInt32(T)}`)}return[{name:c.name,value:`[${A.join(", ")}${p[0]>S?", ...":""}]`}]}let v=r?.values.get(c.slot)??"?";return[{name:c.name,value:v}]})||[],l=new Set(s.map(c=>c.name)),o=(_.globalVariableMetadata||[]).flatMap(c=>{if(l.has(c.name))return[];if(t<c.fromLine||t>c.toLine)return[];if(c.kind==="array"){this.mem?.check?.();let h=Number(_.globalValues?.get(c.slot)??Number.NaN),p=c.dimensions?.length?c.dimensions:c.length?[c.length]:[];if(!Number.isFinite(h)||h<=0||!p.length||!c.elementKind&&!c.structFields?.length)return[{name:c.name,value:"?"}];if(c.structFields?.length&&c.structSize){let f=Math.min(p[0],8),T=[];for(let b=0;b<f;b+=1){let y=[];for(let g of c.structFields){let E=h+b*c.structSize+g.offset;if(g.kind==="bool"){y.push(`${g.name}: ${this.mem.read8(E)?"true":"false"}`);continue}if(g.kind==="char"){let I=this.mem.read8(E);y.push(`${g.name}: ${I>=32&&I<=126?`'${String.fromCharCode(I)}'`:`${I}`}`);continue}if(g.kind==="float"){y.push(`${g.name}: ${this.mem.readFloat32(E)}`);continue}if(g.kind==="double"){y.push(`${g.name}: ${this.mem.readFloat64(E)}`);continue}y.push(`${g.name}: ${this.mem.readInt32(E)}`)}T.push(`{${y.join(", ")}}`)}return[{name:c.name,value:`[${T.join(", ")}${p[0]>f?", ...":""}]`}]}if(!c.elementKind)return[{name:c.name,value:"?"}];let w=c.elementKind==="double"?8:c.elementKind==="bool"||c.elementKind==="char"?1:4;if(p.length===2){let f=Math.min(p[0],4),T=Math.min(p[1],8),b=[];for(let y=0;y<f;y+=1){let g=[];for(let E=0;E<T;E+=1){let I=h+(y*p[1]+E)*w;if(c.elementKind==="bool"){g.push(this.mem.read8(I)?"true":"false");continue}if(c.elementKind==="char"){let C=this.mem.read8(I);g.push(C>=32&&C<=126?`'${String.fromCharCode(C)}'`:`${C}`);continue}if(c.elementKind==="float"){g.push(`${this.mem.readFloat32(I)}`);continue}if(c.elementKind==="double"){g.push(`${this.mem.readFloat64(I)}`);continue}g.push(`${this.mem.readInt32(I)}`)}b.push(`[${g.join(", ")}${p[1]>T?", ...":""}]`)}return[{name:c.name,value:`[${b.join(", ")}${p[0]>f?", ...":""}]`}]}let S=Math.min(p[0],8),A=[];for(let f=0;f<S;f+=1){let T=h+f*w;if(c.elementKind==="bool"){A.push(this.mem.read8(T)?"true":"false");continue}if(c.elementKind==="char"){let b=this.mem.read8(T);A.push(b>=32&&b<=126?`'${String.fromCharCode(b)}'`:`${b}`);continue}if(c.elementKind==="float"){A.push(`${this.mem.readFloat32(T)}`);continue}if(c.elementKind==="double"){A.push(`${this.mem.readFloat64(T)}`);continue}A.push(`${this.mem.readInt32(T)}`)}return[{name:c.name,value:`[${A.join(", ")}${p[0]>S?", ...":""}]`}]}let v=_.globalValues?.get(c.slot)??"?";return[{name:c.name,value:v}]})||[],m=new Map(s.map(c=>[c.name,c])),d=new Map(o.map(c=>[c.name,c]));for(let c of m.keys())d.delete(c);_.onPause?.({type:"pause",line:t,reason:i,locals:[...m.values(),...d.values()],callStack:[..._.frames].reverse().map(c=>({functionName:c.functionName,line:c.line}))});let u=Atomics.load(a,0);for(;;){if(_.interruptBuffer?.[0]===2)throw new An;if(Atomics.wait(a,0,u,100),_.interruptBuffer?.[0]===2)throw new An;let c=Atomics.exchange(a,1,0);if(c===1)return _.resumeSkipActive=!0,_.resumeSkipFunctionId=_.currentFunctionId,_.resumeSkipLine=_.currentLine,D;if(c===2)return _.stepArmed=!0,_.resumeSkipActive=!0,_.resumeSkipFunctionId=_.currentFunctionId,_.resumeSkipLine=_.currentLine,D;if(c===3)return _.nextLineArmed=!0,_.nextLineFunctionId=_.currentFunctionId,_.nextLineLine=_.currentLine,_.nextLineDepth=_.callDepth,_.resumeSkipActive=!0,_.resumeSkipFunctionId=_.currentFunctionId,_.resumeSkipLine=_.currentLine,D;if(c===4)return _.stepOutArmed=!0,_.stepOutDepth=Math.max(0,_.callDepth-1),_.resumeSkipActive=!0,_.resumeSkipFunctionId=_.currentFunctionId,_.resumeSkipLine=_.currentLine,D;if(c===5){let v=_.watchBuffer?Xa(_.watchBuffer):"",h="?";try{h=v?this.debugEvaluate(v):"?"}catch(p){h=p instanceof Error&&p.message==="unavailable"?"?":"error"}_.watchResultBuffer&&za([h],_.watchResultBuffer)}}}__wasm_idle_debug_enter(_,n){let t=this.debugSession;return t?.buffer?(t.callDepth+=1,t.currentFunctionId=_,t.currentLine=n,t.frames.push({functionId:_,functionName:t.functionMetadata[_]||`fn_${_}`,line:n,values:new Map}),this.isTraceEnabled?.()!==!1&&this.trace(`enter(function=${_}, line=${n}, depth=${t.callDepth})`),t.pauseOnEntry?this.pauseDebugSession(t,_,n,"entry"):t.stepArmed?this.pauseDebugSession(t,_,n,"step"):D):D}__wasm_idle_debug_leave(_){let n=this.debugSession;if(!n?.buffer)return D;this.isTraceEnabled?.()!==!1&&this.trace(`leave(function=${_}, depth=${n.callDepth})`),n.nextLineArmed&&_===n.nextLineFunctionId&&n.callDepth<=(n.nextLineDepth??n.callDepth)&&(n.nextLineArmed=!1,n.nextLineDepth=0,n.stepArmed=!0),n.callDepth=Math.max(0,n.callDepth-1),n.currentFunctionId===_&&(n.currentFunctionId=0);for(let t=n.frames.length-1;t>=0;t-=1)if(n.frames[t]?.functionId===_){n.frames.splice(t,1);break}return D}__wasm_idle_debug_value_num(_,n,t){let i=this.debugSession;if(!i?.buffer)return D;if(_===0)return i.globalValues.set(n,Number.isInteger(t)?String(t):`${t}`),D;for(let a=i.frames.length-1;a>=0;a-=1){let r=i.frames[a];if(r?.functionId===_){r.values.set(n,Number.isInteger(t)?String(t):`${t}`);break}}return D}__wasm_idle_debug_value_bool(_,n,t){let i=this.debugSession;if(!i?.buffer)return D;if(_===0)return i.globalValues.set(n,t?"true":"false"),D;for(let a=i.frames.length-1;a>=0;a-=1){let r=i.frames[a];if(r?.functionId===_){r.values.set(n,t?"true":"false");break}}return D}__wasm_idle_debug_value_addr(_,n,t){let i=this.debugSession;if(!i?.buffer)return D;if(_===0)return i.globalValues.set(n,String(t>>>0)),D;for(let a=i.frames.length-1;a>=0;a-=1){let r=i.frames[a];if(r?.functionId===_){r.values.set(n,String(t>>>0));break}}return D}__wasm_idle_debug_value_text(_,n,t,i){let a=this.debugSession;if(!a?.buffer)return D;this.mem?.check?.();let r=this.mem?.readStr?this.mem.readStr(t,i):"?";if(_===0)return a.globalValues.set(n,r),D;for(let s=a.frames.length-1;s>=0;s-=1){let l=a.frames[s];if(l?.functionId===_){l.values.set(n,r);break}}return D}__wasm_idle_debug_line(_,n){let t=this.debugSession;if(!t?.buffer)return D;let i=Atomics.load(t.buffer,2);if(i!==t.breakpointVersion){let r=Math.max(0,Atomics.load(t.buffer,3)),s=new Set;for(let l=0;l<r&&l+4<t.buffer.length;l+=1){let o=Atomics.load(t.buffer,l+4);o>0&&s.add(o)}t.breakpoints=s,t.breakpointVersion=i}if(t.resumeSkipActive){if(_===t.resumeSkipFunctionId&&n===t.resumeSkipLine)return D;t.resumeSkipActive=!1,t.resumeSkipFunctionId=0,t.resumeSkipLine=0}let a="";return t.pauseOnEntry?a="entry":t.breakpoints.has(n)?a="breakpoint":t.stepArmed?a="step":t.nextLineArmed&&t.callDepth<=(t.nextLineDepth??t.callDepth)&&_===t.nextLineFunctionId&&n!==t.nextLineLine?a="nextLine":t.stepOutArmed&&t.callDepth<=t.stepOutDepth&&(a="stepOut"),a?this.pauseDebugSession(t,_,n,a):D}environ_sizes_get(_,n){this.mem.check();let t=0,i=Object.getOwnPropertyNames(this.environ);for(let a of i){let r=this.environ[a];t+=a.length+r.length+2}return this.mem.write32(_,i.length),this.mem.write32(n,t),this.isTraceEnabled?.()!==!1&&this.trace(`environ_sizes_get(count=${i.length}, bytes=${t})`),D}environ_get(_,n){this.mem.check();let t=Object.getOwnPropertyNames(this.environ);this.isTraceEnabled?.()!==!1&&this.trace(`environ_get(entries=${JSON.stringify(t)})`);for(let i of t)this.mem.write32(_,n),_+=4,n+=this.mem.writeStr(n,`${i}=${this.environ[i]}`);return D}args_sizes_get(_,n){this.mem.check();let t=0;for(let i of this.argv)t+=i.length+1;return this.mem.write32(_,this.argv.length),this.mem.write32(n,t),this.isTraceEnabled?.()!==!1&&this.trace(`args_sizes_get(count=${this.argv.length}, bytes=${t})`),D}args_get(_,n){this.mem.check(),this.isTraceEnabled?.()!==!1&&this.trace(`args_get(argv=${JSON.stringify(this.argv)})`);for(let t of this.argv)this.mem.write32(_,n),_+=4,n+=this.mem.writeStr(n,t);return D}random_get(_,n){let t=new Uint8Array(this.mem.buffer,_,n);for(let i=0;i<n;++i)t[i]=Math.random()*256|0}clock_time_get(_,n,t){this.mem.check();let i=_===1&&typeof performance<"u"?performance.now():Date.now(),a=BigInt(Math.floor(i*1e6));return this.mem.view.setBigUint64(t,a,!0),this.isTraceEnabled?.()!==!1&&this.trace(`clock_time_get(clock=${_}, ns=${a})`),D}poll_oneoff(){throw new be("wasi_unstable","poll_oneoff")}fd_filestat_set_times(){return this.isTraceEnabled?.()!==!1&&this.trace("fd_filestat_set_times()"),D}path_filestat_set_times(){return this.isTraceEnabled?.()!==!1&&this.trace("path_filestat_set_times()"),D}sock_accept(){return this.isTraceEnabled?.()!==!1&&this.trace("sock_accept() unsupported"),et}sock_recv(){return this.isTraceEnabled?.()!==!1&&this.trace("sock_recv() unsupported"),et}sock_send(){return this.isTraceEnabled?.()!==!1&&this.trace("sock_send() unsupported"),et}sock_shutdown(){return this.isTraceEnabled?.()!==!1&&this.trace("sock_shutdown() unsupported"),et}path_link(_,n,t,i,a,r,s){this.mem.check();let l=this.mem.readStr(t,i).replace(/^\/+/,"").replace(/^\.\//,""),o=this.mem.readStr(r,s).replace(/^\/+/,"").replace(/^\.\//,"");return this.isTraceEnabled?.()!==!1&&this.trace(`path_link(source=${JSON.stringify(l)}, target=${JSON.stringify(o)})`),this.storeFileContents(o,new Uint8Array(this.memfs.getFileContents(l))),D}path_rename(_,n,t,i,a,r){this.mem.check();let s=this.mem.readStr(n,t).replace(/^\/+/,"").replace(/^\.\//,""),l=this.mem.readStr(a,r).replace(/^\/+/,"").replace(/^\.\//,"");return this.isTraceEnabled?.()!==!1&&this.trace(`path_rename(source=${JSON.stringify(s)}, target=${JSON.stringify(l)})`),this.memfs.renameFile(s,l)?D:En}};var Ja="wasm32-wasi";var Za=["-fobjc-runtime=gnustep-2.0","-fblocks"];var ao="-std=gnu++20",ro="-std=gnu11";function _r(e){return(e||"").trim().toUpperCase().replaceAll(/\s+/g,"")}function so(e){switch(_r(e)){case"98":case"CPP98":case"C++98":case"GNU++98":case"GNUC++98":return"-std=gnu++98";case"03":case"CPP03":case"C++03":case"GNU++03":case"GNUC++03":return"-std=gnu++03";case"11":case"CPP11":case"C++11":case"GNU++11":case"GNUC++11":return"-std=gnu++11";case"14":case"CPP14":case"C++14":case"GNU++14":case"GNUC++14":return"-std=gnu++14";case"17":case"CPP17":case"C++17":case"GNU++17":case"GNUC++17":return"-std=gnu++17";case"20":case"CPP20":case"C++20":case"GNU++20":case"GNUC++20":return"-std=gnu++20";case"23":case"CPP23":case"C++23":case"GNU++23":case"GNUC++23":return"-std=gnu++23";case"26":case"CPP26":case"C++26":case"GNU++26":case"GNUC++26":return"-std=gnu++26";default:return ao}}function qa(e){switch(_r(e)){case"89":case"90":case"C89":case"C90":case"GNU89":case"GNU90":case"GNUC89":case"GNUC90":return"-std=gnu89";case"99":case"C99":case"GNU99":case"GNUC99":return"-std=gnu99";case"11":case"C11":case"GNU11":case"GNUC11":return"-std=gnu11";case"17":case"18":case"C17":case"C18":case"GNU17":case"GNU18":case"GNUC17":case"GNUC18":return"-std=gnu17";case"23":case"2X":case"C23":case"C2X":case"GNU23":case"GNU2X":case"GNUC23":case"GNUC2X":return"-std=gnu23";case"2Y":case"C2Y":case"GNU2Y":case"GNUC2Y":return"-std=gnu2y";default:return ro}}function nr(e,_){return e==="C"?{languageArg:"c",standardArg:qa(_.cVersion)}:e==="OBJC"?{languageArg:"objective-c",standardArg:qa(_.cVersion)}:{languageArg:"c++",standardArg:so(_.cppVersion)}}function er(e,_="",n){return[...["CPP","OBJCXX"].includes(e)?[`${_}/include/c++/v1`,`${_}/include/wasm32-wasi/c++/v1`]:[],...n?[`${n.replace(/\/+$/,"")}/include`]:[],`${_}/include/wasm32-wasi`,`${_}/include`]}var oo=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_TREE_POLICY_HPP
#define WASM_CLANG_EXT_PB_DS_TREE_POLICY_HPP

#include <cstddef>

namespace __gnu_pbds {

struct null_type {};
struct rb_tree_tag {};
struct splay_tree_tag {};
struct ov_tree_tag {};

template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn, typename Allocator>
class null_node_update {
public:
	typedef Node_CItr node_const_iterator;
	typedef Node_Itr node_iterator;
	typedef Cmp_Fn cmp_fn;
	typedef Allocator allocator_type;
};

template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn, typename Allocator>
class tree_order_statistics_node_update {
public:
	typedef Node_CItr node_const_iterator;
	typedef Node_Itr node_iterator;
	typedef Cmp_Fn cmp_fn;
	typedef Allocator allocator_type;
};

} // namespace __gnu_pbds

#endif
`,lo=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_ASSOC_CONTAINER_HPP
#define WASM_CLANG_EXT_PB_DS_ASSOC_CONTAINER_HPP

#include <algorithm>
#include <cstddef>
#include <functional>
#include <iterator>
#include <map>
#include <memory>
#include <set>
#include <type_traits>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <ext/pb_ds/tree_policy.hpp>

namespace __gnu_pbds {

namespace detail {

template <typename Allocator, typename Value>
struct rebind_allocator {
	typedef typename std::allocator_traits<Allocator>::template rebind_alloc<Value> type;
};

template <typename Iterator>
Iterator advance_to_order(Iterator first, Iterator last, std::size_t order) {
	if (order >= static_cast<std::size_t>(std::distance(first, last))) return last;
	std::advance(
		first,
		static_cast<typename std::iterator_traits<Iterator>::difference_type>(order)
	);
	return first;
}

template <
	typename Key,
	typename Mapped,
	typename Hash_Fn,
	typename Eq_Fn,
	typename Allocator
>
struct hash_table_selector {
	typedef std::pair<const Key, Mapped> value_type;
	typedef typename rebind_allocator<Allocator, value_type>::type allocator_type;
	typedef std::unordered_map<Key, Mapped, Hash_Fn, Eq_Fn, allocator_type> type;
};

template <typename Key, typename Hash_Fn, typename Eq_Fn, typename Allocator>
struct hash_table_selector<Key, null_type, Hash_Fn, Eq_Fn, Allocator> {
	typedef typename rebind_allocator<Allocator, Key>::type allocator_type;
	typedef std::unordered_set<Key, Hash_Fn, Eq_Fn, allocator_type> type;
};

} // namespace detail

template <
	typename Key,
	typename Mapped,
	typename Cmp_Fn = std::less<Key>,
	typename Tag = rb_tree_tag,
	template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn_, typename Allocator_>
	class Node_Update = null_node_update,
	typename Allocator = std::allocator<char>
>
class tree {
public:
	typedef Key key_type;
	typedef Mapped mapped_type;
	typedef std::pair<const Key, Mapped> value_type;
	typedef Cmp_Fn cmp_fn;
	typedef Tag container_category;
	typedef Allocator allocator_type;
	typedef std::size_t size_type;

private:
	typedef typename detail::rebind_allocator<Allocator, value_type>::type value_allocator_type;
	typedef std::map<Key, Mapped, Cmp_Fn, value_allocator_type> container_type;

public:
	typedef typename container_type::iterator iterator;
	typedef typename container_type::const_iterator const_iterator;
	typedef typename container_type::iterator point_iterator;
	typedef typename container_type::const_iterator const_point_iterator;
	typedef typename container_type::reverse_iterator reverse_iterator;
	typedef typename container_type::const_reverse_iterator const_reverse_iterator;

	tree() = default;
	explicit tree(const Cmp_Fn& compare) : values_(compare) {}

	template <typename InputIt>
	tree(InputIt first, InputIt last) : values_(first, last) {}

	bool empty() const { return values_.empty(); }
	size_type size() const { return values_.size(); }
	size_type max_size() const { return values_.max_size(); }

	iterator begin() { return values_.begin(); }
	const_iterator begin() const { return values_.begin(); }
	const_iterator cbegin() const { return values_.cbegin(); }
	iterator end() { return values_.end(); }
	const_iterator end() const { return values_.end(); }
	const_iterator cend() const { return values_.cend(); }
	reverse_iterator rbegin() { return values_.rbegin(); }
	const_reverse_iterator rbegin() const { return values_.rbegin(); }
	reverse_iterator rend() { return values_.rend(); }
	const_reverse_iterator rend() const { return values_.rend(); }

	std::pair<iterator, bool> insert(const value_type& value) { return values_.insert(value); }
	std::pair<iterator, bool> insert(value_type&& value) { return values_.insert(std::move(value)); }

	template <typename InputIt>
	void insert(InputIt first, InputIt last) {
		values_.insert(first, last);
	}

	mapped_type& operator[](const key_type& key) { return values_[key]; }
	mapped_type& at(const key_type& key) { return values_.at(key); }
	const mapped_type& at(const key_type& key) const { return values_.at(key); }

	iterator find(const key_type& key) { return values_.find(key); }
	const_iterator find(const key_type& key) const { return values_.find(key); }
	bool contains(const key_type& key) const { return values_.find(key) != values_.end(); }
	size_type count(const key_type& key) const { return values_.count(key); }

	iterator lower_bound(const key_type& key) { return values_.lower_bound(key); }
	const_iterator lower_bound(const key_type& key) const { return values_.lower_bound(key); }
	iterator upper_bound(const key_type& key) { return values_.upper_bound(key); }
	const_iterator upper_bound(const key_type& key) const { return values_.upper_bound(key); }

	size_type erase(const key_type& key) { return values_.erase(key); }
	iterator erase(const_iterator position) { return values_.erase(position); }
	iterator erase(const_iterator first, const_iterator last) { return values_.erase(first, last); }
	void clear() { values_.clear(); }
	void swap(tree& other) { values_.swap(other.values_); }

	iterator find_by_order(size_type order) {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	const_iterator find_by_order(size_type order) const {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	size_type order_of_key(const key_type& key) const {
		return static_cast<size_type>(std::distance(values_.begin(), values_.lower_bound(key)));
	}

	void join(tree& other) {
		values_.insert(other.values_.begin(), other.values_.end());
		other.values_.clear();
	}

	void split(const key_type& key, tree& other) {
		iterator first = values_.upper_bound(key);
		other.values_.insert(first, values_.end());
		values_.erase(first, values_.end());
	}

private:
	container_type values_;
};

template <
	typename Key,
	typename Cmp_Fn,
	typename Tag,
	template <typename Node_CItr, typename Node_Itr, typename Cmp_Fn_, typename Allocator_>
	class Node_Update,
	typename Allocator
>
class tree<Key, null_type, Cmp_Fn, Tag, Node_Update, Allocator> {
public:
	typedef Key key_type;
	typedef null_type mapped_type;
	typedef Key value_type;
	typedef Cmp_Fn cmp_fn;
	typedef Tag container_category;
	typedef Allocator allocator_type;
	typedef std::size_t size_type;

private:
	typedef typename detail::rebind_allocator<Allocator, value_type>::type value_allocator_type;
	typedef std::set<Key, Cmp_Fn, value_allocator_type> container_type;

public:
	typedef typename container_type::iterator iterator;
	typedef typename container_type::const_iterator const_iterator;
	typedef typename container_type::iterator point_iterator;
	typedef typename container_type::const_iterator const_point_iterator;
	typedef typename container_type::reverse_iterator reverse_iterator;
	typedef typename container_type::const_reverse_iterator const_reverse_iterator;

	tree() = default;
	explicit tree(const Cmp_Fn& compare) : values_(compare) {}

	template <typename InputIt>
	tree(InputIt first, InputIt last) : values_(first, last) {}

	bool empty() const { return values_.empty(); }
	size_type size() const { return values_.size(); }
	size_type max_size() const { return values_.max_size(); }

	iterator begin() { return values_.begin(); }
	const_iterator begin() const { return values_.begin(); }
	const_iterator cbegin() const { return values_.cbegin(); }
	iterator end() { return values_.end(); }
	const_iterator end() const { return values_.end(); }
	const_iterator cend() const { return values_.cend(); }
	reverse_iterator rbegin() { return values_.rbegin(); }
	const_reverse_iterator rbegin() const { return values_.rbegin(); }
	reverse_iterator rend() { return values_.rend(); }
	const_reverse_iterator rend() const { return values_.rend(); }

	std::pair<iterator, bool> insert(const value_type& value) { return values_.insert(value); }
	std::pair<iterator, bool> insert(value_type&& value) { return values_.insert(std::move(value)); }

	template <typename InputIt>
	void insert(InputIt first, InputIt last) {
		values_.insert(first, last);
	}

	iterator find(const key_type& key) { return values_.find(key); }
	const_iterator find(const key_type& key) const { return values_.find(key); }
	bool contains(const key_type& key) const { return values_.find(key) != values_.end(); }
	size_type count(const key_type& key) const { return values_.count(key); }

	iterator lower_bound(const key_type& key) { return values_.lower_bound(key); }
	const_iterator lower_bound(const key_type& key) const { return values_.lower_bound(key); }
	iterator upper_bound(const key_type& key) { return values_.upper_bound(key); }
	const_iterator upper_bound(const key_type& key) const { return values_.upper_bound(key); }

	size_type erase(const key_type& key) { return values_.erase(key); }
	iterator erase(const_iterator position) { return values_.erase(position); }
	iterator erase(const_iterator first, const_iterator last) { return values_.erase(first, last); }
	void clear() { values_.clear(); }
	void swap(tree& other) { values_.swap(other.values_); }

	iterator find_by_order(size_type order) {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	const_iterator find_by_order(size_type order) const {
		return detail::advance_to_order(values_.begin(), values_.end(), order);
	}

	size_type order_of_key(const key_type& key) const {
		return static_cast<size_type>(std::distance(values_.begin(), values_.lower_bound(key)));
	}

	void join(tree& other) {
		values_.insert(other.values_.begin(), other.values_.end());
		other.values_.clear();
	}

	void split(const key_type& key, tree& other) {
		iterator first = values_.upper_bound(key);
		other.values_.insert(first, values_.end());
		values_.erase(first, values_.end());
	}

private:
	container_type values_;
};

template <
	typename Key,
	typename Mapped,
	typename Hash_Fn = std::hash<Key>,
	typename Eq_Fn = std::equal_to<Key>,
	typename Comb_Hash_Fn = void,
	typename Resize_Policy = void,
	bool Store_Hash = false,
	typename Allocator = std::allocator<char>
>
using gp_hash_table = typename detail::hash_table_selector<
	Key,
	Mapped,
	Hash_Fn,
	Eq_Fn,
	Allocator
>::type;

template <
	typename Key,
	typename Mapped,
	typename Hash_Fn = std::hash<Key>,
	typename Eq_Fn = std::equal_to<Key>,
	typename Comb_Hash_Fn = void,
	typename Resize_Policy = void,
	bool Store_Hash = false,
	typename Allocator = std::allocator<char>
>
using cc_hash_table = typename detail::hash_table_selector<
	Key,
	Mapped,
	Hash_Fn,
	Eq_Fn,
	Allocator
>::type;

} // namespace __gnu_pbds

#endif
`,mo=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_HASH_POLICY_HPP
#define WASM_CLANG_EXT_PB_DS_HASH_POLICY_HPP

#include <cstddef>

namespace __gnu_pbds {

template <typename Size_Type = std::size_t>
class direct_mask_range_hashing {
public:
	typedef Size_Type size_type;
};

template <typename Size_Type = std::size_t>
class direct_mod_range_hashing {
public:
	typedef Size_Type size_type;
};

template <typename Size_Type = std::size_t>
class linear_probe_fn {
public:
	typedef Size_Type size_type;
};

template <typename Size_Type = std::size_t>
class quadratic_probe_fn {
public:
	typedef Size_Type size_type;
};

class hash_exponential_size_policy {};
class hash_prime_size_policy {};

template <bool External_Load_Access = false, typename Size_Type = std::size_t>
class hash_load_check_resize_trigger {
public:
	typedef Size_Type size_type;
	explicit hash_load_check_resize_trigger(float = 0.125, float = 0.5) {}
};

template <bool External_Load_Access = false, typename Size_Type = std::size_t>
class cc_hash_max_collision_check_resize_trigger {
public:
	typedef Size_Type size_type;
	explicit cc_hash_max_collision_check_resize_trigger(float = 0.5) {}
};

template <
	typename Size_Policy = hash_exponential_size_policy,
	typename Trigger_Policy = hash_load_check_resize_trigger<>,
	bool External_Size_Access = false,
	typename Size_Type = std::size_t
>
class hash_standard_resize_policy {
public:
	typedef Size_Type size_type;
	hash_standard_resize_policy() = default;
	explicit hash_standard_resize_policy(const Size_Policy&) {}
	hash_standard_resize_policy(const Size_Policy&, const Trigger_Policy&) {}
};

} // namespace __gnu_pbds

#endif
`,co=String.raw`#ifndef WASM_CLANG_EXT_PB_DS_PRIORITY_QUEUE_HPP
#define WASM_CLANG_EXT_PB_DS_PRIORITY_QUEUE_HPP

#include <algorithm>
#include <cstddef>
#include <functional>
#include <memory>
#include <queue>
#include <utility>
#include <vector>

namespace __gnu_pbds {

struct pairing_heap_tag {};
struct binary_heap_tag {};
struct binomial_heap_tag {};
struct rc_binomial_heap_tag {};
struct thin_heap_tag {};

namespace detail {

template <typename Allocator, typename Value>
struct priority_queue_rebind_allocator {
	typedef typename std::allocator_traits<Allocator>::template rebind_alloc<Value> type;
};

} // namespace detail

template <
	typename Value_Type,
	typename Cmp_Fn = std::less<Value_Type>,
	typename Tag = pairing_heap_tag,
	typename Allocator = std::allocator<char>
>
class priority_queue {
public:
	typedef Value_Type value_type;
	typedef Cmp_Fn cmp_fn;
	typedef Tag container_category;
	typedef Allocator allocator_type;
	typedef std::size_t size_type;
	typedef value_type& reference;
	typedef const value_type& const_reference;

private:
	typedef typename detail::priority_queue_rebind_allocator<Allocator, value_type>::type value_allocator_type;
	typedef std::vector<value_type, value_allocator_type> container_type;

public:
	typedef typename container_type::iterator point_iterator;
	typedef typename container_type::const_iterator const_point_iterator;

	priority_queue() : values_(), compare_() {
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	explicit priority_queue(const Cmp_Fn& compare) : values_(), compare_(compare) {
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	template <typename InputIt>
	priority_queue(InputIt first, InputIt last) : values_(first, last), compare_() {
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	bool empty() const { return values_.empty(); }
	size_type size() const { return values_.size(); }
	const_reference top() const { return values_.front(); }
	void clear() { values_.clear(); }
	void swap(priority_queue& other) {
		values_.swap(other.values_);
		std::swap(compare_, other.compare_);
	}

	point_iterator push(const_reference value) {
		values_.push_back(value);
		std::push_heap(values_.begin(), values_.end(), compare_);
		return values_.empty() ? values_.end() : values_.begin();
	}

	void pop() {
		std::pop_heap(values_.begin(), values_.end(), compare_);
		values_.pop_back();
	}

	void modify(point_iterator position, const_reference value) {
		if (position == values_.end()) return;
		*position = value;
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	void erase(point_iterator position) {
		if (position == values_.end()) return;
		values_.erase(position);
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

	void join(priority_queue& other) {
		values_.insert(values_.end(), other.values_.begin(), other.values_.end());
		other.values_.clear();
		std::make_heap(values_.begin(), values_.end(), compare_);
	}

private:
	container_type values_;
	Cmp_Fn compare_;
};

} // namespace __gnu_pbds

#endif
`,uo=String.raw`#ifndef WASM_CLANG_EXT_ROPE
#define WASM_CLANG_EXT_ROPE

#include <algorithm>
#include <cstddef>
#include <iosfwd>
#include <iterator>
#include <memory>
#include <ostream>
#include <string>
#include <utility>

namespace __gnu_cxx {

template <typename CharT, typename Alloc = std::allocator<CharT>>
class rope {
public:
	typedef CharT value_type;
	typedef Alloc allocator_type;
	typedef std::basic_string<CharT, std::char_traits<CharT>, Alloc> string_type;
	typedef typename string_type::traits_type traits_type;
	typedef typename string_type::size_type size_type;
	typedef typename string_type::difference_type difference_type;
	typedef typename string_type::reference reference;
	typedef typename string_type::const_reference const_reference;
	typedef typename string_type::iterator iterator;
	typedef typename string_type::const_iterator const_iterator;

	static const size_type npos = string_type::npos;

	rope() = default;
	rope(const rope&) = default;
	rope(rope&&) = default;
	rope& operator=(const rope&) = default;
	rope& operator=(rope&&) = default;

	rope(const CharT* value) : data_(value ? value : empty_c_str()) {}
	rope(const CharT* value, size_type count) : data_(value, count) {}
	rope(size_type count, CharT value) : data_(count, value) {}
	rope(const string_type& value) : data_(value) {}
	rope(string_type&& value) : data_(std::move(value)) {}

	template <typename InputIt>
	rope(InputIt first, InputIt last) : data_(first, last) {}

	bool empty() const { return data_.empty(); }
	size_type size() const { return data_.size(); }
	size_type length() const { return data_.length(); }
	size_type max_size() const { return data_.max_size(); }
	void clear() { data_.clear(); }

	const CharT* c_str() const { return data_.c_str(); }
	const string_type& str() const { return data_; }

	iterator begin() { return data_.begin(); }
	const_iterator begin() const { return data_.begin(); }
	const_iterator cbegin() const { return data_.cbegin(); }
	iterator end() { return data_.end(); }
	const_iterator end() const { return data_.end(); }
	const_iterator cend() const { return data_.cend(); }

	reference operator[](size_type index) { return data_[index]; }
	const_reference operator[](size_type index) const { return data_[index]; }
	reference at(size_type index) { return data_.at(index); }
	const_reference at(size_type index) const { return data_.at(index); }
	reference mutable_reference_at(size_type index) { return data_.at(index); }

	void push_back(CharT value) { data_.push_back(value); }
	void pop_back() { data_.pop_back(); }

	rope& append(const rope& value) {
		data_.append(value.data_);
		return *this;
	}

	rope& append(const CharT* value) {
		data_.append(value ? value : empty_c_str());
		return *this;
	}

	rope& append(const CharT* value, size_type count) {
		data_.append(value, count);
		return *this;
	}

	rope& append(size_type count, CharT value) {
		data_.append(count, value);
		return *this;
	}

	rope& insert(size_type position, const rope& value) {
		data_.insert(position, value.data_);
		return *this;
	}

	rope& insert(size_type position, const CharT* value) {
		data_.insert(position, value ? value : empty_c_str());
		return *this;
	}

	rope& insert(size_type position, const CharT* value, size_type count) {
		data_.insert(position, value, count);
		return *this;
	}

	rope& insert(size_type position, size_type count, CharT value) {
		data_.insert(position, count, value);
		return *this;
	}

	rope& erase(size_type position = 0, size_type count = npos) {
		data_.erase(position, count);
		return *this;
	}

	rope& replace(size_type position, size_type count, const rope& value) {
		data_.replace(position, count, value.data_);
		return *this;
	}

	rope& replace(size_type position, size_type count, const CharT* value) {
		data_.replace(position, count, value ? value : empty_c_str());
		return *this;
	}

	rope substr(size_type position = 0, size_type count = npos) const {
		return rope(data_.substr(position, count));
	}

	size_type copy(size_type position, size_type count, CharT* target) const {
		if (position > data_.size()) return 0;
		const size_type copied = std::min(count, data_.size() - position);
		traits_type::copy(target, data_.data() + position, copied);
		return copied;
	}

	int compare(const rope& value) const { return data_.compare(value.data_); }

	rope& operator+=(const rope& value) { return append(value); }
	rope& operator+=(const CharT* value) { return append(value); }
	rope& operator+=(CharT value) {
		push_back(value);
		return *this;
	}

private:
	static const CharT* empty_c_str() {
		static const CharT empty[1] = {};
		return empty;
	}

	string_type data_;
};

template <typename CharT, typename Alloc>
rope<CharT, Alloc> operator+(rope<CharT, Alloc> left, const rope<CharT, Alloc>& right) {
	left += right;
	return left;
}

template <typename CharT, typename Alloc>
bool operator==(const rope<CharT, Alloc>& left, const rope<CharT, Alloc>& right) {
	return left.compare(right) == 0;
}

template <typename CharT, typename Alloc>
bool operator!=(const rope<CharT, Alloc>& left, const rope<CharT, Alloc>& right) {
	return !(left == right);
}

template <typename CharT, typename Alloc>
bool operator<(const rope<CharT, Alloc>& left, const rope<CharT, Alloc>& right) {
	return left.compare(right) < 0;
}

template <typename CharT, typename Alloc>
std::basic_ostream<CharT>& operator<<(
	std::basic_ostream<CharT>& output,
	const rope<CharT, Alloc>& value
) {
	return output << value.str();
}

typedef rope<char> crope;
typedef rope<wchar_t> wrope;

} // namespace __gnu_cxx

#endif
`,fo=String.raw`#ifndef WASM_CLANG_SETJMP_H
#define WASM_CLANG_SETJMP_H

#ifdef __cplusplus
extern "C" {
#endif

typedef long jmp_buf[32];
int setjmp(jmp_buf);
__attribute__((noreturn)) void longjmp(jmp_buf, int);

#ifdef __cplusplus
}
#endif

#endif
`,po=String.raw`#ifndef WASM_CLANG_BITS_STDCPP_H
#define WASM_CLANG_BITS_STDCPP_H

#include <algorithm>
#include <array>
#include <bitset>
#include <cassert>
#include <cctype>
#include <cerrno>
#include <cfloat>
#include <climits>
#include <cmath>
#include <cstddef>
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <deque>
#include <functional>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <limits>
#include <list>
#include <map>
#include <memory>
#include <numeric>
#include <queue>
#include <set>
#include <sstream>
#include <stack>
#include <string>
#include <string_view>
#include <tuple>
#include <type_traits>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>

#endif
`,bo=String.raw`#ifndef WASM_CLANG_BITS_EXTCXX_H
#define WASM_CLANG_BITS_EXTCXX_H

#include <bits/stdc++.h>
#include <ext/hash_map>
#include <ext/hash_set>
#include <ext/rope>
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/hash_policy.hpp>
#include <ext/pb_ds/priority_queue.hpp>
#include <ext/pb_ds/tree_policy.hpp>

#endif
`,ho=[{path:"include/setjmp.h",contents:fo},{path:"include/bits/stdc++.h",contents:po},{path:"include/bits/extc++.h",contents:bo},{path:"include/c++/v1/ext/rope",contents:uo},{path:"include/c++/v1/ext/pb_ds/tree_policy.hpp",contents:oo},{path:"include/c++/v1/ext/pb_ds/assoc_container.hpp",contents:lo},{path:"include/c++/v1/ext/pb_ds/hash_policy.hpp",contents:mo},{path:"include/c++/v1/ext/pb_ds/priority_queue.hpp",contents:co}];function tr(e){e.addDirectory("include/c++/v1/ext/pb_ds"),e.addDirectory("include/bits");for(let _ of ho)e.addFile(_.path,_.contents)}var ir=Object.freeze({"builtins.h":`/*===---- builtins.h - Standard header for extra builtins -----------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

/// Some legacy compilers have builtin definitions in a file named builtins.h.
/// This header file has been added to allow compatibility with code that was
/// written for those compilers. Code may have an include line for this file
/// and to avoid an error an empty file with this name is provided.
#ifndef __BUILTINS_H
#define __BUILTINS_H

#if defined(__MVS__) && __has_include_next(<builtins.h>)
#include_next <builtins.h>
#endif /* __MVS__ */
#endif /* __BUILTINS_H */
`,"float.h":`/*===---- float.h - Characteristics of floating point types ----------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#if defined(__MVS__) && __has_include_next(<float.h>)
#include <__float_header_macro.h>
#include_next <float.h>
#else

#if !defined(__need_infinity_nan)
#define __need_float_float
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
#define __need_infinity_nan
#endif
#include <__float_header_macro.h>
#endif

#ifdef __need_float_float
/* If we're on MinGW, fall back to the system's float.h, which might have
 * additional definitions provided for Windows.
 * For more details see http://msdn.microsoft.com/en-us/library/y0ybw9fy.aspx
 *
 * Also fall back on AIX to allow additional definitions and
 * implementation-defined values.
 */
#if (defined(__MINGW32__) || defined(_MSC_VER) || defined(_AIX)) &&            \\
    __STDC_HOSTED__ && __has_include_next(<float.h>)

#  include_next <float.h>

#endif

#include <__float_float.h>
#undef __need_float_float
#endif

#ifdef __need_infinity_nan
#include <__float_infinity_nan.h>
#undef __need_infinity_nan
#endif

#endif /* __MVS__ */
`,"__float_float.h":`/*===---- __float_float.h --------------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_FLOAT_FLOAT_H
#define __CLANG_FLOAT_FLOAT_H

#if (defined(__MINGW32__) || defined(_MSC_VER) || defined(_AIX)) &&            \\
    __STDC_HOSTED__

/* Undefine anything that we'll be redefining below. */
#  undef FLT_EVAL_METHOD
#  undef FLT_ROUNDS
#  undef FLT_RADIX
#  undef FLT_MANT_DIG
#  undef DBL_MANT_DIG
#  undef LDBL_MANT_DIG
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201103L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#    undef DECIMAL_DIG
#  endif
#  undef FLT_DIG
#  undef DBL_DIG
#  undef LDBL_DIG
#  undef FLT_MIN_EXP
#  undef DBL_MIN_EXP
#  undef LDBL_MIN_EXP
#  undef FLT_MIN_10_EXP
#  undef DBL_MIN_10_EXP
#  undef LDBL_MIN_10_EXP
#  undef FLT_MAX_EXP
#  undef DBL_MAX_EXP
#  undef LDBL_MAX_EXP
#  undef FLT_MAX_10_EXP
#  undef DBL_MAX_10_EXP
#  undef LDBL_MAX_10_EXP
#  undef FLT_MAX
#  undef DBL_MAX
#  undef LDBL_MAX
#  undef FLT_EPSILON
#  undef DBL_EPSILON
#  undef LDBL_EPSILON
#  undef FLT_MIN
#  undef DBL_MIN
#  undef LDBL_MIN
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201112L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201703L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#    undef FLT_TRUE_MIN
#    undef DBL_TRUE_MIN
#    undef LDBL_TRUE_MIN
#    undef FLT_DECIMAL_DIG
#    undef DBL_DECIMAL_DIG
#    undef LDBL_DECIMAL_DIG
#    undef FLT_HAS_SUBNORM
#    undef DBL_HAS_SUBNORM
#    undef LDBL_HAS_SUBNORM
#  endif
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
#    undef FLT_NORM_MAX
#    undef DBL_NORM_MAX
#    undef LDBL_NORM_MAX
#endif
#endif

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
#  undef FLT_SNAN
#  undef DBL_SNAN
#  undef LDBL_SNAN
#endif

/* Characteristics of floating point types, C99 5.2.4.2.2 */

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L)
#define FLT_EVAL_METHOD __FLT_EVAL_METHOD__
#endif
#define FLT_ROUNDS (__builtin_flt_rounds())
#define FLT_RADIX __FLT_RADIX__

#define FLT_MANT_DIG __FLT_MANT_DIG__
#define DBL_MANT_DIG __DBL_MANT_DIG__
#define LDBL_MANT_DIG __LDBL_MANT_DIG__

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201103L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#  define DECIMAL_DIG __DECIMAL_DIG__
#endif

#define FLT_DIG __FLT_DIG__
#define DBL_DIG __DBL_DIG__
#define LDBL_DIG __LDBL_DIG__

#define FLT_MIN_EXP __FLT_MIN_EXP__
#define DBL_MIN_EXP __DBL_MIN_EXP__
#define LDBL_MIN_EXP __LDBL_MIN_EXP__

#define FLT_MIN_10_EXP __FLT_MIN_10_EXP__
#define DBL_MIN_10_EXP __DBL_MIN_10_EXP__
#define LDBL_MIN_10_EXP __LDBL_MIN_10_EXP__

#define FLT_MAX_EXP __FLT_MAX_EXP__
#define DBL_MAX_EXP __DBL_MAX_EXP__
#define LDBL_MAX_EXP __LDBL_MAX_EXP__

#define FLT_MAX_10_EXP __FLT_MAX_10_EXP__
#define DBL_MAX_10_EXP __DBL_MAX_10_EXP__
#define LDBL_MAX_10_EXP __LDBL_MAX_10_EXP__

#define FLT_MAX __FLT_MAX__
#define DBL_MAX __DBL_MAX__
#define LDBL_MAX __LDBL_MAX__

#define FLT_EPSILON __FLT_EPSILON__
#define DBL_EPSILON __DBL_EPSILON__
#define LDBL_EPSILON __LDBL_EPSILON__

#define FLT_MIN __FLT_MIN__
#define DBL_MIN __DBL_MIN__
#define LDBL_MIN __LDBL_MIN__

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201112L) ||              \\
    !defined(__STRICT_ANSI__) ||                                               \\
    (defined(__cplusplus) && __cplusplus >= 201703L) ||                        \\
    (__STDC_HOSTED__ && defined(_AIX) && defined(_ALL_SOURCE))
#  define FLT_TRUE_MIN __FLT_DENORM_MIN__
#  define DBL_TRUE_MIN __DBL_DENORM_MIN__
#  define LDBL_TRUE_MIN __LDBL_DENORM_MIN__
#  define FLT_DECIMAL_DIG __FLT_DECIMAL_DIG__
#  define DBL_DECIMAL_DIG __DBL_DECIMAL_DIG__
#  define LDBL_DECIMAL_DIG __LDBL_DECIMAL_DIG__
#  define FLT_HAS_SUBNORM __FLT_HAS_DENORM__
#  define DBL_HAS_SUBNORM __DBL_HAS_DENORM__
#  define LDBL_HAS_SUBNORM __LDBL_HAS_DENORM__
#endif

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    !defined(__STRICT_ANSI__)
   /* C23 5.2.5.3.2p28 */
#  define FLT_SNAN (__builtin_nansf(""))
#  define DBL_SNAN (__builtin_nans(""))
#  define LDBL_SNAN (__builtin_nansl(""))

   /* C23 5.2.5.3.3p32 */
#  define FLT_NORM_MAX __FLT_NORM_MAX__
#  define DBL_NORM_MAX __DBL_NORM_MAX__
#  define LDBL_NORM_MAX __LDBL_NORM_MAX__
#endif

#ifdef __STDC_WANT_IEC_60559_TYPES_EXT__
#  define FLT16_MANT_DIG    __FLT16_MANT_DIG__
#  define FLT16_DECIMAL_DIG __FLT16_DECIMAL_DIG__
#  define FLT16_DIG         __FLT16_DIG__
#  define FLT16_MIN_EXP     __FLT16_MIN_EXP__
#  define FLT16_MIN_10_EXP  __FLT16_MIN_10_EXP__
#  define FLT16_MAX_EXP     __FLT16_MAX_EXP__
#  define FLT16_MAX_10_EXP  __FLT16_MAX_10_EXP__
#  define FLT16_MAX         __FLT16_MAX__
#  define FLT16_EPSILON     __FLT16_EPSILON__
#  define FLT16_MIN         __FLT16_MIN__
#  define FLT16_TRUE_MIN    __FLT16_TRUE_MIN__
#endif /* __STDC_WANT_IEC_60559_TYPES_EXT__ */

#endif /* __CLANG_FLOAT_FLOAT_H */
`,"__float_header_macro.h":`/*===---- __float_header_macro.h -------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_FLOAT_H
#define __CLANG_FLOAT_H
#endif /* __CLANG_FLOAT_H */
`,"__float_infinity_nan.h":`/*===---- __float_infinity_nan.h -------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_FLOAT_INFINITY_NAN_H
#define __CLANG_FLOAT_INFINITY_NAN_H

/* C23 5.2.5.3.3p29-30 */
#undef INFINITY
#undef NAN

#define INFINITY (__builtin_inff())
#define NAN (__builtin_nanf(""))

#endif /* __CLANG_FLOAT_INFINITY_NAN_H */
`,"inttypes.h":`/*===---- inttypes.h - Standard header for integer printf macros ----------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_INTTYPES_H
// AIX system headers need inttypes.h to be re-enterable while _STD_TYPES_T
// is defined until an inclusion of it without _STD_TYPES_T occurs, in which
// case the header guard macro is defined.
#if !defined(_AIX) || !defined(_STD_TYPES_T)
#define __CLANG_INTTYPES_H
#endif
#if defined(__MVS__) && __has_include_next(<inttypes.h>)
#include_next <inttypes.h>
#else

#if defined(_MSC_VER) && _MSC_VER < 1800
#error MSVC does not have inttypes.h prior to Visual Studio 2013
#endif

#include_next <inttypes.h>

#if defined(_MSC_VER) && _MSC_VER < 1900
/* MSVC headers define int32_t as int, but PRIx32 as "lx" instead of "x".
 * This triggers format warnings, so fix it up here. */
#undef PRId32
#undef PRIdLEAST32
#undef PRIdFAST32
#undef PRIi32
#undef PRIiLEAST32
#undef PRIiFAST32
#undef PRIo32
#undef PRIoLEAST32
#undef PRIoFAST32
#undef PRIu32
#undef PRIuLEAST32
#undef PRIuFAST32
#undef PRIx32
#undef PRIxLEAST32
#undef PRIxFAST32
#undef PRIX32
#undef PRIXLEAST32
#undef PRIXFAST32

#undef SCNd32
#undef SCNdLEAST32
#undef SCNdFAST32
#undef SCNi32
#undef SCNiLEAST32
#undef SCNiFAST32
#undef SCNo32
#undef SCNoLEAST32
#undef SCNoFAST32
#undef SCNu32
#undef SCNuLEAST32
#undef SCNuFAST32
#undef SCNx32
#undef SCNxLEAST32
#undef SCNxFAST32

#define PRId32 "d"
#define PRIdLEAST32 "d"
#define PRIdFAST32 "d"
#define PRIi32 "i"
#define PRIiLEAST32 "i"
#define PRIiFAST32 "i"
#define PRIo32 "o"
#define PRIoLEAST32 "o"
#define PRIoFAST32 "o"
#define PRIu32 "u"
#define PRIuLEAST32 "u"
#define PRIuFAST32 "u"
#define PRIx32 "x"
#define PRIxLEAST32 "x"
#define PRIxFAST32 "x"
#define PRIX32 "X"
#define PRIXLEAST32 "X"
#define PRIXFAST32 "X"

#define SCNd32 "d"
#define SCNdLEAST32 "d"
#define SCNdFAST32 "d"
#define SCNi32 "i"
#define SCNiLEAST32 "i"
#define SCNiFAST32 "i"
#define SCNo32 "o"
#define SCNoLEAST32 "o"
#define SCNoFAST32 "o"
#define SCNu32 "u"
#define SCNuLEAST32 "u"
#define SCNuFAST32 "u"
#define SCNx32 "x"
#define SCNxLEAST32 "x"
#define SCNxFAST32 "x"
#endif

#endif /* __MVS__ */
#endif /* __CLANG_INTTYPES_H */
`,"iso646.h":`/*===---- iso646.h - Standard header for alternate spellings of operators---===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __ISO646_H
#define __ISO646_H
#if defined(__MVS__) && __has_include_next(<iso646.h>)
#include_next <iso646.h>
#else

#ifndef __cplusplus
#define and    &&
#define and_eq &=
#define bitand &
#define bitor  |
#define compl  ~
#define not    !
#define not_eq !=
#define or     ||
#define or_eq  |=
#define xor    ^
#define xor_eq ^=
#endif

#endif /* __MVS__ */
#endif /* __ISO646_H */
`,"limits.h":`/*===---- limits.h - Standard header for integer sizes --------------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_LIMITS_H
#define __CLANG_LIMITS_H

#if defined(__MVS__) && __has_include_next(<limits.h>)
#include_next <limits.h>
#else

/* The system's limits.h may, in turn, try to #include_next GCC's limits.h.
   Avert this #include_next madness. */
#if defined __GNUC__ && !defined _GCC_LIMITS_H_
#define _GCC_LIMITS_H_
#endif

/* System headers include a number of constants from POSIX in <limits.h>.
   Include it if we're hosted. */
#if __STDC_HOSTED__ && __has_include_next(<limits.h>)
#include_next <limits.h>
#endif

/* Many system headers try to "help us out" by defining these.  No really, we
   know how big each datatype is. */
#undef  SCHAR_MIN
#undef  SCHAR_MAX
#undef  UCHAR_MAX
#undef  SHRT_MIN
#undef  SHRT_MAX
#undef  USHRT_MAX
#undef  INT_MIN
#undef  INT_MAX
#undef  UINT_MAX
#undef  LONG_MIN
#undef  LONG_MAX
#undef  ULONG_MAX

#undef  CHAR_BIT
#undef  CHAR_MIN
#undef  CHAR_MAX

/* C90/99 5.2.4.2.1 */
#define SCHAR_MAX __SCHAR_MAX__
#define SHRT_MAX  __SHRT_MAX__
#define INT_MAX   __INT_MAX__
#define LONG_MAX  __LONG_MAX__

#define SCHAR_MIN (-__SCHAR_MAX__-1)
#define SHRT_MIN  (-__SHRT_MAX__ -1)
#define INT_MIN   (-__INT_MAX__  -1)
#define LONG_MIN  (-__LONG_MAX__ -1L)

#define UCHAR_MAX (__SCHAR_MAX__*2  +1)
#if __SHRT_WIDTH__ < __INT_WIDTH__
#define USHRT_MAX (__SHRT_MAX__ * 2 + 1)
#else
#define USHRT_MAX (__SHRT_MAX__ * 2U + 1U)
#endif
#define UINT_MAX  (__INT_MAX__  *2U +1U)
#define ULONG_MAX (__LONG_MAX__ *2UL+1UL)

#ifndef MB_LEN_MAX
#define MB_LEN_MAX 1
#endif

#define CHAR_BIT  __CHAR_BIT__

/* C23 5.2.4.2.1 */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define BOOL_WIDTH   __BOOL_WIDTH__
#define CHAR_WIDTH   CHAR_BIT
#define SCHAR_WIDTH  CHAR_BIT
#define UCHAR_WIDTH  CHAR_BIT
#define USHRT_WIDTH  __SHRT_WIDTH__
#define SHRT_WIDTH   __SHRT_WIDTH__
#define UINT_WIDTH   __INT_WIDTH__
#define INT_WIDTH    __INT_WIDTH__
#define ULONG_WIDTH  __LONG_WIDTH__
#define LONG_WIDTH   __LONG_WIDTH__
#define ULLONG_WIDTH __LLONG_WIDTH__
#define LLONG_WIDTH  __LLONG_WIDTH__

#define BITINT_MAXWIDTH __BITINT_MAXWIDTH__
#endif

#ifdef __CHAR_UNSIGNED__  /* -funsigned-char */
#define CHAR_MIN 0
#define CHAR_MAX UCHAR_MAX
#else
#define CHAR_MIN SCHAR_MIN
#define CHAR_MAX __SCHAR_MAX__
#endif

/* C99 5.2.4.2.1: Added long long.
   C++11 18.3.3.2: same contents as the Standard C Library header <limits.h>.
 */
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L)

#undef  LLONG_MIN
#undef  LLONG_MAX
#undef  ULLONG_MAX

#define LLONG_MAX  __LONG_LONG_MAX__
#define LLONG_MIN  (-__LONG_LONG_MAX__-1LL)
#define ULLONG_MAX (__LONG_LONG_MAX__*2ULL+1ULL)
#endif

/* LONG_LONG_MIN/LONG_LONG_MAX/ULONG_LONG_MAX are a GNU extension. Android's
   bionic also defines them. It's too bad that we don't have something like
   #pragma poison that could be used to deprecate a macro - the code should just
   use LLONG_MAX and friends.
 */
#if (defined(__GNU_LIBRARY__) ? defined(__USE_GNU)                             \\
                              : !defined(__STRICT_ANSI__)) ||                  \\
    defined(__BIONIC__)

#undef   LONG_LONG_MIN
#undef   LONG_LONG_MAX
#undef   ULONG_LONG_MAX

#define LONG_LONG_MAX  __LONG_LONG_MAX__
#define LONG_LONG_MIN  (-__LONG_LONG_MAX__-1LL)
#define ULONG_LONG_MAX (__LONG_LONG_MAX__*2ULL+1ULL)
#endif

#endif /* __MVS__ */
#endif /* __CLANG_LIMITS_H */
`,"stdalign.h":`/*===---- stdalign.h - Standard header for alignment ------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDALIGN_H
#define __STDALIGN_H

#if defined(__cplusplus) ||                                                    \\
    (defined(__STDC_VERSION__) && __STDC_VERSION__ < 202311L)
#ifndef __cplusplus
#define alignas _Alignas
#define alignof _Alignof
#endif

#define __alignas_is_defined 1
#define __alignof_is_defined 1
#endif /* __STDC_VERSION__ */

#endif /* __STDALIGN_H */
`,"stdarg.h":`/*===---- stdarg.h - Variable argument handling ----------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * This header is designed to be included multiple times. If any of the __need_
 * macros are defined, then only that subset of interfaces are provided. This
 * can be useful for POSIX headers that need to not expose all of stdarg.h, but
 * need to use some of its interfaces. Otherwise this header provides all of
 * the expected interfaces.
 *
 * When clang modules are enabled, this header is a textual header to support
 * the multiple include behavior. As such, it doesn't directly declare anything
 * so that it doesn't add duplicate declarations to all of its includers'
 * modules.
 */
#if defined(__MVS__) && __has_include_next(<stdarg.h>)
#undef __need___va_list
#undef __need_va_list
#undef __need_va_arg
#undef __need___va_copy
#undef __need_va_copy
#include <__stdarg_header_macro.h>
#include_next <stdarg.h>

#else
#if !defined(__need___va_list) && !defined(__need_va_list) &&                  \\
    !defined(__need_va_arg) && !defined(__need___va_copy) &&                   \\
    !defined(__need_va_copy)
#define __need___va_list
#define __need_va_list
#define __need_va_arg
#define __need___va_copy
/* GCC always defines __va_copy, but does not define va_copy unless in c99 mode
 * or -ansi is not specified, since it was not part of C90.
 */
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 199901L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L) ||                        \\
    !defined(__STRICT_ANSI__)
#define __need_va_copy
#endif
#include <__stdarg_header_macro.h>
#endif

#ifdef __need___va_list
#include <__stdarg___gnuc_va_list.h>
#undef __need___va_list
#endif /* defined(__need___va_list) */

#ifdef __need_va_list
#include <__stdarg_va_list.h>
#undef __need_va_list
#endif /* defined(__need_va_list) */

#ifdef __need_va_arg
#include <__stdarg_va_arg.h>
#undef __need_va_arg
#endif /* defined(__need_va_arg) */

#ifdef __need___va_copy
#include <__stdarg___va_copy.h>
#undef __need___va_copy
#endif /* defined(__need___va_copy) */

#ifdef __need_va_copy
#include <__stdarg_va_copy.h>
#undef __need_va_copy
#endif /* defined(__need_va_copy) */

#endif /* __MVS__ */
`,"__stdarg___gnuc_va_list.h":`/*===---- __stdarg___gnuc_va_list.h - Definition of __gnuc_va_list ---------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __GNUC_VA_LIST
#define __GNUC_VA_LIST
typedef __builtin_va_list __gnuc_va_list;
#endif
`,"__stdarg___va_copy.h":`/*===---- __stdarg___va_copy.h - Definition of __va_copy -------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __va_copy
#define __va_copy(d, s) __builtin_va_copy(d, s)
#endif
`,"__stdarg_header_macro.h":`/*===---- __stdarg_header_macro.h ------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDARG_H
#define __STDARG_H
#endif
`,"__stdarg_va_arg.h":`/*===---- __stdarg_va_arg.h - Definitions of va_start, va_arg, va_end-------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef va_arg

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
/* C23 uses a special builtin. */
#define va_start(...) __builtin_c23_va_start(__VA_ARGS__)
#else
/* Versions before C23 do require the second parameter. */
#define va_start(ap, param) __builtin_va_start(ap, param)
#endif
#define va_end(ap) __builtin_va_end(ap)
#define va_arg(ap, type) __builtin_va_arg(ap, type)

#endif
`,"__stdarg_va_copy.h":`/*===---- __stdarg_va_copy.h - Definition of va_copy------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef va_copy
#define va_copy(dest, src) __builtin_va_copy(dest, src)
#endif
`,"__stdarg_va_list.h":`/*===---- __stdarg_va_list.h - Definition of va_list -----------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef _VA_LIST
#define _VA_LIST
typedef __builtin_va_list va_list;
#endif
`,"stdatomic.h":`/*===---- stdatomic.h - Standard header for atomic types and operations -----===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_STDATOMIC_H
#define __CLANG_STDATOMIC_H

/* If we're hosted, fall back to the system's stdatomic.h. FreeBSD, for
 * example, already has a Clang-compatible stdatomic.h header.
 *
 * Exclude the MSVC path as well as the MSVC header as of the 14.31.30818
 * explicitly disallows \`stdatomic.h\` in the C mode via an \`#error\`.  Fallback
 * to the clang resource header until that is fully supported.  The
 * \`stdatomic.h\` header requires C++23 or newer.
 */
#if __STDC_HOSTED__ &&                                                         \\
    __has_include_next(<stdatomic.h>) &&                                       \\
    (!defined(_MSC_VER) || (defined(__cplusplus) && __cplusplus >= 202002L))
# include_next <stdatomic.h>
#else

#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/* 7.17.1 Introduction */

#define ATOMIC_BOOL_LOCK_FREE       __CLANG_ATOMIC_BOOL_LOCK_FREE
#define ATOMIC_CHAR_LOCK_FREE       __CLANG_ATOMIC_CHAR_LOCK_FREE
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define ATOMIC_CHAR8_T_LOCK_FREE    __CLANG_ATOMIC_CHAR8_T_LOCK_FREE
#endif
#define ATOMIC_CHAR16_T_LOCK_FREE   __CLANG_ATOMIC_CHAR16_T_LOCK_FREE
#define ATOMIC_CHAR32_T_LOCK_FREE   __CLANG_ATOMIC_CHAR32_T_LOCK_FREE
#define ATOMIC_WCHAR_T_LOCK_FREE    __CLANG_ATOMIC_WCHAR_T_LOCK_FREE
#define ATOMIC_SHORT_LOCK_FREE      __CLANG_ATOMIC_SHORT_LOCK_FREE
#define ATOMIC_INT_LOCK_FREE        __CLANG_ATOMIC_INT_LOCK_FREE
#define ATOMIC_LONG_LOCK_FREE       __CLANG_ATOMIC_LONG_LOCK_FREE
#define ATOMIC_LLONG_LOCK_FREE      __CLANG_ATOMIC_LLONG_LOCK_FREE
#define ATOMIC_POINTER_LOCK_FREE    __CLANG_ATOMIC_POINTER_LOCK_FREE

/* 7.17.2 Initialization */
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ < 202311L) ||               \\
    defined(__cplusplus)
/* ATOMIC_VAR_INIT was removed in C23, but still remains in C++23. */
#define ATOMIC_VAR_INIT(value) (value)
#endif

#if ((defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201710L &&              \\
      __STDC_VERSION__ < 202311L) ||                                           \\
     (defined(__cplusplus) && __cplusplus >= 202002L)) &&                      \\
    !defined(_CLANG_DISABLE_CRT_DEPRECATION_WARNINGS)
/* ATOMIC_VAR_INIT was deprecated in C17 and C++20. */
#pragma clang deprecated(ATOMIC_VAR_INIT)
#endif
#define atomic_init __c11_atomic_init

/* 7.17.3 Order and consistency */

typedef enum memory_order {
  memory_order_relaxed = __ATOMIC_RELAXED,
  memory_order_consume = __ATOMIC_CONSUME,
  memory_order_acquire = __ATOMIC_ACQUIRE,
  memory_order_release = __ATOMIC_RELEASE,
  memory_order_acq_rel = __ATOMIC_ACQ_REL,
  memory_order_seq_cst = __ATOMIC_SEQ_CST
} memory_order;

#define kill_dependency(y) (y)

/* 7.17.4 Fences */

/* These should be provided by the libc implementation. */
void atomic_thread_fence(memory_order);
void atomic_signal_fence(memory_order);

#define atomic_thread_fence(order) __c11_atomic_thread_fence(order)
#define atomic_signal_fence(order) __c11_atomic_signal_fence(order)

/* 7.17.5 Lock-free property */

#define atomic_is_lock_free(obj) __c11_atomic_is_lock_free(sizeof(*(obj)))

/* 7.17.6 Atomic integer types */

#ifdef __cplusplus
typedef _Atomic(bool)               atomic_bool;
#else
typedef _Atomic(_Bool)              atomic_bool;
#endif
typedef _Atomic(char)               atomic_char;
typedef _Atomic(signed char)        atomic_schar;
typedef _Atomic(unsigned char)      atomic_uchar;
typedef _Atomic(short)              atomic_short;
typedef _Atomic(unsigned short)     atomic_ushort;
typedef _Atomic(int)                atomic_int;
typedef _Atomic(unsigned int)       atomic_uint;
typedef _Atomic(long)               atomic_long;
typedef _Atomic(unsigned long)      atomic_ulong;
typedef _Atomic(long long)          atomic_llong;
typedef _Atomic(unsigned long long) atomic_ullong;
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
typedef _Atomic(unsigned char)      atomic_char8_t;
#endif
typedef _Atomic(uint_least16_t)     atomic_char16_t;
typedef _Atomic(uint_least32_t)     atomic_char32_t;
typedef _Atomic(wchar_t)            atomic_wchar_t;
typedef _Atomic(int_least8_t)       atomic_int_least8_t;
typedef _Atomic(uint_least8_t)      atomic_uint_least8_t;
typedef _Atomic(int_least16_t)      atomic_int_least16_t;
typedef _Atomic(uint_least16_t)     atomic_uint_least16_t;
typedef _Atomic(int_least32_t)      atomic_int_least32_t;
typedef _Atomic(uint_least32_t)     atomic_uint_least32_t;
typedef _Atomic(int_least64_t)      atomic_int_least64_t;
typedef _Atomic(uint_least64_t)     atomic_uint_least64_t;
typedef _Atomic(int_fast8_t)        atomic_int_fast8_t;
typedef _Atomic(uint_fast8_t)       atomic_uint_fast8_t;
typedef _Atomic(int_fast16_t)       atomic_int_fast16_t;
typedef _Atomic(uint_fast16_t)      atomic_uint_fast16_t;
typedef _Atomic(int_fast32_t)       atomic_int_fast32_t;
typedef _Atomic(uint_fast32_t)      atomic_uint_fast32_t;
typedef _Atomic(int_fast64_t)       atomic_int_fast64_t;
typedef _Atomic(uint_fast64_t)      atomic_uint_fast64_t;
typedef _Atomic(intptr_t)           atomic_intptr_t;
typedef _Atomic(uintptr_t)          atomic_uintptr_t;
typedef _Atomic(size_t)             atomic_size_t;
typedef _Atomic(ptrdiff_t)          atomic_ptrdiff_t;
typedef _Atomic(intmax_t)           atomic_intmax_t;
typedef _Atomic(uintmax_t)          atomic_uintmax_t;

/* 7.17.7 Operations on atomic types */

#define atomic_store(object, desired) __c11_atomic_store(object, desired, __ATOMIC_SEQ_CST)
#define atomic_store_explicit __c11_atomic_store

#define atomic_load(object) __c11_atomic_load(object, __ATOMIC_SEQ_CST)
#define atomic_load_explicit __c11_atomic_load

#define atomic_exchange(object, desired) __c11_atomic_exchange(object, desired, __ATOMIC_SEQ_CST)
#define atomic_exchange_explicit __c11_atomic_exchange

#define atomic_compare_exchange_strong(object, expected, desired) __c11_atomic_compare_exchange_strong(object, expected, desired, __ATOMIC_SEQ_CST, __ATOMIC_SEQ_CST)
#define atomic_compare_exchange_strong_explicit __c11_atomic_compare_exchange_strong

#define atomic_compare_exchange_weak(object, expected, desired) __c11_atomic_compare_exchange_weak(object, expected, desired, __ATOMIC_SEQ_CST, __ATOMIC_SEQ_CST)
#define atomic_compare_exchange_weak_explicit __c11_atomic_compare_exchange_weak

#define atomic_fetch_add(object, operand) __c11_atomic_fetch_add(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_add_explicit __c11_atomic_fetch_add

#define atomic_fetch_sub(object, operand) __c11_atomic_fetch_sub(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_sub_explicit __c11_atomic_fetch_sub

#define atomic_fetch_or(object, operand) __c11_atomic_fetch_or(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_or_explicit __c11_atomic_fetch_or

#define atomic_fetch_xor(object, operand) __c11_atomic_fetch_xor(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_xor_explicit __c11_atomic_fetch_xor

#define atomic_fetch_and(object, operand) __c11_atomic_fetch_and(object, operand, __ATOMIC_SEQ_CST)
#define atomic_fetch_and_explicit __c11_atomic_fetch_and

/* 7.17.8 Atomic flag type and operations */

typedef struct atomic_flag { atomic_bool _Value; } atomic_flag;

#ifdef __cplusplus
#define ATOMIC_FLAG_INIT {false}
#else
#define ATOMIC_FLAG_INIT { 0 }
#endif

/* These should be provided by the libc implementation. */
#ifdef __cplusplus
bool atomic_flag_test_and_set(volatile atomic_flag *);
bool atomic_flag_test_and_set_explicit(volatile atomic_flag *, memory_order);
#else
_Bool atomic_flag_test_and_set(volatile atomic_flag *);
_Bool atomic_flag_test_and_set_explicit(volatile atomic_flag *, memory_order);
#endif
void atomic_flag_clear(volatile atomic_flag *);
void atomic_flag_clear_explicit(volatile atomic_flag *, memory_order);

#define atomic_flag_test_and_set(object) __c11_atomic_exchange(&(object)->_Value, 1, __ATOMIC_SEQ_CST)
#define atomic_flag_test_and_set_explicit(object, order) __c11_atomic_exchange(&(object)->_Value, 1, order)

#define atomic_flag_clear(object) __c11_atomic_store(&(object)->_Value, 0, __ATOMIC_SEQ_CST)
#define atomic_flag_clear_explicit(object, order) __c11_atomic_store(&(object)->_Value, 0, order)

#ifdef __cplusplus
}
#endif

#endif /* __STDC_HOSTED__ */
#endif /* __CLANG_STDATOMIC_H */

`,"stdbool.h":`/*===---- stdbool.h - Standard header for booleans -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDBOOL_H
#define __STDBOOL_H

#define __bool_true_false_are_defined 1

#if defined(__MVS__) && __has_include_next(<stdbool.h>)
#include_next <stdbool.h>
#else

#if defined(__STDC_VERSION__) && __STDC_VERSION__ > 201710L
/* FIXME: We should be issuing a deprecation warning here, but cannot yet due
 * to system headers which include this header file unconditionally.
 */
#elif !defined(__cplusplus)
#define bool _Bool
#define true 1
#define false 0
#elif defined(__GNUC__) && !defined(__STRICT_ANSI__)
/* Define _Bool as a GNU extension. */
#define _Bool bool
#if defined(__cplusplus) && __cplusplus < 201103L
/* For C++98, define bool, false, true as a GNU extension. */
#define bool bool
#define false false
#define true true
#endif
#endif

#endif /* __MVS__ */
#endif /* __STDBOOL_H */
`,"stdcountof.h":`/*===---- stdcountof.h - Standard header for countof -----------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDCOUNTOF_H
#define __STDCOUNTOF_H

#define countof _Countof

#endif /* __STDCOUNTOF_H */
`,"stdckdint.h":`/*===---- stdckdint.h - Standard header for checking integer----------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDCKDINT_H
#define __STDCKDINT_H

/* If we're hosted, fall back to the system's stdckdint.h. FreeBSD, for
 * example, already has a Clang-compatible stdckdint.h header.
 *
 * The \`stdckdint.h\` header requires C 23 or newer.
 */
#if __STDC_HOSTED__ && __has_include_next(<stdckdint.h>)
#include_next <stdckdint.h>
#else

/* C23 7.20.1 Defines several macros for performing checked integer arithmetic*/

#define __STDC_VERSION_STDCKDINT_H__ 202311L

// Both A and B shall be any integer type other than "plain" char, bool, a bit-
// precise integer type, or an enumerated type, and they need not be the same.

// R shall be a modifiable lvalue of any integer type other than "plain" char,
// bool, a bit-precise integer type, or an enumerated type. It shouldn't be
// short type, either. Otherwise, it may be unable to hold two the result of
// operating two 'int's.

// A diagnostic message will be produced if A or B are not suitable integer
// types, or if R is not a modifiable lvalue of a suitable integer type or R
// is short type.
#define ckd_add(R, A, B) __builtin_add_overflow((A), (B), (R))
#define ckd_sub(R, A, B) __builtin_sub_overflow((A), (B), (R))
#define ckd_mul(R, A, B) __builtin_mul_overflow((A), (B), (R))

#endif /* __STDC_HOSTED__ */
#endif /* __STDCKDINT_H */
`,"stddef.h":`/*===---- stddef.h - Basic type definitions --------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * This header is designed to be included multiple times. If any of the __need_
 * macros are defined, then only that subset of interfaces are provided. This
 * can be useful for POSIX headers that need to not expose all of stddef.h, but
 * need to use some of its interfaces. Otherwise this header provides all of
 * the expected interfaces.
 *
 * When clang modules are enabled, this header is a textual header to support
 * the multiple include behavior. As such, it doesn't directly declare anything
 * so that it doesn't add duplicate declarations to all of its includers'
 * modules.
 */
#if defined(__MVS__) && __has_include_next(<stddef.h>)
#undef __need_ptrdiff_t
#undef __need_size_t
#undef __need_rsize_t
#undef __need_wchar_t
#undef __need_NULL
#undef __need_nullptr_t
#undef __need_unreachable
#undef __need_max_align_t
#undef __need_offsetof
#undef __need_wint_t
#include <__stddef_header_macro.h>
#include_next <stddef.h>

#else

#if !defined(__need_ptrdiff_t) && !defined(__need_size_t) &&                   \\
    !defined(__need_rsize_t) && !defined(__need_wchar_t) &&                    \\
    !defined(__need_NULL) && !defined(__need_nullptr_t) &&                     \\
    !defined(__need_unreachable) && !defined(__need_max_align_t) &&            \\
    !defined(__need_offsetof) && !defined(__need_wint_t)
#define __need_ptrdiff_t
#define __need_size_t
/* ISO9899:2011 7.20 (C11 Annex K): Define rsize_t if __STDC_WANT_LIB_EXT1__ is
 * enabled. */
#if defined(__STDC_WANT_LIB_EXT1__) && __STDC_WANT_LIB_EXT1__ >= 1
#define __need_rsize_t
#endif
#define __need_wchar_t
#if !defined(__STDDEF_H) || __has_feature(modules)
/*
 * __stddef_null.h is special when building without modules: if __need_NULL is
 * set, then it will unconditionally redefine NULL. To avoid stepping on client
 * definitions of NULL, __need_NULL should only be set the first time this
 * header is included, that is when __STDDEF_H is not defined. However, when
 * building with modules, this header is a textual header and needs to
 * unconditionally include __stdef_null.h to support multiple submodules
 * exporting _Builtin_stddef.null. Take module SM with submodules A and B, whose
 * headers both include stddef.h When SM.A builds, __STDDEF_H will be defined.
 * When SM.B builds, the definition from SM.A will leak when building without
 * local submodule visibility. stddef.h wouldn't include __stddef_null.h, and
 * SM.B wouldn't import _Builtin_stddef.null, and SM.B's \`export *\` wouldn't
 * export NULL as expected. When building with modules, always include
 * __stddef_null.h so that everything works as expected.
 */
#define __need_NULL
#endif
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L) ||              \\
    defined(__cplusplus)
#define __need_nullptr_t
#endif
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define __need_unreachable
#endif
#if (defined(__STDC_VERSION__) && __STDC_VERSION__ >= 201112L) ||              \\
    (defined(__cplusplus) && __cplusplus >= 201103L)
#define __need_max_align_t
#endif
#define __need_offsetof
/* wint_t is provided by <wchar.h> and not <stddef.h>. It's here
 * for compatibility, but must be explicitly requested. Therefore
 * __need_wint_t is intentionally not defined here. */
#include <__stddef_header_macro.h>
#endif

#if defined(__need_ptrdiff_t)
#include <__stddef_ptrdiff_t.h>
#undef __need_ptrdiff_t
#endif /* defined(__need_ptrdiff_t) */

#if defined(__need_size_t)
#include <__stddef_size_t.h>
#undef __need_size_t
#endif /*defined(__need_size_t) */

#if defined(__need_rsize_t)
#include <__stddef_rsize_t.h>
#undef __need_rsize_t
#endif /* defined(__need_rsize_t) */

#if defined(__need_wchar_t)
#include <__stddef_wchar_t.h>
#undef __need_wchar_t
#endif /* defined(__need_wchar_t) */

#if defined(__need_NULL)
#include <__stddef_null.h>
#undef __need_NULL
#endif /* defined(__need_NULL) */

#if defined(__need_nullptr_t)
#include <__stddef_nullptr_t.h>
#undef __need_nullptr_t
#endif /* defined(__need_nullptr_t) */

#if defined(__need_unreachable)
#include <__stddef_unreachable.h>
#undef __need_unreachable
#endif /* defined(__need_unreachable) */

#if defined(__need_max_align_t)
#include <__stddef_max_align_t.h>
#undef __need_max_align_t
#endif /* defined(__need_max_align_t) */

#if defined(__need_offsetof)
#include <__stddef_offsetof.h>
#undef __need_offsetof
#endif /* defined(__need_offsetof) */

/* Some C libraries expect to see a wint_t here. Others (notably MinGW) will use
__WINT_TYPE__ directly; accommodate both by requiring __need_wint_t */
#if defined(__need_wint_t)
#include <__stddef_wint_t.h>
#undef __need_wint_t
#endif /* __need_wint_t */

#endif /* __MVS__ */
`,"stddefer.h":`/*===---- stddefer.h - Standard header for 'defer' -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_STDDEFER_H
#define __CLANG_STDDEFER_H

/* Provide 'defer' if '_Defer' is supported. */
#ifdef __STDC_DEFER_TS25755__
#define __STDC_VERSION_STDDEFER_H__ 202602L
#define defer _Defer
#endif

#endif /* __CLANG_STDDEFER_H */
`,"__stddef_header_macro.h":`/*===---- __stddef_header_macro.h ------------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDDEF_H
#define __STDDEF_H
#endif
`,"__stddef_max_align_t.h":`/*===---- __stddef_max_align_t.h - Definition of max_align_t ---------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __CLANG_MAX_ALIGN_T_DEFINED
#define __CLANG_MAX_ALIGN_T_DEFINED

#if defined(_MSC_VER)
typedef double max_align_t;
#elif defined(__APPLE__)
typedef long double max_align_t;
#else
// Define 'max_align_t' to match the GCC definition.
typedef struct {
  long long __clang_max_align_nonce1
      __attribute__((__aligned__(__alignof__(long long))));
  long double __clang_max_align_nonce2
      __attribute__((__aligned__(__alignof__(long double))));
} max_align_t;
#endif

#endif
`,"__stddef_null.h":`/*===---- __stddef_null.h - Definition of NULL -----------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#if !defined(NULL) || !__building_module(_Builtin_stddef)

/* linux/stddef.h will define NULL to 0. glibc (and other) headers then define
 * __need_NULL and rely on stddef.h to redefine NULL to the correct value again.
 * Modules don't support redefining macros like that, but support that pattern
 * in the non-modules case.
 */
#undef NULL

#ifdef __cplusplus
#if !defined(__MINGW32__) && !defined(_MSC_VER)
#define NULL __null
#else
#define NULL 0
#endif
#else
#define NULL ((void*)0)
#endif

#endif
`,"__stddef_nullptr_t.h":`/*===---- __stddef_nullptr_t.h - Definition of nullptr_t -------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_NULLPTR_T) ||                                                    \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _NULLPTR_T

#ifdef __cplusplus
#if defined(_MSC_EXTENSIONS) && defined(_NATIVE_NULLPTR_SUPPORTED)
namespace std {
typedef decltype(nullptr) nullptr_t;
}
using ::std::nullptr_t;
#endif
#elif defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
typedef typeof(nullptr) nullptr_t;
#endif

#endif
`,"__stddef_offsetof.h":`/*===---- __stddef_offsetof.h - Definition of offsetof ---------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(offsetof) ||                                                      \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define offsetof(t, d) __builtin_offsetof(t, d)
#endif
`,"__stddef_ptrdiff_t.h":`/*===---- __stddef_ptrdiff_t.h - Definition of ptrdiff_t -------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_PTRDIFF_T) ||                                                    \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _PTRDIFF_T

typedef __PTRDIFF_TYPE__ ptrdiff_t;

#endif
`,"__stddef_rsize_t.h":`/*===---- __stddef_rsize_t.h - Definition of rsize_t -----------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_RSIZE_T) ||                                                      \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _RSIZE_T

typedef __SIZE_TYPE__ rsize_t;

#endif
`,"__stddef_size_t.h":`/*===---- __stddef_size_t.h - Definition of size_t -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_SIZE_T) ||                                                       \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _SIZE_T

typedef __SIZE_TYPE__ size_t;

#endif
`,"__stddef_unreachable.h":`/*===---- __stddef_unreachable.h - Definition of unreachable ---------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __cplusplus

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(unreachable) ||                                                   \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define unreachable() __builtin_unreachable()
#endif

#endif
`,"__stddef_wchar_t.h":`/*===---- __stddef_wchar.h - Definition of wchar_t -------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#if !defined(__cplusplus) || (defined(_MSC_VER) && !_NATIVE_WCHAR_T_DEFINED)

/*
 * When -fbuiltin-headers-in-system-modules is set this is a non-modular header
 * and needs to behave as if it was textual.
 */
#if !defined(_WCHAR_T) ||                                                      \\
    (__has_feature(modules) && !__building_module(_Builtin_stddef))
#define _WCHAR_T

#ifdef _MSC_EXTENSIONS
#define _WCHAR_T_DEFINED
#endif

typedef __WCHAR_TYPE__ wchar_t;

#endif

#endif
`,"__stddef_wint_t.h":`/*===---- __stddef_wint.h - Definition of wint_t ---------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef _WINT_T
#define _WINT_T

typedef __WINT_TYPE__ wint_t;

#endif
`,"stdint.h":`/*===---- stdint.h - Standard header for sized integer types --------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_STDINT_H
// AIX system headers need stdint.h to be re-enterable while _STD_TYPES_T
// is defined until an inclusion of it without _STD_TYPES_T occurs, in which
// case the header guard macro is defined.
#if !defined(_AIX) || !defined(_STD_TYPES_T) || !defined(__STDC_HOSTED__)
#define __CLANG_STDINT_H
#endif

#if defined(__MVS__) && __has_include_next(<stdint.h>)
#include_next <stdint.h>
#else

/* If we're hosted, fall back to the system's stdint.h, which might have
 * additional definitions.
 */
#if __STDC_HOSTED__ && __has_include_next(<stdint.h>)

// C99 7.18.3 Limits of other integer types
//
//  Footnote 219, 220: C++ implementations should define these macros only when
//  __STDC_LIMIT_MACROS is defined before <stdint.h> is included.
//
//  Footnote 222: C++ implementations should define these macros only when
//  __STDC_CONSTANT_MACROS is defined before <stdint.h> is included.
//
// C++11 [cstdint.syn]p2:
//
//  The macros defined by <cstdint> are provided unconditionally. In particular,
//  the symbols __STDC_LIMIT_MACROS and __STDC_CONSTANT_MACROS (mentioned in
//  footnotes 219, 220, and 222 in the C standard) play no role in C++.
//
// C11 removed the problematic footnotes.
//
// Work around this inconsistency by always defining those macros in C++ mode,
// so that a C library implementation which follows the C99 standard can be
// used in C++.
# ifdef __cplusplus
#  if !defined(__STDC_LIMIT_MACROS)
#   define __STDC_LIMIT_MACROS
#   define __STDC_LIMIT_MACROS_DEFINED_BY_CLANG
#  endif
#  if !defined(__STDC_CONSTANT_MACROS)
#   define __STDC_CONSTANT_MACROS
#   define __STDC_CONSTANT_MACROS_DEFINED_BY_CLANG
#  endif
# endif

# include_next <stdint.h>

# ifdef __STDC_LIMIT_MACROS_DEFINED_BY_CLANG
#  undef __STDC_LIMIT_MACROS
#  undef __STDC_LIMIT_MACROS_DEFINED_BY_CLANG
# endif
# ifdef __STDC_CONSTANT_MACROS_DEFINED_BY_CLANG
#  undef __STDC_CONSTANT_MACROS
#  undef __STDC_CONSTANT_MACROS_DEFINED_BY_CLANG
# endif

#else

/* C99 7.18.1.1 Exact-width integer types.
 * C99 7.18.1.2 Minimum-width integer types.
 * C99 7.18.1.3 Fastest minimum-width integer types.
 *
 * The standard requires that exact-width type be defined for 8-, 16-, 32-, and
 * 64-bit types if they are implemented. Other exact width types are optional.
 * This implementation defines an exact-width types for every integer width
 * that is represented in the standard integer types.
 *
 * The standard also requires minimum-width types be defined for 8-, 16-, 32-,
 * and 64-bit widths regardless of whether there are corresponding exact-width
 * types.
 *
 * To accommodate targets that are missing types that are exactly 8, 16, 32, or
 * 64 bits wide, this implementation takes an approach of cascading
 * redefinitions, redefining __int_leastN_t to successively smaller exact-width
 * types. It is therefore important that the types are defined in order of
 * descending widths.
 *
 * We currently assume that the minimum-width types and the fastest
 * minimum-width types are the same. This is allowed by the standard, but is
 * suboptimal.
 *
 * In violation of the standard, some targets do not implement a type that is
 * wide enough to represent all of the required widths (8-, 16-, 32-, 64-bit).
 * To accommodate these targets, a required minimum-width type is only
 * defined if there exists an exact-width type of equal or greater width.
 */

#ifdef __INT64_TYPE__
# ifndef __int8_t_defined /* glibc sys/types.h also defines int64_t*/
typedef __INT64_TYPE__ int64_t;
# endif /* __int8_t_defined */
typedef __UINT64_TYPE__ uint64_t;
# undef __int_least64_t
# define __int_least64_t int64_t
# undef __uint_least64_t
# define __uint_least64_t uint64_t
# undef __int_least32_t
# define __int_least32_t int64_t
# undef __uint_least32_t
# define __uint_least32_t uint64_t
# undef __int_least16_t
# define __int_least16_t int64_t
# undef __uint_least16_t
# define __uint_least16_t uint64_t
# undef __int_least8_t
# define __int_least8_t int64_t
# undef __uint_least8_t
# define __uint_least8_t uint64_t
#endif /* __INT64_TYPE__ */

#ifdef __int_least64_t
typedef __int_least64_t int_least64_t;
typedef __uint_least64_t uint_least64_t;
typedef __int_least64_t int_fast64_t;
typedef __uint_least64_t uint_fast64_t;
#endif /* __int_least64_t */

#ifdef __INT56_TYPE__
typedef __INT56_TYPE__ int56_t;
typedef __UINT56_TYPE__ uint56_t;
typedef int56_t int_least56_t;
typedef uint56_t uint_least56_t;
typedef int56_t int_fast56_t;
typedef uint56_t uint_fast56_t;
# undef __int_least32_t
# define __int_least32_t int56_t
# undef __uint_least32_t
# define __uint_least32_t uint56_t
# undef __int_least16_t
# define __int_least16_t int56_t
# undef __uint_least16_t
# define __uint_least16_t uint56_t
# undef __int_least8_t
# define __int_least8_t int56_t
# undef __uint_least8_t
# define __uint_least8_t uint56_t
#endif /* __INT56_TYPE__ */


#ifdef __INT48_TYPE__
typedef __INT48_TYPE__ int48_t;
typedef __UINT48_TYPE__ uint48_t;
typedef int48_t int_least48_t;
typedef uint48_t uint_least48_t;
typedef int48_t int_fast48_t;
typedef uint48_t uint_fast48_t;
# undef __int_least32_t
# define __int_least32_t int48_t
# undef __uint_least32_t
# define __uint_least32_t uint48_t
# undef __int_least16_t
# define __int_least16_t int48_t
# undef __uint_least16_t
# define __uint_least16_t uint48_t
# undef __int_least8_t
# define __int_least8_t int48_t
# undef __uint_least8_t
# define __uint_least8_t uint48_t
#endif /* __INT48_TYPE__ */


#ifdef __INT40_TYPE__
typedef __INT40_TYPE__ int40_t;
typedef __UINT40_TYPE__ uint40_t;
typedef int40_t int_least40_t;
typedef uint40_t uint_least40_t;
typedef int40_t int_fast40_t;
typedef uint40_t uint_fast40_t;
# undef __int_least32_t
# define __int_least32_t int40_t
# undef __uint_least32_t
# define __uint_least32_t uint40_t
# undef __int_least16_t
# define __int_least16_t int40_t
# undef __uint_least16_t
# define __uint_least16_t uint40_t
# undef __int_least8_t
# define __int_least8_t int40_t
# undef __uint_least8_t
# define __uint_least8_t uint40_t
#endif /* __INT40_TYPE__ */


#ifdef __INT32_TYPE__

# ifndef __int8_t_defined /* glibc sys/types.h also defines int32_t*/
typedef __INT32_TYPE__ int32_t;
# endif /* __int8_t_defined */

# ifndef __uint32_t_defined  /* more glibc compatibility */
# define __uint32_t_defined
typedef __UINT32_TYPE__ uint32_t;
# endif /* __uint32_t_defined */

# undef __int_least32_t
# define __int_least32_t int32_t
# undef __uint_least32_t
# define __uint_least32_t uint32_t
# undef __int_least16_t
# define __int_least16_t int32_t
# undef __uint_least16_t
# define __uint_least16_t uint32_t
# undef __int_least8_t
# define __int_least8_t int32_t
# undef __uint_least8_t
# define __uint_least8_t uint32_t
#endif /* __INT32_TYPE__ */

#ifdef __int_least32_t
typedef __int_least32_t int_least32_t;
typedef __uint_least32_t uint_least32_t;
typedef __int_least32_t int_fast32_t;
typedef __uint_least32_t uint_fast32_t;
#endif /* __int_least32_t */

#ifdef __INT24_TYPE__
typedef __INT24_TYPE__ int24_t;
typedef __UINT24_TYPE__ uint24_t;
typedef int24_t int_least24_t;
typedef uint24_t uint_least24_t;
typedef int24_t int_fast24_t;
typedef uint24_t uint_fast24_t;
# undef __int_least16_t
# define __int_least16_t int24_t
# undef __uint_least16_t
# define __uint_least16_t uint24_t
# undef __int_least8_t
# define __int_least8_t int24_t
# undef __uint_least8_t
# define __uint_least8_t uint24_t
#endif /* __INT24_TYPE__ */

#ifdef __INT16_TYPE__
#ifndef __int8_t_defined /* glibc sys/types.h also defines int16_t*/
typedef __INT16_TYPE__ int16_t;
#endif /* __int8_t_defined */
typedef __UINT16_TYPE__ uint16_t;
# undef __int_least16_t
# define __int_least16_t int16_t
# undef __uint_least16_t
# define __uint_least16_t uint16_t
# undef __int_least8_t
# define __int_least8_t int16_t
# undef __uint_least8_t
# define __uint_least8_t uint16_t
#endif /* __INT16_TYPE__ */

#ifdef __int_least16_t
typedef __int_least16_t int_least16_t;
typedef __uint_least16_t uint_least16_t;
typedef __int_least16_t int_fast16_t;
typedef __uint_least16_t uint_fast16_t;
#endif /* __int_least16_t */


#ifdef __INT8_TYPE__
#ifndef __int8_t_defined  /* glibc sys/types.h also defines int8_t*/
typedef __INT8_TYPE__ int8_t;
#endif /* __int8_t_defined */
typedef __UINT8_TYPE__ uint8_t;
# undef __int_least8_t
# define __int_least8_t int8_t
# undef __uint_least8_t
# define __uint_least8_t uint8_t
#endif /* __INT8_TYPE__ */

#ifdef __int_least8_t
typedef __int_least8_t int_least8_t;
typedef __uint_least8_t uint_least8_t;
typedef __int_least8_t int_fast8_t;
typedef __uint_least8_t uint_fast8_t;
#endif /* __int_least8_t */

/* prevent glibc sys/types.h from defining conflicting types */
#ifndef __int8_t_defined
# define __int8_t_defined
#endif /* __int8_t_defined */

/* C99 7.18.1.4 Integer types capable of holding object pointers.
 */
#define __stdint_join3(a,b,c) a ## b ## c

#ifndef _INTPTR_T
#ifndef __intptr_t_defined
typedef __INTPTR_TYPE__ intptr_t;
#define __intptr_t_defined
#define _INTPTR_T
#endif
#endif

#ifndef _UINTPTR_T
typedef __UINTPTR_TYPE__ uintptr_t;
#define _UINTPTR_T
#endif

/* C99 7.18.1.5 Greatest-width integer types.
 */
typedef __INTMAX_TYPE__  intmax_t;
typedef __UINTMAX_TYPE__ uintmax_t;

/* C99 7.18.4 Macros for minimum-width integer constants.
 *
 * The standard requires that integer constant macros be defined for all the
 * minimum-width types defined above. As 8-, 16-, 32-, and 64-bit minimum-width
 * types are required, the corresponding integer constant macros are defined
 * here. This implementation also defines minimum-width types for every other
 * integer width that the target implements, so corresponding macros are
 * defined below, too.
 *
 * Note that C++ should not check __STDC_CONSTANT_MACROS here, contrary to the
 * claims of the C standard (see C++ 18.3.1p2, [cstdint.syn]).
 */

#ifdef __int_least64_t
#define INT64_C(v) __INT64_C(v)
#define UINT64_C(v) __UINT64_C(v)
#endif /* __int_least64_t */


#ifdef __INT56_TYPE__
#define INT56_C(v) __INT56_C(v)
#define UINT56_C(v) __UINT56_C(v)
#endif /* __INT56_TYPE__ */


#ifdef __INT48_TYPE__
#define INT48_C(v) __INT48_C(v)
#define UINT48_C(v) __UINT48_C(v)
#endif /* __INT48_TYPE__ */


#ifdef __INT40_TYPE__
#define INT40_C(v) __INT40_C(v)
#define UINT40_C(v) __UINT40_C(v)
#endif /* __INT40_TYPE__ */


#ifdef __int_least32_t
#define INT32_C(v) __INT32_C(v)
#define UINT32_C(v) __UINT32_C(v)
#endif /* __int_least32_t */


#ifdef __INT24_TYPE__
#define INT24_C(v) __INT24_C(v)
#define UINT24_C(v) __UINT24_C(v)
#endif /* __INT24_TYPE__ */


#ifdef __int_least16_t
#define INT16_C(v) __INT16_C(v)
#define UINT16_C(v) __UINT16_C(v)
#endif /* __int_least16_t */


#ifdef __int_least8_t
#define INT8_C(v) __INT8_C(v)
#define UINT8_C(v) __UINT8_C(v)
#endif /* __int_least8_t */


/* C99 7.18.2.1 Limits of exact-width integer types.
 * C99 7.18.2.2 Limits of minimum-width integer types.
 * C99 7.18.2.3 Limits of fastest minimum-width integer types.
 *
 * The presence of limit macros are completely optional in C99.  This
 * implementation defines limits for all of the types (exact- and
 * minimum-width) that it defines above, using the limits of the minimum-width
 * type for any types that do not have exact-width representations.
 *
 * As in the type definitions, this section takes an approach of
 * successive-shrinking to determine which limits to use for the standard (8,
 * 16, 32, 64) bit widths when they don't have exact representations. It is
 * therefore important that the definitions be kept in order of decending
 * widths.
 *
 * Note that C++ should not check __STDC_LIMIT_MACROS here, contrary to the
 * claims of the C standard (see C++ 18.3.1p2, [cstdint.syn]).
 */

#ifdef __INT64_TYPE__
# define INT64_MAX           INT64_C( 9223372036854775807)
# define INT64_MIN         (-INT64_C( 9223372036854775807)-1)
# define UINT64_MAX         UINT64_C(18446744073709551615)

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT64_WIDTH         64
# define INT64_WIDTH          UINT64_WIDTH

# define __UINT_LEAST64_WIDTH UINT64_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT64_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT64_WIDTH
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX UINT64_MAX
#endif /* __STDC_VERSION__ */

# define __INT_LEAST64_MIN   INT64_MIN
# define __INT_LEAST64_MAX   INT64_MAX
# define __UINT_LEAST64_MAX UINT64_MAX
# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT64_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT64_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT64_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT64_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT64_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT64_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT64_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT64_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT64_MAX
#endif /* __INT64_TYPE__ */

#ifdef __INT_LEAST64_MIN
# define INT_LEAST64_MIN   __INT_LEAST64_MIN
# define INT_LEAST64_MAX   __INT_LEAST64_MAX
# define UINT_LEAST64_MAX __UINT_LEAST64_MAX
# define INT_FAST64_MIN    __INT_LEAST64_MIN
# define INT_FAST64_MAX    __INT_LEAST64_MAX
# define UINT_FAST64_MAX  __UINT_LEAST64_MAX

#if defined(__STDC_VERSION__) &&  __STDC_VERSION__ >= 202311L
# define UINT_LEAST64_WIDTH __UINT_LEAST64_WIDTH
# define INT_LEAST64_WIDTH  UINT_LEAST64_WIDTH
# define UINT_FAST64_WIDTH  __UINT_LEAST64_WIDTH
# define INT_FAST64_WIDTH   UINT_FAST64_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST64_MIN */


#ifdef __INT56_TYPE__
# define INT56_MAX           INT56_C(36028797018963967)
# define INT56_MIN         (-INT56_C(36028797018963967)-1)
# define UINT56_MAX         UINT56_C(72057594037927935)
# define INT_LEAST56_MIN     INT56_MIN
# define INT_LEAST56_MAX     INT56_MAX
# define UINT_LEAST56_MAX   UINT56_MAX
# define INT_FAST56_MIN      INT56_MIN
# define INT_FAST56_MAX      INT56_MAX
# define UINT_FAST56_MAX    UINT56_MAX

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT56_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT56_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT56_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT56_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT56_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT56_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT56_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT56_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT56_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT56_WIDTH         56
# define INT56_WIDTH          UINT56_WIDTH
# define UINT_LEAST56_WIDTH   UINT56_WIDTH
# define INT_LEAST56_WIDTH    UINT_LEAST56_WIDTH
# define UINT_FAST56_WIDTH    UINT56_WIDTH
# define INT_FAST56_WIDTH     UINT_FAST56_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT56_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT56_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT56_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT56_TYPE__ */


#ifdef __INT48_TYPE__
# define INT48_MAX           INT48_C(140737488355327)
# define INT48_MIN         (-INT48_C(140737488355327)-1)
# define UINT48_MAX         UINT48_C(281474976710655)
# define INT_LEAST48_MIN     INT48_MIN
# define INT_LEAST48_MAX     INT48_MAX
# define UINT_LEAST48_MAX   UINT48_MAX
# define INT_FAST48_MIN      INT48_MIN
# define INT_FAST48_MAX      INT48_MAX
# define UINT_FAST48_MAX    UINT48_MAX

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT48_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT48_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT48_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT48_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT48_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT48_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT48_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT48_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT48_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define UINT48_WIDTH         48
#define INT48_WIDTH          UINT48_WIDTH
#define UINT_LEAST48_WIDTH   UINT48_WIDTH
#define INT_LEAST48_WIDTH    UINT_LEAST48_WIDTH
#define UINT_FAST48_WIDTH    UINT48_WIDTH
#define INT_FAST48_WIDTH     UINT_FAST48_WIDTH
#undef __UINT_LEAST32_WIDTH
#define __UINT_LEAST32_WIDTH UINT48_WIDTH
# undef __UINT_LEAST16_WIDTH
#define __UINT_LEAST16_WIDTH UINT48_WIDTH
# undef __UINT_LEAST8_WIDTH
#define __UINT_LEAST8_WIDTH  UINT48_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT48_TYPE__ */


#ifdef __INT40_TYPE__
# define INT40_MAX           INT40_C(549755813887)
# define INT40_MIN         (-INT40_C(549755813887)-1)
# define UINT40_MAX         UINT40_C(1099511627775)
# define INT_LEAST40_MIN     INT40_MIN
# define INT_LEAST40_MAX     INT40_MAX
# define UINT_LEAST40_MAX   UINT40_MAX
# define INT_FAST40_MIN      INT40_MIN
# define INT_FAST40_MAX      INT40_MAX
# define UINT_FAST40_MAX    UINT40_MAX

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT40_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT40_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT40_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT40_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT40_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT40_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT40_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT40_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT40_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT40_WIDTH         40
# define INT40_WIDTH          UINT40_WIDTH
# define UINT_LEAST40_WIDTH   UINT40_WIDTH
# define INT_LEAST40_WIDTH    UINT_LEAST40_WIDTH
# define UINT_FAST40_WIDTH    UINT40_WIDTH
# define INT_FAST40_WIDTH     UINT_FAST40_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT40_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT40_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT40_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT40_TYPE__ */


#ifdef __INT32_TYPE__
# define INT32_MAX           INT32_C(2147483647)
# define INT32_MIN         (-INT32_C(2147483647)-1)
# define UINT32_MAX         UINT32_C(4294967295)

# undef __INT_LEAST32_MIN
# define __INT_LEAST32_MIN   INT32_MIN
# undef __INT_LEAST32_MAX
# define __INT_LEAST32_MAX   INT32_MAX
# undef __UINT_LEAST32_MAX
# define __UINT_LEAST32_MAX UINT32_MAX
# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT32_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT32_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT32_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT32_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT32_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT32_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT32_WIDTH         32
# define INT32_WIDTH          UINT32_WIDTH
# undef __UINT_LEAST32_WIDTH
# define __UINT_LEAST32_WIDTH UINT32_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT32_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT32_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT32_TYPE__ */

#ifdef __INT_LEAST32_MIN
# define INT_LEAST32_MIN   __INT_LEAST32_MIN
# define INT_LEAST32_MAX   __INT_LEAST32_MAX
# define UINT_LEAST32_MAX __UINT_LEAST32_MAX
# define INT_FAST32_MIN    __INT_LEAST32_MIN
# define INT_FAST32_MAX    __INT_LEAST32_MAX
# define UINT_FAST32_MAX  __UINT_LEAST32_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT_LEAST32_WIDTH __UINT_LEAST32_WIDTH
# define INT_LEAST32_WIDTH  UINT_LEAST32_WIDTH
# define UINT_FAST32_WIDTH  __UINT_LEAST32_WIDTH
# define INT_FAST32_WIDTH   UINT_FAST32_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST32_MIN */


#ifdef __INT24_TYPE__
# define INT24_MAX           INT24_C(8388607)
# define INT24_MIN         (-INT24_C(8388607)-1)
# define UINT24_MAX         UINT24_C(16777215)
# define INT_LEAST24_MIN     INT24_MIN
# define INT_LEAST24_MAX     INT24_MAX
# define UINT_LEAST24_MAX   UINT24_MAX
# define INT_FAST24_MIN      INT24_MIN
# define INT_FAST24_MAX      INT24_MAX
# define UINT_FAST24_MAX    UINT24_MAX

# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT24_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT24_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT24_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT24_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT24_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT24_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT24_WIDTH         24
# define INT24_WIDTH          UINT24_WIDTH
# define UINT_LEAST24_WIDTH   UINT24_WIDTH
# define INT_LEAST24_WIDTH    UINT_LEAST24_WIDTH
# define UINT_FAST24_WIDTH    UINT24_WIDTH
# define INT_FAST24_WIDTH     UINT_FAST24_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT24_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT24_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT24_TYPE__ */


#ifdef __INT16_TYPE__
#define INT16_MAX            INT16_C(32767)
#define INT16_MIN          (-INT16_C(32767)-1)
#define UINT16_MAX          UINT16_C(65535)

# undef __INT_LEAST16_MIN
# define __INT_LEAST16_MIN   INT16_MIN
# undef __INT_LEAST16_MAX
# define __INT_LEAST16_MAX   INT16_MAX
# undef __UINT_LEAST16_MAX
# define __UINT_LEAST16_MAX UINT16_MAX
# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT16_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT16_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT16_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT16_WIDTH         16
# define INT16_WIDTH          UINT16_WIDTH
# undef __UINT_LEAST16_WIDTH
# define __UINT_LEAST16_WIDTH UINT16_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH  UINT16_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT16_TYPE__ */

#ifdef __INT_LEAST16_MIN
# define INT_LEAST16_MIN   __INT_LEAST16_MIN
# define INT_LEAST16_MAX   __INT_LEAST16_MAX
# define UINT_LEAST16_MAX __UINT_LEAST16_MAX
# define INT_FAST16_MIN    __INT_LEAST16_MIN
# define INT_FAST16_MAX    __INT_LEAST16_MAX
# define UINT_FAST16_MAX  __UINT_LEAST16_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT_LEAST16_WIDTH __UINT_LEAST16_WIDTH
# define INT_LEAST16_WIDTH  UINT_LEAST16_WIDTH
# define UINT_FAST16_WIDTH  __UINT_LEAST16_WIDTH
# define INT_FAST16_WIDTH   UINT_FAST16_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST16_MIN */


#ifdef __INT8_TYPE__
# define INT8_MAX            INT8_C(127)
# define INT8_MIN          (-INT8_C(127)-1)
# define UINT8_MAX          UINT8_C(255)

# undef __INT_LEAST8_MIN
# define __INT_LEAST8_MIN    INT8_MIN
# undef __INT_LEAST8_MAX
# define __INT_LEAST8_MAX    INT8_MAX
# undef __UINT_LEAST8_MAX
# define __UINT_LEAST8_MAX  UINT8_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT8_WIDTH         8
# define INT8_WIDTH          UINT8_WIDTH
# undef __UINT_LEAST8_WIDTH
# define __UINT_LEAST8_WIDTH UINT8_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT8_TYPE__ */

#ifdef __INT_LEAST8_MIN
# define INT_LEAST8_MIN   __INT_LEAST8_MIN
# define INT_LEAST8_MAX   __INT_LEAST8_MAX
# define UINT_LEAST8_MAX __UINT_LEAST8_MAX
# define INT_FAST8_MIN    __INT_LEAST8_MIN
# define INT_FAST8_MAX    __INT_LEAST8_MAX
# define UINT_FAST8_MAX  __UINT_LEAST8_MAX

#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
# define UINT_LEAST8_WIDTH __UINT_LEAST8_WIDTH
# define INT_LEAST8_WIDTH  UINT_LEAST8_WIDTH
# define UINT_FAST8_WIDTH  __UINT_LEAST8_WIDTH
# define INT_FAST8_WIDTH   UINT_FAST8_WIDTH
#endif /* __STDC_VERSION__ */
#endif /* __INT_LEAST8_MIN */

/* Some utility macros */
#define  __INTN_MIN(n)  __stdint_join3( INT, n, _MIN)
#define  __INTN_MAX(n)  __stdint_join3( INT, n, _MAX)
#define __UINTN_MAX(n)  __stdint_join3(UINT, n, _MAX)
#define  __INTN_C(n, v) __stdint_join3( INT, n, _C(v))
#define __UINTN_C(n, v) __stdint_join3(UINT, n, _C(v))

/* C99 7.18.2.4 Limits of integer types capable of holding object pointers. */
/* C99 7.18.3 Limits of other integer types. */

#define  INTPTR_MIN  (-__INTPTR_MAX__-1)
#define  INTPTR_MAX    __INTPTR_MAX__
#define UINTPTR_MAX   __UINTPTR_MAX__
#define PTRDIFF_MIN (-__PTRDIFF_MAX__-1)
#define PTRDIFF_MAX   __PTRDIFF_MAX__
#define    SIZE_MAX      __SIZE_MAX__

/* C23 7.22.2.4 Width of integer types capable of holding object pointers. */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
/* NB: The C standard requires that these be the same value, but the compiler
   exposes separate internal width macros. */
#define INTPTR_WIDTH  __INTPTR_WIDTH__
#define UINTPTR_WIDTH __UINTPTR_WIDTH__
#endif

/* ISO9899:2011 7.20 (C11 Annex K): Define RSIZE_MAX if __STDC_WANT_LIB_EXT1__
 * is enabled. */
#if defined(__STDC_WANT_LIB_EXT1__) && __STDC_WANT_LIB_EXT1__ >= 1
#define   RSIZE_MAX            (SIZE_MAX >> 1)
#endif

/* C99 7.18.2.5 Limits of greatest-width integer types. */
#define  INTMAX_MIN (-__INTMAX_MAX__-1)
#define  INTMAX_MAX   __INTMAX_MAX__
#define UINTMAX_MAX  __UINTMAX_MAX__

/* C23 7.22.2.5 Width of greatest-width integer types. */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
/* NB: The C standard requires that these be the same value, but the compiler
   exposes separate internal width macros. */
#define INTMAX_WIDTH __INTMAX_WIDTH__
#define UINTMAX_WIDTH __UINTMAX_WIDTH__
#endif

/* C99 7.18.3 Limits of other integer types. */
#define SIG_ATOMIC_MIN __INTN_MIN(__SIG_ATOMIC_WIDTH__)
#define SIG_ATOMIC_MAX __INTN_MAX(__SIG_ATOMIC_WIDTH__)
#ifdef __WINT_UNSIGNED__
# define WINT_MIN       __UINTN_C(__WINT_WIDTH__, 0)
# define WINT_MAX       __UINTN_MAX(__WINT_WIDTH__)
#else
# define WINT_MIN       __INTN_MIN(__WINT_WIDTH__)
# define WINT_MAX       __INTN_MAX(__WINT_WIDTH__)
#endif

#ifndef WCHAR_MAX
# define WCHAR_MAX __WCHAR_MAX__
#endif
#ifndef WCHAR_MIN
# if __WCHAR_MAX__ == __INTN_MAX(__WCHAR_WIDTH__)
#  define WCHAR_MIN __INTN_MIN(__WCHAR_WIDTH__)
# else
#  define WCHAR_MIN __UINTN_C(__WCHAR_WIDTH__, 0)
# endif
#endif

/* 7.18.4.2 Macros for greatest-width integer constants. */
#define  INTMAX_C(v) __INTMAX_C(v)
#define UINTMAX_C(v) __UINTMAX_C(v)

/* C23 7.22.3.x Width of other integer types. */
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L
#define PTRDIFF_WIDTH    __PTRDIFF_WIDTH__
#define SIG_ATOMIC_WIDTH __SIG_ATOMIC_WIDTH__
#define SIZE_WIDTH       __SIZE_WIDTH__
#define WCHAR_WIDTH      __WCHAR_WIDTH__
#define WINT_WIDTH       __WINT_WIDTH__
#endif

#endif /* __STDC_HOSTED__ */
#endif /* __MVS__ */
#endif /* __CLANG_STDINT_H */
`,"stdnoreturn.h":`/*===---- stdnoreturn.h - Standard header for noreturn macro ---------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __STDNORETURN_H
#define __STDNORETURN_H

#if defined(__MVS__) && __has_include_next(<stdnoreturn.h>)
#include_next <stdnoreturn.h>
#else

#define noreturn _Noreturn
#define __noreturn_is_defined 1

#endif /* __MVS__ */

#if (defined(__STDC_VERSION__) && __STDC_VERSION__ > 201710L) &&               \\
    !defined(_CLANG_DISABLE_CRT_DEPRECATION_WARNINGS)
/* The noreturn macro is deprecated in C23. We do not mark it as such because
   including the header file in C23 is also deprecated and we do not want to
   issue a confusing diagnostic for code which includes <stdnoreturn.h>
   followed by code that writes [[noreturn]]. The issue with such code is not
   with the attribute, or the use of 'noreturn', but the inclusion of the
   header. */
/* FIXME: We should be issuing a deprecation warning here, but cannot yet due
 * to system headers which include this header file unconditionally.
 */
#endif

#endif /* __STDNORETURN_H */
`,"tgmath.h":`/*===---- tgmath.h - Standard header for type generic math ----------------===*\\
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
\\*===----------------------------------------------------------------------===*/

#ifndef __CLANG_TGMATH_H
#define __CLANG_TGMATH_H

/* C99 7.22 Type-generic math <tgmath.h>. */
#include <math.h>

/*
 * Allow additional definitions and implementation-defined values on Apple
 * platforms. This is done after #include <math.h> to avoid depcycle conflicts
 * between libcxx and darwin in C++ modules builds.
 */
#if defined(__APPLE__) && __STDC_HOSTED__ && __has_include_next(<tgmath.h>)
#  include_next <tgmath.h>
#else

/* C++ handles type genericity with overloading in math.h. */
#ifndef __cplusplus
#include <complex.h>

#define _TG_ATTRSp __attribute__((__overloadable__))
#define _TG_ATTRS __attribute__((__overloadable__, __always_inline__))

// promotion

typedef void _Argument_type_is_not_arithmetic;
static _Argument_type_is_not_arithmetic __tg_promote(...)
  __attribute__((__unavailable__,__overloadable__));
static double               _TG_ATTRSp __tg_promote(int);
static double               _TG_ATTRSp __tg_promote(unsigned int);
static double               _TG_ATTRSp __tg_promote(long);
static double               _TG_ATTRSp __tg_promote(unsigned long);
static double               _TG_ATTRSp __tg_promote(long long);
static double               _TG_ATTRSp __tg_promote(unsigned long long);
static float                _TG_ATTRSp __tg_promote(float);
static double               _TG_ATTRSp __tg_promote(double);
static long double          _TG_ATTRSp __tg_promote(long double);
static float _Complex       _TG_ATTRSp __tg_promote(float _Complex);
static double _Complex      _TG_ATTRSp __tg_promote(double _Complex);
static long double _Complex _TG_ATTRSp __tg_promote(long double _Complex);

#define __tg_promote1(__x)           (__typeof__(__tg_promote(__x)))
#define __tg_promote2(__x, __y)      (__typeof__(__tg_promote(__x) + \\
                                                 __tg_promote(__y)))
#define __tg_promote3(__x, __y, __z) (__typeof__(__tg_promote(__x) + \\
                                                 __tg_promote(__y) + \\
                                                 __tg_promote(__z)))

// acos

static float
    _TG_ATTRS
    __tg_acos(float __x) {return acosf(__x);}

static double
    _TG_ATTRS
    __tg_acos(double __x) {return acos(__x);}

static long double
    _TG_ATTRS
    __tg_acos(long double __x) {return acosl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_acos(float _Complex __x) {return cacosf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_acos(double _Complex __x) {return cacos(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_acos(long double _Complex __x) {return cacosl(__x);}

#undef acos
#define acos(__x) __tg_acos(__tg_promote1((__x))(__x))

// asin

static float
    _TG_ATTRS
    __tg_asin(float __x) {return asinf(__x);}

static double
    _TG_ATTRS
    __tg_asin(double __x) {return asin(__x);}

static long double
    _TG_ATTRS
    __tg_asin(long double __x) {return asinl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_asin(float _Complex __x) {return casinf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_asin(double _Complex __x) {return casin(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_asin(long double _Complex __x) {return casinl(__x);}

#undef asin
#define asin(__x) __tg_asin(__tg_promote1((__x))(__x))

// atan

static float
    _TG_ATTRS
    __tg_atan(float __x) {return atanf(__x);}

static double
    _TG_ATTRS
    __tg_atan(double __x) {return atan(__x);}

static long double
    _TG_ATTRS
    __tg_atan(long double __x) {return atanl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_atan(float _Complex __x) {return catanf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_atan(double _Complex __x) {return catan(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_atan(long double _Complex __x) {return catanl(__x);}

#undef atan
#define atan(__x) __tg_atan(__tg_promote1((__x))(__x))

// acosh

static float
    _TG_ATTRS
    __tg_acosh(float __x) {return acoshf(__x);}

static double
    _TG_ATTRS
    __tg_acosh(double __x) {return acosh(__x);}

static long double
    _TG_ATTRS
    __tg_acosh(long double __x) {return acoshl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_acosh(float _Complex __x) {return cacoshf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_acosh(double _Complex __x) {return cacosh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_acosh(long double _Complex __x) {return cacoshl(__x);}

#undef acosh
#define acosh(__x) __tg_acosh(__tg_promote1((__x))(__x))

// asinh

static float
    _TG_ATTRS
    __tg_asinh(float __x) {return asinhf(__x);}

static double
    _TG_ATTRS
    __tg_asinh(double __x) {return asinh(__x);}

static long double
    _TG_ATTRS
    __tg_asinh(long double __x) {return asinhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_asinh(float _Complex __x) {return casinhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_asinh(double _Complex __x) {return casinh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_asinh(long double _Complex __x) {return casinhl(__x);}

#undef asinh
#define asinh(__x) __tg_asinh(__tg_promote1((__x))(__x))

// atanh

static float
    _TG_ATTRS
    __tg_atanh(float __x) {return atanhf(__x);}

static double
    _TG_ATTRS
    __tg_atanh(double __x) {return atanh(__x);}

static long double
    _TG_ATTRS
    __tg_atanh(long double __x) {return atanhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_atanh(float _Complex __x) {return catanhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_atanh(double _Complex __x) {return catanh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_atanh(long double _Complex __x) {return catanhl(__x);}

#undef atanh
#define atanh(__x) __tg_atanh(__tg_promote1((__x))(__x))

// cos

static float
    _TG_ATTRS
    __tg_cos(float __x) {return cosf(__x);}

static double
    _TG_ATTRS
    __tg_cos(double __x) {return cos(__x);}

static long double
    _TG_ATTRS
    __tg_cos(long double __x) {return cosl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_cos(float _Complex __x) {return ccosf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cos(double _Complex __x) {return ccos(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cos(long double _Complex __x) {return ccosl(__x);}

#undef cos
#define cos(__x) __tg_cos(__tg_promote1((__x))(__x))

// sin

static float
    _TG_ATTRS
    __tg_sin(float __x) {return sinf(__x);}

static double
    _TG_ATTRS
    __tg_sin(double __x) {return sin(__x);}

static long double
    _TG_ATTRS
    __tg_sin(long double __x) {return sinl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_sin(float _Complex __x) {return csinf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_sin(double _Complex __x) {return csin(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_sin(long double _Complex __x) {return csinl(__x);}

#undef sin
#define sin(__x) __tg_sin(__tg_promote1((__x))(__x))

// tan

static float
    _TG_ATTRS
    __tg_tan(float __x) {return tanf(__x);}

static double
    _TG_ATTRS
    __tg_tan(double __x) {return tan(__x);}

static long double
    _TG_ATTRS
    __tg_tan(long double __x) {return tanl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_tan(float _Complex __x) {return ctanf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_tan(double _Complex __x) {return ctan(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_tan(long double _Complex __x) {return ctanl(__x);}

#undef tan
#define tan(__x) __tg_tan(__tg_promote1((__x))(__x))

// cosh

static float
    _TG_ATTRS
    __tg_cosh(float __x) {return coshf(__x);}

static double
    _TG_ATTRS
    __tg_cosh(double __x) {return cosh(__x);}

static long double
    _TG_ATTRS
    __tg_cosh(long double __x) {return coshl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_cosh(float _Complex __x) {return ccoshf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cosh(double _Complex __x) {return ccosh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cosh(long double _Complex __x) {return ccoshl(__x);}

#undef cosh
#define cosh(__x) __tg_cosh(__tg_promote1((__x))(__x))

// sinh

static float
    _TG_ATTRS
    __tg_sinh(float __x) {return sinhf(__x);}

static double
    _TG_ATTRS
    __tg_sinh(double __x) {return sinh(__x);}

static long double
    _TG_ATTRS
    __tg_sinh(long double __x) {return sinhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_sinh(float _Complex __x) {return csinhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_sinh(double _Complex __x) {return csinh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_sinh(long double _Complex __x) {return csinhl(__x);}

#undef sinh
#define sinh(__x) __tg_sinh(__tg_promote1((__x))(__x))

// tanh

static float
    _TG_ATTRS
    __tg_tanh(float __x) {return tanhf(__x);}

static double
    _TG_ATTRS
    __tg_tanh(double __x) {return tanh(__x);}

static long double
    _TG_ATTRS
    __tg_tanh(long double __x) {return tanhl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_tanh(float _Complex __x) {return ctanhf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_tanh(double _Complex __x) {return ctanh(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_tanh(long double _Complex __x) {return ctanhl(__x);}

#undef tanh
#define tanh(__x) __tg_tanh(__tg_promote1((__x))(__x))

// exp

static float
    _TG_ATTRS
    __tg_exp(float __x) {return expf(__x);}

static double
    _TG_ATTRS
    __tg_exp(double __x) {return exp(__x);}

static long double
    _TG_ATTRS
    __tg_exp(long double __x) {return expl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_exp(float _Complex __x) {return cexpf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_exp(double _Complex __x) {return cexp(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_exp(long double _Complex __x) {return cexpl(__x);}

#undef exp
#define exp(__x) __tg_exp(__tg_promote1((__x))(__x))

// log

static float
    _TG_ATTRS
    __tg_log(float __x) {return logf(__x);}

static double
    _TG_ATTRS
    __tg_log(double __x) {return log(__x);}

static long double
    _TG_ATTRS
    __tg_log(long double __x) {return logl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_log(float _Complex __x) {return clogf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_log(double _Complex __x) {return clog(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_log(long double _Complex __x) {return clogl(__x);}

#undef log
#define log(__x) __tg_log(__tg_promote1((__x))(__x))

// pow

static float
    _TG_ATTRS
    __tg_pow(float __x, float __y) {return powf(__x, __y);}

static double
    _TG_ATTRS
    __tg_pow(double __x, double __y) {return pow(__x, __y);}

static long double
    _TG_ATTRS
    __tg_pow(long double __x, long double __y) {return powl(__x, __y);}

static float _Complex
    _TG_ATTRS
    __tg_pow(float _Complex __x, float _Complex __y) {return cpowf(__x, __y);}

static double _Complex
    _TG_ATTRS
    __tg_pow(double _Complex __x, double _Complex __y) {return cpow(__x, __y);}

static long double _Complex
    _TG_ATTRS
    __tg_pow(long double _Complex __x, long double _Complex __y)
    {return cpowl(__x, __y);}

#undef pow
#define pow(__x, __y) __tg_pow(__tg_promote2((__x), (__y))(__x), \\
                               __tg_promote2((__x), (__y))(__y))

// sqrt

static float
    _TG_ATTRS
    __tg_sqrt(float __x) {return sqrtf(__x);}

static double
    _TG_ATTRS
    __tg_sqrt(double __x) {return sqrt(__x);}

static long double
    _TG_ATTRS
    __tg_sqrt(long double __x) {return sqrtl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_sqrt(float _Complex __x) {return csqrtf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_sqrt(double _Complex __x) {return csqrt(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_sqrt(long double _Complex __x) {return csqrtl(__x);}

#undef sqrt
#define sqrt(__x) __tg_sqrt(__tg_promote1((__x))(__x))

// fabs

static float
    _TG_ATTRS
    __tg_fabs(float __x) {return fabsf(__x);}

static double
    _TG_ATTRS
    __tg_fabs(double __x) {return fabs(__x);}

static long double
    _TG_ATTRS
    __tg_fabs(long double __x) {return fabsl(__x);}

static float
    _TG_ATTRS
    __tg_fabs(float _Complex __x) {return cabsf(__x);}

static double
    _TG_ATTRS
    __tg_fabs(double _Complex __x) {return cabs(__x);}

static long double
    _TG_ATTRS
    __tg_fabs(long double _Complex __x) {return cabsl(__x);}

#undef fabs
#define fabs(__x) __tg_fabs(__tg_promote1((__x))(__x))

// atan2

static float
    _TG_ATTRS
    __tg_atan2(float __x, float __y) {return atan2f(__x, __y);}

static double
    _TG_ATTRS
    __tg_atan2(double __x, double __y) {return atan2(__x, __y);}

static long double
    _TG_ATTRS
    __tg_atan2(long double __x, long double __y) {return atan2l(__x, __y);}

#undef atan2
#define atan2(__x, __y) __tg_atan2(__tg_promote2((__x), (__y))(__x), \\
                                   __tg_promote2((__x), (__y))(__y))

// cbrt

static float
    _TG_ATTRS
    __tg_cbrt(float __x) {return cbrtf(__x);}

static double
    _TG_ATTRS
    __tg_cbrt(double __x) {return cbrt(__x);}

static long double
    _TG_ATTRS
    __tg_cbrt(long double __x) {return cbrtl(__x);}

#undef cbrt
#define cbrt(__x) __tg_cbrt(__tg_promote1((__x))(__x))

// ceil

static float
    _TG_ATTRS
    __tg_ceil(float __x) {return ceilf(__x);}

static double
    _TG_ATTRS
    __tg_ceil(double __x) {return ceil(__x);}

static long double
    _TG_ATTRS
    __tg_ceil(long double __x) {return ceill(__x);}

#undef ceil
#define ceil(__x) __tg_ceil(__tg_promote1((__x))(__x))

// copysign

static float
    _TG_ATTRS
    __tg_copysign(float __x, float __y) {return copysignf(__x, __y);}

static double
    _TG_ATTRS
    __tg_copysign(double __x, double __y) {return copysign(__x, __y);}

static long double
    _TG_ATTRS
    __tg_copysign(long double __x, long double __y) {return copysignl(__x, __y);}

#undef copysign
#define copysign(__x, __y) __tg_copysign(__tg_promote2((__x), (__y))(__x), \\
                                         __tg_promote2((__x), (__y))(__y))

// erf

static float
    _TG_ATTRS
    __tg_erf(float __x) {return erff(__x);}

static double
    _TG_ATTRS
    __tg_erf(double __x) {return erf(__x);}

static long double
    _TG_ATTRS
    __tg_erf(long double __x) {return erfl(__x);}

#undef erf
#define erf(__x) __tg_erf(__tg_promote1((__x))(__x))

// erfc

static float
    _TG_ATTRS
    __tg_erfc(float __x) {return erfcf(__x);}

static double
    _TG_ATTRS
    __tg_erfc(double __x) {return erfc(__x);}

static long double
    _TG_ATTRS
    __tg_erfc(long double __x) {return erfcl(__x);}

#undef erfc
#define erfc(__x) __tg_erfc(__tg_promote1((__x))(__x))

// exp2

static float
    _TG_ATTRS
    __tg_exp2(float __x) {return exp2f(__x);}

static double
    _TG_ATTRS
    __tg_exp2(double __x) {return exp2(__x);}

static long double
    _TG_ATTRS
    __tg_exp2(long double __x) {return exp2l(__x);}

#undef exp2
#define exp2(__x) __tg_exp2(__tg_promote1((__x))(__x))

// expm1

static float
    _TG_ATTRS
    __tg_expm1(float __x) {return expm1f(__x);}

static double
    _TG_ATTRS
    __tg_expm1(double __x) {return expm1(__x);}

static long double
    _TG_ATTRS
    __tg_expm1(long double __x) {return expm1l(__x);}

#undef expm1
#define expm1(__x) __tg_expm1(__tg_promote1((__x))(__x))

// fdim

static float
    _TG_ATTRS
    __tg_fdim(float __x, float __y) {return fdimf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fdim(double __x, double __y) {return fdim(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fdim(long double __x, long double __y) {return fdiml(__x, __y);}

#undef fdim
#define fdim(__x, __y) __tg_fdim(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// floor

static float
    _TG_ATTRS
    __tg_floor(float __x) {return floorf(__x);}

static double
    _TG_ATTRS
    __tg_floor(double __x) {return floor(__x);}

static long double
    _TG_ATTRS
    __tg_floor(long double __x) {return floorl(__x);}

#undef floor
#define floor(__x) __tg_floor(__tg_promote1((__x))(__x))

// fma

static float
    _TG_ATTRS
    __tg_fma(float __x, float __y, float __z)
    {return fmaf(__x, __y, __z);}

static double
    _TG_ATTRS
    __tg_fma(double __x, double __y, double __z)
    {return fma(__x, __y, __z);}

static long double
    _TG_ATTRS
    __tg_fma(long double __x,long double __y, long double __z)
    {return fmal(__x, __y, __z);}

#undef fma
#define fma(__x, __y, __z)                                \\
        __tg_fma(__tg_promote3((__x), (__y), (__z))(__x), \\
                 __tg_promote3((__x), (__y), (__z))(__y), \\
                 __tg_promote3((__x), (__y), (__z))(__z))

// fmax

static float
    _TG_ATTRS
    __tg_fmax(float __x, float __y) {return fmaxf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fmax(double __x, double __y) {return fmax(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fmax(long double __x, long double __y) {return fmaxl(__x, __y);}

#undef fmax
#define fmax(__x, __y) __tg_fmax(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// fmin

static float
    _TG_ATTRS
    __tg_fmin(float __x, float __y) {return fminf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fmin(double __x, double __y) {return fmin(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fmin(long double __x, long double __y) {return fminl(__x, __y);}

#undef fmin
#define fmin(__x, __y) __tg_fmin(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// fmod

static float
    _TG_ATTRS
    __tg_fmod(float __x, float __y) {return fmodf(__x, __y);}

static double
    _TG_ATTRS
    __tg_fmod(double __x, double __y) {return fmod(__x, __y);}

static long double
    _TG_ATTRS
    __tg_fmod(long double __x, long double __y) {return fmodl(__x, __y);}

#undef fmod
#define fmod(__x, __y) __tg_fmod(__tg_promote2((__x), (__y))(__x), \\
                                 __tg_promote2((__x), (__y))(__y))

// frexp

static float
    _TG_ATTRS
    __tg_frexp(float __x, int* __y) {return frexpf(__x, __y);}

static double
    _TG_ATTRS
    __tg_frexp(double __x, int* __y) {return frexp(__x, __y);}

static long double
    _TG_ATTRS
    __tg_frexp(long double __x, int* __y) {return frexpl(__x, __y);}

#undef frexp
#define frexp(__x, __y) __tg_frexp(__tg_promote1((__x))(__x), __y)

// hypot

static float
    _TG_ATTRS
    __tg_hypot(float __x, float __y) {return hypotf(__x, __y);}

static double
    _TG_ATTRS
    __tg_hypot(double __x, double __y) {return hypot(__x, __y);}

static long double
    _TG_ATTRS
    __tg_hypot(long double __x, long double __y) {return hypotl(__x, __y);}

#undef hypot
#define hypot(__x, __y) __tg_hypot(__tg_promote2((__x), (__y))(__x), \\
                                   __tg_promote2((__x), (__y))(__y))

// ilogb

static int
    _TG_ATTRS
    __tg_ilogb(float __x) {return ilogbf(__x);}

static int
    _TG_ATTRS
    __tg_ilogb(double __x) {return ilogb(__x);}

static int
    _TG_ATTRS
    __tg_ilogb(long double __x) {return ilogbl(__x);}

#undef ilogb
#define ilogb(__x) __tg_ilogb(__tg_promote1((__x))(__x))

// ldexp

static float
    _TG_ATTRS
    __tg_ldexp(float __x, int __y) {return ldexpf(__x, __y);}

static double
    _TG_ATTRS
    __tg_ldexp(double __x, int __y) {return ldexp(__x, __y);}

static long double
    _TG_ATTRS
    __tg_ldexp(long double __x, int __y) {return ldexpl(__x, __y);}

#undef ldexp
#define ldexp(__x, __y) __tg_ldexp(__tg_promote1((__x))(__x), __y)

// lgamma

static float
    _TG_ATTRS
    __tg_lgamma(float __x) {return lgammaf(__x);}

static double
    _TG_ATTRS
    __tg_lgamma(double __x) {return lgamma(__x);}

static long double
    _TG_ATTRS
    __tg_lgamma(long double __x) {return lgammal(__x);}

#undef lgamma
#define lgamma(__x) __tg_lgamma(__tg_promote1((__x))(__x))

// llrint

static long long
    _TG_ATTRS
    __tg_llrint(float __x) {return llrintf(__x);}

static long long
    _TG_ATTRS
    __tg_llrint(double __x) {return llrint(__x);}

static long long
    _TG_ATTRS
    __tg_llrint(long double __x) {return llrintl(__x);}

#undef llrint
#define llrint(__x) __tg_llrint(__tg_promote1((__x))(__x))

// llround

static long long
    _TG_ATTRS
    __tg_llround(float __x) {return llroundf(__x);}

static long long
    _TG_ATTRS
    __tg_llround(double __x) {return llround(__x);}

static long long
    _TG_ATTRS
    __tg_llround(long double __x) {return llroundl(__x);}

#undef llround
#define llround(__x) __tg_llround(__tg_promote1((__x))(__x))

// log10

static float
    _TG_ATTRS
    __tg_log10(float __x) {return log10f(__x);}

static double
    _TG_ATTRS
    __tg_log10(double __x) {return log10(__x);}

static long double
    _TG_ATTRS
    __tg_log10(long double __x) {return log10l(__x);}

#undef log10
#define log10(__x) __tg_log10(__tg_promote1((__x))(__x))

// log1p

static float
    _TG_ATTRS
    __tg_log1p(float __x) {return log1pf(__x);}

static double
    _TG_ATTRS
    __tg_log1p(double __x) {return log1p(__x);}

static long double
    _TG_ATTRS
    __tg_log1p(long double __x) {return log1pl(__x);}

#undef log1p
#define log1p(__x) __tg_log1p(__tg_promote1((__x))(__x))

// log2

static float
    _TG_ATTRS
    __tg_log2(float __x) {return log2f(__x);}

static double
    _TG_ATTRS
    __tg_log2(double __x) {return log2(__x);}

static long double
    _TG_ATTRS
    __tg_log2(long double __x) {return log2l(__x);}

#undef log2
#define log2(__x) __tg_log2(__tg_promote1((__x))(__x))

// logb

static float
    _TG_ATTRS
    __tg_logb(float __x) {return logbf(__x);}

static double
    _TG_ATTRS
    __tg_logb(double __x) {return logb(__x);}

static long double
    _TG_ATTRS
    __tg_logb(long double __x) {return logbl(__x);}

#undef logb
#define logb(__x) __tg_logb(__tg_promote1((__x))(__x))

// lrint

static long
    _TG_ATTRS
    __tg_lrint(float __x) {return lrintf(__x);}

static long
    _TG_ATTRS
    __tg_lrint(double __x) {return lrint(__x);}

static long
    _TG_ATTRS
    __tg_lrint(long double __x) {return lrintl(__x);}

#undef lrint
#define lrint(__x) __tg_lrint(__tg_promote1((__x))(__x))

// lround

static long
    _TG_ATTRS
    __tg_lround(float __x) {return lroundf(__x);}

static long
    _TG_ATTRS
    __tg_lround(double __x) {return lround(__x);}

static long
    _TG_ATTRS
    __tg_lround(long double __x) {return lroundl(__x);}

#undef lround
#define lround(__x) __tg_lround(__tg_promote1((__x))(__x))

// nearbyint

static float
    _TG_ATTRS
    __tg_nearbyint(float __x) {return nearbyintf(__x);}

static double
    _TG_ATTRS
    __tg_nearbyint(double __x) {return nearbyint(__x);}

static long double
    _TG_ATTRS
    __tg_nearbyint(long double __x) {return nearbyintl(__x);}

#undef nearbyint
#define nearbyint(__x) __tg_nearbyint(__tg_promote1((__x))(__x))

// nextafter

static float
    _TG_ATTRS
    __tg_nextafter(float __x, float __y) {return nextafterf(__x, __y);}

static double
    _TG_ATTRS
    __tg_nextafter(double __x, double __y) {return nextafter(__x, __y);}

static long double
    _TG_ATTRS
    __tg_nextafter(long double __x, long double __y) {return nextafterl(__x, __y);}

#undef nextafter
#define nextafter(__x, __y) __tg_nextafter(__tg_promote2((__x), (__y))(__x), \\
                                           __tg_promote2((__x), (__y))(__y))

// nexttoward

static float
    _TG_ATTRS
    __tg_nexttoward(float __x, long double __y) {return nexttowardf(__x, __y);}

static double
    _TG_ATTRS
    __tg_nexttoward(double __x, long double __y) {return nexttoward(__x, __y);}

static long double
    _TG_ATTRS
    __tg_nexttoward(long double __x, long double __y) {return nexttowardl(__x, __y);}

#undef nexttoward
#define nexttoward(__x, __y) __tg_nexttoward(__tg_promote1((__x))(__x), (__y))

// remainder

static float
    _TG_ATTRS
    __tg_remainder(float __x, float __y) {return remainderf(__x, __y);}

static double
    _TG_ATTRS
    __tg_remainder(double __x, double __y) {return remainder(__x, __y);}

static long double
    _TG_ATTRS
    __tg_remainder(long double __x, long double __y) {return remainderl(__x, __y);}

#undef remainder
#define remainder(__x, __y) __tg_remainder(__tg_promote2((__x), (__y))(__x), \\
                                           __tg_promote2((__x), (__y))(__y))

// remquo

static float
    _TG_ATTRS
    __tg_remquo(float __x, float __y, int* __z)
    {return remquof(__x, __y, __z);}

static double
    _TG_ATTRS
    __tg_remquo(double __x, double __y, int* __z)
    {return remquo(__x, __y, __z);}

static long double
    _TG_ATTRS
    __tg_remquo(long double __x,long double __y, int* __z)
    {return remquol(__x, __y, __z);}

#undef remquo
#define remquo(__x, __y, __z)                         \\
        __tg_remquo(__tg_promote2((__x), (__y))(__x), \\
                    __tg_promote2((__x), (__y))(__y), \\
                    (__z))

// rint

static float
    _TG_ATTRS
    __tg_rint(float __x) {return rintf(__x);}

static double
    _TG_ATTRS
    __tg_rint(double __x) {return rint(__x);}

static long double
    _TG_ATTRS
    __tg_rint(long double __x) {return rintl(__x);}

#undef rint
#define rint(__x) __tg_rint(__tg_promote1((__x))(__x))

// round

static float
    _TG_ATTRS
    __tg_round(float __x) {return roundf(__x);}

static double
    _TG_ATTRS
    __tg_round(double __x) {return round(__x);}

static long double
    _TG_ATTRS
    __tg_round(long double __x) {return roundl(__x);}

#undef round
#define round(__x) __tg_round(__tg_promote1((__x))(__x))

// scalbn

static float
    _TG_ATTRS
    __tg_scalbn(float __x, int __y) {return scalbnf(__x, __y);}

static double
    _TG_ATTRS
    __tg_scalbn(double __x, int __y) {return scalbn(__x, __y);}

static long double
    _TG_ATTRS
    __tg_scalbn(long double __x, int __y) {return scalbnl(__x, __y);}

#undef scalbn
#define scalbn(__x, __y) __tg_scalbn(__tg_promote1((__x))(__x), __y)

// scalbln

static float
    _TG_ATTRS
    __tg_scalbln(float __x, long __y) {return scalblnf(__x, __y);}

static double
    _TG_ATTRS
    __tg_scalbln(double __x, long __y) {return scalbln(__x, __y);}

static long double
    _TG_ATTRS
    __tg_scalbln(long double __x, long __y) {return scalblnl(__x, __y);}

#undef scalbln
#define scalbln(__x, __y) __tg_scalbln(__tg_promote1((__x))(__x), __y)

// tgamma

static float
    _TG_ATTRS
    __tg_tgamma(float __x) {return tgammaf(__x);}

static double
    _TG_ATTRS
    __tg_tgamma(double __x) {return tgamma(__x);}

static long double
    _TG_ATTRS
    __tg_tgamma(long double __x) {return tgammal(__x);}

#undef tgamma
#define tgamma(__x) __tg_tgamma(__tg_promote1((__x))(__x))

// trunc

static float
    _TG_ATTRS
    __tg_trunc(float __x) {return truncf(__x);}

static double
    _TG_ATTRS
    __tg_trunc(double __x) {return trunc(__x);}

static long double
    _TG_ATTRS
    __tg_trunc(long double __x) {return truncl(__x);}

#undef trunc
#define trunc(__x) __tg_trunc(__tg_promote1((__x))(__x))

// carg

static float
    _TG_ATTRS
    __tg_carg(float __x) {return atan2f(0.F, __x);}

static double
    _TG_ATTRS
    __tg_carg(double __x) {return atan2(0., __x);}

static long double
    _TG_ATTRS
    __tg_carg(long double __x) {return atan2l(0.L, __x);}

static float
    _TG_ATTRS
    __tg_carg(float _Complex __x) {return cargf(__x);}

static double
    _TG_ATTRS
    __tg_carg(double _Complex __x) {return carg(__x);}

static long double
    _TG_ATTRS
    __tg_carg(long double _Complex __x) {return cargl(__x);}

#undef carg
#define carg(__x) __tg_carg(__tg_promote1((__x))(__x))

// cimag

static float
    _TG_ATTRS
    __tg_cimag(float __x) {return 0;}

static double
    _TG_ATTRS
    __tg_cimag(double __x) {return 0;}

static long double
    _TG_ATTRS
    __tg_cimag(long double __x) {return 0;}

static float
    _TG_ATTRS
    __tg_cimag(float _Complex __x) {return cimagf(__x);}

static double
    _TG_ATTRS
    __tg_cimag(double _Complex __x) {return cimag(__x);}

static long double
    _TG_ATTRS
    __tg_cimag(long double _Complex __x) {return cimagl(__x);}

#undef cimag
#define cimag(__x) __tg_cimag(__tg_promote1((__x))(__x))

// conj

static float _Complex
    _TG_ATTRS
    __tg_conj(float __x) {return __x;}

static double _Complex
    _TG_ATTRS
    __tg_conj(double __x) {return __x;}

static long double _Complex
    _TG_ATTRS
    __tg_conj(long double __x) {return __x;}

static float _Complex
    _TG_ATTRS
    __tg_conj(float _Complex __x) {return conjf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_conj(double _Complex __x) {return conj(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_conj(long double _Complex __x) {return conjl(__x);}

#undef conj
#define conj(__x) __tg_conj(__tg_promote1((__x))(__x))

// cproj

static float _Complex
    _TG_ATTRS
    __tg_cproj(float __x) {return cprojf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cproj(double __x) {return cproj(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cproj(long double __x) {return cprojl(__x);}

static float _Complex
    _TG_ATTRS
    __tg_cproj(float _Complex __x) {return cprojf(__x);}

static double _Complex
    _TG_ATTRS
    __tg_cproj(double _Complex __x) {return cproj(__x);}

static long double _Complex
    _TG_ATTRS
    __tg_cproj(long double _Complex __x) {return cprojl(__x);}

#undef cproj
#define cproj(__x) __tg_cproj(__tg_promote1((__x))(__x))

// creal

static float
    _TG_ATTRS
    __tg_creal(float __x) {return __x;}

static double
    _TG_ATTRS
    __tg_creal(double __x) {return __x;}

static long double
    _TG_ATTRS
    __tg_creal(long double __x) {return __x;}

static float
    _TG_ATTRS
    __tg_creal(float _Complex __x) {return crealf(__x);}

static double
    _TG_ATTRS
    __tg_creal(double _Complex __x) {return creal(__x);}

static long double
    _TG_ATTRS
    __tg_creal(long double _Complex __x) {return creall(__x);}

#undef creal
#define creal(__x) __tg_creal(__tg_promote1((__x))(__x))

#undef _TG_ATTRSp
#undef _TG_ATTRS

#endif /* __cplusplus */
#endif /* __has_include_next */
#endif /* __CLANG_TGMATH_H */
`,"unwind.h":`/*===---- unwind.h - Stack unwinding ----------------------------------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

/* See "Data Definitions for libgcc_s" in the Linux Standard Base.*/

#ifndef __CLANG_UNWIND_H
#define __CLANG_UNWIND_H

#if defined(__APPLE__) && __has_include_next(<unwind.h>)
/* Darwin (from 11.x on) provide an unwind.h. If that's available,
 * use it. libunwind wraps some of its definitions in #ifdef _GNU_SOURCE,
 * so define that around the include.*/
# ifndef _GNU_SOURCE
#  define _SHOULD_UNDEFINE_GNU_SOURCE
#  define _GNU_SOURCE
# endif
// libunwind's unwind.h reflects the current visibility.  However, Mozilla
// builds with -fvisibility=hidden and relies on gcc's unwind.h to reset the
// visibility to default and export its contents.  gcc also allows users to
// override its override by #defining HIDE_EXPORTS (but note, this only obeys
// the user's -fvisibility setting; it doesn't hide any exports on its own).  We
// imitate gcc's header here:
# ifdef HIDE_EXPORTS
#  include_next <unwind.h>
# else
#  pragma GCC visibility push(default)
#  include_next <unwind.h>
#  pragma GCC visibility pop
# endif
# ifdef _SHOULD_UNDEFINE_GNU_SOURCE
#  undef _GNU_SOURCE
#  undef _SHOULD_UNDEFINE_GNU_SOURCE
# endif
#else

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/* It is a bit strange for a header to play with the visibility of the
   symbols it declares, but this matches gcc's behavior and some programs
   depend on it */
#ifndef HIDE_EXPORTS
#pragma GCC visibility push(default)
#endif

typedef uintptr_t _Unwind_Word __attribute__((__mode__(__unwind_word__)));
typedef intptr_t _Unwind_Sword __attribute__((__mode__(__unwind_word__)));
typedef uintptr_t _Unwind_Ptr;
typedef uintptr_t _Unwind_Internal_Ptr;
typedef uint64_t _Unwind_Exception_Class;

typedef intptr_t _sleb128_t;
typedef uintptr_t _uleb128_t;

struct _Unwind_Context;
#if defined(__arm__) && !(defined(__USING_SJLJ_EXCEPTIONS__) || \\
                          defined(__ARM_DWARF_EH__) || defined(__SEH__))
struct _Unwind_Control_Block;
typedef struct _Unwind_Control_Block _Unwind_Control_Block;
#define _Unwind_Exception _Unwind_Control_Block /* Alias */
#else
struct _Unwind_Exception;
typedef struct _Unwind_Exception _Unwind_Exception;
#endif
typedef enum {
  _URC_NO_REASON = 0,
#if defined(__arm__) && !defined(__USING_SJLJ_EXCEPTIONS__) && \\
    !defined(__ARM_DWARF_EH__) && !defined(__SEH__)
  _URC_OK = 0, /* used by ARM EHABI */
#endif
  _URC_FOREIGN_EXCEPTION_CAUGHT = 1,

  _URC_FATAL_PHASE2_ERROR = 2,
  _URC_FATAL_PHASE1_ERROR = 3,
  _URC_NORMAL_STOP = 4,

  _URC_END_OF_STACK = 5,
  _URC_HANDLER_FOUND = 6,
  _URC_INSTALL_CONTEXT = 7,
  _URC_CONTINUE_UNWIND = 8,
#if defined(__arm__) && !defined(__USING_SJLJ_EXCEPTIONS__) && \\
    !defined(__ARM_DWARF_EH__) && !defined(__SEH__)
  _URC_FAILURE = 9 /* used by ARM EHABI */
#endif
} _Unwind_Reason_Code;

typedef enum {
  _UA_SEARCH_PHASE = 1,
  _UA_CLEANUP_PHASE = 2,

  _UA_HANDLER_FRAME = 4,
  _UA_FORCE_UNWIND = 8,
  _UA_END_OF_STACK = 16 /* gcc extension to C++ ABI */
} _Unwind_Action;

typedef void (*_Unwind_Exception_Cleanup_Fn)(_Unwind_Reason_Code,
                                             _Unwind_Exception *);

#if defined(__arm__) && !(defined(__USING_SJLJ_EXCEPTIONS__) || \\
                          defined(__ARM_DWARF_EH__) || defined(__SEH__))
typedef struct _Unwind_Control_Block _Unwind_Control_Block;
typedef uint32_t _Unwind_EHT_Header;

struct _Unwind_Control_Block {
  uint64_t exception_class;
  void (*exception_cleanup)(_Unwind_Reason_Code, _Unwind_Control_Block *);
  /* unwinder cache (private fields for the unwinder's use) */
  struct {
    uint32_t reserved1; /* forced unwind stop function, 0 if not forced */
    uint32_t reserved2; /* personality routine */
    uint32_t reserved3; /* callsite */
    uint32_t reserved4; /* forced unwind stop argument */
    uint32_t reserved5;
  } unwinder_cache;
  /* propagation barrier cache (valid after phase 1) */
  struct {
    uint32_t sp;
    uint32_t bitpattern[5];
  } barrier_cache;
  /* cleanup cache (preserved over cleanup) */
  struct {
    uint32_t bitpattern[4];
  } cleanup_cache;
  /* personality cache (for personality's benefit) */
  struct {
    uint32_t fnstart;         /* function start address */
    _Unwind_EHT_Header *ehtp; /* pointer to EHT entry header word */
    uint32_t additional;      /* additional data */
    uint32_t reserved1;
  } pr_cache;
  long long int : 0; /* force alignment of next item to 8-byte boundary */
} __attribute__((__aligned__(8)));
#else
struct _Unwind_Exception {
  _Unwind_Exception_Class exception_class;
  _Unwind_Exception_Cleanup_Fn exception_cleanup;
#if !defined (__USING_SJLJ_EXCEPTIONS__) && defined (__SEH__)
  _Unwind_Word private_[6];
#else
  _Unwind_Word private_1;
  _Unwind_Word private_2;
#endif
  /* The Itanium ABI requires that _Unwind_Exception objects are "double-word
   * aligned".  GCC has interpreted this to mean "use the maximum useful
   * alignment for the target"; so do we. */
} __attribute__((__aligned__));
#endif

typedef _Unwind_Reason_Code (*_Unwind_Stop_Fn)(int, _Unwind_Action,
                                               _Unwind_Exception_Class,
                                               _Unwind_Exception *,
                                               struct _Unwind_Context *,
                                               void *);

typedef _Unwind_Reason_Code (*_Unwind_Personality_Fn)(int, _Unwind_Action,
                                                      _Unwind_Exception_Class,
                                                      _Unwind_Exception *,
                                                      struct _Unwind_Context *);
typedef _Unwind_Personality_Fn __personality_routine;

typedef _Unwind_Reason_Code (*_Unwind_Trace_Fn)(struct _Unwind_Context *,
                                                void *);

#if defined(__arm__) && !(defined(__USING_SJLJ_EXCEPTIONS__) ||                \\
                          defined(__ARM_DWARF_EH__) || defined(__SEH__))
typedef enum {
  _UVRSC_CORE = 0,        /* integer register */
  _UVRSC_VFP = 1,         /* vfp */
  _UVRSC_WMMXD = 3,       /* Intel WMMX data register */
  _UVRSC_WMMXC = 4,       /* Intel WMMX control register */
  _UVRSC_PSEUDO = 5       /* Special purpose pseudo register */
} _Unwind_VRS_RegClass;

typedef enum {
  _UVRSD_UINT32 = 0,
  _UVRSD_VFPX = 1,
  _UVRSD_UINT64 = 3,
  _UVRSD_FLOAT = 4,
  _UVRSD_DOUBLE = 5
} _Unwind_VRS_DataRepresentation;

typedef enum {
  _UVRSR_OK = 0,
  _UVRSR_NOT_IMPLEMENTED = 1,
  _UVRSR_FAILED = 2
} _Unwind_VRS_Result;

typedef uint32_t _Unwind_State;
#define _US_VIRTUAL_UNWIND_FRAME  ((_Unwind_State)0)
#define _US_UNWIND_FRAME_STARTING ((_Unwind_State)1)
#define _US_UNWIND_FRAME_RESUME   ((_Unwind_State)2)
#define _US_ACTION_MASK           ((_Unwind_State)3)
#define _US_FORCE_UNWIND          ((_Unwind_State)8)

_Unwind_VRS_Result _Unwind_VRS_Get(struct _Unwind_Context *__context,
  _Unwind_VRS_RegClass __regclass,
  uint32_t __regno,
  _Unwind_VRS_DataRepresentation __representation,
  void *__valuep);

_Unwind_VRS_Result _Unwind_VRS_Set(struct _Unwind_Context *__context,
  _Unwind_VRS_RegClass __regclass,
  uint32_t __regno,
  _Unwind_VRS_DataRepresentation __representation,
  void *__valuep);

static __inline__
_Unwind_Word _Unwind_GetGR(struct _Unwind_Context *__context, int __index) {
  _Unwind_Word __value;
  _Unwind_VRS_Get(__context, _UVRSC_CORE, __index, _UVRSD_UINT32, &__value);
  return __value;
}

static __inline__
void _Unwind_SetGR(struct _Unwind_Context *__context, int __index,
                   _Unwind_Word __value) {
  _Unwind_VRS_Set(__context, _UVRSC_CORE, __index, _UVRSD_UINT32, &__value);
}

static __inline__
_Unwind_Word _Unwind_GetIP(struct _Unwind_Context *__context) {
  _Unwind_Word __ip = _Unwind_GetGR(__context, 15);
  return __ip & ~(_Unwind_Word)(0x1); /* Remove thumb mode bit. */
}

static __inline__
void _Unwind_SetIP(struct _Unwind_Context *__context, _Unwind_Word __value) {
  _Unwind_Word __thumb_mode_bit = _Unwind_GetGR(__context, 15) & 0x1;
  _Unwind_SetGR(__context, 15, __value | __thumb_mode_bit);
}
#else
_Unwind_Word _Unwind_GetGR(struct _Unwind_Context *, int);
void _Unwind_SetGR(struct _Unwind_Context *, int, _Unwind_Word);

_Unwind_Word _Unwind_GetIP(struct _Unwind_Context *);
void _Unwind_SetIP(struct _Unwind_Context *, _Unwind_Word);
#endif


_Unwind_Word _Unwind_GetIPInfo(struct _Unwind_Context *, int *);

_Unwind_Word _Unwind_GetCFA(struct _Unwind_Context *);

_Unwind_Word _Unwind_GetBSP(struct _Unwind_Context *);

void *_Unwind_GetLanguageSpecificData(struct _Unwind_Context *);

_Unwind_Ptr _Unwind_GetRegionStart(struct _Unwind_Context *);

/* DWARF EH functions; currently not available on Darwin/ARM */
#if !defined(__APPLE__) || !defined(__arm__)
_Unwind_Reason_Code _Unwind_RaiseException(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_ForcedUnwind(_Unwind_Exception *, _Unwind_Stop_Fn,
                                         void *);
void _Unwind_DeleteException(_Unwind_Exception *);
void _Unwind_Resume(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_Resume_or_Rethrow(_Unwind_Exception *);

#endif

_Unwind_Reason_Code _Unwind_Backtrace(_Unwind_Trace_Fn, void *);

/* setjmp(3)/longjmp(3) stuff */
typedef struct SjLj_Function_Context *_Unwind_FunctionContext_t;

void _Unwind_SjLj_Register(_Unwind_FunctionContext_t);
void _Unwind_SjLj_Unregister(_Unwind_FunctionContext_t);
_Unwind_Reason_Code _Unwind_SjLj_RaiseException(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_SjLj_ForcedUnwind(_Unwind_Exception *,
                                              _Unwind_Stop_Fn, void *);
void _Unwind_SjLj_Resume(_Unwind_Exception *);
_Unwind_Reason_Code _Unwind_SjLj_Resume_or_Rethrow(_Unwind_Exception *);

void *_Unwind_FindEnclosingFunction(void *);

#ifdef __APPLE__

_Unwind_Ptr _Unwind_GetDataRelBase(struct _Unwind_Context *)
    __attribute__((__unavailable__));
_Unwind_Ptr _Unwind_GetTextRelBase(struct _Unwind_Context *)
    __attribute__((__unavailable__));

/* Darwin-specific functions */
void __register_frame(const void *);
void __deregister_frame(const void *);

struct dwarf_eh_bases {
  uintptr_t tbase;
  uintptr_t dbase;
  uintptr_t func;
};
void *_Unwind_Find_FDE(const void *, struct dwarf_eh_bases *);

void __register_frame_info_bases(const void *, void *, void *, void *)
  __attribute__((__unavailable__));
void __register_frame_info(const void *, void *) __attribute__((__unavailable__));
void __register_frame_info_table_bases(const void *, void*, void *, void *)
  __attribute__((__unavailable__));
void __register_frame_info_table(const void *, void *)
  __attribute__((__unavailable__));
void __register_frame_table(const void *) __attribute__((__unavailable__));
void __deregister_frame_info(const void *) __attribute__((__unavailable__));
void __deregister_frame_info_bases(const void *)__attribute__((__unavailable__));

#else

_Unwind_Ptr _Unwind_GetDataRelBase(struct _Unwind_Context *);
_Unwind_Ptr _Unwind_GetTextRelBase(struct _Unwind_Context *);

#endif


#ifndef HIDE_EXPORTS
#pragma GCC visibility pop
#endif

#ifdef __cplusplus
}
#endif

#endif

#endif /* __CLANG_UNWIND_H */
`,"varargs.h":`/*===---- varargs.h - Variable argument handling -------------------------------------===
*
* Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
* See https://llvm.org/LICENSE.txt for license information.
* SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
*
*===-----------------------------------------------------------------------===
*/
#ifndef __VARARGS_H
#define __VARARGS_H
#if defined(__MVS__) && __has_include_next(<varargs.h>)
#include_next <varargs.h>
#else
#error "Please use <stdarg.h> instead of <varargs.h>"
#endif /* __MVS__ */
#endif
`});var di=Object.freeze({name:"clang",version:"22.1.8",revision:"ca7933e47d3a3451d81e72ac174dcb5aa28b59d1"}),vo="/lib/clang/22";function ar(e,_,n){if(_?.name!==di.name||_.version!==di.version||_.revision!==di.revision||n!==vo)return!1;let t=new TextDecoder("utf-8",{fatal:!0}),i=[];for(let[r,s]of Object.entries(ir)){let l=`${n}/include/${r}`;try{let o=e.readFile(l);if(o!==null){if(t.decode(o)!==s)throw new Error(`Clang ${_.version} resource header differs from its pinned source: ${r}`)}else i.push([l,s])}catch(o){throw new Error(`Unable to inspect Clang ${_.version} resource header ${r}: ${o instanceof Error?o.message:String(o)}`,{cause:o})}}if(i.length)try{e.mkdirTree(`${n}/include`)}catch(r){throw new Error(`Unable to prepare Clang ${_.version} resource header directory: ${r instanceof Error?r.message:String(r)}`,{cause:r})}let a=new TextEncoder;for(let[r,s]of i)try{e.writeFile(r,a.encode(s))}catch(l){throw new Error(`Unable to install Clang ${_.version} resource header ${r.slice(r.lastIndexOf("/")+1)}: ${l instanceof Error?l.message:String(l)}`,{cause:l})}return!0}var wu=Object.freeze({name:"emscripten",version:"6.0.0",revision:"afa15e0c56d1292e073c2c91bafc1d5e0cdf0dd3"}),yu=Object.freeze({name:"clang",version:"22.1.8",revision:"ca7933e47d3a3451d81e72ac174dcb5aa28b59d1"}),rr=Object.freeze(["-D__SSE__=1","-D__SSE2__=1","-D__SSE3__=1","-D__SSSE3__=1","-D__SSE4_1__=1","-D__SSE4_2__=1","-D__AVX__=1","-D__AVX2__=1"]),sr=Object.freeze({"immintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */
#ifndef __emscripten_immintrin_h__
#define __emscripten_immintrin_h__

#ifdef __SSE__
#include <xmmintrin.h>
#endif

#ifdef __SSE2__
#include <emmintrin.h>
#endif

#ifdef __SSE3__
#include <pmmintrin.h>
#endif

#ifdef __SSSE3__
#include <tmmintrin.h>
#endif

#ifdef __SSE4_1__
#include <smmintrin.h>
#endif

#ifdef __SSE4_2__
#include <nmmintrin.h>
#endif

#ifdef __AVX__
#include <avxintrin.h>
#endif

#ifdef __AVX2__
#include <avx2intrin.h>
#endif

#endif /* __emscripten_immintrin_h__ */
`,"xmmintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */
#ifndef __emscripten_xmmintrin_h__
#define __emscripten_xmmintrin_h__

#include <wasm_simd128.h>

#include <limits.h>
#include <math.h>
#include <string.h>

#ifndef __SSE__
#error "SSE instruction set not enabled"
#endif

#ifdef WASM_SIMD_COMPAT_SLOW
#define DIAGNOSE_SLOW diagnose_if(1, "Instruction emulated via slow path.", "warning")
#else
#define DIAGNOSE_SLOW
#endif

// Emscripten SIMD support doesn't support MMX/float32x2/__m64.
// However, we support loading and storing 2-vectors, so
// recognize the type at least.
typedef float __m64 __attribute__((__vector_size__(8), __aligned__(8)));
typedef __f32x4 __m128;
typedef v128_t __m128i;

#define __f32x4_shuffle(__a, __b, __c0, __c1, __c2, __c3)                   \\
  ((v128_t)(__builtin_shufflevector((__f32x4)(__a), (__f32x4)(__b), __c0,   \\
                                    __c1, __c2, __c3)))

// This is defined as a macro because __builtin_shufflevector requires its
// mask argument to be a compile-time constant.
#define _mm_shuffle_ps(__a, __b, __mask) __extension__ ({ \\
  ((__m128)__f32x4_shuffle(__a, __b, \\
                           (((__mask) >> 0) & 0x3) + 0, \\
                           (((__mask) >> 2) & 0x3) + 0, \\
                           (((__mask) >> 4) & 0x3) + 4, \\
                           (((__mask) >> 6) & 0x3) + 4)); })

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_set_ps(float __z, float __y, float __x, float __w)
{
  return (__m128)wasm_f32x4_make(__w, __x, __y, __z);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_setr_ps(float __z, float __y, float __x, float __w)
{
  return (__m128)wasm_f32x4_make(__z, __y, __x, __w);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_set_ss(float __w)
{
  return (__m128)wasm_f32x4_make(__w, 0, 0, 0);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_set_ps1(float __w)
{
  return (__m128)wasm_f32x4_splat(__w);
}

#define _mm_set1_ps _mm_set_ps1

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_setzero_ps(void)
{
  return (__m128)wasm_f32x4_const(0.f, 0.f, 0.f, 0.f);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_load_ps(const float *__p)
{
  return *(__m128*)__p;
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_loadl_pi(__m128 __a, const void /*__m64*/ *__p)
{
  return (__m128)wasm_v128_load64_lane(__p, (v128_t)__a, 0);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_loadh_pi(__m128 __a, const void /*__m64*/ *__p)
{
  return (__m128)wasm_v128_load64_lane(__p, (v128_t)__a, 1);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_loadr_ps(const float *__p)
{
  __m128 __v = _mm_load_ps(__p);
  return (__m128)__f32x4_shuffle(__v, __v, 3, 2, 1, 0);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_loadu_ps(const float *__p)
{
  return (__m128)wasm_v128_load(__p);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_load_ps1(const float *__p)
{
  return (__m128)wasm_v32x4_load_splat(__p);
}
#define _mm_load1_ps _mm_load_ps1

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_load_ss(const float *__p)
{
  return (__m128)wasm_v128_load32_zero(__p);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_storel_pi(__m64 *__p, __m128 __a)
{
  wasm_v128_store64_lane((void*)__p, (v128_t)__a, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_storeh_pi(__m64 *__p, __m128 __a)
{
  wasm_v128_store64_lane((void*)__p, (v128_t)__a, 1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_store_ps(float *__p, __m128 __a)
{
  *(__m128 *)__p = __a;
}
// No NTA cache hint available.
#define _mm_stream_ps _mm_store_ps

#define _MM_HINT_T0 3
#define _MM_HINT_T1 2
#define _MM_HINT_T2 1
#define _MM_HINT_NTA 0
// No prefetch available, dummy it out.
static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_prefetch(const void *__p, int __i)
{
  ((void)__p);
  ((void)__i);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_sfence(void)
{
  // Wasm/SharedArrayBuffer memory model is sequentially consistent.
  // Perhaps a future version of the spec can provide a related fence.
  __sync_synchronize();
}

#define _MM_SHUFFLE(w, z, y, x) (((w) << 6) | ((z) << 4) | ((y) << 2) | (x))

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storer_ps(float *__p, __m128 __a)
{
  _mm_store_ps(__p, _mm_shuffle_ps(__a, __a, _MM_SHUFFLE(0, 1, 2, 3)));
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_store_ps1(float *__p, __m128 __a)
{
  _mm_store_ps(__p, _mm_shuffle_ps(__a, __a, _MM_SHUFFLE(0, 0, 0, 0)));
}
#define _mm_store1_ps _mm_store_ps1

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_store_ss(float *__p, __m128 __a)
{
  wasm_v128_store32_lane((void*)__p, (v128_t)__a, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storeu_ps(float *__p, __m128 __a)
{
  struct __unaligned {
    __m128 __v;
  } __attribute__((__packed__, __may_alias__));
  ((struct __unaligned *)__p)->__v = __a;
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_movemask_ps(__m128 __a)
{
  return (int)wasm_i32x4_bitmask((v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_move_ss(__m128 __a, __m128 __b)
{
  return (__m128)__f32x4_shuffle(__a, __b, 4, 1, 2, 3);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_add_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_add((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_add_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_add_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_sub_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_sub((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_sub_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_sub_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_mul_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_mul((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_mul_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_mul_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_div_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_div((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_div_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_div_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_min_ps(__m128 __a, __m128 __b)
{
//  return (__m128)wasm_f32x4_pmin((v128_t)__a, (v128_t)__b); // TODO: Migrate to this, once it works in VMs
  return (__m128)wasm_v128_bitselect((v128_t)__a, (v128_t)__b, (v128_t)wasm_f32x4_lt((v128_t)__a, (v128_t)__b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_min_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_min_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_max_ps(__m128 __a, __m128 __b)
{
//  return (__m128)wasm_f32x4_pmax((v128_t)__a, (v128_t)__b); // TODO: Migrate to this, once it works in VMs
  return (__m128)wasm_v128_bitselect((v128_t)__a, (v128_t)__b, (v128_t)wasm_f32x4_gt((v128_t)__a, (v128_t)__b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_max_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_max_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_rcp_ps(__m128 __a)
{
    return (__m128)wasm_f32x4_div((v128_t)_mm_set1_ps(1.0f), (v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_rcp_ss(__m128 __a)
{
  return _mm_move_ss(__a, _mm_rcp_ps(__a));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_sqrt_ps(__m128 __a)
{
  return (__m128)wasm_f32x4_sqrt((v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_sqrt_ss(__m128 __a)
{
  return _mm_move_ss(__a, _mm_sqrt_ps(__a));
}

#define _mm_rsqrt_ps(__a) _mm_rcp_ps(_mm_sqrt_ps((__a)))

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_rsqrt_ss(__m128 __a)
{
  return _mm_move_ss(__a, _mm_rsqrt_ps(__a));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_unpackhi_ps(__m128 __a, __m128 __b)
{
  return (__m128)__f32x4_shuffle(__a, __b, 2, 6, 3, 7);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_unpacklo_ps(__m128 __a, __m128 __b)
{
  return (__m128)__f32x4_shuffle(__a, __b, 0, 4, 1, 5);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_movehl_ps(__m128 __a, __m128 __b)
{
  return (__m128)__f32x4_shuffle(__a, __b, 6, 7, 2, 3);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_movelh_ps(__m128 __a, __m128 __b)
{
  return (__m128)__f32x4_shuffle(__a, __b, 0, 1, 4, 5);
}

#define _MM_TRANSPOSE4_PS(row0, row1, row2, row3) \\
  do { \\
    __m128 __row0 = (row0); \\
    __m128 __row1 = (row1); \\
    __m128 __row2 = (row2); \\
    __m128 __row3 = (row3); \\
    __m128 __tmp0 = _mm_unpacklo_ps(__row0, __row1); \\
    __m128 __tmp1 = _mm_unpackhi_ps(__row0, __row1); \\
    __m128 __tmp2 = _mm_unpacklo_ps(__row2, __row3); \\
    __m128 __tmp3 = _mm_unpackhi_ps(__row2, __row3); \\
    (row0) = _mm_movelh_ps(__tmp0, __tmp2); \\
    (row1) = _mm_movehl_ps(__tmp2, __tmp0); \\
    (row2) = _mm_movelh_ps(__tmp1, __tmp3); \\
    (row3) = _mm_movehl_ps(__tmp3, __tmp1); \\
  } while (0)

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmplt_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_lt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmplt_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmplt_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmple_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_le((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmple_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmple_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_eq((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpeq_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpge_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_ge((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpge_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpge_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_gt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpgt_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW)) _mm_cmpord_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_and(wasm_f32x4_eq((v128_t)__a, (v128_t)__a),
                               wasm_f32x4_eq((v128_t)__b, (v128_t)__b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW)) _mm_cmpord_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpord_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW)) _mm_cmpunord_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_or(wasm_f32x4_ne((v128_t)__a, (v128_t)__a),
                              wasm_f32x4_ne((v128_t)__b, (v128_t)__b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW)) _mm_cmpunord_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpunord_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_and_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_and((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_andnot_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_andnot((v128_t)__b, (v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_or_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_or((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_xor_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_xor((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpneq_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_f32x4_ne((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpneq_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpneq_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpnge_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_not((v128_t)_mm_cmpge_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpnge_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpnge_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpngt_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_not((v128_t)_mm_cmpgt_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpngt_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpngt_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpnle_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_not((v128_t)_mm_cmple_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpnle_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpnle_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpnlt_ps(__m128 __a, __m128 __b)
{
  return (__m128)wasm_v128_not((v128_t)_mm_cmplt_ps(__a, __b));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cmpnlt_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_cmpnlt_ps(__a, __b));
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_comieq_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) == wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_comige_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) >= wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_comigt_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) > wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_comile_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) <= wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_comilt_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) < wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_comineq_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) != wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_ucomieq_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) == wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_ucomige_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) >= wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_ucomigt_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) > wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_ucomile_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) <= wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_ucomilt_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) < wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_ucomineq_ss(__m128 __a, __m128 __b)
{
  return wasm_f32x4_extract_lane((v128_t)__a, 0) != wasm_f32x4_extract_lane((v128_t)__b, 0);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_cvtsi32_ss(__m128 __a, int __b)
{
  __f32x4 __v = (__f32x4)__a;
  __v[0] = (float)__b;
  return (__m128)__v;
}
#define _mm_cvt_si2ss _mm_cvtsi32_ss

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW)) _mm_cvtss_si32(__m128 __a)
{
  float e = ((__f32x4)__a)[0];
  if (e < 2147483648.0f && e >= -2147483648.0f && (lrint(e) != 0 || fabsf(e) < 2.f))
    return lrint(e);
  else
    return (int)0x80000000;
}
#define _mm_cvt_ss2si _mm_cvtss_si32

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW)) _mm_cvttss_si32(__m128 __a)
{
  float e = ((__f32x4)__a)[0];
  if (e < 2147483648.0f && e >= -2147483648.0f && (lrint(e) != 0 || fabsf(e) < 2.f))
    return (int)e;
  else
    return (int)0x80000000;
}
#define _mm_cvtt_ss2si _mm_cvttss_si32

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_cvtsi64_ss(__m128 __a, long long __b)
{
  __f32x4 __v = (__f32x4)__a;
  __v[0] = (float)__b;
  return (__m128)__v;
}

static __inline__ long long __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_cvtss_si64(__m128 __a)
{
  float e = ((__f32x4)__a)[0];
  long long x = llrintf(e);
  if (e <= LLONG_MAX && e >= LLONG_MIN && (x != 0 || fabsf(e) < 2.f))
    return x;
  else
    return 0x8000000000000000LL;
}

static __inline__ long long __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_cvttss_si64(__m128 __a)
{
  float e = ((__f32x4)__a)[0];
  long long x = llrintf(e);
  if (e <= LLONG_MAX && e >= LLONG_MIN && (x != 0 || fabsf(e) < 2.f))
    return (long long)e;
  else
    return 0x8000000000000000LL;
}

static __inline__ float __attribute__((__always_inline__, __nodebug__))
_mm_cvtss_f32(__m128 __a)
{
  return (float)((__f32x4)__a)[0];
}

#define _mm_malloc(__size, __align) memalign((__align), (__size))
#define _mm_free free

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_undefined()
{
  __m128 val;
  return val;
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_undefined_ps()
{
  __m128 val;
  return val;
}

#define _MM_EXCEPT_MASK       0x003f
#define _MM_EXCEPT_INVALID    0x0001
#define _MM_EXCEPT_DENORM     0x0002
#define _MM_EXCEPT_DIV_ZERO   0x0004
#define _MM_EXCEPT_OVERFLOW   0x0008
#define _MM_EXCEPT_UNDERFLOW  0x0010
#define _MM_EXCEPT_INEXACT    0x0020

#define _MM_MASK_MASK         0x1f80
#define _MM_MASK_INVALID      0x0080
#define _MM_MASK_DENORM       0x0100
#define _MM_MASK_DIV_ZERO     0x0200
#define _MM_MASK_OVERFLOW     0x0400
#define _MM_MASK_UNDERFLOW    0x0800
#define _MM_MASK_INEXACT      0x1000

#define _MM_ROUND_MASK        0x6000
#define _MM_ROUND_NEAREST     0x0000
#define _MM_ROUND_DOWN        0x2000
#define _MM_ROUND_UP          0x4000
#define _MM_ROUND_TOWARD_ZERO 0x6000

#define _MM_FLUSH_ZERO_MASK   0x8000
#define _MM_FLUSH_ZERO_ON     0x8000
#define _MM_FLUSH_ZERO_OFF    0x0000

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_getcsr()
{
  return _MM_MASK_INEXACT | _MM_MASK_DENORM | _MM_MASK_DIV_ZERO | _MM_MASK_OVERFLOW | _MM_MASK_UNDERFLOW | _MM_MASK_INVALID
    | _MM_ROUND_NEAREST | _MM_FLUSH_ZERO_OFF;
}

#define _MM_GET_EXCEPTION_STATE() (_mm_getcsr() & _MM_EXCEPT_MASK)
#define _MM_GET_EXCEPTION_MASK() (_mm_getcsr() & _MM_MASK_MASK)
#define _MM_GET_ROUNDING_MODE() (_mm_getcsr() & _MM_ROUND_MASK)
#define _MM_GET_FLUSH_ZERO_MODE() (_mm_getcsr() & _MM_FLUSH_ZERO_MASK)

// Unavailable functions:
// void _MM_SET_EXCEPTION_STATE(unsigned int __a);
// void _MM_SET_EXCEPTION_MASK(unsigned int __a);
// void _MM_GET_ROUNDING_MODE(unsigned int __a);
// void _MM_GET_FLUSH_ZERO_MODE(unsigned int __a);

#endif /* __emscripten_xmmintrin_h__ */
`,"emmintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */
#ifndef __emscripten_emmintrin_h__
#define __emscripten_emmintrin_h__

#ifndef __SSE2__
#error "SSE2 instruction set not enabled"
#endif

#include <xmmintrin.h>

// Alias different (functionally) equivalent intrinsics.
#define _mm_set_epi64x _mm_set_epi64
#define _mm_cvtsd_si64x _mm_cvtsd_si64
#define _mm_cvtsi128_si64x _mm_cvtsi128_si64
#define _mm_cvtsi64x_sd _mm_cvtsi64_sd
#define _mm_cvtsi64x_si128 _mm_cvtsi64_si128
#define _mm_cvttsd_si64x _mm_cvttsd_si64
#define _mm_store_pd1 _mm_store1_pd

typedef __f64x2 __m128d;

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_move_sd(__m128d __a, __m128d __b)
{
  return (__m128d){ __b[0], __a[1] };
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_add_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_add((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_add_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_add_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_sub_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_sub((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_sub_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_sub_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_mul_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_mul((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_mul_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_mul_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_div_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_div((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_div_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_div_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_sqrt_pd(__m128d __a)
{
  return (__m128d)wasm_f64x2_sqrt((v128_t)__a);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_sqrt_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_sqrt_pd(__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_min_pd(__m128d __a, __m128d __b)
{
//  return (__m128d)wasm_f32x4_pmin((v128_t)__a, (v128_t)__b); // TODO: Migrate to this, once it works in VMs
  return (__m128d)wasm_v128_bitselect((v128_t)__a, (v128_t)__b, (v128_t)wasm_f64x2_lt((v128_t)__a, (v128_t)__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_min_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_min_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_max_pd(__m128d __a, __m128d __b)
{
//  return (__m128)wasm_f32x4_pmax((v128_t)__a, (v128_t)__b); // TODO: Migrate to this, once it works in VMs
  return (__m128d)wasm_v128_bitselect((v128_t)__a, (v128_t)__b, (v128_t)wasm_f64x2_gt((v128_t)__a, (v128_t)__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_max_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_max_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_and_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_and((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_andnot_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_andnot((v128_t)__b, (v128_t)__a);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_or_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_or((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_xor_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_xor((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_eq((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmplt_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_lt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmple_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_le((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_gt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpge_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_ge((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpord_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_and(wasm_f64x2_eq((v128_t)__a, (v128_t)__a),
                                wasm_f64x2_eq((v128_t)__b, (v128_t)__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpunord_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_or(wasm_f64x2_ne((v128_t)__a, (v128_t)__a),
                               wasm_f64x2_ne((v128_t)__b, (v128_t)__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpneq_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_f64x2_ne((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpnlt_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_not((v128_t)_mm_cmplt_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpnle_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_not((v128_t)_mm_cmple_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpngt_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_not((v128_t)_mm_cmpgt_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpnge_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_v128_not((v128_t)_mm_cmpge_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpeq_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmplt_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmplt_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmple_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmple_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpgt_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpge_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpge_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpord_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpord_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpunord_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpunord_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpneq_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpneq_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpnlt_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpnlt_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpnle_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpnle_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpngt_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpngt_pd(__a, __b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cmpnge_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_cmpnge_pd(__a, __b));
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_comieq_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) == wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_comilt_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) < wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_comile_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) <= wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_comigt_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) > wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_comige_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) >= wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_comineq_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) != wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_ucomieq_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) == wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_ucomilt_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) < wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_ucomile_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) <= wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_ucomigt_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) > wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_ucomige_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) >= wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_ucomineq_sd(__m128d __a, __m128d __b)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0) != wasm_f64x2_extract_lane((v128_t)__b, 0);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cvtpd_ps(__m128d __a)
{
  return (__m128)wasm_f32x4_demote_f64x2_zero((v128_t)__a);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cvtps_pd(__m128 __a)
{
  return (__m128d)wasm_f64x2_promote_low_f32x4((v128_t)__a);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi32_pd(__m128i __a)
{
  return (__m128d)wasm_f64x2_convert_low_i32x4((v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtpd_epi32(__m128d __a)
{
  // TODO: OPTIMIZE!
  int m[2];
  for(int i = 0; i < 2; ++i)
  {
    double e = __a[i];
    int x = lrint(e);
    if (e <= INT_MAX && e >= INT_MIN && (x != 0 || fabs(e) < 2.0))
      m[i] = x;
    else
      m[i] = (int)0x80000000;
  }
  return wasm_i32x4_make(m[0], m[1], 0, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_cvtsd_si32(__m128d __a)
{
  // TODO: OPTIMIZE!
  double e = __a[0];
  int x = lrint(e);
  if (e <= INT_MAX && e >= INT_MIN && (x != 0 || fabs(e) < 2.0))
    return x;
  else
    return (int)0x80000000;
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cvtsd_ss(__m128 __a, __m128d __b)
{
  __a[0] = __b[0];
  return __a;
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cvtsi32_sd(__m128d __a, int __b)
{
  __a[0] = __b;
  return __a;
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cvtss_sd(__m128d __a, __m128 __b)
{
  __a[0] = __b[0];
  return __a;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvttpd_epi32(__m128d __a)
{
  // TODO: OPTIMIZE!
  int m[2];
  for(int i = 0; i < 2; ++i)
  {
    double elem = __a[i];
    if (elem < 2147483648.0 && elem >= -2147483648.0 && (lrint(elem) != 0 || fabs(elem) < 2.0))
      // Use the trapping instruction here since we have explicit bounds checks
      // above.
      m[i] = __builtin_wasm_trunc_s_i32_f64(elem);
    else
      m[i] = (int)0x80000000;
  }
  return wasm_i32x4_make(m[0], m[1], 0, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_cvttsd_si32(__m128d __a)
{
  // TODO: OPTIMIZE!
  double elem = __a[0];
  if (elem < 2147483648.0 && elem >= -2147483648.0 && (lrint(elem) != 0 || fabs(elem) < 2.0))
    // Use the trapping instruction here since we have explicit bounds checks
    // above.
    return __builtin_wasm_trunc_s_i32_f64(elem);
  else
    return (int)0x80000000;
}

static __inline__ double __attribute__((__always_inline__, __nodebug__))
_mm_cvtsd_f64(__m128d __a)
{
  return wasm_f64x2_extract_lane((v128_t)__a, 0);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_load_pd(double const *__dp)
{
  return *(__m128d*)__dp;
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_load1_pd(double const *__dp)
{
  return (__m128d)wasm_v64x2_load_splat(__dp);
}

#define        _mm_load_pd1(dp)        _mm_load1_pd(dp)

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_loadr_pd(double const *__p)
{
  __m128d __u = *(__m128d*)__p; // aligned load
  return (__m128d)wasm_i64x2_shuffle((v128_t)__u, (v128_t)__u, 1, 0);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_loadu_pd(double const *__dp)
{
  struct __loadu_pd {
    __m128d __v;
  } __attribute__((__packed__, __may_alias__));
  return ((struct __loadu_pd*)__dp)->__v;
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_load_sd(double const *__p)
{
  return (__m128d)wasm_v128_load64_zero((const void*)__p);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_loadh_pd(__m128d __a, double const *__dp)
{
  return (__m128d)wasm_v128_load64_lane((const void*)__dp, (v128_t)__a, 1);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_loadl_pd(__m128d __a, double const *__dp)
{
  return (__m128d)wasm_v128_load64_lane((const void*)__dp, (v128_t)__a, 0);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_set_sd(double __w)
{
  return (__m128d)wasm_f64x2_make(__w, 0);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_set1_pd(double __w)
{
  return (__m128d)wasm_f64x2_splat(__w);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_set_pd(double __c1, double __c0)
{
  return (__m128d)wasm_f64x2_make(__c0, __c1);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_setr_pd(double __c0, double __c1)
{
  return (__m128d)wasm_f64x2_make(__c0, __c1);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_setzero_pd(void)
{
  return (__m128d)wasm_f64x2_const(0.0, 0.0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_store_sd(double *__dp, __m128d __a)
{
  wasm_v128_store64_lane((void*)__dp, (v128_t)__a, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_store1_pd(double *__dp, __m128d __a)
{
  struct __mm_store1_pd_struct {
    double __u[2];
  } __attribute__((__packed__, __may_alias__));
  ((struct __mm_store1_pd_struct*)__dp)->__u[0] = __a[0];
  ((struct __mm_store1_pd_struct*)__dp)->__u[1] = __a[0];
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_store_pd(double *__dp, __m128d __a)
{
  *(__m128d *)__dp = __a;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storeu_pd(double *__dp, __m128d __a)
{
  struct __unaligned {
    __m128d __v;
  } __attribute__((__packed__, __may_alias__));

  ((struct __unaligned *)__dp)->__v = __a;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storer_pd(double *__p, __m128d __a)
{
  *(__m128d *)__p = (__m128d)wasm_i64x2_shuffle((v128_t)__a, (v128_t)__a, 1, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storeh_pd(double *__dp, __m128d __a)
{
  wasm_v128_store64_lane((void*)__dp, (v128_t)__a, 1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storel_pd(double *__dp, __m128d __a)
{
  wasm_v128_store64_lane((void*)__dp, (v128_t)__a, 0);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_add_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_add((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_add_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_add((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_add_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_add((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_add_epi64(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i64x2_add((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_adds_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_add_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_adds_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_add_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_adds_epu8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u8x16_add_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_adds_epu16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u16x8_add_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_avg_epu8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u8x16_avgr((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_avg_epu16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u16x8_avgr((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_madd_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_dot_i16x8((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_max_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_max((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_max_epu8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u8x16_max((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_min_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_min((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_min_epu8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u8x16_min((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mulhi_epi16(__m128i __a, __m128i __b)
{
  const v128_t lo = wasm_i32x4_extmul_low_i16x8((v128_t)__a, (v128_t)__b);
  const v128_t hi = wasm_i32x4_extmul_high_i16x8((v128_t)__a, (v128_t)__b);
  return (__m128i)wasm_i16x8_shuffle(lo, hi, 1, 3, 5, 7, 9, 11, 13, 15);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mulhi_epu16(__m128i __a, __m128i __b)
{
  const v128_t lo = wasm_u32x4_extmul_low_u16x8((v128_t)__a, (v128_t)__b);
  const v128_t hi = wasm_u32x4_extmul_high_u16x8((v128_t)__a, (v128_t)__b);
  return (__m128i)wasm_i16x8_shuffle(lo, hi, 1, 3, 5, 7, 9, 11, 13, 15);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mullo_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_mul((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mul_epu32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u64x2_extmul_low_u32x4(
      wasm_v32x4_shuffle((v128_t)__a, (v128_t)__a, 0, 2, 0, 2),
      wasm_v32x4_shuffle((v128_t)__b, (v128_t)__b, 0, 2, 0, 2));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sub_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_sub((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sub_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_sub((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sub_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_sub((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sub_epi64(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i64x2_sub((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_subs_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_sub_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_subs_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_sub_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_subs_epu8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u8x16_sub_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_subs_epu16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u16x8_sub_saturate((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_and_si128(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_v128_and((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_andnot_si128(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_v128_andnot((v128_t)__b, (v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_or_si128(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_v128_or((v128_t)__b, (v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_xor_si128(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_v128_xor((v128_t)__b, (v128_t)__a);
}

#define _mm_slli_si128(__a, __imm) __extension__ ({               \\
  (__m128i)wasm_i8x16_shuffle(_mm_setzero_si128(),                \\
                             (__a),                               \\
                             ((__imm)&0xF0) ? 0 : 16 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 17 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 18 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 19 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 20 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 21 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 22 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 23 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 24 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 25 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 26 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 27 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 28 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 29 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 30 - ((__imm)&0xF), \\
                             ((__imm)&0xF0) ? 0 : 31 - ((__imm)&0xF)); })
#define _mm_bslli_si128(__a, __imm) \\
  _mm_slli_si128((__a), (__imm))

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_slli_epi16(__m128i __a, int __count)
{
  return (__m128i)((__count < 16) ? wasm_i16x8_shl((v128_t)__a, __count) : wasm_i16x8_const(0,0,0,0,0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sll_epi16(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  return (__m128i)((__c < 16) ? wasm_i16x8_shl((v128_t)__a, __c) : wasm_i16x8_const(0,0,0,0,0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_slli_epi32(__m128i __a, int __count)
{
  return (__m128i)((__count < 32) ? wasm_i32x4_shl((v128_t)__a, __count) : wasm_i32x4_const(0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sll_epi32(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  return (__m128i)((__c < 32) ? wasm_i32x4_shl((v128_t)__a, __c) : wasm_i32x4_const(0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_slli_epi64(__m128i __a, int __count)
{
  return (__m128i)((__count < 64) ? wasm_i64x2_shl((v128_t)__a, __count) : wasm_i64x2_const(0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sll_epi64(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  return (__m128i)((__c < 64) ? wasm_i64x2_shl((v128_t)__a, __c) : wasm_i64x2_const(0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srai_epi16(__m128i __a, int __count)
{
  __count = __count < 15 ? __count : 15;
  return (__m128i)wasm_i16x8_shr((v128_t)__a, __count);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sra_epi16(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  __c = __c < 15 ? __c : 15;
  return (__m128i)wasm_i16x8_shr((v128_t)__a, __c);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srai_epi32(__m128i __a, int __count)
{
  __count = __count < 31 ? __count : 31;
  return (__m128i)wasm_i32x4_shr((v128_t)__a, __count);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sra_epi32(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  __c = __c < 31 ? __c : 31;
  return (__m128i)wasm_i32x4_shr((v128_t)__a, __c);
}

#define _mm_srli_si128(__a, __imm) __extension__ ({                     \\
  (__m128i)wasm_i8x16_shuffle((__a),                                    \\
                              _mm_setzero_si128(),                      \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 0,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 1,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 2,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 3,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 4,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 5,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 6,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 7,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 8,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 9,  \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 10, \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 11, \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 12, \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 13, \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 14, \\
                              ((__imm)&0xF0) ? 16 : ((__imm)&0xF) + 15); })

#define _mm_bsrli_si128(__a, __imm) \\
  _mm_srli_si128((__a), (__imm))

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srli_epi16(__m128i __a, int __count)
{
  return (__m128i)(((unsigned int)__count < 16) ? wasm_u16x8_shr((v128_t)__a, __count) : wasm_i16x8_const(0,0,0,0,0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srl_epi16(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  return (__m128i)((__c < 16) ? wasm_u16x8_shr((v128_t)__a, __c) : wasm_i16x8_const(0,0,0,0,0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srli_epi32(__m128i __a, int __count)
{
  return (__m128i)(((unsigned int)__count < 32) ? wasm_u32x4_shr((v128_t)__a, __count) : wasm_i32x4_const(0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srl_epi32(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  return (__m128i)((__c < 32) ? wasm_u32x4_shr((v128_t)__a, __c) : wasm_i32x4_const(0,0,0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srli_epi64(__m128i __a, int __count)
{
  return (__m128i)(((unsigned int)__count < 64) ? wasm_u64x2_shr((v128_t)__a, __count) : wasm_i64x2_const(0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_srl_epi64(__m128i __a, __m128i __count)
{
  unsigned long long __c = (unsigned long long)((__u64x2)__count)[0];
  return (__m128i)((__c < 64) ? wasm_u64x2_shr((v128_t)__a, __c) : wasm_i64x2_const(0,0));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_eq((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_eq((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_eq((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_gt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_gt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_gt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmplt_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_lt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmplt_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_lt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmplt_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_lt((v128_t)__a, (v128_t)__b);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_cvtsi64_sd(__m128d __a, long long __b)
{
  // TODO: optimize
  union {
    double x[2];
    __m128d m;
  } m;
  m.m = __a;
  m.x[0] = (double)__b;
  return m.m;
}

static __inline__ long long __attribute__((__always_inline__, __nodebug__))
_mm_cvtsd_si64(__m128d __a)
{
  // TODO: optimize
  double e = __a[0];
  if (isnan(e) || isinf(e)) return 0x8000000000000000LL;
  long long x = llrint(e);
  if (e <= LLONG_MAX && e >= LLONG_MIN && (x != 0 || fabs(e) < 2.f))
    return x;
  else
    return 0x8000000000000000LL;
}

static __inline__ long long __attribute__((__always_inline__, __nodebug__))
_mm_cvttsd_si64(__m128d __a)
{
  // TODO: optimize
  double e = __a[0];
  if (isnan(e) || isinf(e) || e > LLONG_MAX || e < LLONG_MIN) return 0x8000000000000000LL;
  long long x = llrint(e);
  if (x != 0 || fabs(e) < 2.f)
    // Use the trapping instruction here since we have explicit bounds checks
    // above
    return __builtin_wasm_trunc_s_i64_f64(e);
  else
    return 0x8000000000000000LL;
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi32_ps(__m128i __a)
{
  return (__m128)wasm_f32x4_convert_i32x4(__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtps_epi32(__m128 __a)
{
  // TODO: optimize
  union {
    int x[4];
    __m128i m;
  } u;
  for(int i = 0; i < 4; ++i)
  {
    double e = __a[i];
    int x = lrint(e);
    if (e <= INT_MAX && e >= INT_MIN && (x != 0 || fabs(e) < 2.0))
      u.x[i] = x;
    else
      u.x[i] = (int)0x80000000;
  }
  return u.m;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvttps_epi32(__m128 __a)
{
  // TODO: optimize
  union {
    int x[4];
    __m128i m;
  } u;
  for(int i = 0; i < 4; ++i)
  {
    float e = __a[i];
    if (e < 2147483648.0f && e >= -2147483648.0f && (lrint(e) != 0 || fabs(e) < 2.0))
      // Use the trapping instruction here since we have explicit bounds checks
      // above.
      u.x[i] = __builtin_wasm_trunc_s_i32_f32(e);
    else
      u.x[i] = (int)0x80000000;
  }
  return u.m;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtsi32_si128(int __a)
{
  return (__m128i)wasm_i32x4_make(__a, 0, 0, 0);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtsi64_si128(long long __a)
{
  return (__m128i)wasm_i64x2_make(__a, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_cvtsi128_si32(__m128i __a)
{
  return wasm_i32x4_extract_lane(__a, 0);
}

static __inline__ long long __attribute__((__always_inline__, __nodebug__))
_mm_cvtsi128_si64(__m128i __a)
{
  return wasm_i64x2_extract_lane(__a, 0);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_load_si128(__m128i const *__p)
{
  return *__p;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_loadu_si128(__m128i const *__p)
{
  // UB-free unaligned access copied from wasm_simd128.h
  struct __mm_loadu_si128_struct {
    __m128i __v;
  } __attribute__((__packed__, __may_alias__));
  return ((struct __mm_loadu_si128_struct*)__p)->__v;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_loadu_si16(void const *__p)
{
  return (__m128i)wasm_v128_load16_lane(__p, wasm_i64x2_const(0, 0), 0);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_loadu_si32(void const *__p)
{
  return (__m128i)wasm_v128_load32_zero(__p);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_loadu_si64(void const *__p)
{
  return (__m128i)wasm_v128_load64_zero(__p);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_loadl_epi64(__m128i const *__p)
{
  return _mm_loadu_si64(__p);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set_epi64(long long q1, long long q0)
{
  return (__m128i)wasm_i64x2_make(q0, q1);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set_epi32(int i3, int i2, int i1, int i0)
{
  return (__m128i)wasm_i32x4_make(i0, i1, i2, i3);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set_epi16(short w7, short w6, short w5, short w4, short w3, short w2, short w1, short w0)
{
  return (__m128i)wasm_i16x8_make(w0, w1, w2, w3, w4, w5, w6, w7);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set_epi8(char b15, char b14, char b13, char b12, char b11, char b10, char b9, char b8, char b7, char b6, char b5, char b4, char b3, char b2, char b1, char b0)
{
  return (__m128i)wasm_i8x16_make(b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set1_epi64x(long long __q)
{
  return (__m128i)wasm_i64x2_splat(__q);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set1_epi32(int __i)
{
  return (__m128i)wasm_i32x4_splat(__i);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set1_epi16(short __w)
{
  return (__m128i)wasm_i16x8_splat(__w);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_set1_epi8(char __b)
{
  return (__m128i)wasm_i8x16_splat(__b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_setr_epi32(int i0, int i1, int i2, int i3)
{
  return (__m128i)wasm_i32x4_make(i0, i1, i2, i3);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_setr_epi16(short w0, short w1, short w2, short w3, short w4, short w5, short w6, short w7)
{
  return (__m128i)wasm_i16x8_make(w0, w1, w2, w3, w4, w5, w6, w7);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_setr_epi8(char b0, char b1, char b2, char b3, char b4, char b5, char b6, char b7, char b8, char b9, char b10, char b11, char b12, char b13, char b14, char b15)
{
  return (__m128i)wasm_i8x16_make(b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_setzero_si128(void)
{
  return wasm_i64x2_const(0, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_store_si128(__m128i *__p, __m128i __b)
{
  *__p = __b;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storeu_si16(void *__p, __m128i __a)
{
  wasm_v128_store16_lane(__p, (v128_t)__a, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storeu_si32(void *__p, __m128i __a)
{
  wasm_v128_store32_lane(__p, (v128_t)__a, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storeu_si64(void *__p, __m128i __a)
{
  wasm_v128_store64_lane(__p, (v128_t)__a, 0);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storeu_si128(__m128i *__p, __m128i __a)
{
  // UB-free unaligned access copied from wasm_simd128.h
  struct __mm_storeu_si128_struct {
    __m128i __v;
  } __attribute__((__packed__, __may_alias__));
  ((struct __mm_storeu_si128_struct *)__p)->__v = __a;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_maskmoveu_si128(__m128i __d, __m128i __n, char *__p)
{
  // TODO: optimize
  union {
    unsigned char x[16];
    __m128i m;
  } mask, data;
  mask.m = __n;
  data.m = __d;
  for(int i = 0; i < 16; ++i)
    if (mask.x[i] & 0x80)
      __p[i] = data.x[i];
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_storel_epi64(__m128i *__p, __m128i __a)
{
  _mm_storeu_si64(__p, __a);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_stream_pd(double *__p, __m128d __a)
{
  // Emscripten/SIMD.js does not have cache hinting.
  _mm_store_pd(__p, __a);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_stream_si128(__m128i *__p, __m128i __a)
{
  // Emscripten/SIMD.js does not have cache hinting.
  _mm_store_si128(__p, __a);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_stream_si32(int *__p, int __a)
{
  // No cache hinting available.
  *__p = __a;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_stream_si64(long long *__p, long long __a)
{
  // No cache hinting available.
  *__p = __a;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_clflush(void const *__p)
{
  // Wasm SIMD does not have cache hinting
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_lfence(void)
{
  __sync_synchronize(); // Wasm/SharedArrayBuffer has only a full barrier instruction, which gives a stronger guarantee.
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_mfence(void)
{
  __sync_synchronize(); // Wasm/SharedArrayBuffer has only a full barrier instruction, which gives a stronger guarantee.
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_packs_epi16(__m128i __a, __m128i __b)
{
  return wasm_i8x16_narrow_i16x8(__a, __b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_packs_epi32(__m128i __a, __m128i __b)
{
  return wasm_i16x8_narrow_i32x4(__a, __b);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_packus_epi16(__m128i __a, __m128i __b)
{
  return wasm_u8x16_narrow_i16x8(__a, __b);
}

#define _mm_extract_epi16(__a, __imm) wasm_u16x8_extract_lane((v128_t)(__a), (__imm) & 7)
#define _mm_insert_epi16(__a, __b, __imm) wasm_i16x8_replace_lane((__a), (__imm) & 7, (__b))

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_movemask_epi8(__m128i __a)
{
  return (int)wasm_i8x16_bitmask((v128_t)__a);
}

#define _mm_shuffle_epi32(__a, __imm) __extension__ ({ \\
  (__m128i)wasm_i32x4_shuffle((__a), \\
                              _mm_set1_epi32(0), \\
                              ((__imm) & 0x3), (((__imm) & 0xc) >> 2), \\
                              (((__imm) & 0x30) >> 4), (((__imm) & 0xc0) >> 6)); })

#define _mm_shufflelo_epi16(__a, __imm) __extension__ ({ \\
  (__m128i)wasm_i16x8_shuffle((__a), \\
                              _mm_set1_epi16(0), \\
                              ((__imm) & 0x3), (((__imm) & 0xc) >> 2), \\
                              (((__imm) & 0x30) >> 4), (((__imm) & 0xc0) >> 6), \\
                              4, 5, 6, 7); })

#define _mm_shufflehi_epi16(__a, __imm) __extension__ ({ \\
  (__m128i)wasm_i16x8_shuffle((__a), \\
                              _mm_set1_epi16(0), \\
                              0, 1, 2, 3, \\
                              (4 + (((__imm) & 0x03) >> 0)), \\
                              (4 + (((__imm) & 0x0c) >> 2)), \\
                              (4 + (((__imm) & 0x30) >> 4)), \\
                              (4 + (((__imm) & 0xc0) >> 6))); })

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpackhi_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_shuffle(__a, __b, 8, 24, 9, 25, 10, 26, 11, 27, 12, 28, 13, 29, 14, 30, 15, 31);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpackhi_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_shuffle(__a, __b, 4, 12, 5, 13, 6, 14, 7, 15);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpackhi_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_shuffle(__a, __b, 2, 6, 3, 7);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpackhi_epi64(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i64x2_shuffle(__a, __b, 1, 3);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpacklo_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_shuffle(__a, __b, 0, 16, 1, 17, 2, 18, 3, 19, 4, 20, 5, 21, 6, 22, 7, 23);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpacklo_epi16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i16x8_shuffle(__a, __b, 0, 8, 1, 9, 2, 10, 3, 11);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpacklo_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_shuffle(__a, __b, 0, 4, 1, 5);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_unpacklo_epi64(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i64x2_shuffle(__a, __b, 0, 2);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_move_epi64(__m128i __a)
{
  return wasm_i64x2_shuffle(__a, wasm_i64x2_const(0, 0), 0, 2);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_unpackhi_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_i64x2_shuffle((v128_t)__a, (v128_t)__b, 1, 3);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_unpacklo_pd(__m128d __a, __m128d __b)
{
  return (__m128d)wasm_i64x2_shuffle((v128_t)__a, (v128_t)__b, 0, 2);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_movemask_pd(__m128d __a)
{
  return (int)wasm_i64x2_bitmask((v128_t)__a);
}

#define _mm_shuffle_pd(__a, __b, __i) __extension__ ({ \\
  (__m128d) __builtin_shufflevector((__u64x2)(__a), (__u64x2)(__b), \\
                                    (__i) & 1, \\
                                    (((__i) & 2) >> 1) + 2); })

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_castpd_ps(__m128d __a)
{
  return (__m128)__a;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_castpd_si128(__m128d __a)
{
  return (__m128i)__a;
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_castps_pd(__m128 __a)
{
  return (__m128d)__a;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_castps_si128(__m128 __a)
{
  return (__m128i)__a;
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_castsi128_ps(__m128i __a)
{
  return (__m128)__a;
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_castsi128_pd(__m128i __a)
{
  return (__m128d)__a;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_pause(void)
{
  // No pause/wait instruction in Wasm/SIMD.
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_undefined_pd()
{
  __m128d val;
  return val;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_undefined_si128()
{
  __m128i val;
  return val;
}

// Must be in the very end as it uses other SSE2 intrinsics
static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sad_epu8(__m128i __a, __m128i __b)
{
  __m128i __diff = _mm_or_si128(_mm_subs_epu8(__a, __b),
                                _mm_subs_epu8(__b, __a));
  __diff = _mm_add_epi16(_mm_srli_epi16(__diff, 8),
                         _mm_and_si128(__diff, _mm_set1_epi16(0x00FF)));
  __diff = _mm_add_epi16(__diff, _mm_slli_epi32(__diff, 16));
  __diff = _mm_add_epi16(__diff, _mm_slli_epi64(__diff, 32));
  return _mm_srli_epi64(__diff, 48);
}

#define _MM_SHUFFLE2(x, y) (((x) << 1) | (y))

#endif /* __emscripten_emmintrin_h__ */
`,"pmmintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */
#ifndef __emscripten_pmmintrin_h__
#define __emscripten_pmmintrin_h__

#ifndef __SSE3__
#error "SSE3 instruction set not enabled"
#endif

#include <emmintrin.h>

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_lddqu_si128(__m128i const *__p)
{
  return _mm_loadu_si128(__p);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_addsub_ps(__m128 __a, __m128 __b)
{
  return _mm_add_ps(__a, _mm_mul_ps(__b, _mm_set_ps(1.f, -1.f, 1.f, -1.f)));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_hadd_ps(__m128 __a, __m128 __b)
{
  return _mm_add_ps(_mm_shuffle_ps(__a, __b, _MM_SHUFFLE(2, 0, 2, 0)), _mm_shuffle_ps(__a, __b, _MM_SHUFFLE(3, 1, 3, 1)));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_hsub_ps(__m128 __a, __m128 __b)
{
  return _mm_sub_ps(_mm_shuffle_ps(__a, __b, _MM_SHUFFLE(2, 0, 2, 0)), _mm_shuffle_ps(__a, __b, _MM_SHUFFLE(3, 1, 3, 1)));
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_movehdup_ps(__m128 __a)
{
  return (__m128)wasm_i32x4_shuffle(__a, __a, 1, 1, 3, 3);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_moveldup_ps(__m128 __a)
{
  return (__m128)wasm_i32x4_shuffle(__a, __a, 0, 0, 2, 2);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_addsub_pd(__m128d __a, __m128d __b)
{
  return _mm_add_pd(__a, _mm_mul_pd(__b, _mm_set_pd(1.0, -1.0)));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_hadd_pd(__m128d __a, __m128d __b)
{
  return _mm_add_pd(_mm_shuffle_pd(__a, __b, _MM_SHUFFLE2(0, 0)), _mm_shuffle_pd(__a, __b, _MM_SHUFFLE2(1, 1)));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_hsub_pd(__m128d __a, __m128d __b)
{
  return _mm_sub_pd(_mm_shuffle_pd(__a, __b, _MM_SHUFFLE2(0, 0)), _mm_shuffle_pd(__a, __b, _MM_SHUFFLE2(1, 1)));
}

#define        _mm_loaddup_pd(dp)        _mm_load1_pd(dp)

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_movedup_pd(__m128d __a)
{
  return (__m128d)wasm_i64x2_shuffle(__a, __a, 0, 0);
}

#define _MM_DENORMALS_ZERO_ON   (0x0040)
#define _MM_DENORMALS_ZERO_OFF  (0x0000)
#define _MM_DENORMALS_ZERO_MASK (0x0040)
#define _MM_GET_DENORMALS_ZERO_MODE() (_mm_getcsr() & _MM_DENORMALS_ZERO_MASK)

// Unavailable functions:
// #define _MM_SET_DENORMALS_ZERO_MODE(x) (_mm_setcsr((_mm_getcsr() & ~_MM_DENORMALS_ZERO_MASK) | (x)))
// void _mm_monitor(void const *__p, unsigned __extensions, unsigned __hints);
// void _mm_mwait(unsigned __extensions, unsigned __hints);

#endif /* __emscripten_pmmintrin_h__ */
`,"tmmintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */
#ifndef __emscripten_tmmintrin_h__
#define __emscripten_tmmintrin_h__

#ifndef __SSSE3__
#error "SSSE3 instruction set not enabled"
#endif

#include <pmmintrin.h>

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_abs_epi8(__m128i __a)
{
  return (__m128i)wasm_i8x16_abs((v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_abs_epi16(__m128i __a)
{
  return (__m128i)wasm_i16x8_abs((v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_abs_epi32(__m128i __a)
{
  return (__m128i)wasm_i32x4_abs((v128_t)__a);
}

#define _mm_alignr_epi8(__a, __b, __count) \\
    ((__count <= 16) \\
    ? (_mm_or_si128(_mm_bslli_si128((__a), 16 - (((unsigned int)(__count)) & 0xFF)), _mm_bsrli_si128((__b), (((unsigned int)(__count)) & 0xFF)))) \\
    : (_mm_bsrli_si128((__a), (((unsigned int)(__count)) & 0xFF) - 16)))

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_hadd_epi16(__m128i __a, __m128i __b)
{
  return _mm_add_epi16((__m128i)wasm_i16x8_shuffle(__a, __b, 0, 2, 4, 6, 8, 10, 12, 14),
                       (__m128i)wasm_i16x8_shuffle(__a, __b, 1, 3, 5, 7, 9, 11, 13, 15));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_hadd_epi32(__m128i __a, __m128i __b)
{
  return _mm_add_epi32((__m128i)_mm_shuffle_ps((__m128)__a, (__m128)__b, _MM_SHUFFLE(2, 0, 2, 0)),
                       (__m128i)_mm_shuffle_ps((__m128)__a, (__m128)__b, _MM_SHUFFLE(3, 1, 3, 1)));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_hadds_epi16(__m128i __a, __m128i __b)
{
  return _mm_adds_epi16((__m128i)wasm_i16x8_shuffle(__a, __b, 0, 2, 4, 6, 8, 10, 12, 14),
                        (__m128i)wasm_i16x8_shuffle(__a, __b, 1, 3, 5, 7, 9, 11, 13, 15));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_hsub_epi16(__m128i __a, __m128i __b)
{
  return _mm_sub_epi16((__m128i)wasm_i16x8_shuffle(__a, __b, 0, 2, 4, 6, 8, 10, 12, 14),
                       (__m128i)wasm_i16x8_shuffle(__a, __b, 1, 3, 5, 7, 9, 11, 13, 15));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_hsub_epi32(__m128i __a, __m128i __b)
{
  return _mm_sub_epi32((__m128i)_mm_shuffle_ps((__m128)__a, (__m128)__b, _MM_SHUFFLE(2, 0, 2, 0)),
                       (__m128i)_mm_shuffle_ps((__m128)__a, (__m128)__b, _MM_SHUFFLE(3, 1, 3, 1)));
}


static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_hsubs_epi16(__m128i __a, __m128i __b)
{
  return _mm_subs_epi16((__m128i)wasm_i16x8_shuffle(__a, __b, 0, 2, 4, 6, 8, 10, 12, 14),
                        (__m128i)wasm_i16x8_shuffle(__a, __b, 1, 3, 5, 7, 9, 11, 13, 15));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_maddubs_epi16(__m128i __a, __m128i __b)
{
  return _mm_adds_epi16(
    _mm_mullo_epi16(
      _mm_and_si128(__a, _mm_set1_epi16(0x00FF)),
      _mm_srai_epi16(_mm_slli_epi16(__b, 8), 8)),
    _mm_mullo_epi16(_mm_srli_epi16(__a, 8), _mm_srai_epi16(__b, 8)));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mulhrs_epi16(__m128i __a, __m128i __b)
{
  v128_t __lo = wasm_i32x4_mul(wasm_i32x4_widen_low_i16x8((v128_t)__a), wasm_i32x4_widen_low_i16x8((v128_t)__b));
  v128_t __hi = wasm_i32x4_mul(wasm_i32x4_widen_high_i16x8((v128_t)__a), wasm_i32x4_widen_high_i16x8((v128_t)__b));
  const v128_t __inc = wasm_i32x4_splat(0x4000);
  __lo = wasm_i32x4_add(__lo, __inc);
  __hi = wasm_i32x4_add(__hi, __inc);
  __lo = wasm_i32x4_add(__lo, __lo);
  __hi = wasm_i32x4_add(__hi, __hi);
  return (__m128i)wasm_i16x8_shuffle(__lo, __hi, 1, 3, 5, 7, 9, 11, 13, 15);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_shuffle_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_v8x16_swizzle((v128_t)__a, (v128_t)_mm_and_si128(__b, _mm_set1_epi8(0x8F)));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sign_epi8(__m128i __a, __m128i __b)
{
  const __m128i __zero = _mm_setzero_si128();
  __a = _mm_andnot_si128(_mm_cmpeq_epi8(__b, __zero), __a);
  const __m128i __mask = _mm_cmpgt_epi8(__zero, __b);
  return _mm_xor_si128(_mm_add_epi8(__a, __mask), __mask);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sign_epi16(__m128i __a, __m128i __b)
{
  const __m128i __zero = _mm_setzero_si128();
  __a = _mm_andnot_si128(_mm_cmpeq_epi16(__b, __zero), __a);
  const __m128i __mask = _mm_cmpgt_epi16(__zero, __b);
  return _mm_xor_si128(_mm_add_epi16(__a, __mask), __mask);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_sign_epi32(__m128i __a, __m128i __b)
{
  const __m128i __zero = _mm_setzero_si128();
  __a = _mm_andnot_si128(_mm_cmpeq_epi32(__b, __zero), __a);
  const __m128i __mask = _mm_cmpgt_epi32(__zero, __b);
  return _mm_xor_si128(_mm_add_epi32(__a, __mask), __mask);
}

// Unavailable functions:
// _mm_abs_pi8
// _mm_abs_pi16
// _mm_abs_pi32
// _mm_alignr_pi8
// _mm_hadd_pi16
// _mm_hadd_pi32
// _mm_hadds_pi16
// _mm_hsub_pi16
// _mm_hsub_pi32
// _mm_hsubs_pi16
// _mm_maddubs_pi16
// _mm_mulhrs_pi16
// _mm_shuffle_pi8
// _mm_sign_pi8
// _mm_sign_pi16
// _mm_sign_pi32

#endif /* __emscripten_tmmintrin_h__ */
`,"smmintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */
#ifndef __emscripten_smmintrin_h__
#define __emscripten_smmintrin_h__

#ifndef __SSE4_1__
#error "SSE4.1 instruction set not enabled"
#endif

#include <tmmintrin.h>
#include <math.h> // For rint and rintf

#define _mm_blend_epi16(__a, __b, __imm8) __extension__ ({     \\
  (__m128i)__builtin_shufflevector((__i16x8)(__m128i)(__a),    \\
                                   (__i16x8)(__m128i)(__b),    \\
                                   (((__imm8) & 1) ?  8 : 0),  \\
                                   (((__imm8) & 2) ?  9 : 1),  \\
                                   (((__imm8) & 4) ? 10 : 2),  \\
                                   (((__imm8) & 8) ? 11 : 3),  \\
                                   (((__imm8) & 16) ? 12 : 4), \\
                                   (((__imm8) & 32) ? 13 : 5), \\
                                   (((__imm8) & 64) ? 14 : 6), \\
                                   (((__imm8) & 128) ? 15 : 7)); })

#define _mm_blend_pd(__a, __b, __imm8) __extension__ ({         \\
  (__m128d)__builtin_shufflevector((__f64x2)(__m128d)(__a),     \\
                                   (__f64x2)(__m128d)(__b),     \\
                                   (((__imm8) & 0x01) ? 2 : 0), \\
                                   (((__imm8) & 0x02) ? 3 : 1)); })

#define _mm_blend_ps(__a, __b, __imm8) __extension__ ({ \\
  (__m128)__builtin_shufflevector((__f32x4)(__m128)(__a), (__f32x4)(__m128)(__b), \\
                                  (((__imm8) & 0x01) ? 4 : 0), \\
                                  (((__imm8) & 0x02) ? 5 : 1), \\
                                  (((__imm8) & 0x04) ? 6 : 2), \\
                                  (((__imm8) & 0x08) ? 7 : 3)); })

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_blendv_epi8(__m128i __a, __m128i __b, __m128i __mask)
{
  v128_t __M = wasm_i8x16_shr((v128_t)__mask, 7);
  return (__m128i)wasm_v128_bitselect((v128_t)__b, (v128_t)__a, __M);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_blendv_pd(__m128d __a, __m128d __b, __m128d __mask)
{
  v128_t __M = wasm_i64x2_shr((v128_t)__mask, 63);
  return (__m128d)wasm_v128_bitselect((v128_t)__b, (v128_t)__a, __M);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_blendv_ps(__m128 __a, __m128 __b, __m128 __mask)
{
  v128_t __M = wasm_i32x4_shr((v128_t)__mask, 31);
  return (__m128)wasm_v128_bitselect((v128_t)__b, (v128_t)__a, __M);
}

#define _MM_FROUND_TO_NEAREST_INT    0x00
#define _MM_FROUND_TO_NEG_INF        0x01
#define _MM_FROUND_TO_POS_INF        0x02
#define _MM_FROUND_TO_ZERO           0x03
#define _MM_FROUND_CUR_DIRECTION     0x04

#define _MM_FROUND_RAISE_EXC         0x00
#define _MM_FROUND_NO_EXC            0x08

#define _MM_FROUND_NINT      (_MM_FROUND_RAISE_EXC | _MM_FROUND_TO_NEAREST_INT)
#define _MM_FROUND_FLOOR     (_MM_FROUND_RAISE_EXC | _MM_FROUND_TO_NEG_INF)
#define _MM_FROUND_CEIL      (_MM_FROUND_RAISE_EXC | _MM_FROUND_TO_POS_INF)
#define _MM_FROUND_TRUNC     (_MM_FROUND_RAISE_EXC | _MM_FROUND_TO_ZERO)
#define _MM_FROUND_RINT      (_MM_FROUND_RAISE_EXC | _MM_FROUND_CUR_DIRECTION)
#define _MM_FROUND_NEARBYINT (_MM_FROUND_NO_EXC | _MM_FROUND_CUR_DIRECTION)

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_ceil_pd(__m128d __a)
{
  return (__m128d)wasm_f64x2_ceil((v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_ceil_ps(__m128 __a)
{
  return (__m128)wasm_f32x4_ceil((v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_ceil_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_ceil_ps(__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_ceil_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_ceil_pd(__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_floor_pd(__m128d __a)
{
  return (__m128d)wasm_f64x2_floor((v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_floor_ps(__m128 __a)
{
  return (__m128)wasm_f32x4_floor((v128_t)__a);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_floor_ss(__m128 __a, __m128 __b)
{
  return _mm_move_ss(__a, _mm_floor_ps(__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_floor_sd(__m128d __a, __m128d __b)
{
  return _mm_move_sd(__a, _mm_floor_pd(__b));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_round_pd(__m128d __a, int __rounding)
{
  switch(__rounding & 7)
  {
    case _MM_FROUND_TO_NEG_INF: return _mm_floor_pd(__a);
    case _MM_FROUND_TO_POS_INF: return _mm_ceil_pd(__a);
    case _MM_FROUND_TO_ZERO:
      return (__m128d)wasm_f64x2_trunc((v128_t)__a);
    default:
      // _MM_FROUND_TO_NEAREST_INT and _MM_FROUND_CUR_DIRECTION (which is always nearest in Wasm SIMD)
      // SSE implements "Banker's rounding", where even half-ways, e.g. 2.5 are rounded down,
      // and odd numbers e.g. 3.5 are rounded up.
      return (__m128d)wasm_f64x2_nearest((v128_t)__a);
  }
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_round_ps(__m128 __a, int __rounding)
{
  switch(__rounding & 7)
  {
    case _MM_FROUND_TO_NEG_INF: return _mm_floor_ps(__a);
    case _MM_FROUND_TO_POS_INF: return _mm_ceil_ps(__a);
    case _MM_FROUND_TO_ZERO:
      return (__m128)wasm_f32x4_trunc((v128_t)__a);
    default:
      // _MM_FROUND_TO_NEAREST_INT and _MM_FROUND_CUR_DIRECTION (which is always nearest in Wasm SIMD)
      // SSE implements "Banker's rounding", where even half-ways, e.g. 2.5 are rounded down,
      // and odd numbers e.g. 3.5 are rounded up.
      return (__m128)wasm_f32x4_nearest((v128_t)__a);
  }
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_round_ss(__m128 __a, __m128 __b, int __rounding)
{
  return _mm_move_ss(__a, _mm_round_ps(__b, __rounding));
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_round_sd(__m128d __a, __m128d __b, int __rounding)
{
  return _mm_move_sd(__a, _mm_round_pd(__b, __rounding));
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mullo_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_mul(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mul_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i64x2_extmul_low_i32x4(
      (v128_t)_mm_shuffle_epi32(__a, _MM_SHUFFLE(2, 0, 2, 0)),
      (v128_t)_mm_shuffle_epi32(__b, _MM_SHUFFLE(2, 0, 2, 0)));
}

#define _mm_dp_ps(__a, __b, __imm8) __extension__ ({ \\
        __m128 __tmp = _mm_mul_ps(__a, __b); \\
        __m128 __zero = _mm_setzero_ps(); \\
        __tmp = _mm_blend_ps(__zero, __tmp, __imm8 >> 4); \\
        __m128 __sum = _mm_add_ps(__tmp, _mm_shuffle_ps(__tmp, __tmp, _MM_SHUFFLE(2, 3, 0, 1))); \\
        __sum = _mm_add_ps(__sum, _mm_shuffle_ps(__sum, __sum, _MM_SHUFFLE(1, 0, 3, 2))); \\
        _mm_blend_ps(__zero, __sum, __imm8); })

#define _mm_dp_pd(__a, __b, __imm8) __extension__ ({ \\
        __m128d __tmp = _mm_mul_pd(__a, __b); \\
        __m128d __zero = _mm_setzero_pd(); \\
        __tmp = _mm_blend_pd(__zero, __tmp, __imm8 >> 4); \\
        __m128d __sum = _mm_add_pd(__tmp, _mm_shuffle_pd(__tmp, __tmp, _MM_SHUFFLE2(0, 1))); \\
        _mm_blend_pd(__zero, __sum, __imm8); })

#define _mm_stream_load_si128 _mm_load_si128

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_min_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_min(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_max_epi8(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i8x16_max(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_min_epu16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u16x8_min(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_max_epu16(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u16x8_max(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_min_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_min(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_max_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_i32x4_max(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_min_epu32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u32x4_min(__a, __b);
}

static __inline__  __m128i __attribute__((__always_inline__, __nodebug__))
_mm_max_epu32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u32x4_max(__a, __b);
}

#define _mm_insert_ps(__a, __b, __imm8) __extension__ ({       \\
        _Static_assert(__builtin_constant_p(__imm8), "Expected constant"); \\
        __m128 __tmp = __builtin_shufflevector((__f32x4)__a, (__f32x4)__b, \\
                            ((((__imm8) >> 4) & 3) == 0) ? ((((__imm8) >> 6) & 3) + 4) : 0, \\
                            ((((__imm8) >> 4) & 3) == 1) ? ((((__imm8) >> 6) & 3) + 4) : 1, \\
                            ((((__imm8) >> 4) & 3) == 2) ? ((((__imm8) >> 6) & 3) + 4) : 2, \\
                            ((((__imm8) >> 4) & 3) == 3) ? ((((__imm8) >> 6) & 3) + 4) : 3); \\
        (__m128)__builtin_shufflevector(__tmp, _mm_setzero_ps(), \\
                                        (((__imm8) & 1) ? 4 : 0), \\
                                        (((__imm8) & 2) ? 5 : 1), \\
                                        (((__imm8) & 4) ? 6 : 2), \\
                                        (((__imm8) & 8) ? 7 : 3)); })

#define _mm_extract_ps(__a, __imm8)                                                                \\
  __extension__({ wasm_i32x4_extract_lane((v128_t)(__a), (__imm8)&3); })

#define _MM_EXTRACT_FLOAT(D, X, N) (__extension__ ({ __f32x4 __a = (__f32x4)(X); \\
                                                    (D) = __a[N]; }))

#define _MM_MK_INSERTPS_NDX(X, Y, Z) (((X) << 6) | ((Y) << 4) | (Z))

#define _MM_PICK_OUT_PS(X, N) _mm_insert_ps(_mm_setzero_ps(), (X),   \\
                                             _MM_MK_INSERTPS_NDX((N), 0, 0x0e))

#define _mm_insert_epi8(__a, __i, __imm8) __extension__ ({    \\
                                     (__m128i)wasm_i8x16_replace_lane((__a), (__imm8) & 15, (__i)); })

#define _mm_insert_epi32(__a, __i, __imm8) __extension__ ({    \\
                                     (__m128i)wasm_i32x4_replace_lane((__a), (__imm8) & 3, (__i)); })

#define _mm_insert_epi64(__a, __i, __imm8) __extension__ ({    \\
                                     (__m128i)wasm_i64x2_replace_lane((__a), (__imm8) & 1, (__i)); })

#define _mm_extract_epi8(__a, __imm8) __extension__ ({       \\
                                       wasm_u8x16_extract_lane((__a), (__imm8) & 15); })

#define _mm_extract_epi32(__a, __imm8) __extension__ ({       \\
                                       wasm_i32x4_extract_lane((__a), (__imm8) & 3); })

#define _mm_extract_epi64(__a, __imm8) __extension__ ({       \\
                                       wasm_i64x2_extract_lane((__a), (__imm8) & 1); })

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_testz_si128(__m128i __a, __m128i __b)
{
  v128_t __m = wasm_v128_and(__a, __b);
  return (wasm_i64x2_extract_lane(__m, 0) | wasm_i64x2_extract_lane(__m, 1)) == 0;
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_testc_si128(__m128i __a, __m128i __b)
{
  v128_t __m = wasm_v128_andnot(__b, __a);
  return (wasm_i64x2_extract_lane(__m, 0) | wasm_i64x2_extract_lane(__m, 1)) == 0;
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_testnzc_si128(__m128i __a, __m128i __b)
{
  v128_t __m1 = wasm_v128_and(__a, __b);
  v128_t __m2 = wasm_v128_andnot(__b, __a);
  return (wasm_i64x2_extract_lane(__m1, 0) | wasm_i64x2_extract_lane(__m1, 1))
      && (wasm_i64x2_extract_lane(__m2, 0) | wasm_i64x2_extract_lane(__m2, 1));
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_test_all_ones(__m128i __a)
{
  return (wasm_i64x2_extract_lane(__a, 0) & wasm_i64x2_extract_lane(__a, 1)) == 0xFFFFFFFFFFFFFFFFull;
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_test_all_zeros(__m128i __a, __m128i __mask)
{
  v128_t __m = wasm_v128_and(__a, __mask);
  return (wasm_i64x2_extract_lane(__m, 0) | wasm_i64x2_extract_lane(__m, 1)) == 0;
}

static __inline__ int __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
_mm_test_mix_ones_zeros(__m128i __a, __m128i __mask)
{
  v128_t __m = wasm_v128_and(__a, __mask);
  long long __c0 = wasm_i64x2_extract_lane(__m, 0);
  long long __c1 = wasm_i64x2_extract_lane(__m, 1);
  long long __ones = __c0 | __c1;
  long long __zeros = ~(__c0 & __c1);
  return __ones && __zeros;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpeq_epi64(__m128i __a, __m128i __b)
{
  const __m128i __mask = _mm_cmpeq_epi32(__a, __b);
  return _mm_and_si128(__mask, _mm_shuffle_epi32(__mask, _MM_SHUFFLE(2, 3, 0, 1)));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi8_epi16(__m128i __a)
{
  return (__m128i)wasm_i16x8_widen_low_i8x16((v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi8_epi32(__m128i __a)
{
  return (__m128i)wasm_i32x4_widen_low_i16x8(wasm_i16x8_widen_low_i8x16((v128_t)__a));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi8_epi64(__m128i __a)
{
  const __m128i __exta = _mm_cvtepi8_epi32(__a);
  const __m128i __sign = _mm_cmpgt_epi32(_mm_setzero_si128(), __exta);
  return _mm_unpacklo_epi32(__exta, __sign);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi16_epi32(__m128i __a)
{
  return (__m128i)wasm_i32x4_widen_low_i16x8((v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi16_epi64(__m128i __a)
{
  const __m128i __exta = _mm_cvtepi16_epi32(__a);
  const __m128i __sign = _mm_cmpgt_epi32(_mm_setzero_si128(), __exta);
  return _mm_unpacklo_epi32(__exta, __sign);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepi32_epi64(__m128i __a)
{
  const __m128i __sign = _mm_cmpgt_epi32(_mm_setzero_si128(), __a);
  return _mm_unpacklo_epi32(__a, __sign);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepu8_epi16(__m128i __a)
{
  return (__m128i)wasm_u16x8_extend_low_u8x16((v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepu8_epi32(__m128i __a)
{
  return (__m128i)wasm_u32x4_extend_low_u16x8(wasm_i16x8_widen_low_u8x16((v128_t)__a));
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepu8_epi64(__m128i __a)
{
  const __m128i __zero = _mm_setzero_si128();
  return _mm_unpacklo_epi32(_mm_unpacklo_epi16(_mm_unpacklo_epi8(__a, __zero), __zero), __zero);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepu16_epi32(__m128i __a)
{
  return (__m128i)wasm_u32x4_extend_low_u16x8((v128_t)__a);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepu16_epi64(__m128i __a)
{
  const __m128i __zero = _mm_setzero_si128();
  return _mm_unpacklo_epi32(_mm_unpacklo_epi16(__a, __zero), __zero);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cvtepu32_epi64(__m128i __a)
{
  const __m128i __zero = _mm_setzero_si128();
  return _mm_unpacklo_epi32(__a, __zero);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_packus_epi32(__m128i __a, __m128i __b)
{
  return (__m128i)wasm_u16x8_narrow_i32x4(__a, __b);
}

static __inline__ unsigned short __attribute__((__always_inline__, __nodebug__))
__uabs(int __i)
{
  return (unsigned short)((__i >= 0) ? __i : -__i);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_mpsadbw_epu8(__m128i __a, __m128i __b, int __imm8)
{
  int __aOffset = __imm8 & 4;
  int __bOffset = (__imm8 & 3) << 2;
  unsigned short __ret[8];
  for(int __i = 0; __i < 8; ++__i)
  {
    __ret[__i] = __uabs(((__u8x16)__a)[__i + __aOffset    ] - ((__u8x16)__b)[__bOffset    ])
               + __uabs(((__u8x16)__a)[__i + __aOffset + 1] - ((__u8x16)__b)[__bOffset + 1])
               + __uabs(((__u8x16)__a)[__i + __aOffset + 2] - ((__u8x16)__b)[__bOffset + 2])
               + __uabs(((__u8x16)__a)[__i + __aOffset + 3] - ((__u8x16)__b)[__bOffset + 3]);
  }
  return (__m128i)wasm_v128_load(__ret);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_minpos_epu16(__m128i __a)
{
  unsigned short __min[2] = { 0xFFFF, 0 };
  for(int __i = 0; __i < 8; ++__i)
  {
    unsigned short __v = ((__u16x8)__a)[__i];
    if (__v < __min[0])
    {
      __min[0] = __v;
      __min[1] = __i;
    }
  }
  return (__m128i)wasm_i32x4_make(*(int*)__min, 0, 0, 0);
}

// Clang and GCC compatibility: Both Clang and GCC include SSE4.2 headers from SSE4.1 headers
#ifdef __SSE4_2__
#include <nmmintrin.h>
#endif

#endif /* __emscripten_smmintrin_h__ */
`,"nmmintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */
#ifndef __emscripten_nmmintrin_h__
#define __emscripten_nmmintrin_h__

#ifndef __SSE4_2__
#error "SSE4.2 instruction set not enabled"
#endif

#include <smmintrin.h>

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_cmpgt_epi64(__m128i __a, __m128i __b)
{
  return wasm_i64x2_gt(__a, __b);
}

// Unsupported functions:
// _mm_cmpestra
// _mm_cmpestrc
// _mm_cmpestri
// _mm_cmpestrm
// _mm_cmpestro
// _mm_cmpestrs
// _mm_cmpestrz
// _mm_cmpistra
// _mm_cmpistrc
// _mm_cmpistri
// _mm_cmpistrm
// _mm_cmpistro
// _mm_cmpistrs
// _mm_cmpistrz
// _mm_crc32_u16
// _mm_crc32_u32
// _mm_crc32_u64
// _mm_crc32_u8

#endif /* __emscripten_nmmintrin_h__ */
`,"avxintrin.h":`/*
 * Copyright 2020 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */

#ifndef __emscripten_immintrin_h__
#error "Never use <avxintrin.h> directly; include <immintrin.h> instead."
#endif

#ifndef __emscripten_avxintrin_h__
#define __emscripten_avxintrin_h__

#ifndef __AVX__
#error "AVX instruction set not enabled"
#endif

typedef float __m256 __attribute__((__vector_size__(32), __aligned__(32)));
typedef double __m256d __attribute__((__vector_size__(32), __aligned__(32)));
typedef int32_t __m256i __attribute__((__vector_size__(32), __aligned__(32)));

typedef int32_t __m128i_u __attribute__((__vector_size__(16), __aligned__(1)));
typedef int32_t __m256i_u __attribute__((__vector_size__(32), __aligned__(1)));

typedef struct {
  __m128d v0;
  __m128d v1;
} __m256d_internal;

typedef struct {
  __m128 v0;
  __m128 v1;
} __m256_internal;

typedef struct {
    __m128i v0;
    __m128i v1;
} __m256i_internal;

static __inline__ __m256_internal __m256_to_internal(__m256 a) {
  union {
    __m256 in;
    __m256_internal out;
  } ret;
  ret.in = a;
  return ret.out;
}

static __inline__ __m256 __m256_from_internal(__m256_internal a) {
  union {
    __m256_internal in;
    __m256 out;
  } ret;
  ret.in = a;
  return ret.out;
}

static __inline__ __m256d_internal __m256d_to_internal(__m256d a) {
  union {
    __m256d in;
    __m256d_internal out;
  } ret;
  ret.in = a;
  return ret.out;
}

static __inline__ __m256d __m256d_from_internal(__m256d_internal a) {
  union {
    __m256d_internal in;
    __m256d out;
  } ret;
  ret.in = a;
  return ret.out;
}

static __inline__ __m256i_internal __m256i_to_internal(__m256i a) {
  union {
    __m256i in;
    __m256i_internal out;
  } ret;
  ret.in = a;
  return ret.out;
}

static __inline__ __m256i __m256i_from_internal(__m256i_internal a) {
  union {
    __m256i_internal in;
    __m256i out;
  } ret;
  ret.in = a;
  return ret.out;
}

union __m256_data {
  __m256i int_view;
  __m256d double_view;
  __m256 float_view;
  __m128i_u int_u_view;
};

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_add_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_add_pd(a.v0, b.v0);
  ret.v1 = _mm_add_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_add_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_add_ps(a.v0, b.v0);
  ret.v1 = _mm_add_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_sub_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_sub_pd(a.v0, b.v0);
  ret.v1 = _mm_sub_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_sub_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_sub_ps(a.v0, b.v0);
  ret.v1 = _mm_sub_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_addsub_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_addsub_pd(a.v0, b.v0);
  ret.v1 = _mm_addsub_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_addsub_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_addsub_ps(a.v0, b.v0);
  ret.v1 = _mm_addsub_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_div_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_div_pd(a.v0, b.v0);
  ret.v1 = _mm_div_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_div_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_div_ps(a.v0, b.v0);
  ret.v1 = _mm_div_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_max_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_max_pd(a.v0, b.v0);
  ret.v1 = _mm_max_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_max_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_max_ps(a.v0, b.v0);
  ret.v1 = _mm_max_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_min_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_min_pd(a.v0, b.v0);
  ret.v1 = _mm_min_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_min_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_min_ps(a.v0, b.v0);
  ret.v1 = _mm_min_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_mul_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_mul_pd(a.v0, b.v0);
  ret.v1 = _mm_mul_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_mul_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_mul_ps(a.v0, b.v0);
  ret.v1 = _mm_mul_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_sqrt_pd(__m256d __a) {
  __m256d_internal ret, a;
  a = __m256d_to_internal(__a);
  ret.v0 = _mm_sqrt_pd(a.v0);
  ret.v1 = _mm_sqrt_pd(a.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_sqrt_ps(__m256 __a) {
  __m256_internal ret, a;
  a = __m256_to_internal(__a);
  ret.v0 = _mm_sqrt_ps(a.v0);
  ret.v1 = _mm_sqrt_ps(a.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_rsqrt_ps(__m256 __a) {
  __m256_internal ret, a;
  a = __m256_to_internal(__a);
  ret.v0 = _mm_rsqrt_ps(a.v0);
  ret.v1 = _mm_rsqrt_ps(a.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_rcp_ps(__m256 __a) {
  __m256_internal ret, a;
  a = __m256_to_internal(__a);
  ret.v0 = _mm_rcp_ps(a.v0);
  ret.v1 = _mm_rcp_ps(a.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_round_pd(__m256d __a, int __rounding) {
  __m256d_internal ret, a;
  a = __m256d_to_internal(__a);
  ret.v0 = _mm_round_pd(a.v0, __rounding);
  ret.v1 = _mm_round_pd(a.v1, __rounding);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_round_ps(__m256 __a, int __rounding) {
  __m256_internal ret, a;
  a = __m256_to_internal(__a);
  ret.v0 = _mm_round_ps(a.v0, __rounding);
  ret.v1 = _mm_round_ps(a.v1, __rounding);
  return __m256_from_internal(ret);
}

#define _mm256_ceil_pd(V) _mm256_round_pd((V), _MM_FROUND_CEIL)
#define _mm256_floor_pd(V) _mm256_round_pd((V), _MM_FROUND_FLOOR)
#define _mm256_ceil_ps(V) _mm256_round_ps((V), _MM_FROUND_CEIL)
#define _mm256_floor_ps(V) _mm256_round_ps((V), _MM_FROUND_FLOOR)

static __inline__ __m256d
  __attribute__((__always_inline__, __nodebug__)) _mm256_and_pd(__m256d __a,
                                                                __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_and_pd(a.v0, b.v0);
  ret.v1 = _mm_and_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_and_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_and_ps(a.v0, b.v0);
  ret.v1 = _mm_and_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_andnot_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_andnot_pd(a.v0, b.v0);
  ret.v1 = _mm_andnot_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_andnot_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_andnot_ps(a.v0, b.v0);
  ret.v1 = _mm_andnot_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_or_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_or_pd(a.v0, b.v0);
  ret.v1 = _mm_or_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_or_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_or_ps(a.v0, b.v0);
  ret.v1 = _mm_or_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_xor_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_xor_pd(a.v0, b.v0);
  ret.v1 = _mm_xor_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_xor_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_xor_ps(a.v0, b.v0);
  ret.v1 = _mm_xor_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_hadd_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_hadd_pd(a.v0, b.v0);
  ret.v1 = _mm_hadd_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_hadd_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_hadd_ps(a.v0, b.v0);
  ret.v1 = _mm_hadd_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_hsub_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_hsub_pd(a.v0, b.v0);
  ret.v1 = _mm_hsub_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_hsub_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_hsub_ps(a.v0, b.v0);
  ret.v1 = _mm_hsub_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_permutevar_pd(__m128d __a, __m128i __c) {
  return (__m128d)wasm_f64x2_make(
    ((__f64x2)__a)[(wasm_i64x2_extract_lane(__c, 0) >> 1) & 1],
    ((__f64x2)__a)[(wasm_i64x2_extract_lane(__c, 1) >> 1) & 1]);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_permutevar_pd(__m256d __a, __m256i __c) {
  __m256d_internal ret, a;
  __m256i_internal c;
  a = __m256d_to_internal(__a);
  c = __m256i_to_internal(__c);
  ret.v0 = _mm_permutevar_pd(a.v0, c.v0);
  ret.v1 = _mm_permutevar_pd(a.v1, c.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_permutevar_ps(__m128 __a, __m128i __c) {
  return (__m128)wasm_f32x4_make(
    ((__f32x4)__a)[wasm_i32x4_extract_lane(__c, 0) & 3],
    ((__f32x4)__a)[wasm_i32x4_extract_lane(__c, 1) & 3],
    ((__f32x4)__a)[wasm_i32x4_extract_lane(__c, 2) & 3],
    ((__f32x4)__a)[wasm_i32x4_extract_lane(__c, 3) & 3]);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_permutevar_ps(__m256 __a, __m256i __c) {
  __m256_internal ret, a;
  __m256i_internal c;
  a = __m256_to_internal(__a);
  c = __m256i_to_internal(__c);
  ret.v0 = _mm_permutevar_ps(a.v0, c.v0);
  ret.v1 = _mm_permutevar_ps(a.v1, c.v1);
  return __m256_from_internal(ret);
}

#define _mm_permute_pd(__a, __imm)                                             \\
  ((__m128d)wasm_i64x2_shuffle(                                                \\
    (__m128d)(__a), (__m128d)(__a), ((__imm) & 1), (((__imm) >> 1) & 1)))

#define _mm256_permute_pd(__A, __imm)                                          \\
  __extension__({                                                              \\
    __m256d_internal __a = __m256d_to_internal(__A);                             \\
    _mm256_set_m128d(_mm_permute_pd(__a.v1, (__imm) >> 2),                     \\
                     _mm_permute_pd(__a.v0, (__imm)));                         \\
  })

#define _mm_permute_ps(__a, __imm)                                             \\
  ((__m128)wasm_i32x4_shuffle((__m128)(__a),                                   \\
                              (__m128)(__a),                                   \\
                              ((__imm) & 3),                                   \\
                              (((__imm) >> 2) & 3),                            \\
                              (((__imm) >> 4) & 3),                            \\
                              (((__imm) >> 6) & 3)))

#define _mm256_permute_ps(__A, __imm)                                          \\
  __extension__({                                                              \\
    __m256_internal __a = __m256_to_internal(__A);                               \\
    _mm256_set_m128(_mm_permute_ps(__a.v1, (__imm)),                           \\
                    _mm_permute_ps(__a.v0, (__imm)));                          \\
  })

static __inline__ __m128d
__avx_select4d(__m256d __a, __m256d __b, const int imm8) {
  __m256d_internal a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  switch (imm8 & 0xF) {
    case 0:
    case 4:
      return a.v0;
    case 1:
    case 5:
      return a.v1;
    case 2:
    case 6:
      return b.v0;
    case 3:
    case 7:
      return b.v1;
    default:
      return (__m128d)wasm_i64x2_const_splat(0);
  }
}

static __inline__ __m128 __avx_select4(__m256 __a, __m256 __b, const int imm8) {
  __m256_internal a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  switch (imm8 & 0xF) {
    case 0:
    case 4:
      return a.v0;
    case 1:
    case 5:
      return a.v1;
    case 2:
    case 6:
      return b.v0;
    case 3:
    case 7:
      return b.v1;
    default:
      return (__m128)wasm_i64x2_const_splat(0);
  }
}

static __inline__ __m128i
__avx_select4i(__m256i __a, __m256i __b, const int imm8) {
  __m256i_internal a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  switch (imm8 & 0xF) {
    case 0:
    case 4:
      return a.v0;
    case 1:
    case 5:
      return a.v1;
    case 2:
    case 6:
      return b.v0;
    case 3:
    case 7:
      return b.v1;
    default:
      return wasm_i64x2_const_splat(0);
  }
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_permute2f128_pd(__m256d __a, __m256d __b, const int imm8) {
  __m256d_internal ret;
  ret.v0 = __avx_select4d(__a, __b, imm8);
  ret.v1 = __avx_select4d(__a, __b, imm8 >> 4);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_permute2f128_ps(__m256 __a, __m256 __b, const int imm8) {
  __m256_internal ret;
  ret.v0 = __avx_select4(__a, __b, imm8);
  ret.v1 = __avx_select4(__a, __b, imm8 >> 4);
  return __m256_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_permute2f128_si256(__m256i __a, __m256i __b, const int imm8) {
  __m256i_internal ret;
  ret.v0 = __avx_select4i(__a, __b, imm8);
  ret.v1 = __avx_select4i(__a, __b, imm8 >> 4);
  return __m256i_from_internal(ret);
}

#define _mm256_blend_pd(__A, __B, imm8)                                        \\
  __extension__({                                                              \\
    __m256d_internal __a = __m256d_to_internal(__A);                             \\
    __m256d_internal __b = __m256d_to_internal(__B);                             \\
    _mm256_set_m128d(_mm_blend_pd(__a.v1, __b.v1, (imm8) >> 2),                \\
                     _mm_blend_pd(__a.v0, __b.v0, (imm8)));                    \\
  })

#define _mm256_blend_ps(__A, __B, imm)                                         \\
  __extension__({                                                              \\
    __m256_internal __a = __m256_to_internal(__A);                               \\
    __m256_internal __b = __m256_to_internal(__B);                               \\
    _mm256_set_m128(_mm_blend_ps(__a.v1, __b.v1, (imm) >> 4),                  \\
                    _mm_blend_ps(__a.v0, __b.v0, (imm)));                      \\
  })

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_blendv_pd(__m256d __a, __m256d __b, __m256d __c) {
  __m256d_internal ret, a, b, c;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  c = __m256d_to_internal(__c);
  ret.v0 = _mm_blendv_pd(a.v0, b.v0, c.v0);
  ret.v1 = _mm_blendv_pd(a.v1, b.v1, c.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_blendv_ps(__m256 __a, __m256 __b, __m256 __c) {
  __m256_internal ret, a, b, c;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  c = __m256_to_internal(__c);
  ret.v0 = _mm_blendv_ps(a.v0, b.v0, c.v0);
  ret.v1 = _mm_blendv_ps(a.v1, b.v1, c.v1);
  return __m256_from_internal(ret);
}

#define _mm256_dp_ps(__A, __B, imm)                                            \\
  __extension__({                                                              \\
    __m256_internal __a = __m256_to_internal(__A);                               \\
    __m256_internal __b = __m256_to_internal(__B);                               \\
    _mm256_set_m128(_mm_dp_ps(__a.v1, __b.v1, (imm)),                          \\
                    _mm_dp_ps(__a.v0, __b.v0, (imm)));                         \\
  })

#define _mm256_shuffle_ps(__A, __B, mask)                                      \\
  __extension__({                                                              \\
    __m256_internal __a = __m256_to_internal(__A);                               \\
    __m256_internal __b = __m256_to_internal(__B);                               \\
    _mm256_set_m128(_mm_shuffle_ps(__a.v1, __b.v1, (mask)),                    \\
                    _mm_shuffle_ps(__a.v0, __b.v0, (mask)));                   \\
  })

#define _mm256_shuffle_pd(__A, __B, mask)                                      \\
  __extension__({                                                              \\
    __m256d_internal __a = __m256d_to_internal(__A);                             \\
    __m256d_internal __b = __m256d_to_internal(__B);                             \\
    _mm256_set_m128d(_mm_shuffle_pd(__a.v1, __b.v1, (mask) >> 2),              \\
                     _mm_shuffle_pd(__a.v0, __b.v0, (mask)));                  \\
  })

#define _CMP_EQ_OQ 0
#define _CMP_LT_OS 1
#define _CMP_LE_OS 2
#define _CMP_UNORD_Q 3
#define _CMP_NEQ_UQ 4
#define _CMP_NLT_US 5
#define _CMP_NLE_US 6
#define _CMP_ORD_Q 7
#define _CMP_EQ_UQ 8
#define _CMP_NGE_US 9
#define _CMP_NGT_US 10
#define _CMP_FALSE_OQ 11
#define _CMP_NEQ_OQ 12
#define _CMP_GE_OS 13
#define _CMP_GT_OS 14
#define _CMP_TRUE_UQ 15
#define _CMP_EQ_OS 16
#define _CMP_LT_OQ 17
#define _CMP_LE_OQ 18
#define _CMP_UNORD_S 19
#define _CMP_NEQ_US 20
#define _CMP_NLT_UQ 21
#define _CMP_NLE_UQ 22
#define _CMP_ORD_S 23
#define _CMP_EQ_US 24
#define _CMP_NGE_UQ 25
#define _CMP_NGT_UQ 26
#define _CMP_FALSE_OS 27
#define _CMP_NEQ_OS 28
#define _CMP_GE_OQ 29
#define _CMP_GT_OQ 30
#define _CMP_TRUE_US 31

#define _mm_cmp_pd(__a, __b, __imm)                                            \\
  __extension__({                                                              \\
    __m128d __ret;                                                             \\
    switch ((__imm)) {                                                         \\
      case _CMP_EQ_OQ:                                                         \\
      case _CMP_EQ_OS:                                                         \\
        __ret = _mm_cmpeq_pd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_EQ_UQ:                                                         \\
      case _CMP_EQ_US:                                                         \\
        __ret = _mm_or_pd(_mm_cmpeq_pd((__a), (__b)),                          \\
                          _mm_cmpunord_pd((__a), (__b)));                      \\
        break;                                                                 \\
      case _CMP_LT_OS:                                                         \\
      case _CMP_LT_OQ:                                                         \\
        __ret = _mm_cmplt_pd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_LE_OS:                                                         \\
      case _CMP_LE_OQ:                                                         \\
        __ret = _mm_cmple_pd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_UNORD_Q:                                                       \\
      case _CMP_UNORD_S:                                                       \\
        __ret = _mm_cmpunord_pd((__a), (__b));                                 \\
        break;                                                                 \\
      case _CMP_NEQ_UQ:                                                        \\
      case _CMP_NEQ_US:                                                        \\
        __ret = _mm_cmpneq_pd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NEQ_OQ:                                                        \\
      case _CMP_NEQ_OS:                                                        \\
        __ret = _mm_andnot_pd(_mm_cmpunord_pd((__a), (__b)),                   \\
                              _mm_cmpneq_pd((__a), (__b)));                    \\
        break;                                                                 \\
      case _CMP_NLT_US:                                                        \\
      case _CMP_NLT_UQ:                                                        \\
        __ret = _mm_cmpnlt_pd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_ORD_Q:                                                         \\
      case _CMP_ORD_S:                                                         \\
        __ret = _mm_cmpord_pd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGE_US:                                                        \\
      case _CMP_NGE_UQ:                                                        \\
        __ret = _mm_cmpnge_pd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGT_US:                                                        \\
      case _CMP_NGT_UQ:                                                        \\
        __ret = _mm_cmpngt_pd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_FALSE_OQ:                                                      \\
      case _CMP_FALSE_OS:                                                      \\
        __ret = _mm_setzero_pd();                                              \\
        break;                                                                 \\
      case _CMP_GE_OS:                                                         \\
      case _CMP_GE_OQ:                                                         \\
        __ret = _mm_cmpge_pd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_GT_OS:                                                         \\
      case _CMP_GT_OQ:                                                         \\
        __ret = _mm_cmpgt_pd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_TRUE_UQ:                                                       \\
      case _CMP_TRUE_US:                                                       \\
        __ret = (__m128d)wasm_i8x16_splat(0xFF);                               \\
        break;                                                                 \\
      case _CMP_NLE_US:                                                        \\
      case _CMP_NLE_UQ:                                                        \\
        __ret = _mm_cmpnle_pd((__a), (__b));                                   \\
        break;                                                                 \\
    }                                                                          \\
    __ret;                                                                     \\
  })

#define _mm_cmp_ps(__a, __b, __imm)                                            \\
  __extension__({                                                              \\
    __m128 __ret;                                                              \\
    switch ((__imm)) {                                                         \\
      case _CMP_EQ_OQ:                                                         \\
      case _CMP_EQ_OS:                                                         \\
        __ret = _mm_cmpeq_ps((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_EQ_UQ:                                                         \\
      case _CMP_EQ_US:                                                         \\
        __ret = _mm_or_ps(_mm_cmpeq_ps((__a), (__b)),                          \\
                          _mm_cmpunord_ps((__a), (__b)));                      \\
        break;                                                                 \\
      case _CMP_LT_OS:                                                         \\
      case _CMP_LT_OQ:                                                         \\
        __ret = _mm_cmplt_ps((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_LE_OS:                                                         \\
      case _CMP_LE_OQ:                                                         \\
        __ret = _mm_cmple_ps((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_UNORD_Q:                                                       \\
      case _CMP_UNORD_S:                                                       \\
        __ret = _mm_cmpunord_ps((__a), (__b));                                 \\
        break;                                                                 \\
      case _CMP_NEQ_UQ:                                                        \\
      case _CMP_NEQ_US:                                                        \\
        __ret = _mm_cmpneq_ps((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NEQ_OQ:                                                        \\
      case _CMP_NEQ_OS:                                                        \\
        __ret = _mm_andnot_ps(_mm_cmpunord_ps((__a), (__b)),                   \\
                              _mm_cmpneq_ps((__a), (__b)));                    \\
        break;                                                                 \\
      case _CMP_NLT_US:                                                        \\
      case _CMP_NLT_UQ:                                                        \\
        __ret = _mm_cmpnlt_ps((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_ORD_Q:                                                         \\
      case _CMP_ORD_S:                                                         \\
        __ret = _mm_cmpord_ps((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGE_US:                                                        \\
      case _CMP_NGE_UQ:                                                        \\
        __ret = _mm_cmpnge_ps((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGT_US:                                                        \\
      case _CMP_NGT_UQ:                                                        \\
        __ret = _mm_cmpngt_ps((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_FALSE_OQ:                                                      \\
      case _CMP_FALSE_OS:                                                      \\
        __ret = _mm_setzero_ps();                                              \\
        break;                                                                 \\
      case _CMP_GE_OS:                                                         \\
      case _CMP_GE_OQ:                                                         \\
        __ret = _mm_cmpge_ps((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_GT_OS:                                                         \\
      case _CMP_GT_OQ:                                                         \\
        __ret = _mm_cmpgt_ps((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_TRUE_UQ:                                                       \\
      case _CMP_TRUE_US:                                                       \\
        __ret = (__m128)wasm_i8x16_splat(0xFF);                                \\
        break;                                                                 \\
      case _CMP_NLE_US:                                                        \\
      case _CMP_NLE_UQ:                                                        \\
        __ret = _mm_cmpnle_ps((__a), (__b));                                   \\
        break;                                                                 \\
    }                                                                          \\
    __ret;                                                                     \\
  })

#define _mm_cmp_sd(__a, __b, __imm)                                            \\
  __extension__({                                                              \\
    __m128d __ret;                                                             \\
    switch ((__imm)) {                                                         \\
      case _CMP_EQ_OQ:                                                         \\
      case _CMP_EQ_OS:                                                         \\
        __ret = _mm_cmpeq_sd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_EQ_UQ:                                                         \\
      case _CMP_EQ_US:                                                         \\
        __ret = _mm_move_sd((__a),                                             \\
                            _mm_or_pd(_mm_cmpeq_sd((__a), (__b)),              \\
                                      _mm_cmpunord_sd((__a), (__b))));         \\
        break;                                                                 \\
      case _CMP_LT_OS:                                                         \\
      case _CMP_LT_OQ:                                                         \\
        __ret = _mm_cmplt_sd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_LE_OS:                                                         \\
      case _CMP_LE_OQ:                                                         \\
        __ret = _mm_cmple_sd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_UNORD_Q:                                                       \\
      case _CMP_UNORD_S:                                                       \\
        __ret = _mm_cmpunord_sd((__a), (__b));                                 \\
        break;                                                                 \\
      case _CMP_NEQ_UQ:                                                        \\
      case _CMP_NEQ_US:                                                        \\
        __ret = _mm_cmpneq_sd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NEQ_OQ:                                                        \\
      case _CMP_NEQ_OS:                                                        \\
        __ret = _mm_move_sd((__a),                                             \\
                            _mm_andnot_pd(_mm_cmpunord_sd((__a), (__b)),       \\
                                          _mm_cmpneq_sd((__a), (__b))));       \\
        break;                                                                 \\
      case _CMP_NLT_US:                                                        \\
      case _CMP_NLT_UQ:                                                        \\
        __ret = _mm_cmpnlt_sd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_ORD_Q:                                                         \\
      case _CMP_ORD_S:                                                         \\
        __ret = _mm_cmpord_sd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGE_US:                                                        \\
      case _CMP_NGE_UQ:                                                        \\
        __ret = _mm_cmpnge_sd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGT_US:                                                        \\
      case _CMP_NGT_UQ:                                                        \\
        __ret = _mm_cmpngt_sd((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_FALSE_OQ:                                                      \\
      case _CMP_FALSE_OS:                                                      \\
        __ret = _mm_move_sd((__a), _mm_setzero_pd());                          \\
        break;                                                                 \\
      case _CMP_GE_OS:                                                         \\
      case _CMP_GE_OQ:                                                         \\
        __ret = _mm_cmpge_sd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_GT_OS:                                                         \\
      case _CMP_GT_OQ:                                                         \\
        __ret = _mm_cmpgt_sd((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_TRUE_UQ:                                                       \\
      case _CMP_TRUE_US:                                                       \\
        __ret = _mm_move_sd((__a), (__m128d)wasm_i8x16_splat(0xFF));           \\
        break;                                                                 \\
      case _CMP_NLE_US:                                                        \\
      case _CMP_NLE_UQ:                                                        \\
        __ret = _mm_cmpnle_sd((__a), (__b));                                   \\
        break;                                                                 \\
    }                                                                          \\
    __ret;                                                                     \\
  })

#define _mm_cmp_ss(__a, __b, __imm)                                            \\
  __extension__({                                                              \\
    __m128 __ret;                                                              \\
    switch ((__imm)) {                                                         \\
      case _CMP_EQ_OQ:                                                         \\
      case _CMP_EQ_OS:                                                         \\
        __ret = _mm_cmpeq_ss((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_EQ_UQ:                                                         \\
      case _CMP_EQ_US:                                                         \\
        __ret = _mm_move_ss((__a),                                             \\
                            _mm_or_ps(_mm_cmpeq_ss((__a), (__b)),              \\
                                      _mm_cmpunord_ss((__a), (__b))));         \\
        break;                                                                 \\
      case _CMP_LT_OS:                                                         \\
      case _CMP_LT_OQ:                                                         \\
        __ret = _mm_cmplt_ss((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_LE_OS:                                                         \\
      case _CMP_LE_OQ:                                                         \\
        __ret = _mm_cmple_ss((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_UNORD_Q:                                                       \\
      case _CMP_UNORD_S:                                                       \\
        __ret = _mm_cmpunord_ss((__a), (__b));                                 \\
        break;                                                                 \\
      case _CMP_NEQ_UQ:                                                        \\
      case _CMP_NEQ_US:                                                        \\
        __ret = _mm_cmpneq_ss((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NEQ_OQ:                                                        \\
      case _CMP_NEQ_OS:                                                        \\
        __ret = _mm_move_ss((__a),                                             \\
                            _mm_andnot_ps(_mm_cmpunord_ss((__a), (__b)),       \\
                                          _mm_cmpneq_ss((__a), (__b))));       \\
        break;                                                                 \\
      case _CMP_NLT_US:                                                        \\
      case _CMP_NLT_UQ:                                                        \\
        __ret = _mm_cmpnlt_ss((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_ORD_Q:                                                         \\
      case _CMP_ORD_S:                                                         \\
        __ret = _mm_cmpord_ss((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGE_US:                                                        \\
      case _CMP_NGE_UQ:                                                        \\
        __ret = _mm_cmpnge_ss((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_NGT_US:                                                        \\
      case _CMP_NGT_UQ:                                                        \\
        __ret = _mm_cmpngt_ss((__a), (__b));                                   \\
        break;                                                                 \\
      case _CMP_FALSE_OQ:                                                      \\
      case _CMP_FALSE_OS:                                                      \\
        __ret = _mm_move_ss((__a), _mm_setzero_ps());                          \\
        break;                                                                 \\
      case _CMP_GE_OS:                                                         \\
      case _CMP_GE_OQ:                                                         \\
        __ret = _mm_cmpge_ss((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_GT_OS:                                                         \\
      case _CMP_GT_OQ:                                                         \\
        __ret = _mm_cmpgt_ss((__a), (__b));                                    \\
        break;                                                                 \\
      case _CMP_TRUE_UQ:                                                       \\
      case _CMP_TRUE_US:                                                       \\
        __ret = _mm_move_ss((__a), (__m128)wasm_i8x16_splat(0xFF));            \\
        break;                                                                 \\
      case _CMP_NLE_US:                                                        \\
      case _CMP_NLE_UQ:                                                        \\
        __ret = _mm_cmpnle_ss((__a), (__b));                                   \\
        break;                                                                 \\
    }                                                                          \\
    __ret;                                                                     \\
  })

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_cmp_pd(__m256d __a, __m256d __b, const int imm8) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_cmp_pd(a.v0, b.v0, imm8);
  ret.v1 = _mm_cmp_pd(a.v1, b.v1, imm8);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_cmp_ps(__m256 __a, __m256 __b, const int imm8) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_cmp_ps(a.v0, b.v0, imm8);
  ret.v1 = _mm_cmp_ps(a.v1, b.v1, imm8);
  return __m256_from_internal(ret);
}

#define _mm256_extract_epi32(__A, N)                                           \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    ((N) & 0x7) < 4 ? _mm_extract_epi32(__a.v0, (N) & 0x3)                     \\
                    : _mm_extract_epi32(__a.v1, (N) & 0x3);                    \\
  })

#define _mm256_extract_epi16(__A, N)                                           \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    ((N) & 0xF) < 8 ? _mm_extract_epi16(__a.v0, (N) & 0x7)                     \\
                    : _mm_extract_epi16(__a.v1, (N) & 0x7);                    \\
  })

#define _mm256_extract_epi8(__A, N)                                            \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    ((N) & 0x1F) < 16 ? _mm_extract_epi8(__a.v0, (N) & 0xF)                    \\
                      : _mm_extract_epi8(__a.v1, (N) & 0xF);                   \\
  })

#define _mm256_extract_epi64(__A, N)                                           \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    ((N) & 0x3) < 2 ? _mm_extract_epi64(__a.v0, (N) & 0x1)                     \\
                    : _mm_extract_epi64(__a.v1, (N) & 0x1);                    \\
  })

#define _mm256_insert_epi32(__A, __I, N)                                       \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    int32_t __i = (__I);                                                       \\
    ((N) & 0x7) < 4                                                            \\
      ? _mm256_set_m128i(__a.v1, _mm_insert_epi32(__a.v0, __i, (N) & 0x3))     \\
      : _mm256_set_m128i(_mm_insert_epi32(__a.v1, __i, (N) & 0x3), __a.v0);    \\
  })

#define _mm256_insert_epi16(__A, __I, N)                                       \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    int16_t __i = (__I);                                                       \\
    ((N) & 0xF) < 8                                                            \\
      ? _mm256_set_m128i(__a.v1, _mm_insert_epi16(__a.v0, __i, (N) & 0x7))     \\
      : _mm256_set_m128i(_mm_insert_epi16(__a.v1, __i, (N) & 0x7), __a.v0);    \\
  })

#define _mm256_insert_epi8(__A, __I, N)                                        \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    int8_t __i = (__I);                                                        \\
    ((N) & 0x1F) < 16                                                          \\
      ? _mm256_set_m128i(__a.v1, _mm_insert_epi8(__a.v0, __i, (N) & 0xF))      \\
      : _mm256_set_m128i(_mm_insert_epi8(__a.v1, __i, (N) & 0xF), __a.v0);     \\
  })

#define _mm256_insert_epi64(__A, __I, N)                                       \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    int64_t __i = (__I);                                                       \\
    ((N) & 0x3) < 2                                                            \\
      ? _mm256_set_m128i(__a.v1, _mm_insert_epi64(__a.v0, __i, (N) & 0x1))     \\
      : _mm256_set_m128i(_mm_insert_epi64(__a.v1, __i, (N) & 0x1), __a.v0);    \\
  })

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi32_pd(__m128i __a) {
  __m256d_internal ret;
  ret.v0 = _mm_cvtepi32_pd(__a);
  __m128i __a1 = wasm_i32x4_shuffle(__a, __a, 2, 3, 0, 0);
  ret.v1 = _mm_cvtepi32_pd(__a1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi32_ps(__m256i __a) {
  __m256_internal ret;
  __m256i_internal a = __m256i_to_internal(__a);
  ret.v0 = _mm_cvtepi32_ps(a.v0);
  ret.v1 = _mm_cvtepi32_ps(a.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm256_cvtpd_ps(__m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  __m128 low = _mm_cvtpd_ps(a.v0);
  __m128 high = _mm_cvtpd_ps(a.v1);
  __m128 ret = (__m128)wasm_i32x4_shuffle(low, high, 0, 1, 4, 5);
  return ret;
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtps_epi32(__m256 __a) {
  __m256i_internal ret;
  __m256_internal a = __m256_to_internal(__a);
  ret.v0 = _mm_cvtps_epi32(a.v0);
  ret.v1 = _mm_cvtps_epi32(a.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_cvtps_pd(__m128 __a) {
  __m256d_internal ret;
  ret.v0 = _mm_cvtps_pd(__a);
  __m128 __a1 = (__m128)wasm_i32x4_shuffle(__a, __a, 2, 3, 0, 0);
  ret.v1 = _mm_cvtps_pd(__a1);
  return __m256d_from_internal(ret);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm256_cvttpd_epi32(__m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  __m128i low = _mm_cvttpd_epi32(a.v0);
  __m128i high = _mm_cvttpd_epi32(a.v1);
  __m128i ret = wasm_i32x4_shuffle(low, high, 0, 1, 4, 5);
  return ret;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtpd_epi32(__m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  __m128i low = _mm_cvtpd_epi32(a.v0);
  __m128i high = _mm_cvtpd_epi32(a.v1);
  __m128i ret = wasm_i32x4_shuffle(low, high, 0, 1, 4, 5);
  return ret;
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvttps_epi32(__m256 __a) {
  __m256i_internal ret;
  __m256_internal a = __m256_to_internal(__a);
  ret.v0 = _mm_cvttps_epi32(a.v0);
  ret.v1 = _mm_cvttps_epi32(a.v1);
  return __m256i_from_internal(ret);
}

static __inline__ double __attribute__((__always_inline__, __nodebug__))
_mm256_cvtsd_f64(__m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  return _mm_cvtsd_f64(a.v0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_cvtsi256_si32(__m256i __a) {
  __m256i_internal a = __m256i_to_internal(__a);
  return _mm_cvtsi128_si32(a.v0);
}

static __inline__ float __attribute__((__always_inline__, __nodebug__))
_mm256_cvtss_f32(__m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  return _mm_cvtss_f32(a.v0);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_movehdup_ps(__m256 __a) {
  __m256_internal ret, a;
  a = __m256_to_internal(__a);
  ret.v0 = _mm_movehdup_ps(a.v0);
  ret.v1 = _mm_movehdup_ps(a.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_moveldup_ps(__m256 __a) {
  __m256_internal ret, a;
  a = __m256_to_internal(__a);
  ret.v0 = _mm_moveldup_ps(a.v0);
  ret.v1 = _mm_moveldup_ps(a.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_movedup_pd(__m256d __a) {
  __m256d_internal ret, a;
  a = __m256d_to_internal(__a);
  ret.v0 = _mm_movedup_pd(a.v0);
  ret.v1 = _mm_movedup_pd(a.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_unpackhi_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_unpackhi_pd(a.v0, b.v0);
  ret.v1 = _mm_unpackhi_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_unpacklo_pd(__m256d __a, __m256d __b) {
  __m256d_internal ret, a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  ret.v0 = _mm_unpacklo_pd(a.v0, b.v0);
  ret.v1 = _mm_unpacklo_pd(a.v1, b.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_unpackhi_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_unpackhi_ps(a.v0, b.v0);
  ret.v1 = _mm_unpackhi_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_unpacklo_ps(__m256 __a, __m256 __b) {
  __m256_internal ret, a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  ret.v0 = _mm_unpacklo_ps(a.v0, b.v0);
  ret.v1 = _mm_unpacklo_ps(a.v1, b.v1);
  return __m256_from_internal(ret);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_testz_pd(__m128d __a, __m128d __b) {
  v128_t __m =
    wasm_u64x2_shr(wasm_v128_not(wasm_v128_and((v128_t)__a, (v128_t)__b)), 63);
  return wasm_i64x2_extract_lane(__m, 0) & wasm_i64x2_extract_lane(__m, 1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_testc_pd(__m128d __a, __m128d __b) {
  v128_t __m =
    wasm_u64x2_shr(wasm_v128_or(wasm_v128_not((v128_t)__b), (v128_t)__a), 63);
  return wasm_i64x2_extract_lane(__m, 0) & wasm_i64x2_extract_lane(__m, 1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_testnzc_pd(__m128d __a, __m128d __b) {
  v128_t __m = wasm_u64x2_shr(wasm_v128_and((v128_t)__a, (v128_t)__b), 63);
  v128_t __m2 = wasm_u64x2_shr(wasm_v128_andnot((v128_t)__b, (v128_t)__a), 63);
  return (wasm_i64x2_extract_lane(__m, 0) | wasm_i64x2_extract_lane(__m, 1)) &
         (wasm_i64x2_extract_lane(__m2, 0) | wasm_i64x2_extract_lane(__m2, 1));
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_testz_ps(__m128 __a, __m128 __b) {
  v128_t __m =
    wasm_u32x4_shr(wasm_v128_not(wasm_v128_and((v128_t)__a, (v128_t)__b)), 31);
  __m = wasm_v128_and(__m, (v128_t)_mm_movehl_ps((__m128)__m, (__m128)__m));
  __m = wasm_v128_and(__m, _mm_shuffle_epi32(__m, _MM_SHUFFLE(3, 2, 0, 1)));
  return wasm_i32x4_extract_lane(__m, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_testc_ps(__m128 __a, __m128 __b) {
  v128_t __m =
    wasm_u32x4_shr(wasm_v128_or(wasm_v128_not((v128_t)__b), (v128_t)__a), 31);
  __m = wasm_v128_and(__m, (v128_t)_mm_movehl_ps((__m128)__m, (__m128)__m));
  __m = wasm_v128_and(__m, _mm_shuffle_epi32(__m, _MM_SHUFFLE(3, 2, 0, 1)));
  return wasm_i32x4_extract_lane(__m, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm_testnzc_ps(__m128 __a, __m128 __b) {
  v128_t __m = wasm_u32x4_shr(wasm_v128_and((v128_t)__a, (v128_t)__b), 31);
  v128_t __m2 = wasm_u32x4_shr(wasm_v128_andnot((v128_t)__b, (v128_t)__a), 31);

  __m = wasm_v128_or(__m, (v128_t)_mm_movehl_ps((__m128)__m, (__m128)__m));
  __m2 = wasm_v128_or(__m2, (v128_t)_mm_movehl_ps((__m128)__m2, (__m128)__m2));
  __m = wasm_v128_or(__m, _mm_shuffle_epi32(__m, _MM_SHUFFLE(3, 2, 0, 1)));
  __m2 = wasm_v128_or(__m2, _mm_shuffle_epi32(__m2, _MM_SHUFFLE(3, 2, 0, 1)));

  return wasm_i32x4_extract_lane(__m, 0) & wasm_i32x4_extract_lane(__m2, 0);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testz_pd(__m256d __a, __m256d __b) {
  __m256d_internal a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  return _mm_testz_pd(a.v0, b.v0) & _mm_testz_pd(a.v1, b.v1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testc_pd(__m256d __a, __m256d __b) {
  __m256d_internal a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  return _mm_testc_pd(a.v0, b.v0) & _mm_testc_pd(a.v1, b.v1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testnzc_pd(__m256d __a, __m256d __b) {
  __m256d_internal a, b;
  a = __m256d_to_internal(__a);
  b = __m256d_to_internal(__b);
  v128_t __m =
    wasm_u64x2_shr(wasm_v128_and((v128_t)a.v0, (v128_t)b.v0), 63);
  v128_t __m1 =
    wasm_u64x2_shr(wasm_v128_and((v128_t)a.v1, (v128_t)b.v1), 63);
  v128_t __m2 =
    wasm_u64x2_shr(wasm_v128_andnot((v128_t)b.v0, (v128_t)a.v0), 63);
  v128_t __m3 =
    wasm_u64x2_shr(wasm_v128_andnot((v128_t)b.v1, (v128_t)a.v1), 63);
  return wasm_v128_any_true(wasm_v128_or(__m, __m1)) &
         wasm_v128_any_true(wasm_v128_or(__m2, __m3));
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testz_ps(__m256 __a, __m256 __b) {
  __m256_internal a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  return _mm_testz_ps(a.v0, b.v0) & _mm_testz_ps(a.v1, b.v1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testc_ps(__m256 __a, __m256 __b) {
  __m256_internal a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  return _mm_testc_ps(a.v0, b.v0) & _mm_testc_ps(a.v1, b.v1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testnzc_ps(__m256 __a, __m256 __b) {
  __m256_internal a, b;
  a = __m256_to_internal(__a);
  b = __m256_to_internal(__b);
  v128_t __m =
    wasm_u32x4_shr(wasm_v128_and((v128_t)a.v0, (v128_t)b.v0), 31);
  v128_t __m1 =
    wasm_u32x4_shr(wasm_v128_and((v128_t)a.v1, (v128_t)b.v1), 31);
  v128_t __m2 =
    wasm_u32x4_shr(wasm_v128_andnot((v128_t)b.v0, (v128_t)a.v0), 31);
  v128_t __m3 =
    wasm_u32x4_shr(wasm_v128_andnot((v128_t)b.v1, (v128_t)a.v1), 31);

  return wasm_v128_any_true(wasm_v128_or(__m, __m1)) &
         wasm_v128_any_true(wasm_v128_or(__m2, __m3));
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testz_si256(__m256i __a, __m256i __b) {
  __m256i_internal a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  return _mm_testz_si128(a.v0, b.v0) & _mm_testz_si128(a.v1, b.v1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testc_si256(__m256i __a, __m256i __b) {
  __m256i_internal a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  return _mm_testc_si128(a.v0, b.v0) & _mm_testc_si128(a.v1, b.v1);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_testnzc_si256(__m256i __a, __m256i __b) {
  __m256i_internal a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  v128_t __m = wasm_v128_and(a.v0, b.v0);
  v128_t __m1 = wasm_v128_and(a.v1, b.v1);
  v128_t __m2 = wasm_v128_andnot(b.v0, a.v0);
  v128_t __m3 = wasm_v128_andnot(b.v1, a.v1);
  return wasm_v128_any_true(wasm_v128_or(__m, __m1)) &
         wasm_v128_any_true(wasm_v128_or(__m2, __m3));
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_movemask_pd(__m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  return _mm_movemask_pd(a.v0) | (_mm_movemask_pd(a.v1) << 2);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_movemask_ps(__m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  return _mm_movemask_ps(a.v0) | (_mm_movemask_ps(a.v1) << 4);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_zeroall(void) {
  // Do nothing
  // when porting any assembly code that would have calls to these functions
  // around, that assembly code in the first place will not compile.
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_zeroupper(void) {
  // Do nothing
  // when porting any assembly code that would have calls to these functions
  // around, that assembly code in the first place will not compile.
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_broadcast_ss(float const* __a) {
  return (__m128)wasm_v128_load32_splat(__a);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_broadcast_sd(double const* __a) {
  __m256d_internal ret;
  ret.v1 = ret.v0 = (__m128d)wasm_v128_load64_splat(__a);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_broadcast_ss(float const* __a) {
  __m256_internal ret;
  ret.v1 = ret.v0 = _mm_broadcast_ss(__a);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_broadcast_pd(__m128d const* __a) {
  __m256d_internal ret;
  ret.v1 = ret.v0 = (__m128d)wasm_v128_load(__a);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_broadcast_ps(__m128 const* __a) {
  __m256_internal ret;
  ret.v1 = ret.v0 = (__m128)wasm_v128_load(__a);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_load_pd(double const* __p) {
  __m256d_internal ret;
  ret.v0 = _mm_load_pd(__p);
  ret.v1 = _mm_load_pd(__p + 2);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_load_ps(float const* __p) {
  __m256_internal ret;
  ret.v0 = _mm_load_ps(__p);
  ret.v1 = _mm_load_ps(__p + 4);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_loadu_pd(double const* __p) {
  __m256d_internal ret;
  ret.v0 = _mm_loadu_pd(__p);
  ret.v1 = _mm_loadu_pd(__p + 2);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_loadu_ps(float const* __p) {
  __m256_internal ret;
  ret.v0 = _mm_loadu_ps(__p);
  ret.v1 = _mm_loadu_ps(__p + 4);
  return __m256_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_load_si256(__m256i const* __p) {
  __m256i_internal ret;
  ret.v0 = _mm_load_si128((__m128i const*)__p);
  ret.v1 = _mm_load_si128(((__m128i const*)__p) + 1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_loadu_si256(__m256i_u const* __p) {
  __m256i_internal ret;
  ret.v0 = _mm_loadu_si128((__m128i const*)__p);
  ret.v1 = _mm_loadu_si128(((__m128i const*)__p) + 1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_lddqu_si256(__m256i_u const* __p) {
  __m256i_internal ret;
  ret.v0 = _mm_lddqu_si128((__m128i const*)__p);
  ret.v1 = _mm_lddqu_si128(((__m128i const*)__p) + 1);
  return __m256i_from_internal(ret);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_store_pd(double* __p, __m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  _mm_store_pd(__p, a.v0);
  _mm_store_pd(__p + 2, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_store_ps(float* __p, __m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  _mm_store_ps(__p, a.v0);
  _mm_store_ps(__p + 4, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_storeu_pd(double* __p, __m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  _mm_storeu_pd(__p, a.v0);
  _mm_storeu_pd(__p + 2, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_storeu_ps(float* __p, __m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  _mm_storeu_ps(__p, a.v0);
  _mm_storeu_ps(__p + 4, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_store_si256(__m256i* __p, __m256i __a) {
  __m256i_internal a = __m256i_to_internal(__a);
  _mm_store_si128((__m128i*)__p, a.v0);
  _mm_store_si128(((__m128i*)__p) + 1, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_storeu_si256(__m256i_u* __p, __m256i __a) {
  __m256i_internal a = __m256i_to_internal(__a);
  _mm_storeu_si128((__m128i*)__p, a.v0);
  _mm_storeu_si128(((__m128i*)__p) + 1, a.v1);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_maskload_pd(double const* __p, __m128i __m) {
  // This may cause an out-of-bounds memory load since we first load and
  // then mask, but since there are no segmentation faults in Wasm memory
  // accesses, that is ok (as long as we are within the heap bounds -
  // a negligible limitation in practice)
  return _mm_and_pd(_mm_load_pd(__p), (__m128d)wasm_i64x2_shr(__m, 63));
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_maskload_pd(double const* __p, __m256i __m) {
  __m256d_internal ret;
  __m256i_internal m = __m256i_to_internal(__m);
  ret.v0 = _mm_maskload_pd(__p, m.v0);
  ret.v1 = _mm_maskload_pd(__p + 2, m.v1);
  return __m256d_from_internal(ret);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_maskload_ps(float const* __p, __m128i __m) {
  // This may cause an out-of-bounds memory load since we first load and
  // then mask, but since there are no segmentation faults in Wasm memory
  // accesses, that is ok (as long as we are within the heap bounds -
  // a negligible limitation in practice)
  return _mm_and_ps(_mm_load_ps(__p), (__m128)_mm_srai_epi32(__m, 31));
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_maskload_ps(float const* __p, __m256i __m) {
  __m256_internal ret;
  __m256i_internal m = __m256i_to_internal(__m);
  ret.v0 = _mm_maskload_ps(__p, m.v0);
  ret.v1 = _mm_maskload_ps(__p + 4, m.v1);
  return __m256_from_internal(ret);
}

static __inline__ void
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_maskstore_ps(float* __p, __m128i __m, __m128 __a) {
  if ((wasm_i32x4_extract_lane(__m, 0) & 0x80000000ull) != 0)
    __p[0] = wasm_f32x4_extract_lane((v128_t)__a, 0);
  if ((wasm_i32x4_extract_lane(__m, 1) & 0x80000000ull) != 0)
    __p[1] = wasm_f32x4_extract_lane((v128_t)__a, 1);
  if ((wasm_i32x4_extract_lane(__m, 2) & 0x80000000ull) != 0)
    __p[2] = wasm_f32x4_extract_lane((v128_t)__a, 2);
  if ((wasm_i32x4_extract_lane(__m, 3) & 0x80000000ull) != 0)
    __p[3] = wasm_f32x4_extract_lane((v128_t)__a, 3);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_maskstore_ps(float* __p, __m256i __m, __m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  __m256i_internal m = __m256i_to_internal(__m);
  _mm_maskstore_ps(__p, m.v0, a.v0);
  _mm_maskstore_ps(__p + 4, m.v1, a.v1);
}

static __inline__ void
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_maskstore_pd(double* __p, __m128i __m, __m128d __a) {
  if ((wasm_i64x2_extract_lane(__m, 0) & 0x8000000000000000ull) != 0)
    __p[0] = wasm_f64x2_extract_lane((v128_t)__a, 0);
  if ((wasm_i64x2_extract_lane(__m, 1) & 0x8000000000000000ull) != 0)
    __p[1] = wasm_f64x2_extract_lane((v128_t)__a, 1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_maskstore_pd(double* __p, __m256i __m, __m256d __a) {
  __m256i_internal m = __m256i_to_internal(__m);
  __m256d_internal a = __m256d_to_internal(__a);
  _mm_maskstore_pd(__p, m.v0, a.v0);
  _mm_maskstore_pd(__p + 2, m.v1, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_stream_si256(void* __a, __m256i __b) {
  __m256i_internal b = __m256i_to_internal(__b);
  _mm_stream_si128((__m128i*)__a, b.v0);
  _mm_stream_si128(((__m128i*)__a) + 1, b.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_stream_pd(void* __a, __m256d __b) {
  __m256d_internal b = __m256d_to_internal(__b);
  _mm_stream_pd((double*)__a, b.v0);
  _mm_stream_pd(((double*)__a) + 2, b.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_stream_ps(void* __p, __m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  _mm_stream_ps((float*)__p, a.v0);
  _mm_stream_ps(((float*)__p) + 4, a.v1);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_undefined_pd(void) {
  __m256d val;
  return val;
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_undefined_ps(void) {
  __m256 val;
  return val;
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_undefined_si256(void) {
  __m256i val;
  return val;
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_set_pd(double __a, double __b, double __c, double __d) {
  __m256d_internal ret;
  ret.v0 = _mm_set_pd(__c, __d);
  ret.v1 = _mm_set_pd(__a, __b);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_set_ps(float __a,
              float __b,
              float __c,
              float __d,
              float __e,
              float __f,
              float __g,
              float __h) {
  __m256_internal ret;
  ret.v0 = _mm_set_ps(__e, __f, __g, __h);
  ret.v1 = _mm_set_ps(__a, __b, __c, __d);
  return __m256_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set_epi32(int __i0,
                 int __i1,
                 int __i2,
                 int __i3,
                 int __i4,
                 int __i5,
                 int __i6,
                 int __i7) {
  __m256i_internal ret;
  ret.v0 = _mm_set_epi32(__i4, __i5, __i6, __i7);
  ret.v1 = _mm_set_epi32(__i0, __i1, __i2, __i3);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set_epi16(short __w15,
                 short __w14,
                 short __w13,
                 short __w12,
                 short __w11,
                 short __w10,
                 short __w09,
                 short __w08,
                 short __w07,
                 short __w06,
                 short __w05,
                 short __w04,
                 short __w03,
                 short __w02,
                 short __w01,
                 short __w00) {
  __m256i_internal ret;
  ret.v0 =
    _mm_set_epi16(__w07, __w06, __w05, __w04, __w03, __w02, __w01, __w00);
  ret.v1 =
    _mm_set_epi16(__w15, __w14, __w13, __w12, __w11, __w10, __w09, __w08);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set_epi8(char __b31,
                char __b30,
                char __b29,
                char __b28,
                char __b27,
                char __b26,
                char __b25,
                char __b24,
                char __b23,
                char __b22,
                char __b21,
                char __b20,
                char __b19,
                char __b18,
                char __b17,
                char __b16,
                char __b15,
                char __b14,
                char __b13,
                char __b12,
                char __b11,
                char __b10,
                char __b09,
                char __b08,
                char __b07,
                char __b06,
                char __b05,
                char __b04,
                char __b03,
                char __b02,
                char __b01,
                char __b00) {
  __m256i_internal ret;
  ret.v0 = _mm_set_epi8(__b15,
                        __b14,
                        __b13,
                        __b12,
                        __b11,
                        __b10,
                        __b09,
                        __b08,
                        __b07,
                        __b06,
                        __b05,
                        __b04,
                        __b03,
                        __b02,
                        __b01,
                        __b00);
  ret.v1 = _mm_set_epi8(__b31,
                        __b30,
                        __b29,
                        __b28,
                        __b27,
                        __b26,
                        __b25,
                        __b24,
                        __b23,
                        __b22,
                        __b21,
                        __b20,
                        __b19,
                        __b18,
                        __b17,
                        __b16);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set_epi64x(long long __a, long long __b, long long __c, long long __d) {
  __m256i_internal ret;
  ret.v0 = _mm_set_epi64x(__c, __d);
  ret.v1 = _mm_set_epi64x(__a, __b);
  return __m256i_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_setr_pd(double __a, double __b, double __c, double __d) {
  return _mm256_set_pd(__d, __c, __b, __a);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_setr_ps(float __a,
               float __b,
               float __c,
               float __d,
               float __e,
               float __f,
               float __g,
               float __h) {
  return _mm256_set_ps(__h, __g, __f, __e, __d, __c, __b, __a);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_setr_epi32(int __i0,
                  int __i1,
                  int __i2,
                  int __i3,
                  int __i4,
                  int __i5,
                  int __i6,
                  int __i7) {
  return _mm256_set_epi32(__i7, __i6, __i5, __i4, __i3, __i2, __i1, __i0);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_setr_epi16(short __w15,
                  short __w14,
                  short __w13,
                  short __w12,
                  short __w11,
                  short __w10,
                  short __w09,
                  short __w08,
                  short __w07,
                  short __w06,
                  short __w05,
                  short __w04,
                  short __w03,
                  short __w02,
                  short __w01,
                  short __w00) {
  return _mm256_set_epi16(__w00,
                          __w01,
                          __w02,
                          __w03,
                          __w04,
                          __w05,
                          __w06,
                          __w07,
                          __w08,
                          __w09,
                          __w10,
                          __w11,
                          __w12,
                          __w13,
                          __w14,
                          __w15);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_setr_epi8(char __b31,
                 char __b30,
                 char __b29,
                 char __b28,
                 char __b27,
                 char __b26,
                 char __b25,
                 char __b24,
                 char __b23,
                 char __b22,
                 char __b21,
                 char __b20,
                 char __b19,
                 char __b18,
                 char __b17,
                 char __b16,
                 char __b15,
                 char __b14,
                 char __b13,
                 char __b12,
                 char __b11,
                 char __b10,
                 char __b09,
                 char __b08,
                 char __b07,
                 char __b06,
                 char __b05,
                 char __b04,
                 char __b03,
                 char __b02,
                 char __b01,
                 char __b00) {
  return _mm256_set_epi8(__b00,
                         __b01,
                         __b02,
                         __b03,
                         __b04,
                         __b05,
                         __b06,
                         __b07,
                         __b08,
                         __b09,
                         __b10,
                         __b11,
                         __b12,
                         __b13,
                         __b14,
                         __b15,
                         __b16,
                         __b17,
                         __b18,
                         __b19,
                         __b20,
                         __b21,
                         __b22,
                         __b23,
                         __b24,
                         __b25,
                         __b26,
                         __b27,
                         __b28,
                         __b29,
                         __b30,
                         __b31);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_setr_epi64x(long long __a, long long __b, long long __c, long long __d) {
  return _mm256_set_epi64x(__d, __c, __b, __a);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_set1_pd(double __w) {
  __m256d_internal ret;
  ret.v1 = ret.v0 = (__m128d)wasm_f64x2_splat(__w);
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_set1_ps(float __w) {
  __m256_internal ret;
  ret.v1 = ret.v0 = (__m128)wasm_f32x4_splat(__w);
  return __m256_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set1_epi32(int __i) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = wasm_i32x4_splat(__i);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set1_epi16(short __w) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = wasm_i16x8_splat(__w);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set1_epi8(char __b) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = wasm_i8x16_splat(__b);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set1_epi64x(long long __q) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = wasm_i64x2_splat(__q);
  return __m256i_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_setzero_pd(void) {
  __m256d_internal ret;
  ret.v1 = ret.v0 = _mm_setzero_pd();
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_setzero_ps(void) {
  __m256_internal ret;
  ret.v1 = ret.v0 = _mm_setzero_ps();
  return __m256_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_setzero_si256(void) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = _mm_setzero_si128();
  return __m256i_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_castpd_ps(__m256d __a) {
  union __m256_data ret;
  ret.double_view = __a;
  return ret.float_view;
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_castpd_si256(__m256d __a) {
  union __m256_data ret;
  ret.double_view = __a;
  return ret.int_view;
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_castps_pd(__m256 __a) {
  union __m256_data ret;
  ret.float_view = __a;
  return ret.double_view;
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_castps_si256(__m256 __a) {
  union __m256_data ret;
  ret.float_view = __a;
  return ret.int_view;
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_castsi256_ps(__m256i __a) {
  union __m256_data ret;
  ret.int_view = __a;
  return ret.float_view;
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_castsi256_pd(__m256i __a) {
  union __m256_data ret;
  ret.int_view = __a;
  return ret.double_view;
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm256_castpd256_pd128(__m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  return a.v0;
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm256_castps256_ps128(__m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  return a.v0;
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm256_castsi256_si128(__m256i __a) {
  __m256i_internal a = __m256i_to_internal(__a);
  return a.v0;
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_castpd128_pd256(__m128d __a) {
  __m256d_internal ret;
  ret.v0 = __a;
  ret.v1 = _mm_setzero_pd();
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_castps128_ps256(__m128 __a) {
  __m256_internal ret;
  ret.v0 = __a;
  ret.v1 = _mm_setzero_ps();
  return __m256_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_castsi128_si256(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = __a;
  ret.v1 = _mm_setzero_si128();
  return __m256i_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_zextpd128_pd256(__m128d __a) {
  __m256d_internal ret;
  ret.v0 = __a;
  ret.v1 = _mm_setzero_pd();
  return __m256d_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_zextps128_ps256(__m128 __a) {
  __m256_internal ret;
  ret.v0 = __a;
  ret.v1 = _mm_setzero_ps();
  return __m256_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_zextsi128_si256(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = __a;
  ret.v1 = _mm_setzero_si128();
  return __m256i_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_insertf128_ps(__m256 __a, __m128 __b, const int imm8) {
  __m256_internal ret = __m256_to_internal(__a);
  if (imm8 & 0x1) {
    ret.v1 = __b;
  } else {
    ret.v0 = __b;
  }
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_insertf128_pd(__m256d __a, __m128d __b, const int imm8) {
  __m256d_internal ret = __m256d_to_internal(__a);
  if (imm8 & 0x1) {
    ret.v1 = __b;
  } else {
    ret.v0 = __b;
  }
  return __m256d_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_insertf128_si256(__m256i __a, __m128i __b, const int imm8) {
  __m256i_internal ret = __m256i_to_internal(__a);
  if (imm8 & 0x1) {
    ret.v1 = __b;
  } else {
    ret.v0 = __b;
  }
  return __m256i_from_internal(ret);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm256_extractf128_ps(__m256 __a, const int imm8) {
  __m256_internal a = __m256_to_internal(__a);
  if (imm8 & 0x1) {
    return a.v1;
  } else {
    return a.v0;
  }
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm256_extractf128_pd(__m256d __a, const int imm8) {
  __m256d_internal a = __m256d_to_internal(__a);
  if (imm8 & 0x1) {
    return a.v1;
  } else {
    return a.v0;
  }
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm256_extractf128_si256(__m256i __a, const int imm8) {
  __m256i_internal a = __m256i_to_internal(__a);
  if (imm8 & 0x1) {
    return a.v1;
  } else {
    return a.v0;
  }
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_set_m128(__m128 __hi, __m128 __lo) {
  __m256_internal ret;
  ret.v0 = __lo;
  ret.v1 = __hi;
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_set_m128d(__m128d __hi, __m128d __lo) {
  __m256d_internal ret;
  ret.v0 = __lo;
  ret.v1 = __hi;
  return __m256d_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_set_m128i(__m128i __hi, __m128i __lo) {
  __m256i_internal ret;
  ret.v0 = __lo;
  ret.v1 = __hi;
  return __m256i_from_internal(ret);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_setr_m128(__m128 __lo, __m128 __hi) {
  return _mm256_set_m128(__hi, __lo);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_setr_m128d(__m128d __lo, __m128d __hi) {
  return (__m256d)_mm256_set_m128d(__hi, __lo);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_setr_m128i(__m128i __lo, __m128i __hi) {
  return (__m256i)_mm256_set_m128i(__hi, __lo);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_loadu2_m128(float const* __addr_hi, float const* __addr_lo) {
  return _mm256_set_m128(_mm_loadu_ps(__addr_hi), _mm_loadu_ps(__addr_lo));
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_loadu2_m128d(double const* __addr_hi, double const* __addr_lo) {
  return _mm256_set_m128d(_mm_loadu_pd(__addr_hi), _mm_loadu_pd(__addr_lo));
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_loadu2_m128i(__m128i_u const* __addr_hi, __m128i_u const* __addr_lo) {
  return _mm256_set_m128i(_mm_loadu_si128((__m128i const*)__addr_hi),
                          _mm_loadu_si128((__m128i const*)__addr_lo));
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_storeu2_m128(float* __addr_hi, float* __addr_lo, __m256 __a) {
  __m256_internal a = __m256_to_internal(__a);
  _mm_storeu_ps(__addr_lo, a.v0);
  _mm_storeu_ps(__addr_hi, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_storeu2_m128d(double* __addr_hi, double* __addr_lo, __m256d __a) {
  __m256d_internal a = __m256d_to_internal(__a);
  _mm_storeu_pd(__addr_lo, a.v0);
  _mm_storeu_pd(__addr_hi, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_storeu2_m128i(__m128i_u* __addr_hi, __m128i_u* __addr_lo, __m256i __a) {
  __m256i_internal a = __m256i_to_internal(__a);
  _mm_storeu_si128((__m128i*)__addr_lo, a.v0);
  _mm_storeu_si128((__m128i*)__addr_hi, a.v1);
}

#endif /* __emscripten_avxintrin_h__ */
`,"avx2intrin.h":`/*
 * Copyright 2024 The Emscripten Authors.  All rights reserved.
 * Emscripten is available under two separate licenses, the MIT license and the
 * University of Illinois/NCSA Open Source License.  Both these licenses can be
 * found in the LICENSE file.
 */

#ifndef __emscripten_immintrin_h__
#error "Never use <avx2intrin.h> directly; include <immintrin.h> instead."
#endif

#ifndef __emscripten_avx2intrin_h__
#define __emscripten_avx2intrin_h__

#ifndef __AVX2__
#error "AVX2 instruction set not enabled"
#endif

#define _mm256_mpsadbw_epu8(__A, __B, __imm)                                   \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                           \\
    __m256i_internal __b = __m256i_to_internal(__B);                           \\
    _mm256_set_m128i(_mm_mpsadbw_epu8(__a.v1, __b.v1, (__imm) >> 3),           \\
                     _mm_mpsadbw_epu8(__a.v0, __b.v0, (__imm)));               \\
  })

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_abs_epi8(__m256i __a) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_abs_epi8(a.v0);
  ret.v1 = _mm_abs_epi8(a.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_abs_epi16(__m256i __a) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_abs_epi16(a.v0);
  ret.v1 = _mm_abs_epi16(a.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_abs_epi32(__m256i __a) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_abs_epi32(a.v0);
  ret.v1 = _mm_abs_epi32(a.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_packs_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_packs_epi16(a.v0, b.v0);
  ret.v1 = _mm_packs_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_packs_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_packs_epi32(a.v0, b.v0);
  ret.v1 = _mm_packs_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_packus_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_packus_epi16(a.v0, b.v0);
  ret.v1 = _mm_packus_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_packus_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_packus_epi32(a.v0, b.v0);
  ret.v1 = _mm_packus_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_add_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_add_epi8(a.v0, b.v0);
  ret.v1 = _mm_add_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_add_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_add_epi16(a.v0, b.v0);
  ret.v1 = _mm_add_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_add_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_add_epi32(a.v0, b.v0);
  ret.v1 = _mm_add_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_add_epi64(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_add_epi64(a.v0, b.v0);
  ret.v1 = _mm_add_epi64(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_adds_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_adds_epi8(a.v0, b.v0);
  ret.v1 = _mm_adds_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_adds_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_adds_epi16(a.v0, b.v0);
  ret.v1 = _mm_adds_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_adds_epu8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_adds_epu8(a.v0, b.v0);
  ret.v1 = _mm_adds_epu8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_adds_epu16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_adds_epu16(a.v0, b.v0);
  ret.v1 = _mm_adds_epu16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

#define _mm256_alignr_epi8(__A, __B, __imm)                                    \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    __m256i_internal __b = __m256i_to_internal(__B);                             \\
    _mm256_set_m128i(_mm_alignr_epi8(__a.v1, __b.v1, (__imm)),                 \\
                     _mm_alignr_epi8(__a.v0, __b.v0, (__imm)));                \\
  })

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_and_si256(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_and_si128(a.v0, b.v0);
  ret.v1 = _mm_and_si128(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_andnot_si256(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_andnot_si128(a.v0, b.v0);
  ret.v1 = _mm_andnot_si128(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_avg_epu8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_avg_epu8(a.v0, b.v0);
  ret.v1 = _mm_avg_epu8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_avg_epu16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_avg_epu16(a.v0, b.v0);
  ret.v1 = _mm_avg_epu16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_blendv_epi8(__m256i __a, __m256i __b, __m256i __mask) {
  __m256i_internal ret, a, b, mask;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  mask = __m256i_to_internal(__mask);
  ret.v0 = _mm_blendv_epi8(a.v0, b.v0, mask.v0);
  ret.v1 = _mm_blendv_epi8(a.v1, b.v1, mask.v1);
  return __m256i_from_internal(ret);
}

#define _mm256_blend_epi16(__A, __B, __imm)                                    \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    __m256i_internal __b = __m256i_to_internal(__B);                             \\
    _mm256_set_m128i(_mm_blend_epi16(__a.v1, __b.v1, (__imm)),                 \\
                     _mm_blend_epi16(__a.v0, __b.v0, (__imm)));                \\
  })

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpeq_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpeq_epi8(a.v0, b.v0);
  ret.v1 = _mm_cmpeq_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpeq_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpeq_epi16(a.v0, b.v0);
  ret.v1 = _mm_cmpeq_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpeq_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpeq_epi32(a.v0, b.v0);
  ret.v1 = _mm_cmpeq_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpeq_epi64(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpeq_epi64(a.v0, b.v0);
  ret.v1 = _mm_cmpeq_epi64(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpgt_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpgt_epi8(a.v0, b.v0);
  ret.v1 = _mm_cmpgt_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpgt_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpgt_epi16(a.v0, b.v0);
  ret.v1 = _mm_cmpgt_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpgt_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpgt_epi32(a.v0, b.v0);
  ret.v1 = _mm_cmpgt_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cmpgt_epi64(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_cmpgt_epi64(a.v0, b.v0);
  ret.v1 = _mm_cmpgt_epi64(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_hadd_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_hadd_epi16(a.v0, b.v0);
  ret.v1 = _mm_hadd_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_hadd_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_hadd_epi32(a.v0, b.v0);
  ret.v1 = _mm_hadd_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_hadds_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_hadds_epi16(a.v0, b.v0);
  ret.v1 = _mm_hadds_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_hsub_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_hsub_epi16(a.v0, b.v0);
  ret.v1 = _mm_hsub_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_hsub_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_hsub_epi32(a.v0, b.v0);
  ret.v1 = _mm_hsub_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_hsubs_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_hsubs_epi16(a.v0, b.v0);
  ret.v1 = _mm_hsubs_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_maddubs_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_maddubs_epi16(a.v0, b.v0);
  ret.v1 = _mm_maddubs_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_madd_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_madd_epi16(a.v0, b.v0);
  ret.v1 = _mm_madd_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_max_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_max_epi8(a.v0, b.v0);
  ret.v1 = _mm_max_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_max_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_max_epi16(a.v0, b.v0);
  ret.v1 = _mm_max_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_max_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_max_epi32(a.v0, b.v0);
  ret.v1 = _mm_max_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_max_epu8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_max_epu8(a.v0, b.v0);
  ret.v1 = _mm_max_epu8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_max_epu16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_max_epu16(a.v0, b.v0);
  ret.v1 = _mm_max_epu16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_max_epu32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_max_epu32(a.v0, b.v0);
  ret.v1 = _mm_max_epu32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_min_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_min_epi8(a.v0, b.v0);
  ret.v1 = _mm_min_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_min_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_min_epi16(a.v0, b.v0);
  ret.v1 = _mm_min_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_min_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_min_epi32(a.v0, b.v0);
  ret.v1 = _mm_min_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_min_epu8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_min_epu8(a.v0, b.v0);
  ret.v1 = _mm_min_epu8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_min_epu16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_min_epu16(a.v0, b.v0);
  ret.v1 = _mm_min_epu16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_min_epu32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_min_epu32(a.v0, b.v0);
  ret.v1 = _mm_min_epu32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ int __attribute__((__always_inline__, __nodebug__))
_mm256_movemask_epi8(__m256i __a) {
  __m256i_internal a = __m256i_to_internal(__a);
  return (_mm_movemask_epi8(a.v1) << 16) | _mm_movemask_epi8(a.v0);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi8_epi16(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepi8_epi16(__a);
  ret.v1 = _mm_cvtepi8_epi16(_mm_shuffle_epi32(__a, 0x4E));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi8_epi32(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepi8_epi32(__a);
  ret.v1 = _mm_cvtepi8_epi32(_mm_shuffle_epi32(__a, 0xE1));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi8_epi64(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepi8_epi64(__a);
  ret.v1 = _mm_cvtepi8_epi64(_mm_srli_epi32(__a, 16));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi16_epi32(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepi16_epi32(__a);
  ret.v1 = _mm_cvtepi16_epi32(_mm_shuffle_epi32(__a, 0x4E));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi16_epi64(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepi16_epi64(__a);
  ret.v1 = _mm_cvtepi16_epi64(_mm_shuffle_epi32(__a, 0xE1));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepi32_epi64(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepi32_epi64(__a);
  ret.v1 = _mm_cvtepi32_epi64(_mm_shuffle_epi32(__a, 0x4E));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepu8_epi16(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepu8_epi16(__a);
  ret.v1 = _mm_cvtepu8_epi16(_mm_shuffle_epi32(__a, 0x4E));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepu8_epi32(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepu8_epi32(__a);
  ret.v1 = _mm_cvtepu8_epi32(_mm_shuffle_epi32(__a, 0xE1));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepu8_epi64(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepu8_epi64(__a);
  ret.v1 = _mm_cvtepu8_epi64(_mm_srli_epi32(__a, 16));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepu16_epi32(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepu16_epi32(__a);
  ret.v1 = _mm_cvtepu16_epi32(_mm_shuffle_epi32(__a, 0x4E));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepu16_epi64(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepu16_epi64(__a);
  ret.v1 = _mm_cvtepu16_epi64(_mm_shuffle_epi32(__a, 0xE1));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_cvtepu32_epi64(__m128i __a) {
  __m256i_internal ret;
  ret.v0 = _mm_cvtepu32_epi64(__a);
  ret.v1 = _mm_cvtepu32_epi64(_mm_shuffle_epi32(__a, 0x4E));
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_mul_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_mul_epi32(a.v0, b.v0);
  ret.v1 = _mm_mul_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_mulhrs_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_mulhrs_epi16(a.v0, b.v0);
  ret.v1 = _mm_mulhrs_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_mulhi_epu16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_mulhi_epu16(a.v0, b.v0);
  ret.v1 = _mm_mulhi_epu16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_mulhi_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_mulhi_epi16(a.v0, b.v0);
  ret.v1 = _mm_mulhi_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_mullo_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_mullo_epi16(a.v0, b.v0);
  ret.v1 = _mm_mullo_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_mullo_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_mullo_epi32(a.v0, b.v0);
  ret.v1 = _mm_mullo_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_mul_epu32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_mul_epu32(a.v0, b.v0);
  ret.v1 = _mm_mul_epu32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_or_si256(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_or_si128(a.v0, b.v0);
  ret.v1 = _mm_or_si128(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sad_epu8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sad_epu8(a.v0, b.v0);
  ret.v1 = _mm_sad_epu8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_shuffle_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_shuffle_epi8(a.v0, b.v0);
  ret.v1 = _mm_shuffle_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

#define _mm256_shuffle_epi32(__A, __imm)                                       \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    _mm256_set_m128i(_mm_shuffle_epi32(__a.v1, (__imm)),                       \\
                     _mm_shuffle_epi32(__a.v0, (__imm)));                      \\
  })

#define _mm256_shufflehi_epi16(__A, __imm)                                     \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    _mm256_set_m128i(_mm_shufflehi_epi16(__a.v1, (__imm)),                     \\
                     _mm_shufflehi_epi16(__a.v0, (__imm)));                    \\
  })

#define _mm256_shufflelo_epi16(__A, __imm)                                     \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    _mm256_set_m128i(_mm_shufflelo_epi16(__a.v1, (__imm)),                     \\
                     _mm_shufflelo_epi16(__a.v0, (__imm)));                    \\
  })

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sign_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sign_epi8(a.v0, b.v0);
  ret.v1 = _mm_sign_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sign_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sign_epi16(a.v0, b.v0);
  ret.v1 = _mm_sign_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sign_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sign_epi32(a.v0, b.v0);
  ret.v1 = _mm_sign_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

#define _mm256_slli_si256(__A, __imm)                                          \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    _mm256_set_m128i(_mm_slli_si128(__a.v1, (__imm)),                          \\
                     _mm_slli_si128(__a.v0, (__imm)));                         \\
  })

#define _mm256_bslli_epi128(__A, __imm) _mm256_slli_si256(__A, __imm)

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_slli_epi16(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_slli_epi16(a.v0, __count);
  ret.v1 = _mm_slli_epi16(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sll_epi16(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_sll_epi16(a.v0, __count);
  ret.v1 = _mm_sll_epi16(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_slli_epi32(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_slli_epi32(a.v0, __count);
  ret.v1 = _mm_slli_epi32(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sll_epi32(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_sll_epi32(a.v0, __count);
  ret.v1 = _mm_sll_epi32(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_slli_epi64(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_slli_epi64(a.v0, __count);
  ret.v1 = _mm_slli_epi64(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sll_epi64(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_sll_epi64(a.v0, __count);
  ret.v1 = _mm_sll_epi64(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srai_epi16(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srai_epi16(a.v0, __count);
  ret.v1 = _mm_srai_epi16(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sra_epi16(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_sra_epi16(a.v0, __count);
  ret.v1 = _mm_sra_epi16(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srai_epi32(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srai_epi32(a.v0, __count);
  ret.v1 = _mm_srai_epi32(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sra_epi32(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_sra_epi32(a.v0, __count);
  ret.v1 = _mm_sra_epi32(a.v1, __count);
  return __m256i_from_internal(ret);
}

#define _mm256_srli_si256(__A, __imm)                                          \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    _mm256_set_m128i(_mm_srli_si128(__a.v1, (__imm)),                          \\
                     _mm_srli_si128(__a.v0, (__imm)));                         \\
  })

#define _mm256_bsrli_epi128(a, imm) _mm256_srli_si256(a, imm)

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srli_epi16(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srli_epi16(a.v0, __count);
  ret.v1 = _mm_srli_epi16(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srl_epi16(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srl_epi16(a.v0, __count);
  ret.v1 = _mm_srl_epi16(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srli_epi32(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srli_epi32(a.v0, __count);
  ret.v1 = _mm_srli_epi32(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srl_epi32(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srl_epi32(a.v0, __count);
  ret.v1 = _mm_srl_epi32(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srli_epi64(__m256i __a, int __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srli_epi64(a.v0, __count);
  ret.v1 = _mm_srli_epi64(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_srl_epi64(__m256i __a, __m128i __count) {
  __m256i_internal ret, a;
  a = __m256i_to_internal(__a);
  ret.v0 = _mm_srl_epi64(a.v0, __count);
  ret.v1 = _mm_srl_epi64(a.v1, __count);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sub_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sub_epi8(a.v0, b.v0);
  ret.v1 = _mm_sub_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sub_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sub_epi16(a.v0, b.v0);
  ret.v1 = _mm_sub_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sub_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sub_epi32(a.v0, b.v0);
  ret.v1 = _mm_sub_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_sub_epi64(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_sub_epi64(a.v0, b.v0);
  ret.v1 = _mm_sub_epi64(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_subs_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_subs_epi8(a.v0, b.v0);
  ret.v1 = _mm_subs_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_subs_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_subs_epi16(a.v0, b.v0);
  ret.v1 = _mm_subs_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_subs_epu8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_subs_epu8(a.v0, b.v0);
  ret.v1 = _mm_subs_epu8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_subs_epu16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_subs_epu16(a.v0, b.v0);
  ret.v1 = _mm_subs_epu16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpackhi_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpackhi_epi8(a.v0, b.v0);
  ret.v1 = _mm_unpackhi_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpackhi_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpackhi_epi16(a.v0, b.v0);
  ret.v1 = _mm_unpackhi_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpackhi_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpackhi_epi32(a.v0, b.v0);
  ret.v1 = _mm_unpackhi_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpackhi_epi64(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpackhi_epi64(a.v0, b.v0);
  ret.v1 = _mm_unpackhi_epi64(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpacklo_epi8(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpacklo_epi8(a.v0, b.v0);
  ret.v1 = _mm_unpacklo_epi8(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpacklo_epi16(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpacklo_epi16(a.v0, b.v0);
  ret.v1 = _mm_unpacklo_epi16(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpacklo_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpacklo_epi32(a.v0, b.v0);
  ret.v1 = _mm_unpacklo_epi32(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_unpacklo_epi64(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_unpacklo_epi64(a.v0, b.v0);
  ret.v1 = _mm_unpacklo_epi64(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_xor_si256(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  ret.v0 = _mm_xor_si128(a.v0, b.v0);
  ret.v1 = _mm_xor_si128(a.v1, b.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_stream_load_si256(const void* __V) {
  __m256i_internal ret;
  ret.v0 = _mm_stream_load_si128((const __m128i*)__V);
  ret.v1 = _mm_stream_load_si128((const __m128i*)(((const uint8_t*)__V) + 16));
  return __m256i_from_internal(ret);
}

static __inline__ __m128 __attribute__((__always_inline__, __nodebug__))
_mm_broadcastss_ps(__m128 __a) {
  return (__m128)wasm_i32x4_shuffle(__a, __a, 0, 0, 0, 0);
}

static __inline__ __m128d __attribute__((__always_inline__, __nodebug__))
_mm_broadcastsd_pd(__m128d __a) {
  return (__m128d)wasm_i64x2_shuffle(__a, __a, 0, 0);
}

static __inline__ __m256 __attribute__((__always_inline__, __nodebug__))
_mm256_broadcastss_ps(__m128 __a) {
  __m256_internal ret;
  ret.v1 = ret.v0 = _mm_broadcastss_ps(__a);
  return __m256_from_internal(ret);
}

static __inline__ __m256d __attribute__((__always_inline__, __nodebug__))
_mm256_broadcastsd_pd(__m128d __a) {
  __m256d_internal ret;
  ret.v1 = ret.v0 = _mm_broadcastsd_pd(__a);
  return __m256d_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_broadcastsi128_si256(__m128i __a) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = __a;
  return __m256i_from_internal(ret);
}

#define _mm_broadcastsi128_si256(X) _mm256_broadcastsi128_si256(X)

#define _mm_blend_epi32(__a, __b, __imm8)                                      \\
  __extension__({                                                              \\
    (__m128i) __builtin_shufflevector((__i32x4)(__m128i)(__a),                 \\
                                      (__i32x4)(__m128i)(__b),                 \\
                                      (((__imm8) & 0x01) ? 4 : 0),             \\
                                      (((__imm8) & 0x02) ? 5 : 1),             \\
                                      (((__imm8) & 0x04) ? 6 : 2),             \\
                                      (((__imm8) & 0x08) ? 7 : 3));            \\
  })

#define _mm256_blend_epi32(__A, __B, __imm)                                    \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    __m256i_internal __b = __m256i_to_internal(__B);                             \\
    _mm256_set_m128i(_mm_blend_epi32(__a.v1, __b.v1, (__imm) >> 4),            \\
                     _mm_blend_epi32(__a.v0, __b.v0, (__imm)));                \\
  })

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_broadcastb_epi8(__m128i __a) {
  return (__m128i)wasm_i8x16_shuffle(
    __a, __a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_broadcastw_epi16(__m128i __a) {
  return (__m128i)wasm_i16x8_shuffle(__a, __a, 0, 0, 0, 0, 0, 0, 0, 0);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_broadcastd_epi32(__m128i __a) {
  return (__m128i)wasm_i32x4_shuffle(__a, __a, 0, 0, 0, 0);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_broadcastq_epi64(__m128i __a) {
  return (__m128i)wasm_i64x2_shuffle(__a, __a, 0, 0);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_broadcastb_epi8(__m128i __a) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = _mm_broadcastb_epi8(__a);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_broadcastw_epi16(__m128i __a) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = _mm_broadcastw_epi16(__a);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_broadcastd_epi32(__m128i __a) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = _mm_broadcastd_epi32(__a);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_broadcastq_epi64(__m128i __a) {
  __m256i_internal ret;
  ret.v1 = ret.v0 = _mm_broadcastq_epi64(__a);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_permutevar8x32_epi32(__m256i __a, __m256i __b) {
  __m256i_internal ret, a, b;
  a = __m256i_to_internal(__a);
  b = __m256i_to_internal(__b);
  int index[8];
  int lane[8];
  for (int i = 0; i < 4; i++) {
    index[i] = ((__i32x4)b.v0)[i] & 7;
    index[i + 4] = ((__i32x4)b.v1)[i] & 7;
  }

  for (int j = 0; j < 8; j++) {
    lane[j] = index[j] < 4 ? ((__i32x4)(a.v0))[index[j]]
                           : ((__i32x4)(a.v1))[index[j] - 4];
  }

  ret.v0 = (__m128i)wasm_i32x4_make(lane[0], lane[1], lane[2], lane[3]);
  ret.v1 = (__m128i)wasm_i32x4_make(lane[4], lane[5], lane[6], lane[7]);
  return __m256i_from_internal(ret);
}

#define _mm256_permute4x64_pd(__A, __imm)                                      \\
  __extension__({                                                              \\
    __m256d_internal __a = __m256d_to_internal(__A);                             \\
    _mm256_set_m128d(                                                          \\
      (__m128d)wasm_i64x2_shuffle(                                             \\
        __a.v0, __a.v1, (((__imm) >> 4) & 3), (((__imm) >> 6) & 3)),           \\
      (__m128d)wasm_i64x2_shuffle(                                             \\
        __a.v0, __a.v1, ((__imm) & 3), (((__imm) >> 2) & 3)));                 \\
  })

static __inline__ __m256
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_permutevar8x32_ps(__m256 __a, __m256i __b) {
  __m256_internal ret;
  __m256_internal a = __m256_to_internal(__a);
  __m256i_internal b = __m256i_to_internal(__b);
  int index[8];
  float lane[8];
  for (int i = 0; i < 4; i++) {
    index[i] = ((__i32x4)b.v0)[i] & 7;
    index[i + 4] = ((__i32x4)b.v1)[i] & 7;
  }
  for (int j = 0; j < 8; j++) {
    lane[j] = index[j] < 4 ? ((__f32x4)(a.v0))[index[j]]
                           : ((__f32x4)(a.v1))[index[j] - 4];
  }
  ret.v0 = (__m128)wasm_f32x4_make(lane[0], lane[1], lane[2], lane[3]);
  ret.v1 = (__m128)wasm_f32x4_make(lane[4], lane[5], lane[6], lane[7]);
  return __m256_from_internal(ret);
}

#define _mm256_permute4x64_epi64(__A, __imm)                                   \\
  __extension__({                                                              \\
    __m256i_internal __a = __m256i_to_internal(__A);                             \\
    _mm256_set_m128i(                                                          \\
      wasm_i64x2_shuffle(                                                      \\
        __a.v0, __a.v1, (((__imm) >> 4) & 3), (((__imm) >> 6) & 3)),           \\
      wasm_i64x2_shuffle(                                                      \\
        __a.v0, __a.v1, ((__imm) & 3), (((__imm) >> 2) & 3)));                 \\
  })

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_permute2x128_si256(__m256i __a, __m256i __b, const int imm8) {
  __m256i_internal ret;
  ret.v0 = __avx_select4i(__a, __b, imm8);
  ret.v1 = __avx_select4i(__a, __b, imm8 >> 4);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm256_extracti128_si256(__m256i __a, const int imm8) {
  __m256i_internal a = __m256i_to_internal(__a);
  if (imm8 & 0x1) {
    return a.v1;
  } else {
    return a.v0;
  }
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_inserti128_si256(__m256i __a, __m128i __b, const int imm8) {
  __m256i_internal ret = __m256i_to_internal(__a);
  if (imm8 & 0x1) {
    ret.v1 = __b;
  } else {
    ret.v0 = __b;
  }
  return __m256i_from_internal(ret);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_maskload_epi32(int32_t const* __p, __m128i __m) {
  int32_t lane[4];
  for (size_t i = 0; i < 4; i++) {
    uint32_t mask = ((__i32x4)__m)[i];
    lane[i] = ((mask >> 31) & 0x1) ? __p[i] : 0;
  }
  return (__m128i)wasm_i32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m128i __attribute__((__always_inline__, __nodebug__))
_mm_maskload_epi64(int64_t const* __p, __m128i __m) {
  int64_t lane[2];
  for (size_t i = 0; i < 2; i++) {
    uint64_t mask = ((__i64x2)__m)[i];
    lane[i] = ((mask >> 63) & 0x1) ? __p[i] : 0;
  }
  return (__m128i)wasm_i64x2_make(lane[0], lane[1]);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_maskload_epi32(int const* __p, __m256i __m) {
  __m256i_internal ret, m;
  m = __m256i_to_internal(__m);
  ret.v0 = _mm_maskload_epi32(__p, m.v0);
  ret.v1 = _mm_maskload_epi32(((int32_t*)__p) + 4, m.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m256i __attribute__((__always_inline__, __nodebug__))
_mm256_maskload_epi64(long long const* __p, __m256i __m) {
  __m256i_internal ret, m;
  m = __m256i_to_internal(__m);
  ret.v0 = _mm_maskload_epi64(__p, m.v0);
  ret.v1 = _mm_maskload_epi64(((int64_t*)__p) + 2, m.v1);
  return __m256i_from_internal(ret);
}

static __inline__ void
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_maskstore_epi32(int* __p, __m128i __m, __m128i __a) {
  if ((wasm_i32x4_extract_lane(__m, 0) & 0x80000000ull) != 0)
    __p[0] = wasm_i32x4_extract_lane((v128_t)__a, 0);
  if ((wasm_i32x4_extract_lane(__m, 1) & 0x80000000ull) != 0)
    __p[1] = wasm_i32x4_extract_lane((v128_t)__a, 1);
  if ((wasm_i32x4_extract_lane(__m, 2) & 0x80000000ull) != 0)
    __p[2] = wasm_i32x4_extract_lane((v128_t)__a, 2);
  if ((wasm_i32x4_extract_lane(__m, 3) & 0x80000000ull) != 0)
    __p[3] = wasm_i32x4_extract_lane((v128_t)__a, 3);
}

static __inline__ void
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_maskstore_epi64(long long* __p, __m128i __m, __m128i __a) {
  if ((wasm_i64x2_extract_lane(__m, 0) & 0x8000000000000000ull) != 0)
    __p[0] = wasm_i64x2_extract_lane((v128_t)__a, 0);
  if ((wasm_i64x2_extract_lane(__m, 1) & 0x8000000000000000ull) != 0)
    __p[1] = wasm_i64x2_extract_lane((v128_t)__a, 1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_maskstore_epi32(int* __p, __m256i __m, __m256i __a) {
  __m256i_internal m, a;
  m = __m256i_to_internal(__m);
  a = __m256i_to_internal(__a);
  _mm_maskstore_epi32(__p, m.v0, a.v0);
  _mm_maskstore_epi32(((int32_t*)__p) + 4, m.v1, a.v1);
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm256_maskstore_epi64(long long* __p, __m256i __m, __m256i __a) {
  __m256i_internal m, a;
  m = __m256i_to_internal(__m);
  a = __m256i_to_internal(__a);
  _mm_maskstore_epi64(__p, m.v0, a.v0);
  _mm_maskstore_epi64(((int64_t*)__p) + 2, m.v1, a.v1);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_sllv_epi32(__m128i __a, __m128i __count) {
  int32_t lane[4];
  for (size_t i = 0; i < 4; i++) {
    uint32_t shift = ((__u32x4)__count)[i];
    lane[i] = shift < 32 ? ((__u32x4)__a)[i] << shift : 0;
  }
  return (__m128i)wasm_i32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_sllv_epi32(__m256i __a, __m256i __count) {
  __m256i_internal ret, a, count;
  a = __m256i_to_internal(__a);
  count = __m256i_to_internal(__count);
  ret.v0 = _mm_sllv_epi32(a.v0, count.v0);
  ret.v1 = _mm_sllv_epi32(a.v1, count.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_sllv_epi64(__m128i __a, __m128i __count) {

  int64_t lane[2];
  for (size_t i = 0; i < 2; i++) {
    uint64_t shift = (uint64_t)((__u64x2)__count)[i];
    lane[i] = shift < 64 ? ((__u64x2)__a)[i] << shift : 0;
  }
  return (__m128i)wasm_i64x2_make(lane[0], lane[1]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_sllv_epi64(__m256i __a, __m256i __count) {
  __m256i_internal ret, a, count;
  a = __m256i_to_internal(__a);
  count = __m256i_to_internal(__count);
  ret.v0 = _mm_sllv_epi64(a.v0, count.v0);
  ret.v1 = _mm_sllv_epi64(a.v1, count.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_srav_epi32(__m128i __a, __m128i __count) {
  int32_t lane[4];
  for (size_t i = 0; i < 4; i++) {
    uint32_t shift = ((__u32x4)__count)[i];
    shift = shift < 31 ? shift : 31;
    lane[i] = ((__i32x4)__a)[i] >> shift;
  }
  return (__m128i)wasm_i32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_srav_epi32(__m256i __a, __m256i __count) {
  __m256i_internal ret, a, count;
  a = __m256i_to_internal(__a);
  count = __m256i_to_internal(__count);
  ret.v0 = _mm_srav_epi32(a.v0, count.v0);
  ret.v1 = _mm_srav_epi32(a.v1, count.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_srlv_epi32(__m128i __a, __m128i __count) {
  int32_t lane[4];
  for (size_t i = 0; i < 4; i++) {
    uint32_t shift = ((__u32x4)__count)[i];
    lane[i] = shift < 32 ? ((__u32x4)__a)[i] >> shift : 0;
  }
  return (__m128i)wasm_i32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_srlv_epi32(__m256i __a, __m256i __count) {
  __m256i_internal ret, a, count;
  a = __m256i_to_internal(__a);
  count = __m256i_to_internal(__count);
  ret.v0 = _mm_srlv_epi32(a.v0, count.v0);
  ret.v1 = _mm_srlv_epi32(a.v1, count.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_srlv_epi64(__m128i __a, __m128i __count) {
  int64_t lane[2];
  for (size_t i = 0; i < 2; i++) {
    uint64_t shift = ((__u64x2)__count)[i];
    lane[i] = shift < 64 ? ((__u64x2)__a)[i] >> shift : 0;
  }
  return (__m128i)wasm_i64x2_make(lane[0], lane[1]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_srlv_epi64(__m256i __a, __m256i __count) {
  __m256i_internal ret, a, count;
  a = __m256i_to_internal(__a);
  count = __m256i_to_internal(__count);
  ret.v0 = _mm_srlv_epi64(a.v0, count.v0);
  ret.v1 = _mm_srlv_epi64(a.v1, count.v1);
  return __m256i_from_internal(ret);
}

static __inline__ __m128d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i32gather_pd(__m128d src,
                        const double* base_addr,
                        __m128i vindex,
                        __m128d mask,
                        const int scale) {
  double lane[2];
  for (size_t i = 0; i < 2; i++) {
    if ((((__i64x2)mask)[i] >> 63) & 0x1) {
      double* addr =
        (double*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                          (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__f64x2)src)[i];
    }
  }
  return (__m128d)wasm_f64x2_make(lane[0], lane[1]);
}

static __inline__ __m256d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i32gather_pd(__m256d __src,
                           const double* base_addr,
                           __m128i vindex,
                           __m256d __mask,
                           const int scale) {
  __m256d_internal ret, src, mask;
  src = __m256d_to_internal(__src);
  mask = __m256d_to_internal(__mask);
  ret.v0 = _mm_mask_i32gather_pd(src.v0, base_addr, vindex, mask.v0, scale);
  __m128i vindex1 = (__m128i)wasm_i32x4_shuffle(vindex, vindex, 2, 3, 0, 1);
  ret.v1 = _mm_mask_i32gather_pd(src.v1, base_addr, vindex1, mask.v1, scale);
  return __m256d_from_internal(ret);
}

static __inline__ __m128d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i64gather_pd(__m128d src,
                        const double* base_addr,
                        __m128i vindex,
                        __m128d mask,
                        const int scale) {
  double lane[2];
  for (size_t i = 0; i < 2; i++) {
    if ((((__i64x2)mask)[i] >> 63) & 0x1) {
      double* addr =
        (double*)((uint8_t*)base_addr +
                  ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__f64x2)src)[i];
    }
  }
  return (__m128d)wasm_f64x2_make(lane[0], lane[1]);
}

static __inline__ __m256d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i64gather_pd(__m256d __src,
                           const double* base_addr,
                           __m256i __vindex,
                           __m256d __mask,
                           const int scale) {
  __m256d_internal ret, src, mask;
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  src = __m256d_to_internal(__src);
  mask = __m256d_to_internal(__mask);
  ret.v0 = _mm_mask_i64gather_pd(src.v0, base_addr, vindex.v0, mask.v0, scale);
  ret.v1 = _mm_mask_i64gather_pd(src.v1, base_addr, vindex.v1, mask.v1, scale);
  return __m256d_from_internal(ret);
}

static __inline__ __m128
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i32gather_ps(__m128 src,
                        const float* base_addr,
                        __m128i vindex,
                        __m128 mask,
                        const int scale) {
  float lane[4];
  for (size_t i = 0; i < 4; i++) {
    if ((((__i32x4)mask)[i] >> 31) & 0x1) {
      float* addr =
        (float*)((uint8_t*)base_addr +
                 (int64_t)(((__i32x4)vindex)[i]) * (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__f32x4)src)[i];
    }
  }
  return (__m128)wasm_f32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m256
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i32gather_ps(__m256 __src,
                           const float* base_addr,
                           __m256i __vindex,
                           __m256 __mask,
                           const int scale) {
  __m256_internal ret, src, mask;
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  src = __m256_to_internal(__src);
  mask = __m256_to_internal(__mask);
  ret.v0 = _mm_mask_i32gather_ps(src.v0, base_addr, vindex.v0, mask.v0, scale);
  ret.v1 = _mm_mask_i32gather_ps(src.v1, base_addr, vindex.v1, mask.v1, scale);
  return __m256_from_internal(ret);
}

static __inline__ __m128
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i64gather_ps(__m128 src,
                        const float* base_addr,
                        __m128i vindex,
                        __m128 mask,
                        const int scale) {
  float lane[2];
  for (size_t i = 0; i < 2; i++) {
    if ((((__i32x4)mask)[i] >> 31) & 0x1) {
      float* addr =
        (float*)((uint8_t*)base_addr +
                 ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__f32x4)src)[i];
    }
  }
  return (__m128)wasm_f32x4_make(lane[0], lane[1], 0, 0);
}

static __inline__ __m128
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i64gather_ps(__m128 src,
                           const float* base_addr,
                           __m256i __vindex,
                           __m128 mask,
                           const int scale) {
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  float lane[4];
  __m128i current_vindex;
  for (size_t i = 0; i < 4; i++) {
    current_vindex = i < 2 ? vindex.v0 : vindex.v1;
    if ((((__i32x4)mask)[i] >> 31) & 0x1) {
      float* addr =
        (float*)((uint8_t*)base_addr + ((__i64x2)current_vindex)[i & 1] *
                                         (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__f32x4)src)[i];
    }
  }
  return (__m128)wasm_f32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i32gather_epi32(__m128i src,
                           const int* base_addr,
                           __m128i vindex,
                           __m128i mask,
                           const int scale) {
  int32_t lane[4];
  for (size_t i = 0; i < 4; i++) {
    if ((((__i32x4)mask)[i] >> 31) & 0x1) {
      int32_t* addr =
        (int32_t*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                           (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__i32x4)src)[i];
    }
  }
  return (__m128i)wasm_i32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i32gather_epi32(__m256i __src,
                              const int* base_addr,
                              __m256i __vindex,
                              __m256i __mask,
                              const int scale) {
  __m256i_internal ret, src, vindex, mask;
  src = __m256i_to_internal(__src);
  vindex = __m256i_to_internal(__vindex);
  mask = __m256i_to_internal(__mask);
  ret.v0 =
    _mm_mask_i32gather_epi32(src.v0, base_addr, vindex.v0, mask.v0, scale);
  ret.v1 =
    _mm_mask_i32gather_epi32(src.v1, base_addr, vindex.v1, mask.v1, scale);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i64gather_epi32(__m128i src,
                           const int* base_addr,
                           __m128i vindex,
                           __m128i mask,
                           const int scale) {
  int32_t lane[2];
  for (size_t i = 0; i < 2; i++) {
    if ((((__i32x4)mask)[i] >> 31) & 0x1) {
      int32_t* addr =
        (int32_t*)((uint8_t*)base_addr +
                   ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__i32x4)src)[i];
    }
  }
  return (__m128i)wasm_i32x4_make(lane[0], lane[1], 0, 0);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i64gather_epi32(__m128i src,
                              const int* base_addr,
                              __m256i __vindex,
                              __m128i mask,
                              const int scale) {
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  int32_t lane[4];
  __m128i current_vindex;
  for (size_t i = 0; i < 4; i++) {
    current_vindex = i < 2 ? vindex.v0 : vindex.v1;
    if ((((__i32x4)mask)[i] >> 31) & 0x1) {
      int32_t* addr =
        (int32_t*)((uint8_t*)base_addr + ((__i64x2)current_vindex)[i & 1] *
                                           (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__i32x4)src)[i];
    }
  }
  return (__m128i)wasm_i32x4_make(lane[0], lane[1], lane[2], lane[3]);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i32gather_epi64(__m128i src,
                           const long long* base_addr,
                           __m128i vindex,
                           __m128i mask,
                           const int scale) {
  int64_t lane[2];
  for (size_t i = 0; i < 2; i++) {
    if ((((__i64x2)mask)[i] >> 63) & 0x1) {
      int64_t* addr =
        (int64_t*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                           (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__i64x2)src)[i];
    }
  }
  return (__m128i)wasm_i64x2_make(lane[0], lane[1]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i32gather_epi64(__m256i __src,
                              const long long* base_addr,
                              __m128i vindex,
                              __m256i __mask,
                              const int scale) {
  __m256i_internal ret, src, mask;
  src = __m256i_to_internal(__src);
  mask = __m256i_to_internal(__mask);
  ret.v0 = _mm_mask_i32gather_epi64(src.v0, base_addr, vindex, mask.v0, scale);
  __m128i vindex1 = (__m128i)wasm_i32x4_shuffle(vindex, vindex, 2, 3, 0, 1);
  ret.v1 = _mm_mask_i32gather_epi64(src.v1, base_addr, vindex1, mask.v1, scale);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_mask_i64gather_epi64(__m128i src,
                           const long long* base_addr,
                           __m128i vindex,
                           __m128i mask,
                           const int scale) {
  int64_t lane[2];
  for (size_t i = 0; i < 2; i++) {
    if ((((__i64x2)mask)[i] >> 63) & 0x1) {
      int64_t* addr =
        (int64_t*)((uint8_t*)base_addr +
                   ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
      lane[i] = *addr;
    } else {
      lane[i] = ((__i64x2)src)[i];
    }
  }
  return (__m128i)wasm_i64x2_make(lane[0], lane[1]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_mask_i64gather_epi64(__m256i __src,
                              const long long* base_addr,
                              __m256i __vindex,
                              __m256i __mask,
                              const int scale) {
  __m256i_internal ret, src, vindex, mask;
  src = __m256i_to_internal(__src);
  vindex = __m256i_to_internal(__vindex);
  mask = __m256i_to_internal(__mask);
  ret.v0 =
    _mm_mask_i64gather_epi64(src.v0, base_addr, vindex.v0, mask.v0, scale);
  ret.v1 =
    _mm_mask_i64gather_epi64(src.v1, base_addr, vindex.v1, mask.v1, scale);
  return __m256i_from_internal(ret);
}

static __inline__ __m128d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i32gather_pd(const double* base_addr, __m128i vindex, const int scale) {
  double* lane[2];
  for (size_t i = 0; i < 2; i++) {
    lane[i] = (double*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                                (uint64_t)((uint32_t)scale));
  }
  return (__m128d)wasm_f64x2_make(*lane[0], *lane[1]);
}

static __inline__ __m256d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i32gather_pd(const double* base_addr,
                      __m128i vindex,
                      const int scale) {
  __m256d_internal ret;
  double* lane[4];
  for (size_t i = 0; i < 4; i++) {
    lane[i] = (double*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                                (uint64_t)((uint32_t)scale));
  }
  ret.v0 = (__m128d)wasm_f64x2_make(*lane[0], *lane[1]);
  ret.v1 = (__m128d)wasm_f64x2_make(*lane[2], *lane[3]);
  return __m256d_from_internal(ret);
}

static __inline__ __m128d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i64gather_pd(const double* base_addr, __m128i vindex, const int scale) {
  double* lane[2];
  for (size_t i = 0; i < 2; i++) {
    lane[i] = (double*)((uint8_t*)base_addr +
                        ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
  }
  return (__m128d)wasm_f64x2_make(*lane[0], *lane[1]);
}

static __inline__ __m256d
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i64gather_pd(const double* base_addr,
                      __m256i __vindex,
                      const int scale) {
  __m256d_internal ret;
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  ret.v0 = _mm_i64gather_pd(base_addr, vindex.v0, scale);
  ret.v1 = _mm_i64gather_pd(base_addr, vindex.v1, scale);
  return __m256d_from_internal(ret);
}

static __inline__ __m128
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i32gather_ps(const float* base_addr, __m128i vindex, const int scale) {
  float* lane[4];
  for (size_t i = 0; i < 4; i++) {
    lane[i] = (float*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                               (uint64_t)((uint32_t)scale));
  }
  return (__m128)wasm_f32x4_make(*lane[0], *lane[1], *lane[2], *lane[3]);
}

static __inline__ __m256
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i32gather_ps(const float* base_addr, __m256i __vindex, const int scale) {
  __m256_internal ret;
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  ret.v0 = _mm_i32gather_ps(base_addr, vindex.v0, scale);
  ret.v1 = _mm_i32gather_ps(base_addr, vindex.v1, scale);
  return __m256_from_internal(ret);
}

static __inline__ __m128
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i64gather_ps(const float* base_addr, __m128i vindex, const int scale) {
  float* lane[2];
  for (size_t i = 0; i < 2; i++) {
    lane[i] = (float*)((uint8_t*)base_addr +
                       ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
  }
  return (__m128)wasm_f32x4_make(*lane[0], *lane[1], 0, 0);
}

static __inline__ __m128
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i64gather_ps(const float* base_addr, __m256i __vindex, const int scale) {
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  float* lane[4];
  __m128i current_vindex;
  for (size_t i = 0; i < 4; i++) {
    current_vindex = i < 2 ? vindex.v0 : vindex.v1;
    lane[i] = (float*)((uint8_t*)base_addr + ((__i64x2)current_vindex)[i & 1] *
                                               (uint64_t)((uint32_t)scale));
  }
  return (__m128)wasm_f32x4_make(*lane[0], *lane[1], *lane[2], *lane[3]);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i32gather_epi32(const int* base_addr, __m128i vindex, const int scale) {
  int32_t* lane[4];
  for (size_t i = 0; i < 4; i++) {
    lane[i] = (int32_t*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                                 (uint64_t)((uint32_t)scale));
  }
  return (__m128i)wasm_i32x4_make(*lane[0], *lane[1], *lane[2], *lane[3]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i32gather_epi32(const int* base_addr,
                         __m256i __vindex,
                         const int scale) {
  __m256i_internal ret;
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  ret.v0 = _mm_i32gather_epi32(base_addr, vindex.v0, scale);
  ret.v1 = _mm_i32gather_epi32(base_addr, vindex.v1, scale);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i64gather_epi32(const int* base_addr, __m128i vindex, const int scale) {
  int32_t* lane[2];
  for (size_t i = 0; i < 2; i++) {
    lane[i] = (int32_t*)((uint8_t*)base_addr +
                         ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
  }
  return (__m128i)wasm_i32x4_make(*lane[0], *lane[1], 0, 0);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i64gather_epi32(const int* base_addr,
                         __m256i __vindex,
                         const int scale) {
  __m256i_internal vindex = __m256i_to_internal(__vindex);
  int32_t* lane[4];
  __m128i current_vindex;
  for (size_t i = 0; i < 4; i++) {
    current_vindex = i < 2 ? vindex.v0 : vindex.v1;
    lane[i] =
      (int32_t*)((uint8_t*)base_addr + ((__i64x2)current_vindex)[i & 1] *
                                         (uint64_t)((uint32_t)scale));
  }
  return (__m128i)wasm_i32x4_make(*lane[0], *lane[1], *lane[2], *lane[3]);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i32gather_epi64(const long long* base_addr,
                      __m128i vindex,
                      const int scale) {
  int64_t* lane[2];
  for (size_t i = 0; i < 2; i++) {
    lane[i] = (int64_t*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                                 (uint64_t)((uint32_t)scale));
  }
  return (__m128i)wasm_i64x2_make(*lane[0], *lane[1]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i32gather_epi64(const long long* base_addr,
                         __m128i vindex,
                         const int scale) {

  __m256i_internal ret;
  int64_t* lane[4];
  for (size_t i = 0; i < 4; i++) {
    lane[i] = (int64_t*)((uint8_t*)base_addr + (int64_t)(((__i32x4)vindex)[i]) *
                                                 (uint64_t)((uint32_t)scale));
  }
  ret.v0 = (__m128i)wasm_i64x2_make(*lane[0], *lane[1]);
  ret.v1 = (__m128i)wasm_i64x2_make(*lane[2], *lane[3]);
  return __m256i_from_internal(ret);
}

static __inline__ __m128i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm_i64gather_epi64(const long long* base_addr,
                      __m128i vindex,
                      const int scale) {
  int64_t* lane[2];
  for (size_t i = 0; i < 2; i++) {
    lane[i] = (int64_t*)((uint8_t*)base_addr +
                         ((__i64x2)vindex)[i] * (uint64_t)((uint32_t)scale));
  }
  return (__m128i)wasm_i64x2_make(*lane[0], *lane[1]);
}

static __inline__ __m256i
  __attribute__((__always_inline__, __nodebug__, DIAGNOSE_SLOW))
  _mm256_i64gather_epi64(const long long* base_addr,
                         __m256i __vindex,
                         const int scale) {
  __m256i_internal ret, vindex;
  vindex = __m256i_to_internal(__vindex);
  ret.v0 = _mm_i64gather_epi64(base_addr, vindex.v0, scale);
  ret.v1 = _mm_i64gather_epi64(base_addr, vindex.v1, scale);
  return __m256i_from_internal(ret);
}

#endif /* __emscripten_avx2intrin_h__ */
`,"wasm_simd128.h":`/*===---- wasm_simd128.h - WebAssembly portable SIMD intrinsics ------------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __WASM_SIMD128_H
#define __WASM_SIMD128_H

#include <stdbool.h>
#include <stdint.h>

// User-facing type
typedef int32_t v128_t __attribute__((__vector_size__(16), __aligned__(16)));

// Internal types determined by clang builtin definitions
typedef int32_t __v128_u __attribute__((__vector_size__(16), __aligned__(1)));
typedef signed char __i8x16
    __attribute__((__vector_size__(16), __aligned__(16)));
typedef unsigned char __u8x16
    __attribute__((__vector_size__(16), __aligned__(16)));
typedef short __i16x8 __attribute__((__vector_size__(16), __aligned__(16)));
typedef unsigned short __u16x8
    __attribute__((__vector_size__(16), __aligned__(16)));
typedef int __i32x4 __attribute__((__vector_size__(16), __aligned__(16)));
typedef unsigned int __u32x4
    __attribute__((__vector_size__(16), __aligned__(16)));
typedef long long __i64x2 __attribute__((__vector_size__(16), __aligned__(16)));
typedef unsigned long long __u64x2
    __attribute__((__vector_size__(16), __aligned__(16)));
typedef float __f32x4 __attribute__((__vector_size__(16), __aligned__(16)));
typedef double __f64x2 __attribute__((__vector_size__(16), __aligned__(16)));
typedef __fp16 __f16x8 __attribute__((__vector_size__(16), __aligned__(16)));

typedef signed char __i8x8 __attribute__((__vector_size__(8), __aligned__(8)));
typedef unsigned char __u8x8
    __attribute__((__vector_size__(8), __aligned__(8)));
typedef short __i16x4 __attribute__((__vector_size__(8), __aligned__(8)));
typedef unsigned short __u16x4
    __attribute__((__vector_size__(8), __aligned__(8)));
typedef int __i32x2 __attribute__((__vector_size__(8), __aligned__(8)));
typedef unsigned int __u32x2
    __attribute__((__vector_size__(8), __aligned__(8)));
typedef float __f32x2 __attribute__((__vector_size__(8), __aligned__(8)));

#define __DEFAULT_FN_ATTRS                                                     \\
  __attribute__((__always_inline__, __nodebug__, __target__("simd128"),        \\
                 __min_vector_width__(128)))

#define __REQUIRE_CONSTANT(c)                                                  \\
  __attribute__((__diagnose_if__(!__builtin_constant_p(c),                     \\
                                 #c " must be constant", "error")))

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_load(const void *__mem) {
  // UB-free unaligned access copied from xmmintrin.h
  struct __wasm_v128_load_struct {
    __v128_u __v;
  } __attribute__((__packed__, __may_alias__));
  return ((const struct __wasm_v128_load_struct *)__mem)->__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_v128_load8_splat(const void *__mem) {
  struct __wasm_v128_load8_splat_struct {
    uint8_t __v;
  } __attribute__((__packed__, __may_alias__));
  uint8_t __v = ((const struct __wasm_v128_load8_splat_struct *)__mem)->__v;
  return (v128_t)(__u8x16){__v, __v, __v, __v, __v, __v, __v, __v,
                           __v, __v, __v, __v, __v, __v, __v, __v};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_v128_load16_splat(const void *__mem) {
  struct __wasm_v128_load16_splat_struct {
    uint16_t __v;
  } __attribute__((__packed__, __may_alias__));
  uint16_t __v = ((const struct __wasm_v128_load16_splat_struct *)__mem)->__v;
  return (v128_t)(__u16x8){__v, __v, __v, __v, __v, __v, __v, __v};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_v128_load32_splat(const void *__mem) {
  struct __wasm_v128_load32_splat_struct {
    uint32_t __v;
  } __attribute__((__packed__, __may_alias__));
  uint32_t __v = ((const struct __wasm_v128_load32_splat_struct *)__mem)->__v;
  return (v128_t)(__u32x4){__v, __v, __v, __v};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_v128_load64_splat(const void *__mem) {
  struct __wasm_v128_load64_splat_struct {
    uint64_t __v;
  } __attribute__((__packed__, __may_alias__));
  uint64_t __v = ((const struct __wasm_v128_load64_splat_struct *)__mem)->__v;
  return (v128_t)(__u64x2){__v, __v};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_load8x8(const void *__mem) {
  struct __wasm_i16x8_load8x8_struct {
    __i8x8 __v;
  } __attribute__((__packed__, __may_alias__));
  __i8x8 __v = ((const struct __wasm_i16x8_load8x8_struct *)__mem)->__v;
  return (v128_t) __builtin_convertvector(__v, __i16x8);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_load8x8(const void *__mem) {
  struct __wasm_u16x8_load8x8_struct {
    __u8x8 __v;
  } __attribute__((__packed__, __may_alias__));
  __u8x8 __v = ((const struct __wasm_u16x8_load8x8_struct *)__mem)->__v;
  return (v128_t) __builtin_convertvector(__v, __u16x8);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_load16x4(const void *__mem) {
  struct __wasm_i32x4_load16x4_struct {
    __i16x4 __v;
  } __attribute__((__packed__, __may_alias__));
  __i16x4 __v = ((const struct __wasm_i32x4_load16x4_struct *)__mem)->__v;
  return (v128_t) __builtin_convertvector(__v, __i32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_load16x4(const void *__mem) {
  struct __wasm_u32x4_load16x4_struct {
    __u16x4 __v;
  } __attribute__((__packed__, __may_alias__));
  __u16x4 __v = ((const struct __wasm_u32x4_load16x4_struct *)__mem)->__v;
  return (v128_t) __builtin_convertvector(__v, __u32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i64x2_load32x2(const void *__mem) {
  struct __wasm_i64x2_load32x2_struct {
    __i32x2 __v;
  } __attribute__((__packed__, __may_alias__));
  __i32x2 __v = ((const struct __wasm_i64x2_load32x2_struct *)__mem)->__v;
  return (v128_t) __builtin_convertvector(__v, __i64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u64x2_load32x2(const void *__mem) {
  struct __wasm_u64x2_load32x2_struct {
    __u32x2 __v;
  } __attribute__((__packed__, __may_alias__));
  __u32x2 __v = ((const struct __wasm_u64x2_load32x2_struct *)__mem)->__v;
  return (v128_t) __builtin_convertvector(__v, __u64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_v128_load32_zero(const void *__mem) {
  struct __wasm_v128_load32_zero_struct {
    int32_t __v;
  } __attribute__((__packed__, __may_alias__));
  int32_t __v = ((const struct __wasm_v128_load32_zero_struct *)__mem)->__v;
  return (v128_t)(__i32x4){__v, 0, 0, 0};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_v128_load64_zero(const void *__mem) {
  struct __wasm_v128_load64_zero_struct {
    int64_t __v;
  } __attribute__((__packed__, __may_alias__));
  int64_t __v = ((const struct __wasm_v128_load64_zero_struct *)__mem)->__v;
  return (v128_t)(__i64x2){__v, 0};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_load8_lane(
    const void *__mem, v128_t __vec, int __i) __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_load8_lane_struct {
    int8_t __v;
  } __attribute__((__packed__, __may_alias__));
  int8_t __v = ((const struct __wasm_v128_load8_lane_struct *)__mem)->__v;
  __i8x16 __ret = (__i8x16)__vec;
  __ret[__i] = __v;
  return (v128_t)__ret;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_load16_lane(
    const void *__mem, v128_t __vec, int __i) __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_load16_lane_struct {
    int16_t __v;
  } __attribute__((__packed__, __may_alias__));
  int16_t __v = ((const struct __wasm_v128_load16_lane_struct *)__mem)->__v;
  __i16x8 __ret = (__i16x8)__vec;
  __ret[__i] = __v;
  return (v128_t)__ret;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_load32_lane(
    const void *__mem, v128_t __vec, int __i) __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_load32_lane_struct {
    int32_t __v;
  } __attribute__((__packed__, __may_alias__));
  int32_t __v = ((const struct __wasm_v128_load32_lane_struct *)__mem)->__v;
  __i32x4 __ret = (__i32x4)__vec;
  __ret[__i] = __v;
  return (v128_t)__ret;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_load64_lane(
    const void *__mem, v128_t __vec, int __i) __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_load64_lane_struct {
    int64_t __v;
  } __attribute__((__packed__, __may_alias__));
  int64_t __v = ((const struct __wasm_v128_load64_lane_struct *)__mem)->__v;
  __i64x2 __ret = (__i64x2)__vec;
  __ret[__i] = __v;
  return (v128_t)__ret;
}

static __inline__ void __DEFAULT_FN_ATTRS wasm_v128_store(void *__mem,
                                                          v128_t __a) {
  // UB-free unaligned access copied from xmmintrin.h
  struct __wasm_v128_store_struct {
    __v128_u __v;
  } __attribute__((__packed__, __may_alias__));
  ((struct __wasm_v128_store_struct *)__mem)->__v = __a;
}

static __inline__ void __DEFAULT_FN_ATTRS wasm_v128_store8_lane(void *__mem,
                                                                v128_t __vec,
                                                                int __i)
    __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_store8_lane_struct {
    int8_t __v;
  } __attribute__((__packed__, __may_alias__));
  ((struct __wasm_v128_store8_lane_struct *)__mem)->__v = ((__i8x16)__vec)[__i];
}

static __inline__ void __DEFAULT_FN_ATTRS wasm_v128_store16_lane(void *__mem,
                                                                 v128_t __vec,
                                                                 int __i)
    __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_store16_lane_struct {
    int16_t __v;
  } __attribute__((__packed__, __may_alias__));
  ((struct __wasm_v128_store16_lane_struct *)__mem)->__v =
      ((__i16x8)__vec)[__i];
}

static __inline__ void __DEFAULT_FN_ATTRS wasm_v128_store32_lane(void *__mem,
                                                                 v128_t __vec,
                                                                 int __i)
    __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_store32_lane_struct {
    int32_t __v;
  } __attribute__((__packed__, __may_alias__));
  ((struct __wasm_v128_store32_lane_struct *)__mem)->__v =
      ((__i32x4)__vec)[__i];
}

static __inline__ void __DEFAULT_FN_ATTRS wasm_v128_store64_lane(void *__mem,
                                                                 v128_t __vec,
                                                                 int __i)
    __REQUIRE_CONSTANT(__i) {
  struct __wasm_v128_store64_lane_struct {
    int64_t __v;
  } __attribute__((__packed__, __may_alias__));
  ((struct __wasm_v128_store64_lane_struct *)__mem)->__v =
      ((__i64x2)__vec)[__i];
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i8x16_make(int8_t __c0, int8_t __c1, int8_t __c2, int8_t __c3, int8_t __c4,
                int8_t __c5, int8_t __c6, int8_t __c7, int8_t __c8, int8_t __c9,
                int8_t __c10, int8_t __c11, int8_t __c12, int8_t __c13,
                int8_t __c14, int8_t __c15) {
  return (v128_t)(__i8x16){__c0,  __c1,  __c2,  __c3, __c4,  __c5,
                           __c6,  __c7,  __c8,  __c9, __c10, __c11,
                           __c12, __c13, __c14, __c15};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u8x16_make(uint8_t __c0, uint8_t __c1, uint8_t __c2, uint8_t __c3,
                uint8_t __c4, uint8_t __c5, uint8_t __c6, uint8_t __c7,
                uint8_t __c8, uint8_t __c9, uint8_t __c10, uint8_t __c11,
                uint8_t __c12, uint8_t __c13, uint8_t __c14, uint8_t __c15) {
  return (v128_t)(__u8x16){__c0,  __c1,  __c2,  __c3, __c4,  __c5,
                           __c6,  __c7,  __c8,  __c9, __c10, __c11,
                           __c12, __c13, __c14, __c15};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_make(int16_t __c0, int16_t __c1, int16_t __c2, int16_t __c3,
                int16_t __c4, int16_t __c5, int16_t __c6, int16_t __c7) {
  return (v128_t)(__i16x8){__c0, __c1, __c2, __c3, __c4, __c5, __c6, __c7};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_make(uint16_t __c0, uint16_t __c1, uint16_t __c2, uint16_t __c3,
                uint16_t __c4, uint16_t __c5, uint16_t __c6, uint16_t __c7) {
  return (v128_t)(__u16x8){__c0, __c1, __c2, __c3, __c4, __c5, __c6, __c7};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_make(int32_t __c0,
                                                            int32_t __c1,
                                                            int32_t __c2,
                                                            int32_t __c3) {
  return (v128_t)(__i32x4){__c0, __c1, __c2, __c3};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_make(uint32_t __c0,
                                                            uint32_t __c1,
                                                            uint32_t __c2,
                                                            uint32_t __c3) {
  return (v128_t)(__u32x4){__c0, __c1, __c2, __c3};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_make(int64_t __c0,
                                                            int64_t __c1) {
  return (v128_t)(__i64x2){__c0, __c1};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u64x2_make(uint64_t __c0,
                                                            uint64_t __c1) {
  return (v128_t)(__u64x2){__c0, __c1};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_make(float __c0,
                                                            float __c1,
                                                            float __c2,
                                                            float __c3) {
  return (v128_t)(__f32x4){__c0, __c1, __c2, __c3};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_make(double __c0,
                                                            double __c1) {
  return (v128_t)(__f64x2){__c0, __c1};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i8x16_const(int8_t __c0, int8_t __c1, int8_t __c2, int8_t __c3,
                 int8_t __c4, int8_t __c5, int8_t __c6, int8_t __c7,
                 int8_t __c8, int8_t __c9, int8_t __c10, int8_t __c11,
                 int8_t __c12, int8_t __c13, int8_t __c14, int8_t __c15)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) __REQUIRE_CONSTANT(__c2)
        __REQUIRE_CONSTANT(__c3) __REQUIRE_CONSTANT(__c4)
            __REQUIRE_CONSTANT(__c5) __REQUIRE_CONSTANT(__c6)
                __REQUIRE_CONSTANT(__c7) __REQUIRE_CONSTANT(__c8)
                    __REQUIRE_CONSTANT(__c9) __REQUIRE_CONSTANT(__c10)
                        __REQUIRE_CONSTANT(__c11) __REQUIRE_CONSTANT(__c12)
                            __REQUIRE_CONSTANT(__c13) __REQUIRE_CONSTANT(__c14)
                                __REQUIRE_CONSTANT(__c15) {
  return (v128_t)(__i8x16){__c0,  __c1,  __c2,  __c3, __c4,  __c5,
                           __c6,  __c7,  __c8,  __c9, __c10, __c11,
                           __c12, __c13, __c14, __c15};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u8x16_const(uint8_t __c0, uint8_t __c1, uint8_t __c2, uint8_t __c3,
                 uint8_t __c4, uint8_t __c5, uint8_t __c6, uint8_t __c7,
                 uint8_t __c8, uint8_t __c9, uint8_t __c10, uint8_t __c11,
                 uint8_t __c12, uint8_t __c13, uint8_t __c14, uint8_t __c15)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) __REQUIRE_CONSTANT(__c2)
        __REQUIRE_CONSTANT(__c3) __REQUIRE_CONSTANT(__c4)
            __REQUIRE_CONSTANT(__c5) __REQUIRE_CONSTANT(__c6)
                __REQUIRE_CONSTANT(__c7) __REQUIRE_CONSTANT(__c8)
                    __REQUIRE_CONSTANT(__c9) __REQUIRE_CONSTANT(__c10)
                        __REQUIRE_CONSTANT(__c11) __REQUIRE_CONSTANT(__c12)
                            __REQUIRE_CONSTANT(__c13) __REQUIRE_CONSTANT(__c14)
                                __REQUIRE_CONSTANT(__c15) {
  return (v128_t)(__u8x16){__c0,  __c1,  __c2,  __c3, __c4,  __c5,
                           __c6,  __c7,  __c8,  __c9, __c10, __c11,
                           __c12, __c13, __c14, __c15};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_const(int16_t __c0, int16_t __c1, int16_t __c2, int16_t __c3,
                 int16_t __c4, int16_t __c5, int16_t __c6, int16_t __c7)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) __REQUIRE_CONSTANT(__c2)
        __REQUIRE_CONSTANT(__c3) __REQUIRE_CONSTANT(__c4)
            __REQUIRE_CONSTANT(__c5) __REQUIRE_CONSTANT(__c6)
                __REQUIRE_CONSTANT(__c7) {
  return (v128_t)(__i16x8){__c0, __c1, __c2, __c3, __c4, __c5, __c6, __c7};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_const(uint16_t __c0, uint16_t __c1, uint16_t __c2, uint16_t __c3,
                 uint16_t __c4, uint16_t __c5, uint16_t __c6, uint16_t __c7)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) __REQUIRE_CONSTANT(__c2)
        __REQUIRE_CONSTANT(__c3) __REQUIRE_CONSTANT(__c4)
            __REQUIRE_CONSTANT(__c5) __REQUIRE_CONSTANT(__c6)
                __REQUIRE_CONSTANT(__c7) {
  return (v128_t)(__u16x8){__c0, __c1, __c2, __c3, __c4, __c5, __c6, __c7};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_const(int32_t __c0, int32_t __c1, int32_t __c2, int32_t __c3)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) __REQUIRE_CONSTANT(__c2)
        __REQUIRE_CONSTANT(__c3) {
  return (v128_t)(__i32x4){__c0, __c1, __c2, __c3};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_const(uint32_t __c0, uint32_t __c1, uint32_t __c2, uint32_t __c3)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) __REQUIRE_CONSTANT(__c2)
        __REQUIRE_CONSTANT(__c3) {
  return (v128_t)(__u32x4){__c0, __c1, __c2, __c3};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_const(int64_t __c0,
                                                             int64_t __c1)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) {
  return (v128_t)(__i64x2){__c0, __c1};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u64x2_const(uint64_t __c0,
                                                             uint64_t __c1)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) {
  return (v128_t)(__u64x2){__c0, __c1};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_f32x4_const(float __c0, float __c1, float __c2, float __c3)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) __REQUIRE_CONSTANT(__c2)
        __REQUIRE_CONSTANT(__c3) {
  return (v128_t)(__f32x4){__c0, __c1, __c2, __c3};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_const(double __c0,
                                                             double __c1)
    __REQUIRE_CONSTANT(__c0) __REQUIRE_CONSTANT(__c1) {
  return (v128_t)(__f64x2){__c0, __c1};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_const_splat(int8_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__i8x16){__c, __c, __c, __c, __c, __c, __c, __c,
                           __c, __c, __c, __c, __c, __c, __c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_const_splat(uint8_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__u8x16){__c, __c, __c, __c, __c, __c, __c, __c,
                           __c, __c, __c, __c, __c, __c, __c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_const_splat(int16_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__i16x8){__c, __c, __c, __c, __c, __c, __c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_const_splat(uint16_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__u16x8){__c, __c, __c, __c, __c, __c, __c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_const_splat(int32_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__i32x4){__c, __c, __c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_const_splat(uint32_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__u32x4){__c, __c, __c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_const_splat(int64_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__i64x2){__c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u64x2_const_splat(uint64_t __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__u64x2){__c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_const_splat(float __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__f32x4){__c, __c, __c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_const_splat(double __c)
    __REQUIRE_CONSTANT(__c) {
  return (v128_t)(__f64x2){__c, __c};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_splat(int8_t __a) {
  return (v128_t)(__i8x16){__a, __a, __a, __a, __a, __a, __a, __a,
                           __a, __a, __a, __a, __a, __a, __a, __a};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_splat(uint8_t __a) {
  return (v128_t)(__u8x16){__a, __a, __a, __a, __a, __a, __a, __a,
                           __a, __a, __a, __a, __a, __a, __a, __a};
}

static __inline__ int8_t __DEFAULT_FN_ATTRS wasm_i8x16_extract_lane(v128_t __a,
                                                                    int __i)
    __REQUIRE_CONSTANT(__i) {
  return ((__i8x16)__a)[__i];
}

static __inline__ uint8_t __DEFAULT_FN_ATTRS wasm_u8x16_extract_lane(v128_t __a,
                                                                     int __i)
    __REQUIRE_CONSTANT(__i) {
  return ((__u8x16)__a)[__i];
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_replace_lane(v128_t __a,
                                                                    int __i,
                                                                    int8_t __b)
    __REQUIRE_CONSTANT(__i) {
  __i8x16 __v = (__i8x16)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_replace_lane(v128_t __a,
                                                                    int __i,
                                                                    uint8_t __b)
    __REQUIRE_CONSTANT(__i) {
  __u8x16 __v = (__u8x16)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_splat(int16_t __a) {
  return (v128_t)(__i16x8){__a, __a, __a, __a, __a, __a, __a, __a};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_splat(uint16_t __a) {
  return (v128_t)(__u16x8){__a, __a, __a, __a, __a, __a, __a, __a};
}

static __inline__ int16_t __DEFAULT_FN_ATTRS wasm_i16x8_extract_lane(v128_t __a,
                                                                     int __i)
    __REQUIRE_CONSTANT(__i) {
  return ((__i16x8)__a)[__i];
}

static __inline__ uint16_t __DEFAULT_FN_ATTRS
wasm_u16x8_extract_lane(v128_t __a, int __i) __REQUIRE_CONSTANT(__i) {
  return ((__u16x8)__a)[__i];
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_replace_lane(v128_t __a,
                                                                    int __i,
                                                                    int16_t __b)
    __REQUIRE_CONSTANT(__i) {
  __i16x8 __v = (__i16x8)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_replace_lane(
    v128_t __a, int __i, uint16_t __b) __REQUIRE_CONSTANT(__i) {
  __u16x8 __v = (__u16x8)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_splat(int32_t __a) {
  return (v128_t)(__i32x4){__a, __a, __a, __a};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_splat(uint32_t __a) {
  return (v128_t)(__u32x4){__a, __a, __a, __a};
}

static __inline__ int32_t __DEFAULT_FN_ATTRS wasm_i32x4_extract_lane(v128_t __a,
                                                                     int __i)
    __REQUIRE_CONSTANT(__i) {
  return ((__i32x4)__a)[__i];
}

static __inline__ uint32_t __DEFAULT_FN_ATTRS
wasm_u32x4_extract_lane(v128_t __a, int __i) __REQUIRE_CONSTANT(__i) {
  return ((__u32x4)__a)[__i];
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_replace_lane(v128_t __a,
                                                                    int __i,
                                                                    int32_t __b)
    __REQUIRE_CONSTANT(__i) {
  __i32x4 __v = (__i32x4)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_replace_lane(
    v128_t __a, int __i, uint32_t __b) __REQUIRE_CONSTANT(__i) {
  __u32x4 __v = (__u32x4)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_splat(int64_t __a) {
  return (v128_t)(__i64x2){__a, __a};
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u64x2_splat(uint64_t __a) {
  return (v128_t)(__u64x2){__a, __a};
}

static __inline__ int64_t __DEFAULT_FN_ATTRS wasm_i64x2_extract_lane(v128_t __a,
                                                                     int __i)
    __REQUIRE_CONSTANT(__i) {
  return ((__i64x2)__a)[__i];
}

static __inline__ uint64_t __DEFAULT_FN_ATTRS
wasm_u64x2_extract_lane(v128_t __a, int __i) __REQUIRE_CONSTANT(__i) {
  return ((__u64x2)__a)[__i];
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_replace_lane(v128_t __a,
                                                                    int __i,
                                                                    int64_t __b)
    __REQUIRE_CONSTANT(__i) {
  __i64x2 __v = (__i64x2)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u64x2_replace_lane(
    v128_t __a, int __i, uint64_t __b) __REQUIRE_CONSTANT(__i) {
  __u64x2 __v = (__u64x2)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_splat(float __a) {
  return (v128_t)(__f32x4){__a, __a, __a, __a};
}

static __inline__ float __DEFAULT_FN_ATTRS wasm_f32x4_extract_lane(v128_t __a,
                                                                   int __i)
    __REQUIRE_CONSTANT(__i) {
  return ((__f32x4)__a)[__i];
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_replace_lane(v128_t __a,
                                                                    int __i,
                                                                    float __b)
    __REQUIRE_CONSTANT(__i) {
  __f32x4 __v = (__f32x4)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_splat(double __a) {
  return (v128_t)(__f64x2){__a, __a};
}

static __inline__ double __DEFAULT_FN_ATTRS wasm_f64x2_extract_lane(v128_t __a,
                                                                    int __i)
    __REQUIRE_CONSTANT(__i) {
  return ((__f64x2)__a)[__i];
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_replace_lane(v128_t __a,
                                                                    int __i,
                                                                    double __b)
    __REQUIRE_CONSTANT(__i) {
  __f64x2 __v = (__f64x2)__a;
  __v[__i] = __b;
  return (v128_t)__v;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_eq(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i8x16)__a == (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_ne(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i8x16)__a != (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i8x16)__a < (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u8x16)__a < (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i8x16)__a > (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u8x16)__a > (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i8x16)__a <= (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u8x16)__a <= (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i8x16)__a >= (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u8x16)__a >= (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_eq(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i16x8)__a == (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_ne(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u16x8)__a != (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i16x8)__a < (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u16x8)__a < (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i16x8)__a > (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u16x8)__a > (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i16x8)__a <= (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u16x8)__a <= (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i16x8)__a >= (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u16x8)__a >= (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_eq(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i32x4)__a == (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_ne(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i32x4)__a != (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i32x4)__a < (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u32x4)__a < (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i32x4)__a > (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u32x4)__a > (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i32x4)__a <= (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u32x4)__a <= (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i32x4)__a >= (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__u32x4)__a >= (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_eq(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i64x2)__a == (__i64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_ne(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i64x2)__a != (__i64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i64x2)__a < (__i64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i64x2)__a > (__i64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i64x2)__a <= (__i64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__i64x2)__a >= (__i64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_eq(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f32x4)__a == (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_ne(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f32x4)__a != (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f32x4)__a < (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f32x4)__a > (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f32x4)__a <= (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f32x4)__a >= (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_eq(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f64x2)__a == (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_ne(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f64x2)__a != (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_lt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f64x2)__a < (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_gt(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f64x2)__a > (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_le(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f64x2)__a <= (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_ge(v128_t __a,
                                                          v128_t __b) {
  return (v128_t)((__f64x2)__a >= (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_not(v128_t __a) {
  return ~__a;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_and(v128_t __a,
                                                          v128_t __b) {
  return __a & __b;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_or(v128_t __a,
                                                         v128_t __b) {
  return __a | __b;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_xor(v128_t __a,
                                                          v128_t __b) {
  return __a ^ __b;
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_andnot(v128_t __a,
                                                             v128_t __b) {
  return __a & ~__b;
}

static __inline__ bool __DEFAULT_FN_ATTRS wasm_v128_any_true(v128_t __a) {
  return __builtin_wasm_any_true_v128((__i8x16)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_v128_bitselect(v128_t __a,
                                                                v128_t __b,
                                                                v128_t __mask) {
  return (v128_t)__builtin_wasm_bitselect((__i32x4)__a, (__i32x4)__b,
                                          (__i32x4)__mask);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_abs(v128_t __a) {
  return (v128_t)__builtin_wasm_abs_i8x16((__i8x16)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_neg(v128_t __a) {
  return (v128_t)(-(__u8x16)__a);
}

static __inline__ bool __DEFAULT_FN_ATTRS wasm_i8x16_all_true(v128_t __a) {
  return __builtin_wasm_all_true_i8x16((__i8x16)__a);
}

static __inline__ uint32_t __DEFAULT_FN_ATTRS wasm_i8x16_bitmask(v128_t __a) {
  return __builtin_wasm_bitmask_i8x16((__i8x16)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_popcnt(v128_t __a) {
  return (v128_t)__builtin_elementwise_popcount((__i8x16)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_shl(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i8x16)__a << (__b & 0x7));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i8x16)__a >> (__b & 0x7));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__u8x16)__a >> (__b & 0x7));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_add(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u8x16)__a + (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_add_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_add_sat((__i8x16)__a, (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_add_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_add_sat((__u8x16)__a, (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_sub(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u8x16)__a - (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_sub_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_sub_sat((__i8x16)__a, (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_sub_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_sub_sat((__u8x16)__a, (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_min((__i8x16)__a, (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_min((__u8x16)__a, (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_max((__i8x16)__a, (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_max((__u8x16)__a, (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u8x16_avgr(v128_t __a,
                                                            v128_t __b) {
  return (v128_t)__builtin_wasm_avgr_u_i8x16((__u8x16)__a, (__u8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_abs(v128_t __a) {
  return (v128_t)__builtin_wasm_abs_i16x8((__i16x8)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_neg(v128_t __a) {
  return (v128_t)(-(__u16x8)__a);
}

static __inline__ bool __DEFAULT_FN_ATTRS wasm_i16x8_all_true(v128_t __a) {
  return __builtin_wasm_all_true_i16x8((__i16x8)__a);
}

static __inline__ uint32_t __DEFAULT_FN_ATTRS wasm_i16x8_bitmask(v128_t __a) {
  return __builtin_wasm_bitmask_i16x8((__i16x8)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_shl(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i16x8)__a << (__b & 0xF));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i16x8)__a >> (__b & 0xF));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__u16x8)__a >> (__b & 0xF));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_add(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u16x8)__a + (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_add_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_add_sat((__i16x8)__a, (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_add_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_add_sat((__u16x8)__a, (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_sub(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__i16x8)__a - (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_sub_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_sub_sat((__i16x8)__a, (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_sub_sat(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_elementwise_sub_sat((__u16x8)__a, (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_mul(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u16x8)__a * (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_min((__i16x8)__a, (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_min((__u16x8)__a, (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_max((__i16x8)__a, (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_max((__u16x8)__a, (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u16x8_avgr(v128_t __a,
                                                            v128_t __b) {
  return (v128_t)__builtin_wasm_avgr_u_i16x8((__u16x8)__a, (__u16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_abs(v128_t __a) {
  return (v128_t)__builtin_wasm_abs_i32x4((__i32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_neg(v128_t __a) {
  return (v128_t)(-(__u32x4)__a);
}

static __inline__ bool __DEFAULT_FN_ATTRS wasm_i32x4_all_true(v128_t __a) {
  return __builtin_wasm_all_true_i32x4((__i32x4)__a);
}

static __inline__ uint32_t __DEFAULT_FN_ATTRS wasm_i32x4_bitmask(v128_t __a) {
  return __builtin_wasm_bitmask_i32x4((__i32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_shl(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i32x4)__a << (__b & 0x1F));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i32x4)__a >> (__b & 0x1F));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__u32x4)__a >> (__b & 0x1F));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_add(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u32x4)__a + (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_sub(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u32x4)__a - (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_mul(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u32x4)__a * (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_min((__i32x4)__a, (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_min((__u32x4)__a, (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_max((__i32x4)__a, (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u32x4_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_elementwise_max((__u32x4)__a, (__u32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i32x4_dot_i16x8(v128_t __a,
                                                                 v128_t __b) {
  return (v128_t)__builtin_wasm_dot_s_i32x4_i16x8((__i16x8)__a, (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_abs(v128_t __a) {
  return (v128_t)__builtin_wasm_abs_i64x2((__i64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_neg(v128_t __a) {
  return (v128_t)(-(__u64x2)__a);
}

static __inline__ bool __DEFAULT_FN_ATTRS wasm_i64x2_all_true(v128_t __a) {
  return __builtin_wasm_all_true_i64x2((__i64x2)__a);
}

static __inline__ uint32_t __DEFAULT_FN_ATTRS wasm_i64x2_bitmask(v128_t __a) {
  return __builtin_wasm_bitmask_i64x2((__i64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_shl(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i64x2)__a << ((int64_t)__b & 0x3F));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__i64x2)__a >> ((int64_t)__b & 0x3F));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_u64x2_shr(v128_t __a,
                                                           uint32_t __b) {
  return (v128_t)((__u64x2)__a >> ((int64_t)__b & 0x3F));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_add(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u64x2)__a + (__u64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_sub(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u64x2)__a - (__u64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i64x2_mul(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__u64x2)__a * (__u64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_abs(v128_t __a) {
  return (v128_t)__builtin_wasm_abs_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_neg(v128_t __a) {
  return (v128_t)(-(__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_sqrt(v128_t __a) {
  return (v128_t)__builtin_wasm_sqrt_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_ceil(v128_t __a) {
  return (v128_t)__builtin_wasm_ceil_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_floor(v128_t __a) {
  return (v128_t)__builtin_wasm_floor_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_trunc(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_nearest(v128_t __a) {
  return (v128_t)__builtin_wasm_nearest_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_add(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f32x4)__a + (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_sub(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f32x4)__a - (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_mul(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f32x4)__a * (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_div(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f32x4)__a / (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_wasm_min_f32x4((__f32x4)__a, (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_wasm_max_f32x4((__f32x4)__a, (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_pmin(v128_t __a,
                                                            v128_t __b) {
  return (v128_t)__builtin_wasm_pmin_f32x4((__f32x4)__a, (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f32x4_pmax(v128_t __a,
                                                            v128_t __b) {
  return (v128_t)__builtin_wasm_pmax_f32x4((__f32x4)__a, (__f32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_abs(v128_t __a) {
  return (v128_t)__builtin_wasm_abs_f64x2((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_neg(v128_t __a) {
  return (v128_t)(-(__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_sqrt(v128_t __a) {
  return (v128_t)__builtin_wasm_sqrt_f64x2((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_ceil(v128_t __a) {
  return (v128_t)__builtin_wasm_ceil_f64x2((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_floor(v128_t __a) {
  return (v128_t)__builtin_wasm_floor_f64x2((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_trunc(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_f64x2((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_nearest(v128_t __a) {
  return (v128_t)__builtin_wasm_nearest_f64x2((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_add(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f64x2)__a + (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_sub(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f64x2)__a - (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_mul(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f64x2)__a * (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_div(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)((__f64x2)__a / (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_min(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_wasm_min_f64x2((__f64x2)__a, (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_max(v128_t __a,
                                                           v128_t __b) {
  return (v128_t)__builtin_wasm_max_f64x2((__f64x2)__a, (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_pmin(v128_t __a,
                                                            v128_t __b) {
  return (v128_t)__builtin_wasm_pmin_f64x2((__f64x2)__a, (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_f64x2_pmax(v128_t __a,
                                                            v128_t __b) {
  return (v128_t)__builtin_wasm_pmax_f64x2((__f64x2)__a, (__f64x2)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_trunc_sat_f32x4(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_saturate_s_i32x4_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_trunc_sat_f32x4(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_saturate_u_i32x4_f32x4((__f32x4)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_f32x4_convert_i32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector((__i32x4)__a, __f32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_f32x4_convert_u32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector((__u32x4)__a, __f32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_f64x2_convert_low_i32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector((__i32x2){__a[0], __a[1]}, __f64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_f64x2_convert_low_u32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector((__u32x2){__a[0], __a[1]}, __f64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_trunc_sat_f64x2_zero(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_sat_s_zero_f64x2_i32x4((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_trunc_sat_f64x2_zero(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_sat_u_zero_f64x2_i32x4((__f64x2)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_f32x4_demote_f64x2_zero(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      __builtin_shufflevector((__f64x2)__a, (__f64x2){0, 0}, 0, 1, 2, 3),
      __f32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_f64x2_promote_low_f32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__f32x2){((__f32x4)__a)[0], ((__f32x4)__a)[1]}, __f64x2);
}

#define wasm_i8x16_shuffle(__a, __b, __c0, __c1, __c2, __c3, __c4, __c5, __c6, \\
                           __c7, __c8, __c9, __c10, __c11, __c12, __c13,       \\
                           __c14, __c15)                                       \\
  ((v128_t)__builtin_wasm_shuffle_i8x16(                                       \\
      (__i8x16)(__a), (__i8x16)(__b), __c0, __c1, __c2, __c3, __c4, __c5,      \\
      __c6, __c7, __c8, __c9, __c10, __c11, __c12, __c13, __c14, __c15))

#define wasm_i16x8_shuffle(__a, __b, __c0, __c1, __c2, __c3, __c4, __c5, __c6, \\
                           __c7)                                               \\
  ((v128_t)__builtin_wasm_shuffle_i8x16(                                       \\
      (__i8x16)(__a), (__i8x16)(__b), (__c0)*2, (__c0)*2 + 1, (__c1)*2,        \\
      (__c1)*2 + 1, (__c2)*2, (__c2)*2 + 1, (__c3)*2, (__c3)*2 + 1, (__c4)*2,  \\
      (__c4)*2 + 1, (__c5)*2, (__c5)*2 + 1, (__c6)*2, (__c6)*2 + 1, (__c7)*2,  \\
      (__c7)*2 + 1))

#define wasm_i32x4_shuffle(__a, __b, __c0, __c1, __c2, __c3)                   \\
  ((v128_t)__builtin_wasm_shuffle_i8x16(                                       \\
      (__i8x16)(__a), (__i8x16)(__b), (__c0)*4, (__c0)*4 + 1, (__c0)*4 + 2,    \\
      (__c0)*4 + 3, (__c1)*4, (__c1)*4 + 1, (__c1)*4 + 2, (__c1)*4 + 3,        \\
      (__c2)*4, (__c2)*4 + 1, (__c2)*4 + 2, (__c2)*4 + 3, (__c3)*4,            \\
      (__c3)*4 + 1, (__c3)*4 + 2, (__c3)*4 + 3))

#define wasm_i64x2_shuffle(__a, __b, __c0, __c1)                               \\
  ((v128_t)__builtin_wasm_shuffle_i8x16(                                       \\
      (__i8x16)(__a), (__i8x16)(__b), (__c0)*8, (__c0)*8 + 1, (__c0)*8 + 2,    \\
      (__c0)*8 + 3, (__c0)*8 + 4, (__c0)*8 + 5, (__c0)*8 + 6, (__c0)*8 + 7,    \\
      (__c1)*8, (__c1)*8 + 1, (__c1)*8 + 2, (__c1)*8 + 3, (__c1)*8 + 4,        \\
      (__c1)*8 + 5, (__c1)*8 + 6, (__c1)*8 + 7))

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i8x16_swizzle(v128_t __a,
                                                               v128_t __b) {
  return (v128_t)__builtin_wasm_swizzle_i8x16((__i8x16)__a, (__i8x16)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i8x16_narrow_i16x8(v128_t __a, v128_t __b) {
  return (v128_t)__builtin_wasm_narrow_s_i8x16_i16x8((__i16x8)__a,
                                                     (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u8x16_narrow_i16x8(v128_t __a, v128_t __b) {
  return (v128_t)__builtin_wasm_narrow_u_i8x16_i16x8((__i16x8)__a,
                                                     (__i16x8)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_narrow_i32x4(v128_t __a, v128_t __b) {
  return (v128_t)__builtin_wasm_narrow_s_i16x8_i32x4((__i32x4)__a,
                                                     (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_narrow_i32x4(v128_t __a, v128_t __b) {
  return (v128_t)__builtin_wasm_narrow_u_i16x8_i32x4((__i32x4)__a,
                                                     (__i32x4)__b);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_extend_low_i8x16(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__i8x8){((__i8x16)__a)[0], ((__i8x16)__a)[1], ((__i8x16)__a)[2],
               ((__i8x16)__a)[3], ((__i8x16)__a)[4], ((__i8x16)__a)[5],
               ((__i8x16)__a)[6], ((__i8x16)__a)[7]},
      __i16x8);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_extend_high_i8x16(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__i8x8){((__i8x16)__a)[8], ((__i8x16)__a)[9], ((__i8x16)__a)[10],
               ((__i8x16)__a)[11], ((__i8x16)__a)[12], ((__i8x16)__a)[13],
               ((__i8x16)__a)[14], ((__i8x16)__a)[15]},
      __i16x8);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_extend_low_u8x16(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__u8x8){((__u8x16)__a)[0], ((__u8x16)__a)[1], ((__u8x16)__a)[2],
               ((__u8x16)__a)[3], ((__u8x16)__a)[4], ((__u8x16)__a)[5],
               ((__u8x16)__a)[6], ((__u8x16)__a)[7]},
      __u16x8);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_extend_high_u8x16(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__u8x8){((__u8x16)__a)[8], ((__u8x16)__a)[9], ((__u8x16)__a)[10],
               ((__u8x16)__a)[11], ((__u8x16)__a)[12], ((__u8x16)__a)[13],
               ((__u8x16)__a)[14], ((__u8x16)__a)[15]},
      __u16x8);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_extend_low_i16x8(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__i16x4){((__i16x8)__a)[0], ((__i16x8)__a)[1], ((__i16x8)__a)[2],
                ((__i16x8)__a)[3]},
      __i32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_extend_high_i16x8(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__i16x4){((__i16x8)__a)[4], ((__i16x8)__a)[5], ((__i16x8)__a)[6],
                ((__i16x8)__a)[7]},
      __i32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_extend_low_u16x8(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__u16x4){((__u16x8)__a)[0], ((__u16x8)__a)[1], ((__u16x8)__a)[2],
                ((__u16x8)__a)[3]},
      __u32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_extend_high_u16x8(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__u16x4){((__u16x8)__a)[4], ((__u16x8)__a)[5], ((__u16x8)__a)[6],
                ((__u16x8)__a)[7]},
      __u32x4);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i64x2_extend_low_i32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__i32x2){((__i32x4)__a)[0], ((__i32x4)__a)[1]}, __i64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i64x2_extend_high_i32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__i32x2){((__i32x4)__a)[2], ((__i32x4)__a)[3]}, __i64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u64x2_extend_low_u32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__u32x2){((__u32x4)__a)[0], ((__u32x4)__a)[1]}, __u64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u64x2_extend_high_u32x4(v128_t __a) {
  return (v128_t) __builtin_convertvector(
      (__u32x2){((__u32x4)__a)[2], ((__u32x4)__a)[3]}, __u64x2);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_extadd_pairwise_i8x16(v128_t __a) {
  return (v128_t)__builtin_wasm_extadd_pairwise_i8x16_s_i16x8((__i8x16)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_extadd_pairwise_u8x16(v128_t __a) {
  return (v128_t)__builtin_wasm_extadd_pairwise_i8x16_u_i16x8((__u8x16)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_extadd_pairwise_i16x8(v128_t __a) {
  return (v128_t)__builtin_wasm_extadd_pairwise_i16x8_s_i32x4((__i16x8)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_extadd_pairwise_u16x8(v128_t __a) {
  return (v128_t)__builtin_wasm_extadd_pairwise_i16x8_u_i32x4((__u16x8)__a);
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_extmul_low_i8x16(v128_t __a, v128_t __b) {
  return (v128_t)((__i16x8)wasm_i16x8_extend_low_i8x16(__a) *
                  (__i16x8)wasm_i16x8_extend_low_i8x16(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i16x8_extmul_high_i8x16(v128_t __a, v128_t __b) {
  return (v128_t)((__i16x8)wasm_i16x8_extend_high_i8x16(__a) *
                  (__i16x8)wasm_i16x8_extend_high_i8x16(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_extmul_low_u8x16(v128_t __a, v128_t __b) {
  return (v128_t)((__u16x8)wasm_u16x8_extend_low_u8x16(__a) *
                  (__u16x8)wasm_u16x8_extend_low_u8x16(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u16x8_extmul_high_u8x16(v128_t __a, v128_t __b) {
  return (v128_t)((__u16x8)wasm_u16x8_extend_high_u8x16(__a) *
                  (__u16x8)wasm_u16x8_extend_high_u8x16(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_extmul_low_i16x8(v128_t __a, v128_t __b) {
  return (v128_t)((__i32x4)wasm_i32x4_extend_low_i16x8(__a) *
                  (__i32x4)wasm_i32x4_extend_low_i16x8(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i32x4_extmul_high_i16x8(v128_t __a, v128_t __b) {
  return (v128_t)((__i32x4)wasm_i32x4_extend_high_i16x8(__a) *
                  (__i32x4)wasm_i32x4_extend_high_i16x8(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_extmul_low_u16x8(v128_t __a, v128_t __b) {
  return (v128_t)((__u32x4)wasm_u32x4_extend_low_u16x8(__a) *
                  (__u32x4)wasm_u32x4_extend_low_u16x8(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u32x4_extmul_high_u16x8(v128_t __a, v128_t __b) {
  return (v128_t)((__u32x4)wasm_u32x4_extend_high_u16x8(__a) *
                  (__u32x4)wasm_u32x4_extend_high_u16x8(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i64x2_extmul_low_i32x4(v128_t __a, v128_t __b) {
  return (v128_t)((__i64x2)wasm_i64x2_extend_low_i32x4(__a) *
                  (__i64x2)wasm_i64x2_extend_low_i32x4(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_i64x2_extmul_high_i32x4(v128_t __a, v128_t __b) {
  return (v128_t)((__i64x2)wasm_i64x2_extend_high_i32x4(__a) *
                  (__i64x2)wasm_i64x2_extend_high_i32x4(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u64x2_extmul_low_u32x4(v128_t __a, v128_t __b) {
  return (v128_t)((__u64x2)wasm_u64x2_extend_low_u32x4(__a) *
                  (__u64x2)wasm_u64x2_extend_low_u32x4(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS
wasm_u64x2_extmul_high_u32x4(v128_t __a, v128_t __b) {
  return (v128_t)((__u64x2)wasm_u64x2_extend_high_u32x4(__a) *
                  (__u64x2)wasm_u64x2_extend_high_u32x4(__b));
}

static __inline__ v128_t __DEFAULT_FN_ATTRS wasm_i16x8_q15mulr_sat(v128_t __a,
                                                                   v128_t __b) {
  return (v128_t)__builtin_wasm_q15mulr_sat_s_i16x8((__i16x8)__a, (__i16x8)__b);
}

// Old intrinsic names supported to ease transitioning to the standard names. Do
// not use these; they will be removed in the near future.

#define __DEPRECATED_FN_ATTRS(__replacement)                                   \\
  __DEFAULT_FN_ATTRS __attribute__(                                            \\
      (deprecated("use " __replacement " instead", __replacement)))

#define __WASM_STR(X) #X

#ifdef __DEPRECATED
#define __DEPRECATED_WASM_MACRO(__name, __replacement)                         \\
  _Pragma(__WASM_STR(GCC warning(                                              \\
      "'" __name "' is deprecated: use '" __replacement "' instead")))
#else
#define __DEPRECATED_WASM_MACRO(__name, __replacement)
#endif

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_v128_load8_splat")
wasm_v8x16_load_splat(const void *__mem) {
  return wasm_v128_load8_splat(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_v128_load16_splat")
wasm_v16x8_load_splat(const void *__mem) {
  return wasm_v128_load16_splat(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_v128_load32_splat")
wasm_v32x4_load_splat(const void *__mem) {
  return wasm_v128_load32_splat(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_v128_load64_splat")
wasm_v64x2_load_splat(const void *__mem) {
  return wasm_v128_load64_splat(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i16x8_load8x8")
wasm_i16x8_load_8x8(const void *__mem) {
  return wasm_i16x8_load8x8(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u16x8_load8x8")
wasm_u16x8_load_8x8(const void *__mem) {
  return wasm_u16x8_load8x8(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i32x4_load16x4")
wasm_i32x4_load_16x4(const void *__mem) {
  return wasm_i32x4_load16x4(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u32x4_load16x4")
wasm_u32x4_load_16x4(const void *__mem) {
  return wasm_u32x4_load16x4(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i64x2_load32x2")
wasm_i64x2_load_32x2(const void *__mem) {
  return wasm_i64x2_load32x2(__mem);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u64x2_load32x2")
wasm_u64x2_load_32x2(const void *__mem) {
  return wasm_u64x2_load32x2(__mem);
}

#define wasm_v8x16_shuffle(__a, __b, __c0, __c1, __c2, __c3, __c4, __c5, __c6, \\
                           __c7, __c8, __c9, __c10, __c11, __c12, __c13,       \\
                           __c14, __c15)                                       \\
  __DEPRECATED_WASM_MACRO("wasm_v8x16_shuffle", "wasm_i8x16_shuffle")          \\
  wasm_i8x16_shuffle(__a, __b, __c0, __c1, __c2, __c3, __c4, __c5, __c6, __c7, \\
                     __c8, __c9, __c10, __c11, __c12, __c13, __c14, __c15)

#define wasm_v16x8_shuffle(__a, __b, __c0, __c1, __c2, __c3, __c4, __c5, __c6, \\
                           __c7)                                               \\
  __DEPRECATED_WASM_MACRO("wasm_v16x8_shuffle", "wasm_i16x8_shuffle")          \\
  wasm_i16x8_shuffle(__a, __b, __c0, __c1, __c2, __c3, __c4, __c5, __c6, __c7)

#define wasm_v32x4_shuffle(__a, __b, __c0, __c1, __c2, __c3)                   \\
  __DEPRECATED_WASM_MACRO("wasm_v32x4_shuffle", "wasm_i32x4_shuffle")          \\
  wasm_i32x4_shuffle(__a, __b, __c0, __c1, __c2, __c3)

#define wasm_v64x2_shuffle(__a, __b, __c0, __c1)                               \\
  __DEPRECATED_WASM_MACRO("wasm_v64x2_shuffle", "wasm_i64x2_shuffle")          \\
  wasm_i64x2_shuffle(__a, __b, __c0, __c1)

// Relaxed SIMD intrinsics

#define __RELAXED_FN_ATTRS                                                     \\
  __attribute__((__always_inline__, __nodebug__, __target__("relaxed-simd"),   \\
                 __min_vector_width__(128)))

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_f32x4_relaxed_madd(v128_t __a, v128_t __b, v128_t __c) {
  return (v128_t)__builtin_wasm_relaxed_madd_f32x4((__f32x4)__a, (__f32x4)__b,
                                                   (__f32x4)__c);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_f32x4_relaxed_nmadd(v128_t __a, v128_t __b, v128_t __c) {
  return (v128_t)__builtin_wasm_relaxed_nmadd_f32x4((__f32x4)__a, (__f32x4)__b,
                                                    (__f32x4)__c);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_f64x2_relaxed_madd(v128_t __a, v128_t __b, v128_t __c) {
  return (v128_t)__builtin_wasm_relaxed_madd_f64x2((__f64x2)__a, (__f64x2)__b,
                                                   (__f64x2)__c);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_f64x2_relaxed_nmadd(v128_t __a, v128_t __b, v128_t __c) {
  return (v128_t)__builtin_wasm_relaxed_nmadd_f64x2((__f64x2)__a, (__f64x2)__b,
                                                    (__f64x2)__c);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i8x16_relaxed_laneselect(v128_t __a, v128_t __b, v128_t __m) {
  return (v128_t)__builtin_wasm_relaxed_laneselect_i8x16(
      (__i8x16)__a, (__i8x16)__b, (__i8x16)__m);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i16x8_relaxed_laneselect(v128_t __a, v128_t __b, v128_t __m) {
  return (v128_t)__builtin_wasm_relaxed_laneselect_i16x8(
      (__i16x8)__a, (__i16x8)__b, (__i16x8)__m);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i32x4_relaxed_laneselect(v128_t __a, v128_t __b, v128_t __m) {
  return (v128_t)__builtin_wasm_relaxed_laneselect_i32x4(
      (__i32x4)__a, (__i32x4)__b, (__i32x4)__m);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i64x2_relaxed_laneselect(v128_t __a, v128_t __b, v128_t __m) {
  return (v128_t)__builtin_wasm_relaxed_laneselect_i64x2(
      (__i64x2)__a, (__i64x2)__b, (__i64x2)__m);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i8x16_relaxed_swizzle(v128_t __a, v128_t __s) {
  return (v128_t)__builtin_wasm_relaxed_swizzle_i8x16((__i8x16)__a,
                                                      (__i8x16)__s);
}

static __inline__ v128_t __RELAXED_FN_ATTRS wasm_f32x4_relaxed_min(v128_t __a,
                                                                   v128_t __b) {
  return (v128_t)__builtin_wasm_relaxed_min_f32x4((__f32x4)__a, (__f32x4)__b);
}

static __inline__ v128_t __RELAXED_FN_ATTRS wasm_f32x4_relaxed_max(v128_t __a,
                                                                   v128_t __b) {
  return (v128_t)__builtin_wasm_relaxed_max_f32x4((__f32x4)__a, (__f32x4)__b);
}

static __inline__ v128_t __RELAXED_FN_ATTRS wasm_f64x2_relaxed_min(v128_t __a,
                                                                   v128_t __b) {
  return (v128_t)__builtin_wasm_relaxed_min_f64x2((__f64x2)__a, (__f64x2)__b);
}

static __inline__ v128_t __RELAXED_FN_ATTRS wasm_f64x2_relaxed_max(v128_t __a,
                                                                   v128_t __b) {
  return (v128_t)__builtin_wasm_relaxed_max_f64x2((__f64x2)__a, (__f64x2)__b);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i32x4_relaxed_trunc_f32x4(v128_t __a) {
  return (v128_t)__builtin_wasm_relaxed_trunc_s_i32x4_f32x4((__f32x4)__a);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_u32x4_relaxed_trunc_f32x4(v128_t __a) {
  return (v128_t)__builtin_wasm_relaxed_trunc_u_i32x4_f32x4((__f32x4)__a);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i32x4_relaxed_trunc_f64x2_zero(v128_t __a) {
  return (v128_t)__builtin_wasm_relaxed_trunc_s_zero_i32x4_f64x2((__f64x2)__a);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_u32x4_relaxed_trunc_f64x2_zero(v128_t __a) {
  return (v128_t)__builtin_wasm_relaxed_trunc_u_zero_i32x4_f64x2((__f64x2)__a);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i16x8_relaxed_q15mulr(v128_t __a, v128_t __b) {
  return (v128_t)__builtin_wasm_relaxed_q15mulr_s_i16x8((__i16x8)__a,
                                                        (__i16x8)__b);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i16x8_relaxed_dot_i8x16_i7x16(v128_t __a, v128_t __b) {
  return (v128_t)__builtin_wasm_relaxed_dot_i8x16_i7x16_s_i16x8((__i8x16)__a,
                                                                (__i8x16)__b);
}

static __inline__ v128_t __RELAXED_FN_ATTRS
wasm_i32x4_relaxed_dot_i8x16_i7x16_add(v128_t __a, v128_t __b, v128_t __c) {
  return (v128_t)__builtin_wasm_relaxed_dot_i8x16_i7x16_add_s_i32x4(
      (__i8x16)__a, (__i8x16)__b, (__i32x4)__c);
}

// FP16 intrinsics
#define __FP16_FN_ATTRS                                                        \\
  __attribute__((__always_inline__, __nodebug__, __target__("fp16"),           \\
                 __min_vector_width__(128)))

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_splat(float __a) {
  return (v128_t)__builtin_wasm_splat_f16x8(__a);
}

#ifdef __wasm_fp16__
// TODO Replace the following macros with regular C functions and use normal
// target-independent vector code like the other replace/extract instructions.

#define wasm_f16x8_extract_lane(__a, __i)                                      \\
  (__builtin_wasm_extract_lane_f16x8((__f16x8)(__a), __i))

#define wasm_f16x8_replace_lane(__a, __i, __b)                                 \\
  ((v128_t)__builtin_wasm_replace_lane_f16x8((__f16x8)(__a), __i, __b))

#endif

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_abs(v128_t __a) {
  return (v128_t)__builtin_wasm_abs_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_neg(v128_t __a) {
  return (v128_t)(-(__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_sqrt(v128_t __a) {
  return (v128_t)__builtin_wasm_sqrt_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_ceil(v128_t __a) {
  return (v128_t)__builtin_wasm_ceil_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_floor(v128_t __a) {
  return (v128_t)__builtin_wasm_floor_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_trunc(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_nearest(v128_t __a) {
  return (v128_t)__builtin_wasm_nearest_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_eq(v128_t __a, v128_t __b) {
  return (v128_t)((__f16x8)__a == (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_ne(v128_t __a, v128_t __b) {
  return (v128_t)((__f16x8)__a != (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_lt(v128_t __a, v128_t __b) {
  return (v128_t)((__f16x8)__a < (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_gt(v128_t __a, v128_t __b) {
  return (v128_t)((__f16x8)__a > (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_le(v128_t __a, v128_t __b) {
  return (v128_t)((__f16x8)__a <= (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_ge(v128_t __a, v128_t __b) {
  return (v128_t)((__f16x8)__a >= (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_add(v128_t __a,
                                                        v128_t __b) {
  return (v128_t)((__f16x8)__a + (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_sub(v128_t __a,
                                                        v128_t __b) {
  return (v128_t)((__f16x8)__a - (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_mul(v128_t __a,
                                                        v128_t __b) {
  return (v128_t)((__f16x8)__a * (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_div(v128_t __a,
                                                        v128_t __b) {
  return (v128_t)((__f16x8)__a / (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_min(v128_t __a,
                                                        v128_t __b) {
  return (v128_t)__builtin_wasm_min_f16x8((__f16x8)__a, (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_max(v128_t __a,
                                                        v128_t __b) {
  return (v128_t)__builtin_wasm_max_f16x8((__f16x8)__a, (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_pmin(v128_t __a,
                                                         v128_t __b) {
  return (v128_t)__builtin_wasm_pmin_f16x8((__f16x8)__a, (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_pmax(v128_t __a,
                                                         v128_t __b) {
  return (v128_t)__builtin_wasm_pmax_f16x8((__f16x8)__a, (__f16x8)__b);
}

static __inline__ v128_t __FP16_FN_ATTRS
wasm_i16x8_trunc_sat_f16x8(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_saturate_s_i16x8_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS
wasm_u16x8_trunc_sat_f16x8(v128_t __a) {
  return (v128_t)__builtin_wasm_trunc_saturate_u_i16x8_f16x8((__f16x8)__a);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_convert_i16x8(v128_t __a) {
  return (v128_t) __builtin_convertvector((__i16x8)__a, __f16x8);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_convert_u16x8(v128_t __a) {
  return (v128_t) __builtin_convertvector((__u16x8)__a, __f16x8);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_relaxed_madd(v128_t __a,
                                                                 v128_t __b,
                                                                 v128_t __c) {
  return (v128_t)__builtin_wasm_relaxed_madd_f16x8((__f16x8)__a, (__f16x8)__b,
                                                   (__f16x8)__c);
}

static __inline__ v128_t __FP16_FN_ATTRS wasm_f16x8_relaxed_nmadd(v128_t __a,
                                                                  v128_t __b,
                                                                  v128_t __c) {
  return (v128_t)__builtin_wasm_relaxed_nmadd_f16x8((__f16x8)__a, (__f16x8)__b,
                                                    (__f16x8)__c);
}

// Deprecated intrinsics

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i8x16_swizzle")
wasm_v8x16_swizzle(v128_t __a, v128_t __b) {
  return wasm_i8x16_swizzle(__a, __b);
}

static __inline__ bool __DEPRECATED_FN_ATTRS("wasm_v128_any_true")
wasm_i8x16_any_true(v128_t __a) {
  return wasm_v128_any_true(__a);
}

static __inline__ bool __DEPRECATED_FN_ATTRS("wasm_v128_any_true")
wasm_i16x8_any_true(v128_t __a) {
  return wasm_v128_any_true(__a);
}

static __inline__ bool __DEPRECATED_FN_ATTRS("wasm_v128_any_true")
wasm_i32x4_any_true(v128_t __a) {
  return wasm_v128_any_true(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i8x16_add_sat")
wasm_i8x16_add_saturate(v128_t __a, v128_t __b) {
  return wasm_i8x16_add_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u8x16_add_sat")
wasm_u8x16_add_saturate(v128_t __a, v128_t __b) {
  return wasm_u8x16_add_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i8x16_sub_sat")
wasm_i8x16_sub_saturate(v128_t __a, v128_t __b) {
  return wasm_i8x16_sub_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u8x16_sub_sat")
wasm_u8x16_sub_saturate(v128_t __a, v128_t __b) {
  return wasm_u8x16_sub_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i16x8_add_sat")
wasm_i16x8_add_saturate(v128_t __a, v128_t __b) {
  return wasm_i16x8_add_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u16x8_add_sat")
wasm_u16x8_add_saturate(v128_t __a, v128_t __b) {
  return wasm_u16x8_add_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i16x8_sub_sat")
wasm_i16x8_sub_saturate(v128_t __a, v128_t __b) {
  return wasm_i16x8_sub_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u16x8_sub_sat")
wasm_u16x8_sub_saturate(v128_t __a, v128_t __b) {
  return wasm_u16x8_sub_sat(__a, __b);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i16x8_extend_low_i8x16")
wasm_i16x8_widen_low_i8x16(v128_t __a) {
  return wasm_i16x8_extend_low_i8x16(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i16x8_extend_high_i8x16")
wasm_i16x8_widen_high_i8x16(v128_t __a) {
  return wasm_i16x8_extend_high_i8x16(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u16x8_extend_low_u8x16")
wasm_i16x8_widen_low_u8x16(v128_t __a) {
  return wasm_u16x8_extend_low_u8x16(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u16x8_extend_high_u8x16")
wasm_i16x8_widen_high_u8x16(v128_t __a) {
  return wasm_u16x8_extend_high_u8x16(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i32x4_extend_low_i16x8")
wasm_i32x4_widen_low_i16x8(v128_t __a) {
  return wasm_i32x4_extend_low_i16x8(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i32x4_extend_high_i16x8")
wasm_i32x4_widen_high_i16x8(v128_t __a) {
  return wasm_i32x4_extend_high_i16x8(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u32x4_extend_low_u16x8")
wasm_i32x4_widen_low_u16x8(v128_t __a) {
  return wasm_u32x4_extend_low_u16x8(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u32x4_extend_high_u16x8")
wasm_i32x4_widen_high_u16x8(v128_t __a) {
  return wasm_u32x4_extend_high_u16x8(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_i32x4_trunc_sat_f32x4")
wasm_i32x4_trunc_saturate_f32x4(v128_t __a) {
  return wasm_i32x4_trunc_sat_f32x4(__a);
}

static __inline__ v128_t __DEPRECATED_FN_ATTRS("wasm_u32x4_trunc_sat_f32x4")
wasm_u32x4_trunc_saturate_f32x4(v128_t __a) {
  return wasm_u32x4_trunc_sat_f32x4(__a);
}

// Undefine helper macros
#undef __DEFAULT_FN_ATTRS
#undef __DEPRECATED_FN_ATTRS

#endif // __WASM_SIMD128_H
`,"mm_malloc.h":`/*===---- mm_malloc.h - Allocating and Freeing Aligned Memory Blocks -------===
 *
 * Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
 * See https://llvm.org/LICENSE.txt for license information.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 *
 *===-----------------------------------------------------------------------===
 */

#ifndef __MM_MALLOC_H
#define __MM_MALLOC_H

#include <stdlib.h>

#ifdef _WIN32
#include <malloc.h>
#else
#ifndef __cplusplus
extern int posix_memalign(void **__memptr, size_t __alignment, size_t __size);
#else
// Some systems (e.g. those with GNU libc) declare posix_memalign with an
// exception specifier. Via an "egregious workaround" in
// Sema::CheckEquivalentExceptionSpec, Clang accepts the following as a valid
// redeclaration of glibc's declaration.
extern "C" int posix_memalign(void **__memptr, size_t __alignment, size_t __size);
#endif
#endif

#if !(defined(_WIN32) && defined(_mm_malloc))
static __inline__ void *__attribute__((__always_inline__, __nodebug__,
                                       __malloc__, __alloc_size__(1),
                                       __alloc_align__(2)))
_mm_malloc(size_t __size, size_t __align) {
  if (__align == 1) {
    return malloc(__size);
  }

  if (!(__align & (__align - 1)) && __align < sizeof(void *))
    __align = sizeof(void *);

  void *__mallocedMemory;
#if defined(__MINGW32__)
  __mallocedMemory = __mingw_aligned_malloc(__size, __align);
#elif defined(_WIN32)
  __mallocedMemory = _aligned_malloc(__size, __align);
#else
  if (posix_memalign(&__mallocedMemory, __align, __size))
    return 0;
#endif

  return __mallocedMemory;
}

static __inline__ void __attribute__((__always_inline__, __nodebug__))
_mm_free(void *__p)
{
#if defined(__MINGW32__)
  __mingw_aligned_free(__p);
#elif defined(_WIN32)
  _aligned_free(__p);
#else
  free(__p);
#endif
}
#endif

#endif /* __MM_MALLOC_H */
`});var To="include/wasm-idle/simd",or="__wasm_idle_simd_target.h",xo=`#ifndef __wasm_idle_simd_target_h__
#define __wasm_idle_simd_target_h__
#ifndef __wasm_simd128__
#undef __SSE__
#undef __SSE2__
#undef __SSE3__
#undef __SSSE3__
#undef __SSE4_1__
#undef __SSE4_2__
#undef __AVX__
#undef __AVX2__
#endif
#endif
`;function lr(e){return`${e.replace(/\/+$/,"")}/${To}`}function mr(e="",_=!0){let n=lr(e);return["-target-feature","+simd128",...rr,"-include",`${n}/${or}`,..._?["-internal-isystem",n]:[]]}function dr(e,_=""){let n=lr(_),t=n.split("/").filter(Boolean);for(let a=1;a<=t.length;a++)e.mkdirTree(`${n.startsWith("/")?"/":""}${t.slice(0,a).join("/")}`);let i=new TextEncoder;e.mkdirTree(`${n}/emscripten`);for(let[a,r]of Object.entries(sr)){let s=a==="xmmintrin.h"?`emscripten/${a}`:a;e.writeFile(`${n}/${s}`,i.encode(r))}e.writeFile(`${n}/xmmintrin.h`,i.encode(`#ifndef __wasm_idle_xmmintrin_h__
#define __wasm_idle_xmmintrin_h__
#include "emscripten/xmmintrin.h"
#undef _mm_malloc
#undef _mm_free
#include <mm_malloc.h>
#endif
`)),e.writeFile(`${n}/x86intrin.h`,i.encode(`#ifndef __wasm_idle_x86intrin_h__
#define __wasm_idle_x86intrin_h__
/* Wasm compatibility for SSE through AVX2; native x86-only intrinsics are excluded. */
#include <immintrin.h>
#endif
`)),e.writeFile(`${n}/${or}`,i.encode(xo))}var it=Object.freeze({name:"clang",version:"22.1.8",revision:"ca7933e47d3a3451d81e72ac174dcb5aa28b59d1"}),at=Object.freeze({path:"ostream",bytes:8445,sha256:"f193fb44780e6aed1fb4cf9da83142fcceb62efc7d4087cd051c117db12fce81"}),cr=Object.freeze({"__algorithm/ranges_contains_subrange.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_CONTAINS_SUBRANGE_H
#define _LIBCPP___ALGORITHM_RANGES_CONTAINS_SUBRANGE_H

#include <__algorithm/ranges_search.h>
#include <__config>
#include <__functional/identity.h>
#include <__functional/ranges_operations.h>
#include <__functional/reference_wrapper.h>
#include <__iterator/concepts.h>
#include <__iterator/indirectly_comparable.h>
#include <__iterator/projected.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/size.h>
#include <__ranges/subrange.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {
struct __contains_subrange {
  template <forward_iterator _Iter1,
            sentinel_for<_Iter1> _Sent1,
            forward_iterator _Iter2,
            sentinel_for<_Iter2> _Sent2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<_Iter1, _Iter2, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool static operator()(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred __pred   = {},
      _Proj1 __proj1 = {},
      _Proj2 __proj2 = {}) {
    if (__first2 == __last2)
      return true;

    auto __ret = ranges::search(
        std::move(__first1), __last1, std::move(__first2), __last2, __pred, std::ref(__proj1), std::ref(__proj2));
    return __ret.empty() == false;
  }

  template <forward_range _Range1,
            forward_range _Range2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<iterator_t<_Range1>, iterator_t<_Range2>, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool static
  operator()(_Range1&& __range1, _Range2&& __range2, _Pred __pred = {}, _Proj1 __proj1 = {}, _Proj2 __proj2 = {}) {
    if constexpr (sized_range<_Range2>) {
      if (ranges::size(__range2) == 0)
        return true;
    } else {
      if (ranges::begin(__range2) == ranges::end(__range2))
        return true;
    }

    auto __ret = ranges::search(__range1, __range2, __pred, std::ref(__proj1), std::ref(__proj2));
    return __ret.empty() == false;
  }
};

inline namespace __cpo {
inline constexpr auto contains_subrange = __contains_subrange{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_CONTAINS_SUBRANGE_H
`,"__algorithm/ranges_ends_with.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_ENDS_WITH_H
#define _LIBCPP___ALGORITHM_RANGES_ENDS_WITH_H

#include <__algorithm/ranges_equal.h>
#include <__algorithm/ranges_starts_with.h>
#include <__config>
#include <__functional/identity.h>
#include <__functional/ranges_operations.h>
#include <__functional/reference_wrapper.h>
#include <__iterator/advance.h>
#include <__iterator/concepts.h>
#include <__iterator/distance.h>
#include <__iterator/indirectly_comparable.h>
#include <__iterator/reverse_iterator.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/size.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {
struct __ends_with {
  template <class _Iter1, class _Sent1, class _Iter2, class _Sent2, class _Pred, class _Proj1, class _Proj2>
  _LIBCPP_HIDE_FROM_ABI static constexpr bool __ends_with_fn_impl_bidirectional(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred& __pred,
      _Proj1& __proj1,
      _Proj2& __proj2) {
    auto __rbegin1 = std::make_reverse_iterator(__last1);
    auto __rend1   = std::make_reverse_iterator(__first1);
    auto __rbegin2 = std::make_reverse_iterator(__last2);
    auto __rend2   = std::make_reverse_iterator(__first2);
    return ranges::starts_with(
        __rbegin1, __rend1, __rbegin2, __rend2, std::ref(__pred), std::ref(__proj1), std::ref(__proj2));
  }

  template <class _Iter1, class _Sent1, class _Iter2, class _Sent2, class _Pred, class _Proj1, class _Proj2>
  _LIBCPP_HIDE_FROM_ABI static constexpr bool __ends_with_fn_impl(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred& __pred,
      _Proj1& __proj1,
      _Proj2& __proj2) {
    if constexpr (std::bidirectional_iterator<_Sent1> && std::bidirectional_iterator<_Sent2> &&
                  (!std::random_access_iterator<_Sent1>) && (!std::random_access_iterator<_Sent2>)) {
      return __ends_with_fn_impl_bidirectional(__first1, __last1, __first2, __last2, __pred, __proj1, __proj2);

    } else {
      auto __n1 = ranges::distance(__first1, __last1);
      auto __n2 = ranges::distance(__first2, __last2);
      if (__n2 == 0)
        return true;
      if (__n2 > __n1)
        return false;

      return __ends_with_fn_impl_with_offset(
          std::move(__first1),
          std::move(__last1),
          std::move(__first2),
          std::move(__last2),
          __pred,
          __proj1,
          __proj2,
          __n1 - __n2);
    }
  }

  template <class _Iter1,
            class _Sent1,
            class _Iter2,
            class _Sent2,
            class _Pred,
            class _Proj1,
            class _Proj2,
            class _Offset>
  static _LIBCPP_HIDE_FROM_ABI constexpr bool __ends_with_fn_impl_with_offset(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred& __pred,
      _Proj1& __proj1,
      _Proj2& __proj2,
      _Offset __offset) {
    if constexpr (std::bidirectional_iterator<_Sent1> && std::bidirectional_iterator<_Sent2> &&
                  !std::random_access_iterator<_Sent1> && !std::random_access_iterator<_Sent2>) {
      return __ends_with_fn_impl_bidirectional(
          std::move(__first1), std::move(__last1), std::move(__first2), std::move(__last2), __pred, __proj1, __proj2);

    } else {
      ranges::advance(__first1, __offset);
      return ranges::equal(
          std::move(__first1),
          std::move(__last1),
          std::move(__first2),
          std::move(__last2),
          std::ref(__pred),
          std::ref(__proj1),
          std::ref(__proj2));
    }
  }

  template <input_iterator _Iter1,
            sentinel_for<_Iter1> _Sent1,
            input_iterator _Iter2,
            sentinel_for<_Iter2> _Sent2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires(forward_iterator<_Iter1> || sized_sentinel_for<_Sent1, _Iter1>) &&
            (forward_iterator<_Iter2> || sized_sentinel_for<_Sent2, _Iter2>) &&
            indirectly_comparable<_Iter1, _Iter2, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool operator()(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred __pred   = {},
      _Proj1 __proj1 = {},
      _Proj2 __proj2 = {}) const {
    return __ends_with_fn_impl(
        std::move(__first1), std::move(__last1), std::move(__first2), std::move(__last2), __pred, __proj1, __proj2);
  }

  template <input_range _Range1,
            input_range _Range2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires(forward_range<_Range1> || sized_range<_Range1>) && (forward_range<_Range2> || sized_range<_Range2>) &&
            indirectly_comparable<iterator_t<_Range1>, iterator_t<_Range2>, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr bool operator()(
      _Range1&& __range1, _Range2&& __range2, _Pred __pred = {}, _Proj1 __proj1 = {}, _Proj2 __proj2 = {}) const {
    if constexpr (sized_range<_Range1> && sized_range<_Range2>) {
      auto __n1 = ranges::size(__range1);
      auto __n2 = ranges::size(__range2);
      if (__n2 == 0)
        return true;
      if (__n2 > __n1)
        return false;
      auto __offset = __n1 - __n2;

      return __ends_with_fn_impl_with_offset(
          ranges::begin(__range1),
          ranges::end(__range1),
          ranges::begin(__range2),
          ranges::end(__range2),
          __pred,
          __proj1,
          __proj2,
          __offset);

    } else {
      return __ends_with_fn_impl(
          ranges::begin(__range1),
          ranges::end(__range1),
          ranges::begin(__range2),
          ranges::end(__range2),
          __pred,
          __proj1,
          __proj2);
    }
  }
};

inline namespace __cpo {
inline constexpr auto ends_with = __ends_with{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_ENDS_WITH_H
`,"__algorithm/ranges_find_last.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_FIND_LAST_H
#define _LIBCPP___ALGORITHM_RANGES_FIND_LAST_H

#include <__config>
#include <__functional/identity.h>
#include <__functional/invoke.h>
#include <__functional/ranges_operations.h>
#include <__iterator/concepts.h>
#include <__iterator/indirectly_comparable.h>
#include <__iterator/next.h>
#include <__iterator/prev.h>
#include <__iterator/projected.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/subrange.h>
#include <__utility/forward.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {

template <class _Iter, class _Sent, class _Pred, class _Proj>
_LIBCPP_HIDE_FROM_ABI constexpr subrange<_Iter>
__find_last_impl(_Iter __first, _Sent __last, _Pred __pred, _Proj& __proj) {
  if (__first == __last) {
    return subrange<_Iter>(__first, __first);
  }

  if constexpr (bidirectional_iterator<_Iter>) {
    auto __last_it = ranges::next(__first, __last);
    for (auto __it = ranges::prev(__last_it); __it != __first; --__it) {
      if (__pred(std::invoke(__proj, *__it))) {
        return subrange<_Iter>(std::move(__it), std::move(__last_it));
      }
    }
    if (__pred(std::invoke(__proj, *__first))) {
      return subrange<_Iter>(std::move(__first), std::move(__last_it));
    }
    return subrange<_Iter>(__last_it, __last_it);
  } else {
    bool __found = false;
    _Iter __found_it;
    for (; __first != __last; ++__first) {
      if (__pred(std::invoke(__proj, *__first))) {
        __found    = true;
        __found_it = __first;
      }
    }

    if (__found) {
      return subrange<_Iter>(std::move(__found_it), std::move(__first));
    } else {
      return subrange<_Iter>(__first, __first);
    }
  }
}

struct __find_last {
  template <class _Type>
  struct __op {
    const _Type& __value;
    template <class _Elem>
    _LIBCPP_HIDE_FROM_ABI constexpr decltype(auto) operator()(_Elem&& __elem) const {
      return std::forward<_Elem>(__elem) == __value;
    }
  };

  template <forward_iterator _Iter, sentinel_for<_Iter> _Sent, class _Type, class _Proj = identity>
    requires indirect_binary_predicate<ranges::equal_to, projected<_Iter, _Proj>, const _Type*>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static subrange<_Iter>
  operator()(_Iter __first, _Sent __last, const _Type& __value, _Proj __proj = {}) {
    return ranges::__find_last_impl(std::move(__first), std::move(__last), __op<_Type>{__value}, __proj);
  }

  template <forward_range _Range, class _Type, class _Proj = identity>
    requires indirect_binary_predicate<ranges::equal_to, projected<iterator_t<_Range>, _Proj>, const _Type*>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static borrowed_subrange_t<_Range>
  operator()(_Range&& __range, const _Type& __value, _Proj __proj = {}) {
    return ranges::__find_last_impl(ranges::begin(__range), ranges::end(__range), __op<_Type>{__value}, __proj);
  }
};

struct __find_last_if {
  template <class _Pred>
  struct __op {
    _Pred& __pred;
    template <class _Elem>
    _LIBCPP_HIDE_FROM_ABI constexpr decltype(auto) operator()(_Elem&& __elem) const {
      return std::invoke(__pred, std::forward<_Elem>(__elem));
    }
  };

  template <forward_iterator _Iter,
            sentinel_for<_Iter> _Sent,
            class _Proj = identity,
            indirect_unary_predicate<projected<_Iter, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static subrange<_Iter>
  operator()(_Iter __first, _Sent __last, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(std::move(__first), std::move(__last), __op<_Pred>{__pred}, __proj);
  }

  template <forward_range _Range,
            class _Proj = identity,
            indirect_unary_predicate<projected<iterator_t<_Range>, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static borrowed_subrange_t<_Range>
  operator()(_Range&& __range, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(ranges::begin(__range), ranges::end(__range), __op<_Pred>{__pred}, __proj);
  }
};

struct __find_last_if_not {
  template <class _Pred>
  struct __op {
    _Pred& __pred;
    template <class _Elem>
    _LIBCPP_HIDE_FROM_ABI constexpr decltype(auto) operator()(_Elem&& __elem) const {
      return !std::invoke(__pred, std::forward<_Elem>(__elem));
    }
  };

  template <forward_iterator _Iter,
            sentinel_for<_Iter> _Sent,
            class _Proj = identity,
            indirect_unary_predicate<projected<_Iter, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static subrange<_Iter>
  operator()(_Iter __first, _Sent __last, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(std::move(__first), std::move(__last), __op<_Pred>{__pred}, __proj);
  }

  template <forward_range _Range,
            class _Proj = identity,
            indirect_unary_predicate<projected<iterator_t<_Range>, _Proj>> _Pred>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI constexpr static borrowed_subrange_t<_Range>
  operator()(_Range&& __range, _Pred __pred, _Proj __proj = {}) {
    return ranges::__find_last_impl(ranges::begin(__range), ranges::end(__range), __op<_Pred>{__pred}, __proj);
  }
};

inline namespace __cpo {
inline constexpr auto find_last        = __find_last{};
inline constexpr auto find_last_if     = __find_last_if{};
inline constexpr auto find_last_if_not = __find_last_if_not{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_FIND_LAST_H
`,"__algorithm/ranges_fold.h":`// -*- C++ -*-
//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_FOLD_H
#define _LIBCPP___ALGORITHM_RANGES_FOLD_H

#include <__concepts/assignable.h>
#include <__concepts/constructible.h>
#include <__concepts/convertible_to.h>
#include <__concepts/invocable.h>
#include <__concepts/movable.h>
#include <__config>
#include <__functional/invoke.h>
#include <__functional/reference_wrapper.h>
#include <__iterator/concepts.h>
#include <__iterator/iterator_traits.h>
#include <__iterator/next.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__ranges/dangling.h>
#include <__type_traits/decay.h>
#include <__type_traits/invoke.h>
#include <__utility/forward.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 23

namespace ranges {
template <class _Ip, class _Tp>
struct in_value_result {
  _LIBCPP_NO_UNIQUE_ADDRESS _Ip in;
  _LIBCPP_NO_UNIQUE_ADDRESS _Tp value;

  template <class _I2, class _T2>
    requires convertible_to<const _Ip&, _I2> && convertible_to<const _Tp&, _T2>
  _LIBCPP_HIDE_FROM_ABI constexpr operator in_value_result<_I2, _T2>() const& {
    return {in, value};
  }

  template <class _I2, class _T2>
    requires convertible_to<_Ip, _I2> && convertible_to<_Tp, _T2>
  _LIBCPP_HIDE_FROM_ABI constexpr operator in_value_result<_I2, _T2>() && {
    return {std::move(in), std::move(value)};
  }
};

template <class _Ip, class _Tp>
using fold_left_with_iter_result = in_value_result<_Ip, _Tp>;

template <class _Fp, class _Tp, class _Ip, class _Rp, class _Up = decay_t<_Rp>>
concept __indirectly_binary_left_foldable_impl =
    convertible_to<_Rp, _Up> &&                    //
    movable<_Tp> &&                                //
    movable<_Up> &&                                //
    convertible_to<_Tp, _Up> &&                    //
    invocable<_Fp&, _Up, iter_reference_t<_Ip>> && //
    assignable_from<_Up&, invoke_result_t<_Fp&, _Up, iter_reference_t<_Ip>>>;

template <class _Fp, class _Tp, class _Ip>
concept __indirectly_binary_left_foldable =
    copy_constructible<_Fp> &&                     //
    invocable<_Fp&, _Tp, iter_reference_t<_Ip>> && //
    __indirectly_binary_left_foldable_impl<_Fp, _Tp, _Ip, invoke_result_t<_Fp&, _Tp, iter_reference_t<_Ip>>>;

struct __fold_left_with_iter {
  template <input_iterator _Ip, sentinel_for<_Ip> _Sp, class _Tp, __indirectly_binary_left_foldable<_Tp, _Ip> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Ip __first, _Sp __last, _Tp __init, _Fp __f) {
    using _Up = decay_t<invoke_result_t<_Fp&, _Tp, iter_reference_t<_Ip>>>;

    if (__first == __last) {
      return fold_left_with_iter_result<_Ip, _Up>{std::move(__first), _Up(std::move(__init))};
    }

    _Up __result = std::invoke(__f, std::move(__init), *__first);
    for (++__first; __first != __last; ++__first) {
      __result = std::invoke(__f, std::move(__result), *__first);
    }

    return fold_left_with_iter_result<_Ip, _Up>{std::move(__first), std::move(__result)};
  }

  template <input_range _Rp, class _Tp, __indirectly_binary_left_foldable<_Tp, iterator_t<_Rp>> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Rp&& __r, _Tp __init, _Fp __f) {
    auto __result = operator()(ranges::begin(__r), ranges::end(__r), std::move(__init), std::ref(__f));

    using _Up = decay_t<invoke_result_t<_Fp&, _Tp, range_reference_t<_Rp>>>;
    return fold_left_with_iter_result<borrowed_iterator_t<_Rp>, _Up>{std::move(__result.in), std::move(__result.value)};
  }
};

inline constexpr auto fold_left_with_iter = __fold_left_with_iter();

struct __fold_left {
  template <input_iterator _Ip, sentinel_for<_Ip> _Sp, class _Tp, __indirectly_binary_left_foldable<_Tp, _Ip> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Ip __first, _Sp __last, _Tp __init, _Fp __f) {
    return fold_left_with_iter(std::move(__first), std::move(__last), std::move(__init), std::ref(__f)).value;
  }

  template <input_range _Rp, class _Tp, __indirectly_binary_left_foldable<_Tp, iterator_t<_Rp>> _Fp>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr auto operator()(_Rp&& __r, _Tp __init, _Fp __f) {
    return fold_left_with_iter(ranges::begin(__r), ranges::end(__r), std::move(__init), std::ref(__f)).value;
  }
};

inline constexpr auto fold_left = __fold_left();
} // namespace ranges

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_END_NAMESPACE_STD

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_FOLD_H
`,"__algorithm/ranges_starts_with.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___ALGORITHM_RANGES_STARTS_WITH_H
#define _LIBCPP___ALGORITHM_RANGES_STARTS_WITH_H

#include <__algorithm/in_in_result.h>
#include <__algorithm/ranges_mismatch.h>
#include <__config>
#include <__functional/identity.h>
#include <__functional/ranges_operations.h>
#include <__iterator/concepts.h>
#include <__iterator/indirectly_comparable.h>
#include <__ranges/access.h>
#include <__ranges/concepts.h>
#include <__utility/move.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_PUSH_MACROS
#include <__undef_macros>

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

namespace ranges {
struct __starts_with {
  template <input_iterator _Iter1,
            sentinel_for<_Iter1> _Sent1,
            input_iterator _Iter2,
            sentinel_for<_Iter2> _Sent2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<_Iter1, _Iter2, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr bool operator()(
      _Iter1 __first1,
      _Sent1 __last1,
      _Iter2 __first2,
      _Sent2 __last2,
      _Pred __pred   = {},
      _Proj1 __proj1 = {},
      _Proj2 __proj2 = {}) {
    return __mismatch::__go(
               std::move(__first1),
               std::move(__last1),
               std::move(__first2),
               std::move(__last2),
               __pred,
               __proj1,
               __proj2)
               .in2 == __last2;
  }

  template <input_range _Range1,
            input_range _Range2,
            class _Pred  = ranges::equal_to,
            class _Proj1 = identity,
            class _Proj2 = identity>
    requires indirectly_comparable<iterator_t<_Range1>, iterator_t<_Range2>, _Pred, _Proj1, _Proj2>
  [[nodiscard]] _LIBCPP_HIDE_FROM_ABI static constexpr bool
  operator()(_Range1&& __range1, _Range2&& __range2, _Pred __pred = {}, _Proj1 __proj1 = {}, _Proj2 __proj2 = {}) {
    return __mismatch::__go(
               ranges::begin(__range1),
               ranges::end(__range1),
               ranges::begin(__range2),
               ranges::end(__range2),
               __pred,
               __proj1,
               __proj2)
               .in2 == ranges::end(__range2);
  }
};
inline namespace __cpo {
inline constexpr auto starts_with = __starts_with{};
} // namespace __cpo
} // namespace ranges

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

_LIBCPP_POP_MACROS

#endif // _LIBCPP___ALGORITHM_RANGES_STARTS_WITH_H
`,"__ostream/print.h":`//===---------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===---------------------------------------------------------------------===//

#ifndef _LIBCPP___OSTREAM_PRINT_H
#define _LIBCPP___OSTREAM_PRINT_H

#include <__config>

#if _LIBCPP_HAS_LOCALIZATION

#  include <__fwd/ostream.h>
#  include <__iterator/ostreambuf_iterator.h>
#  include <__ostream/basic_ostream.h>
#  include <format>
#  include <ios>
#  include <print>
#  include <streambuf>

#  if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#    pragma GCC system_header
#  endif

_LIBCPP_BEGIN_NAMESPACE_STD

#  if _LIBCPP_STD_VER >= 23

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void
__vprint_nonunicode(ostream& __os, string_view __fmt, format_args __args, bool __write_nl) {
  // [ostream.formatted.print]/3
  // Effects: Behaves as a formatted output function
  // ([ostream.formatted.reqmts]) of os, except that:
  // - failure to generate output is reported as specified below, and
  // - any exception thrown by the call to vformat is propagated without regard
  //   to the value of os.exceptions() and without turning on ios_base::badbit
  //   in the error state of os.
  // After constructing a sentry object, the function initializes an automatic
  // variable via
  //   string out = vformat(os.getloc(), fmt, args);

  ostream::sentry __s(__os);
  if (__s) {
    string __o = std::vformat(__os.getloc(), __fmt, __args);
    if (__write_nl)
      __o += '\\n';

#    if _LIBCPP_HAS_EXCEPTIONS
    try {
#    endif // _LIBCPP_HAS_EXCEPTIONS
      if (auto __rdbuf = __os.rdbuf();
          !__rdbuf || __rdbuf->sputn(__o.data(), __o.size()) != static_cast<streamsize>(__o.size()))
        __os.setstate(ios_base::badbit | ios_base::failbit);

#    if _LIBCPP_HAS_EXCEPTIONS
    } catch (...) {
      __os.__set_badbit_and_consider_rethrow();
    }
#    endif // _LIBCPP_HAS_EXCEPTIONS
  }
}

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void vprint_nonunicode(ostream& __os, string_view __fmt, format_args __args) {
  std::__vprint_nonunicode(__os, __fmt, __args, false);
}

// Returns the FILE* associated with the __os.
// Returns a nullptr when no FILE* is associated with __os.
// This function is in the dylib since the type of the buffer associated
// with std::cout, std::cerr, and std::clog is only known in the dylib.
//
// This function implements part of the implementation-defined behavior
// of [ostream.formatted.print]/3
//   If the function is vprint_unicode and os is a stream that refers to
//   a terminal capable of displaying Unicode which is determined in an
//   implementation-defined manner, writes out to the terminal using the
//   native Unicode API;
// Whether the returned FILE* is "a terminal capable of displaying Unicode"
// is determined in the same way as the print(FILE*, ...) overloads.
_LIBCPP_EXPORTED_FROM_ABI FILE* __get_ostream_file(ostream& __os);

#    if _LIBCPP_HAS_UNICODE
template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI void __vprint_unicode(ostream& __os, string_view __fmt, format_args __args, bool __write_nl) {
#      if _LIBCPP_AVAILABILITY_HAS_PRINT == 0
  return std::__vprint_nonunicode(__os, __fmt, __args, __write_nl);
#      else
  FILE* __file = std::__get_ostream_file(__os);
  if (!__file || !__print::__is_terminal(__file))
    return std::__vprint_nonunicode(__os, __fmt, __args, __write_nl);

  // [ostream.formatted.print]/3
  //    If the function is vprint_unicode and os is a stream that refers to a
  //    terminal capable of displaying Unicode which is determined in an
  //    implementation-defined manner, writes out to the terminal using the
  //    native Unicode API; if out contains invalid code units, the behavior is
  //    undefined and implementations are encouraged to diagnose it. If the
  //    native Unicode API is used, the function flushes os before writing out.
  //
  // This is the path for the native API, start with flushing.
  __os.flush();

#        if _LIBCPP_HAS_EXCEPTIONS
  try {
#        endif // _LIBCPP_HAS_EXCEPTIONS
    ostream::sentry __s(__os);
    if (__s) {
#        ifndef _LIBCPP_WIN32API
      __print::__vprint_unicode_posix(__file, __fmt, __args, __write_nl, true);
#        elif _LIBCPP_HAS_WIDE_CHARACTERS
    __print::__vprint_unicode_windows(__file, __fmt, __args, __write_nl, true);
#        else
#          error "Windows builds with wchar_t disabled are not supported."
#        endif
    }

#        if _LIBCPP_HAS_EXCEPTIONS
  } catch (...) {
    __os.__set_badbit_and_consider_rethrow();
  }
#        endif // _LIBCPP_HAS_EXCEPTIONS
#      endif   // _LIBCPP_AVAILABILITY_HAS_PRINT
}

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void vprint_unicode(ostream& __os, string_view __fmt, format_args __args) {
  std::__vprint_unicode(__os, __fmt, __args, false);
}
#    endif // _LIBCPP_HAS_UNICODE

template <class... _Args>
_LIBCPP_HIDE_FROM_ABI void print(ostream& __os, format_string<_Args...> __fmt, _Args&&... __args) {
#    if _LIBCPP_HAS_UNICODE
  if constexpr (__print::__use_unicode_execution_charset)
    std::__vprint_unicode(__os, __fmt.get(), std::make_format_args(__args...), false);
  else
    std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), false);
#    else  // _LIBCPP_HAS_UNICODE
  std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), false);
#    endif // _LIBCPP_HAS_UNICODE
}

template <class... _Args>
_LIBCPP_HIDE_FROM_ABI void println(ostream& __os, format_string<_Args...> __fmt, _Args&&... __args) {
#    if _LIBCPP_HAS_UNICODE
  // Note the wording in the Standard is inefficient. The output of
  // std::format is a std::string which is then copied. This solution
  // just appends a newline at the end of the output.
  if constexpr (__print::__use_unicode_execution_charset)
    std::__vprint_unicode(__os, __fmt.get(), std::make_format_args(__args...), true);
  else
    std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), true);
#    else  // _LIBCPP_HAS_UNICODE
  std::__vprint_nonunicode(__os, __fmt.get(), std::make_format_args(__args...), true);
#    endif // _LIBCPP_HAS_UNICODE
}

template <class = void> // TODO PRINT template or availability markup fires too eagerly (http://llvm.org/PR61563).
_LIBCPP_HIDE_FROM_ABI inline void println(ostream& __os) {
  std::print(__os, "\\n");
}

#  endif // _LIBCPP_STD_VER >= 23

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_HAS_LOCALIZATION

#endif // _LIBCPP___OSTREAM_PRINT_H
`,"__type_traits/is_implicit_lifetime.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___TYPE_TRAITS_IS_IMPLICIT_LIFETIME_H
#define _LIBCPP___TYPE_TRAITS_IS_IMPLICIT_LIFETIME_H

#include <__config>
#include <__type_traits/integral_constant.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 23
#  if __has_builtin(__builtin_is_implicit_lifetime)

template <class _Tp>
struct _LIBCPP_NO_SPECIALIZATIONS is_implicit_lifetime : bool_constant<__builtin_is_implicit_lifetime(_Tp)> {};

template <class _Tp>
_LIBCPP_NO_SPECIALIZATIONS inline constexpr bool is_implicit_lifetime_v = __builtin_is_implicit_lifetime(_Tp);

#  endif
#endif

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP___TYPE_TRAITS_IS_IMPLICIT_LIFETIME_H
`,"__type_traits/is_within_lifetime.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___TYPE_TRAITS_IS_WITHIN_LIFETIME_H
#define _LIBCPP___TYPE_TRAITS_IS_WITHIN_LIFETIME_H

#include <__config>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 26 && __has_builtin(__builtin_is_within_lifetime)
template <class _Tp>
_LIBCPP_HIDE_FROM_ABI consteval bool is_within_lifetime(const _Tp* __p) noexcept {
  return __builtin_is_within_lifetime(__p);
}
#endif

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP___TYPE_TRAITS_IS_WITHIN_LIFETIME_H
`,"__type_traits/reference_converts_from_temporary.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___TYPE_TRAITS_REFERENCE_CONVERTS_FROM_TEMPORARY_H
#define _LIBCPP___TYPE_TRAITS_REFERENCE_CONVERTS_FROM_TEMPORARY_H

#include <__config>
#include <__type_traits/integral_constant.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

_LIBCPP_BEGIN_NAMESPACE_STD

#if _LIBCPP_STD_VER >= 23

template <class _Tp, class _Up>
struct _LIBCPP_NO_SPECIALIZATIONS reference_converts_from_temporary
    : public bool_constant<__reference_converts_from_temporary(_Tp, _Up)> {};

template <class _Tp, class _Up>
_LIBCPP_NO_SPECIALIZATIONS inline constexpr bool reference_converts_from_temporary_v =
    __reference_converts_from_temporary(_Tp, _Up);

#endif

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP___TYPE_TRAITS_REFERENCE_CONVERTS_FROM_TEMPORARY_H
`,"__vector/vector_bool_formatter.h":`//===----------------------------------------------------------------------===//
//
// Part of the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//

#ifndef _LIBCPP___VECTOR_VECTOR_BOOL_FORMATTER_H
#define _LIBCPP___VECTOR_VECTOR_BOOL_FORMATTER_H

#include <__concepts/same_as.h>
#include <__config>
#include <__format/formatter.h>
#include <__format/formatter_bool.h>
#include <__fwd/vector.h>

#if !defined(_LIBCPP_HAS_NO_PRAGMA_SYSTEM_HEADER)
#  pragma GCC system_header
#endif

#if _LIBCPP_STD_VER >= 23

_LIBCPP_BEGIN_NAMESPACE_STD

template <class _Tp, class _CharT>
// Since is-vector-bool-reference is only used once it's inlined here.
  requires same_as<typename _Tp::__container, vector<bool, typename _Tp::__container::allocator_type>>
struct formatter<_Tp, _CharT> {
private:
  formatter<bool, _CharT> __underlying_;

public:
  template <class _ParseContext>
  _LIBCPP_HIDE_FROM_ABI constexpr typename _ParseContext::iterator parse(_ParseContext& __ctx) {
    return __underlying_.parse(__ctx);
  }

  template <class _FormatContext>
  _LIBCPP_HIDE_FROM_ABI typename _FormatContext::iterator format(const _Tp& __ref, _FormatContext& __ctx) const {
    return __underlying_.format(__ref, __ctx);
  }
};

_LIBCPP_END_NAMESPACE_STD

#endif // _LIBCPP_STD_VER >= 23

#endif // _LIBCPP___VECTOR_VECTOR_BOOL_FORMATTER_H
`});async function ur(e,_){if(_?.name!==it.name||_.version!==it.version||_.revision!==it.revision)return!1;let n="/include/c++/v1/",t=new TextDecoder("utf-8",{fatal:!0}),i=e.readFile(`${n}${at.path}`);if(i===null||i.byteLength!==at.bytes)return!1;let a=new Uint8Array(await crypto.subtle.digest("SHA-256",Uint8Array.from(i).buffer));if(Array.from(a,o=>o.toString(16).padStart(2,"0")).join("")!==at.sha256)return!1;let s=[];for(let[o,m]of Object.entries(cr)){let d=`${n}${o}`,u=e.readFile(d);if(u===null)s.push([d,m]);else if(t.decode(u)!==m)throw new Error(`Clang ${_.version} C++ header differs from its pinned source: ${o}`)}let l=new TextEncoder;for(let[o,m]of s)e.mkdirTree(o.slice(0,o.lastIndexOf("/"))),e.writeFile(o,l.encode(m));return!0}var fr=0,go=new TextEncoder,wo=new TextDecoder,ci=new Uint8Array(0),pr=()=>{},ui=e=>JSON.stringify(e.length>96?e.slice(0,93)+"...":e),Te=class{constructor(_){x(this,"ready");x(this,"mem",null);x(this,"hostMem_",null);x(this,"stdinStr");x(this,"stdinBytes",ci);x(this,"stdinOffset",0);x(this,"stdin");x(this,"stdout");x(this,"trace");x(this,"isTraceEnabled");x(this,"instance",null);x(this,"exports");x(this,"out",!0);x(this,"filePaths",new Set);x(this,"nativeFilePaths",new Set);x(this,"deletedFilePaths",new Set);x(this,"fileOverlays",new Map);x(this,"directoryPaths",new Set);x(this,"outputDecoders",new Map);this.stdin=_.stdin,this.stdout=_.stdout,this.stdinStr=_.stdinStr||"",this.trace=_.trace||pr,this.isTraceEnabled=_.isTraceEnabled;let n=Dn(this,"abort","host_write","host_read","memfs_log","copy_in","copy_out");this.ready=(_.fetchImpl?bn(_.moduleUrl,_.progress,_.signal,_.maxAssetBytes,_.fetchImpl):_.maxAssetBytes!==void 0?bn(_.moduleUrl,_.progress,_.signal,_.maxAssetBytes):_.signal?bn(_.moduleUrl,_.progress,_.signal):bn(_.moduleUrl,_.progress)).then(t=>WebAssembly.instantiate(t,{env:n})).then(t=>{this.instance=t,this.exports=t.exports,this.mem=new gn(this.exports.memory),this.exports.init()})}set hostMem(_){this.outputDecoders.clear(),this.hostMem_=_}setStdinStr(_){this.stdinStr=_,this.stdinBytes=ci,this.stdinOffset=0}addDirectory(_){let n=this.normalizePath(_);this.directoryPaths.has(n)||(this.mem.check(),this.mem.write(this.exports.GetPathBuf(),_),this.exports.AddDirectoryNode(_.length),this.directoryPaths.add(n))}addFile(_,n){let t=n instanceof ArrayBuffer?n.byteLength:n.length;this.mem.check(),this.mem.write(this.exports.GetPathBuf(),_);let i=this.exports.AddFileNode(_.length,t),a=this.exports.GetFileNodeAddress(i);this.mem.check(),this.mem.write(a,n),this.fileOverlays.delete(this.normalizePath(_)),this.deletedFilePaths.delete(this.normalizePath(_)),this.filePaths.add(this.normalizePath(_)),this.nativeFilePaths.add(this.normalizePath(_))}setFile(_,n){let t=this.normalizePath(_);this.filePaths.add(t),this.deletedFilePaths.delete(t),this.fileOverlays.set(t,Uint8Array.from(n))}hasFile(_){return this.filePaths.has(this.normalizePath(_))}getFileSize(_){let n=this.normalizePath(_);if(!this.filePaths.has(n))return;let t=this.fileOverlays.get(n);return t?t.byteLength:(this.mem.check(),this.mem.write(this.exports.GetPathBuf(),n),this.exports.GetFileNodeSize(this.exports.FindNode(n.length)))}removeFile(_){let n=this.normalizePath(_);this.fileOverlays.delete(n);let t=this.filePaths.delete(n);return t&&this.nativeFilePaths.has(n)&&this.deletedFilePaths.add(n),t}isFileDeleted(_){return this.deletedFilePaths.has(this.normalizePath(_))}renameFile(_,n){let t=this.normalizePath(_),i=this.normalizePath(n);if(!this.filePaths.has(t))return!1;if(t===i)return!0;let a=this.fileOverlays.get(t)??Uint8Array.from(this.getFileContents(t));return this.fileOverlays.set(i,a),this.filePaths.add(i),this.deletedFilePaths.delete(i),this.removeFile(t),!0}tracingEnabled(){return this.trace!==pr&&this.isTraceEnabled?.()!==!1}normalizePath(_){return _.replaceAll("\\","/").replace(/^\.\//,"").replace(/^\/+/,"")}getFileContents(_){if(!this.hasFile(_))throw new Error(`File not found: ${_}`);let n=this.fileOverlays.get(this.normalizePath(_));if(n)return n;this.mem.check(),this.mem.write(this.exports.GetPathBuf(),_);let t=this.exports.FindNode(_.length),i=this.exports.GetFileNodeAddress(t),a=this.exports.GetFileNodeSize(t);return new Uint8Array(this.mem.buffer,i,a)}abort(){throw this.trace("abort()"),new An}host_write(_,n,t,i){this.hostMem_.check(),ri(_<=2);let a=0,r="",s=this.outputDecoders.get(_);s||(s=new TextDecoder("utf-8",{ignoreBOM:!0}),this.outputDecoders.set(_,s));for(let l=0;l<t;++l){let o=this.hostMem_.read32(n);n+=4;let m=this.hostMem_.read32(n);n+=4,r+=s.decode(this.hostMem_.u8.subarray(o,o+m),{stream:!0}),a+=m}return this.hostMem_.write32(i,a),this.tracingEnabled()&&this.trace(`host_write(fd=${_}, bytes=${a}, data=${ui(r)})`),this.out&&r&&this.stdout(r),fr}flushOutput(_){let n=_===void 0?[...this.outputDecoders.keys()]:[_];for(let t of n){let i=this.outputDecoders.get(t);if(!i)continue;this.outputDecoders.delete(t);let a=i.decode();this.out&&a&&this.stdout(a)}}host_read(_,n,t,i){this.hostMem_.check(),ri(_===0);let a=0;for(let r=0;r<t;++r){let s=this.hostMem_.read32(n);n+=4;let l=this.hostMem_.read32(n);if(n+=4,l===0)continue;if(this.stdinOffset===this.stdinBytes.length){let d=this.stdinStr.length?this.stdinStr:this.stdin();this.stdinStr="",this.stdinBytes=go.encode(d),this.stdinOffset=0}let o=Math.min(l,this.stdinBytes.length-this.stdinOffset);if(o===0)break;let m=this.stdinBytes.subarray(this.stdinOffset,this.stdinOffset+o);if(this.hostMem_.write(s,m),this.stdinOffset+=o,this.stdinOffset===this.stdinBytes.length&&(this.stdinBytes=ci,this.stdinOffset=0),a+=o,this.tracingEnabled()&&this.trace(`host_read(fd=${_}, bytes=${o}, data=${ui(wo.decode(m))})`),o!==l)break}return this.hostMem_.write32(i,a),a===0&&this.tracingEnabled()&&this.trace(`host_read(fd=${_}, bytes=0)`),fr}memfs_log(_,n){if(!this.tracingEnabled())return;this.mem.check();let t=this.mem.readStr(_,n);this.trace(`memfs_log(${ui(t)})`)}copy_out(_,n,t){this.hostMem_.check();let i=new Uint8Array(this.hostMem_.buffer,_,t);this.mem.check();let a=new Uint8Array(this.mem.buffer,n,t);i.set(a)}copy_in(_,n,t){this.mem.check();let i=new Uint8Array(this.mem.buffer,_,t);this.hostMem_.check();let a=new Uint8Array(this.hostMem_.buffer,n,t);i.set(a)}};function*yo(e){let _=e instanceof Uint8Array?e:new Uint8Array(e),n=0,t="",i=s=>(n+=s,re(_,n-s,s)),a=s=>(n+=s,Wi(_,n-s,s)),r=()=>n=Math.ceil(n/512)*512;for(;n+512<=_.length;){let s=n;if(_.subarray(n,n+512).every(d=>d===0))return;let l={filename:i(100),mode:a(8),owner:a(8),group:a(8),size:a(12),mtime:a(12),checksum:a(8),type:i(1),linkname:i(100),ustar:i(8)};if(!l.ustar)return;let o={...l,ownerName:i(32),groupName:i(32),devMajor:i(8),devMinor:i(8),filenamePrefix:i(155)};r();let m=n+Math.ceil(o.size/512)*512;if(!Number.isSafeInteger(m)||m<=s||m>_.length)throw new Error("TAR has a truncated or out-of-range payload");if(o.size>0||o.type==="0"||o.type===""||o.type==="L"){let d=_.subarray(n,n+o.size);o.contents=d}if(n=m,o.type==="L"){o.contents&&(t=re(o.contents,0,o.size));continue}o.filename=t||(o.filenamePrefix?`${o.filenamePrefix}/${o.filename}`:o.filename),t="",yield o}}function xe(e,_){for(let n of yo(e))switch(n.type){case"":case"0":_.addFile(n.filename,n.contents);break;case"5":_.addDirectory(n.filename);break;default:throw new Error(`unsupported tar entry type: ${n.type}`)}}var fi="\x1B[92m",rt="\x1B[0m",br="\x1B[1;93m";var Ao=e=>Math.max(0,Math.min(1,Number.isFinite(e)?e:0));function hr(e){let _={clang:0,lld:0,memfs:0},n=()=>{e((_.clang+_.memfs)/2)},t=i=>({set(a){_[i]=Ao(a),n()}});return{clang:t("clang"),lld:t("lld"),memfs:t("memfs")}}var pi=(e,_)=>{let n=e?.toString().trim();if(!n)throw new Error(`${_} is required`);let t;try{t=new URL(n,typeof location<"u"?location.href:void 0)}catch{throw new Error(`${_} must be an absolute HTTP(S) URL`)}if(t.protocol!=="http:"&&t.protocol!=="https:")throw new Error(`${_} must use HTTP(S)`);return t},vr=e=>{let _=pi(e,"wasm-clang runtime base URL");return _.pathname.endsWith("/")||(_.pathname+="/"),_.hash="",_},V_=(e,_)=>new URL(_,vr(e)).toString(),Eo=(e,_)=>V_(e,_),Yn=e=>vr(e).toString();var st=e=>Eo(e,"runtime-manifest.v1.json");function Tr(e,_){let n=Yn(e),t=_?.compiler.sysroot.profiles;if(t&&(typeof t.c?.asset!="string"||!t.c.asset||typeof t.cppAddon?.asset!="string"||!t.cppAddon.asset))throw new TypeError("Clang sysroot profiles require both C and C++ add-on assets");return{manifest:st(n).toString(),memfs:V_(n,_?.compiler.memfs.asset||"bin/memfs.wasm.gz").toString(),clang:V_(n,_?.compiler.clang.asset||"bin/clang.wasm.gz").toString(),lld:V_(n,_?.compiler.lld.asset||"bin/lld.wasm.gz").toString(),sysroot:V_(n,_?.compiler.sysroot.asset||"bin/sysroot.tar.gz").toString(),...t?{cSysroot:V_(n,t.c.asset).toString(),cppAddon:V_(n,t.cppAddon.asset).toString()}:{},..._?.compiler.sysroot.printscanLongDouble?{printscanLongDouble:V_(n,_.compiler.sysroot.printscanLongDouble.asset).toString()}:{},clangdJs:V_(n,_?.clangd.js||"clangd/clangd.js").toString(),clangdWasm:V_(n,_?.clangd.wasm||"clangd/clangd.wasm.gz").toString()}}var I_=e=>e.replaceAll("\\","/").split("/").filter(_=>_&&_!=="."&&_!=="..").join("/"),on=e=>{let _=I_(e);return _.startsWith("workspace/")?_.slice(10):_};function hn(e,_){let n=I_(_||""),t="main",i=n&&/\.[A-Za-z0-9_-]+$/.test(n)?n:`${n||t}.${e==="C"?"c":e==="OBJC"?"m":"cc"}`,a=(i.split("/").pop()||i).replace(/\.[^.]+$/,"")||t;return{input:i,obj:`${a}.o`,wasm:`${a}.wasm`}}async function xr(e){let _=typeof e=="string"?new TextEncoder().encode(e):e instanceof Uint8Array?new Uint8Array(e):new Uint8Array(e),n=await globalThis.crypto.subtle.digest("SHA-256",_);return Array.from(new Uint8Array(n),t=>t.toString(16).padStart(2,"0")).join("")}async function ot(e,_,n){if(!n)throw new Error("LLDB debug compilation requires compiler provenance in the wasm-clang runtime manifest");let t=e.language||"CPP",i=on(e.activePath||"")||on(e.fileName||"")||void 0,{input:a}=hn(t,i),r=new Map;for(let l of e.workspaceFiles||[]){let o=on(l.path);o&&r.set(o,l.content)}r.set(a,e.code);let s=[...r.entries()].sort(([l],[o])=>l<o?-1:l>o?1:0);return{kind:"dwarf",sourceRoot:"/workspace",moduleSha256:await xr(_),files:await Promise.all(s.map(async([l,o])=>({path:`/workspace/${l}`,contentSha256:await xr(o)}))),compiler:n}}var lt=65536;function Qn(e){if(e!==void 0){if(!Number.isSafeInteger(e)||e<lt)throw new F_("Clang Wasm memory limit must allow at least one 64 KiB page");return Math.min(65536,Math.floor(e/lt))*lt}}function gr(e,_){let n=8,t=e.length,i=()=>{let a=0;for(let r=0;r<35;r+=7){if(n>=t)throw new F_("Truncated Wasm memory declaration");let s=e[n++];if(r===28&&s>15)throw new F_("Invalid Wasm section length or memory declaration");if(a+=(s&127)*2**r,!(s&128))return a}throw new F_("Invalid Wasm memory declaration")};for(;n<e.length;){let a=e[n++],r=i(),s=n+r;if(s>e.length)throw new F_("Truncated Wasm section");if(a===5){if(t=s,i()!==1||i()!==1)throw new F_("Clang memory limits require one bounded wasm32 memory");let l=i(),o=i();if(n!==t||l>o||o*lt>_)throw new F_(`Wasm memory declaration exceeds the ${_} byte limit`);return}n=s}throw new F_("Clang memory limits require a bounded memory declaration")}var bi="/include/bits/stdc++.h",_n="__wasm_idle_build/pch/stdc++.pch",So=[/^-[DU][A-Za-z_]/,/^-W/,/^-w$/,/^-f[a-z]/,/^-O([0-3sz]|fast)?$/,/^-std=/,/^-pedantic(-errors)?$/],wr=/precompiled (header|file)|PCH file|AST file/i;async function mt(e){try{return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",Uint8Array.from(e).buffer)),_=>_.toString(16).padStart(2,"0")).join("")}catch{return}}async function yr(e){let _=new TextEncoder,n=[...e].sort(([r],[s])=>r.localeCompare(s)).map(([r,s])=>({bytes:s,metadata:_.encode(JSON.stringify([r,s.byteLength])+`
`)})),t=n.reduce((r,s)=>r+s.metadata.byteLength+s.bytes.byteLength,0),i=new Uint8Array(t),a=0;for(let{metadata:r,bytes:s}of n)i.set(r,a),a+=r.byteLength,i.set(s,a),a+=s.byteLength;return mt(i)}function Ar(e){let _=e.replace(/^\uFEFF/,"");for(;;)if(_=_.replace(/^\s+/,""),_.startsWith("//")){let n=_.indexOf(`
`);if(n<0||_.slice(0,n).trimEnd().endsWith("\\"))return!1;_=_.slice(n+1)}else if(_.startsWith("/*")){let n=_.indexOf("*/",2);if(n<0)return!1;_=_.slice(n+2)}else break;return/^#[ \t]*include[ \t]*<bits\/stdc\+\+\.h>/.test(_)}function Er(e){return e.every(_=>typeof _=="string"&&_!=="-fsyntax-only"&&So.some(n=>n.test(_)))}var No="/lib/clang/8.0.1",Sr="lib/clang/8.0.1/lib/wasi",j_="__wasm_idle_build",hi=new WeakSet,vi="lib/wasm32-wasi/libc-printscan-long-double.a",Io=/\.(?:c|cc|cpp|cxx)$/,Nr=e=>e.some(_=>typeof _!="string"||_.startsWith("-x")||_.startsWith("@")),Ro=new Set(["-target","--target","-triple","-target-feature","-target-cpu","-target-abi","-mcpu","-march","-mattr","-mthread-model","-mllvm","-pthread","-fopenmp","-msimd128","-mno-simd128","-matomics","-mno-atomics","-mmemory64","-mno-memory64","-mshared-memory","-mno-shared-memory","-mmulti-memory","-mno-multi-memory"]),Lo=["-target=","--target=","-triple=","-target-feature=","-target-cpu=","-target-abi=","-mcpu=","-march=","-mattr=","-mthread-model=","-mllvm="],Ir=e=>{let _=encodeURIComponent(e),n="";for(let t=0;t<_.length;){let i=_[t];if(t+=1,i=="%"){let a=_.substring(t,t+=2);a&&(n+=String.fromCharCode(parseInt(a,16)))}else n+=i}return n};function Co(e,_){let n=[...e],t=_,i,a=!1;for(let r=0;r<e.length;r+=1){let s=e[r],l=e[r+1];if(t){n[r]=" ",s==="*"&&l==="/"&&(n[r+1]=" ",r+=1,t=!1);continue}if(i){n[r]=" ",a?a=!1:s==="\\"?a=!0:s===i&&(i=void 0);continue}if(s==="/"&&l==="*"){n[r]=" ",n[r+1]=" ",r+=1,t=!0;continue}if(s==="/"&&l==="/"){for(let o=r;o<e.length;o+=1)n[o]=" ";break}(s==='"'||s==="'")&&(n[r]=" ",i=s)}return{line:n.join(""),inBlockComment:t}}var Ti=class{constructor(_){x(this,"ready");x(this,"memfs");x(this,"stdout");x(this,"moduleCache");x(this,"moduleLoads");x(this,"showTiming");x(this,"log");x(this,"debug",!1);x(this,"debugBreakpoints",new Set);x(this,"debugPauseOnEntry",!1);x(this,"debugBuffer");x(this,"debugInterruptBuffer");x(this,"debugWatchBuffer");x(this,"debugWatchResultBuffer");x(this,"onDebugEvent");x(this,"debugVariableMetadata",{});x(this,"debugGlobalMetadata",[]);x(this,"debugFunctionMetadata",{});x(this,"lastBuildKey","");x(this,"precompiledHeaderPlan");x(this,"usedPrecompiledHeader",!1);x(this,"mountedPrecompiledHeaderKey","");x(this,"path");x(this,"assetUrls");x(this,"compilerConfig");x(this,"wasm");x(this,"lastArtifactPath","main.wasm");x(this,"traceStartedAt",0);x(this,"progress");x(this,"maxAssetBytes");x(this,"signal");x(this,"fetchImpl");x(this,"cppSysrootReady");x(this,"printscanLongDoubleReady");x(this,"persistentCache");x(this,"sysrootFingerprints",[]);x(this,"runtimeHeaders",new Map);x(this,"pchFingerprint");x(this,"workspaceOverridesSystemHeaders",!1);x(this,"simdCompatibility",!1);let n=_.maxAssetBytes??jn;if(!Number.isSafeInteger(n)||n<=0)throw new TypeError("Clang maxAssetBytes must be a positive safe integer");this.maxAssetBytes=n,this.signal=_.signal,this.fetchImpl=_.fetchImpl,this.persistentCache=_.persistentCache,this.moduleCache={},this.moduleLoads={},this.stdout=_.stdout||(()=>{}),this.showTiming=_.showTiming||!1,this.log=_.log||!1,this.path=_.runtimeBaseUrl.toString(),this.assetUrls=Tr(this.path,_.manifest),this.compilerConfig=_.manifest?.compiler,this.onDebugEvent=_.onDebugEvent,this.progress=hr(l=>_.progress?.(l)),this.memfs=new Te({stdout:this.stdout,stdin:_.stdin||(()=>""),moduleUrl:this.assetUrls.memfs,progress:this.progress.memfs,signal:_.signal,fetchImpl:_.fetchImpl,maxAssetBytes:n,trace:l=>this.trace(l),isTraceEnabled:()=>this.debug&&this.log});let t=this.getModule(this.assetUrls.clang,this.progress.clang,_.signal),i=this.assetUrls.cSysroot||this.assetUrls.sysroot,a=this.fetchImpl?Z_(i,void 0,n,_.signal,this.fetchImpl):_.signal?Z_(i,void 0,n,_.signal):Z_(i,void 0,n),s=Promise.all([this.memfs.ready,a]).then(async([,l])=>{this.sysrootFingerprints.push(mt(l)),await this.hostLogAsync(`Untarring ${i}`,Promise.resolve().then(()=>(_.signal?.throwIfAborted(),xe(l,this.memfs)))),_.signal?.throwIfAborted(),ar({readFile:m=>this.memfs.hasFile(m)?this.memfs.getFileContents(m.replace(/^\/+/,"")):null,mkdirTree:m=>this.memfs.addDirectory(m.replace(/^\/+/,"")),writeFile:(m,d)=>this.installRuntimeHeader(m,d)},this.compilerConfig?.provenance,this.compilerConfig?.resourceDir)&&(dr({mkdirTree:m=>this.memfs.addDirectory(m.replace(/^\/+/,"")),writeFile:(m,d)=>this.installRuntimeHeader(m,d)}),this.simdCompatibility=!0),this.assetUrls.cppAddon||await this.installCppHeaders()});this.ready=Promise.all([t,s]).then(()=>{})}ensureCppSysroot(){let _=this.assetUrls.cppAddon;if(!_)return this.ready;if(this.cppSysrootReady)return this.cppSysrootReady;let n=this.fetchImpl?Z_(_,void 0,this.maxAssetBytes,this.signal,this.fetchImpl):this.signal?Z_(_,void 0,this.maxAssetBytes,this.signal):Z_(_,void 0,this.maxAssetBytes),t=Promise.all([this.ready,n]).then(async([,i])=>{this.sysrootFingerprints.push(mt(i)),await this.hostLogAsync(`Untarring ${_}`,Promise.resolve().then(()=>(this.signal?.throwIfAborted(),xe(i,this.memfs)))),this.signal?.throwIfAborted(),await this.installCppHeaders()});return this.cppSysrootReady=t,n.catch(()=>{this.cppSysrootReady===t&&(this.cppSysrootReady=void 0)}),t}async installCppHeaders(){tr({addDirectory:_=>this.memfs.addDirectory(_),addFile:(_,n)=>this.installRuntimeHeader(_,new TextEncoder().encode(n))}),await ur({readFile:_=>this.memfs.hasFile(_)?this.memfs.getFileContents(_.replace(/^\/+/,"")):null,mkdirTree:_=>this.memfs.addDirectory(_.replace(/^\/+/,"")),writeFile:(_,n)=>this.installRuntimeHeader(_,n)},this.compilerConfig?.provenance)}installRuntimeHeader(_,n){let t=_.replace(/^\/+/,"");this.memfs.addFile(t,n),this.runtimeHeaders.set(t,Uint8Array.from(n))}async getCompilerFingerprint(){return Ia(await this.getModule(this.assetUrls.clang))}async getPrecompiledHeaderFingerprint(){return this.pchFingerprint||(this.pchFingerprint=Promise.all([this.getCompilerFingerprint(),Promise.all(this.sysrootFingerprints),yr(this.runtimeHeaders)]).then(([_,n,t])=>_&&t&&n.length&&n.every(i=>!!i)?{compiler:_,sysroot:n,runtimeHeaders:t}:void 0).catch(()=>{})),this.pchFingerprint}async prepareLongDoubleLinkArgs(){await this.ready;let _=this.assetUrls.printscanLongDouble;if(_&&!this.memfs.hasFile(vi)){if(!this.printscanLongDoubleReady){let n=(this.fetchImpl?Z_(_,void 0,this.maxAssetBytes,this.signal,this.fetchImpl):this.signal?Z_(_,void 0,this.maxAssetBytes,this.signal):Z_(_,void 0,this.maxAssetBytes)).then(t=>{this.signal?.throwIfAborted(),this.memfs.addFile(vi,t)});this.printscanLongDoubleReady=n,n.catch(()=>{this.printscanLongDoubleReady===n&&(this.printscanLongDoubleReady=void 0)})}await this.printscanLongDoubleReady}return this.memfs.hasFile(vi)?["-lc-printscan-long-double"]:[]}hostLog(_){if(!this.log)return;let n=`${br}>${rt} `;this.stdout(`${n}${_}`)}beginTrace(_){this.debug=_,this.traceStartedAt=Date.now()}trace(_){if(!this.debug||!this.log)return;let n=Date.now()-this.traceStartedAt;this.stdout(`\x1B[2m[debug +${n}ms] ${_}\x1B[0m
`)}async hostLogAsync(_,n){let t=+new Date;this.hostLog(`${_}...`);let i=await n,a=+new Date;return this.log&&this.stdout(" done."),this.showTiming&&this.stdout(` ${fi}(${a-t}ms)${rt}
`),this.log&&this.stdout(`
`),i}async getModule(_,n,t=this.signal){if(this.moduleCache[_])return this.moduleCache[_];let i=this.moduleLoads[_];if(i)return await i;let a=this.hostLogAsync(`Fetching and compiling ${_}`,this.fetchImpl?bn(_,n,t,this.maxAssetBytes,this.fetchImpl):bn(_,n,t,this.maxAssetBytes)).then(r=>(this.moduleCache[_]=r,delete this.moduleLoads[_],r),r=>{throw delete this.moduleLoads[_],r});return this.moduleLoads[_]=a,await a}addWorkspaceDirectories(_,n=new Set){let t=I_(_).split("/").slice(0,-1),i="";for(let a of t)i=i?`${i}/${a}`:a,n.has(i)||(this.memfs.addDirectory(i),n.add(i))}addWorkspaceFiles(_=[],n=""){let t=new Set,i=I_(n);for(let a of _){let r=I_(a.path);!r||r===i||((r.startsWith("include/")||r.startsWith("lib/clang/"))&&(this.workspaceOverridesSystemHeaders=!0),this.addWorkspaceDirectories(r,t),this.memfs.addFile(r,Ir(a.content)))}}async compile(_){let n=I_(_.input||"main.cc")||"main.cc",t=_.code,i=_.obj,a=_.language==="C"?"C":_.language==="OBJC"?"OBJC":"CPP",r=_.compileArgs??_.args??[],{languageArg:s,standardArg:l}=nr(a,_),o=L_(_),m=o==="trace",d=o==="lldb";if(d)for(let b of r){if(typeof b!="string")throw new TypeError("LLDB compile arguments must be strings");if(Ro.has(b)||Lo.some(y=>b.startsWith(y)))throw new Error(`LLDB compile argument ${JSON.stringify(b)} cannot change the WAMR debug target profile`)}let u=o==="none"?_.opt||"2":"0";if(m){let b=t.split(`
`),y=!1,g=b.map(O=>{let U=Co(O,y);return y=U.inBlockComment,U.line}),E=O=>{if(/^(?:do|else)$/.test(O))return!0;if(!/^(?:else\s+)?(?:if|for|while)\s*\(/.test(O))return!1;let U=O.indexOf("("),$=0;for(let a_=U;a_<O.length;a_+=1)if(O[a_]==="("&&($+=1),O[a_]===")"&&($-=1,$===0))return O.slice(a_+1).trim()==="";return!1},I=new Set,C=!1,G=!1;for(let O=0;O<g.length;O+=1){let U=g[O].trim();if(!U)continue;let $=G,a_=$;$&&U.includes(";")&&(G=!1),C&&(C=!1,U!=="{"&&(a_=!0,!U.includes(";")&&!U.includes("{")&&!E(U)&&(G=!0))),/^while\s*\(.*\)\s*;$/.test(U)&&(a_=!0),a_&&I.add(O),E(U)&&(C=!0)}let Y=0,B=0,L=0,W=1,F=1,X=new Map,N=new Map,Q=new Map,__,p_=new Map,b_="",h_=[],t_=!1;for(let O of b){let U=O;if(t_){let m_=U.indexOf("*/");if(m_===-1)continue;U=U.slice(m_+2),t_=!1}let $=U.indexOf("/*");if($!==-1){let m_=U.indexOf("*/",$+2);m_===-1?(t_=!0,U=U.slice(0,$)):U=U.slice(0,$)+U.slice(m_+2)}let a_=U.indexOf("//");a_!==-1&&(U=U.slice(0,a_));let P_=U.trim();if(!b_){let m_=P_.match(/^struct\s+([A-Za-z_]\w*)\s*\{$/);m_?.[1]&&(b_=m_[1],h_=[]);continue}if(P_==="};"){let m_=0,G_=1,mn=[];for(let an of h_){let K_=an.kind==="double"?8:an.kind==="bool"||an.kind==="char"?1:4;m_%K_!==0&&(m_+=K_-m_%K_),mn.push({name:an.name,kind:an.kind,offset:m_}),m_+=K_,G_=Math.max(G_,K_)}m_%G_!==0&&(m_+=G_-m_%G_),p_.set(b_,{fields:mn,size:Math.max(m_,1)}),b_="",h_=[];continue}let R=P_.match(/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+(.+);$/);if(R)for(let m_ of R[2].split(",")){let G_=m_.split("=")[0]?.trim()||"";if(!G_||/[*&\[]/.test(G_))continue;let mn=G_.match(/([A-Za-z_]\w*)\s*$/)?.[1];mn&&h_.push({name:mn,kind:R[1]})}}this.debugVariableMetadata={},this.debugGlobalMetadata=[],this.debugFunctionMetadata={};let E_=[],O_=a==="CPP"?'extern "C" ':"",tn=[`${O_}__attribute__((import_module("env"), import_name("__wasm_idle_debug_enter"))) void __wasm_idle_debug_enter(int functionId, int line);`,`${O_}__attribute__((import_module("env"), import_name("__wasm_idle_debug_leave"))) void __wasm_idle_debug_leave(int functionId);`,`${O_}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_num"))) void __wasm_idle_debug_value_num(int functionId, int slot, double value);`,`${O_}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_bool"))) void __wasm_idle_debug_value_bool(int functionId, int slot, int value);`,`${O_}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_addr"))) void __wasm_idle_debug_value_addr(int functionId, int slot, int value);`,`${O_}__attribute__((import_module("env"), import_name("__wasm_idle_debug_value_text"))) void __wasm_idle_debug_value_text(int functionId, int slot, const char* ptr, int len);`,`${O_}__attribute__((import_module("env"), import_name("__wasm_idle_debug_line"))) void __wasm_idle_debug_line(int functionId, int line);`],i_=a==="CPP"?["#include <cstdio>","#include <iostream>","#include <map>","#include <set>","#include <string>","#include <type_traits>","#include <vector>",...tn,"template <typename T>","static inline std::string __wasm_idle_debug_format_value(const T& value) {",'    if constexpr (std::is_same_v<T, bool>) return value ? "true" : "false";',`    else if constexpr (std::is_same_v<T, char>) return std::string("'") + value + "'";`,"    else if constexpr (std::is_same_v<T, signed char> || std::is_same_v<T, unsigned char>) return std::to_string((int)value);","    else if constexpr (std::is_integral_v<T> || std::is_floating_point_v<T>) return std::to_string(value);",'    else return "?";',"}","template <typename T>","static inline void __wasm_idle_debug_emit_vector(int functionId, int slot, const std::vector<T>& values) {",'    std::string text = "[";',"    int count = 0;","    for (const auto& value : values) {",'        if (count > 0) text += ", ";','        if (count >= 8) { text += "..."; break; }',"        text += __wasm_idle_debug_format_value(value);","        count += 1;","    }",'    text += "]";',"    __wasm_idle_debug_value_text(functionId, slot, text.c_str(), (int)text.size());","}","template <typename T>","static inline void __wasm_idle_debug_emit_set(int functionId, int slot, const std::set<T>& values) {",'    std::string text = "{";',"    int count = 0;","    for (const auto& value : values) {",'        if (count > 0) text += ", ";','        if (count >= 8) { text += "..."; break; }',"        text += __wasm_idle_debug_format_value(value);","        count += 1;","    }",'    text += "}";',"    __wasm_idle_debug_value_text(functionId, slot, text.c_str(), (int)text.size());","}","template <typename K, typename V>","static inline void __wasm_idle_debug_emit_map(int functionId, int slot, const std::map<K, V>& values) {",'    std::string text = "{";',"    int count = 0;","    for (const auto& entry : values) {",'        if (count > 0) text += ", ";','        if (count >= 8) { text += "..."; break; }',"        text += __wasm_idle_debug_format_value(entry.first);",'        text += ": ";',"        text += __wasm_idle_debug_format_value(entry.second);","        count += 1;","    }",'    text += "}";',"    __wasm_idle_debug_value_text(functionId, slot, text.c_str(), (int)text.size());","}"]:["#include <stdio.h>",...tn];for(let O=0;O<b.length;O+=1){let U=b[O],$=U.match(/^\s*/)?.[0]||"",a_=U,P_=g[O],R=P_.trim(),m_=I.has(O),G_=B>0&&Y>=B,mn=B===0&&Y===0&&!R.includes("(")&&!R.startsWith("#"),an=/^(while|if|for)\s*\(/.test(R)&&!R.includes("{"),K_=[],dn=[],Li=new Set,Rt=mn&&R.match(/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+(.+);$/);if(Rt){let d_=Rt[1]==="bool"?"bool":"number",x_=[],R_="",z=0;for(let k of Rt[2]){if(k===","&&z===0){R_.trim()&&x_.push(R_.trim()),R_="";continue}k==="{"&&(z+=1),k==="}"&&(z=Math.max(0,z-1)),R_+=k}R_.trim()&&x_.push(R_.trim());for(let k of x_){let[V]=k.split("="),r_=V?.trim()||"";if(/[*&\[]/.test(r_))continue;let K=r_.match(/([A-Za-z_]\w*)\s*$/)?.[1];if(!K)continue;let e_=F++;N.set(K,{slot:e_,kind:d_,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugGlobalMetadata=[...this.debugGlobalMetadata,{slot:e_,name:K,kind:d_,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}],E_.push(`${d_==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${e_}, ${K});`)}}let Cn=mn&&R.match(/^(?:const\s+)?([A-Za-z_]\w*)\s+([A-Za-z_]\w*)\s*\[(\d+)\]\s*(?:=.*)?;$/);if(Cn){let d_=p_.get(Cn[1]);if(d_){let x_=F++;this.debugGlobalMetadata=[...this.debugGlobalMetadata,{slot:x_,name:Cn[2],kind:"array",length:Number(Cn[3]),dimensions:[Number(Cn[3])],structFields:d_.fields,structSize:d_.size,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}],E_.push(`__wasm_idle_debug_value_addr(0, ${x_}, (int)((unsigned long long)(${Cn[2]})));`)}}if(G_&&!m_&&R&&!R.startsWith("#")&&R!=="{"&&R!=="}"&&!R.startsWith("else")&&!R.startsWith("case ")&&R!=="case"&&!R.startsWith("default")&&!R.startsWith("catch")&&!/^(public|private|protected)\s*:/.test(R)&&!R.endsWith(":")&&!R.includes(" else ")){K_.push(`${$}__wasm_idle_debug_line(${L}, ${O+1});`);let d_=R.match(/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+(.+);$/),x_=R.match(/^(?:const\s+)?(?:(?:std::)?(vector|set|map))\s*<(.+)>\s+([A-Za-z_]\w*)\s*(?:=.*)?;$/);if(x_&&L){let z=F++,k=x_[1],V=x_[3];Li.add(V),Q.set(V,{slot:z,container:k,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:z,name:V,kind:"text",fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}],dn.push(`${$}__wasm_idle_debug_emit_${k}(${L}, ${z}, ${V});`)}if(d_&&L){let z=d_[1]==="bool"?"bool":"number",k=[],V="",r_=0,K=0;for(let e_ of d_[2]){if(e_===","&&r_===0&&K===0){V.trim()&&k.push(V.trim()),V="";continue}e_==="("&&(r_+=1),e_===")"&&(r_=Math.max(0,r_-1)),e_==="{"&&(K+=1),e_==="}"&&(K=Math.max(0,K-1)),V+=e_}V.trim()&&k.push(V.trim());for(let e_ of k){let[u_]=e_.split("="),n_=u_?.trim()||"",g_=[];for(let v_ of n_.matchAll(/\[(\d+)\]/g))g_.push(Number(v_[1]));let w_=n_.match(/([A-Za-z_]\w*)\s*(?=\[\d+\])/);if(g_.length&&w_){let v_=F++;this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:v_,name:w_[1],kind:"array",elementKind:d_[1],length:g_[0],dimensions:g_,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}],dn.push(`${$}__wasm_idle_debug_value_addr(${L}, ${v_}, (int)((unsigned long long)(${w_[1]})));`);continue}if(/[*&]/.test(n_))continue;let k_=n_.match(/([A-Za-z_]\w*)\s*(?:\[[^\]]*\])?$/)?.[1];if(k_){if(!X.has(k_)){let v_=F++;X.set(k_,{slot:v_,kind:z,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:v_,name:k_,kind:z,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}]}if(e_.includes("=")){let v_=X.get(k_);v_&&dn.push(`${$}${v_.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${v_.slot}, ${k_});`)}}}}let R_=R.match(/^for\s*\(\s*(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(int|float|double|bool|char)\s+([A-Za-z_]\w*)\s*=/);if(R_&&L){let z=R_[1]==="bool"?"bool":"number",k=R_[2];if(!X.has(k)){let V=F++;X.set(k,{slot:V,kind:z,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:V,name:k,kind:z,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}]}}if(!an){for(let[z,k]of Q){if(Li.has(z))continue;let V=z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`\\b${V}\\b`).test(R)&&dn.push(`${$}__wasm_idle_debug_emit_${k.container}(${L}, ${k.slot}, ${z});`)}for(let[z,k]of X){let V=z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");R.startsWith("for")&&k.toLine===O+1||(new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${V}\\b`).test(R)||new RegExp(`\\b${V}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(R)||new RegExp(`&\\s*${V}\\b`).test(R)||new RegExp(`\\b(?:cin|std::cin)\\b[^;]*>>\\s*${V}\\b`).test(R))&&dn.push(`${$}${k.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${k.slot}, ${z});`)}for(let[z,k]of N){if(X.has(z)||Q.has(z))continue;let V=z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");(new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${V}\\b`).test(R)||new RegExp(`\\b${V}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(R)||new RegExp(`&\\s*${V}\\b`).test(R)||new RegExp(`\\b(?:cin|std::cin)\\b[^;]*>>\\s*${V}\\b`).test(R))&&dn.push(`${$}${k.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${k.slot}, ${z});`)}}/^return\b/.test(R)&&K_.push(`${$}__wasm_idle_debug_leave(${L});`)}if(B>0&&Y===B&&R==="}"&&K_.push(`${$}__wasm_idle_debug_leave(${L});`),G_&&L&&(/^(while|if)\s*\(/.test(R)||/^for\s*\(/.test(R))){let x_=R.match(/^(while|if|for)\b/)?.[1],R_=U.indexOf(x_||""),z=R_>=0?U.indexOf("(",R_):-1;if(z>=0){let k=-1,V=0;for(let r_=z;r_<U.length;r_+=1){let K=U[r_];if(K==="("&&(V+=1),K===")"&&(V-=1,V===0)){k=r_;break}for(let[e_,u_]of N){if(X.has(e_)||Q.has(e_))continue;let n_=e_.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");!an&&(new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${n_}\\b`).test(R)||new RegExp(`\\b${n_}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(R)||new RegExp(`&\\s*${n_}\\b`).test(R))&&dn.push(`${$}${u_.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${u_.slot}, ${e_});`)}}if(k>z){let r_=U.slice(z+1,k);if(x_==="for"){let K=[],e_="",u_=0;for(let n_ of r_){if(n_===";"&&u_===0){K.push(e_),e_="";continue}n_==="("&&(u_+=1),n_===")"&&(u_=Math.max(0,u_-1)),e_+=n_}if(K.push(e_),K.length===3&&K[1]?.trim()){let n_=K[0].trim(),g_=K[2].trim(),w_=[],k_=[],v_=[],Ci=/^(?:const\s+)?(?:(?:unsigned|signed)\s+)?(?:(?:short|long long|long)\s+)?(?:int|float|double|bool|char)\b/.test(n_);for(let[Fe,Mn]of X){let Mi=Fe.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Lt=new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${Mi}\\b|\\b${Mi}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`);!Ci&&Lt.test(n_)&&w_.push(`${Mn.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${Mn.slot}, ${Fe})`),Ci&&Lt.test(n_)&&k_.push(`${Mn.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${Mn.slot}, ${Fe})`),Lt.test(g_)&&v_.push(`${Mn.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${Mn.slot}, ${Fe})`)}let Jr=w_.length&&n_?`(${n_}, ${w_.join(", ")})`:K[0],Zr=v_.length&&g_?`(${g_}, ${v_.join(", ")})`:K[2];a_=U.slice(0,z+1)+`${Jr}; (${k_.length?`${k_.join(", ")}, `:""}__wasm_idle_debug_line(${L}, ${O+1}), (${K[1].trim()})); ${Zr}`+U.slice(k)}}else{let K=[];if(an){for(let[u_,n_]of X){let g_=u_.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${g_}\\b|\\b${g_}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(r_)&&K.push(`${n_.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${n_.slot}, ${u_})`)}for(let[u_,n_]of N){if(X.has(u_)||Q.has(u_))continue;let g_=u_.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[^\\w])(?:\\+\\+|--)\\s*${g_}\\b|\\b${g_}\\s*(?:(?:<<|>>|[+\\-*/%&|^])?=|\\+\\+|--)`).test(r_)&&K.push(`${n_.kind==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(0, ${n_.slot}, ${u_})`)}}let e_=K.length?`((${r_.trim()}) ? (${K.join(", ")}, 1) : (${K.join(", ")}, 0))`:`(${r_.trim()})`;a_=U.slice(0,z+1)+`(__wasm_idle_debug_line(${L}, ${O+1}), ${e_})`+U.slice(k)}}}}i_.push(...K_),i_.push(a_),i_.push(...dn);let Oe=B===0&&R.includes("(")&&R.includes(")")&&R.includes("{")&&(P_.match(/{/g)||[]).length>(P_.match(/}/g)||[]).length&&!/^(if|for|while|switch|catch)\b/.test(R)&&!/^(class|struct|namespace|enum|union)\b/.test(R),qr=B===0&&!!__&&R==="{";if(Y+=(P_.match(/{/g)||[]).length,Y-=(P_.match(/}/g)||[]).length,Oe||qr){B=Y,L=W++;let d_="anonymous",x_=a==="OBJC"&&Oe?R.match(/^([-+])\s*\([^)]*\)\s*([A-Za-z_]\w*)/):null;if(Oe?(d_=R.slice(0,R.indexOf("(")).trim().split(/\s+/).pop()||d_,x_&&(d_=`${x_[1]}${x_[2]}`)):__&&(d_=__.functionName||d_),this.debugFunctionMetadata[L]=d_,F=1,X=new Map,Q=new Map,i_.push(`${$}    __wasm_idle_debug_enter(${L}, ${O+1});`),d_==="main"){a==="CPP"&&(i_.push(`${$}    std::cout.setf(std::ios::unitbuf);`),i_.push(`${$}    std::cerr.setf(std::ios::unitbuf);`));let z=a==="CPP"?"nullptr":"NULL";i_.push(`${$}    setvbuf(stdout, ${z}, _IONBF, 0);`),i_.push(`${$}    setvbuf(stderr, ${z}, _IONBF, 0);`)}let R_=Oe?x_?"":R.slice(R.indexOf("(")+1,R.lastIndexOf(")")):__?.parameters||"";for(let z of R_.split(",").map(k=>k.trim()).filter(Boolean)){let k=z.split("=")[0]?.trim()||"",V=k.match(/^(?:const\s+)?(?:(?:std::)?(vector|set|map)\s*<.+>)\s*&?\s*([A-Za-z_]\w*)\s*$/);if(V){let w_=F++,k_=V[1],v_=V[2];Q.set(v_,{slot:w_,container:k_,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:w_,name:v_,kind:"text",fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}],i_.push(`${$}    __wasm_idle_debug_emit_${k_}(${L}, ${w_}, ${v_});`);continue}let r_=[];for(let w_ of k.matchAll(/\[(\d+)\]/g))r_.push(Number(w_[1]));let K=k.match(/([A-Za-z_]\w*)\s*(?=\[\d+\])/);if(r_.length&&K&&/\b(int|float|double|bool|char)\b/.test(k)){let w_=F++;this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:w_,name:K[1],kind:"array",elementKind:k.match(/\b(int|float|double|bool|char)\b/)?.[1]||"int",length:r_[0],dimensions:r_,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}],i_.push(`${$}    __wasm_idle_debug_value_addr(${L}, ${w_}, (int)((unsigned long long)(${K[1]})));`);continue}if(/[*&\[]/.test(k))continue;let e_=k.match(/([A-Za-z_]\w*)\s*(?:\[[^\]]*\])?\s*$/);if(!e_)continue;let u_=e_[1],n_=/\bbool\b/.test(k)?"bool":/\b(?:int|float|double|char|short|long)\b/.test(k)?"number":"";if(!n_)continue;let g_=F++;X.set(u_,{slot:g_,kind:n_,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}),this.debugVariableMetadata[L]=[...this.debugVariableMetadata[L]||[],{slot:g_,name:u_,kind:n_,fromLine:O+1,toLine:Number.MAX_SAFE_INTEGER}],i_.push(`${$}    ${n_==="bool"?"__wasm_idle_debug_value_bool":"__wasm_idle_debug_value_num"}(${L}, ${g_}, ${u_});`)}__=void 0}else B===0&&R.includes("(")&&R.includes(")")&&!R.includes("{")&&!R.endsWith(";")&&!/^(if|for|while|switch|catch)\b/.test(R)&&!/^(class|struct|namespace|enum|union)\b/.test(R)?__={functionName:R.slice(0,R.indexOf("(")).trim().split(/\s+/).pop()||"anonymous",parameters:R.slice(R.indexOf("(")+1,R.lastIndexOf(")"))}:R&&R!=="{"&&(__=void 0);B>0&&Y<B&&(B=0,L=0,X=new Map,Q=new Map)}E_.length&&(a==="CPP"?(i_.push("struct __wasm_idle_debug_globals_init {"),i_.push("    __wasm_idle_debug_globals_init() {"),i_.push(...E_.map(O=>`        ${O}`)),i_.push("    }"),i_.push("} __wasm_idle_debug_globals_init_instance;")):(i_.push("__attribute__((constructor)) static void __wasm_idle_debug_globals_init(void) {"),i_.push(...E_.map(O=>`    ${O}`)),i_.push("}"))),t=i_.join(`
`)}else this.debugVariableMetadata={},this.debugGlobalMetadata=[],this.debugFunctionMetadata={};typeof _.transformSource=="function"&&(t=_.transformSource(t));let c=Ir(t);await(a!=="C"||Nr(r)?this.ensureCppSysroot():this.ready),(n.startsWith("include/")||n.startsWith("lib/clang/"))&&(this.workspaceOverridesSystemHeaders=!0),_.sourceAlreadyMounted||(this.addWorkspaceFiles(_.workspaceFiles,n),this.addWorkspaceDirectories(n),this.memfs.addFile(n,c)),this.memfs.addFile(i,new Uint8Array(0));let h=await this.getModule(this.assetUrls.clang),p=this.compilerConfig?.resourceDir||No,w=er(a,"",p).flatMap(b=>["-internal-isystem",b]),S=(b,y,g,E,I=[])=>["-cc1","-triple",Ja,b,"-disable-free","-isysroot","/","-resource-dir",p,...this.simdCompatibility&&!d?mr():[],...w,...a==="OBJC"?["-I."]:[],"-ferror-limit","19","-fcolor-diagnostics",...d?[]:["-O"+u],"-o",y,l,"-x",g,...a==="OBJC"?Za:[],...I,E,...r,...d?["-O0","-debug-info-kind=standalone","-dwarf-version=4","-debugger-tuning=gdb","-fdebug-compilation-dir=/workspace"]:[]],A=a==="CPP"&&!m&&typeof _.transformSource!="function"&&Ar(t)&&Er(r)&&!this.workspaceOverridesSystemHeaders?await(async()=>{let b=S("-emit-pch",`/${_n}`,"c++-header",bi),y=await this.getPrecompiledHeaderFingerprint();if(!y)return;let g=JSON.stringify({format:"clang-pch-v2",args:b,...y}),E=Ut(Ge(this.persistentCache,_.persistentCache));return{key:g,args:b,cache:E}})():void 0;if(A&&(this.precompiledHeaderPlan=A),_.planPrecompiledHeaderOnly)return null;let f=_.precompiledHeader;if(A&&f?.key!==A.key){let b=await A.cache.read(A.key,this.signal).catch(()=>{});this.signal?.throwIfAborted(),b?.byteLength&&(f={key:A.key,bytes:b})}if(A&&f?.key===A.key){this.mountedPrecompiledHeaderKey!==f.key&&(this.addWorkspaceDirectories(_n),this.memfs.addFile(_n,f.bytes),this.mountedPrecompiledHeaderKey=f.key),this.trace(`compile ${n} -> ${i} with ${_n}`);let b=[],y=0,g=new TextEncoder,E=this.memfs.stdout;this.memfs.stdout=C=>{if(!C)return;let G=y+g.encode(C).byteLength;_.onBufferedOutput?.(G),y=G,b.push(C)};let I=!1;try{let C=await this.run(h,!0,"clang",...S("-emit-obj",i,s,n,["-include-pch",`/${_n}`]));return this.usedPrecompiledHeader=!0,C}catch(C){if(I=wr.test(b.join("")),!I){if(Uint8Array.from(this.memfs.getFileContents(i)).length>0)return this.usedPrecompiledHeader=!0,null;throw C}await A.cache.remove(A.key,this.signal).catch(()=>{}),this.trace(`precompiled header rejected; compiling ${n} without it`),this.memfs.addFile(i,new Uint8Array(0))}finally{if(this.memfs.stdout=E,!I)for(let C of b)E(C)}}let T=S("-emit-obj",i,s,n);this.trace(`compile ${n} -> ${i}`);try{return await this.run(h,!0,"clang",...T)}catch(b){if(Uint8Array.from(this.memfs.getFileContents(i)).length>0)return this.trace(`recover ${i} after clang output stream exit`),null;throw b}}async compileBitcodeArtifact(_,n={}){if(hi.has(this))throw new Error("Concurrent LLVM bitcode compilation on one Clang runtime is unsupported");hi.add(this);try{let t=_ instanceof Uint8Array?[_]:[..._];if(!t.length||t.some(c=>!(c instanceof Uint8Array)||!c.byteLength))throw new TypeError("At least one nonempty LLVM bitcode module is required");let i=Qn(n.maxWasmMemoryBytes),a=n.stackSizeBytes===void 0?1024*1024:n.stackSizeBytes;if(!Number.isSafeInteger(a)||a<=0||a>=2**32||a%16!==0)throw new TypeError("Clang Wasm stack size must be a positive wasm32 byte count aligned to 16 bytes");if(i!==void 0&&a>i)throw new RangeError("Clang Wasm stack size exceeds the Wasm memory limit");await this.ready;let r=await this.getModule(this.assetUrls.clang),s=`${j_}/bitcode`;this.memfs.addDirectory(j_),this.memfs.addDirectory(s);let l=[];for(let[c,v]of t.entries()){let h=`${s}/${c}.bc`,p=`${s}/${c}.o`;if(this.memfs.addFile(h,new Uint8Array(v)),this.memfs.addFile(p,new Uint8Array),await this.run(r,this.log,"clang","-cc1","-triple","wasm32-unknown-wasip1","-emit-obj","-x","ir","-O0",h,"-o",p),!this.memfs.getFileContents(p).byteLength)throw new Error("Clang did not emit an object from LLVM bitcode");l.push(p)}let o=`${s}/output.wasm`;this.memfs.addFile(o,new Uint8Array);let m=await this.getModule(this.assetUrls.lld),d=this.compilerConfig?.compilerRuntimeLibDir||Sr;await this.run(m,this.log,"wasm-ld","--export-dynamic","-z",`stack-size=${a}`,...l,"-Llib/wasm32-wasi","-lc","-lm",`-L${d}`,"-lclang_rt.builtins-wasm32",...i===void 0?[]:[`--max-memory=${i}`],"-o",o);let u=Uint8Array.from(this.memfs.getFileContents(o));if(!u.byteLength)throw new Error("LLD did not emit a WASI module from LLVM bitcode");return u}finally{hi.delete(this)}}async link(_,n,t="none",i="CPP"){let a=typeof _=="string"?[_]:[..._];if(a.length===0||a.some(c=>typeof c!="string"||c.length===0))throw new TypeError("At least one nonempty object file is required for linking");let r=typeof t=="boolean"?L_({debug:t}):L_({debugMode:t}),s=1024*1024,l="lib/wasm32-wasi",o=this.compilerConfig?.compilerRuntimeLibDir||Sr,m=`${l}/crt1.o`;await(i==="C"?this.ready:this.ensureCppSysroot());let d=await this.prepareLongDoubleLinkArgs(),u=await this.getModule(this.assetUrls.lld);return this.trace(`link ${a.join(", ")} -> ${n}`),await this.run(u,this.log,"wasm-ld","--export-dynamic",...r==="trace"?["--allow-undefined"]:[],"-z",`stack-size=${s}`,`-L${l}/noeh`,`-L${l}`,m,...a,...d,"-lc",...i==="C"?[]:["-lc++","-lc++abi"],"-lm",`-L${o}`,"-lclang_rt.builtins-wasm32","-o",n)}async run(_,n,...t){return this.runWithOptions(_,n,t)}async runWithOptions(_,n,t,i={},a,r){this.memfs.out=n,this.hostLog(`${t.join(" ")}
`),this.trace(`run ${t.join(" ")}`);let s=+new Date,l=new ve(_,this.memfs,t[0],...t.slice(1),{extraImports:a,instanceRef:r});l.environ={...l.environ,...i},l.trace=u=>this.trace(u),l.isTraceEnabled=()=>this.debug&&this.log,l.debugSession={buffer:this.debugBuffer,interruptBuffer:this.debugInterruptBuffer,watchBuffer:this.debugWatchBuffer,watchResultBuffer:this.debugWatchResultBuffer,breakpoints:new Set(this.debugBreakpoints),breakpointVersion:0,pauseOnEntry:this.debugPauseOnEntry,stepArmed:this.debugPauseOnEntry,nextLineArmed:!1,stepOutArmed:!1,callDepth:0,stepOutDepth:0,currentFunctionId:0,currentLine:0,resumeSkipActive:!1,resumeSkipFunctionId:0,resumeSkipLine:0,nextLineFunctionId:0,nextLineLine:0,variableMetadata:this.debugVariableMetadata,globalVariableMetadata:this.debugGlobalMetadata,functionMetadata:this.debugFunctionMetadata,frames:[],globalValues:new Map,onPause:u=>this.onDebugEvent?.(u)};let o=+new Date,m=await l.run(),d=+new Date;return this.log&&this.stdout(`
`),this.showTiming&&this.stdout(`${fi}(${s-o}ms/${d-o}ms)${rt}
`),m?l:null}async compileLink(_,n={}){let{language:t="CPP",fileName:i,activePath:a,workspaceFiles:r=[],args:s=[],compileArgs:l=s,debugMode:o,debug:m,breakpoints:d=[],pauseOnEntry:u=!1,cppVersion:c,cVersion:v,debugBuffer:h,interruptBuffer:p,watchBuffer:w,watchResultBuffer:S,precompiledHeader:A}=n,f=L_({debugMode:o,debug:m}),T=f==="lldb"?on:I_,b=r.map(N=>({...N,path:T(N.path)})),y=T(a||"")||T(i||"")||void 0,{input:g,obj:E,wasm:I}=hn(t,y),C=new Map;for(let N of b)if(N.path){if(N.path===j_||N.path.startsWith(`${j_}/`))throw new Error(`Workspace path uses reserved build namespace ${JSON.stringify(j_)}`);C.set(N.path,N)}if(g===j_||g.startsWith(`${j_}/`))throw new Error(`Active source path uses reserved build namespace ${JSON.stringify(j_)}`);C.set(g,{path:g,content:_});let G=[...C.values()].sort((N,Q)=>N.path<Q.path?-1:N.path>Q.path?1:0),Y=G.filter(N=>N.path===g||Io.test(N.path)),L=t==="C"&&Y.every(N=>N.path===g||N.path.endsWith(".c"))&&!Nr(l)?["C"]:[],W=f==="trace";if(W&&Y.length>1)throw new Error("Trace debug mode does not support multiple C/C++ translation units");this.beginTrace(W),this.debugBreakpoints=new Set(W?d:[]),this.debugPauseOnEntry=W&&u,this.debugBuffer=h,this.debugInterruptBuffer=p,this.debugWatchBuffer=w,this.debugWatchResultBuffer=S,this.lastArtifactPath=I;let F=JSON.stringify({code:_,input:g,wasm:I,language:t,compileArgs:l,workspaceFiles:G,cppVersion:c,cVersion:v,debugMode:f});if(this.lastBuildKey===F)return this.trace(`reuse ${I}`),this.wasm;if(this.precompiledHeaderPlan=void 0,this.usedPrecompiledHeader=!1,this.getModule(this.assetUrls.lld).catch(()=>{}),Y.length===1)await this.compile({input:g,code:_,obj:E,language:t,compileArgs:l,workspaceFiles:b,cppVersion:c,cVersion:v,debugMode:f,precompiledHeader:A,persistentCache:n.persistentCache}),await this.link(E,I,f,...L);else{await this.ready,this.addWorkspaceFiles(G),this.memfs.addDirectory(j_),this.memfs.addDirectory(`${j_}/objects`);let N=[];for(let[Q,__]of Y.entries()){let p_=`${j_}/objects/${Q.toString().padStart(4,"0")}.o`;N.push(p_),await this.compile({input:__.path,code:__.content,obj:p_,language:__.path===g?t:__.path.endsWith(".c")?"C":"CPP",compileArgs:l,workspaceFiles:[],cppVersion:c,cVersion:v,debugMode:f,precompiledHeader:A,persistentCache:n.persistentCache,sourceAlreadyMounted:!0})}await this.link(N,I,f,...L)}this.lastBuildKey=F;let X=Uint8Array.from(this.memfs.getFileContents(I));return this.wasm=await this.hostLogAsync(`Compiling ${I}`,WebAssembly.compile(X))}async buildPrecompiledHeader(){let _=this.precompiledHeaderPlan;if(!_)return;await this.ensureCppSysroot(),this.addWorkspaceDirectories(_n),this.memfs.addFile(_n,new Uint8Array(0)),this.mountedPrecompiledHeaderKey="";let n=await this.getModule(this.assetUrls.clang);this.trace(`precompile ${bi} -> ${_n}`);try{await this.run(n,!1,"clang",..._.args)}catch{}let t=Uint8Array.from(this.memfs.getFileContents(_n));if(t.length!==0)return this.mountedPrecompiledHeaderKey=_.key,await _.cache?.write(_.key,t,this.signal).catch(()=>!1),this.signal?.throwIfAborted(),{key:_.key,bytes:t}}async buildPrecompiledHeaderFor(_,n={}){let{language:t="CPP",fileName:i,activePath:a,args:r=[],compileArgs:s=r}=n,l=L_(n),o=l==="lldb"?on:I_,m=o(a||"")||o(i||"")||void 0,{input:d,obj:u}=hn(t,m);return this.precompiledHeaderPlan=void 0,await this.compile({input:d,code:_,obj:u,language:t,compileArgs:s,cppVersion:n.cppVersion,cVersion:n.cVersion,debugMode:l,planPrecompiledHeaderOnly:!0,persistentCache:n.persistentCache}),this.buildPrecompiledHeader()}async compileArtifact(_,n={}){let t=L_(n),i=await this.compileLink(_,n),a=Uint8Array.from(this.memfs.getFileContents(this.lastArtifactPath)),r=n.language||"CPP",s={code:_,language:r,fileName:n.fileName,activePath:n.activePath,workspaceFiles:n.workspaceFiles,compileArgs:n.compileArgs,cppVersion:n.cppVersion,cVersion:n.cVersion,debugMode:t};return{bytes:a,wasm:i,target:"wasm32-wasi",format:"wasi-core-wasm",fileName:this.lastArtifactPath,language:r,...t==="trace"?{debugMetadata:{variableMetadata:this.debugVariableMetadata,globalVariableMetadata:this.debugGlobalMetadata,functionMetadata:this.debugFunctionMetadata}}:{},...t==="lldb"?{debug:await ot(s,a,this.compilerConfig?.provenance)}:{}}}async compileLinkRun(_,n={}){let{language:t="CPP",fileName:i,activePath:a,workspaceFiles:r=[],args:s=[],compileArgs:l=s,programArgs:o=[],debugMode:m,debug:d,breakpoints:u=[],pauseOnEntry:c=!1,cppVersion:v,cVersion:h,debugBuffer:p,interruptBuffer:w,watchBuffer:S,watchResultBuffer:A,precompiledHeader:f}=n,T=L_({debugMode:m,debug:d});if(T==="lldb")throw new Error("compileLinkRun() cannot execute LLDB artifacts in the browser WebAssembly engine. Use compileArtifact() and @wasm-idle/llvm-core/debug instead.");this.debug=T==="trace";let b=I_(a||"")||I_(i||"")||void 0,{wasm:y}=hn(t,b);return await this.run(await this.compileLink(_,{language:t,fileName:i,activePath:a,workspaceFiles:r,compileArgs:l,debugMode:T,breakpoints:u,pauseOnEntry:c,cppVersion:v,cVersion:h,debugBuffer:p,interruptBuffer:w,watchBuffer:S,watchResultBuffer:A,...f?{precompiledHeader:f}:{},persistentCache:n.persistentCache}),!0,y,...o)}};var Rr=Ti;var Cr="__wasm_idle_build/incremental",dt=`${Cr}/current.ii`,ct=`${Cr}/current.d`,Mo=1024*1024,Do=new TextEncoder,Lr=new TextDecoder("utf-8",{fatal:!0});function ut(e,_,n){let t=e??_;if(!Number.isSafeInteger(t)||t<=0)throw new TypeError(`${n} must be a positive safe integer`);return t}async function xi(e){let _=await crypto.subtle.digest("SHA-256",Uint8Array.from(e).buffer);return Array.from(new Uint8Array(_),n=>n.toString(16).padStart(2,"0")).join("")}function Oo(e){if(!e.startsWith("wasm_idle_cache:"))return;let _=e.slice(16),n=[],t="",i=()=>{t&&n.push(t),t=""};for(let a=0;a<_.length;a+=1){let r=_[a];if(r==="\\"){let s=_[++a];if(s===void 0)return;if(s===`
`){i();continue}if(s==="\r"&&_[a+1]===`
`){a+=1,i();continue}if(![" ","	","#","\\",":"].includes(s))return;t+=s}else if(r==="$"){if(_[++a]!=="$")return;t+="$"}else{if(r===":"||r==="#"||r==="\0")return;/\s/.test(r)?i():t+=r}}return i(),n.length?[...new Set(n)].sort():void 0}function Mr(e){return e.every(_=>typeof _=="string"&&(/^-O[0-3sz]$/.test(_)||/^-std=[a-zA-Z0-9+]+$/.test(_)||/^-[DU][A-Za-z_][^\r\n]*$/.test(_)||/^-I[^\r\n]+$/.test(_)||/^-W[a-zA-Z0-9=-]+$/.test(_)||["-w","-pedantic","-pedantic-errors","-ffreestanding","-fno-builtin","-fexceptions","-fno-exceptions","-frtti","-fno-rtti","-funsigned-char","-fsigned-char","-fwrapv","-fno-strict-aliasing"].includes(_)))}var ft=class{constructor(_={}){x(this,"entries",new Map);x(this,"maxEntries");x(this,"maxBytes");x(this,"maxPreprocessedBytes");x(this,"maxDependencyBytes");x(this,"bytes",0);x(this,"active",!1);x(this,"generation",0);x(this,"counters",{hits:0,misses:0,bypasses:0,preprocesses:0});this.maxEntries=ut(_.maxEntries,16,"maxEntries"),this.maxBytes=ut(_.maxBytes,32*1024*1024,"maxBytes"),this.maxPreprocessedBytes=ut(_.maxPreprocessedBytes,16*1024*1024,"maxPreprocessedBytes"),this.maxDependencyBytes=ut(_.maxDependencyBytes,64*1024*1024,"maxDependencyBytes")}get stats(){return{...this.counters,entries:this.entries.size,accountedBytes:this.bytes}}clear(){this.generation+=1,this.entries.clear(),this.bytes=0}async compile(_,n,t,i,a){if(this.active)throw new Error("Concurrent incremental compilations are unsupported");this.active=!0;try{return _.signal?.throwIfAborted(),await this.compileExclusive(_,n,t,i,a)}finally{try{_.write(dt,new Uint8Array)}catch{}try{_.write(ct,new Uint8Array)}catch{}this.active=!1}}async compileExclusive(_,n,t,i,a){let r=this.generation,s=async()=>(await _.execute([...n],!0)).value,l=n.indexOf("-emit-obj"),o=n.indexOf("-o");if(l<0||o<0||n[o+1]!==i||n.includes("-include-pch")||!n.includes(t))return this.counters.bypasses+=1,s();let m;try{let c=[...n];c[l]="-E",c[o+1]=dt,c.push("-C","-dependency-file",ct,"-MT","wasm_idle_cache","-sys-header-deps","-Werror=date-time"),_.write(dt,new Uint8Array),_.write(ct,new Uint8Array),this.counters.preprocesses+=1;let v=await _.execute(c,!1);if(!v.cacheable)throw new Error("Preprocessing was not a complete successful run");let h=_.read(dt);if(h.byteLength>this.maxPreprocessedBytes)throw new Error("Preprocessed input exceeds cache budget");let p=await xi(h),w=_.read(ct);if(w.byteLength>Mo)throw new Error("Dependency file exceeds cache budget");let S=Oo(Lr.decode(w));if(!S)throw new Error("Cannot safely parse compiler dependencies");let A=0,f=[];for(let b of[...new Set([t,...S])].sort()){_.signal?.throwIfAborted();let y=_.read(b);if(A+=y.byteLength,A>this.maxDependencyBytes)throw new Error("Dependencies exceed cache budget");let g=Lr.decode(y);if(/\b__(?:DATE|TIME|TIMESTAMP)__\b|date-time/.test(g))throw new Error("Time-dependent preprocessing is not cacheable");f.push([b,await xi(y)])}let T=[...n];T[o+1]="<object-output>",m=await xi(Do.encode(JSON.stringify({format:"clang-object-v1",compilerIdentity:a,args:T,input:t,preprocessedHash:p,dependencies:f,preprocessingDiagnostics:v.diagnostics})))}catch{return _.signal?.throwIfAborted(),this.counters.bypasses+=1,s()}_.signal?.throwIfAborted();let d=this.entries.get(m);if(d)return this.entries.delete(m),this.entries.set(m,d),_.write(i,Uint8Array.from(d.bytes)),_.replay(d.diagnostics),this.counters.hits+=1,null;this.counters.misses+=1;let u=await _.execute([...n],!0);if(_.signal?.throwIfAborted(),u.cacheable&&u.value===null&&r===this.generation){let c=_.read(i),v=c.byteLength+2*u.diagnostics.length+2*m.length;if(c.byteLength>=8&&c[0]===0&&c[1]===97&&c[2]===115&&c[3]===109&&v<=this.maxBytes){for(;this.entries.size>=this.maxEntries||this.bytes+v>this.maxBytes;){let h=this.entries.keys().next().value;if(h===void 0)break;this.bytes-=this.entries.get(h).cost,this.entries.delete(h)}this.entries.set(m,{bytes:Uint8Array.from(c),diagnostics:u.diagnostics,cost:v}),this.bytes+=v}}return u.value}};var ge=class extends Rr{constructor(n){let t=new ft(n.objectCache);super(n);x(this,"objectCacheEnabled",!0);x(this,"objects");x(this,"cacheSignal");x(this,"compilerIds",new WeakMap);x(this,"nextCompilerId",0);x(this,"compilation");this.objects=t,this.cacheSignal=n.signal}get incrementalCompilationStats(){return this.objects.stats}clearIncrementalCompilationCache(){this.objects.clear()}async compileLink(n,t={}){try{return await super.compileLink(n,t)}catch(i){throw this.lastBuildKey="",this.wasm=void 0,i}}async compile(n){if(this.compilation)throw new Error("Concurrent Clang compilations are unsupported");let t=I_(n.input||"main.cc")||"main.cc",i=n.compileArgs??n.args??[],a=[t,n.obj,...(n.workspaceFiles??[]).map(s=>I_(s.path))].every(s=>typeof s=="string"&&!s.replace(/^\/+/,"").startsWith("__wasm_idle_build/incremental"));if(!(this.objectCacheEnabled&&L_(n)==="none"&&(n.language===void 0||n.language==="C"||n.language==="CPP")&&typeof n.transformSource!="function"&&!n.planPrecompiledHeaderOnly&&Array.isArray(i)&&Mr(i)&&a))return super.compile(n);this.compilation={input:t,object:n.obj};try{return await super.compile(n)}finally{this.compilation=void 0}}async run(n,t,...i){let a=this.compilation;if(!a||!t||i[0]!=="clang"||!i.includes("-emit-obj")||i.includes("-include-pch"))return super.run(n,t,...i);let r=this.compilerIds.get(n);return r||(r=`runtime-module-${++this.nextCompilerId}`,this.compilerIds.set(n,r)),this.objects.compile({signal:this.cacheSignal,read:s=>this.memfs.getFileContents(s.replace(/^\/+/,"")),write:(s,l)=>{this.addWorkspaceDirectories(s),this.memfs.setFile(s,l)},replay:s=>{this.memfs.out=t,t&&s&&this.memfs.stdout(s)},execute:async(s,l)=>{let o=this.memfs.stdout,m="",d=!0;this.memfs.stdout=u=>{m.length+u.length<=128*1024?m+=u:d=!1,l&&o(u)};try{let u=await super.run(n,!0,...s);return{value:u,diagnostics:m,cacheable:d&&u===null}}finally{this.memfs.stdout=o}}},i,a.input,a.object,r)}};var Kn="__wasm_idle_build",Fo=/\.(?:c|cc|cpp|cxx)$/,qn=class extends ge{constructor(){super(...arguments);x(this,"objectCacheEnabled",!1);x(this,"cacheTranslationUnits","auto");x(this,"exportDynamic",!1);x(this,"minimalLink",!1);x(this,"memoryLimit");x(this,"linked");x(this,"mountedWorkspace",new Map)}invalidateArtifact(){this.linked=void 0,this.lastBuildKey="",this.wasm=void 0}async compile(n){return this.invalidateArtifact(),super.compile(n)}async link(n,t,i="none",a="CPP"){this.invalidateArtifact();let r=typeof i=="boolean"?L_({debug:i}):L_({debugMode:i}),s=this.minimalLink;this.minimalLink=r==="none"&&!this.exportDynamic;try{return await super.link(n,t,r,a)}finally{this.minimalLink=s}}async run(n,t,...i){return this.minimalLink&&i[0]==="wasm-ld"&&(i=i.filter(a=>a!=="--export-dynamic")),this.memoryLimit!==void 0&&i[0]==="wasm-ld"&&(i=[...i,`--max-memory=${this.memoryLimit}`]),super.run(n,t,...i)}async buildBytes(n,t){try{return await this.buildLinkedBytes(n,t)}catch(i){throw this.invalidateArtifact(),i}}async buildLinkedBytes(n,t){let{language:i="CPP",fileName:a,activePath:r,workspaceFiles:s=[],args:l=[],compileArgs:o=l,cppVersion:m,cVersion:d,breakpoints:u=[],pauseOnEntry:c=!1,debugBuffer:v,interruptBuffer:h,watchBuffer:p,watchResultBuffer:w,precompiledHeader:S}=t,A=L_(t),f=Qn(t.maxWasmMemoryBytes),T=A==="lldb"?on:I_,b=s.map(N=>({...N,path:T(N.path)})),{input:y,obj:g,wasm:E}=hn(i,T(r||"")||T(a||"")||void 0),I=new Map;for(let N of[...b,{path:y,content:n}])if(N.path){if(N.path===Kn||N.path.startsWith(`${Kn}/`))throw new Error(`Workspace path uses reserved build namespace ${JSON.stringify(Kn)}`);I.set(N.path,N)}let C=[...I.values()].sort((N,Q)=>N.path<Q.path?-1:N.path>Q.path?1:0),G=C.filter(N=>N.path===y||Fo.test(N.path));if(A==="trace"&&G.length>1)throw new Error("Trace debug mode does not support multiple C/C++ translation units");let Y=i==="C"&&G.every(N=>N.path===y||N.path.endsWith(".c"))&&!o.some(N=>typeof N!="string"||N.startsWith("-x")||N.startsWith("@"));this.beginTrace(A==="trace"),this.debugBreakpoints=new Set(A==="trace"?u:[]),this.debugPauseOnEntry=A==="trace"&&c,this.debugBuffer=v,this.debugInterruptBuffer=h,this.debugWatchBuffer=p,this.debugWatchResultBuffer=w;let B=JSON.stringify({code:n,input:y,wasm:E,language:i,compileArgs:o,workspaceFiles:C,cppVersion:m,cVersion:d,debugMode:A,memoryLimit:f,exportDynamic:this.exportDynamic});if(this.linked?.key===B)return this.lastArtifactPath=E,this.trace(`reuse ${E}`),this.linked;this.invalidateArtifact(),this.precompiledHeaderPlan=void 0,this.usedPrecompiledHeader=!1,this.getModule(this.assetUrls.lld).catch(()=>{});let L={compileArgs:o,cppVersion:m,cVersion:d,debugMode:A,precompiledHeader:S,persistentCache:t.persistentCache,onBufferedOutput:t.onBufferedOutput},W=[];await this.ready;for(let[N,Q]of this.mountedWorkspace)I.has(N)||(Q?this.memfs.setFile(N,Q):this.memfs.removeFile(N),this.mountedWorkspace.delete(N));for(let{path:N}of C)this.mountedWorkspace.has(N)||this.mountedWorkspace.set(N,this.memfs.hasFile(N)?Uint8Array.from(this.memfs.getFileContents(N)):void 0);if(G.length===1)await this.compile({...L,input:y,code:n,obj:g,language:i,workspaceFiles:b}),W.push(g);else{this.addWorkspaceFiles(C),this.memfs.addDirectory(Kn),this.memfs.addDirectory(`${Kn}/objects`);try{for(let[N,Q]of G.entries()){let __=Q.path===y?i:Q.path.endsWith(".c")?"C":"CPP";this.objectCacheEnabled=A==="none"&&(this.cacheTranslationUnits===!0||this.cacheTranslationUnits==="auto"&&__==="CPP");let p_=`${Kn}/objects/${N.toString().padStart(4,"0")}.o`;await this.compile({...L,input:Q.path,code:Q.content,obj:p_,language:__,workspaceFiles:[],sourceAlreadyMounted:!0}),W.push(p_)}}finally{this.objectCacheEnabled=!1}}this.memfs.addFile(E,new Uint8Array(0));let F=this.memoryLimit;this.memoryLimit=f;try{await this.link(W,E,A,Y?"C":"CPP")}finally{this.memoryLimit=F}let X=Uint8Array.from(this.memfs.getFileContents(E));if(!X.length)throw new Error(`Linker produced an empty artifact: ${E}`);return this.lastArtifactPath=E,this.lastBuildKey=B,this.linked={key:B,bytes:X}}async compileLink(n,t={}){let i=await this.buildBytes(n,t);try{return i.module||(i.module=await this.hostLogAsync(`Compiling ${this.lastArtifactPath}`,WebAssembly.compile(Uint8Array.from(i.bytes)))),this.wasm=i.module,i.module}catch(a){throw this.invalidateArtifact(),a}}async compileArtifact(n,t={}){let i=await this.buildBytes(n,t),a=L_(t),r=a==="lldb"?void 0:await this.compileLink(n,t),s=Uint8Array.from(i.bytes),l=t.language||"CPP";return{bytes:s,...r?{wasm:r}:{},target:"wasm32-wasi",format:"wasi-core-wasm",fileName:this.lastArtifactPath,language:l,...a==="trace"?{debugMetadata:{variableMetadata:this.debugVariableMetadata,globalVariableMetadata:this.debugGlobalMetadata,functionMetadata:this.debugFunctionMetadata}}:{},...a==="lldb"?{debug:await ot({code:n,language:l,fileName:t.fileName,activePath:t.activePath,workspaceFiles:t.workspaceFiles,compileArgs:t.compileArgs??t.args,cppVersion:t.cppVersion,cVersion:t.cVersion,debugMode:a},s,this.compilerConfig?.provenance)}:{}}}};function T_(e,_){if(!e||typeof e!="object"||Array.isArray(e))throw new Error(`invalid ${_} in wasm-clang runtime manifest`);return e}function y_(e,_){if(typeof e!="string"||e.length===0)throw new Error(`invalid ${_} in wasm-clang runtime manifest`);return e}function Dr(e,_){if(e!=="wasm32-wasi")throw new Error(`invalid ${_} in wasm-clang runtime manifest`);return e}function Uo(e){let _=T_(e,"root.compiler.provenance");if(_.name!=="clang")throw new Error("invalid root.compiler.provenance.name in wasm-clang runtime manifest");return{name:"clang",version:y_(_.version,"root.compiler.provenance.version"),revision:y_(_.revision,"root.compiler.provenance.revision")}}function Po(e){let _=T_(e,"root.compiler.sysroot.profiles");return{c:{asset:y_(T_(_.c,"root.compiler.sysroot.profiles.c").asset,"root.compiler.sysroot.profiles.c.asset")},cppAddon:{asset:y_(T_(_.cppAddon,"root.compiler.sysroot.profiles.cppAddon").asset,"root.compiler.sysroot.profiles.cppAddon.asset")}}}function ko(e){let _=T_(e,"root.compiler"),n=T_(_.sysroot,"root.compiler.sysroot");return{memfs:{asset:y_(T_(_.memfs,"root.compiler.memfs").asset,"root.compiler.memfs.asset"),argv0:y_(T_(_.memfs,"root.compiler.memfs").argv0,"root.compiler.memfs.argv0")},clang:{asset:y_(T_(_.clang,"root.compiler.clang").asset,"root.compiler.clang.asset"),argv0:y_(T_(_.clang,"root.compiler.clang").argv0,"root.compiler.clang.argv0")},lld:{asset:y_(T_(_.lld,"root.compiler.lld").asset,"root.compiler.lld.asset"),argv0:y_(T_(_.lld,"root.compiler.lld").argv0,"root.compiler.lld.argv0")},sysroot:{asset:y_(n.asset,"root.compiler.sysroot.asset"),...n.printscanLongDouble===void 0?{}:{printscanLongDouble:{asset:y_(T_(n.printscanLongDouble,"root.compiler.sysroot.printscanLongDouble").asset,"root.compiler.sysroot.printscanLongDouble.asset")}},...typeof n.runtimeRoot=="string"?{runtimeRoot:n.runtimeRoot}:{},...n.profiles===void 0?{}:{profiles:Po(n.profiles)}},..._.resourceDir!==void 0?{resourceDir:y_(_.resourceDir,"root.compiler.resourceDir")}:{},..._.compilerRuntimeLibDir!==void 0?{compilerRuntimeLibDir:y_(_.compilerRuntimeLibDir,"root.compiler.compilerRuntimeLibDir")}:{},...typeof _.defaultCppStandard=="string"?{defaultCppStandard:_.defaultCppStandard}:{},...typeof _.defaultCStandard=="string"?{defaultCStandard:_.defaultCStandard}:{},..._.provenance!==void 0?{provenance:Uo(_.provenance)}:{}}}function Go(e){let _=T_(e,"root.clangd.headers"),n=i=>{throw new Error(`invalid root.clangd.headers.${i} in wasm-clang runtime manifest`)};_.asset!=="clangd/clangd.headers.json.gz"&&n("asset"),_.format!=="clangd-headers-v1"&&n("format");for(let i of["sha256","uncompressedSha256","version"])(typeof _[i]!="string"||!/^[a-f0-9]{64}$/.test(_[i]))&&n(i);_.version!==_.uncompressedSha256&&n("version");for(let i of["bytes","uncompressedBytes"])(!Number.isSafeInteger(_[i])||_[i]<=0||_[i]>128*1024*1024)&&n(i);let t=y_(_.resourceDir,"root.clangd.headers.resourceDir");return(!/^\/lib\/clang\/[a-zA-Z0-9_.-]+$/.test(t)||[".",".."].includes(t.split("/").at(-1)))&&n("resourceDir"),{asset:"clangd/clangd.headers.json.gz",format:"clangd-headers-v1",version:_.version,targetTriple:Dr(_.targetTriple,"root.clangd.headers.targetTriple"),resourceDir:t,bytes:_.bytes,sha256:_.sha256,uncompressedBytes:_.uncompressedBytes,uncompressedSha256:_.uncompressedSha256}}function Ho(e){let _=T_(e,"root.clangd");return{js:y_(_.js,"root.clangd.js"),wasm:y_(_.wasm,"root.clangd.wasm"),..._.headers===void 0?{}:{headers:Go(_.headers)}}}function Bo(e,_){let n=T_(e,_);if(T_(n.execution,`${_}.execution`).kind!=="wasi-preview1")throw new Error(`invalid ${_}.execution.kind in wasm-clang runtime manifest`);if(n.artifactFormat!=="wasi-core-wasm")throw new Error(`invalid ${_}.artifactFormat in wasm-clang runtime manifest`);return{artifactFormat:"wasi-core-wasm",execution:{kind:"wasi-preview1"}}}function Wo(e){let _=T_(e,"root.targets");return{"wasm32-wasi":Bo(_["wasm32-wasi"],"root.targets.wasm32-wasi")}}function pt(e){let _=T_(e,"root");if(_.manifestVersion!==1)throw new Error("invalid root.manifestVersion in wasm-clang runtime manifest");let n=ko(_.compiler),t=Ho(_.clangd);if(t.headers&&n.resourceDir&&t.headers.resourceDir!==n.resourceDir)throw new Error("root.clangd.headers.resourceDir does not match the compiler in wasm-clang runtime manifest");return{manifestVersion:1,version:y_(_.version,"root.version"),defaultTarget:Dr(_.defaultTarget,"root.defaultTarget"),compiler:n,clangd:t,targets:Wo(_.targets)}}async function gi(e,_=fetch,n,t=_t){let i=pi(e,"wasm-clang runtime manifest URL");return pt(await Oa(i,{fetchImpl:_,label:"wasm-clang runtime manifest",maxBytes:Math.min(t,_t),signal:n}))}function wi(e){return st(e)}var l_={};Ct(l_,{ADVICE_DONTNEED:()=>Bm,ADVICE_NOREUSE:()=>Wm,ADVICE_NORMAL:()=>Pm,ADVICE_RANDOM:()=>Gm,ADVICE_SEQUENTIAL:()=>km,ADVICE_WILLNEED:()=>Hm,CLOCKID_MONOTONIC:()=>Se,CLOCKID_PROCESS_CPUTIME_ID:()=>Vo,CLOCKID_REALTIME:()=>Ee,CLOCKID_THREAD_CPUTIME_ID:()=>jo,Ciovec:()=>Zn,Dirent:()=>Sn,ERRNO_2BIG:()=>Yo,ERRNO_ACCES:()=>Qo,ERRNO_ADDRINUSE:()=>Ko,ERRNO_ADDRNOTAVAIL:()=>qo,ERRNO_AFNOSUPPORT:()=>Jo,ERRNO_AGAIN:()=>Zo,ERRNO_ALREADY:()=>_l,ERRNO_BADF:()=>P,ERRNO_BADMSG:()=>nl,ERRNO_BUSY:()=>el,ERRNO_CANCELED:()=>tl,ERRNO_CHILD:()=>il,ERRNO_CONNABORTED:()=>al,ERRNO_CONNREFUSED:()=>rl,ERRNO_CONNRESET:()=>sl,ERRNO_DEADLK:()=>ol,ERRNO_DESTADDRREQ:()=>ll,ERRNO_DOM:()=>ml,ERRNO_DQUOT:()=>dl,ERRNO_EXIST:()=>_e,ERRNO_FAULT:()=>cl,ERRNO_FBIG:()=>ul,ERRNO_HOSTUNREACH:()=>fl,ERRNO_IDRM:()=>pl,ERRNO_ILSEQ:()=>bl,ERRNO_INPROGRESS:()=>hl,ERRNO_INTR:()=>vl,ERRNO_INVAL:()=>nn,ERRNO_IO:()=>Tl,ERRNO_ISCONN:()=>xl,ERRNO_ISDIR:()=>ht,ERRNO_LOOP:()=>gl,ERRNO_MFILE:()=>wl,ERRNO_MLINK:()=>yl,ERRNO_MSGSIZE:()=>Al,ERRNO_MULTIHOP:()=>El,ERRNO_NAMETOOLONG:()=>yi,ERRNO_NETDOWN:()=>Sl,ERRNO_NETRESET:()=>Nl,ERRNO_NETUNREACH:()=>Il,ERRNO_NFILE:()=>Rl,ERRNO_NOBUFS:()=>Ll,ERRNO_NODEV:()=>Cl,ERRNO_NOENT:()=>ln,ERRNO_NOEXEC:()=>Ml,ERRNO_NOLCK:()=>Dl,ERRNO_NOLINK:()=>Ol,ERRNO_NOMEM:()=>Fl,ERRNO_NOMSG:()=>Ul,ERRNO_NOPROTOOPT:()=>Pl,ERRNO_NOSPC:()=>kl,ERRNO_NOSYS:()=>Ai,ERRNO_NOTCAPABLE:()=>Tt,ERRNO_NOTCONN:()=>Gl,ERRNO_NOTDIR:()=>Y_,ERRNO_NOTEMPTY:()=>vt,ERRNO_NOTRECOVERABLE:()=>Hl,ERRNO_NOTSOCK:()=>Bl,ERRNO_NOTSUP:()=>Z,ERRNO_NOTTY:()=>Wl,ERRNO_NXIO:()=>zl,ERRNO_OVERFLOW:()=>Xl,ERRNO_OWNERDEAD:()=>$l,ERRNO_PERM:()=>ne,ERRNO_PIPE:()=>Vl,ERRNO_PROTO:()=>jl,ERRNO_PROTONOSUPPORT:()=>Yl,ERRNO_PROTOTYPE:()=>Ql,ERRNO_RANGE:()=>Kl,ERRNO_ROFS:()=>ql,ERRNO_SPIPE:()=>Jl,ERRNO_SRCH:()=>Zl,ERRNO_STALE:()=>_m,ERRNO_SUCCESS:()=>j,ERRNO_TIMEDOUT:()=>nm,ERRNO_TXTBSY:()=>em,ERRNO_XDEV:()=>tm,EVENTRWFLAGS_FD_READWRITE_HANGUP:()=>Zm,EVENTTYPE_CLOCK:()=>Ei,EVENTTYPE_FD_READ:()=>qm,EVENTTYPE_FD_WRITE:()=>Jm,Event:()=>ye,FDFLAGS_APPEND:()=>wt,FDFLAGS_DSYNC:()=>zm,FDFLAGS_NONBLOCK:()=>Xm,FDFLAGS_RSYNC:()=>$m,FDFLAGS_SYNC:()=>Vm,FD_STDERR:()=>$o,FD_STDIN:()=>zo,FD_STDOUT:()=>Xo,FILETYPE_BLOCK_DEVICE:()=>Dm,FILETYPE_CHARACTER_DEVICE:()=>Or,FILETYPE_DIRECTORY:()=>U_,FILETYPE_REGULAR_FILE:()=>Rn,FILETYPE_SOCKET_DGRAM:()=>Om,FILETYPE_SOCKET_STREAM:()=>Fm,FILETYPE_SYMBOLIC_LINK:()=>Um,FILETYPE_UNKNOWN:()=>Mm,FSTFLAGS_ATIM:()=>jm,FSTFLAGS_ATIM_NOW:()=>Ym,FSTFLAGS_MTIM:()=>Qm,FSTFLAGS_MTIM_NOW:()=>Km,Fdstat:()=>Nn,Filestat:()=>In,Iovec:()=>Jn,OFLAGS_CREAT:()=>Re,OFLAGS_DIRECTORY:()=>Ln,OFLAGS_EXCL:()=>yt,OFLAGS_TRUNC:()=>Le,PREOPENTYPE_DIR:()=>Fr,Prestat:()=>Ae,PrestatDir:()=>bt,RIFLAGS_RECV_PEEK:()=>Cd,RIFLAGS_RECV_WAITALL:()=>Md,RIGHTS_FD_ADVISE:()=>mm,RIGHTS_FD_ALLOCATE:()=>dm,RIGHTS_FD_DATASYNC:()=>im,RIGHTS_FD_FDSTAT_SET_FLAGS:()=>sm,RIGHTS_FD_FILESTAT_GET:()=>Am,RIGHTS_FD_FILESTAT_SET_SIZE:()=>Em,RIGHTS_FD_FILESTAT_SET_TIMES:()=>Sm,RIGHTS_FD_READ:()=>am,RIGHTS_FD_READDIR:()=>hm,RIGHTS_FD_SEEK:()=>rm,RIGHTS_FD_SYNC:()=>om,RIGHTS_FD_TELL:()=>lm,RIGHTS_FD_WRITE:()=>Ne,RIGHTS_PATH_CREATE_DIRECTORY:()=>cm,RIGHTS_PATH_CREATE_FILE:()=>um,RIGHTS_PATH_FILESTAT_GET:()=>gm,RIGHTS_PATH_FILESTAT_SET_SIZE:()=>wm,RIGHTS_PATH_FILESTAT_SET_TIMES:()=>ym,RIGHTS_PATH_LINK_SOURCE:()=>fm,RIGHTS_PATH_LINK_TARGET:()=>pm,RIGHTS_PATH_OPEN:()=>bm,RIGHTS_PATH_READLINK:()=>vm,RIGHTS_PATH_REMOVE_DIRECTORY:()=>Im,RIGHTS_PATH_RENAME_SOURCE:()=>Tm,RIGHTS_PATH_RENAME_TARGET:()=>xm,RIGHTS_PATH_SYMLINK:()=>Nm,RIGHTS_PATH_UNLINK_FILE:()=>Rm,RIGHTS_POLL_FD_READWRITE:()=>Lm,RIGHTS_SOCK_SHUTDOWN:()=>Cm,ROFLAGS_RECV_DATA_TRUNCATED:()=>Dd,SDFLAGS_RD:()=>Od,SDFLAGS_WR:()=>Fd,SIGNAL_ABRT:()=>rd,SIGNAL_ALRM:()=>fd,SIGNAL_BUS:()=>sd,SIGNAL_CHLD:()=>bd,SIGNAL_CONT:()=>hd,SIGNAL_FPE:()=>od,SIGNAL_HUP:()=>nd,SIGNAL_ILL:()=>id,SIGNAL_INT:()=>ed,SIGNAL_KILL:()=>ld,SIGNAL_NONE:()=>_d,SIGNAL_PIPE:()=>ud,SIGNAL_POLL:()=>Id,SIGNAL_PROF:()=>Sd,SIGNAL_PWR:()=>Rd,SIGNAL_QUIT:()=>td,SIGNAL_SEGV:()=>dd,SIGNAL_STOP:()=>vd,SIGNAL_SYS:()=>Ld,SIGNAL_TERM:()=>pd,SIGNAL_TRAP:()=>ad,SIGNAL_TSTP:()=>Td,SIGNAL_TTIN:()=>xd,SIGNAL_TTOU:()=>gd,SIGNAL_URG:()=>wd,SIGNAL_USR1:()=>md,SIGNAL_USR2:()=>cd,SIGNAL_VTALRM:()=>Ed,SIGNAL_WINCH:()=>Nd,SIGNAL_XCPU:()=>yd,SIGNAL_XFSZ:()=>Ad,SUBCLOCKFLAGS_SUBSCRIPTION_CLOCK_ABSTIME:()=>Si,Subscription:()=>we,WHENCE_CUR:()=>gt,WHENCE_END:()=>Ie,WHENCE_SET:()=>xt});var zo=0,Xo=1,$o=2,Ee=0,Se=1,Vo=2,jo=3,j=0,Yo=1,Qo=2,Ko=3,qo=4,Jo=5,Zo=6,_l=7,P=8,nl=9,el=10,tl=11,il=12,al=13,rl=14,sl=15,ol=16,ll=17,ml=18,dl=19,_e=20,cl=21,ul=22,fl=23,pl=24,bl=25,hl=26,vl=27,nn=28,Tl=29,xl=30,ht=31,gl=32,wl=33,yl=34,Al=35,El=36,yi=37,Sl=38,Nl=39,Il=40,Rl=41,Ll=42,Cl=43,ln=44,Ml=45,Dl=46,Ol=47,Fl=48,Ul=49,Pl=50,kl=51,Ai=52,Gl=53,Y_=54,vt=55,Hl=56,Bl=57,Z=58,Wl=59,zl=60,Xl=61,$l=62,ne=63,Vl=64,jl=65,Yl=66,Ql=67,Kl=68,ql=69,Jl=70,Zl=71,_m=72,nm=73,em=74,tm=75,Tt=76,im=1,am=2,rm=4,sm=8,om=16,lm=32,Ne=64,mm=128,dm=256,cm=512,um=1024,fm=2048,pm=4096,bm=8192,hm=16384,vm=32768,Tm=65536,xm=131072,gm=262144,wm=524288,ym=1048576,Am=2097152,Em=4194304,Sm=8388608,Nm=16777216,Im=33554432,Rm=67108864,Lm=134217728,Cm=268435456,Jn=class e{static read_bytes(_,n){let t=new e;return t.buf=_.getUint32(n,!0),t.buf_len=_.getUint32(n+4,!0),t}static read_bytes_array(_,n,t){let i=[];for(let a=0;a<t;a++)i.push(e.read_bytes(_,n+8*a));return i}},Zn=class e{static read_bytes(_,n){let t=new e;return t.buf=_.getUint32(n,!0),t.buf_len=_.getUint32(n+4,!0),t}static read_bytes_array(_,n,t){let i=[];for(let a=0;a<t;a++)i.push(e.read_bytes(_,n+8*a));return i}},xt=0,gt=1,Ie=2,Mm=0,Dm=1,Or=2,U_=3,Rn=4,Om=5,Fm=6,Um=7,Sn=class{head_length(){return 24}name_length(){return this.dir_name.byteLength}write_head_bytes(_,n){_.setBigUint64(n,this.d_next,!0),_.setBigUint64(n+8,this.d_ino,!0),_.setUint32(n+16,this.dir_name.length,!0),_.setUint8(n+20,this.d_type)}write_name_bytes(_,n,t){_.set(this.dir_name.slice(0,Math.min(this.dir_name.byteLength,t)),n)}constructor(_,n,t,i){let a=new TextEncoder().encode(t);this.d_next=_,this.d_ino=n,this.d_namlen=a.byteLength,this.d_type=i,this.dir_name=a}},Pm=0,km=1,Gm=2,Hm=3,Bm=4,Wm=5,wt=1,zm=2,Xm=4,$m=8,Vm=16,Nn=class{write_bytes(_,n){_.setUint8(n,this.fs_filetype),_.setUint16(n+2,this.fs_flags,!0),_.setBigUint64(n+8,this.fs_rights_base,!0),_.setBigUint64(n+16,this.fs_rights_inherited,!0)}constructor(_,n){this.fs_rights_base=0n,this.fs_rights_inherited=0n,this.fs_filetype=_,this.fs_flags=n}},jm=1,Ym=2,Qm=4,Km=8,Re=1,Ln=2,yt=4,Le=8,In=class{write_bytes(_,n){_.setBigUint64(n,this.dev,!0),_.setBigUint64(n+8,this.ino,!0),_.setUint8(n+16,this.filetype),_.setBigUint64(n+24,this.nlink,!0),_.setBigUint64(n+32,this.size,!0),_.setBigUint64(n+38,this.atim,!0),_.setBigUint64(n+46,this.mtim,!0),_.setBigUint64(n+52,this.ctim,!0)}constructor(_,n,t){this.dev=0n,this.nlink=0n,this.atim=0n,this.mtim=0n,this.ctim=0n,this.ino=_,this.filetype=n,this.size=t}},Ei=0,qm=1,Jm=2,Zm=1,Si=1,we=class e{static read_bytes(_,n){return new e(_.getBigUint64(n,!0),_.getUint8(n+8),_.getUint32(n+16,!0),_.getBigUint64(n+24,!0),_.getUint16(n+36,!0))}constructor(_,n,t,i,a){this.userdata=_,this.eventtype=n,this.clockid=t,this.timeout=i,this.flags=a}},ye=class{write_bytes(_,n){_.setBigUint64(n,this.userdata,!0),_.setUint16(n+8,this.error,!0),_.setUint8(n+10,this.eventtype)}constructor(_,n,t){this.userdata=_,this.error=n,this.eventtype=t}},_d=0,nd=1,ed=2,td=3,id=4,ad=5,rd=6,sd=7,od=8,ld=9,md=10,dd=11,cd=12,ud=13,fd=14,pd=15,bd=16,hd=17,vd=18,Td=19,xd=20,gd=21,wd=22,yd=23,Ad=24,Ed=25,Sd=26,Nd=27,Id=28,Rd=29,Ld=30,Cd=1,Md=2,Dd=1,Od=1,Fd=2,Fr=0,bt=class{write_bytes(_,n){_.setUint32(n,this.pr_name.byteLength,!0)}constructor(_){this.pr_name=new TextEncoder().encode(_)}},Ae=class e{static dir(_){let n=new e;return n.tag=Fr,n.inner=new bt(_),n}write_bytes(_,n){_.setUint32(n,this.tag,!0),this.inner.write_bytes(_,n+4)}};var Ud=class{enable(_){this.log=Pd(_===void 0?!0:_,this.prefix)}get enabled(){return this.isEnabled}constructor(_){this.isEnabled=_,this.prefix="wasi:",this.enable(_)}};function Pd(e,_){return e?console.log.bind(console,"%c%s","color: #265BA0",_):()=>{}}var A_=new Ud(!1);var Ce=class extends Error{constructor(_){super("exit with exit code "+_),this.code=_}},Me=class{start(_){this.inst=_;try{return _.exports._start(),0}catch(n){if(n instanceof Ce)return n.code;throw n}}initialize(_){this.inst=_,_.exports._initialize&&_.exports._initialize()}constructor(_,n,t,i={}){this.args=[],this.env=[],this.fds=[],A_.enable(i.debug),this.args=_,this.env=n,this.fds=t;let a=this;this.wasiImport={args_sizes_get(r,s){let l=new DataView(a.inst.exports.memory.buffer);l.setUint32(r,a.args.length,!0);let o=0;for(let m of a.args)o+=m.length+1;return l.setUint32(s,o,!0),A_.log(l.getUint32(r,!0),l.getUint32(s,!0)),0},args_get(r,s){let l=new DataView(a.inst.exports.memory.buffer),o=new Uint8Array(a.inst.exports.memory.buffer),m=s;for(let d=0;d<a.args.length;d++){l.setUint32(r,s,!0),r+=4;let u=new TextEncoder().encode(a.args[d]);o.set(u,s),l.setUint8(s+u.length,0),s+=u.length+1}return A_.enabled&&A_.log(new TextDecoder("utf-8").decode(o.slice(m,s))),0},environ_sizes_get(r,s){let l=new DataView(a.inst.exports.memory.buffer);l.setUint32(r,a.env.length,!0);let o=0;for(let m of a.env)o+=new TextEncoder().encode(m).length+1;return l.setUint32(s,o,!0),A_.log(l.getUint32(r,!0),l.getUint32(s,!0)),0},environ_get(r,s){let l=new DataView(a.inst.exports.memory.buffer),o=new Uint8Array(a.inst.exports.memory.buffer),m=s;for(let d=0;d<a.env.length;d++){l.setUint32(r,s,!0),r+=4;let u=new TextEncoder().encode(a.env[d]);o.set(u,s),l.setUint8(s+u.length,0),s+=u.length+1}return A_.enabled&&A_.log(new TextDecoder("utf-8").decode(o.slice(m,s))),0},clock_res_get(r,s){let l;switch(r){case 1:{l=5000n;break}case 0:{l=1000000n;break}default:return 52}return new DataView(a.inst.exports.memory.buffer).setBigUint64(s,l,!0),0},clock_time_get(r,s,l){let o=new DataView(a.inst.exports.memory.buffer);if(r===0)o.setBigUint64(l,BigInt(new Date().getTime())*1000000n,!0);else if(r==1){let m;try{m=BigInt(Math.round(performance.now()*1e6))}catch{m=0n}o.setBigUint64(l,m,!0)}else o.setBigUint64(l,0n,!0);return 0},fd_advise(r,s,l,o){return a.fds[r]!=null?0:8},fd_allocate(r,s,l){return a.fds[r]!=null?a.fds[r].fd_allocate(s,l):8},fd_close(r){if(a.fds[r]!=null){let s=a.fds[r].fd_close();return a.fds[r]=void 0,s}else return 8},fd_datasync(r){return a.fds[r]!=null?a.fds[r].fd_sync():8},fd_fdstat_get(r,s){if(a.fds[r]!=null){let{ret:l,fdstat:o}=a.fds[r].fd_fdstat_get();return o?.write_bytes(new DataView(a.inst.exports.memory.buffer),s),l}else return 8},fd_fdstat_set_flags(r,s){return a.fds[r]!=null?a.fds[r].fd_fdstat_set_flags(s):8},fd_fdstat_set_rights(r,s,l){return a.fds[r]!=null?a.fds[r].fd_fdstat_set_rights(s,l):8},fd_filestat_get(r,s){if(a.fds[r]!=null){let{ret:l,filestat:o}=a.fds[r].fd_filestat_get();return o?.write_bytes(new DataView(a.inst.exports.memory.buffer),s),l}else return 8},fd_filestat_set_size(r,s){return a.fds[r]!=null?a.fds[r].fd_filestat_set_size(s):8},fd_filestat_set_times(r,s,l,o){return a.fds[r]!=null?a.fds[r].fd_filestat_set_times(s,l,o):8},fd_pread(r,s,l,o,m){let d=new DataView(a.inst.exports.memory.buffer),u=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let c=Jn.read_bytes_array(d,s,l),v=0;for(let h of c){let{ret:p,data:w}=a.fds[r].fd_pread(h.buf_len,o);if(p!=0)return d.setUint32(m,v,!0),p;if(u.set(w,h.buf),v+=w.length,o+=BigInt(w.length),w.length!=h.buf_len)break}return d.setUint32(m,v,!0),0}else return 8},fd_prestat_get(r,s){let l=new DataView(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let{ret:o,prestat:m}=a.fds[r].fd_prestat_get();return m?.write_bytes(l,s),o}else return 8},fd_prestat_dir_name(r,s,l){if(a.fds[r]!=null){let{ret:o,prestat:m}=a.fds[r].fd_prestat_get();if(m==null)return o;let d=m.inner.pr_name;return new Uint8Array(a.inst.exports.memory.buffer).set(d.slice(0,l),s),d.byteLength>l?37:0}else return 8},fd_pwrite(r,s,l,o,m){let d=new DataView(a.inst.exports.memory.buffer),u=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let c=Zn.read_bytes_array(d,s,l),v=0;for(let h of c){let p=u.slice(h.buf,h.buf+h.buf_len),{ret:w,nwritten:S}=a.fds[r].fd_pwrite(p,o);if(w!=0)return d.setUint32(m,v,!0),w;if(v+=S,o+=BigInt(S),S!=p.byteLength)break}return d.setUint32(m,v,!0),0}else return 8},fd_read(r,s,l,o){let m=new DataView(a.inst.exports.memory.buffer),d=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let u=Jn.read_bytes_array(m,s,l),c=0;for(let v of u){let{ret:h,data:p}=a.fds[r].fd_read(v.buf_len);if(h!=0)return m.setUint32(o,c,!0),h;if(d.set(p,v.buf),c+=p.length,p.length!=v.buf_len)break}return m.setUint32(o,c,!0),0}else return 8},fd_readdir(r,s,l,o,m){let d=new DataView(a.inst.exports.memory.buffer),u=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let c=0;for(;;){let{ret:v,dirent:h}=a.fds[r].fd_readdir_single(o);if(v!=0)return d.setUint32(m,c,!0),v;if(h==null)break;if(l-c<h.head_length()){c=l;break}let p=new ArrayBuffer(h.head_length());if(h.write_head_bytes(new DataView(p),0),u.set(new Uint8Array(p).slice(0,Math.min(p.byteLength,l-c)),s),s+=h.head_length(),c+=h.head_length(),l-c<h.name_length()){c=l;break}h.write_name_bytes(u,s,l-c),s+=h.name_length(),c+=h.name_length(),o=h.d_next}return d.setUint32(m,c,!0),0}else return 8},fd_renumber(r,s){if(a.fds[r]!=null&&a.fds[s]!=null){let l=a.fds[s].fd_close();return l!=0?l:(a.fds[s]=a.fds[r],a.fds[r]=void 0,0)}else return 8},fd_seek(r,s,l,o){let m=new DataView(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let{ret:d,offset:u}=a.fds[r].fd_seek(s,l);return m.setBigInt64(o,u,!0),d}else return 8},fd_sync(r){return a.fds[r]!=null?a.fds[r].fd_sync():8},fd_tell(r,s){let l=new DataView(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let{ret:o,offset:m}=a.fds[r].fd_tell();return l.setBigUint64(s,m,!0),o}else return 8},fd_write(r,s,l,o){let m=new DataView(a.inst.exports.memory.buffer),d=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let u=Zn.read_bytes_array(m,s,l),c=0;for(let v of u){let h=d.slice(v.buf,v.buf+v.buf_len),{ret:p,nwritten:w}=a.fds[r].fd_write(h);if(p!=0)return m.setUint32(o,c,!0),p;if(c+=w,w!=h.byteLength)break}return m.setUint32(o,c,!0),0}else return 8},path_create_directory(r,s,l){let o=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let m=new TextDecoder("utf-8").decode(o.slice(s,s+l));return a.fds[r].path_create_directory(m)}else return 8},path_filestat_get(r,s,l,o,m){let d=new DataView(a.inst.exports.memory.buffer),u=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let c=new TextDecoder("utf-8").decode(u.slice(l,l+o)),{ret:v,filestat:h}=a.fds[r].path_filestat_get(s,c);return h?.write_bytes(d,m),v}else return 8},path_filestat_set_times(r,s,l,o,m,d,u){let c=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let v=new TextDecoder("utf-8").decode(c.slice(l,l+o));return a.fds[r].path_filestat_set_times(s,v,m,d,u)}else return 8},path_link(r,s,l,o,m,d,u){let c=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null&&a.fds[m]!=null){let v=new TextDecoder("utf-8").decode(c.slice(l,l+o)),h=new TextDecoder("utf-8").decode(c.slice(d,d+u)),{ret:p,inode_obj:w}=a.fds[r].path_lookup(v,s);return w==null?p:a.fds[m].path_link(h,w,!1)}else return 8},path_open(r,s,l,o,m,d,u,c,v){let h=new DataView(a.inst.exports.memory.buffer),p=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let w=new TextDecoder("utf-8").decode(p.slice(l,l+o));A_.log(w);let{ret:S,fd_obj:A}=a.fds[r].path_open(s,w,m,d,u,c);if(S!=0)return S;a.fds.push(A);let f=a.fds.length-1;return h.setUint32(v,f,!0),0}else return 8},path_readlink(r,s,l,o,m,d){let u=new DataView(a.inst.exports.memory.buffer),c=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let v=new TextDecoder("utf-8").decode(c.slice(s,s+l));A_.log(v);let{ret:h,data:p}=a.fds[r].path_readlink(v);if(p!=null){let w=new TextEncoder().encode(p);if(w.length>m)return u.setUint32(d,0,!0),8;c.set(w,o),u.setUint32(d,w.length,!0)}return h}else return 8},path_remove_directory(r,s,l){let o=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let m=new TextDecoder("utf-8").decode(o.slice(s,s+l));return a.fds[r].path_remove_directory(m)}else return 8},path_rename(r,s,l,o,m,d){let u=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null&&a.fds[o]!=null){let c=new TextDecoder("utf-8").decode(u.slice(s,s+l)),v=new TextDecoder("utf-8").decode(u.slice(m,m+d)),{ret:h,inode_obj:p}=a.fds[r].path_unlink(c);if(p==null)return h;if(h=a.fds[o].path_link(v,p,!0),h!=0&&a.fds[r].path_link(c,p,!0)!=0)throw"path_link should always return success when relinking an inode back to the original place";return h}else return 8},path_symlink(r,s,l,o,m){let d=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[l]!=null){let u=new TextDecoder("utf-8").decode(d.slice(r,r+s)),c=new TextDecoder("utf-8").decode(d.slice(o,o+m));return 58}else return 8},path_unlink_file(r,s,l){let o=new Uint8Array(a.inst.exports.memory.buffer);if(a.fds[r]!=null){let m=new TextDecoder("utf-8").decode(o.slice(s,s+l));return a.fds[r].path_unlink_file(m)}else return 8},poll_oneoff(r,s,l){if(l===0)return 28;if(l>1)return A_.log("poll_oneoff: only a single subscription is supported"),58;let o=new DataView(a.inst.exports.memory.buffer),m=we.read_bytes(o,r),d=m.eventtype,u=m.clockid,c=m.timeout;if(d!==Ei)return A_.log("poll_oneoff: only clock subscriptions are supported"),58;let v;if(u===1)v=()=>BigInt(Math.round(performance.now()*1e6));else if(u===0)v=()=>BigInt(new Date().getTime())*1000000n;else return 28;let h=(m.flags&Si)!==0?c:v()+c;for(;h>v(););return new ye(m.userdata,0,d).write_bytes(o,s),0},proc_exit(r){throw new Ce(r)},proc_raise(r){throw"raised signal "+r},sched_yield(){},random_get(r,s){let l=new Uint8Array(a.inst.exports.memory.buffer).subarray(r,r+s);if("crypto"in globalThis&&(typeof SharedArrayBuffer>"u"||!(a.inst.exports.memory.buffer instanceof SharedArrayBuffer)))for(let o=0;o<s;o+=65536)crypto.getRandomValues(l.subarray(o,o+65536));else for(let o=0;o<s;o++)l[o]=Math.random()*256|0},sock_recv(r,s,l){throw"sockets not supported"},sock_send(r,s,l){throw"sockets not supported"},sock_shutdown(r,s){throw"sockets not supported"},sock_accept(r,s){throw"sockets not supported"}}}};var en=class{fd_allocate(_,n){return 58}fd_close(){return 0}fd_fdstat_get(){return{ret:58,fdstat:null}}fd_fdstat_set_flags(_){return 58}fd_fdstat_set_rights(_,n){return 58}fd_filestat_get(){return{ret:58,filestat:null}}fd_filestat_set_size(_){return 58}fd_filestat_set_times(_,n,t){return 58}fd_pread(_,n){return{ret:58,data:new Uint8Array}}fd_prestat_get(){return{ret:58,prestat:null}}fd_pwrite(_,n){return{ret:58,nwritten:0}}fd_read(_){return{ret:58,data:new Uint8Array}}fd_readdir_single(_){return{ret:58,dirent:null}}fd_seek(_,n){return{ret:58,offset:0n}}fd_sync(){return 0}fd_tell(){return{ret:58,offset:0n}}fd_write(_){return{ret:58,nwritten:0}}path_create_directory(_){return 58}path_filestat_get(_,n){return{ret:58,filestat:null}}path_filestat_set_times(_,n,t,i,a){return 58}path_link(_,n,t){return 58}path_unlink(_){return{ret:58,inode_obj:null}}path_lookup(_,n){return{ret:58,inode_obj:null}}path_open(_,n,t,i,a,r){return{ret:54,fd_obj:null}}path_readlink(_){return{ret:58,data:null}}path_remove_directory(_){return 58}path_rename(_,n,t){return 58}path_unlink_file(_){return 58}},$_=class e{static issue_ino(){return e.next_ino++}static root_ino(){return 0n}constructor(){this.ino=e.issue_ino()}};$_.next_ino=1n;var At=class extends en{fd_allocate(_,n){if(!(this.file.size>_+n)){let t=new Uint8Array(Number(_+n));t.set(this.file.data,0),this.file.data=t}return 0}fd_fdstat_get(){return{ret:0,fdstat:new Nn(Rn,0)}}fd_filestat_set_size(_){if(this.file.size>_)this.file.data=new Uint8Array(this.file.data.buffer.slice(0,Number(_)));else{let n=new Uint8Array(Number(_));n.set(this.file.data,0),this.file.data=n}return 0}fd_read(_){let n=this.file.data.slice(Number(this.file_pos),Number(this.file_pos+BigInt(_)));return this.file_pos+=BigInt(n.length),{ret:0,data:n}}fd_pread(_,n){return{ret:0,data:this.file.data.slice(Number(n),Number(n+BigInt(_)))}}fd_seek(_,n){let t;switch(n){case xt:t=_;break;case gt:t=this.file_pos+_;break;case Ie:t=BigInt(this.file.data.byteLength)+_;break;default:return{ret:28,offset:0n}}return t<0?{ret:28,offset:0n}:(this.file_pos=t,{ret:0,offset:this.file_pos})}fd_tell(){return{ret:0,offset:this.file_pos}}fd_write(_){if(this.file.readonly)return{ret:8,nwritten:0};if(this.file_pos+BigInt(_.byteLength)>this.file.size){let n=this.file.data;this.file.data=new Uint8Array(Number(this.file_pos+BigInt(_.byteLength))),this.file.data.set(n)}return this.file.data.set(_,Number(this.file_pos)),this.file_pos+=BigInt(_.byteLength),{ret:0,nwritten:_.byteLength}}fd_pwrite(_,n){if(this.file.readonly)return{ret:8,nwritten:0};if(n+BigInt(_.byteLength)>this.file.size){let t=this.file.data;this.file.data=new Uint8Array(Number(n+BigInt(_.byteLength))),this.file.data.set(t)}return this.file.data.set(_,Number(n)),{ret:0,nwritten:_.byteLength}}fd_filestat_get(){return{ret:0,filestat:this.file.stat()}}constructor(_){super(),this.file_pos=0n,this.file=_}},De=class extends en{fd_seek(_,n){return{ret:8,offset:0n}}fd_tell(){return{ret:8,offset:0n}}fd_allocate(_,n){return 8}fd_fdstat_get(){return{ret:0,fdstat:new Nn(U_,0)}}fd_readdir_single(_){if(A_.enabled&&(A_.log("readdir_single",_),A_.log(_,this.dir.contents.keys())),_==0n)return{ret:0,dirent:new Sn(1n,this.dir.ino,".",U_)};if(_==1n)return{ret:0,dirent:new Sn(2n,this.dir.parent_ino(),"..",U_)};if(_>=BigInt(this.dir.contents.size)+2n)return{ret:0,dirent:null};let[n,t]=Array.from(this.dir.contents.entries())[Number(_-2n)];return{ret:0,dirent:new Sn(_+1n,t.ino,n,t.stat().filetype)}}path_filestat_get(_,n){let{ret:t,path:i}=vn.from(n);if(i==null)return{ret:t,filestat:null};let{ret:a,entry:r}=this.dir.get_entry_for_path(i);return r==null?{ret:a,filestat:null}:{ret:0,filestat:r.stat()}}path_lookup(_,n){let{ret:t,path:i}=vn.from(_);if(i==null)return{ret:t,inode_obj:null};let{ret:a,entry:r}=this.dir.get_entry_for_path(i);return r==null?{ret:a,inode_obj:null}:{ret:0,inode_obj:r}}path_open(_,n,t,i,a,r){let{ret:s,path:l}=vn.from(n);if(l==null)return{ret:s,fd_obj:null};let{ret:o,entry:m}=this.dir.get_entry_for_path(l);if(m==null){if(o!=44)return{ret:o,fd_obj:null};if((t&Re)==Re){let{ret:d,entry:u}=this.dir.create_entry_for_path(n,(t&Ln)==Ln);if(u==null)return{ret:d,fd_obj:null};m=u}else return{ret:44,fd_obj:null}}else if((t&yt)==yt)return{ret:20,fd_obj:null};return(t&Ln)==Ln&&m.stat().filetype!==U_?{ret:54,fd_obj:null}:m.path_open(t,i,r)}path_create_directory(_){return this.path_open(0,_,Re|Ln,0n,0n,0).ret}path_link(_,n,t){let{ret:i,path:a}=vn.from(_);if(a==null)return i;if(a.is_dir)return 44;let{ret:r,parent_entry:s,filename:l,entry:o}=this.dir.get_parent_dir_and_entry_for_path(a,!0);if(s==null||l==null)return r;if(o!=null){let m=n.stat().filetype==U_,d=o.stat().filetype==U_;if(m&&d)if(t&&o instanceof Q_){if(o.contents.size!=0)return 55}else return 20;else{if(m&&!d)return 54;if(!m&&d)return 31;if(!(n.stat().filetype==Rn&&o.stat().filetype==Rn))return 20}}return!t&&n.stat().filetype==U_?63:(s.contents.set(l,n),0)}path_unlink(_){let{ret:n,path:t}=vn.from(_);if(t==null)return{ret:n,inode_obj:null};let{ret:i,parent_entry:a,filename:r,entry:s}=this.dir.get_parent_dir_and_entry_for_path(t,!0);return a==null||r==null?{ret:i,inode_obj:null}:s==null?{ret:44,inode_obj:null}:(a.contents.delete(r),{ret:0,inode_obj:s})}path_unlink_file(_){let{ret:n,path:t}=vn.from(_);if(t==null)return n;let{ret:i,parent_entry:a,filename:r,entry:s}=this.dir.get_parent_dir_and_entry_for_path(t,!1);return a==null||r==null||s==null?i:s.stat().filetype===U_?31:(a.contents.delete(r),0)}path_remove_directory(_){let{ret:n,path:t}=vn.from(_);if(t==null)return n;let{ret:i,parent_entry:a,filename:r,entry:s}=this.dir.get_parent_dir_and_entry_for_path(t,!1);return a==null||r==null||s==null?i:!(s instanceof Q_)||s.stat().filetype!==U_?54:s.contents.size!==0?55:a.contents.delete(r)?0:44}fd_filestat_get(){return{ret:0,filestat:this.dir.stat()}}fd_filestat_set_size(_){return 8}fd_read(_){return{ret:8,data:new Uint8Array}}fd_pread(_,n){return{ret:8,data:new Uint8Array}}fd_write(_){return{ret:8,nwritten:0}}fd_pwrite(_,n){return{ret:8,nwritten:0}}constructor(_){super(),this.dir=_}},ee=class extends De{fd_prestat_get(){return{ret:0,prestat:Ae.dir(this.prestat_name)}}constructor(_,n){super(new Q_(n)),this.prestat_name=_}},te=class extends $_{path_open(_,n,t){if(this.readonly&&(n&BigInt(64))==BigInt(64))return{ret:63,fd_obj:null};if((_&Le)==Le){if(this.readonly)return{ret:63,fd_obj:null};this.data=new Uint8Array([])}let i=new At(this);return t&wt&&i.fd_seek(0n,Ie),{ret:0,fd_obj:i}}get size(){return BigInt(this.data.byteLength)}stat(){return new In(this.ino,Rn,this.size)}constructor(_,n){super(),this.data=new Uint8Array(_),this.readonly=!!n?.readonly}},vn=class Ur{static from(_){let n=new Ur;if(n.is_dir=_.endsWith("/"),_.startsWith("/"))return{ret:76,path:null};if(_.includes("\0"))return{ret:28,path:null};for(let t of _.split("/"))if(!(t===""||t===".")){if(t===".."){if(n.parts.pop()==null)return{ret:76,path:null};continue}n.parts.push(t)}return{ret:0,path:n}}to_path_string(){let _=this.parts.join("/");return this.is_dir&&(_+="/"),_}constructor(){this.parts=[],this.is_dir=!1}},Q_=class e extends $_{parent_ino(){return this.parent==null?$_.root_ino():this.parent.ino}path_open(_,n,t){return{ret:0,fd_obj:new De(this)}}stat(){return new In(this.ino,U_,0n)}get_entry_for_path(_){let n=this;for(let t of _.parts){if(!(n instanceof e))return{ret:54,entry:null};let i=n.contents.get(t);if(i!==void 0)n=i;else return A_.log(t),{ret:44,entry:null}}return _.is_dir&&n.stat().filetype!=U_?{ret:54,entry:null}:{ret:0,entry:n}}get_parent_dir_and_entry_for_path(_,n){let t=_.parts.pop();if(t===void 0)return{ret:28,parent_entry:null,filename:null,entry:null};let{ret:i,entry:a}=this.get_entry_for_path(_);if(a==null)return{ret:i,parent_entry:null,filename:null,entry:null};if(!(a instanceof e))return{ret:54,parent_entry:null,filename:null,entry:null};let r=a.contents.get(t);return r===void 0?n?{ret:0,parent_entry:a,filename:t,entry:null}:{ret:44,parent_entry:null,filename:null,entry:null}:_.is_dir&&r.stat().filetype!=U_?{ret:54,parent_entry:null,filename:null,entry:null}:{ret:0,parent_entry:a,filename:t,entry:r}}create_entry_for_path(_,n){let{ret:t,path:i}=vn.from(_);if(i==null)return{ret:t,entry:null};let{ret:a,parent_entry:r,filename:s,entry:l}=this.get_parent_dir_and_entry_for_path(i,!0);if(r==null||s==null)return{ret:a,entry:null};if(l!=null)return{ret:20,entry:null};A_.log("create",i);let o;return n?o=new e(new Map):o=new te(new ArrayBuffer(0)),r.contents.set(s,o),l=o,{ret:0,entry:l}}constructor(_){super(),this.parent=null,_ instanceof Array?this.contents=new Map(_):this.contents=_;for(let n of this.contents.values())n instanceof e&&(n.parent=this)}};function kd(e){let _=e.replace(/\\/g,"/"),n=_.startsWith("/")?_:`/${_}`,t=[];for(let i of n.split("/"))if(!(!i||i===".")){if(i==="..")throw new Error(`wasm-clang does not allow guest path traversal: ${e}`);t.push(i)}return`/${t.join("/")}`}function Pr(e){return typeof e=="string"?new TextEncoder().encode(e):e instanceof Uint8Array?new Uint8Array(e):new Uint8Array(e)}var Et=class extends en{constructor(n){super();x(this,"ino",$_.issue_ino());x(this,"decoder",new TextDecoder);x(this,"chunks",[]);x(this,"output");this.output=n}fd_filestat_get(){return{ret:l_.ERRNO_SUCCESS,filestat:new l_.Filestat(this.ino,l_.FILETYPE_CHARACTER_DEVICE,0n)}}fd_fdstat_get(){let n=new l_.Fdstat(l_.FILETYPE_CHARACTER_DEVICE,0);return n.fs_rights_base=BigInt(l_.RIGHTS_FD_WRITE),{ret:l_.ERRNO_SUCCESS,fdstat:n}}fd_write(n){let t=this.decoder.decode(n,{stream:!0});return this.chunks.push(t),this.output?.(t),{ret:l_.ERRNO_SUCCESS,nwritten:n.byteLength}}getText(){let n=this.decoder.decode();return n&&(this.chunks.push(n),this.output?.(n)),this.chunks.join("")}},Ni=class{constructor(_){x(this,"currentChunk",new Uint8Array(0));x(this,"currentOffset",0);x(this,"readInput");this.readInput=_}read(_){for(;this.currentOffset>=this.currentChunk.length;){let t=this.readInput?.();if(t==null)return new Uint8Array(0);this.currentChunk=Pr(t),this.currentOffset=0,this.currentChunk.byteLength}let n=this.currentChunk.slice(this.currentOffset,this.currentOffset+_);return this.currentOffset+=n.byteLength,n}},Ii=class extends en{constructor(n){super();x(this,"ino",$_.issue_ino());x(this,"source");this.source=n}fd_filestat_get(){return{ret:l_.ERRNO_SUCCESS,filestat:new l_.Filestat(this.ino,l_.FILETYPE_CHARACTER_DEVICE,0n)}}fd_fdstat_get(){let n=new l_.Fdstat(l_.FILETYPE_CHARACTER_DEVICE,0);return n.fs_rights_base=BigInt(l_.RIGHTS_FD_READ),{ret:l_.ERRNO_SUCCESS,fdstat:n}}fd_read(n){return{ret:l_.ERRNO_SUCCESS,data:this.source.read(n)}}};function St(e={}){let _=(e.files||[]).map(m=>({...m,path:kd(m.path)})),n=new Set;for(let m of _){if(m.path==="/")throw new cn("invalid-path","A guest file cannot replace the root directory");if(m.path==="/tmp")throw new cn("path-prefix-collision","Guest file /tmp conflicts with the preopened temporary directory",{path:m.path});if(n.has(m.path))throw new cn("duplicate-path",`Duplicate guest file path: ${m.path}`,{path:m.path});n.add(m.path)}for(let m of _){let d=m.path.slice(1).split("/");for(let u=1;u<d.length;u++){let c=`/${d.slice(0,u).join("/")}`;if(n.has(c))throw new cn("path-prefix-collision",`Guest file ${c} conflicts with descendant ${m.path}`,{path:m.path})}}let t=new Q_(new Map);for(let m of _){let d=m.path.slice(1).split("/"),u=t;for(let c of d.slice(0,-1)){let v=u.contents.get(c);if(v instanceof Q_){u=v;continue}let h=new Q_(new Map);u.contents.set(c,h),u=h}u.contents.set(d.at(-1),new te(Pr(m.contents)))}let i=t.contents.get("tmp"),a=new ee("/tmp",i instanceof Q_?i.contents:new Map);t.contents.set("tmp",a.dir);let r=new Ni(e.stdin),s=new Et(e.stdout),l=new Et(e.stderr),o=new Map([["PWD","/"]]);for(let[m,d]of Object.entries(e.env||{}))o.set(m,d);return{args:[e.programName||"main.wasm",...e.args||[]],envEntries:Array.from(o.entries()).map(([m,d])=>`${m}=${d}`),rootDirectory:t,stdout:s,stderr:l,fds:[new Ii(r),s,l,a,new ee("/",t.contents)]}}async function Ri(e,_={}){if(e.target!=="wasm32-wasi"||e.format!=="wasi-core-wasm")throw new Error("wasm-clang currently executes only wasm32-wasi preview1 core wasm artifacts.");let n=St({..._,programName:_.programName||e.fileName}),t=new Me(n.args,n.envEntries,n.fds,{debug:!1}),i=e.bytes instanceof Uint8Array?new Uint8Array(e.bytes):new Uint8Array(e.bytes),a=Qn(_.maxWasmMemoryBytes);a!==void 0&&gr(i,a);let r=a===void 0&&e.wasm?e.wasm:await WebAssembly.compile(i);if(a!==void 0&&WebAssembly.Module.imports(r).some(d=>d.kind==="memory"))throw new F_("Clang memory limits do not support imported memory");let s={current:null},l=typeof _.extraImports=="function"?await _.extraImports({host:n,module:r,instance:s}):_.extraImports||{},o=await WebAssembly.instantiate(r,{...l,wasi_unstable:t.wasiImport,wasi_snapshot_preview1:t.wasiImport});return s.current=o,{exitCode:t.start(o),stdout:n.stdout.getText(),stderr:n.stderr.getText()}}var kr=Object.freeze({"runtime-manifest.v1.json":Object.freeze({bytes:876,sha256:"1420808d0391ff2d8a2fdf2a9f6bbce8f728e06b1ed1651029ed80b226101444"}),"bin/memfs.wasm.gz":Object.freeze({bytes:38702,sha256:"cbca9e27ceafbca840603a39fc71e4f83bfb085237c8eab84fd0401ac76806c7"}),"bin/clang.wasm.gz":Object.freeze({bytes:15721977,sha256:"b1174438d9a67b7ff11e623541b9a0572c024a9e798084b9b021dd9da2da0874"}),"bin/lld.wasm.gz":Object.freeze({bytes:7837837,sha256:"f842a9b5df3c6d326f0260bfd313c11c2e22bc8b8ae0387deede9a4af55779cd"}),"bin/sysroot.tar.gz":Object.freeze({bytes:5401380,sha256:"195e8083bace1baf86014f134a210db354cd77825988eaac7d262161cf496c4f"}),"objective-c/libobjc.a":Object.freeze({bytes:190272,sha256:"1dde20d4ce78eed271ab725062ef25f1923b20d51384943c9b8f7177eb1fc2d9"}),"objective-c/headers.json":Object.freeze({bytes:83231,sha256:"64bf5a09feffa612e6f82cfc52f3d6a9c5e4fc3064c3824c24aeea59cb544d8e"})});var Nt="https://clang-wasm-assets.invalid/";function Hr(e,_){if(e.baseUrl!=null&&e.baseUrl!=="")return Gd(e);if(!_)throw new Error("baseUrl is required here. The assets that ship in this package can only be read where there is a filesystem, and a browser cannot reach a file inside an npm package - copy them somewhere your page can fetch with `npx --package @live-codes/clang-wasm clang-wasm-copy-assets <dir>` and pass that directory as baseUrl.");return Hd(_)}function Gd(e){let _;try{_=Yn(e.baseUrl)}catch(t){throw new Error(`baseUrl must be an absolute http(s) URL, or relative to the page in a browser: ${t.message}`,{cause:t})}let n=e.objectiveCBaseUrl?Yn(e.objectiveCBaseUrl):new URL("objective-c/",_).href;return{kind:"hosted",key:`${_}\0${n}`,baseUrl:_,objectiveCBaseUrl:n,description:_,async loadManifest(){return gi(wi(_))},readAsset:t=>Wd(new URL(t,_),t),installFetch(){}}}function Hd(e){let _={kind:"packaged",key:`packaged\0${e.root.href}`,baseUrl:Nt,objectiveCBaseUrl:new URL("objective-c/",Nt).href,description:`the assets packaged with this library (${e.root.href})`,readAsset:n=>zd(e,n),async loadManifest(){let n=await _.readAsset("runtime-manifest.v1.json");return pt(JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n)))},installFetch:()=>Bd(_)};return _}var Gr=null;function Bd(e){if(Gr===e)return;let _=globalThis.fetch;globalThis.fetch=(n,t)=>{let i=typeof n=="string"?n:n instanceof URL?n.href:n?.url??"";return i.startsWith(Nt)?e.readAsset(i.slice(Nt.length)).then(a=>new Response(a)):_.call(globalThis,n,t)},Gr=e}async function Wd(e,_){let n=await fetch(e);if(!n.ok){let i=await fetch(`${e}.gz`);if(!i.ok)throw new Error(`Failed to load the runtime asset ${e}: ${n.status}`);n=i}let t=new Uint8Array(await n.arrayBuffer());return Br(_,Xd(t)?await $d(t,_):t)}async function zd(e,_){let n;try{n=await e.readFile(_)}catch(t){throw new Error(`Failed to read the packaged asset ${_} from ${e.root.href}: ${t.message}`,{cause:t})}return Br(_,n)}async function Br(e,_){let n=kr[e];if(!n)throw new Error(`No pinned receipt for the runtime asset ${e}`);if(_.byteLength!==n.bytes)throw new Error(`The runtime asset ${e} is ${_.byteLength} bytes, expected ${n.bytes}`);let t=await Vd(_);if(t!==n.sha256)throw new Error(`The runtime asset ${e} failed SHA-256 verification: expected ${n.sha256}, got ${t}`);return _}var Xd=e=>e.byteLength>2&&e[0]===31&&e[1]===139;async function $d(e,_){if(typeof DecompressionStream!="function")throw new Error(`Inflating the runtime asset ${_} needs DecompressionStream`);let n=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Uint8Array(await new Response(n).arrayBuffer())}async function Vd(e){let _=globalThis.crypto?.subtle;if(!_)throw new Error("Verifying the runtime assets needs crypto.subtle: a secure context in the browser, or Node 20 and later.");let n=await _.digest("SHA-256",e);return[...new Uint8Array(n)].map(t=>t.toString(16).padStart(2,"0")).join("")}var jd=128*1024*1024,It=new Map;async function Wr(e,_={}){let n=It.get(e.key);n||(n=Qd(e,_).catch(i=>{throw It.delete(e.key),i}),It.set(e.key,n));let t=await n;return t.references+=1,_.onProgress&&t.progressSinks.add(_.onProgress),t}function zr(e,_){_&&e.progressSinks.delete(_),e.references-=1,e.references<=0&&It.delete(e.key)}async function Xr(e,_){let n=e.queue,t;e.queue=new Promise(i=>{t=i}),await n;try{return await _()}finally{t()}}async function $r(e,_){let{runtime:n}=e,t=n.log,i=e.compilerOutput,a=[];n.log=!0,e.compilerOutput=l=>a.push(l);let r,s=null;try{r=await _()}catch(l){s=l}finally{e.compilerOutput=i,n.log=t}return{result:r,raw:a.join(""),error:s}}function Yd(){typeof globalThis.SharedArrayBuffer>"u"&&(globalThis.SharedArrayBuffer=class{})}async function Qd(e,_){Yd();let n={key:e.key,source:e,references:0,queue:Promise.resolve(),progressSinks:new Set,runtime:null,objectiveCRuntime:{pending:null,builds:0},compilerOutput:()=>{}},t;try{t=await e.loadManifest()}catch(a){throw new Error(`Failed to load the runtime manifest from ${e.description}: ${a.message}`,{cause:a})}e.installFetch();let i=new qn({runtimeBaseUrl:e.baseUrl,manifest:t,stdin:()=>"",stdout:a=>n.compilerOutput(a),progress:a=>{for(let r of n.progressSinks)r(a)},maxAssetBytes:_.maxAssetBytes??jd});return await i.ready,n.runtime=i,n}var Vr=(e,_,n)=>{let t=_.split("/").slice(0,-1),i="";for(let a of t){i=i?`${i}/${a}`:a;try{e.memfs.addDirectory(i)}catch{}}e.memfs.addFile(_,n)};async function jr(e,_={}){let n=[],t=[],i=St({args:_.args??[],env:_.env??{},files:_.files??[],programName:_.programName,stdin:_.stdin,stdout:l=>n.push(l),stderr:l=>t.push(l)}),a=new Me(i.args,i.envEntries,i.fds,{debug:!1}),r=await WebAssembly.instantiate(e,{wasi_snapshot_preview1:a.wasiImport,wasi_unstable:a.wasiImport});return{exitCode:a.start(r),stdout:n.join(""),stderr:t.join(""),readFile:l=>Kd(i,l)}}function Kd(e,_){let n=String(_).replaceAll("\\","/").split("/").filter(a=>a&&a!=="."&&a!==".."),t=e.rootDirectory;for(let a of n)if(t=t?.contents?.get(a),!t)return null;let i=t?.data;return i instanceof Uint8Array?new Uint8Array(i):i instanceof ArrayBuffer?new Uint8Array(i):null}function Yr({packaged:e}){async function _(n={}){let t=Hr(n,e),i=await Wr(t,n),a=!1;return{runtime:i.runtime,assetSource:t.description,addFile:(r,s)=>Vr(i.runtime,r,s),lock:r=>Xr(i,r),captureCompilerOutput:r=>$r(i,r),runCommand:(r,s)=>jr(r,s),execute:(r,s)=>Ri(r,s),dispose(){a||(a=!0,zr(i,n.onProgress))}}}return{createToolchain:_}}var qd=/\u001b\[[0-9;]*[A-Za-z]/g,Jd=e=>String(e??"").replace(qd,""),Zd=/^\s*>|^\s*done\.?\s*$/,Qr=e=>Jd(e).split(/\r?\n/).map(_=>_.replace(/\s+$/,"")).filter(_=>_&&!Zd.test(_));var Kr=Object.freeze(["-fgnuc-version=4.2.1"]);var{createToolchain:_c}=Yr({packaged:null});return rs(nc);})();
