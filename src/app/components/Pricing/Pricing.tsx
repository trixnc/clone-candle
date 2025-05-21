export const Pricing = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          Choose your <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text ">Plan</span>
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Get 1 month free by subscribing yearly.
        </p>
  
        {/* Toggle for Monthly/Yearly */}
        <div className="flex justify-center mb-8">
          <button className="px-4 py-2  text-white rounded-full bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 transition">
            Monthly
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition">
            Yearly 
          </button>
          <div className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition">(Save 9%)</div>
        </div>
  
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white border rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">Free</h2>
            <p className="text-sm text-gray-500 mb-4">Free tier</p>
            <p className="text-gray-600 mb-4">
              For curious traders exploring the platform.
            </p>
            <p className="text-2xl font-bold mb-4">Free</p>
            <button className="w-full py-2 bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white rounded-full transition">
              Get Started
            </button>
            <hr className="my-4" />
            <h3 className="text-sm font-bold text-gray-500 mb-2">FEATURES</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Active Tabs: 1 (workspace)</li>
              <li>✔ Daily Limit: 2 scans per day</li>
              <li>✔ Timeframes: Limited</li>
              <li>✔ Webhook: Disabled</li>
            </ul>
          </div>
  
          {/* Standard Plan */}
          <div className="bg-white border rounded-lg shadow-lg p-6 relative">
            <span className="absolute top-4 right-4 bg-blue-100 text-blue-900 text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </span>
            <h2 className="text-xl font-bold mb-2">STANDARD</h2>
            <p className="text-sm text-gray-500 mb-4">Best for individual traders</p>
            <p className="text-gray-600 mb-4">
              For active traders looking to gain a competitive edge.
            </p>
            <p className="text-2xl font-bold mb-4">$19/month</p>
            <button className="w-full py-2 bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white rounded-full transition">
              Get Started
            </button>
            <hr className="my-4" />
            <h3 className="text-sm font-bold text-gray-500 mb-2">FEATURES</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Custom Pattern: 1</li>
              <li>✔ Active Tabs: 3 (workspace)</li>
              <li>✔ Daily Limit: 150 scans per day</li>
              <li>✔ Timeframes: Limited</li>
              <li>✔ Webhook: Disabled</li>
            </ul>
          </div>
  
          {/* Pro Plan */}
          <div className="bg-white border rounded-lg shadow-lg p-6 relative">
            <span className="absolute top-4 right-4 bg-blue-100 text-blue-900 text-xs font-bold px-2 py-1 rounded-full">
              Best deal
            </span>
            <h2 className="text-xl font-bold mb-2">Pro Plan</h2>
            <p className="text-sm text-gray-500 mb-4">Team & Professional Tier</p>
            <p className="text-gray-600 mb-4">
              Built for full-time traders, trading hubs, and professional teams.
            </p>
            <p className="text-2xl font-bold mb-4">$29/month</p>
            <button className="w-full py-2 bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white rounded-full transition">
              Get Started
            </button>
            <hr className="my-4" />
            <h3 className="text-sm font-bold text-gray-500 mb-2">FEATURES</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Custom Pattern: 10</li>
              <li>✔ Active Tabs: 10 (workspace)</li>
              <li>✔ Daily Limit: 500 scans per day</li>
              <li>✔ Timeframes: Unlimited</li>
              <li>✔ Webhook: Enabled</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };