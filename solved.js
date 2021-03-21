/***************************************************************************/
const secret_message = "gsrkvexypexmsrw! ohcl znoy wslhzl rwja@ktwdmzpwcvl.kwu aqwt jezsvmxi huk eua h wz rgtuqp. xzgojhy apwctl nv yurazout.\r\ndtz awtdml ydiiun. jrfnq xjui yurazout, mtggd, epmbpmz jan jha eph znk qnsj eh efwfmpqfs"
const seed = '4578697581264578697781265583416'

// congrats, 3, 4, 6 

const test1 = "hi name sebastian my is"
// decode_railroad(secret_message)
function decode_railroad(encoded_phrase) {
    // const arrayLength = encoded_phrase.split(" ").length;
    // const upperLength = Math.ceil(arrayLength/2)
    // const array1 = encoded_phrase.split(" ").slice(0,upperLength)
    // const array2 = encoded_phrase.split(" ").slice(upperLength)

    const array1 = encoded_phrase.substring(0,encoded_phrase.indexOf("\n")).split(" ");
    const array2 = encoded_phrase.substring(encoded_phrase.indexOf("\n"),encoded_phrase.length).split(" ");

    const array3 = [array1, array2]
        .reduce((r, a) => (a.forEach((a, i) => (r[i] = r[i] || []).push(a)), r), [])
        .reduce((a, b) => a.concat(b));
    
    const result = array3.join(" ");
    // console.log('decoded message:', result)
    return result                    
}


/***************************************************************************/


function get_prior_char(char, places_to_go_backward) {
  let alpha       = "abcdefghijklmnopqrstuvwxyz"
  let alpha_arr   = alpha.split('')
  let index       = alpha_arr.indexOf(char)

  for (var i = 0; i < places_to_go_backward; i++) {
      index -= 1  // decrement rather than increment 
      if (index < 0) { // if index < 0, (index is a) 
          index = 25   // set to 25 (set a to z)
      }
  }

  return alpha_arr[index]
}


const test = "t"
const num = "6"
unshuffle_letter(test, num)
function unshuffle_letter(letter_to_unshuffle, places_to_unshuffle) {
  let caesar_string = letter_to_unshuffle
  if (letter_to_unshuffle.match(/^[a-z]+$/)) {
      caesar_string = get_prior_char(letter_to_unshuffle, places_to_unshuffle)
  }
//   console.log(caesar_string)
  return caesar_string
}



/***************************************************************************/

function decode_secret_message(s_m, seed) {
    let secret_message = decode_railroad(s_m)

    let decoded_message = ""
    let index = 0
    secret_message.split(" ").forEach((word) => {  // split string by word 
        let caesar_seed = parseInt(seed[index])    // index of seed increments as word in string(now array) increments 
        // console.log('SEED NUM:', caesar_seed)
        let caesared_word = ""                     // resents to empty string each loop 
        word.split("").forEach((char) => {         // split word (string and element of array) character by character to decode one at a time 
            caesared_word += unshuffle_letter(char, caesar_seed)  // add each decoded character to string 
        })
        // console.log('WORD', caesared_word)
        decoded_message += `${caesared_word} `     // add each word (string) to decoded message full string (sentence) 
        // console.log('DECODE', decoded_message)
        index += 1                                 // iincrement index for seed to match the next word 
    })

    console.log(decoded_message)
    return decoded_message;
}

decode_secret_message(secret_message, seed)


// const secret_message = "gsrkvexypexmsrw! ohcl znoy wslhzl rwja@ktwdmzpwcvl.kwu aqwt jezsvmxi huk eua h wz rgtuqp. xzgojhy apwctl nv yurazout.\r\ndtz awtdml ydiiun. jrfnq xjui yurazout, mtggd, epmbpmz jan jha eph znk qnsj eh efwfmpqfs"


// congratulations! you have solved this puzzle. please email jobs@cloverhound.com with your solution, favorite hobby, and whether you are a cat or dog person. the subject line should be jr developer solution.


/*********************** EXPLANATION  ****************************************************/


// decode_railroad() 
// Note: even index is true (upper_track), odd index is false (lower_track), then put all upper_track first, then lower_track after, then merge two arrays with alternating values
// In the above code, I turned the string into an array, split in half, incase an odd number, I rounded up so the larger half came first (9/2=5, first half 5, second half 4)
// While that worked, later, just to be safe and more specific, I looked up a more specific way to split() by /n, and implemented that as well for the same result. 
// Then it was just a matter of merging the two arrays together, one element at a time. 
// To be honest, I spent a good amount of time trying to merge two arrays with alernating values, but I couldn't.
// Since the objective is to decode, and did not specify looking things up or not, I used Stack Overflow helped me find a way to merge the arrays the way I needed. 


// unshuffle_letter() 
// I didn't have to change anything on the shuffle_letter function, but I did change the variable and function names to unshuffle, next to prior, etc. 
// It's the helper function that did all the work. So I reversed a few things, as commented by the approicate lines. 
// decrement rather than increment
// if index < 0, (index is a) 
// set to 25 (set a to z)

// decode_secret_message() 
// This was the tricky part for me. It took more of a minute to think about why the first word was correct, but not the rest of the code.
// I console logged everything. The unshuffle was working properly, the railroad was working properly. 
// I realied it needed to be reversed, kind of like the unshuffle function was reversed in it's own way. 
// So I made the decode_railroad() first, to reorganize the order before unshuffle_letter() decoded the rest. 

