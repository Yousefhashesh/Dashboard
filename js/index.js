const aside = document.querySelector('aside');
let open = document.getElementById('menu-btn');  
  let close = document.getElementById('close-btn');
  let toggleTheme = document.querySelector('.toggle-theme');
  let links = document.querySelectorAll('.sidebar a');
open.onclick=function()
{
aside.style.display='block';
}
close.onclick = function()
{
    aside.style.display='none';
}
toggleTheme.addEventListener('click', ()=>
{
    document.body.classList.toggle('dark-theme');
    toggleTheme.querySelector('span:nth-child(1)').classList.toggle('active');
    toggleTheme.querySelector('span:nth-child(2)').classList.toggle('active');
})

links.forEach((link)=>
{
    link.addEventListener('click',(ele)=>
    {
links.forEach((link)=>
{
link.classList.remove('active');
});
ele.currentTarget.classList.add("active");
    });
});

