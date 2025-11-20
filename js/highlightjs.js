// ===== FREE-FLY NOTES FUNCTION =====
const noteForm = document.getElementById('noteForm');
const notesFloatingArea = document.getElementById('notesFloatingArea');
const stars = document.querySelectorAll('#ratingStars .star');
const noteRatingInput = document.getElementById('noteRating');
const floatingContainer = document.getElementById('floatingContainer');

let notes = JSON.parse(localStorage.getItem('hikingNotes')) || [];
let selectedRating = 5;

// Initialize stars UI
function updateStarsUI() {
  stars.forEach((s,i)=> s.classList.toggle('selected', i < selectedRating));
  noteRatingInput.value = selectedRating;
}
updateStarsUI();

// Star click
stars.forEach((star,i)=>{
  star.addEventListener('click',()=>{
    selectedRating=i+1;
    updateStarsUI();
  });
});

// Create note element
function createNoteElement(note,index){
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note-item');

  const containerWidth = window.innerWidth - 250;
  const containerHeight = window.innerHeight - 120;

  noteDiv.style.left = `${Math.random()*containerWidth}px`;
  noteDiv.style.top = `${Math.random()*containerHeight}px`;

  noteDiv.dataset.v = JSON.stringify({
    x: (Math.random()*1.5+0.3)*(Math.random()<0.5?-1:1),
    y: (Math.random()*1.5+0.3)*(Math.random()<0.5?-1:1)
  });

  noteDiv.innerHTML = `
    <div class="note-header">
      <span>${note.username}</span>
      <button class="delete-note" data-index="${index}">×</button>
    </div>
    <div class="note-rating">${'★'.repeat(note.rating)}</div>
    <div class="note-text">${note.text}</div>
  `;

  notesFloatingArea.appendChild(noteDiv);
}

// Animate notes
function animateNotes(){
  const noteItems = document.querySelectorAll('.note-item');
  noteItems.forEach(n=>{
    let v = JSON.parse(n.dataset.v);
    let x=parseFloat(n.style.left)||0;
    let y=parseFloat(n.style.top)||0;

    x+=v.x;
    y+=v.y;

    const w=window.innerWidth - n.offsetWidth;
    const h=window.innerHeight - n.offsetHeight;

    if(x<0 || x>w)v.x*=-1;
    if(y<0 || y>h)v.y*=-1;

    n.style.left=x+'px';
    n.style.top=y+'px';
    n.dataset.v=JSON.stringify(v);
  });
  requestAnimationFrame(animateNotes);
}
animateNotes();

// Render all notes
function renderNotes(){
  notesFloatingArea.innerHTML='';
  notes.forEach((note,index)=> createNoteElement(note,index));
}
renderNotes();

// Delete note
notesFloatingArea.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete-note')){
    const index=parseInt(e.target.dataset.index);
    if(!isNaN(index)){
      notes.splice(index,1);
      localStorage.setItem('hikingNotes',JSON.stringify(notes));
      renderNotes();
    }
  }
});

// Add new note
noteForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const username=document.getElementById('username').value.trim();
  const text=document.getElementById('noteText').value.trim();
  if(!username || !text) return;

  const newNote={username,text,rating:selectedRating};
  notes.unshift(newNote);
  localStorage.setItem('hikingNotes',JSON.stringify(notes));
  renderNotes();

  // floating hearts
  for(let i=0;i<5;i++){
    const heart=document.createElement('div');
    heart.className='floating-heart';
    heart.style.left=Math.random()*window.innerWidth+'px';
    heart.style.top=(window.innerHeight-50)+'px';
    heart.textContent='❤️';
    floatingContainer.appendChild(heart);
    setTimeout(()=>floatingContainer.removeChild(heart),2000);
  }

  noteForm.reset();
  selectedRating=5;
  updateStarsUI();
});

// HAMBURGER MENU FUNCTIONALITY - SIMPLE VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded'); // Debug line
    
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;

    // Check if elements exist
    if (!hamburger || !nav || !menuOverlay) {
        console.log('Missing elements:', { hamburger, nav, menuOverlay });
        return;
    }

    console.log('All elements found'); // Debug line

    // Simple toggle function
    function toggleMenu() {
        console.log('Toggle menu clicked'); // Debug line
        
        const isActive = nav.classList.contains('active');
        
        if (!isActive) {
            // Open menu
            nav.classList.add('active');
            menuOverlay.classList.add('active');
            hamburger.classList.add('active');
            body.classList.add('menu-open');
        } else {
            // Close menu
            nav.classList.remove('active');
            menuOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        }
    }

    // Hamburger click
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Overlay click
    menuOverlay.addEventListener('click', function() {
        toggleMenu();
    });

    // Nav links click
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    })
