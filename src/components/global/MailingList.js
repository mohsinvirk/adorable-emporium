import React from 'react';

const MailingList = () => (
  <section className="mailing-list">
    <div className="content">
      <div className="mailing-list-content">
        <h2>
          <span className="love">Source</span> Local Produce Today!
        </h2>
        <p>
          information about information about{' '}
          <span className="word-mark">
            <span className="love">GREEN</span>HEART
          </span>{' '}
          Sustainable Food Systems
        </p>
        <form className="newsletter-form" method="post" noValidate>
          <input
            className="email"
            required="required"
            placeholder="Email address"
            name="email"
            type="email"
            aria-label="Email"
          />
          <button type="submit" className="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default MailingList;
