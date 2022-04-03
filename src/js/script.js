// variabili globali
const avviso = document.querySelector(".avviso");
const input = document.getElementById("password");
let password = '';
let psw_provvisoria = '';


// Pulizia Cache
window.onload = () => {
    password = '';
    input.value = '';
};



// funzione per generare una password casuale tra i caratteri scelti
const generatePassword = () => {
    let password = "";
    let length = 8;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ùàèòì=/+-_!?@#$%^&*()$£<>.;,ç[]`;
    let n = chars.length;

    for (var i = 0; i < length; ++i) {
        password += chars.charAt(Math.floor(Math.random() * n));
   
        // per rimuovere gli spazi tra i caratteri   
        let nospaces = password.replace(/ +(?= )/g, '');
        input.value = nospaces;
    }

    psw_provvisoria = input.value;
}



// funzione per copiare il value della Password
const copytext = () => {
    if (input.value != '') {
        navigator.clipboard.writeText(psw_provvisoria);
        input.value = 'Copied!'

        setTimeout(function () {
            input.value = psw_provvisoria;
        }, 1500);
    }
}