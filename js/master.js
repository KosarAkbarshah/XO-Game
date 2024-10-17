const x = document.querySelectorAll('.xo>div')
const box = document.querySelector('.xo')
const backAudio = document.getElementById('backAudio')
let flag = true
let winnerX = 0
let winnerO = 0

///audio play debug:

document.body.addEventListener('click', () => {
    if (backAudio.paused) {
        backAudio.play()
    }
})


x.forEach((val) => {
    val.addEventListener('click', () => {
        let temp = val.innerHTML
        if (temp == '') {
            if (flag) {
                val.innerText = 'X'
                val.style.color = '#ff2079'
                val.style.textShadow = '1px 1px 40px rgba(247, 246, 246, 0.922)'
                val.style.fontSize = '60px'
                // flag = !flag
            } else {
                val.innerText = 'O'
                val.style.color = '#440bd4'
                val.style.textShadow = '1px 1px 40px rgba(247, 246, 246, 0.922)'
                val.style.fontSize = '60px'
                // flag = !flag
            }
            //this flag condition applies to both of ifs , so we define it out of it 
            flag = !flag
        }

        ///Game Rules///

        const arr = [] //reset arr by default
        switch (true) {
            ////if x[0] is not empty and if all the other condition applies push it in the arr
            case (x[0].innerText != '') && (x[0].innerText == x[1].innerText && x[0].innerText == x[2].innerText): arr.push(0, 1, 2); break;
            case (x[3].innerText != '') && (x[3].innerText == x[4].innerText && x[3].innerText == x[5].innerText): arr.push(3, 4, 5); break;
            case (x[6].innerText != '') && (x[6].innerText == x[7].innerText && x[6].innerText == x[8].innerText): arr.push(6, 7, 8); break;
            case (x[0].innerText != '') && (x[0].innerText == x[3].innerText && x[0].innerText == x[6].innerText): arr.push(0, 3, 6); break;
            case (x[1].innerText != '') && (x[1].innerText == x[4].innerText && x[1].innerText == x[7].innerText): arr.push(1, 4, 7); break;
            case (x[2].innerText != '') && (x[2].innerText == x[5].innerText && x[2].innerText == x[8].innerText): arr.push(2, 5, 8); break;
            case (x[0].innerText != '') && (x[0].innerText == x[4].innerText && x[0].innerText == x[8].innerText): arr.push(0, 4, 8); break;
            case (x[2].innerText != '') && (x[2].innerText == x[4].innerText && x[2].innerText == x[6].innerText): arr.push(2, 4, 6); break;
        }
        // console.log(arr);
        arr.forEach((val) => {
            if (x[val].innerText == 'X') {
                x[val].style.boxShadow = '0px 0px 40px 15px #ff2079'
            } else {
                x[val].style.boxShadow = '0px 0px 40px 15px #440bd4'
            }


        })


        ///end
        ///when arr.length = 3 means an arr is complete and one winner is founded
        if (arr.length == 3) {
            box.setAttribute('inert', true)
            if (x[arr[0]].innerText == 'X') {
                winnerX++
            } else {
                winnerO++
            }
            console.log('winnerx' + winnerX);
            console.log('winnero' + winnerO);


            // reset ///
            setTimeout(() => {
                x.forEach((val) => {
                    val.innerText = ''

                })
                /////make winner divs go back to default color
                arr.forEach((val) => {
                    x[val].style.background = 'black'
                    x[val].style.boxShadow = ' 0 0 12px rgba(247, 246, 246, 0.922)'

                })
                box.removeAttribute('inert') ///to make it unclickble after winning
            }, 1500);

        }

        /// Game Tie Handler
        let num = 0 /// = 0 so it reset everytime 
        x.forEach((val) => {
            // val.innerText means the value inside first div//
            if (val.innerText == '') {
                num++  ///add until all divs are filled
            }
        })
        if (num == 0 && arr.length != 3) {
            /////if num = 0 means it gets back to 0 when its filled,
            /// and also we dont have arr of 3 :
            setTimeout(() => {
                x.forEach((val) => {
                    val.innerText = ''
                })
            }, 1000);
        }

    })
})

