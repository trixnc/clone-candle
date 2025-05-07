export const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-sky-600 text-white">
            <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Pricing Card 1 */}
                <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
                    <p className="text-lg mb-4">$9.99/month</p>
                    <ul className="mb-4">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                        Choose Plan
                    </button>
                </div>

                {/* Pricing Card 2 */}
                <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Pro Plan</h2>
                    <p className="text-lg mb-4">$19.99/month</p>
                    <ul className="mb-4">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                        Choose Plan
                    </button>
                </div>

                {/* Pricing Card 3 */}
                <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>
                    <p className="text-lg mb-4">$29.99/month</p>
                    <ul className="mb-4">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button
                        className="bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                        onClick={() => {
                            // Handle button click
                        }}
                    >   
                        Choose Plan
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <p className="text-lg">Need help? Contact us at
                    <a href="mailto:" className="text-blue-300 hover:underline"></a>
                </p>
            </div>
        </div>
    );
}
