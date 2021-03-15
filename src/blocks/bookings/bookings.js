let checkCalendar = document.querySelector('#calendar');
if(checkCalendar) {
    calendarInit();
}
function calendarInit() {

    function calendar(id, year, month) {
        let Dlast = new Date(year, month + 1, 0).getDate();
        let D = new Date(year, month, Dlast);
        let DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay();
        let DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay();
        let calendar = '<tr>';
        let monthNum = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        if (DNfirst != 0) {
            for (let i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (let i = 0; i < 6; i++) calendar += '<td>';
        }
        for (let i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today"><span>' + i;
            } else {
                calendar += '<td>' + i;
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (let i = DNlast; i < 7; i++) calendar += '<td> ';
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = monthNum[D.getMonth()] + ' ' + D.getFullYear();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.monthNum = D.getMonth();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
        if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
            document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
        }
    }
    calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('.month-button--prev').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.monthNum) - 1);
    }
    document.querySelector('.month-button--next').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.monthNum) + 1);
    }

}
