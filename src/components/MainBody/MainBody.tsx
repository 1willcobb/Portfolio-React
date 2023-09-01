import ContactForm from "./ContactForm"
import Portfolio from "./Portfolio"
import Profile from "./Profile"
import Resume from "./Resume"

const MainBody = () => {
  return (
    <div className="main-body">
        <Profile/>
        <Portfolio/>
        <Resume/>
        <ContactForm/>
    </div>
  )
}

export default MainBody