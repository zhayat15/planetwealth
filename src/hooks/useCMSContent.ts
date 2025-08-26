import { useState, useEffect } from 'react';

interface CMSContent {
  homepage: {
    heroTitle: string;
    heroSubtitle: string;
    heroStats: {
      clients: string;
      fundsManaged: string;
      experience: string;
      rating: string;
    };
  };
  pages: Array<{
    id: string;
    title: string;
    path: string;
    status: string;
    lastModified: string;
    content: any;
    seo: {
      title: string;
      description: string;
      keywords: string;
      focusKeyword: string;
    };
  }>;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  analytics: {
    overview: {
      totalPages: number;
      publishedPages: number;
      draftPages: number;
      avgSeoScore: number;
    };
    traffic: {
      totalVisits: number;
      uniqueVisitors: number;
      pageViews: number;
      bounceRate: number;
      avgSessionDuration: string;
    };
    seoRankings: Array<{
      keyword: string;
      position: number;
      change: string;
      volume: number;
    }>;
    topPages: Array<{
      page: string;
      visits: number;
      conversions: number;
      conversionRate: string;
    }>;
  };
}

const defaultContent: CMSContent = {
  homepage: {
    heroTitle: 'Your Trusted Financial Advisor in Melbourne',
    heroSubtitle: 'Take control of your financial future with expert guidance from Melbourne\'s most trusted financial advisory team.',
    heroStats: {
      clients: '500+',
      fundsManaged: '$50M+',
      experience: '15+',
      rating: '4.9★'
    }
  },
  pages: [
    {
      id: 'home',
      title: 'Homepage',
      path: '/',
      status: 'published',
      lastModified: '2025-01-27',
      content: {
        heroTitle: 'Your Trusted Financial Advisor in Melbourne',
        heroSubtitle: 'Take control of your financial future with expert guidance from Melbourne\'s most trusted financial advisory team.',
        heroStats: {
          clients: '500+',
          fundsManaged: '$50M+',
          experience: '15+',
          rating: '4.9★'
        }
      },
      seo: {
        title: 'Planet Wealth Financial Advisory - Melbourne\'s Trusted Financial Advisors',
        description: 'Expert financial planning, SMSF services, home loans & insurance in Melbourne. Book your free consultation today with Planet Wealth.',
        keywords: 'financial advisor melbourne, financial planning, SMSF, home loans, insurance, retirement planning',
        focusKeyword: 'financial advisor melbourne'
      }
    },
    {
      id: 'services',
      title: 'Services',
      path: '/services',
      status: 'published',
      lastModified: '2025-01-26',
      content: {
        heroTitle: 'Our Financial Services',
        heroSubtitle: 'Comprehensive financial solutions designed to help you build wealth, protect your assets, and secure your financial future.'
      },
      seo: {
        title: 'Financial Services Melbourne - SMSF, Home Loans, Insurance | Planet Wealth',
        description: 'Comprehensive financial services in Melbourne including SMSF setup, home loans, personal insurance, and retirement planning. Expert advice from licensed advisors.',
        keywords: 'financial services melbourne, SMSF services, home loans melbourne, personal insurance, retirement planning',
        focusKeyword: 'financial services melbourne'
      }
    }
  ],
  seo: {
    title: 'Planet Wealth Financial Advisory - Melbourne\'s Trusted Financial Advisors',
    description: 'Expert financial planning, SMSF services, home loans & insurance in Melbourne. Book your free consultation today with Planet Wealth.',
    keywords: 'financial advisor melbourne, financial planning, SMSF, home loans, insurance, retirement planning'
  },
  analytics: {
    overview: {
      totalPages: 5,
      publishedPages: 4,
      draftPages: 1,
      avgSeoScore: 85
    },
    traffic: {
      totalVisits: 12847,
      uniqueVisitors: 8234,
      pageViews: 18923,
      bounceRate: 32.5,
      avgSessionDuration: '3:24'
    },
    seoRankings: [
      { keyword: 'financial advisor melbourne', position: 3, change: '+2', volume: 1200 },
      { keyword: 'SMSF services melbourne', position: 7, change: '+1', volume: 800 },
      { keyword: 'home loans melbourne', position: 12, change: '-3', volume: 2100 },
      { keyword: 'retirement planning melbourne', position: 5, change: '0', volume: 650 }
    ],
    topPages: [
      { page: 'Homepage', visits: 5234, conversions: 47, conversionRate: '0.9%' },
      { page: 'Services', visits: 3892, conversions: 32, conversionRate: '0.8%' },
      { page: 'Success Stories', visits: 2634, conversions: 28, conversionRate: '1.1%' },
      { page: 'Contact', visits: 1087, conversions: 15, conversionRate: '1.4%' }
    ]
  }
};

export const useCMSContent = () => {
  const [content, setContent] = useState<CMSContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load content from localStorage (in production, this would be an API call)
    const savedContent = localStorage.getItem('cms_content');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent({ ...defaultContent, ...parsedContent });
      } catch (error) {
        console.error('Error parsing saved content:', error);
      }
    }
    setLoading(false);
  }, []);

  const updateContent = (section: keyof CMSContent, data: any) => {
    const newContent = { ...content, [section]: data };
    setContent(newContent);
    localStorage.setItem('cms_content', JSON.stringify(newContent));
  };

  return { content, updateContent, loading };
};

export default useCMSContent;