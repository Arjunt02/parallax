import { Parallax } from 'react-parallax';
import './App.css';
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'




function App() {
  return (
    <>

      <Parallax strength={600} bgImage={img1} >
        <div className="content">
          <div className="text-content">Normal parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={img2} >
        <div className="content">
          <div className="text-content">Blur parallax</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={img3} >
        <div className="content">
          <div className="text-content">Reverse parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={img2} >
        <div className="content">
          <div className="text-content">parallax</div>
        </div>
      </Parallax>

      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus alias aspernatur pariatur, veritatis ipsam, ea tempore eos tenetur magnam architecto magni vero ut dolorum sunt omnis adipisci repellat. Nesciunt?
          Aut reprehenderit omnis nobis tenetur molestiae maxime alias. Fuga eaque accusantium nemo fugit tempora odio, mollitia voluptas modi natus laborum optio cum, obcaecati ex facilis eligendi itaque eum eius illo.
          Temporibus vel aspernatur ipsum similique repellendus. Deserunt debitis laudantium eligendi ab iure corrupti architecto, quia a deleniti nobis reprehenderit labore voluptas sit obcaecati quo! Totam veniam corporis voluptas rem quis.
          Earum tempore, illo, corrupti dolorem sequi cumque quia est qui, quibusdam dolor ab aut pariatur deserunt dolorum alias nisi iusto magnam eius porro corporis minus delectus velit ut? Accusamus, corrupti!
          Adipisci, voluptatibus. Voluptatem ipsam unde vero nobis laboriosam itaque corrupti, accusamus eius voluptas error quaerat ipsa ratione, ab asperiores repudiandae et adipisci eum? Distinctio explicabo animi dolorem perspiciatis non rem.</p>
      </div>
    </>
  );
}

export default App;
