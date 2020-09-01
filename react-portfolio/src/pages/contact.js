import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";



 const Contact = () => (
 <div className="container">
    <div className="row">
         <div className="col-sm-12">
          <h1>Contact</h1>
             <hr>
         </div>
     </div>
        <form action="mailto:macymol23@gmail.com" method="post" enctype="text/plain">
             <section className="form-row">
                 <div className="form-group col-md-6">
                     <label for="inputName">First Name</label>
                     <input name="firstName" type="name" className="form-control" id="inputName">
                 </div>
                 <div className="form-group col-md-6">
                     <label for="inputName">Last Name</label>
                     <input name="lastName"type="name" className="form-control" id="inputName">
                 </div>
             </section>
             <section className="form-row">
                 <div className="form-group col-md-12">
                     <label for="inputEmail4">Email</label>
                     <input name="email" type="email" className="form-control" id="inputEmail4">
                 </div>
             </section>
             <section className="form-row">
                 <div className="form-group col-lg-12">
                     <label for="inputMessage">Message</label>
                     <textarea name="message" type="text" className="form-control" id="inputMessage"></textarea>
                 </div>
                 <div className="col-sm-3">
                     <button id="submitBtn" type="submit" className="btn btn-primary">Submit</button>
                 </div>
             </section>
         </form>  
            
     {/* </div> */}
 );

export default Contact;