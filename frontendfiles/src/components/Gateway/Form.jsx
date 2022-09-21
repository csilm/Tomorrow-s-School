import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'

export const Form = () => {

    const [data, setData] = useState({})

    const navigate = useNavigate()

    const handleVal = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const loadData = { ...data };
        loadData[field] = value;
        setData(loadData);
    }

    const makePayment = token => {

        const body = {
            token,
            data
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`http://localhost:5000/donation`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => response.json()).then(dt=> {
            const id=dt.data._id;
            if (dt.message) {
                navigate("/success",{
                    state:{
                        id
                    }
                })
            }
        })
            .catch(err => console.log(err))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     await axios.post("/donation", data)
        //         .then(result => console.log(result));
        // } catch (error) {
        //     console.log(error.message);
        // }

    }

    return (
        <div className="w-full mt-4">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">Full Name</label>
                <input onChange={handleVal} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" name="FullName" id="fullname" placeholder="Fullname" required/>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input onChange={handleVal} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="email" name="email" id="email" placeholder="Email" />
                <label className="block text-gray-700 text-sm font-bold mb-2" for="amount">Donation Amount</label>
                <input onChange={handleVal} className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="number" name="amount" id="amount" placeholder="Put your Donation in $" />  $
                <label className="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
                <input onChange={handleVal} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" name="address" id="address" placeholder="Write your full address." />
                {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="message">Your message</label>
                <textarea onChange={handleVal} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" name="message" id="message" cols="30" rows="5"></textarea> */}
                <br />
                <StripeCheckout
                    stripeKey="pk_test_51LhW00Hw03tBNYv075zXs3qBic2WDb5cr9WIdtj3QLK7Qfl40ZEbmOTnTXgV9QAKPDfeyWVHUBOXcNWfd419RWGf00kpgzWVio"
                    token={makePayment}
                    amount={data.amount * 100}>
                    <button className="bg-yellow-500 text-white  hover:bg-white hover:text-yellow-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Donate</button>
                </StripeCheckout>
            </form>

        </div>
    )
}

export default Form;
