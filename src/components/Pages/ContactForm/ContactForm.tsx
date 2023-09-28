import styled from "styled-components";
import ReachOutButton from "./ReachOutButton";

const FormBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  border-top: var(--borders);
  border-bottom: var(--borders);
  background-color: var(--solid-color);
`;

// Contact form block, currently setup as a button
const ContactForm = () => {
  return (
    <>
      {/** Contact Button that oppens an email client */}
      <FormBoxStyled className="form-box">
        <form action="">
          {" "}
          {/*"mailto:cobb.will@gmail.com*/}
          <ReachOutButton>REACH OUT</ReachOutButton>
        </form>
      </FormBoxStyled>
    </>
  );
};

export default ContactForm;
