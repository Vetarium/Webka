    var myNodelist = document.getElementsByTagName("LI");
  
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }


    var list = document.querySelector('ul');
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
        }
    }, false)

   

    function newElement() {
        var li = document.createElement("LI");
        var inputValue = document.getElementById("taskInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Get out lazzy ass, or write a task!");
        }

        

        else {
            document.getElementById("taskText").appendChild(li);
        }
        document.getElementById("taskInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        var close = document.getElementsByClassName('close')
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                var ul = div.parentElement;
                ul.removeChild(div);
            }
        }
        
        var a = document.getElementById("taskText").children;
        for( var i = 0 ; i < a.length ; i++ ){
            console.log(a[i].textContent);
            console.log(inputValue+"\u00D7");
            console.log("\n");
            if(a[i].textContent == inputValue+"\u00D7"){
                alert("yra");
            }
        }
    
        

      
    }
