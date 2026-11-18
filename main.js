(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('.nav-links');
  if(b&&n){b.addEventListener('click',function(){
    var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);
  });}
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  });},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e)});
})();
