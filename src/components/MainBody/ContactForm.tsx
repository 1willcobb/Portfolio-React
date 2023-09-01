
const ContactForm = () => {
  return (
    <div className="form-box" id="contact-form">
        <form action="mailto:cobb.will@gmail.com">
            <input type="submit" value="REACH OUT" className="reachout-button" style={{padding: '2rem', boxShadow: '1px 1px 1px black' }}/>
        </form>
    </div>
  )
}

export default ContactForm