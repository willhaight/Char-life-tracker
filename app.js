if (localStorage.char) {
    document.getElementById('field').innerHTML = "<h1>Character Name: " + localStorage.char + "</h1>"
        + "<div>"
        + "<h2>Health:</h2>"
        + "<input type='tel' id='liveHealth' value='" + localStorage.health + "'>"
        + "</div>"
        + "<div>"
        + "<h2>Shield Points:</h2>"
        + "<input type='tel' id='liveShield' value='" + localStorage.shieldPoints + "'>"
        + "</div>"
        + "<div>"
        + "<h2>Arcana:</h2>"
        + " <input type='tel' id='liveArcana' value='" + localStorage.arcana + "'>"
        + "</div>"
        + "<div>"
        + " <h2>Energy:</h2>"
        + " <input type='tel' id='liveEnergy' value='" + localStorage.energy + "'>"
        + "</div>"
        + "<button id='delete'>End Session</button>"

} else {
    document.getElementById('field').innerHTML = "<div>"
        + " <h3>Name</h3>"
        + " <input type='text' id='name'>"
        + "</div>"
        + "<div>"
        + "    <h3>Health</h3>"
        + "   <input type='tel' id='health'>"
        + "</div>"
        + "<div>"
        + "   <h3>Shield Points</h3>"
        + "   <input type='tel' id='shield'>"
        + "</div>"
        + "<div>"
        + "   <h3>Arcana</h3>"
        + "   <input type='tel' id='arcana'>"
        + "</div>"
        + "<div>"
        + "   <h3>Energy</h3>"
        + "   <input type='tel' id='energy'>"
        + "</div>"
        + "<button id='submit'>Submit</button>"
}
let char = document.getElementById('name');
let health = document.getElementById('health');
let shieldPoints = document.getElementById('shield');
let arcana = document.getElementById('arcana');
let energy = document.getElementById('energy');




let delButt = document.getElementById('delete');
let subButt = document.getElementById('submit');
if (subButt) {

    subButt.onclick = function () {
        localStorage.char = char.value;
        localStorage.health = health.value;
        localStorage.shieldPoints = shieldPoints.value;
        localStorage.arcana = arcana.value;
        localStorage.energy = energy.value;
        document.getElementById('field').innerHTML = "<h1>Character Name: " + localStorage.char + "</h1>"
            + "<div>"
            + "<h2>Health:</h2>"
            + "<input type='tel' id='liveHealth' value='" + localStorage.health + "'>"
            + "</div>"
            + "<div>"
            + "<h2>Shield Points:</h2>"
            + "<input type='tel' id='liveShield' value='" + localStorage.shieldPoints + "'>"
            + "</div>"
            + "<div>"
            + "<h2>Arcana:</h2>"
            + " <input type='tel' id='liveArcana' value='" + localStorage.arcana + "'>"
            + "</div>"
            + "<div>"
            + " <h2>Energy:</h2>"
            + " <input type='tel' id='liveEnergy' value='" + localStorage.energy + "'>"
            + "</div>"
            + "<button id='delete'>End Session</button>"
        delButt = document.getElementById('delete')
        delButt.onclick = function () {
            let exit = confirm("Exit this Session?")
            if (exit) {

                localStorage.removeItem("char");
                localStorage.removeItem("health");
                localStorage.removeItem("shieldPoints");
                localStorage.removeItem("energy");
                localStorage.removeItem("arcana");
                location.reload()
            }
        }
        liveHealth = document.getElementById('liveHealth');
        liveShieldPoints = document.getElementById('liveShield');
        liveArcana = document.getElementById('liveArcana');
        liveEnergy = document.getElementById('liveEnergy');
    }
}

if (delButt) {
    delButt.onclick = function () {
        let exit = confirm("Exit this Session?")
        if (exit) {

            localStorage.removeItem("char");
            localStorage.removeItem("health");
            localStorage.removeItem("shieldPoints");
            localStorage.removeItem("energy");
            localStorage.removeItem("arcana");
            location.reload()
        }
    }
}

let liveHealth = document.getElementById('liveHealth');
let liveShieldPoints = document.getElementById('liveShield');
let liveArcana = document.getElementById('liveArcana');
let liveEnergy = document.getElementById('liveEnergy');



onkeyup = function () {
    console.log(liveHealth.value)
    if (localStorage.health || this.localStorage.arcana || this.localStorage.shieldPoints || this.localStorage.energy) {
        this.localStorage.health = liveHealth.value;
        this.localStorage.arcana = liveArcana.value;
        this.localStorage.shieldPoints = liveShieldPoints.value;
        this.localStorage.energy = liveEnergy.value;
    }
}


