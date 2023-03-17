const lista = [
    {
        nev: "Gergő",
        tul1: "kék szem",
        tul2: "asd",
    }, {
        nev: "Dani",
        tul1: "zöld szem",
        tul2: "dsa",
    }, {
        nev: "Dominik",
        tul1: "barna szem",
        tul2: "sdadsasd",
    }
]

$(function () {
    let txt = kiir();
    const TABLE = $("table");
    TABLE.append(txt);
});

function kiir() {
    let txt = "<tr><th>nev</th><th>tul 1</th><th>tul 2</th>";
    for (let i = 0; i < lista.length; i++) {
        txt += `<tr><td>${lista[i].nev}</td><td>${lista[i].tul1}</td><td>${lista[i].tul2}</td></tr>`;
    }
    return txt;
}