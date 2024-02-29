import React from "react";
import img1 from "./images/IMG_9733.jpeg";
import img2 from "./images/IMG_9734.jpeg";
import img3 from "./images/img2.jpeg";
import img4 from "./images/starCrop.png";
import img5 from "./images/starCrop4.png";
import Enquirepage from "./Enquirepage";
export default function Content() {
  return (
    // Crousel Section
    <div class="container-fluid">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide border border-dark"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={img2}
              class="d-block"
              alt="Image loading"
              height="600 px"
              width="100%"
            />
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..." height="600 px" />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." height="600 px" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <hr></hr>

      {/* ABOUT US Section */}

      <div class="container  mt-2  ">
          <a><h1 className="text text-center pb-2" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080' }} id="scrollspyHeading1" >
            <b>About Us</b>
          </h1></a>
          <div class="row">
            <div class="col-8">
              <p style={{ color: "#004953", paddingLeft: "40px" }}>
                <h6 style={{wordWrap :"break-word"}}>
                  The One Smile Dental Centre is a multi-speciality laser and
                  microscope enhanced dental clinic, managed by Dr. Sana Wadwan and
                  Dr Munnaza Tambat one of the foremost professionals in their
                  field. At One Smile, we offer a wide range of dental treatments,
                  from general to much more complex micro dentistry, cosmetic and
                  minimally invasive laser dentistry treatments. We have three
                  high-end operatories, each equipped with the best dental
                  technology, sourced from around the world. We are committed to
                  creating a calm, pleasant atmosphere for the patients, while
                  maintaining the strictest hygiene standards. We also provide a
                  training centre for dentists, to teach them the latest
                  advancements in dentistry. Please explore this website to know
                  more about One Smile Dental Centre and the people behind it.
                </h6>
              </p>
            </div>

            <div class="col-4">
              <img
                src="https://t3.ftcdn.net/jpg/02/82/79/26/240_F_282792625_G4Beh580mVrUersnUiFqBIxSbfNvExzK.jpg"
                width="100%"
              />
            </div>
            <hr></hr>
          {/* Our Experts Section */}
          <div className="container h-50">
              <div className="text-center" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080' }}>
                <h1><b>Our Experts</b></h1>

                <div class="card-group p-3">
                  <div class="card p-3">
                    <img
                      src="https://www.aboutmyclinic.com/images/displayimage/5acd524ce0b36fb9429279bcb608c72240bb763560d3741f8354d.jpeg?type=dt"
                      class="card-img-top bg-info"
                      alt="..."
                      height="325 px"
                      width=" 350 px"
                    />
                    <div class="card-body" style={{ fontFamily: 'Roboto Sans-Serif'}}>
                      <h4 class="card-title" style={{ fontFamily: 'Roboto Sans-Serif', color: '#a2006d' }} ><b>Dr. Rahil Qureshi</b></h4>
                      <p class="card-text">
                        <h6 style={{wordWrap:"break-word"}}>Dr. Rahil Qureshi is a dedicated and experienced dentist committed to providing exceptional oral health care. 
                          With a Bachelor of Dental Surgery (BDS) degree , Dr. Qureshi combines expertise with a gentle touch, 
                          ensuring patients feel comfortable and confident in their dental care journey.</h6>
                      </p>
                    </div>
                  </div>
                  <div class="card p-3">
                    <img
                      src="https://www.aboutmyclinic.com/images/displayimage/4662b628e6289a3314e3afa3bb7277b7f0c78e8760bb0dcc91101.png?type=dt"
                      class="card-img-top bg-info"
                      alt="..."
                      height="325 px"
                      width=" 325 px"
                    />
                    <div class="card-body">
                      <h4 class="card-title" style={{ fontFamily: 'Roboto Sans-Serif', color: '#a2006d' }}><b>Dr. Deepika Singh</b></h4>
                      <p class="card-text">
                      <h6 style={{wordWrap:"break-word"}}>Dr. Deepika Singh, a distinguished dentist with a Bachelor of Dental Surgery (BDS) degree, 
                        dedicated to enhancing smiles and promoting oral wellness. 
                        Dr. Singh combines her extensive knowledge with a compassionate approach to deliver top-notch dental care.</h6>
                      </p>
                    </div>
                  </div>
                  <div class="card p-3">
                    <img
                      src="https://www.aboutmyclinic.com/images/displayimage/aa42376897d52fdcbea65778e7c71aab22a3eb0160deaa631a5cd.jpeg?type=dt"
                      class="card-img-top bg-info"
                      alt="..."
                      height="325 px"
                      width=" 350 px"
                    />
                    <div class="card-body ">
                      <h4 class="card-title" style={{ fontFamily: 'Roboto Sans-Serif', color: '#a2006d' }}><b>Dr. Amey Wagh</b></h4>
                      <p class="card-text">
                      <h6 style={{wordWrap:"break-word"}}>Dr. Amey Wagh, a distinguished MD in Dentistry, stands at the forefront of oral health excellence. 
                        With a commitment to precision and patient-centered care, 
                        Dr. Wagh brings a wealth of knowledge and experience to every dental encounter.</h6>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
          <hr></hr>
          {/* Our TreatMents Section */}
          <div className="container mb-3">
              <div className="row">
                <h1 className="text text-center pb-3" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080' }}><b>Treatments</b></h1>
                <div className="col-6 border p-3">
                  <div className="row">
                    <div className="col-3 ">
                      <img src="https://thedentalbond.com/img/icon-three.png" />
                    </div>
                    <div className="col-9">
                      <h3 style={{ fontFamily: 'Roboto Sans-Serif', color: '#a2006d' }}><b>Dental Implants</b></h3>
                      <p className="para p-2">
                        <h6>The primary use of dental implants is to support dental
                        prosthetics.</h6>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 border p-3 ">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://thedentalbond.com/img/icon-two.png" />
                    </div>
                    <div className="col-9">
                      <h3 style={{ fontFamily: 'Roboto Sans-Serif', color: '#a2006d' }}><b>Root Canal Therapy</b></h3>
                      <p className="para p-2">
                        <h6>Root canal is a treatment to repair and save a badly
                        damaged or infected tooth instead of removing it</h6>
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="row">
                <div className="col-6  border p-3">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://thedentalbond.com/img/icon-four.png" />
                    </div>
                    <div className="col-9">
                      <h3 style={{ fontFamily: 'Roboto Sans-Serif', color: '#a2006d' }}><b>Kids Dentistry</b></h3>
                      <p className="para p-2">
                        <h6>Pediatric dentists are specialised dentists who are
                        trained to deal with a kid's dental concerns.</h6>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6  border p-3">
                  <div className="row">
                    <div className="col-3">
                      <img src="https://thedentalbond.com/img/icon-one.png" />
                    </div>
                    <div className="col-9">
                      <h3 style={{ fontFamily: 'Roboto Sans-Serif', color: '#a2006d' }}><b>Gum Therapy</b></h3>
                      <p className="para p-2">
                        <h6>Gum therapy, also known as periodontal therapy, and is
                        beneficial for the teeths</h6>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>          {/* Review Section */}

            <div className="container testinomials " >
              <h1 className="h1 text-center m-4" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080' }} id="scrollspyHeading2"><b>Testimonials</b></h1>
              <div className="row row-cols-1 row-cols-md-2 g-4 ">
                <div className="col">
                  <div className="card">
                  <img src="https://www.lexacom.co.uk/wp-content/uploads/2023/04/five-times-higher-understanding.png" className="card-img-top  mt-3" alt="..." height={"85px"} />
                    <div className="card-body">
                      <h4 className="card-title" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080',textAlign : "center"}}><b>Mr.Shiv Thackrey</b></h4>
                      <p className="card-text">
                        <h6>Dr. Rahil Qureshi and the team at One Smile Dental Clinic provided outstanding care
                        during my recent root canal. From the warm welcome to the meticulous procedure,
                        every aspect exceeded my expectations.  Dr. Rahil Qureshi explained everything clearly,
                        ensuring I felt comfortable throughout. The clinic's commitment to hygiene and patient
                        comfort is commendable. I highly recommend One Smile Dental Clinic for top-tier dental care.</h6>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://www.lexacom.co.uk/wp-content/uploads/2023/04/five-times-higher-understanding.png" className="card-img-top  mt-3" alt="..." height={"85px"} />
                    <div className="card-body">
                      <h4 className="card-title" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080',textAlign : "center", wordBreak:"break-word" }}><b>Mrs.Shilpa Rao</b></h4>
                      <p className="card-text" >
                        <h6>From start to finish, my experience with Dr. Amey Wagh teeth implants at One Smile Dental Clinic
                        was outstanding.Dr. Amey Wagh's expertise and attention to detail during the teeth implants
                        procedure were truly remarkable. The staff's professionalism and support made me feel
                        comfortable throughout the entire process. Thanks to Dr. Amey, I now have natural-looking
                        teeth that have restored my confidence.</h6>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://www.lexacom.co.uk/wp-content/uploads/2023/04/five-times-higher-understanding.png" className="card-img-top  mt-3" alt="..." height={"85px"} />
                    <div className="card-body">
                      <h4 className="card-title" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080',textAlign : "center", wordBreak:"break-word" }}><b>Mr.Sufiyaan Shaikh</b></h4>
                      <p className="card-text">
                        <h6>One Smile Dental Clinic provided a fantastic experience for my children's dentistry needs.
                        The staff's expertise and compassionate approach instantly put my kids at ease.
                        The clinic's modern facilities and focus on preventive care impressed me.
                        I highly recommend One Smile Dental Clinic for top-notch pediatric dental care.</h6>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://www.lexacom.co.uk/wp-content/uploads/2023/04/five-times-higher-understanding.png" className="card-img-top  mt-3" alt="..." height={"85px"} />
                    <div className="card-body">
                      <h4 className="card-title" style={{ fontFamily: 'Roboto Sans-Serif', color: '#800080',textAlign : "center" }}><b>Miss Rahish Syed</b></h4>
                      <p className="card-text">
                        <h6>Dr. Deepika Singh's gum therapy at One Smile Clinic was exemplary.
                        Dr. Singh's warm demeanor and thorough explanations made each session comfortable and
                        informative. I highly recommend Dr. Singh and One Smile Clinic for outstanding gum
                        therapy and dental care.</h6>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>        
              <Enquirepage></Enquirepage>
        </div>
      </div>
    </div>
  );
}
