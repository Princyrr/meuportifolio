import corel from '../assets/corel.png';
import canva from '../assets/canva.webp';
import adobe from '../assets/image.png';

export default function Design() {
  return (
    <div id="design">
      <h2>Design</h2>
      <div className="design-icons">
        {[corel, canva, adobe].map((src, i) => (
          <img key={i} src={src} alt={`Design ${i}`} />
        ))}
      </div>
    </div>
  );
}