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
  services: Array<{
    id: number;
    title: string;
    description: string;
    features: string[];
  }>;
  seo: {
    title: string;
    description: string;
    keywords: string;
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
  services: [
    {
      id: 1,
      title: 'Financial Planning',
      description: 'Comprehensive financial strategies tailored to your goals and lifestyle.',
      features: ['Personal financial assessment', 'Goal-based planning strategies', 'Investment portfolio management']
    },
    {
      id: 2,
      title: 'SMSF Services',
      description: 'Expert self-managed super fund setup, compliance and ongoing management.',
      features: ['SMSF establishment and setup', 'Compliance and administration', 'Investment strategy development']
    }
  ],
  seo: {
    title: 'Planet Wealth Financial Advisory - Melbourne\'s Trusted Financial Advisors',
    description: 'Expert financial planning, SMSF services, home loans & insurance in Melbourne. Book your free consultation today with Planet Wealth.',
    keywords: 'financial advisor melbourne, financial planning, SMSF, home loans, insurance, retirement planning'
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