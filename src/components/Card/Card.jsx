import { HiOutlineClock } from "react-icons/hi2";
import { AiOutlineFire } from "react-icons/ai";
import { useEffect, useState } from "react";


const Card = ({ card, handleAddToCook }) => {
    console.log(card);
    const { name, description, image, ingredients, calories, prepTime } = card;

    
    return (
        <div className="lexend w-[405px] bg-base-100 border-2 rounded-xl p-6">
            <figure className="">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="mt-6 items-center">
                <h2 className="  text-lg font-bold mb-3">{name}</h2>
                <p className="mb-5">{description}</p>
                <hr className="mb-4" />
                {/* <h4>Ingredients:</h4> */}
                <ul><span className="font-semibold">Ingredients: {ingredients.length}</span>
                    <li>
                        {
                            ingredients.map(ig => console.log(ig))
                        }
                        
                    </li>
                </ul>
                <hr className="my-4" />
                <div className="flex gap-10">
                    <p className="flex gap-2"><HiOutlineClock className="mt-1"></HiOutlineClock> {prepTime}</p>
                    <p className="flex gap-2"><AiOutlineFire className="mt-1"> </AiOutlineFire> {calories} calories</p>
                </div>
                <div className="mt-6">
                    <button onClick={() => handleAddToCook(card)} className="btn bg-[#0BE58A] py-3 px-6 rounded-full text-black font-bold hover:bg-gray-300">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Card;