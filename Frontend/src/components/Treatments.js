import React from 'react'

export default function Treatments() {
  return (
    <div>
      <div className="container border border-dark">
      <div class="row">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide col-xl-6"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.bodyexpert.online/wp-content/uploads/2023/01/01-guide-implant-dentaire.jpg"
                class="d-block w-100"
                alt="..."
                style={{ height: "400px", border: "1px solid black" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://smartpediatric.com/wp-content/uploads/pediatric-dentist-showing-how-to-brush-teeth.jpg"
                alt="..."
                style={{ height: "400px", border: "1px solid black" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.dentistryofwestbend.com/wp-content/uploads/shutterstock_1374203252-1-1080x675.jpg"
                class="d-block w-100"
                alt="..."
                style={{ height: "400px", border: "1px solid black" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/paradontax/master/assets/whatsnew_update/Paradontax_1920x1080_gingivitis.jpg?auto=format"
                class="d-block w-100"
                alt="..."
                style={{ height: "400px", border: "1px solid black" }}
              />
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
        <div class="col-xl-6">
          <div class="card" style={{ height: "400px" }}>
            <div class="card-body">
              <h1 class="card-title">Our Treatments & Procedures</h1>
              <p class="card-text">
                We diagnose various ailments and diseases and offer specialized
                treatments or perform procedures to help you tackle your
                condition better or recover faster. Send us enquiry to know more
                about any specific treatment or procedure that you are looking
                for. Some of the procedures routinely done at our clinic are
                listed below.
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Dental Implants</li>
                <li class="list-group-item">Root Canal Therapy</li>
                <li class="list-group-item">Kids Dentistry</li>
                <li class="list-group-item">Gum Treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Dental Implants</h3>
            <p class="card-text">
              Dental Implants are used as the treatment solution for any missing
              teeth. Implants are the latest advances in the field of
              prosthetics and are the closest replacement to a missing tooth.
              There are several benefits of dental implants, Like replacing the
              missing tooth, supporting dental bridges, improving the smile,
              etc.
            </p>
            <p>
              Dental implants are made majorly out of titanium material that
              suits the human body properly. An implant is a screw-like surgical
              fixture that is placed into the jawbone to replace a missing
              tooth. A crown is placed on this screw to look and function as the
              crown portion of the natural tooth.
            </p>
            <p>
              The dental implants cost in India is a little higher compared to
              the other types of treatments. The single-tooth implant cost in
              India varies as per the type of implant, service providers, etc.
            </p>
          </div>
          <img
            src="https://www.bodyexpert.online/wp-content/uploads/2023/01/01-guide-implant-dentaire.jpg"
            class="card-img-bottom"
            alt="..."
            style={{ height: "600px", border: "1px solid black" }}
          />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Root Canal Therapy</h3>
            <h3>What is RCT or Root Canal Treatment?</h3>
            <p class="card-text">
              Whenever we think of a dentist, one of the first things that comes
              to mind is ‘toothache’ and ‘root canal’. Whenever there is an
              extensive development of the bacteria, the chances of decaying
              increase. In several cases, the decaying of the tooth reaches the
              root of the teeth, which infects the pulp area.
            </p>
            <p>
              This kind of situation is accompanied by pain and can decay the
              whole tooth and might need to remove the tooth. So a proper tooth
              root canal treatment is the better way to treat the decay and save
              the tooth from damaging further. In fact, a large majority of the
              people fear RCT as they believe it is a painful procedure.
            </p>
            <h4>
              Symptoms that most people are likely to experience that may
              indicate the need for a RCT:
            </h4>
            <ul class="list-group">
              <li class="list-group-item">Teeth with deep decay</li>
              <li class="list-group-item">Broken or cracked teeth</li>
              <li class="list-group-item">Teeth with gum diseases</li>
              <li class="list-group-item">Failed dental fillings</li>
              <li class="list-group-item">Teeth that have suffered a trauma</li>
            </ul>
          </div>
          <img
            src="https://www.dentistryofwestbend.com/wp-content/uploads/shutterstock_1374203252-1-1080x675.jpg"
            class="card-img-bottom"
            alt="..."
            style={{ height: "600px", border: "1px solid black" }}
          />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Kids Dentistry</h3>
            <p class="card-text">
              It's always exciting to see your baby’s first teeth appear in
              his/her mouth. With this milestone child learns new ways of
              eating, speaking and smiling. This is also the time you should
              know how to take care of your child’s teeth.
            </p>
            <p>
              Do you know that tooth decay can begin as soon as your first tooth
              appears in the mouth.This is why it's very important to take care
              of your child’s oral hygiene.
            </p>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Who is a pediatric dentist / pedodontist?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Usually children detest visits to the dentist. Pediatric
                    dentists are specialised dentists who are trained 3 extra
                    years to deal with a kid's dental concerns. They understand
                    their psychology and deal with them accordingly. They are
                    specially trained to deal with growing teeth and gums of
                    infants to teenagers unlike general dentists. They are
                    specialized in detecting any concerns with teeth at an early
                    stage and correcting them with preventive measures to avoid
                    any future troubles in the mouth.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    My Child does not have a cavity; does he need a pedodontist/
                    dentist?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Cavity is one of the dental problems kids encounter in their
                    mouth. There is a lot of activity happening in a child's
                    mouth as they are in a continuous dynamic stage till they
                    attain the age of 14-15years. Having a pediatric dentist for
                    your child and a regular check up is a good idea as this
                    will keep you aware about the changes happening in your
                    child’s mouth. This will detect not only dental cavities at
                    an early stage and correct them but also avoid the possible
                    formation of new cavities. Do you know getting your child's
                    milk teeth removed at the right time or getting a space
                    maintainer for a premature tooth removal can avoid the need
                    of braces in your child’s mouth.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Why shall I get my milk teeth treated?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Baby teeth are not permanent and fall off after a certain
                    age, so why get them treated? This is the most common doubt
                    parents have. Milk teeth or baby teeth are extremely
                    important as permanent teeth. Not only do they help a child
                    to eat and speak properly but also add to his/her
                    personality. They play a very important role in guiding the
                    permanent tooth to erupt in place . Cavities in baby teeth
                    increase the bacterial load in the mouth, that not only
                    hampers the oral health but also hampers the overall health
                    of a child. If not treated at the right time, they will only
                    increase with time and lead to pain and discomfort to the
                    child followed by further complications.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://smartpediatric.com/wp-content/uploads/pediatric-dentist-showing-how-to-brush-teeth.jpg"
            class="card-img-bottom"
            alt="..."
            style={{ height: "600px", border: "1px solid black" }}
          />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Gum Treatment</h3>
            <p class="card-text">
              Gum disease is an inflammation of the tissues surrounding your
              teeth. They usually go unnoticed and slowly turn aggressive in
              nature. The most important cause of gum disease is plaque and poor
              oral hygiene but mostly, it may occur due to an underlying medical
              problem such as heart disease, diabetes, osteoporosis etc.
              Therefore, it’s important for it to be diagnosed by a dentist and
              caught at an early stage.
            </p>
            <p>
              At The Dental Bond, our team of the best dentists in Mumbai
              believe in enlightening their patients and promoting good oral
              health through a conservative approach. At our clinic, patients
              are advised about brushing and flossing in the correct way
              whenever they come in for a consultation.
            </p>
            <p>
              If at all any other discrepancies are noticed which cannot be
              handled in a conventional setting, then various degrees of
              treatments are carried out in order to protect or re-design your
              gums. At The Dental Bond, one of the best dental clinics in Mumbai
              Most gum related surgical procedures are treated painlessly using
              Laser therapy thus avoiding cuts, bleeding and stitches.
            </p>
          </div>
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/paradontax/master/assets/whatsnew_update/Paradontax_1920x1080_gingivitis.jpg?auto=format"
            class="card-img-bottom"
            alt="..."
            style={{ height: "600px", border: "1px solid black" }}
          />
        </div>
      </div>
     
    </div>
    </div>
  )
}
