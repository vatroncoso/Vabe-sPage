/* Hobber nav-bar itemes*/
	var linkClicked = document.getElementsByClassName('nav-link');
	var numClass = linkClicked.length;

	for (var i = 0; i < numClass; i++) {
			linkClicked[i].addEventListener('click', function(){
		var onTheMoment = document.getElementsByClassName('active');
				onTheMoment[0].className = onTheMoment[0].className.replace(' active', '');
				this.className += ' active';
		}, false);
		}

/* Scroll to top and menu button  */
	
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.getElementById("menu");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		mybutton.style.display = "block";
		mybutton2.style.display = "block";

	
	} else {
		mybutton.style.display = "none";
		mybutton2.style.display = "none";
	}
}
	
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Contact form
  const $form = document.querySelector('#form')

  $form.addEventListener('submit', handleSubmit)

  function handleSubmit(event){
	event.preventDefault()
	const form = new FormData(this)
	console.log(form.get('name'))
  }
  */