import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '😊',
      title: 'User-Friendly Interface',
      description:
        'SplitWind offers an intuitive interface that makes it easy to track and split expenses in a few simple steps.',
    },
    {
      icon: '🎨',
      title: 'Customizable Settings',
      description:
        'Tailor the app to suit your needs with flexible settings and customization options.',
    },
    {
      icon: '🔧',
      title: 'Effortless Expense Management',
      description:
        'Easily manage shared expenses among friends, family, or roommates, all in one place.',
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description:
        'Get support whenever you need it with our dedicated team, available around the clock.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-green-600 font-semibold mb-3">Core Features</h4>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Awesome Features
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover the key features that make SplitWind the perfect solution for
          managing shared expenses.
        </p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 text-green-600 text-4xl rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
                {index !== features.length - 1 && (
                  <div className="hidden lg:block absolute top-[20%] right-[-90px] transform translate-y-[-50%] w-[140px] h-0.5 border-t-[4px] border-dotted border-[#2f855a]"></div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
