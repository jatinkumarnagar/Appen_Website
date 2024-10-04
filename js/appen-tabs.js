//ONLY SWITCH TABS SCRIPT
//FOR TAB
const tabButtons = document.querySelectorAll('.tablinks');

for(var i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(){
        var tabName = this.dataset.tab;
        var tabcontent = document.getElementById(tabName);

        var allTabContent = document.querySelectorAll('.tabcontent');
        var allTabButtons = document.querySelectorAll('.tablinks');

        for(var j = 0; j < allTabContent.length; j++){
            allTabContent[j].style.display = 'none';
        }

        for(var k = 0; k < allTabButtons.length; k++){
            allTabButtons[k].classList.remove('active');
        }

        tabcontent.style.display = "block";
        this.classList.add('active');
    });
}

document.querySelector('.tablinks').click();

//FOR HOME CROWD

const tagButtons = document.querySelectorAll('.taglinks');

for(var i = 0; i < tagButtons.length; i++){
    tagButtons[i].addEventListener('click', function(){
        var tagName = this.dataset.tag;
        var tagcontent = document.getElementById(tagName);

        var allTagContent = document.querySelectorAll('.tagcontent');
        var allTagButtons = document.querySelectorAll('.taglinks');

        for(var j = 0; j < allTagContent.length; j++){
            allTagContent[j].style.display = 'none';
        }

        for(var k = 0; k < allTagButtons.length; k++){
            allTagButtons[k].classList.remove('active');
        }

        tagcontent.style.display = "block";
        this.classList.add('active');
    });
}

document.querySelector('.taglinks').click();

//FOR NAVTAB

const NavButtons = document.querySelectorAll('.navtablinks');

for(var i = 0; i < NavButtons.length; i++){
    NavButtons[i].addEventListener('click', function(){
        var NavName = this.dataset.navtab;
        var navcontent = document.getElementById(NavName);

        var allNavContent = document.querySelectorAll('.navtabcontent');
        var allNavButtons = document.querySelectorAll('.navtablinks');

        for(var j = 0; j < allNavContent.length; j++){
            allNavContent[j].style.display = 'none';
        }

        for(var k = 0; k < allNavButtons.length; k++){
            allNavButtons[k].classList.remove('active');
        }

        navcontent.style.display = "block";
        this.classList.add('active');
    });
}

document.querySelector('.navtablinks').click();

//SOURCING TAB
const SourcingButtons = document.querySelectorAll('.sourcingtablinks');

for(var i = 0; i < SourcingButtons.length; i++){
    SourcingButtons[i].addEventListener('click', function(){
        var SourcingName = this.dataset.sourcingtab;
        var sourcingtabcontent = document.getElementById(SourcingName);

        var allSourcingContent = document.querySelectorAll('.sourcingtabcontent');
        var allSourcingButtons = document.querySelectorAll('.sourcingtablinks');

        for(var j = 0; j < allSourcingContent.length; j++){
            allSourcingContent[j].style.display = 'none';
        }

        for(var k = 0; k < allSourcingButtons.length; k++){
            allSourcingButtons[k].classList.remove('active');
        }

        sourcingtabcontent.style.display = "block";
        this.classList.add('active');
    });
}

document.querySelector('.sourcingtablinks').click();

//ANNOTATION TAB

const AnnotationButtons = document.querySelectorAll('.annotationtablinks');

for(var i = 0; i < AnnotationButtons.length; i++){
    AnnotationButtons[i].addEventListener('click', function(){
        var AnnotationName = this.dataset.annotationtab;
        var annotationtabcontent = document.getElementById(AnnotationName);

        var allAnnotationContent = document.querySelectorAll('.annotationtabcontent');
        var allAnnotationButtons = document.querySelectorAll('.annotationtablinks');

        for(var j = 0; j < allAnnotationContent.length; j++){
            allAnnotationContent[j].style.display = 'none';
        }

        for(var k = 0; k < allAnnotationButtons.length; k++){
            allAnnotationButtons[k].classList.remove('active');
        }

        annotationtabcontent.style.display = "block";
        this.classList.add('active');
    });
}

document.querySelector('.annotationtablinks').click();

//EVALUATION TAB
const EvaluationButtons = document.querySelectorAll('.evaluationtablinks');

for(var i = 0; i < EvaluationButtons.length; i++){
    EvaluationButtons[i].addEventListener('click', function(){
        var EvaluationName = this.dataset.evaluationtab;
        var evaluationtabcontent = document.getElementById(EvaluationName);

        var allEvaluationContent = document.querySelectorAll('.evaluationtabcontent');
        var allEvaluationButtons = document.querySelectorAll('.evaluationtablinks');

        for(var j = 0; j < allEvaluationContent.length; j++){
            allEvaluationContent[j].style.display = 'none';
        }

        for(var k = 0; k < allEvaluationButtons.length; k++){
            allEvaluationButtons[k].classList.remove('active');
        }

        evaluationtabcontent.style.display = "block";
        this.classList.add('active');
    });
}

document.querySelector('.evaluationtablinks').click();

//TYPES TAB

const TypesButtons = document.querySelectorAll('.typestablinks');

for(var i = 0; i < TypesButtons.length; i++){
    TypesButtons[i].addEventListener('click', function(){
        var TypesName = this.dataset.typestab;
        var typestabcontent = document.getElementById(TypesName);

        var allTypesContent = document.querySelectorAll('.typestabcontent');
        var allTypesButtons = document.querySelectorAll('.typestablinks');

        for(var j = 0; j < allTypesContent.length; j++){
            allTypesContent[j].style.display = 'none';
        }

        for(var k = 0; k < allTypesButtons.length; k++){
            allTypesButtons[k].classList.remove('active');
        }

        typestabcontent.style.display = "block";
        this.classList.add('active');
    });
}

document.querySelector('.typestablinks').click();