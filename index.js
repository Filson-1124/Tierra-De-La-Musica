const sidebarButton=document.getElementById('toggle-button')
const sidebar= document.getElementById('sidebar')
const links= document.querySelectorAll(".link")
const muter= document.getElementById('coachella')
const muteBut=document.getElementById('muted')
const unmuteBut=document.getElementById('unmute')
const artistCard=document.getElementById('artistCard')
muter.play;
muter.volume=0.07




function toggleSideBar(){
    sidebar.classList.toggle('close')
    sidebarButton.classList.toggle('ikot')
    
    
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}


function toggleCard(link){
    link.parentElement.classList.toggle('expand');
}

function toggleFAQ(link){
    link.parentElement.parentElement.classList.toggle('xpandQuestion');
}


function mute(){
    if(muter.hasAttribute("muted")){
        muter.removeAttribute("muted")
        muter.volume = 0.1
        unmuteBut.classList.add('audioButShow')
        muteBut.classList.remove('audioButShow')
    }else{
        muter.setAttribute("muted","true")
        muter.volume= 0
        unmuteBut.classList.remove('audioButShow')
        muteBut.classList.add('audioButShow')
    }
}
function openCoachellaPasses() {
    window.open("https://www.coachella.com/passes", '_blank');
}


