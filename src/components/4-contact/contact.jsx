import { useEffect, useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../assets/Animation - 1724450864533.json'
import contactUs from '../../assets/contactUs.json'
function Contact() {
    const [state, handleSubmit] = useForm("xanwllbo");
    const [form, setFrom] = useState({ input: '', textarea: '' })
    function handle() {
        if (!form.input.length) {
            alert('fill the Email Address field')
        } else if (!form.textarea.length) {
            alert('fill Your Message field')
        }
        else if (state.errors) {
            alert(state.errors.formErrors[0].message)
        }
    }


    return (
        <div className="contact-section" id='contact'>
            <div className="top-section">
                <div className="t-top-section">
                    <i className="fa-solid fa-envelope"></i>
                    <h1>Contact us</h1>
                </div>
                <p>Contact us for more information and Get notified when I publish something new.</p>
            </div>
            <div className="bottom-section">
                <div className="left-bottom-section">
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="text">Email Address:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={form.input}
                                onChange={(val) => setFrom({ ...form, input: val.target.value })}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="textarea">
                            <label htmlFor="textarea">Your Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.textarea}
                                onChange={(val) => setFrom({ ...form, textarea: val.target.value })}
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button type="submit" disabled={state.submitting} onClick={() => handle()}>
                            {state.submitting ? "Sending... " : 'Send'}
                        </button>
                        {
                            state.succeeded && <div style={{ display: 'flex' }} >
                                <Lottie loop={false} style={{ height: '37px' }} animationData={doneAnimation} />
                                <h1>Your message has been send successfully.</h1>
                            </div>
                        }
                    </form>
                </div>
                <div className="right-bottom-section">
                    <Lottie style={{ width: '400px' }} animationData={contactUs} />
                </div>
            </div>
        </div>
    )
}

export default Contact