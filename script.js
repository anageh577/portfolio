var navbar = document.querySelector('menu')
window.onscroll = function() {
    // pageYOffset or scrollY
    if (window.pageYOffset > 20) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    if (c == 'all') {
        document.getElementById('all').classList.add('current')
        document.getElementById('webdesign').classList.remove('current')
        document.getElementById('webdev').classList.remove('current')
    } else if (c == 'webdesign') {
        document.getElementById('all').classList.remove('current')
        document.getElementById('webdesign').classList.add('current')
        document.getElementById('webdev').classList.remove('current')
    } else if (c == 'webdev') {
        document.getElementById('all').classList.remove('current')
        document.getElementById('webdesign').classList.remove('current')
        document.getElementById('webdev').classList.add('current')
    }
    var x, i;
    x = document.getElementsByClassName("project");
    if (c == "all") c = "";
    //    Add the "show" class (display:block) to the filtered elements, 
    //   and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function activeTab(tab) {
    if (tab == 'all') {
        document.getElementById('all').classList.add('current')
        document.getElementById('webdesign').classList.remove('current')
        document.getElementById('webdev').classList.remove('current')
    } else if (tab == 'webdesign') {
        document.getElementById('all').classList.remove('current')
        document.getElementById('webdesign').classList.add('current')
        document.getElementById('webdev').classList.remove('current')
    } else if (tab == 'webdev') {
        document.getElementById('all').classList.remove('current')
        document.getElementById('webdesign').classList.remove('current')
        document.getElementById('webdev').classList.add('current')
    }
}
// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// filterSelection("all") // Execute the function and show all columns
// function filterSelection(c) {
//     if (c == 'all') {
//         document.getElementById('all').classList.add('current')
//         document.getElementById('solo').classList.remove('current')
//         document.getElementById('team').classList.remove('current')
//     } else if (c == 'solo') {
//         document.getElementById('all').classList.remove('current')
//         document.getElementById('solo').classList.add('current')
//         document.getElementById('team').classList.remove('current')
//     } else if (c == 'team') {
//         document.getElementById('all').classList.remove('current')
//         document.getElementById('solo').classList.remove('current')
//         document.getElementById('team').classList.add('current')
//     }
//     var x, i;
//     x = document.getElementsByClassName("project");
//     if (c == "all") {
//         console.log('');
//         c = "";
//     }
//     for (i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) {
//             addClass(x[i], "show")
//         };
//     }
// }

// // Show filtered elements
// function addClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// // Hide elements that are not selected
// function removeClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnWrapper");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}