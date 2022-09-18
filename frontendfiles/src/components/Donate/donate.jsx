import "./donate.css"

const Donate = () => {
    return (
        <div>
            <div className="content">
                <div className="mx-2">
                    <div className="headText">
                        <div className="mx-2 py-4">
                            <div className="text">
                                <strong>100% of your gift helps and</strong>
                                <strong> provides school kids in Bangladesh with an adequate learning environment.
                                    <br />
                                    We work closely with the schools and local communities to assign
                                    <br />
                                    your donation to the most pressing projects.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img pb-5 m-">
                <img src={require('./static/Final-09.png')} className="longHandImg" alt="" />
            </div>
            <div className="content">
                <div className="mx-2">
                    <div className="grid grid-rows-1 grid-cols-2">
                        <div className="img-div">
                            <img src={require('./static/footer-min.jpg')} className="single-img px-4 z-10" alt="" />
                        </div>
                        <div className="donation ml-6">
                            <h2 className="donationHead">Online Donation</h2>
                            <p className="donP">You can choose any of the online payment options below or wire transfer your donation directly to:</p>
                            <strong style={{ marginBottom: "2%" }}>The Tomorrow School e.V. | IBAN: DE50 8306 5408 0004 1798 46 | BIC: GENO DEF1 SLR</strong>
                            <div className="w-full mt-4">
                                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" action="">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">Full Name</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" name="FullName" id="fullname" placeholder="Fullname" />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="email" name="email" id= "email" placeholder="Email" />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="amount">Donation Amount</label>
                                    <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="number" name="amount" id="amount" placeholder="Put your Donation in $" />  $
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" name="address" id="address" placeholder="Write your full address." />
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="message">Your message</label>
                                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" name="message" id="message" cols="30" rows="5"></textarea>
                                    <button className="bg-yellow-500 text-white  hover:bg-white hover:text-yellow-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Donate</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Donate;