import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
      

          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d226958.20851410186!2d77.15652439634556!3d28.585786678273447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cfd309eebed77%3A0xfd133b52e7612c26!2sThe%20Lodhi%2C%20Lodhi%20Rd%2C%20CGO%20Complex%2C%20Pragati%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110003!3m2!1d28.5918027!2d77.2382212!5e0!3m2!1sen!2sin!4v1719842966142!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;