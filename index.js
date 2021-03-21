/*
Welcome applicants!
The point of this little test is to help us determine your skillset.
On the job it will be very common that you are handed an unfamiliar codebase
and instructed to debug and determine what is not functioning properly.
Once you have fixed this properly, instructions will be printed to your terminal
instructing you on what to do for your next steps.
The two key concepts here are a caesar cipher and a railroad code
Your goal is to decode the secret message below stored in secret_message
Good luck!
- Ryan
P.S
I hope you enjoy puzzles

*/

function encode_railroad(secret_phrase) {
    let toggle      = true
    let upper_track = []
    let lower_track = []
    secret_phrase.split(" ").forEach((word) => {  // split phrase by word, check if toggle true, then push to upper_track, else push to lower_track
        if (toggle) {                             // toggle = true, what is it checking is true? 
            upper_track.push(word)
            toggle = false
        } else {
            lower_track.push(word)
            toggle = true
        }
    });
    let result = `${upper_track.join(" ")}\r\n${lower_track.join(" ")}`
    // console.log('railroad:',result)
    return result;
}
// fill out this method
// if hi my name is ryan becomes
// hi name ryan
// my is                   
// how would you decode this?    


/***************************************************************************/



// this is a helper method to shift letters forward by a set number of places
// you will probably need to implement something in reverse...
function get_next_char(char, places_to_go_forward) {
    let alpha       = "abcdefghijklmnopqrstuvwxyz"
    let alpha_arr   = alpha.split('')
    let index       = alpha_arr.indexOf(char)

    for (var i = 0; i < places_to_go_forward; i++) {
        index += 1
        if (index > 25) {
            index = 0
        }
    }

    return alpha_arr[index]
}

const test2 = "a"
// shuffle_letter(test2, "2")
function shuffle_letter(letter_to_shuffle, places_to_shuffle) {
    // with places_to_shuffle = 1, a becomes b, b becomes c, etc.
    let caesar_string = letter_to_shuffle
    if (letter_to_shuffle.match(/^[a-z]+$/)) {
        caesar_string = get_next_char(letter_to_shuffle, places_to_shuffle)
    }
    console.log(caesar_string)
    return caesar_string
}



/***************************************************************************/



// const test3 = 'sebastian russo'
// const seed1 = '4578697581264578697781265583416'
// encode_secret_message(test3, seed1)
function encode_secret_message(secret_message, seed) {
    let encoded_message = ""
    let index = 0
    secret_message.split(" ").forEach((word) => {
        let caesar_seed   = parseInt(seed[index])
        let caesared_word = ""
        word.split("").forEach((char) => {
            caesared_word += shuffle_letter(char, caesar_seed)
        })
        encoded_message += `${caesared_word} `
        index += 1
    })

    return encode_railroad(encoded_message)
}


(function() {
    console.log("Welcome to the Cloverhound Junior Software Developer test")
    // do not edit either seed or secret message as it will prevent you from completing this assessment.
    seed = '4578697581264578697781265583416'
    console.log(seed.length) // 31

    secret_message = "gsrkvexypexmsrw! ohcl znoy wslhzl rwja@ktwdmzpwcvl.kwu aqwt jezsvmxi huk eua h wz rgtuqp. xzgojhy apwctl nv yurazout.\r\ndtz awtdml ydiiun. jrfnq xjui yurazout, mtggd, epmbpmz jan jha eph znk qnsj eh efwfmpqfs"
    console.log(secret_message.split(' ').length) // 30

    // this code below is optional and not necessary for your solution, but may give you some insight as to how
    // the above message was encoded

    // start optional code
    // message_to_be_encoded would have the same number of words as there are numbers in seed
    message_to_be_encoded = ''
    encoded_message = encode_secret_message(message_to_be_encoded, seed)
    console.log(encoded_message)
    // end optional code
    // use the space below to decode secret_message
})();

