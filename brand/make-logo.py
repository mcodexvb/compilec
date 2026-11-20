# Regenerates the logo SVGs. Needs fonttools and brotli, and the Montserrat woff2 files from @fontsource/montserrat in fonts-src/.
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
F='fonts-src/montserrat-latin-%s.woff2'
fonts={k:TTFont(F%k) for k in ('800-normal','600-normal','500-italic')}
def text(s,x,y,size,w,track=0):
    f=fonts[w]; gs=f.getGlyphSet(); cmap=f.getBestCmap(); upm=f['head'].unitsPerEm; k=size/upm
    d=[]; cx=x
    for ch in s:
        g=cmap[ord(ch)]; pen=SVGPathPen(gs)
        gs[g].draw(TransformPen(pen,(k,0,0,-k,cx,y))); d.append(pen.getCommands())
        cx+=f['hmtx'][g][0]*k+track
    return ' '.join(d), cx-x-track
def width(s,size,w,track=0): return text(s,0,0,size,w,track)[1]

# hexagonal C, pointy top, centre (256,256)
def P(*pts): return 'M'+' L'.join('%g %g'%p for p in pts)+' Z'
o=dict(t=(256,46),ur=(438,151),lr=(438,361),b=(256,466),ll=(74,361),ul=(74,151))
i=dict(t=(256,140),ur=(357,198),lr=(357,314),b=(256,372),ll=(155,314),ul=(155,198))
body=P(o['t'],o['ul'],o['ll'],o['b'],i['b'],i['ll'],i['ul'],i['t'])
up=P(o['t'],o['ur'],i['ur'],i['t'])
lo=P(o['b'],o['lr'],i['lr'],i['b'])
# folds where the arms meet the body
fu=P(o['t'],(347,98.5),(306.5,169),i['t'])
fl=P(i['b'],(306.5,343),(347,413.5),o['b'])
DEFS='''<linearGradient id="gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e7bff"/><stop offset="1" stop-color="#0a3fe0"/></linearGradient>
<linearGradient id="ga" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#16d6f5"/></linearGradient>
<linearGradient id="gc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1873ff"/><stop offset="1" stop-color="#0a3fe0"/></linearGradient>'''
SYM='<path class="sym" d="M214 222 L180 256 L214 290 M298 222 L332 256 L298 290 M270 206 L242 306" fill="none" stroke="#23262b" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>'
DARK='<style>@media (prefers-color-scheme:dark){.sym{stroke:#e8e6e1}.ink{fill:#e8e6e1}.sub{fill:#a4a29b}.rule{stroke:#4a4d55}}</style>'
def mark(fold=True):
    s='<path d="%s" fill="url(#gb)"/><path d="%s" fill="url(#ga)"/><path d="%s" fill="url(#ga)"/>'%(body,up,lo)
    if fold: s+='<path d="%s" fill="#0a3fe0" opacity=".35"/><path d="%s" fill="#0a3fe0" opacity=".35"/>'%(fu,fl)
    return s
def svg(vb,inner,label='C Lab'):
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="%s" role="img" aria-label="%s">%s<defs>%s</defs>%s</svg>\n'%(vb,label,DARK,DEFS,inner)

R=''
open(R+'icon.svg','w').write(svg('0 0 512 512',mark()+SYM))
# app icon on white tile (home screen, needs a background)
open(R+'brand/app-icon.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs>%s</defs><rect width="512" height="512" fill="#ffffff"/><g transform="translate(51 51) scale(.8)">%s%s</g></svg>\n'%(DEFS,mark(),SYM.replace(' class="sym"','')))

# wordmark
C,cw=text('C',560,330,330,'800-normal')
L,lw=text('Lab',560+cw-6,330,330,'800-normal')
total=cw-6+lw
t1s=62; t1w=width('Powered by Clang & WebAssembly',t1s,'600-normal')
t1s=t1s*total/t1w
T1,_=text('Powered by Clang & WebAssembly',560,428,t1s,'600-normal')
t2s=38; t2w=width('Browser-native offline C compiler',t2s,'500-italic')
gap=22; side=(total-t2w)/2-gap
T2,_=text('Browser-native offline C compiler',560+side+gap,500,t2s,'500-italic')
W=560+total+20
cg='<linearGradient id="gt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e7bff"/><stop offset="1" stop-color="#0a2fe0"/></linearGradient>'
DEFS+=cg
inner=('<g transform="translate(0 24)">'+mark()+SYM+'</g>'
 +'<path d="%s" fill="url(#gt)"/><path class="ink" d="%s" fill="#23262b"/>'%(C,L)
 +'<path class="ink" d="%s" fill="#23262b"/>'%T1
 +'<path class="sub" d="%s" fill="#5d5f66"/>'%T2
 +'<path class="rule" d="M560 486 H%g M%g 486 H%g" stroke="#c9cbd0" stroke-width="3"/>'%(560+side,560+total-side,560+total))
open(R+'brand/logo-wordmark.svg','w').write(svg('0 0 %d 560'%round(W),inner,'CLab: powered by Clang and WebAssembly'))
# compact header lockup: mark + CLab
C2,_=text('C',560,370,360,'800-normal'); L2,lw2=text('Lab',560+cw*360/330-6,370,360,'800-normal')
W2=560+cw*360/330-6+lw2+10
open(R+'brand/logo-header.svg','w').write(svg('0 0 %d 512'%round(W2),mark()+SYM+'<path d="%s" fill="url(#gt)"/><path class="ink" d="%s" fill="#23262b"/>'%(C2,L2)))
print('ok',W,W2)
