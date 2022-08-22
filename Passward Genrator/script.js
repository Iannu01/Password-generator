function generatePsw() {
    let output = document.getElementById("output");
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@1#_-*&$+=/"
    let length = document.getElementById("length").value - 1;
    let password = "";
    for (let i = 0; i <= length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }
    output.value = password;

}
function copyPsw() {
    output.select();
    document.execCommand("copy");
}