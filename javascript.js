//inserting the images
function insertImage()
{
    document.querySelectorAll('.box').forEach(chessimage =>
    {
        if (chessimage.innerText.length !== 0)
        {
            if (chessimage.innerText == 'Whitepawn' || chessimage.innerText == 'Blackpawn')
            {
                chessimage.innerHTML = `${chessimage.innerText} <img class='all-img all-pown' src="${chessimage.innerText}.png" alt="">`
                chessimage.style.cursor = 'pointer'
            }
            else 
            {
                chessimage.innerHTML = `${chessimage.innerText} <img class='all-img' src="${chessimage.innerText}.png" alt="">`
                chessimage.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()

//Coloring the board

function coloring()
{
    const colouring = document.querySelectorAll('.box')

    colouring.forEach(colouring =>
    {
        getId = color.id
        arraies = Array.from(getId)
        arraies.shift()
        lengthside = eval(arraies.pop())
        asideup = eval(arraies.shift())
        overall = lengthside + asideup

        if (overall % 2 == 0)
        {
            colouring.style.backgroundColor = 'rgb(232 235 239)'
        }
        if (overall % 2 !== 0)
        {
            colouring.style.backgroundColor = 'rgb(125 135 150)'
        }
    })
}
coloring()


//function to not remove the same team element

function reddish()
{
    document.querySelectorAll('.box').forEach(backi1 =>
    {
        if (backi1.style.backgroundColor == 'Lightblue')
        {

            document.querySelectorAll('.box').forEach(backi2 => 
            {

                if (backi2.style.backgroundColor == 'lightgreen' && backi2.innerText.length !== 0)
                {
                    greenyellowText = backi2.innerText
                    LightblueText = backi1.innerText
                    LightblueColor = ((Array.from(LightblueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = backi2.id
                    arraies = Array.from(getId)
                    arraies.shift()
                    lengthside = eval(arraies.pop())
                    asideup = eval(arraies.shift())
                    overall = lengthside + asideup

                    if (overall % 2 == 0 && LightblueColor == greenyellowColor)
                    {
                        backi2.style.backgroundColor = 'rgb(232 235 239)'
                    }
                    if (overall % 2 !== 0 && LightblueColor == greenyellowColor)
                    {
                        backi2.style.backgroundColor = 'rgb(125 135 150)'
                    }

                }
            })
        }
    })
}


//reset button
document.getElementById("reset-button").addEventListener("click", function ()
{
    location.reload();
});

move = 1

document.querySelectorAll('.box').forEach(Additem =>
{


    Additem.addEventListener('click', function ()
    {

        if (Additem.style.backgroundColor == 'lightgreen' && Additem.innerText.length == 0)
        {
            move = move + 1
        }

        else if (Additem.style.backgroundColor == 'lightgreen' && Additem.innerText.length !== 0)
        {

            document.querySelectorAll('.box').forEach(background =>
            {
                if (background.style.backgroundColor == 'Lightblue')
                {
                    LightblueId = background.id
                    LightblueText = background.innerText

                    document.getElementById(LightblueId).innerText = ''
                    Additem.innerText = LightblueText
                    coloring()
                    insertImage()
                    move = move + 1

                }
            })
        }

        getId = Additem.id
        arraies = Array.from(getId)
        arraies.shift()
        lengthside = eval(arraies.pop())
        arraies.push('0')
        asideup = eval(arraies.join(''))
        overall = lengthside + asideup

        //function to display the available paths for all pieces

        function whosTurn(toggle)
        {
            // pawn movement

            if (Additem.innerText == `${toggle}pawn`)
            {
                Additem.style.backgroundColor = 'Lightblue';

                if (move % 2 !== 0 && asideup < 800)
                {
                    // First move for white pawns
                    if (document.getElementById(`b${overall + 100}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall + 100}`).style.backgroundColor = 'lightgreen';
                        if (document.getElementById(`b${overall + 200}`).innerText.length == 0 && asideup < 300)
                        {
                            document.getElementById(`b${overall + 200}`).style.backgroundColor = 'lightgreen';
                        }
                    }
                    if (lengthside < 8 && document.getElementById(`b${overall + 100 + 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + 100 + 1}`).style.backgroundColor = 'lightgreen';
                    }
                    if (lengthside > 1 && document.getElementById(`b${overall + 100 - 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + 100 - 1}`).style.backgroundColor = 'lightgreen';
                    }
                }

                if (move % 2 == 0 && asideup > 100)
                {
                    // First move for black pawns
                    if (document.getElementById(`b${overall - 100}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall - 100}`).style.backgroundColor = 'lightgreen';
                        if (document.getElementById(`b${overall - 200}`).innerText.length == 0 && asideup > 600)
                        {
                            document.getElementById(`b${overall - 200}`).style.backgroundColor = 'lightgreen';
                        }
                    }
                    if (lengthside < 8 && document.getElementById(`b${overall - 100 + 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - 100 + 1}`).style.backgroundColor = 'lightgreen';
                    }
                    if (lengthside > 1 && document.getElementById(`b${overall - 100 - 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - 100 - 1}`).style.backgroundColor = 'lightgreen';
                    }
                }
                // Second move for pawns
                if (move % 2 !== 0 && asideup >= 800)
                {
                    if (document.getElementById(`b${overall + 100}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall + 100}`).style.backgroundColor = 'lightgreen';
                    }
                    if (lengthside < 8 && document.getElementById(`b${overall + 100 + 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + 100 + 1}`).style.backgroundColor = 'lightgreen';
                    }
                    if (lengthside > 1 && document.getElementById(`b${overall + 100 - 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + 100 - 1}`).style.backgroundColor = 'lightgreen';
                    }
                }
                if (move % 2 == 0 && asideup <= 100)
                {
                    if (document.getElementById(`b${overall - 100}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall - 100}`).style.backgroundColor = 'lightgreen';
                    }
                    if (lengthside < 8 && document.getElementById(`b${overall - 100 + 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - 100 + 1}`).style.backgroundColor = 'lightgreen';
                    }
                    if (lengthside > 1 && document.getElementById(`b${overall - 100 - 1}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - 100 - 1}`).style.backgroundColor = 'lightgreen';
                    }
                }
            }

            // king movement

            if (Additem.innerText == `${toggle}king`)
            {


                if (lengthside < 8)
                {
                    document.getElementById(`b${overall + 1}`).style.backgroundColor = 'lightgreen'

                }
                if (lengthside > 1)
                {

                    document.getElementById(`b${overall - 1}`).style.backgroundColor = 'lightgreen'
                }
                if (asideup < 800)
                {

                    document.getElementById(`b${overall + 100}`).style.backgroundColor = 'lightgreen'
                }
                if (asideup > 100)
                {

                    document.getElementById(`b${overall - 100}`).style.backgroundColor = 'lightgreen'
                }

                if (asideup > 100 && lengthside < 8)
                {

                    document.getElementById(`b${overall - 100 + 1}`).style.backgroundColor = 'lightgreen'
                }
                if (asideup > 100 && lengthside > 1)
                {

                    document.getElementById(`b${overall - 100 - 1}`).style.backgroundColor = 'lightgreen'
                }
                if (asideup < 800 && lengthside < 8)
                {

                    document.getElementById(`b${overall + 100 + 1}`).style.backgroundColor = 'lightgreen'
                }
                if (asideup < 800 && lengthside > 1)
                {

                    document.getElementById(`b${overall + 100 - 1}`).style.backgroundColor = 'lightgreen'
                }

                Additem.style.backgroundColor = 'Lightblue'

            }

            // knight movement

            if (Additem.innerText == `${toggle}knight`)
            {


                if (lengthside < 7 && asideup < 800)
                {
                    document.getElementById(`b${overall + 100 + 2}`).style.backgroundColor = 'lightgreen'
                }
                if (lengthside < 7 && asideup > 200)
                {
                    document.getElementById(`b${overall - 100 + 2}`).style.backgroundColor = 'lightgreen'
                }
                if (lengthside < 8 && asideup < 700)
                {
                    document.getElementById(`b${overall + 200 + 1}`).style.backgroundColor = 'lightgreen'
                }
                if (lengthside > 1 && asideup < 700)
                {
                    document.getElementById(`b${overall + 200 - 1}`).style.backgroundColor = 'lightgreen'
                }
                if (lengthside > 2 && asideup < 800)
                {
                    document.getElementById(`b${overall - 2 + 100}`).style.backgroundColor = 'lightgreen'
                }
                if (lengthside > 2 && asideup > 100)
                {
                    document.getElementById(`b${overall - 2 - 100}`).style.backgroundColor = 'lightgreen'
                }
                if (lengthside < 8 && asideup > 200)
                {
                    document.getElementById(`b${overall - 200 + 1}`).style.backgroundColor = 'lightgreen'
                }
                if (lengthside > 1 && asideup > 200)
                {
                    document.getElementById(`b${overall - 200 - 1}`).style.backgroundColor = 'lightgreen'
                }

                Additem.style.backgroundColor = 'Lightblue'

            }

            // queen movement

            if (Additem.innerText == `${toggle}queen`)
            {


                for (let count = 1; count < 9; count++)
                {

                    if ((overall + count * 100) < 900 && document.getElementById(`b${overall + count * 100}`).innerText == 0)
                    {
                        document.getElementById(`b${overall + count * 100}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall + count * 100) < 900 && document.getElementById(`b${overall + count * 100}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall + count * 100}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                for (let count = 1; count < 9; count++)
                {

                    if ((overall - count * 100) > 100 && document.getElementById(`b${overall - count * 100}`).innerText == 0)
                    {
                        document.getElementById(`b${overall - count * 100}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall - count * 100) > 100 && document.getElementById(`b${overall - count * 100}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall - count * 100}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                for (let count = 1; count < 9; count++)
                {

                    if ((overall + count) < (asideup + 9) && document.getElementById(`b${overall + count}`).innerText == 0)
                    {
                        document.getElementById(`b${overall + count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall + count) < (asideup + 9) && document.getElementById(`b${overall + count}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall + count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                for (let count = 1; count < 9; count++)
                {

                    if ((overall - count) > (asideup) && document.getElementById(`b${overall - count}`).innerText == 0)
                    {
                        document.getElementById(`b${overall - count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall - count) > (asideup) && document.getElementById(`b${overall - count}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall - count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }



                for (let count = 1; count < 9; count++)
                {
                    if (count < (900 - asideup) / 100 && count < 9 - lengthside && document.getElementById(`b${overall + count * 100 + count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall + count * 100 + count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < (900 - asideup) / 100 && count < 9 - lengthside && document.getElementById(`b${overall + count * 100 + count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + count * 100 + count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }


                for (let count = 1; count < 9; count++)
                {
                    if (count < asideup / 100 && count < 9 - lengthside && document.getElementById(`b${overall - count * 100 + count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall - count * 100 + count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < asideup / 100 && count < 9 - lengthside && document.getElementById(`b${overall - count * 100 + count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - count * 100 + count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }


                for (let count = 1; count < 9; count++)
                {
                    if (count < (900 - asideup) / 100 && count < lengthside && document.getElementById(`b${overall + count * 100 - count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall + count * 100 - count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < (900 - asideup) / 100 && count < lengthside && document.getElementById(`b${overall + count * 100 - count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + count * 100 - count}`).style.backgroundColor = 'lightgreen'
                        break
                    }

                }


                for (let count = 1; count < 9; count++)
                {
                    if (count < asideup / 100 && count < lengthside && document.getElementById(`b${overall - count * 100 - count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall - count * 100 - count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < asideup / 100 && count < lengthside && document.getElementById(`b${overall - count * 100 - count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - count * 100 - count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }



                Additem.style.backgroundColor = 'Lightblue'

            }

            // bishop movement

            if (Additem.innerText == `${toggle}bishop`)
            {


                for (let count = 1; count < 9; count++)
                {
                    if (count < (900 - asideup) / 100 && count < 9 - lengthside && document.getElementById(`b${overall + count * 100 + count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall + count * 100 + count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < (900 - asideup) / 100 && count < 9 - lengthside && document.getElementById(`b${overall + count * 100 + count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + count * 100 + count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }


                for (let count = 1; count < 9; count++)
                {
                    if (count < asideup / 100 && count < 9 - lengthside && document.getElementById(`b${overall - count * 100 + count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall - count * 100 + count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < asideup / 100 && count < 9 - lengthside && document.getElementById(`b${overall - count * 100 + count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - count * 100 + count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }


                for (let count = 1; count < 9; count++)
                {
                    if (count < (900 - asideup) / 100 && count < lengthside && document.getElementById(`b${overall + count * 100 - count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall + count * 100 - count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < (900 - asideup) / 100 && count < lengthside && document.getElementById(`b${overall + count * 100 - count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall + count * 100 - count}`).style.backgroundColor = 'lightgreen'
                        break
                    }

                }


                for (let count = 1; count < 9; count++)
                {
                    if (count < asideup / 100 && count < lengthside && document.getElementById(`b${overall - count * 100 - count}`).innerText.length == 0)
                    {
                        document.getElementById(`b${overall - count * 100 - count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if (count < asideup / 100 && count < lengthside && document.getElementById(`b${overall - count * 100 - count}`).innerText.length !== 0)
                    {
                        document.getElementById(`b${overall - count * 100 - count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                Additem.style.backgroundColor = 'Lightblue'

            }

            // rook movement

            if (Additem.innerText == `${toggle}rook`)
            {

                for (let count = 1; count < 9; count++)
                {

                    if ((overall + count * 100) < 900 && document.getElementById(`b${overall + count * 100}`).innerText == 0)
                    {
                        document.getElementById(`b${overall + count * 100}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall + count * 100) < 900 && document.getElementById(`b${overall + count * 100}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall + count * 100}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                for (let count = 1; count < 9; count++)
                {

                    if ((overall - count * 100) > 100 && document.getElementById(`b${overall - count * 100}`).innerText == 0)
                    {
                        document.getElementById(`b${overall - count * 100}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall - count * 100) > 100 && document.getElementById(`b${overall - count * 100}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall - count * 100}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                for (let count = 1; count < 9; count++)
                {

                    if ((overall + count) < (asideup + 9) && document.getElementById(`b${overall + count}`).innerText == 0)
                    {
                        document.getElementById(`b${overall + count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall + count) < (asideup + 9) && document.getElementById(`b${overall + count}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall + count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                for (let count = 1; count < 9; count++)
                {

                    if ((overall - count) > (asideup) && document.getElementById(`b${overall - count}`).innerText == 0)
                    {
                        document.getElementById(`b${overall - count}`).style.backgroundColor = 'lightgreen'
                    }
                    else if ((overall - count) > (asideup) && document.getElementById(`b${overall - count}`).innerText !== 0)
                    {
                        document.getElementById(`b${overall - count}`).style.backgroundColor = 'lightgreen'
                        break
                    }
                }

                Additem.style.backgroundColor = 'Lightblue'
            }

        }

        // Toggling the turn

        if (move % 2 !== 0)
        {
            document.getElementById('move').innerText = "white's turn"
            whosTurn('White')
        }
        if (move % 2 == 0)
        {
            document.getElementById('move').innerText = "black's turn"
            whosTurn('Black')
        }

        reddish()

    })
})

// Moving the different chess pieces
document.querySelectorAll('.box').forEach(chess =>
{

    chess.addEventListener('click', function ()
    {

        if (chess.style.backgroundColor == 'Lightblue')
        {

            LightblueId = chess.id
            LightblueText = chess.innerText

            document.querySelectorAll('.box').forEach(chess2 =>
            {

                chess2.addEventListener('click', function ()
                {
                    if (chess2.style.backgroundColor == 'lightgreen' && chess2.innerText.length == 0)
                    {
                        document.getElementById(LightblueId).innerText = ''
                        chess2.innerText = LightblueText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})

// Prvents user from selecting multiple elements at the same time
z = 0
document.querySelectorAll('.box').forEach(prevent =>
{
  prevent.addEventListener('click', function ()
  {
      z = z + 1
      if (z % 2 == 0 && prevent.style.backgroundColor !== 'lightgreen')
      {
          coloring()
      }
  })
})