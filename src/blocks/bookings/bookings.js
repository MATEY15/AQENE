var checkCalendar = document.querySelector('#calendar');
if(checkCalendar) {
    calendarInit();
}

(function(e){
    e.closest = e.closest || function(css){
        var node = this;

        while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
        }
        return null;
    }
})(Element.prototype);
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}


function calendarInit() {

    function calendar(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate();
        var D = new Date(year, month, Dlast);
        var DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay();
        var DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay();
        var calendar = '<tr>';
        var monthNum = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var dateTitle = document.querySelector('.current-date');


        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td><span class="current">' + i;
            }
            // else if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0 || new Date(D.getFullYear(),D.getMonth(),i).getDay() == 6) {
            //     calendar += '<td class="output" data-current="'+D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i+'">' + i;
            // }
            else if (new Date(D.getFullYear(),D.getMonth(),i) < new Date()) {
                calendar += '<td><span class="output">' + i;
            }

            else {
                calendar += '<td><span>' + i;
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr><span>';
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += '<td> ';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = monthNum[D.getMonth()] + ' ' + D.getFullYear();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.monthNum = D.getMonth();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
        }

        dateTitle.innerText = monthNum[D.getMonth()] + ' ' + new Date().getDate();

        document.querySelector('#' + id + ' tbody').addEventListener('click', function(e){
            var targetTd = e.target;

            if(targetTd == targetTd.closest('span')) {
                var items = document.querySelectorAll('#' + id + ' tbody td span');
                for(var i = 0; i < items.length; i++) {
                    items[i].classList.remove('current');
                }
                targetTd.closest('span').classList.add('current');
                dateTitle.innerText = monthNum[D.getMonth()] + ' ' + targetTd.closest('span').innerText;
            }
        })


    }
    calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('.month-button--prev').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.monthNum) - 1);
    }
    document.querySelector('.month-button--next').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.monthNum) + 1);
    }

}
