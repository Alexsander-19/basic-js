const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  // constructor(typeMachine = true) {
  //   this.typeMachine = typeMachine;
  //   this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // }
  // encrypt(message, key) {
  //   if (!message || !key) {
  //     throw new Error();
  //   }
  //   const m = message.toUpperCase();
  //   const maxlength = Math.max(m.length, key.length);
  //   let r = '';
  //   for(let i = 0; i < maxlength; i += 1){ 			//encrypt/decrypt
  //     //Vizhener - encrypt/decrypt one forumula (encrypt - by default; decrypt - when (mode === 'decrypt') )
  //     const mi = this.alphabet.indexOf( m[ ( (i >= m.length) ? i % m.length : i ) ] );	//подгон сообщения/шифротекста - к ключу (если меньше)
  //     const ki_s = key[ ( (i >= key.length) ? i % key.length :i ) ];
  //     //подгон ключа к сообщению/шифротексту (если короткий)
  //     const ki = this.alphabet.indexOf( ki_s );
  //     //вычитание при дешифровании, либо сложение.
  //     const c = this.alphabet[ ( ( ( this.alphabet.length + ( mi + ki ) ) % this.alphabet.length ) ) ];				//символ по таблице Виженера.
  //     r += c;																//Добавить символ к результату.
  //   }
  //   if (!this.typeMachine) {
  //     return r.split('').reverse().join('');
  //   }
  //   return r; //вернуть строку результата
  // }
  // decrypt(message, key) {
  //   if (!message || !key) {
  //     throw new Error();
  //   }
  //   const maxlength = Math.max(message.length, key.length);
  //   let r = '';	//Пустой результат
  //   for(let i = 0; i < maxlength; i += 1){ 			//encrypt/decrypt
  //     //Vizhener - encrypt/decrypt one forumula (encrypt - by default; decrypt - when (mode === 'decrypt') )
  //     const mi = this.alphabet.indexOf( message[ ( (i >= message.length) ? i % message.length : i ) ] );	//подгон сообщения/шифротекста - к ключу (если меньше)
  //     const ki_s = key[ ( (i >= key.length) ? i % key.length : i ) ];
  //     //подгон ключа к сообщению/шифротексту (если короткий)
  //     const ki = -(parseInt( ki_s ));
  //     //вычитание при дешифровании, либо сложение.
  //     const c = this.alphabet[ ( ( ( this.alphabet.length + ( mi + ki ) ) % this.alphabet.length ) ) ];				//символ по таблице Виженера.
  //     r += c;																//Добавить символ к результату.
  //   }
  //   if (!this.typeMachine) {
  //     return r.split('').reverse().join('')
  //   }
  //   return r; //вернуть строку результата
  // }
}

module.exports = VigenereCipheringMachine;
