import React from "react";
import PayPalDonateButton from "./PaypalDonatButton";
import BitcoinDonateButton from "./BitcoinDonateButton";

const About = () => {
  const title = "Willkommen bei LUCkey";
  const words = title.split(" ");

  const getCharStyle = (char, word, charIndex, totalPreviousLength) => {
    const baseStyle = {
      animation: "fadeInScale 0.3s ease-out forwards",
      animationDelay: `${(totalPreviousLength + charIndex) * 0.05}s`,
      transform: "translateY(-20px) scale(0.5)",
    };

    // Spezielle Behandlung für "Luckey"
    if (word === "LUCkey") {
      if (char === "e") {
        return {
          ...baseStyle,
          fontSize: "0.6em",
          transform: "translateY(-5px) scale(0.5)",
          fontWeight: "900",
        };
      }
      if (char === "y") {
        return {
          ...baseStyle,
          // fontSize: "0.6em",
          transform: "translateY(-50px) scale(1.5)",
          // fontWeight: "900",
        };
      }
      return {
        ...baseStyle,
        fontWeight: "900",
        letterSpacing: "-0.05em",
      };
    }

    return baseStyle;
  };

  return (
    <section id="about" className="py-20 w-auto h-auto">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-center mb-12">
          {words.map((word, wordIndex) => {
            const previousLength = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length + 1, 0);

            return (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((char, charIndex) => (
                  <span
                    key={`${wordIndex}-${charIndex}`}
                    className="inline-block opacity-0"
                    style={getCharStyle(char, word, charIndex, previousLength)}
                  >
                    {char}
                  </span>
                ))}
                {wordIndex < words.length - 1 && (
                  <span className="inline-block mx-2">&nbsp;</span>
                )}
              </span>
            );
          })}
        </h1>

        <div className="m-10 mt-10 text-lg">
          <p>
            Gemeinsam das Leben besser verstehen Diese Webseite entstand mit dem
            Ziel, das Leben verständlicher zu machen und euch auf dem Weg zu
            einem glücklicheren und zufriedeneren Leben zu unterstützen. Hier
            teilen wir wertvolles Wissen aus eigener Erfahrung – auf
            Spendenbasis und zu verschiedenen Lebensbereichen. Ihr findet bei
            uns vielfältige Lösungswege, aus denen ihr das Passende für euch
            auswählen könnt. Unser Ziel ist es, euch die richtigen Werkzeuge an
            die Hand zu geben, damit ihr euren eigenen Weg selbstbewusst und
            eigenständig gestalten könnt.
          </p>
          <p>
            Bereit, mehr zu erfahren? Klickt hier und entdeckt unser Wissen!
          </p>
          <p>
            Wir wünschen euch viel Freude beim Entdecken und hoffen, dass unser
            Wissen euch dabei unterstützt, das Leben besser zu verstehen und
            eure Antworten zu finden.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, eligendi.
              </h3>
              <p className="text-xl text-white max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                tempore autem odio. Deleniti sint unde voluptatibus quod
                adipisci est numquam?
              </p>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unsere Mission
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              quisquam magni qui ducimus quae enim quia obcaecati sequi, non
              nisi soluta asperiores. Doloribus placeat assumenda, rerum
              distinctio ipsum quod at!
            </p>
          </div>
          <div className=" p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unsere Werte
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque excepturi recusandae adipisci necessitatibus modi unde.
              Itaque dolorum provident, fugit, nemo facilis nam accusamus
              temporibus in, unde quaerat cupiditate quibusdam amet voluptate
              porro nesciunt! Quia ipsam soluta sequi consequuntur consectetur,
              veritatis iste nulla quam repellendus magnam neque provident amet
              nobis. Aspernatur!
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-700 mb-3">
              Unser Ansatz
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              magnam.
            </p>
          </div>
        </div> */}

        {/* Donation Section */}
        <div className="mt-16 p-8 rounded-lg shadow-md text-center">
          <h4 className="text-2xl font-semibold text-purple-700 mb-4">
            Unterstütze unsere Vision
          </h4>
          <p className="text-gray-600 mb-6">
            Dieses Projekt ist und bleibt kostenfrei zugänglich. Wenn du unsere
            Arbeit wertvoll findest, freuen wir uns über deine Unterstützung.
          </p>
          <div className="flex justify-center center gap-6">
            <PayPalDonateButton />
            <BitcoinDonateButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
