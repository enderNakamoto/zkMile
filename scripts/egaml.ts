import  { ElGamalFF }  from 'o1js-elgamal';

function generateKeypair() {
    let { pk, sk } = ElGamalFF.generateKeys();
    console.log({
        secretKey: sk.toString(),
        publicKey: pk.toString()
    });
}

generateKeypair();