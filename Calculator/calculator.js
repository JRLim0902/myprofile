//selectors
const onscreen = document.getElementById('screen');
const button = document.querySelector('.buttons');

mylist = [];
//event listeners
button.addEventListener('click', calculate);

function calculate(e) {
    const select = e.target.value;
    if (select === 'C') {
        onscreen.innerHTML = "0";
        mylist = [];
    }
    if (select != '=' && select != 'C') {
        mylist.push(select);
        onscreen.innerHTML = mylist.join('');
        //onscreen.innerHTML = select;
    } if (select === '=') {
        const equation = mylist.join('');
        try {
            let answer = eval(equation);
            let ans = answer.toString();
            /*console.log(typeof(ans));
            console.log(ans.length);*/
            if (ans.length > 10) {
                ans = Number(ans);
                console.log(ans)
                console.log(typeof (ans));
                ansDecimal = ans.toFixed(10);
                console.log(ansDecimal);
                onscreen.innerHTML = ansDecimal;
                return;
            }
            onscreen.innerHTML = ans;
        } catch (err) {
            onscreen.innerHTML = "Input error";
        }//finally{
        // mylist=[];
        //}

    }
}

//mylist.push(select);
//onscreen.innerHTML = mylist.join('')
