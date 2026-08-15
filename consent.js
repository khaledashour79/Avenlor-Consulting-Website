/* Avenlor — cookie consent banner (Google Consent Mode) */
(function(){
  var KEY='avn_consent';
  var lang=((document.documentElement.lang||'en').toLowerCase().indexOf('ar')===0)?'ar':'en';
  var rtl=(document.documentElement.dir==='rtl')||lang==='ar';
  var T={
    en:{msg:'We use cookies for analytics to understand how this site is used. Analytics stay off until you accept.',accept:'Accept',decline:'Decline',more:'Privacy'},
    ar:{msg:'نستخدم ملفات تعريف الارتباط لأغراض التحليلات لفهم كيفية استخدام هذا الموقع. تبقى التحليلات معطّلة حتى توافق.',accept:'قبول',decline:'رفض',more:'الخصوصية'}
  }[lang];
  function upd(g){ try{ if(window.gtag){ gtag('consent','update',{'analytics_storage':g?'granted':'denied','ad_storage':g?'granted':'denied'}); } }catch(e){} }
  var stored; try{ stored=localStorage.getItem(KEY); }catch(e){}
  if(stored==='granted'){ upd(true); return; }
  if(stored==='denied'){ upd(false); return; }

  function build(){
    var s=document.createElement('style');
    s.textContent='#avn-cc{position:fixed;z-index:9999;left:16px;right:16px;bottom:16px;max-width:540px;margin:0 auto;'
      +'background:#111113;border:1px solid rgba(233,180,76,.35);border-radius:14px;padding:18px 20px;'
      +'box-shadow:0 20px 50px rgba(0,0,0,.55);color:#F4F1E9;'
      +'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:13.5px;line-height:1.55;'
      +'opacity:0;transform:translateY(12px);transition:opacity .4s ease,transform .4s ease;}'
      +'#avn-cc.show{opacity:1;transform:none;}'
      +'#avn-cc.rtl{direction:rtl;font-family:"Tahoma","Segoe UI",Arial,sans-serif;}'
      +'#avn-cc p{margin:0 0 14px;color:#B4AFA2;}#avn-cc a{color:#E9B44C;text-decoration:none;}'
      +'#avn-cc .row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;}'
      +'#avn-cc button{font:inherit;cursor:pointer;border:none;padding:9px 18px;border-radius:8px;font-weight:700;font-size:12.5px;}'
      +'#avn-cc .ok{background:#E9B44C;color:#0C0C0D;}#avn-cc .no{background:transparent;color:#B4AFA2;border:1px solid rgba(244,241,233,.2);}'
      +'#avn-cc .more{margin-inline-start:auto;font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;color:#8A867C;}';
    document.head.appendChild(s);
    var d=document.createElement('div');
    d.id='avn-cc'; if(rtl) d.className='rtl';
    d.setAttribute('role','dialog'); d.setAttribute('aria-label','Cookie consent');
    d.innerHTML='<p>'+T.msg+'</p><div class="row">'
      +'<button class="ok">'+T.accept+'</button>'
      +'<button class="no">'+T.decline+'</button>'
      +'<a class="more" href="'+(lang==='ar'?'/privacy.html#ar':'/privacy.html')+'">'+T.more+'</a></div>';
    document.body.appendChild(d);
    requestAnimationFrame(function(){ d.classList.add('show'); });
    d.querySelector('.ok').onclick=function(){ try{localStorage.setItem(KEY,'granted');}catch(e){} upd(true); d.remove(); };
    d.querySelector('.no').onclick=function(){ try{localStorage.setItem(KEY,'denied');}catch(e){} upd(false); d.remove(); };
  }
  if(document.body){ build(); } else { document.addEventListener('DOMContentLoaded', build); }
})();
