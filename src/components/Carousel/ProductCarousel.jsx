import Carousel from "react-bootstrap/Carousel";

export default function ProductCarousel({ productImages }) {
  return (
    <>
      <Carousel>
        {productImages.map((item) => (
          <Carousel.Item key={item.index}>
            <img
              src={item.url}
              alt="image 1"
              className="h-[277px] w-full object-cover lg:h-[450px]  xl:h-[450px]"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
