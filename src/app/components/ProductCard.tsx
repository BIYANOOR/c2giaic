import Image from "next/image";

export default function ProductCard() {
    return (
        <main className="container mx-auto">
            <div className="flex items-center justify-center w-full">
                <Image
                    src="/main2.png"
                    alt="image"
                    width={1200}
                    height={400}
                    className="w-full"
                />
            </div>
            <p className="text-center pt-10 pb-6 mx-4 text-2xl font-serif text-green-600">
                Buy farm fresh organic vegetables at reasonable rates online
            </p>

            <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/potato.png"
                            alt="Product One"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 50/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/onion.png"
                            alt="Product Two"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 100/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/chilli.png"
                            alt="Product Three"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 45/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/beetroot.png"
                            alt="Product Four"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 50/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/cabbage.png"
                            alt="Product Five"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 100/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/capsicum.png"
                            alt="Product Six"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 45/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/carrot.png"
                            alt="Product Seven"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 50/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/garlic.png"
                            alt="Product Eight"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 100/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/cucumber.png"
                            alt="Product Nine"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 45/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/ginger.png"
                            alt="Product Ten"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 50/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/spinach.png"
                            alt="Product Eleven"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 100/kg</p>
                    <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>   
                    </div>
                    <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/ginger.png"
                            alt="Product Twelve"
                            width={250}
                            height={250}
                            className="border-2 border-green-600 rounded-lg"
                        />
                    </div>
                    <p className="text-center pt-10">PKR 50/kg</p>
                    <div className="flex justify-center items-center my-3">
                        <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
