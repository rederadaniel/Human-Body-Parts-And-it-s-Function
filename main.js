function highlightPart(part) {
  // R highlight
  document.querySelectorAll('.part').forEach(el => {
    el.classList.remove('clicked');
  });

  // Highlight onclick!
  part.classList.add('clicked');
  document.getElementById('overlay').style.display = 'block';
}

function removeHighlight() {
  document.querySelectorAll('.part').forEach(el => {
    el.classList.remove('clicked');
  });
  document.getElementById('overlay').style.display = 'none';
}

function openPopup(title, imageSrc, description) {
  document.getElementById('popup-img').src = imageSrc;
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-desc').innerText = description;

  document.getElementById('popup').style.display = 'flex';
  document.getElementById('overlay').style.display = 'block';
}

function openRightPopup(title, imageSrc, description) {
  document.getElementById('right-popup-img').src = imageSrc;
  document.getElementById('right-popup-title').innerText = title;
  document.getElementById('right-popup-desc').innerText = description;

  document.getElementById('right-popup').style.display = 'flex';
  document.getElementById('overlay').style.display = 'block';
}

function openLeftPopup(title, imageSrc, description) {
  document.getElementById('left-popup-img').src = imageSrc;
  document.getElementById('left-popup-title').innerText = title;
  document.getElementById('left-popup-desc').innerText = description;

  document.getElementById('left-popup').style.display = 'flex';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  // Popups close!
  ['popup', 'right-popup', 'left-popup'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById('overlay').style.display = 'none';
}

// Add event listeners for closing popups!
document.getElementById('overlay').addEventListener('click', closePopup);
