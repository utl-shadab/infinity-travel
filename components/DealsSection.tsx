import React from 'react';

const DealsSection = () => {
    const deals = [
        {
            id: 1,
            category: "Flight Deals",
            title: "Travel Far, Save More on Domestic and International Routes",
            subtitle: "Snag the Best Offer Today",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=400&fit=crop",
        },
        {
            id: 2,
            category: "Cruise Special",
            title: "Relax in Style with Exclusive Deals on Luxury Cruise Tours",
            subtitle: "Secure Your Discounted Cruise",
            image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=400&h=400&fit=crop",
        },
        {
            id: 3,
            category: "Hotel Offers",
            title: "Enjoy Quality Stays at Unbeatable Prices",
            subtitle: "Find Great Hotel Deals",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop",
        },
        {
            id: 4,
            category: "Your Trip, Your Way",
            title: "Design a Custom Offer with Flexible Travel Options",
            subtitle: "Craft the Ideal Travel Package",
            image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&h=400&fit=crop",
        },
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                Specially Picked Deals for You Only
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {deals.map((deal) => (
                    <div
                        key={deal.id}
                        className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-start gap-4">
                            <div className="shrink-0">
                                <img
                                    src={deal.image}
                                    alt={deal.category}
                                    className="w-20 h-24 rounded-xl object-cover"
                                />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <p className="text-[10px] font-medium text-gray-500 mb-1 tracking-wide">
                                    {deal.category}
                                </p>
                                <h3 className="text-xs font-medium text-gray-900 leading-snug mb-2">
                                    {deal.title}
                                </h3>
                                <p className="text-[10px] text-gray-600">{deal.subtitle}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end relative">
                            <button
                                className="
                                          mt-0 lg:mt-4 w-fit 
                                          bg-blue-600 cursor-pointer text-white text-xs font-medium 
                                          py-1.5 px-4 rounded-lg hover:bg-blue-700 active:scale-[0.98] 
                                          transition-all duration-200 shadow-sm
                                          lg:absolute lg:left-1/5 -top-4 lg:translate-x-1/3
                                        "
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default DealsSection;