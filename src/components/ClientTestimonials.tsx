import {
  ClientStory,
  ClientsWrapper,
  StyledClientTestimonials,
} from "../assets/styles/ClientTestimonials.styled";
import ImageEmily from "../assets/images/image-emily.jpg";
import ImageJennie from "../assets/images/image-jennie.jpg";
import ImageThomas from "../assets/images/image-thomas.jpg";

export function ClientTestimonials() {
  return (
    <StyledClientTestimonials>
      <h5>Client Testimonials</h5>
      <ClientsWrapper>
        <ClientStory>
          <img src={ImageEmily} alt="Emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div>
            <h6>Emily R. </h6>
            <p>Marketing Director</p>
          </div>
        </ClientStory>
        <ClientStory>
          <img src={ImageThomas} alt="Thomas" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div>
            <h6>Thomas S. Chief</h6>
            <p>Operating Officer</p>
          </div>
        </ClientStory>
        <ClientStory>
          <img src={ImageJennie} alt="Jennie" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div>
            <h6>Jennie F. </h6>
            <p>Business Owner</p>
          </div>
        </ClientStory>
      </ClientsWrapper>
    </StyledClientTestimonials>
  );
}
