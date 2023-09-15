import SearchAnchor from "./SearchAnchor";

const ContactForm = () => {
  return (
    <>
      <SearchAnchor id="contact-form"></SearchAnchor>

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
