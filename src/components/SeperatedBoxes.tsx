import ImageEgg from "../assets/images/desktop/image-transform.jpg";
import ImageGlass from "../assets/images/desktop/image-stand-out.jpg";
import { Box1 } from "../assets/styles/Box1.styled";
import { Box2, GraphicDesign, Photography } from "../assets/styles/Box2.styled";

export function SeperatedBoxes() {
  return (
    <>
      <Box1>
        <h3>Transform your brand</h3>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button>Learn more</button>
      </Box1>
      <img src={ImageEgg} alt="" />
      <img src={ImageGlass} alt="" />
      <Box1>
        <h3>Stand out to the right audience</h3>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <button>Learn more</button>
      </Box1>
      <GraphicDesign>
        <h4>Graphic Design</h4>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </GraphicDesign>
      <Photography>
        <h4>Photography</h4>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </Photography>
    </>
  );
}
