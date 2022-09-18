import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
    // let history = useNavigate();
    // useEffect(() => {

    //     if (localStorage.getItem('token')) {
    //         history("/");
    //     } else {
    //         history("/login");
    //     }
    //     // eslint-disable-next-line
    // }, []);

    const HandleSubmit = (e) => {
        e.preventDefault();

        let num1 = document.getElementById('number1').value;
        let num2 = document.getElementById('number2').value;
        let data = document.getElementById('fibonacci');


        let num = 1;
        // let x = 0; let y = 1;
        let x = parseInt(num1); let y = parseInt(num2);
        let fn = x + y;
        let space = " ";
        console.log(x);
        data.innerHTML = `<h5 class="pt-3">Result</h5>`;
        data.append(x, space);
        data.append(y, space);
        while (num < 9) {
            console.log(fn);

            fn = x + y;
            x = y;
            y = fn;
            ++num
            data.append(fn, space);
        }
        setInputn({ number1: "", number2: "" })


    }

    const [inputn, setInputn] = useState({ number1: "", number2: "" });

    const onChange = (e) => {
        setInputn({ ...inputn, [e.target.name]: e.target.value })
    }

    return (
        <div className='py-3'>
            <h1 className='fs-5'>Q. Input 2 numbers and get 10 fibonacci series.</h1>

            <form onSubmit={HandleSubmit} className="py-3">
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" placeholder="Enter First Number" id="number1" name="number1" value={inputn.number1} onChange={onChange} required />
                    <label htmlFor="email">Enter First Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" placeholder="Enter Second Number" id="number2" name="number2" value={inputn.number2} onChange={onChange} required />
                    <label htmlFor="password">Enter Second Number</label>
                </div>

                <button type="submit" className="btn btn-primary px-5" >Submit</button>
            </form>

            <div id='fibonacci'></div>
        </div>
    )
}

export default Home