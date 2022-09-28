import React from "react";

function Footer() {
    return (
    <div class="bg-dark text-center text-white">
            <div class="footer mt-auto pt-3">
            <section class="mb-4">
            </section>
            <section class="">
                <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3 text-center">
                    <img class="fot-log" src="./images/f-icon.png"  alt="footlogo"/>
                    <h5 class="text-white">FITCHEF</h5>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2 text-left">
                    <h5 class="text-white mb-4">PAGES</h5>
                    <ul class="list-unstyled quick-links mb-2">
                    <li>
                        <a href="#!" class="text-white">Home</a>
                    </li>
                    <li>
                        <a href="#!" class="text-white">All Restaurants</a>
                    </li>
                    <li>
                        <a href="#!" class="text-white">Cart</a>
                    </li>
                    <li>
                        <a href="#!" class="text-white">FAQ</a>
                    </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                    <h5 class="text-white mb-4">POLICY</h5>

                    <ul class="list-unstyled quick-links mb-2">
                    <li>
                        <a href="#!" class="text-white">Terms of Usage</a>
                    </li>
                    <li>
                        <a href="#!" class="text-white">Privacy policy</a>
                    </li>
                    <li>
                        <a href="#!" class="text-white">Cancellation Policy</a>
                    </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-left">
                    <h5 class="text-white"> SUBSCRIBE</h5>
                    <div class="row d-flex justify-content-center">
                    <p class="pt-2">
                        <p>Subscribe to our<br />
                        newsletter, so that you can<br />
                        be the first to know about<br />
                        new offers and<br />
                        promotions.</p>
                    </p>
                    <div class="input-group mb-3">
                        <input type="email" id="form5Example21" class="form-control nav-email" aria-label="Email"
                        placeholder="Enter Email" aria-describedby="button-addon2" />
                        <button type="button" class="btn btn-outline-secondary text-white">
                        Subscribe
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Footer;