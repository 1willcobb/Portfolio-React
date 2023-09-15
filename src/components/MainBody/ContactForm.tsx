import SearchAnchor from "./SearchAnchor";

// Contact form block, currently setup as a button
const ContactForm = () => {
  return (
    <>
      {/** Anchor for going to page */}
      <SearchAnchor id="contact-form"></SearchAnchor> 

      {/** Contact Button that oppens an email client */}
      <div className="form-box">
        <form action="mailto:cobb.will@gmail.com">
          <input
            type="submit"
            value="REACH OUT"
            className="reachout-button"
            style={{ padding: "2rem", boxShadow: "1px 1px 1px black" }}
          />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
