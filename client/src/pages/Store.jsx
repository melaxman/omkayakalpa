import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Corrected imports with lowercase .jpg
import Aloevera from '../assets/images/storeproduct/aloevera.jpg';
import Asparagus from '../assets/images/storeproduct/asparagus.jpg';
import Coedyceps from '../assets/images/storeproduct/coedyceps.jpg';
import Flexseed from '../assets/images/storeproduct/flexseed.jpg';
import Ganoderma from '../assets/images/storeproduct/ganoderma.jpg';
import Ginseng from '../assets/images/storeproduct/ginseng.jpg';
import Grapesseed from '../assets/images/storeproduct/grapesseed.jpg';
import Javaplumseed from '../assets/images/storeproduct/javaplumseed.jpg';
import Moriningleaf from '../assets/images/storeproduct/moringaleaf.jpg';
import Mountshampoo from '../assets/images/storeproduct/mountshampoo.jpg';
import Mountsoap from '../assets/images/storeproduct/mountsoap.jpg';
import Mounttoothpaste from '../assets/images/storeproduct/mounttoothpaste.jpg';
import Sandarchiya from '../assets/images/storeproduct/sandarchiya.jpg';


const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState({});

  const categories = [
    { id: 'all', name: 'All Products' },
    // { id: 'natural', name: 'Natural Supplements' }, // category now active
  ];

  // Array of product objects with image and name
  const products = [
    { id: 1, name: 'Aloe Vera', image: Aloevera, category: 'Natural Supplements' },
    { id: 2, name: 'Asparagus', image: Asparagus, category: 'Natural Supplements' },
    { id: 3, name: 'Coedyceps', image: Coedyceps, category: 'Natural Supplements' },
    { id: 4, name: 'Flex Seed', image: Flexseed, category: 'Natural Supplements' },
    { id: 5, name: 'Ganoderma', image: Ganoderma, category: 'Natural Supplements' },
    { id: 6, name: 'Ginseng', image: Ginseng, category: 'Natural Supplements' },
    { id: 7, name: 'Grapes Seed', image: Grapesseed, category: 'Natural Supplements' },
    { id: 8, name: 'Java Plum Seed', image: Javaplumseed, category: 'Natural Supplements' },
    { id: 9, name: 'Moringa Leaf', image: Moriningleaf, category: 'Natural Supplements' },
    { id: 10, name: 'Mount Shampoo', image: Mountshampoo, category: 'Natural Supplements' },
    { id: 11, name: 'Mount Soap', image: Mountsoap, category: 'Natural Supplements' },
    { id: 12, name: 'Mount Tooth Paste', image: Mounttoothpaste, category: 'Natural Supplements' },
    { id: 13, name: 'Sandar Chiya', image: Sandarchiya, category: 'Natural Supplements' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-green-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Store</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our curated selection of natural supplements and wellness products designed to enhance your health and well-being.  
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <AnimatedSection animation="slideLeft" className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" className="relative">
              <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animation="fadeUp"
                delay={index * 100}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
<div className="relative overflow-hidden aspect-[4/3]">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
  />
</div>


                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  {/* <p className="text-gray-600 mb-4 text-sm">{product.description}</p> */}

                  {/* Price section commented out */}
                  {/*
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">
                        Rs. {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          Rs. {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  */}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
