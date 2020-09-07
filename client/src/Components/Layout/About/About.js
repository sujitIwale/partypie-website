import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <header class='avenir tc-l ph3 ph4-ns pt4 pt5-ns'>
        <h1 class='f3 f2-m f-subheadline-l measure lh-title fw1 mt0'>
          About Us
        </h1>
        <hr className='white w-99' />
        <img
          class='w-100 dib measure f3'
          src='http://mrmrs.github.io/photos/009.jpg'
          alt='A photo of sutro baths by Adam Morse'
        />
      </header>
      <div className='container'>
        <section>
          <article class='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div class='tc'>
              <img
                src='http://tachyons.io/img/avatar_1.jpg'
                class='br-100 h3 w3 dib'
                title='Photo of a kitty staring at you'
              />
              <h1 class='f4'>Mimi Whitehouse</h1>
              <hr class='mw3 bb bw1 b--black-10' />
            </div>
            <p class='lh-copy measure center f6 black-70'>
              Quite affectionate and outgoing. She loves to get chin scratches
              and will roll around on the floor waiting for you give her more of
              them.
            </p>
          </article>
        </section>
        <section>
          <article class='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div class='tc'>
              <img
                src='http://tachyons.io/img/avatar_1.jpg'
                class='br-100 h3 w3 dib'
                title='Photo of a kitty staring at you'
              />
              <h1 class='f4'>Mimi Whitehouse</h1>
              <hr class='mw3 bb bw1 b--black-10' />
            </div>
            <p class='lh-copy measure center f6 black-70'>
              Quite affectionate and outgoing. She loves to get chin scratches
              and will roll around on the floor waiting for you give her more of
              them.
            </p>
          </article>
        </section>
        <section>
          <article class='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div class='tc'>
              <img
                src='http://tachyons.io/img/avatar_1.jpg'
                class='br-100 h3 w3 dib'
                title='Photo of a kitty staring at you'
              />
              <h1 class='f4'>Mimi Whitehouse</h1>
              <hr class='mw3 bb bw1 b--black-10' />
            </div>
            <p class='lh-copy measure center f6 black-70'>
              Quite affectionate and outgoing. She loves to get chin scratches
              and will roll around on the floor waiting for you give her more of
              them.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default About;
