// import { Button } from "flowbite-react";

export default function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex flex-col">
                <h2 className="text-2xl">
                    Want to learn more about Technology?
                </h2>
                <p className="text-gray-500 my-2">
                    Checkout to know more about DevLearn
                </p>
            </div>
            <div className="p-7 flex-1">
                <img src="https://i.pinimg.com/736x/e4/4d/bc/e44dbcff7d7d3c4d50af58fc5104f8ba.jpg" />
            </div>
        </div>
    );
}
