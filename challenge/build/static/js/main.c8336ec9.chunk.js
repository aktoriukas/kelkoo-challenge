(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(7),r=s.n(n),c=s(5),o=s(2),l=s(8),d=s(0);function u(e){return Object(d.jsx)("button",{className:"button ".concat(e.class),onClick:e.click,children:e.txt})}function h(e){var t=e.card,s=t.image,a=t.sku,n=t.title,r=t.description,c=t.price,l=Object(i.useState)("Add to Basket \xa3".concat(c)),h=Object(o.a)(l,2),p=h[0],m=h[1],b=Object(i.useState)(""),g=Object(o.a)(b,2),j=g[0],f=g[1],y=function(e){var t=e.split("- ");return(t=t.map((function(e){return e||void 0}))).filter(Boolean)}(r);return Object(d.jsxs)("section",{className:"card",children:[Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{className:"img",src:"./".concat(s),alt:n})}),Object(d.jsx)("h3",{className:"title",children:n}),Object(d.jsx)("div",{className:"sku",children:a}),Object(d.jsx)("ul",{className:"points",children:y.map((function(e){return Object(d.jsx)("li",{className:"point",children:e},e)}))})]}),Object(d.jsx)(u,{click:function(){return t=e.card,e.addItem(t),m("Item added"),f("added"),void setTimeout((function(){m("Add to Basket \xa3".concat(c)),f("")}),3e3);var t},class:"bottom ".concat(j),txt:p})]})}function p(e){var t=e.item,s=t.title,i=t.price,a=t.productId,n=t.count;return Object(d.jsxs)("section",{className:"item grid",children:[Object(d.jsx)("h4",{className:"name",children:s}),Object(d.jsx)(u,{class:"remove",txt:"remove",click:function(){return e.removeItem(a)}}),Object(d.jsxs)("div",{className:"count",children:["x",n]}),Object(d.jsx)("div",{className:"price",children:(Math.round(i*n*100)/100).toFixed(2)})]})}function m(e){var t=Object(i.useState)(0),s=Object(o.a)(t,2),a=s[0],n=s[1],r=e.items;return Object(i.useEffect)((function(){!function(){var e=0;r.length&&r.forEach((function(t){e+=t.price*t.count})),n((Math.round(100*e)/100).toFixed(2))}()})),Object(d.jsxs)("div",{id:"basket",children:[r.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"title",children:"Your Items:"}),r.map((function(t){return Object(d.jsx)(p,{item:t,removeItem:e.removeItem},t.productId)}))]}):Object(d.jsx)("h2",{className:"title",children:"Your shop basket is empty."}),Object(d.jsxs)("div",{className:"total",children:["Total:",Object(d.jsx)("span",{className:"sum price",children:a})]}),Object(d.jsx)("span",{onClick:function(){return e.setBasket(!1)},className:"x",children:"\u2716"})]})}var b=s.p+"static/media/sales.7a8abab3.jpg";function g(e){var t=Object(i.useState)(!1),s=Object(o.a)(t,2),a=s[0],n=s[1],r=Object(i.useState)(0),p=Object(o.a)(r,2),g=p[0],j=p[1],f=Object(i.useState)([]),y=Object(o.a)(f,2),v=y[0],O=y[1],k=function(e){var t;e.count=null!==(t=e.count)&&void 0!==t?t:1,0===e.count&&(e.count=1),j(g+1);for(var s=0;s<v.length;s++)if(v[s].productId===e.productId){var i=Object(c.a)(v);return i[s].count++,void O(i)}O([].concat(Object(c.a)(v),[e]))},x=l.map((function(e){return Object(d.jsx)(h,{addItem:k,card:e},e.productId)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{className:"logo",children:"SHOP"}),Object(d.jsx)(u,{class:"basket",click:function(){return n(!a)},txt:"show basket (".concat(g||"empty",")")}),a?Object(d.jsx)(m,{removeItem:function(e){for(var t=0;t<v.length;t++)if(v[t].productId===e){var s=Object(c.a)(v);return s[t].count--,j(g-1),0===s[t].count?void O(s.filter((function(t){return t.productId!==e}))):void O(s)}},setBasket:n,items:v}):""]}),Object(d.jsx)("div",{className:"products grid",children:x}),Object(d.jsx)("div",{className:"background",children:Object(d.jsx)("img",{src:b,alt:"background"})})]})}s(14);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"productId":"302923","sku":"549-3179","title":"Russell Hobbs Pennine Illuminating S Steel Kettle","price":39.99,"description":"- 1.7 Litre glass kettle with brushed stainless steel accents.- Blue illumination on boil.-Save up to 66 percent energy saving by boiling one cup (235 ml) vs 1 Litre.- Concealed element and removable, washable filter.- Includes code for 75 percent off a bottle of Russell Hobbs multipurpose descale","image":"assets/kettle.png"},{"productId":"76y861","sku":"225-1824","title":"Challenge White Desk Fan - 12 Inch","price":9.99,"description":"The Challenge desk fan is ideal for using at work or at home. With 3 speed settings and push button controls you can have greater flexibility over the cooling speed. The sturdy base of this fan means it can be placed securely on your desk or table, perfect for supporting its oscillating feature.","image":"assets/fan.jpeg"},{"productId":"04445","sku":"vest-4445","title":"Plain Vest Top 12 BLACK","price":19,"description":"EXTREMELY SOFT ECO-WEAR: This seamless tank top is made of high-quality bamboo viscose that will feel smooth on your skin and gently fit close to your body. This cami top has a flattering neckline and adjustable spaghetti straps to fit your figure","image":"assets/vest.png"},{"productId":"ten909897","sku":"404-9641","title":"Wilson Roger Federer 27 Inch Adult Tennis Racket","price":54.99,"description":"A superb entry level tennis racket, the Wilson Pro Staff Precision understands that everyone starts out new but need a superb quality racket to help build skills. A great value, great quality, lightweight construction ready to get you started on the tennis court. The volcanic frame technology gives you stability without sacrificing power which is provided by the Wilson Power strings feature. The oversized head will give players a large and forgiving sweet spot.","image":"assets/racket.jpeg"},{"productId":"5399235","sku":"539-9235","title":"My Little Pony Cutie Mark Rainbow Dash","price":24.99,"description":"- Includes Rainbow Dash, Rarity, Pinkie Pie & Fluttershy Ponies Figures.- Each Pony Comes with a Different Bracelet.- Ponies are Approximately 3 Inches.- You can scan the figure\u2019s Cutie Mark to unlock the character in the My Little Pony","image":"assets/pony.jpeg"},{"productId":"9873827","sku":"754-3412","title":"Sim Free iPhone X 256GB Mobile Phone- Space Grey","price":895,"description":"Originally released September 2017.- Unlocked, SIM-Free, Model A19011.- 5.8-inch Super Retina HD display with OLED technology.- A11 Bionic chip with embedded M11 motion coprocessor.- Talk time (wireless) up to 21 hours.- LTE and 802.11ac Wi\u2011Fi with MIMO.- Bluetooth 5.0 wireless technology.- NFC with reader mode.- 12MP wide-angle and telephoto cameras.- Digital zoom up to 10x.- 1080p HD video recording.- 7MP TrueDepth camera with Portrait mode.- Face ID.- Siri.- Apple Pay.- 6.14 ounces and 0.30 inches","image":"assets/iPhone.jpeg"},{"productId":"7067462","sku":"706-7462","title":"Assassin\'s Creed Origins PS4 Game","price":30.99,"description":"Experience a new way to fight while exploring the great pyramids and hidden tombs across the country of Ancient Egypt. Live emotional and memorable adventures along your journey and discover the origin story of the Assassin\'s Brotherhood. Set in mysterious Ancient Egypt, Assassin\'s Creed Origins is a new beginning on PlayStation 4 and Xbox One. The Hidden Ones: This story-driven expansion builds upon the growth of the Brotherhood, taking players to a point years after the events of Assassin\u2019s Creed Origins, as they clash with an occupying Roman force in a new region. This expansion will extend the level cap, allowing players to keep on making their character progress. Buy your Season Pass now to play The Hidden Ones and future expansions.","image":"assets/Game.jpeg"},{"productId":"7426735","sku":"742-6735","title":"Duracell Supreme 750 mAh Rechargeable AAA Batteries - 4 Pack","price":8.99,"description":"These Duracell AAA rechargeable batteries are excellent which makes them ideal for digital and everyday devices. Take up to 3 times more pictures (vs. Duracell Plus AAAs). With hundreds of charge cycles and they are a great economic and environmental choice which can be used any where AAA batteries are used. Average usage times include up to 45 hours in wireless mouse, 5 hours in games controllers or 275 pictures in digital cameras. Duracell Rechargeable batteries offer high-performance from a brand you can trust. *Please note: These will need to be charged before first use.","image":"assets/batteries.jpeg"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.c8336ec9.chunk.js.map