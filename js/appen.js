// SCROLL SPY
let sections = document.querySelectorAll('.section-spy');
let navLinks = document.querySelectorAll('.scroll-spy li a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.scroll-spy li a[href*=' + id + ']').classList.add('active');
        }
    });
};

  //SCROLL TOP
  window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
  })

  function scrollToTop(){
    window.scrollTo({
      top: 0
    });
  };


//FORM VALIDATION
function formValidation() {
	const firstName =
		document.forms.RegForm.fname.value;
	const lastName =
		document.forms.RegForm.lname.value;
	const businessEmail =
		document.forms.RegForm.bemail.value;
	const phoneNumber =
		document.forms.RegForm.pnumber.value;

    //Javascript Regex for Email Validation.
    const regEmail = 
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
 
    // Javascript Regex for Phone Number validation.
    const regPhone = /^\d{10}$/;
 
    // Javascript Regex for Name validation
    const regName = /\d+$/g;
	
	console.log(firstName, lastName, businessEmail, phoneNumber);

  if (firstName == "" || regName.test(firstName)) {
    window.alert
    ("Please Fill the Form.");
    firstName.focus();
    return false;
}

	if (lastName === "") {
		window.alert
		("Please enter your last name.");
		lastName.focus();
		return false;
	}

	if (businessEmail === "" || !regEmail.test(businessEmail)) {
		window.alert
		("Please enter an e-mail address properly");
		businessEmail.focus();
		return false;
	}

	if (phoneNumber === "" || !regPhone.test(phoneNumber)) {
		alert("Please enter your phone number properly");
		phoneNumber.focus();
		return false;
	}

	return true;
}

     