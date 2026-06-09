import React, { createContext, useContext, useState, useEffect } from 'react';
import { getSiteData } from '../services/api';
import { siteConfig as fallbackConfig, categories as fallbackCategories, featuredProducts as fallbackProducts, clients as fallbackClients } from '../data/siteData';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [siteData, setSiteData] = useState({
    config: fallbackConfig,
    categories: fallbackCategories,
    featuredProducts: fallbackProducts,
    allProducts: fallbackProducts,
    clients: fallbackClients,
    banners: [],
    loading: true,
  });

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const data = await getSiteData();
        
        if (!data) throw new Error('No data received from API');

        setSiteData({
          config: { ...fallbackConfig, ...(data.settings || {}) },
          categories: (data.categories && data.categories.length > 0) ? data.categories : fallbackCategories,
          featuredProducts: (data.featured_products && data.featured_products.length > 0) ? data.featured_products : fallbackProducts,
          allProducts: (data.products && data.products.length > 0) ? data.products : fallbackProducts,
          clients: (data.clients && data.clients.length > 0) ? data.clients : fallbackClients,
          banners: data.banners || [],
          loading: false,
        });
      } catch (error) {
        console.error('Failed to fetch live site data, using fallback.', error);
        // Ensure we still turn off loading state even on failure
        setSiteData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchSiteData();
  }, []);

  return (
    <SiteContext.Provider value={siteData}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteProvider');
  }
  return context;
};
