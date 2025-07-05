import { useEffect, useState } from "react";
import element from "../../assets/image/graphic-elements.png";
import logo from "../../assets/image/logo.png";
import "./MainStyle.css";

const Main = () => {
  const [image, setImage] = useState([]);
  const [cards, setCard] = useState([]);
  const [isHovered, setIsHover] = useState(null);

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
        src: "/Sepatu Jogging.avif",
        alt: element,
        title: "Nike Version Edtion",
        price: "$10",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam delectus repellendus! Ut commodi officiis quo sapiente fuga recusandae ullam cumque optio, dolor amet cum maxime dolores aliquam cupiditate corporis.",
      },
      {
        src: "/Sepatu Jogging.avif",
        alt: element,
        title: "Nike Version Edtion",
        price: "$10",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam delectus repellendus! Ut commodi officiis quo sapiente fuga recusandae ullam cumque optio, dolor amet cum maxime dolores aliquam cupiditate corporis.",
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
            <div className="card grid grid-cols-2 gap-7">
              {cards.map((card, index) => {
                const isHover = isHovered === index;
                return (
                  <div className="flex w-auto h-auto" key={index}>
                    <div
                      className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 w-auto h-auto group"
                      onMouseEnter={() => setIsHover(index)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <div className="card-body relative z-30 h-[400px] w-[400px]  cursor-pointer">
                        <div className="flex flex-col hover:opacity-80 transition-opacity duration-300 ease-in-out">
                          <img
                            src={card.src}
                            alt={card.alt}
                            className={`w-[400px] h-[400px] object-cover ${
                              isHover ? "slide-down-img" : "slide-up-img"
                            }`} // 650px
                          />
                          <div
                            className={` gap-2 p-4 absolute top-72 left-2 bg-opacity-80 ${
                              isHover ? "position-up" : "position-down"
                            }  transition-all duration-300 ease-in-out`}
                          >
                            <div className="flex flex-col justify-between items-center">
                              <div className="flex items-center gap-2">
                                <img
                                  src={logo}
                                  alt="Logo"
                                  className="rounded-full w-[60px] h-[60px]"
                                />
                                <div className="title-logo flex flex-col">
                                  <span className="title text-[15px] text-[#004D4C] [font-family:var(--font-hyper-viper)]">
                                    SHOPE ESD
                                  </span>
                                  <span className="sub-title text-[12px] text-[#004D4C]">
                                    shell Brand Product
                                  </span>
                                </div>
                                <div className="price text-[20px] text-[#004D4C] pl-25">
                                  {card.price}
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`card-footer flex flex-col p-4 gap-2 transition-all duration-300 ease-in-out relative ${
                          isHover ? "slide-up" : ""
                        }`}
                      >
                        <div className="text-[#004D4C] text-[20px]">
                          {card.title}
                        </div>
                        <div className="card-item text-justify">
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
