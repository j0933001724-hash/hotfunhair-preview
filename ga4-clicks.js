/* GA4 點擊事件：LINE / 電話 / 地圖 / Google 評論（地圖連結但文字含「評論」「評價」「review」→ click_review）。只加事件監聽，不改畫面。
   page_path 會被 gtag 轉成保留欄位 dp；click_page_path 是同一路徑的一般事件參數，可在 GA4 設成自訂維度。 */
(function(){
  function kind(h,t){
    if(/^tel:/i.test(h))return 'click_phone';
    if(/line\.me|lin\.ee|995uevgh/i.test(h))return 'click_line';
    if(/google\.[a-z.]+\/maps|maps\.google\.|maps\.app\.goo\.gl|goo\.gl\/maps/i.test(h))
      return /評論|評價|reviews?/i.test(t)?'click_review':'click_map';
    return null;
  }
  document.addEventListener('click',function(e){
    var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
    if(!a)return;
    var h=a.getAttribute('href')||'',t=((a.textContent||'')+' '+(a.getAttribute('aria-label')||'')).replace(/\s+/g,' ').trim(),ev=kind(h,t);
    if(!ev||typeof window.gtag!=='function')return;
    var p={page_path:location.pathname,click_page_path:location.pathname,link_url:a.href,link_text:t.slice(0,100)};
    if(/[?&]ga_debug=1/.test(location.search))p.debug_mode=true;
    window.gtag('event',ev,p);
  },true);
})();
