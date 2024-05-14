var _0x6a4baa = (function () {
  var _0x559825 = true;
  return function (_0x6b2413, _0x6a5ee7) {
    var _0x3e59ea = _0x559825
      ? function () {
          if (_0x6a5ee7) {
            var _0x26685f = _0x6a5ee7.apply(_0x6b2413, arguments);
            _0x6a5ee7 = null;
            return _0x26685f;
          }
        }
      : function () {};
    _0x559825 = false;
    return _0x3e59ea;
  };
})();
(function () {
  _0x6a4baa(this, function () {
    var _0x28243e = new RegExp('function *\\( *\\)');
    var _0x5e9b6a = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
    var _0x43dd16 = _0x37a8ef('init');
    if (
      !_0x28243e.test(_0x43dd16 + 'chain') ||
      !_0x5e9b6a.test(_0x43dd16 + 'input')
    ) {
      _0x43dd16('0');
    } else {
      _0x37a8ef();
    }
  })();
})();
var _0x79358 = (function () {
  var _0x1c5b83 = true;
  return function (_0x185468, _0x19eeab) {
    var _0x16e0c3 = _0x1c5b83
      ? function () {
          if (_0x19eeab) {
            var _0x234324 = _0x19eeab.apply(_0x185468, arguments);
            _0x19eeab = null;
            return _0x234324;
          }
        }
      : function () {};
    _0x1c5b83 = false;
    return _0x16e0c3;
  };
})();
var _0x4a700b = _0x79358(this, function () {
  var _0x1c8d62 = function () {
    var _0x1dc353;
    try {
      _0x1dc353 = Function(
        'return (function() {}.constructor("return this")( ));'
      )();
    } catch (_0x4b9750) {
      _0x1dc353 = window;
    }
    return _0x1dc353;
  };
  var _0x405808 = _0x1c8d62();
  var _0x135a54 = (_0x405808.console = _0x405808.console || {});
  var _0xd4f764 = [
    'log',
    'warn',
    'info',
    'error',
    'exception',
    'table',
    'trace'
  ];
  for (var _0x238c46 = 0; _0x238c46 < _0xd4f764.length; _0x238c46++) {
    var _0x117cf0 = _0x79358.constructor.prototype.bind(_0x79358);
    var _0x121c65 = _0xd4f764[_0x238c46];
    var _0x38baef = _0x135a54[_0x121c65] || _0x117cf0;
    _0x117cf0.__proto__ = _0x79358.bind(_0x79358);
    _0x117cf0.toString = _0x38baef.toString.bind(_0x38baef);
    _0x135a54[_0x121c65] = _0x117cf0;
  }
});
_0x4a700b();
indexedDB.deleteDatabase('strangeStorage');
var _0x809afe = indexedDB.open('strangeStorage', 1);
_0x809afe.onupgradeneeded = function (_0x59e855) {
  var _0x456757 = _0x59e855.target.result;
  var _0x7218b7 = {
    keyPath: 'id',
    autoIncrement: true
  };
  var _0x2f608f = _0x456757.createObjectStore('FLAG', _0x7218b7);
  var _0xc66b92 = {
    unique: false
  };
  _0x2f608f.createIndex('letter', 'letter', _0xc66b92);
};
_0x809afe.onsuccess = function (_0x3f71b4) {
  var _0xbbeec6 = _0x3f71b4.target.result;
  var _0x3fc316 = _0xbbeec6.transaction(['FLAG'], 'readwrite');
  var _0x1c285d = _0x3fc316.objectStore('FLAG');
  enc = [
    'UW=(X4s}@(BFLzW1(2}vGpzzgQNy;&L4H??)(5Q+40sB|^/s2bRfBst-x[ELa|VNS)uoYsX3P]`Fx36ClT_HA?rl',
    'x2vNb[l2pC%MC5oxokwaJJqhSu:(;*.JGc00kaifhKSVLU&k2i5EJ3oXEHXrYT_]3m8>R96KrI~YU1h>HGH_?p&U',
    '2zF<{.cX(FnPkZ-Gb=d_ai_|D/%IThGM/]qA9+.%kP)><iQm0CUIs;aN/;p9p<|rjgtQ9-1Xv1*Bu({qC.DaaFV6',
    'yv6sNzt487])%+n5[Ugqkhg<C=7Gd=8oF5>n|7xFwA:0mv?ze0{>jFJKB0sOd6>BhY-.tr>|`yaAg@-aN4zx15a;',
    'e{:VdQ<wEyU5[P~Gkm(Mw^L:QRV`NAk9rYZ;ut1c76wND57X)v=l(6INCS2u[0`B]~HxsI<C1_z},tLKkkv0p_Da',
    'I/}5rG=`_z};R/%AjoaSvl1oTy@Vw@83}f[Zkvaf;.p%<;Z.br.SY:`mCYI,*Qm}n@Z*3sDQ.~uB+B~/~sGfXq?m',
    'U}k4JSV2s&^}O{o[:w,n%u%kI66~O=BUwz]A_>q>:@a@-:+vD_r/S?T);1=gzN-_bdp@*)[i&(SC;Mv_T%;7XCVb',
    '@Uzd3(.k;s<M3SNv/24_kZ~Sm~`[W^1W~}ZrVBc+@d=Ubh;YUadLgb[J2dXl~3mB6AL8b3]qbVvX13ezt_}XRp~7',
    '8kE8W.qSX*KZd{Xj=xTZK7-??3eRDG.8Tnh2oW~/z@1O-XUBO&.8b(QG;{iAAV_MpcrwCxV5]f)0HyCrx%)F|RVs',
    'IDzDtuXl+1h<tid~eNTk@^%8Ss`0`8H},r(cpd[</qsq}CqjVwXc3mB,5-g9DPw^/>*3BmIPVjAW/EJgu4;+:rT.',
    '258b.?h^4z9Yl5ReaVmt{ISUYF?lBTwA_}1_aPl~,XhiQrgmor4U`v&BU7^}m*t-~<=,0fu1m?X]M}TLN<WSq,6*',
    '3[)24ETwc`awBw2ALb;coX+rJ`v32Cjk.4QM`G1PP`d}>6r;C2IGP{k.*S%bD8:{k,mv2fL(caRx(*hC7f|VwxMo',
    '1t;},n:[Q|hBW,RABu4Y|*VC[&s+PwPGkp{^3*CTQ.cbNflf}C}9W5og3UmbXZS:KX*{Bp=v|h=)?t+eog73QDno',
    'Q)ZWa.>3{tf(mLXV]BMWU27y7&41u)JUJ3Y(tGAl5]q|;mw5:)TB`>th^]P&}PdS_f4U7kX0PgBeCIW/r}zMx.GO',
    'Ps~4m3mM8oyToE7hoB..BBgq4vdo%o9PpS{RE/*nhcl6k]WCFyZ=zoPcXTeV/JX[5c8g|{qz&TZe^ugVj,{]fz.K',
    '8jMPAumDx,zP8y.ipjtu>A,T4{&E5qRCZX[fYpvq{6hKs+]^[2D,/ztnOdLO>d]WdpWU,S*h}Er>+bi@tq8:R~oG',
    'EokWoO50yq{2~gf.tjg/6<ShU9%i/>ZK}9zv]rv<]+yCU@]s16IQ5tAkerc^{ew?o&?@,Tb*iK5;xAQf?4C)}>pf',
    'i0J.eh%3x*?kXb|o[IufMO{<RcpSB.<3x4<BZJ&PrOD&d?W5]eP_qI=8~G_>UaU}(G<zGJ=mv35vDU=1/P/sC}^w',
    's|CY5w<X=gl.xs2zfVLQ%52u;a^viif`~nRUBS*apHegKE5ULC3ZrgXspoebvZB^OJ/o@w6>vQ8{376^*>OU)F)H',
    '8sWizv)A^|fX>P%C&@{7HzE:_PhW&7/anqn|]-b?3}s6sgkyltUfY6Paj0]JtdH%X&Qv>T(mvOCQAsjw(.8o`Ic8',
    '|xh;pXksU@i7xUhY1eMnTB%p({7_iXOh9+qAxf&xQ;.L)Bu)N0k-p7>HrH2fW1S8P>JCvziNG2.{J1isg|S:UbR:',
    'K1@I`M`wd~hxR^k~d,a3fZ7tR0i>cOj0suu}..,W]uqL<nAkrd9TSYR]7Y8U<Lf4R7iim9WyZR*eEoQ(VQ^zkgwl',
    '[2]~Oa^VB_^@uU)7}OtW@Mc7twW)5=a)|</rUza]<~W&8fGTDPHn9k(wjmQ~D_H=NT,TxtRavl{Zk|wKoHmy1g`B',
    '_fNYy8C9_kX4K)C(KVGI?w[L?ERYWdH<[zub66}e&>TdPh2Xo|wgQSleK@U=]yI*x,_oiPMyfA7Aq=/|7HSEDv<=',
    '&xexFCk2;4t[e[lmGQ@9Y]nkT25&:.LMdA<JV/P<LnQ/sGGA2Eob?<=ZI>5Vo1vmI2&-R8{mS%~DPu~8>e|_wy%h',
    'b@6xHZx|U3[LJ6113{P%V)7XaP}[Z[x?HP]{{zVo^JvtmW~J>nlvlkO4+r-V:KI<VVNmQRlG?A1o(B)](Snh_mxG',
    '3|VfJbm`,p+QIh0`XDg{r0IRtB/Y*~xmgMh3}&88<_YM4,{[uyZXmU>zmBz~MKTiQj%2lv<zwY)*y6rYKZ{V(iUi',
    'SQK5iGzhYLkf-vM4?N^SP1IVwpQeCF:,Uj%~J]%M`.v`fo(nro<]j_S96,vvf_pyL{H5?T4[]44SsPn0oxHUbmV2',
    'D_:,>[T1B_HGrVM`h07jzD6Whjy|19]tO}ni/{O)M;@.?tMW;077{vMk_Ml|1,Pf*ABZ{4@NItZ}4YDYG/Q{?@@P',
    '@i0U:GG.igI|[*wja@%avmoY>^8L+uP4DgrAI[8cc@]8R(FtovK.b/eNn=MR1L|R}5fSQ(h)Eg9KLOonPuwqrPCs',
    'of,XWfyq7WGAAdQ55GKh;Xww^(|G^flGR}`%(CdlkhK&;`j@zsq1lmIXVX:IX/s3[P4I_Y5G)MUSKDjwb.4._-IP',
    'Us;~Jf}ljPHF|e3+aj=Cmu+KevLzviErlcJhlK1k_aWHd<8l~fpe+erTGx~OgF5S:06>)^,{+i:.VYE2,P.o2d5w',
    '@tH:+O1|i/~H<G1@YS8vGIltgZB:<ysmZT*6(.F[1iRtnmKM/.o4aQ:[LVyQc*`pe53mBT.9eaDsRq_2sE~ASD*f',
    'uqn%jO4+j/F4-&o1XHtr;7+l6df)Kigl@o?*_22@bdg=WP3NC1zGKHWW&?dX_;zu9R-`0b&c-?mg|24n.SyQd.mH',
    'PNNgJ6Tx,5vrt8<53,BcD[4W<rQtKhFo}Ll5k|PgaA8yH3Mp8~4lXU_y=<G]|jEW8+[+E5os_arhil-i1W~bU[nG',
    '^P5imZwm9ELA|m)cil<]TgSW==L5`/Q=0-II.&^)WG,bs~E=(ztL)9`s}MMoK^mNBRp}/Ywde0NlbspZ8[>.Epyu',
    '9)%[LiszR,k;1{W3ICzpt)%Jchzw|CA1YMgY9oal39vFt:qIP5zJ0o)ljW?Zo?-L@3}.:.(|;q:]=k2)*}[l2?{}',
    '[gFVA[6P6mCvK~}SVH@ZfS3g;-`Up3>_o5JS~A:gH3P24AeT^|7i/&epc,H_gYw6Tfi9oekQ:8eL)Zp{:eVa=jQW',
    'nr_w86vGn5xbGx|Q.GlW;>56D=sn+OQ>t47GrYH3Uk8OK;fH5Sbdoa/`ymOITn7pVx(3+./>05NJN_fZ:PV.sD52',
    'WcmTk](E~|>Z|/;eUBzSkw.S%,.Vy`%W/.~q2t2T/B-]ndS)xB}uxTXmX89:UEM(q1EnFa74g|_[)G.0GZ/<+ScZ',
    'FL_BHZm7US3sI&VROn4_S6r.dL?X-uqk-ON(GI}*AzR;[D.OqV8DnW=b],JRDO]|/+d=r1RXv%X8/8H(^M+m0}`Y',
    'oZbJj;[QD}BK@vl-E.;mq~HEtszX^mJq:lTX3~V.P8~0Ikn(,zz%(@DsU9s][(1I5M@.ESs)G8UF]OWfr.t<;n^v',
    '=:,np)csTvwu8zzfzOt1])eQ&mpQOrHQ9kEjwA=elAOz5`1iRf@jK~?|S<?q_wh9.9*1Gb?;iWhAGB/+nt5]I7jF',
    ';/Vd;WTU6AQ<^n`3PK.p{].*pLb1%Kw}_>_MHF%Q3u=B=cBxO,mb2A20`Ar:<PR0pJ^1SaeviR85uTnP`XmQ<Rv9',
    'Hp*u.@%em190hWrcK.VqBMVfz-jTw6=_Koe1|+tc}4XDG>q:j5wrEeO,>83S.?X|}xMfXe@;Ip;Bb0W%(H}I1OG]',
    'v-)?F9c;h&2HB:PlMxH^fTEAAb30b56&o|MUiHZ5.H@7UOJka3HG8Y2g]P;9h*1-&dRpwE^s@.F-Qp;giVlV8|{:',
    'AB|5|K|T-SZZKYs}wifgX;bTe}X;PWCx:=bk9t(glNwq]bCkzPhqYu^LjC+RCWKkpjHqpH.<`^Qj=/8<KL[{Y-Xx',
    'vj)pOLiC,=_^jk4_]P0D@&t&.C094N{opi}3Am?7HJkxeO%o<CXULL<yfCc<&&:0sBAh`bY?Fa7k;GO2f0*|Ql%A',
    's-5=Jz@aJ2ZY~Us(1rTf0U|auitpDk/&R_eX|M~vccV62enNdw){)|i|OU3H=}%N630:^`,cMUR4m(P7K.f^~apH',
    'g)P7yn;)<{ST.MQyaNbj3J-vR]J3l98<_g)m{S>WKQ7xPNcNlbUi=P;8t+/OjRC.AGy*Yvm>ScHVpmq9cm:x)pk+',
    '{(2.tlT.NETRRJ5Q9ab0Ht4Ym+S_MAk29*%uP:emxHy.Ah3*reZ^_bZFEFU`}WI7Gi}r+6tg_bTUnPKKAO<&}tTk',
    'j{oLA;Q+Ofna?0bMowls10]>AYNJ^R96;LsS*y_.L.2xiW|.~g5K@naR9a2AO]KE}H/]I>>Y6@(*&e)rTUZO|-Ma',
    'l;vPj~25E}ppMD|7?_1/(4SNh@Ij)|432z4^nz<*t[1|4V:;.y}EdUIc*T6`=nVL6:.d{4M,+sR~oW_*mLGU95{8',
    '8[-wpKww@X/BDZhvhg-nsFuOxpP*y=mHxDhMkk,8D.NuS-=^3Fh79O4E.RjfnpmtUCm_PX^VqI^ExLJxC-PSJa6(',
    'GcEHK)Li31H&k_VJIM}Q@`fd(0h,kAl?4u]&.Eo?DUR_L,5czcC-.kx;o&0xZWl?VgBLlCl0Qj?y_k)plUG{^@Nj',
    'xxQ46y^E;un=V+buWP2e|rG66;.Lcy/uYBQR%6R]hW=/3*&Y=Cr%8z&PB{nyr)6w^;.wEh60t{UonJnRu_<:KQW|',
    'D5C+<[+eA_)v=j^;LcK5U3+]+N4,2:{}p3iw8&~0C&E+MfO?QC3cr<k0F*0@+3A{oQW>a;^NEMS7X1m&{|qDDk-e',
    '?c/vF4M&k((O[vuxScEJi&b%EGjLldmP*DZNP`-`64wLd^7p{%->elCn@48dbh..qP|2w(ZG?XK/et`]Dyxqlc}P',
    'Irm8<%]4P?_^NX.@[O;Fyv{7ShKZL7T,s?n%M^oF}ZG@id8EOw3vEA<0?R19@08uSbGCZh^>/.Ud1Hweu8][e_w=',
    'A)dbz(Zo8A9amoG?M-HD2^Uii.-Z.<FMYgPQ0n:iq.~wew3;6]5.Bw;s<WNr8J&wFxob@vX;QFMWu{O{ccB}KHD_',
    'n;/nKI/FFIn&^aRA@?&X7(ox7@u.lHvAXCP<+=WK(g*VYW:Wn.|;g7a=J2lHGqwfCqa=&?9s_XNLWH&)2j<Mw{Pb',
    '%fAbhMCd)n:Glhaf%COXH)>`_WLSD0U^s?dqUqwr`c}3|eJ&oeNmMO0QQ/EHMVi5]TEa^TM4QgL?]X{j}bz;`{z<',
    '/O[BSJ:ruJ=ldKSB.%pt%IOcX/:/@G*:8NDH}p).Y&1h7./OY44AN;816x@=uU9;acEdKNcS))[}DPsr:o*TJ=.Q',
    '3Pnl%)O2Ai,XT}loJq.D@eC5P=c,POU[X+gkl(>r4&7C488Cl<:r)C9bVCUDEHcC{e7;nNlsc)4^~9~r4F_q)9g%',
    '`1,O=r^sO7iet<+DQT}HuUWruI,5`%s^1QWM&E<+0XvK[kL@F-O(2G8;PrvRTbPT+3>Zm,?%k.7-]q=7sey:s{dW',
    '98|R/xI.&R1~]M`nuBZs*+wAK03+>09g.*~BdjJ0%-vb%`9y+_g/^Yr>EiAaHb2VCXU7YMus{?-nG/&?&/)-r:FO',
    'JqfB2g+2`TVq^mI{x=a,ONx&%B}=KoUe=XLYU{LUx(NC4AJraI|QIFVL`,n@7`LN9`7q6hn~t^`avpsF34%pQ&%.',
    '`tkUrq+okzGoU.r}Y%Jk.[b8AX9T&oeQ5,-rcuS0/x[-WsW8,bBw3mvOehdq-^O/@{qP8i(j*i-p__^kR_I>.k>c',
    'cVdb>*gF=R@Yb(P^J_|qV4~&y*sh7h<leu}H|^<%u0nF`avd-;v~~N?4Lbe^&V^itl@+Z&UXJ|%<.xlUiFL]tP_G',
    'F*7fFndOqa,8w)51TM4}0A%=<iBka%^:7j/2s]=M(e7wcAx6D@ZJ%lUCCo98DPCT`bvc@P|C`cvr~g{C7~8&zwZV',
    'G;GH_]9/BNUk[/@Om=9qk{wqa)n[[okQ~I?I[wOq>{TGcG{|guQS`f)OQXwXTT>?))1h2+tyG3FUaAiWijarHsNU',
    'wf>PZ2_<TDY[wQ?1o-NZG,.kOpEx:FPhK1wBA6(:Y5kCN&.mTRQ?[QnhmQ)o8y_N,aI/W9b9+F..l.V&W}726z_v',
    'T^BDSMW.=?.%{4+@+r;0}0(Ti%Sl,Y@0Qr}nXo^WLg=:>VU%k5d=dJNCWavf@h0qbsL)Mu?uI^.:AokA}Iq4d>L1',
    ':PU.1tR>)JTF<hD`-+s+eK<v1O%C-%I]Y>Fq+Kx}bXKS:1&2AjK|EfHe(q`?(a4NJ]Cs?X@89S+&?W;@DYIEC6Y(',
    's[P4OA_xFSvqBO?I]<A8Bw~Sk<s8?4hH]/~RY|`a`o)OT=]o~,:atr8s.wX(8@.rt|JBpL(nLMJ_[~+u.g.H23RE',
    'k[*@9|mH[91;Hi99-I.TkK){HzEfe}~]w^%h=n7sjFE/du(=lhs}y;1:v~}Yjs~}b8y<nXPGbsLKP4m61)^-yxk5',
    '[gFln5DBfc/i9F=8Do]yL4N^f?RQT7oY176+QT>/bec9,,%9/o_q8fs{v;)lBmmJ8|yb7d`qw3SXQyB5)_z;*/@q',
    'hl>.(hq.v?%bWZ%+yt{VjBxygdedC.mZOS^SyB2>4y_m9P9SX/c]ga(*V[zkCT-Y)|EWLvlz9.dswM3-a+Wewi.r',
    'K.UPKO]}Q`T_@HP2@cV8]ZIZNde-bZ6%J/K|hA-vh*,S,T8Z&SEPEH2mNzGxH&HqQrwj0]YQV<&+S_pYgIL]5d.>',
    '`=E;<dU@{%Ylf^F(M:S2T,;E*C/Sl>FT}?u9rv6U*@:/}FrL*^X.E;ksjya?F5C@3wH[R]Lq?k{Y1={TcMmkX_1n',
    'p<~itQ?`y|uF1t`A,:|<JLi%WfSAK9}Q:s6_-RimFt`oX:9`HEpZ.Bt=/~,j@]QtGmn{aLjI``,D.J{+ld3Rzf0b',
    '(db./E}.<Zl.,V9)M.a{AH2^yrNQhUS^zJcAgj|{k>LDT@5^*jyALY^dK@YUHDsF{R2pim0:*;/o[.k:Z+)9GF?N',
    'DvH=/UAlrCt>,lA/^i|(,a{2i/:QG(kTcM*7.3=Vk}8*hS8&%n0k{P4-D?a5y55TKZpk|sk7OnhqAbx>MpF}|~GY',
    '9k+g2,U;V3NRq<(.~4?I]7cM^O,NV.hOsLfu:}ra)@iA+lEw@l/=8@_mT{aF~nHOZ@g^jBcPf0/aZ*^xK]Sw.hy~',
    'z4IHoAJHGHaxOKA1;9S_j9N.WulIgZ_OaTUt-2^2>9~}Pk?m5-)=@Qhd?I4_:iC|mB~)yR&Ep(cnP/a-).h%e;ER',
    'n%4y}Tf>vmO)S>5sYqPkx.}.C0wZgy%8[J9f`I8LP4v(<IILF,60I5GC8Yi3KSIM,r(geakO&Yj6{t9O6Y+a]wgb',
    'Y}Z)%91f.w|ZXEktUo(L:qhxqlTS}[ot&DwDH%8m/kTe+-99-U?d9^*L~TuTvsSHVv>?+P4|,;D*zy<tG>@jy|=8',
    '>aA/`=:_6ZhJm)eN;h;L>+~Q^6@RJUtR+H^]Q0kbsMd3c.Sk8{n,J>Hb*bOHnaJ2AdBFnA`MK[v5itlMJw-h|G/='
  ];
  for (const _0x5f3204 in enc) {
    var _0x21f56e = enc[_0x5f3204][_0x5f3204].charCodeAt();
    var _0x160000 =
      ((_0x21f56e * _0x21f56e +
        3 * _0x21f56e +
        1 -
        (_0x21f56e + 1) * (_0x21f56e + 1)) *
        ((2 * (_0x5f3204 + 1)) / (_0x5f3204 + 1))) >>
      1;
    _0x1c285d.add({
      letter: String.fromCharCode(_0x160000)
    });
  }
};
code = atob(
  'Q3J5cHRvSlMuQUVTLmRlY3J5cHQoQ0lQSEVSVEVYVCwgS0VZKS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk='
);
var _0x1b9dd8 = {
  code: code
};
localStorage.setItem('execute', JSON.stringify(_0x1b9dd8));
sessionStorage.setItem('KEY', atob('c2VjcmV0IGtleSBpcyB2ZXJ5IHNlY3VyZQ=='));
function _0x37a8ef(_0x175bf1) {
  function _0x640de6(_0x86088a) {
    if (typeof _0x86088a === 'string') {
      return function (_0x5d7aa5) {}
        .constructor('while (true) {}')
        .apply('counter');
    } else {
      if (('' + _0x86088a / _0x86088a).length !== 1 || _0x86088a % 20 === 0) {
        (function () {
          return true;
        })
          .constructor('debugger')
          .call('action');
      } else {
        (function () {
          return false;
        })
          .constructor('debugger')
          .apply('stateObject');
      }
    }
    _0x640de6(++_0x86088a);
  }
  try {
    if (_0x175bf1) {
      return _0x640de6;
    } else {
      _0x640de6(0);
    }
  } catch (_0x9bd8f7) {}
}
