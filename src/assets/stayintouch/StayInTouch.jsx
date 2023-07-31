import './stayInTouch.scss'

export default function StayInTouch() {
    return (
        <div className='stayInTouch'>
            <div className="container">
                <div className="wrapper">
                    <div className="wrapContent">
                        <h2>Stay In Touch</h2>
                        <p>
                            Are you curious about Pineapple Island? Send a message
                        </p>
                        <form>
                            <input type="text" placeholder='Name' />
                            <input type="number" placeholder='Phone No' />
                            <input type="mail" placeholder='Email' />
                            <div>
                                <label htmlFor="area"> Message</label>
                                <textarea name="" id="area" cols="30" rows="10" placeholder='Message'></textarea>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
