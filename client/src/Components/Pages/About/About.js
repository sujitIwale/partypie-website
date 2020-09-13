import React from "react";

const About = () => {
  return (
    <div style={{ fontFamily: "Lobster" }}>
      <header class='bg-black-50 sans-serif'>
        <div class='mw9 center pa4 pt5-ns ph7-l'>
          <h3 class='f2 f1-m f-headline-l lh-title mv0'>
            <span class=' lh-copy white pa1 tracked-tight'>Who Are We.</span>
          </h3>
          <h4 class='f3 fw1 georgia i'>
            We Are Organisers . Managers . Developers . Creaters . Designers .
            Coordinators . And a Team.
          </h4>
        </div>
      </header>
      <article class='center w-60  hidden ba ma4'>
        <h1 class='f3 bg-near-black white  mv0 pv2 ph3 tc'>
          Company Background
        </h1>
        <div class='pa3 bt'>
          <p class='f5 f3-ns lh-copy mv0 ttc'>
            Found in 2020, the world pandemic has made us all lose human
            touch.partypie has been created with the idea of getting together
            and enjoying ourselves with loved ones while keeping safe and
            everyone’s health. Company will cater to events at host’s place by
            converting it into a party venue. We will provide a whole party
            ambiance including buffet menu, decoration and special arrangement
            if required. Customers will also be able to customize their party
            according to their need.
          </p>
        </div>
      </article>
      <article class='center w-60 hidden ba ma4'>
        <h1 class='f3 bg-near-black white mv0 pv2 ph3 tc'>
          Organization's Vision
        </h1>
        <div class='pa3 bt'>
          <p class='f5 f3-ns lh-copy mv0 ttc'>
            To be a leading provider of quality of service and best variety of
            food that will be as per the customer’s personal preference, a
            convenient service at the customer’s place by offering a budget
            friendly event with consistency and presentation that will leave a
            lasting impression.
          </p>
        </div>
      </article>
      <article class='cf'>
        <div
          class='fl w-100 w-50-ns 
         tc'
        >
          <article class='mw5 center bg-white br3 pa3 pa4-ns  mv3 ba b--black-10'>
            <div class='tc'>
              <img
                src='http://tachyons.io/img/logo.jpg'
                class='br2 h3 w3 dib'
                alt='avatar'
              />
              <h1 class='f2'>Yatharth Kaigaonkar</h1>
              <h1 class='f3'>Founder</h1>
              <hr class='mw3 bb bw1 b--black-10' />
            </div>
            <p class='lh-copy measure center f6 black-70'>
              Learned from best companies in india and has earned great
              leadership qualities from working with marriott group and taj
              industries. Holding hotel management graduation with queen
              margaret university.
            </p>
          </article>
          <article class='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div class='tc'>
              <img
                src='http://tachyons.io/img/logo.jpg'
                class='br2 h3 w3 dib'
                alt='avatar'
              />
              <h1 class='f2'>Harshal kaigoankar</h1>
              <h1 class='f3'>Tech Team</h1>
              <hr class='mw3 bb bw1 b--black-10' />
            </div>
            <p class='lh-copy measure center f6 black-70'>
              Best experience in technical various projects and has polished his
              skills under best guidance in india.
            </p>
          </article>
        </div>
        <div class='fl w-100 w-50-ns tc'>
          <article class='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div class='tc'>
              <img
                src='http://tachyons.io/img/logo.jpg'
                class='br2 h3 w3 dib'
                alt='avatar'
              />
              <h1 class='f2'>Rutuja Jogalekar</h1>
              <h1 class='f3'>Co-Founder</h1>
              <hr class='mw3 bb bw1 b--black-10' />
            </div>
            <p class='lh-copy measure center f6 black-70'>
              Holding a hotel management degree and have experience of working
              with many 5 star groups such as the Hyatt group of hotels, Taj
              group of hotels, etc.
            </p>
          </article>
          <article class='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div class='tc'>
              <img
                src='http://tachyons.io/img/logo.jpg'
                class='br2 h3 w3 dib'
                alt='avatar'
              />
              <h1 class='f2'>Sujit Iwale</h1>
              <h1 class='f3'>Tech Team</h1>
              <hr class='mw3 bb bw1 b--black-10' />
            </div>
            <p class='lh-copy measure center f6 black-70'>
              Finest technical personnel who like new challenges and have the
              ability to produce unique and best.
            </p>
          </article>
        </div>
      </article>
    </div>
  );
};

export default About;
