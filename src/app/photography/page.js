import Photos from "../_components/photos/Photos";
import styles from "./photography.module.css";

export default function Photography() {
  return (
    <div className="pageContent">
      <div className="purpleCard">
        <h3>Photography</h3>
        <p>
          I've loved taking photos since I got my first DSLR in 2008. Since then
          I've shot a couple weddings and been an event photographer in
          countless press pits. Mostly I just love going out exploring and
          taking photos of the people I love.
        </p>
        <p>
          Please browse the select photos I have below by clicking on a
          thumbnail image and navigating with your keyboard arrows or on-screen
          buttons.
        </p>
        <Photos />
      </div>
    </div>
  );
}
