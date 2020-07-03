// It shows navigation bar.
function navShow(a)
{
    var z = document.getElementsByClassName("nav-toggle")[a].childNodes[1].innerHTML

    if (z == `<i class="fas fa-bars"></i>`)
    {
        document.getElementsByClassName("nav-toggle")[a].childNodes[1].innerHTML = `<i class="fas fa-times"></i>`;
    }
    else
    {
        document.getElementsByClassName("nav-toggle")[a].childNodes[1].innerHTML = `<i class="fas fa-bars"></i>`;
    }

    document.getElementsByClassName("nav-toggle")[a].classList.toggle("nav-toggle-btn");
    document.getElementsByClassName("nav-cont")[0].classList.toggle("nav-cont-show");
}

// It hide navigation bar.
function navBarHide()
{
    var b = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList[0]
    if (b !== "nav-cont")
    {
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("nav-bar-hide");
    }
    else
    {
        event.target.parentElement.parentElement.parentElement.parentElement.classList.toggle("nav-bar-hide");
    }

    var d = event.target.parentElement.classList[0];
    if (d !== "nav-head")
    {
        event.target.parentElement.classList.toggle("nav-hide-btn");
    }
    else
    {
        event.target.classList.toggle("nav-hide-btn");
    }
}

// Change Image
function  changeImg()
{
    var image = event.target.src;
    document.getElementsByClassName("pdt-main-img")[0].childNodes[1].childNodes[1].src = image; 
    
    var currentImg = document.getElementsByClassName("pdt-main-img")[0].childNodes[1].childNodes[1].src;
    var allImg = document.getElementsByClassName("pdt-sub-img");
    for (var i = 0; i < allImg.length; i++)
    {
        if (currentImg == allImg[i].children[0].src)
        {
           var a = allImg[i].children[0].parentNode.style.border = '2px solid #1A73E8';
        }
        else
        {
            var a = allImg[i].children[0].parentNode.style.border = '1px solid lightgrey';
        }    
    }
}

var currentImg = document.getElementsByClassName("pdt-main-img")[0].childNodes[1].childNodes[1].src;
var allImg = document.getElementsByClassName("pdt-sub-img");
for (var i = 0; i < allImg.length; i++)
{
    if (currentImg == allImg[i].children[0].src)
    {
        var a =allImg[i].children[0].parentNode.style.border = '2px solid #1A73E8';
    }    
    else
    {
        var a = allImg[i].children[0].parentNode.style.border = '1px solid lightgrey';
    }    
}


