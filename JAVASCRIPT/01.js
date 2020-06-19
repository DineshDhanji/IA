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



