let ticketArray = []
    function visBilletter(){

        const name = document.getElementById("fornavn").value+
            " "+ document.getElementById("etternavn").value;
        const telefonnr = document.getElementById("telefonnr").value;
        const epost = document.getElementById("epost").value;
        const antallB = document.getElementById("antall").value;
        const film = document.getElementById("velgFilm").value;

        const kjøpBillett = {
            name: name,
            phonenmbr: telefonnr,
            email: epost,
            nmbrTickets: antallB,
            filmName: film
        };

        ticketArray.push(kjøpBillett);

        let ut = "<table><tr><th>Navn</th>" +
            "<th>Telefonnummer</th><th>Epost</th>" +
            "<th>Antall Billetter</th><th>Til Film</th></tr>";

        for (let i of ticketArray) {
            ut += "<tr>";
            ut += "<td>" + i.name + "</td><td>" + i.phonenmbr + "</td><td>" +
                i.email + "</td><td>" + i.nmbrTickets + "</td><td>" + i.filmName + "</td>";
            ut += "</tr>"
        }
        document.getElementById("utInfo").innerHTML = ut;

        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("velgFilm").value = "";

        return false;
    }

function slettBillett(){
    document.getElementById("utInfo").innerHTML = "";
    ticketArray = [];
}


function sjekkEpost(epost){
    const at = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (epost.value.match(at)){
        return true;
    }else {
        document.getElementById("uglydigEpost").innerHTML="<b>Ugyldig email</b>";
        return false;
    }
}

function sjekkNavn(){
    if (name === ""||name==null){
        document.getElementById("etternavn").innerHTML="<b>Ugyldig navn</b>";
        return false;
    }
}

function sjekkTnr(phonenmbr){
    const tall = Number(phonenmbr);
    if (isNaN(tall) && phonenmbr.length !== 8){
        document.getElementById("telefonnr").innerHTML="<b>Ugyldig telefonnr</b>";
        return false;
    }
}