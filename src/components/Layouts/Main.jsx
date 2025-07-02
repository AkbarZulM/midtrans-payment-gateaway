import { useEffect, useState } from "react";
import element from "../../assets/image/graphic-elements.png";
import "./MainStyle.css";

const Main = () => {
  const [image, setImage] = useState([]);
  const [cards, setCard] = useState([]);

  useEffect(() => {
    // set image hanya sekali
    setImage([
      { src: element, alt: "Image 1" },
      { src: element, alt: "Image 2" },
      { src: element, alt: "Image 3" },
      { src: element, alt: "Image 4" },
      { src: element, alt: "Image 5" },
    ]);

    setCard([
      {
        src: element,
        alt: element,
        title: "Card 1",
        price: "$10",
        description: "Description for Card 1",
      },
    ]);
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-between p-6">
        <div className="side-left mt-30">
          <div className="grid grid-rows-5 relative">
            {image.map((img, index) => {
              let extraClass = "";
              let style = { transfrom: `translateY(${index * 20}px)` };
              if (index === 0) {
                extraClass = "";
                style.animation = "var(--slide-right)";
              } else if (index === 1) {
                extraClass = "left-[150px] ";
                style.animation = "var(--slide-left)";
              } else if (index === 2) {
                extraClass = "";
                style.animation = "var(--slide-right)";
              } else if (index === 3) {
                extraClass = "left-[150px]";
                style.animation = "var(--slide-left)";
              } else if (index === 4) {
                extraClass = "";
                style.animation = "var(--slide-right)";
              }

              return (
                <div
                  key={index}
                  className="relative w-[190px] h-[190px] overflow-visible"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ${extraClass}`}
                    style={style}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="main flex flex-col h-full w-[40vw]">
          <nav className="mb-10 text-center">
            <span className="[font-family:var(--font-caveat)] text-6xl">
              Shope
            </span>
          </nav>
          <main className="flex flex-col ">
            <div className="previous gap-2 flex items-center mb-10">
              <span className="text-2xl">1</span>
              <span className="text-2xl">2</span>
            </div>
            <div className="card">
              {cards.map((card, index) => (
                <div className="" key={index}>
                  <div className="card-item">{card.price}</div>
                  <div className="card-item">{card.title}</div>
                  <div className="card-item">{card.description}</div>
                </div>
              ))}
            </div>
          </main>
        </div>

        <div className="side-right mt-30">
          <div className="grid grid-rows-5 relative">
            {image.map((img, index) => {
              let extraClass = "";
              let style = { transfrom: `translateY(${index * 20}px)` };
              if (index === 0) {
                extraClass = "";
                style.animation = "var(--slide-right)";
              } else if (index === 1) {
                extraClass = "left-[150px] ";
                style.animation = "var(--slide-left)";
              } else if (index === 2) {
                extraClass = "";
                style.animation = "var(--slide-right)";
              } else if (index === 3) {
                extraClass = "left-[150px]";
                style.animation = "var(--slide-left)";
              } else if (index === 4) {
                extraClass = "";
                style.animation = "var(--slide-right)";
              }

              return (
                <div
                  key={index}
                  className="relative w-[190px] h-[190px] overflow-visible"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ${extraClass}`}
                    style={style}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
