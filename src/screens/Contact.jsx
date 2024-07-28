import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

export const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        phone: "+ 9129988822",
        email: "shiv912998@gmail.com",
        address: "  Laxmi Nagar,Delhi ",
    });

    useEffect(() => {
        const fetchContactInfo = async () => {
            const dummyData = {
                phone: "+ 9129988822",
                email: "shiv912998@gmail.com",
                address: "  Laxmi Nagar,Delhi ",
            };
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setContactInfo(dummyData); // Replace with actual data
        };

        fetchContactInfo();
    }, []);

    return (
        <>
            <section className="contact-section" id="6">
                <motion.div
                    className="flex justify-around items-center flex-wrap gap-5 containercs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="contact-form-box w-half"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="section-header">
                            <h2 className="section-title">Let’s work together!</h2>
                            <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                        </div>

                        <div className="tj-contact-form">
                            <form id="contact-form">
                                <div className="flexSB gap">
                                    <div className="form_group">
                                        <input type="text" name="conName" id="conName" placeholder="First name" />
                                    </div>
                                    <div className="form_group">
                                        <input type="text" name="conLName" id="conLName" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="flexSB gap">
                                    <div className="form_group">
                                        <input type="email" name="conEmail" id="conEmail" placeholder="Email address" />
                                    </div>
                                    <div className="form_group">
                                        <input type="tel" name="conPhone" id="conPhone" placeholder="Phone number" />
                                    </div>
                                </div>
                                <div className="form_group">
                                    <select name="conService" id="conService" className="tj-nice-select">
                                        <option value="" selected disabled>
                                            Choose Service
                                        </option>
                                        <option value="braning">Branding Design</option>
                                        <option value="web">Web Design</option>
                                        <option value="uxui">UI/UX Design</option>
                                        <option value="app">App Design</option>
                                    </select>
                                </div>
                                <div className="form_group">
                                    <textarea name="conMessage" id="conMessage" placeholder="Message"></textarea>
                                </div>
                                <div className="form_btn">
                                    <button type="submit" className="btn tj-btn-primary">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-[200px] sm:w-[350px] contact-info-list"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <ul className="ul-reset">
                            <li>
                                <div className="icon-box">
                                    <IoCallOutline size={25} />
                                </div>
                                <div className="text-box">
                                    <p>Phone</p>
                                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <TfiEmail />
                                </div>
                                <div className="text-box">
                                    <p>Email</p>
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <CiLocationOn size={25} />
                                </div>
                                <div className="text-box">
                                    <p>Address</p>
                                    <a href="#">{contactInfo.address}</a>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};