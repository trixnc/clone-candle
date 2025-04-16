import React from "react";
import Container from "../components/Container";

export default function Frame() {
    return (
        <div>
            <Container>
                <div className="w-full pt-5 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center font-bold my-3">Trusted by teams at</div>
                    <p className="flex items-center justify-center text-gray-400 my-5 text-center">
                        More than 500,000 people across 60,000 companies are active with Reclaim
                    </p>
                    <div className="flex items-center justify-center my-1.5">
                        <img src="./icc/Star icon.svg" alt="" className="h-5 w-5 mx-2" />
                        <img src="./icc/Star icon-1.svg" alt="" className="h-5 w-5 mx-2" />
                        <img src="./icc/Star icon-2.svg" alt="" className="h-5 w-5 mx-2" />
                        <img src="./icc/Star icon-3.svg" alt="" className="h-5 w-5 mx-2" />
                        <img src="./icc/Star icon-4.svg" alt="" className="h-5 w-5 mx-2" />
                        <div className="font-bold text-gray-500">4.8/5</div>
                    </div>
                    <div className="flex items-center justify-center my-3">
                        <img src="./icc/Frame2.svg" alt="" className="h-8 mx-2" />
                    </div>
                </div>
            </Container>
        </div>
    );
}