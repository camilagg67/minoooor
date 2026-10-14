change = document.getElementById('change')
change.addEventListener('click', change_all)
function change_all()
    {if (document.getElementsByTagName('div')[0].innerHTML==='Губайдуллина')
       {
        document.getElementsByTagName('div')[0].innerHTML='Gubaydullina'
        document.getElementsByTagName('div')[1].innerHTML='Camila'
        document.getElementsByTagName('div')[2].innerHTML='Akhatovna'
}
else
       {if (document.getElementsByTagName('div')[0].innerHTML==='Gubaydullina')
        {
            document.getElementsByTagName('div')[0].innerHTML='Губайдуллина'
        document.getElementsByTagName('div')[1].innerHTML='Камила'
        document.getElementsByTagName('div')[2].innerHTML='Ахатовна'
    }}}