import React from "react";
import Link from "next/link";
import { cards, CardContent } from "../config/cardData";

const StepsCard: React.FC = () => {
  return (
    <div className="Cardcontainer">
      {cards.map((card: CardContent, index: number) => (
        <div key={index} className="box">
          <div className="content">
            <h2>{card.title}</h2>
            <h4>{card.heading}</h4>
            <p className="!text-white-700">{card.description}</p>
            {card.linkText && (
              <p>
                <Link href={card.linkUrl} className="!text-blue-700 ">
                  {card.linkText}
                </Link>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsCard;
