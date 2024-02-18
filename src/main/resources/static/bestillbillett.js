let ticketArray = []
    function visBilletter(){
        const name = document.getElementById("fornavn").value+
            " "+ document.getElementById("etternavn").value;
        const telefonnr = document.getElementById("telefonnr").value;
        const epost = document.getElementById("epost").value;
        const antallB = document.getElementById("antall").value;
        const film = document.getElementById("velgFilm").value;

        if (!sjekkNavn(name)){
            return false;
        }

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

            document.getElementById("fornavn").value = "";
            document.getElementById("etternavn").value = "";
            document.getElementById("telefonnr").value = "";
            document.getElementById("epost").value = "";
            document.getElementById("antall").value = "";
            document.getElementById("velgFilm").value = "";

        }
        document.getElementById("utInfo").innerHTML = ut;
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
        document.getElementById("uglydigEpost").innerHTML="<p>Ugyldig email</p>";
        return false;
    }
}

function sjekkNavn(name){
    if (name === ""||name==null){
        document.getElementById("feilmeldingFornavn").innerHTML="<p>Ugyldig navn</p>";
        return false;
    }
    return true;
}

function sjekkTnr(phonenmbr){
    const tall = Number(phonenmbr);
    if (isNaN(tall) && phonenmbr.length !== 8){
        document.getElementById("telefonnr").innerHTML="<p>Ugyldig telefonnr</p>";
        return false;
    }
}