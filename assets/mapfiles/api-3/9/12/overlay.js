google.maps.__gjsload__('overlay', '\'use strict\';function Pt(a){this.b=a}J(Pt,V);Ra(Pt[F],function(a){"outProjection"!=a&&(a=!(!this.get("offset")||!this.get("projectionTopLeft")||!this.get("projection")||!K(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.b:k))});function Qt(){}function Rt(){var a=this.gm_props_;if(this[Jj]()){if(this[Yj]()){if(!a.of&&this.onAdd)this.onAdd();a.of=j;this.draw()}}else{if(a.of)if(this[wc])this[wc]();else this[qb]();a.of=l}}function St(a){a.gm_props_=a.gm_props_||new Qt;return a.gm_props_};function Tt(){}\nTt[F].b=function(a){var b=a[Qb](),c=St(a),d=c.Qb;c.Qb=b;d&&(c=St(a),(d=c.Ca)&&d[sj](),(d=c.kh)&&d[sj](),a[sj](),a.set("panes",k),a.set("projection",k),M(c.P,Q[kb]),c.P=k,c.mb&&(c.mb.Z(),c.mb.Q(),c.mb=k));if(b){c=St(a);d=c.mb;d||(d=c.mb=new Wg,d.Z=N(a,Rt));M(c.P,Q[kb]);var e=c.Ca=c.Ca||new Hl,f=b.N();e[q]("zoom",f);e[q]("offset",f);e[q]("center",f,"projectionCenterQ");e[q]("projection",b);e[q]("projectionTopLeft",f);e=c.kh=c.kh||new Pt(e);e[q]("zoom",f);e[q]("offset",f);e[q]("projection",b);e[q]("projectionTopLeft",\nf);a[q]("projection",e,"outProjection");a[q]("panes",f);e=N(d,d.O);c.P=[Q[y](a,"panes_changed",e),Q[y](f,"zoom_changed",e),Q[y](f,"offset_changed",e),Q[y](b,"projection_changed",e),Q[y](f,"projectioncenterq_changed",e),Q[v](b,We,d)];d.O()}};var Ut=new Tt;mf.overlay=function(a){eval(a)};pf("overlay",Ut);\n')

