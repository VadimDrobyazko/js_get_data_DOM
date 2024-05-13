var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=[];t.forEach(function(t){var e=+t.textContent.replace(/,/g,"");n.push(e)});var r=n.reduce(function(t,e){return t+e},0);e.textContent=r.toLocaleString("en-US"),o.textContent=(r/t.length).toLocaleString();
//# sourceMappingURL=index.f20ad32a.js.map
