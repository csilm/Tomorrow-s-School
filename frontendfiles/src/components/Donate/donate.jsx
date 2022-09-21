import "./donate.css"
import Form from "../Gateway/Form"

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
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Donate;