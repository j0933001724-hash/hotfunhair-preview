/* Google Ads LINE 點擊轉換（AW-10937277015，轉換動作 line）。依 /workspace/team/data/line-tracking-spec-2026-11-18.md。
   只送轉換事件，不攔截跳轉（不 preventDefault、不用 event_callback），LINE 連結照常打開。不影響 GA4。 */
(function(){
  document.addEventListener('click',function(e){
    var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
    if(!a)return;
    var h=a.getAttribute('href')||'';
    if(!/(line\.me|lin\.ee)/i.test(h)||!/995uevgh/i.test(h))return;
    if(typeof window.gtag!=='function')return;
    window.gtag('event','conversion',{'send_to':'AW-10937277015/R2i9CIfwsIsYENe0pt8o','transport_type':'beacon'});
  },true);
})();
