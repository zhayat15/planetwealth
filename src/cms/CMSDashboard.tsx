import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  Settings, 
  Users, 
  BarChart3, 
  Search,
  LogOut,
  Edit,
  Save,
  X,
  Plus,
  Eye,
  TrendingUp,
  Globe,
  Target,
  Activity
} from 'lucide-react';

interface CMSDashboardProps {
  onLogout: () => void;
}

const CMSDashboard: React.FC<CMSDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('pages');
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced content data with all pages
  const [contentData, setContentData] = useState({
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
          heroSubtitle: 'Comprehensive financial solutions designed to help you build wealth, protect your assets, and secure your financial future.',
          services: [
            {
              title: 'Financial Planning',
              description: 'Comprehensive financial strategies tailored to your unique goals, lifestyle, and circumstances.',
              features: ['Personal financial assessment', 'Goal-based planning strategies', 'Investment portfolio management']
            },
            {
              title: 'SMSF Services',
              description: 'Expert self-managed super fund setup, compliance, and ongoing management services.',
              features: ['SMSF establishment and setup', 'Compliance and administration', 'Investment strategy development']
            }
          ]
        },
        seo: {
          title: 'Financial Services Melbourne - SMSF, Home Loans, Insurance | Planet Wealth',
          description: 'Comprehensive financial services in Melbourne including SMSF setup, home loans, personal insurance, and retirement planning. Expert advice from licensed advisors.',
          keywords: 'financial services melbourne, SMSF services, home loans melbourne, personal insurance, retirement planning',
          focusKeyword: 'financial services melbourne'
        }
      },
      {
        id: 'success-stories',
        title: 'Success Stories',
        path: '/success-stories',
        status: 'published',
        lastModified: '2025-01-25',
        content: {
          heroTitle: 'Client Success Stories',
          heroSubtitle: 'Real stories from real clients who achieved their financial goals with Planet Wealth.',
          stats: {
            clients: '500+',
            fundsManaged: '$50M+',
            rating: '4.9★',
            retention: '98%'
          }
        },
        seo: {
          title: 'Client Success Stories - Planet Wealth Financial Advisory Melbourne',
          description: 'Read real success stories from Melbourne clients who achieved their financial goals with Planet Wealth. See how our expert advice transformed their finances.',
          keywords: 'financial advisor success stories, melbourne financial planning results, client testimonials, financial planning success',
          focusKeyword: 'financial advisor success stories'
        }
      },
      {
        id: 'about',
        title: 'About Us',
        path: '/about',
        status: 'draft',
        lastModified: '2025-01-24',
        content: {
          heroTitle: 'About Planet Wealth',
          heroSubtitle: 'Melbourne\'s trusted financial advisory firm, dedicated to helping families and individuals achieve their financial goals.',
          story: 'Founded with a simple mission: to make quality financial advice accessible to every Melbourne family.',
          values: ['Trust & Integrity', 'Client-Focused', 'Expert Guidance', 'Long-term Relationships']
        },
        seo: {
          title: 'About Planet Wealth - Melbourne Financial Advisors | Our Story',
          description: 'Learn about Planet Wealth, Melbourne\'s trusted financial advisory firm. Meet our team of expert advisors and discover our commitment to your financial success.',
          keywords: 'about planet wealth, melbourne financial advisors, financial advisory team, trusted financial advisors',
          focusKeyword: 'melbourne financial advisors'
        }
      },
      {
        id: 'contact',
        title: 'Contact',
        path: '/contact',
        status: 'published',
        lastModified: '2025-01-23',
        content: {
          heroTitle: 'Contact Planet Wealth',
          heroSubtitle: 'Ready to take control of your financial future? Get in touch with our expert advisors.',
          contactInfo: {
            phone: '1300 004 254',
            email: 'info@planetwealth.com.au',
            address: '921 High Street Road, Glen Waverley VIC 3150'
          }
        },
        seo: {
          title: 'Contact Planet Wealth Melbourne - Book Free Financial Consultation',
          description: 'Contact Planet Wealth for expert financial advice in Melbourne. Book your free consultation today. Call 1300 004 254 or visit our Glen Waverley office.',
          keywords: 'contact planet wealth, melbourne financial advisor contact, book consultation, financial advice melbourne',
          focusKeyword: 'melbourne financial advisor contact'
        }
      }
    ],
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
  });

  const menuItems = [
    { id: 'pages', label: 'Page Management', icon: <FileText className="w-5 h-5" /> },
    { id: 'seo', label: 'SEO Pack', icon: <Search className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics & Rankings', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const handleSave = (section: string, data: any) => {
    setContentData(prev => ({ ...prev, [section]: data }));
    setEditingItem(null);
    console.log('Saving data:', { section, data });
  };

  const handlePageSave = (pageId: string, updatedPage: any) => {
    setContentData(prev => ({
      ...prev,
      pages: prev.pages.map(page => 
        page.id === pageId 
          ? { ...page, ...updatedPage, lastModified: new Date().toISOString().split('T')[0] }
          : page
      )
    }));
    setEditingItem(null);
  };

  const getSeoScore = (seo: any) => {
    let score = 0;
    if (seo.title && seo.title.length >= 30 && seo.title.length <= 60) score += 25;
    if (seo.description && seo.description.length >= 120 && seo.description.length <= 160) score += 25;
    if (seo.keywords && seo.keywords.split(',').length >= 3) score += 25;
    if (seo.focusKeyword && seo.title.toLowerCase().includes(seo.focusKeyword.toLowerCase())) score += 25;
    return score;
  };

  const renderPageManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Page Management</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add New Page
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {contentData.pages.map((page) => (
          <div key={page.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <h3 className="text-xl font-bold text-gray-900 mr-4">{page.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  page.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {page.status}
                </span>
                <span className="ml-4 text-sm text-gray-500">
                  Last modified: {page.lastModified}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-blue-600 hover:text-blue-700 p-2">
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setEditingItem(editingItem === page.id ? null : page.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  {editingItem === page.id ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                  {editingItem === page.id ? 'Cancel' : 'Edit'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {editingItem === page.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Page Title</label>
                      <input
                        type="text"
                        defaultValue={page.content.heroTitle}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                      <textarea
                        defaultValue={page.content.heroSubtitle}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    {page.id === 'home' && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Clients</label>
                          <input
                            type="text"
                            defaultValue={page.content.heroStats?.clients}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Funds</label>
                          <input
                            type="text"
                            defaultValue={page.content.heroStats?.fundsManaged}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                          <input
                            type="text"
                            defaultValue={page.content.heroStats?.experience}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                          <input
                            type="text"
                            defaultValue={page.content.heroStats?.rating}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => handlePageSave(page.id, page)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Title</h4>
                      <p className="text-gray-600">{page.content.heroTitle}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Subtitle</h4>
                      <p className="text-gray-600">{page.content.heroSubtitle}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Path</h4>
                      <p className="text-blue-600">{page.path}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">SEO Score</h4>
                <div className="flex items-center mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getSeoScore(page.seo) >= 80 ? 'bg-green-500' : getSeoScore(page.seo) >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${getSeoScore(page.seo)}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 font-bold">{getSeoScore(page.seo)}/100</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Title Length:</span>
                    <span className={page.seo.title.length >= 30 && page.seo.title.length <= 60 ? 'text-green-600' : 'text-red-600'}>
                      {page.seo.title.length}/60
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Description:</span>
                    <span className={page.seo.description.length >= 120 && page.seo.description.length <= 160 ? 'text-green-600' : 'text-red-600'}>
                      {page.seo.description.length}/160
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Keywords:</span>
                    <span className={page.seo.keywords.split(',').length >= 3 ? 'text-green-600' : 'text-red-600'}>
                      {page.seo.keywords.split(',').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSEOPack = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Pack - All Pages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{contentData.analytics.overview.totalPages}</div>
            <div className="text-sm text-gray-600">Total Pages</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{contentData.analytics.overview.publishedPages}</div>
            <div className="text-sm text-gray-600">Published</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">{contentData.analytics.overview.draftPages}</div>
            <div className="text-sm text-gray-600">Drafts</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{contentData.analytics.overview.avgSeoScore}</div>
            <div className="text-sm text-gray-600">Avg SEO Score</div>
          </div>
        </div>

        <div className="space-y-4">
          {contentData.pages.map((page) => (
            <div key={page.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-gray-900 mr-4">{page.title}</h3>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className={`h-2 rounded-full ${getSeoScore(page.seo) >= 80 ? 'bg-green-500' : getSeoScore(page.seo) >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${getSeoScore(page.seo)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{getSeoScore(page.seo)}/100</span>
                  </div>
                </div>
                <button
                  onClick={() => setEditingItem(editingItem === `seo-${page.id}` ? null : `seo-${page.id}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  {editingItem === `seo-${page.id}` ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                  {editingItem === `seo-${page.id}` ? 'Cancel' : 'Edit SEO'}
                </button>
              </div>

              {editingItem === `seo-${page.id}` ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        SEO Title (30-60 characters)
                      </label>
                      <input
                        type="text"
                        defaultValue={page.seo.title}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        maxLength={60}
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        {page.seo.title.length}/60 characters
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description (120-160 characters)
                      </label>
                      <textarea
                        defaultValue={page.seo.description}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        maxLength={160}
                      />
                      <div className="text-sm text-gray-500 mt-1">
                        {page.seo.description.length}/160 characters
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Keywords (comma separated)
                      </label>
                      <textarea
                        defaultValue={page.seo.keywords}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Focus Keyword
                      </label>
                      <input
                        type="text"
                        defaultValue={page.seo.focusKeyword}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      onClick={() => handlePageSave(page.id, page)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save SEO Settings
                    </button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">SEO Analysis</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Title in focus keyword</span>
                        <span className={`text-sm ${page.seo.title.toLowerCase().includes(page.seo.focusKeyword?.toLowerCase() || '') ? 'text-green-600' : 'text-red-600'}`}>
                          {page.seo.title.toLowerCase().includes(page.seo.focusKeyword?.toLowerCase() || '') ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Description length</span>
                        <span className={`text-sm ${page.seo.description.length >= 120 && page.seo.description.length <= 160 ? 'text-green-600' : 'text-red-600'}`}>
                          {page.seo.description.length >= 120 && page.seo.description.length <= 160 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sufficient keywords</span>
                        <span className={`text-sm ${page.seo.keywords.split(',').length >= 3 ? 'text-green-600' : 'text-red-600'}`}>
                          {page.seo.keywords.split(',').length >= 3 ? '✓' : '✗'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-700">SEO Title:</span>
                      <p className="text-gray-600">{page.seo.title}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Meta Description:</span>
                      <p className="text-gray-600">{page.seo.description}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Focus Keyword:</span>
                      <p className="text-blue-600">{page.seo.focusKeyword}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>Keywords: {page.seo.keywords.split(',').length} total</div>
                    <div>Last updated: {page.lastModified}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics & SEO Rankings</h2>
        
        {/* Traffic Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{contentData.analytics.traffic.totalVisits.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Visits</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{contentData.analytics.traffic.uniqueVisitors.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Unique Visitors</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{contentData.analytics.traffic.pageViews.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Page Views</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">{contentData.analytics.traffic.bounceRate}%</div>
            <div className="text-sm text-gray-600">Bounce Rate</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-red-600">{contentData.analytics.traffic.avgSessionDuration}</div>
            <div className="text-sm text-gray-600">Avg Session</div>
          </div>
        </div>

        {/* SEO Rankings */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Keyword Rankings</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Keyword</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Position</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Change</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contentData.analytics.seoRankings.map((ranking, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-900">{ranking.keyword}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        ranking.position <= 3 ? 'bg-green-100 text-green-800' :
                        ranking.position <= 10 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        #{ranking.position}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-sm font-medium ${
                        ranking.change.startsWith('+') ? 'text-green-600' :
                        ranking.change.startsWith('-') ? 'text-red-600' :
                        'text-gray-600'
                      }`}>
                        {ranking.change}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">
                      {ranking.volume.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Pages Performance */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Top Pages Performance</h3>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Page</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Visits</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Conversions</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Conv. Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contentData.analytics.topPages.map((page, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{page.page}</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">{page.visits.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">{page.conversions}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        parseFloat(page.conversionRate) >= 1.0 ? 'bg-green-100 text-green-800' :
                        parseFloat(page.conversionRate) >= 0.5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {page.conversionRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">CMS Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                defaultValue="1300 004 254"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="info@planetwealth.com.au"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Monday - Friday</span>
              <input
                type="text"
                defaultValue="9:00 AM - 5:30 PM"
                className="px-3 py-1 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Saturday</span>
              <input
                type="text"
                defaultValue="9:00 AM - 2:00 PM"
                className="px-3 py-1 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Save Settings
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'pages':
        return renderPageManagement();
      case 'seo':
        return renderSEOPack();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderPageManagement();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Home className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Planet Wealth CMS</h1>
                <p className="text-sm text-gray-600">Content Management System</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-lg p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSDashboard;