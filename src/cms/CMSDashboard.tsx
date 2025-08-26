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
  Activity,
  ChevronRight,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  Award,
  Filter,
  Download,
  RefreshCw
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
        views: 5234,
        conversions: 47,
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
        views: 3892,
        conversions: 32,
        content: {
          heroTitle: 'Our Financial Services',
          heroSubtitle: 'Comprehensive financial solutions designed to help you build wealth, protect your assets, and secure your financial future.',
          services: [
            {
              title: 'Financial Planning',
              description: 'Comprehensive financial strategies tailored to your unique goals, lifestyle, and circumstances.',
              features: ['Personal financial assessment', 'Goal-based planning strategies', 'Investment portfolio management']
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
        views: 2634,
        conversions: 28,
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
        status: 'published',
        lastModified: '2025-01-24',
        views: 1456,
        conversions: 18,
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
        views: 1087,
        conversions: 15,
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
      },
      {
        id: 'faq',
        title: 'FAQ',
        path: '/faq',
        status: 'published',
        lastModified: '2025-01-22',
        views: 892,
        conversions: 8,
        content: {
          heroTitle: 'Frequently Asked Questions',
          heroSubtitle: 'Find answers to common questions about our financial advisory services.'
        },
        seo: {
          title: 'FAQ - Financial Advisory Questions | Planet Wealth Melbourne',
          description: 'Get answers to frequently asked questions about financial planning, SMSF, home loans, and insurance services in Melbourne.',
          keywords: 'financial advisor FAQ, melbourne financial planning questions, SMSF questions, home loan FAQ',
          focusKeyword: 'financial advisor FAQ'
        }
      },
      {
        id: 'resources',
        title: 'Resources',
        path: '/resources',
        status: 'draft',
        lastModified: '2025-01-21',
        views: 634,
        conversions: 12,
        content: {
          heroTitle: 'Financial Resources',
          heroSubtitle: 'Access our comprehensive library of financial guides and educational content.'
        },
        seo: {
          title: 'Financial Resources & Guides - Free Downloads | Planet Wealth',
          description: 'Download free financial planning guides, calculators, and resources from Planet Wealth. Expert advice for Melbourne families and professionals.',
          keywords: 'financial resources, free financial guides, financial calculators, investment guides melbourne',
          focusKeyword: 'financial resources'
        }
      }
    ],
    analytics: {
      overview: {
        totalPages: 7,
        publishedPages: 6,
        draftPages: 1,
        avgSeoScore: 87,
        totalViews: 15829,
        totalConversions: 160,
        avgConversionRate: 1.01
      },
      traffic: {
        totalVisits: 15829,
        uniqueVisitors: 10234,
        pageViews: 23456,
        bounceRate: 28.5,
        avgSessionDuration: '4:12',
        organicTraffic: 68.2,
        directTraffic: 22.1,
        referralTraffic: 9.7
      },
      seoRankings: [
        { keyword: 'financial advisor melbourne', position: 3, change: '+2', volume: 1200, difficulty: 'High' },
        { keyword: 'SMSF services melbourne', position: 7, change: '+1', volume: 800, difficulty: 'Medium' },
        { keyword: 'home loans melbourne', position: 12, change: '-3', volume: 2100, difficulty: 'High' },
        { keyword: 'retirement planning melbourne', position: 5, change: '0', volume: 650, difficulty: 'Medium' },
        { keyword: 'financial planning melbourne', position: 8, change: '+4', volume: 950, difficulty: 'High' },
        { keyword: 'investment advice melbourne', position: 15, change: '+2', volume: 420, difficulty: 'Medium' }
      ],
      topPages: [
        { page: 'Homepage', visits: 5234, conversions: 47, conversionRate: '0.9%', bounceRate: '25.3%' },
        { page: 'Services', visits: 3892, conversions: 32, conversionRate: '0.8%', bounceRate: '31.2%' },
        { page: 'Success Stories', visits: 2634, conversions: 28, conversionRate: '1.1%', bounceRate: '22.8%' },
        { page: 'About', visits: 1456, conversions: 18, conversionRate: '1.2%', bounceRate: '35.6%' },
        { page: 'Contact', visits: 1087, conversions: 15, conversionRate: '1.4%', bounceRate: '18.9%' }
      ]
    }
  });

  const menuItems = [
    { 
      id: 'overview', 
      label: 'Dashboard Overview', 
      icon: <Home className="w-5 h-5" />,
      color: 'bg-blue-500'
    },
    { 
      id: 'pages', 
      label: 'Page Management', 
      icon: <FileText className="w-5 h-5" />,
      color: 'bg-green-500'
    },
    { 
      id: 'seo', 
      label: 'SEO Pack', 
      icon: <Search className="w-5 h-5" />,
      color: 'bg-purple-500'
    },
    { 
      id: 'analytics', 
      label: 'Analytics & Rankings', 
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'bg-orange-500'
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <Settings className="w-5 h-5" />,
      color: 'bg-gray-500'
    }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 border-green-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
            <p className="text-blue-100 text-lg">Here's what's happening with your Planet Wealth website today.</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">87%</div>
              <div className="text-sm text-blue-100">Avg SEO Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Pages</p>
              <p className="text-3xl font-bold text-gray-900">{contentData.analytics.overview.totalPages}</p>
              <p className="text-green-600 text-sm font-medium mt-1">
                <span className="inline-flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {contentData.analytics.overview.publishedPages} Published
                </span>
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Views</p>
              <p className="text-3xl font-bold text-gray-900">{contentData.analytics.overview.totalViews.toLocaleString()}</p>
              <p className="text-green-600 text-sm font-medium mt-1">
                <span className="inline-flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5% this month
                </span>
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Conversions</p>
              <p className="text-3xl font-bold text-gray-900">{contentData.analytics.overview.totalConversions}</p>
              <p className="text-green-600 text-sm font-medium mt-1">
                <span className="inline-flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  {contentData.analytics.overview.avgConversionRate}% avg rate
                </span>
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">SEO Health</p>
              <p className="text-3xl font-bold text-gray-900">{contentData.analytics.overview.avgSeoScore}%</p>
              <p className="text-green-600 text-sm font-medium mt-1">
                <span className="inline-flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Excellent
                </span>
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Search className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-600" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {contentData.pages.slice(0, 4).map((page) => (
              <div key={page.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">{page.title}</p>
                    <p className="text-sm text-gray-600">Updated {page.lastModified}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(page.status)}`}>
                  {page.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-purple-600" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setActiveTab('pages')}
              className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left"
            >
              <FileText className="w-6 h-6 text-blue-600 mb-2" />
              <p className="font-medium text-gray-900">Edit Pages</p>
              <p className="text-sm text-gray-600">Manage content</p>
            </button>
            <button 
              onClick={() => setActiveTab('seo')}
              className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left"
            >
              <Search className="w-6 h-6 text-purple-600 mb-2" />
              <p className="font-medium text-gray-900">SEO Pack</p>
              <p className="text-sm text-gray-600">Optimize rankings</p>
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left"
            >
              <BarChart3 className="w-6 h-6 text-green-600 mb-2" />
              <p className="font-medium text-gray-900">Analytics</p>
              <p className="text-sm text-gray-600">View reports</p>
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left"
            >
              <Settings className="w-6 h-6 text-orange-600 mb-2" />
              <p className="font-medium text-gray-900">Settings</p>
              <p className="text-sm text-gray-600">Configure site</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPageManagement = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Page Management</h2>
          <p className="text-gray-600 mt-1">Manage all your website pages and content</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Page
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {contentData.pages
          .filter(page => page.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((page) => (
          <div key={page.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{page.title}</h3>
                    <p className="text-gray-600">{page.path}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(page.status)}`}>
                    {page.status}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingItem(editingItem === page.id ? null : page.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                    >
                      {editingItem === page.id ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                      {editingItem === page.id ? 'Cancel' : 'Edit'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Page Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{page.views.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Views</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{page.conversions}</div>
                  <div className="text-sm text-gray-600">Conversions</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{getSeoScore(page.seo)}%</div>
                  <div className="text-sm text-gray-600">SEO Score</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{((page.conversions / page.views) * 100).toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Conv. Rate</div>
                </div>
              </div>

              {editingItem === page.id ? (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Page Title</label>
                        <input
                          type="text"
                          defaultValue={page.content.heroTitle}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                        <textarea
                          defaultValue={page.content.heroSubtitle}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      {page.id === 'home' && (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Clients</label>
                            <input
                              type="text"
                              defaultValue={page.content.heroStats?.clients}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Funds</label>
                            <input
                              type="text"
                              defaultValue={page.content.heroStats?.fundsManaged}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-gray-900 mb-3">Page Settings</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                          </select>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          Last modified: {page.lastModified}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => handlePageSave(page.id, page)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Title</h4>
                    <p className="text-gray-600">{page.content.heroTitle}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Subtitle</h4>
                    <p className="text-gray-600 line-clamp-2">{page.content.heroSubtitle}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Last modified: {page.lastModified}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSEOPack = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">SEO Pack</h2>
          <p className="text-gray-600 mt-1">Optimize your website for search engines</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* SEO Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">{contentData.analytics.overview.avgSeoScore}%</div>
              <div className="text-green-100">Average SEO Score</div>
            </div>
            <Award className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{contentData.analytics.overview.publishedPages}</div>
              <div className="text-gray-600">Optimized Pages</div>
            </div>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-gray-600">Keywords Tracked</div>
            </div>
            <Target className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">68.2%</div>
              <div className="text-gray-600">Organic Traffic</div>
            </div>
            <TrendingUp className="w-6 h-6 text-purple-500" />
          </div>
        </div>
      </div>

      {/* SEO Pages */}
      <div className="space-y-4">
        {contentData.pages.map((page) => (
          <div key={page.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{page.title}</h3>
                  <p className="text-gray-600 text-sm">{page.path}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getSeoScore(page.seo) >= 80 ? 'text-green-600' : getSeoScore(page.seo) >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {getSeoScore(page.seo)}%
                  </div>
                  <div className="text-xs text-gray-500">SEO Score</div>
                </div>
                <button
                  onClick={() => setEditingItem(editingItem === `seo-${page.id}` ? null : `seo-${page.id}`)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                >
                  {editingItem === `seo-${page.id}` ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                  {editingItem === `seo-${page.id}` ? 'Cancel' : 'Optimize'}
                </button>
              </div>
            </div>

            {editingItem === `seo-${page.id}` ? (
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        SEO Title <span className="text-gray-500">(30-60 characters)</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={page.seo.title}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        maxLength={60}
                      />
                      <div className={`text-sm mt-1 ${page.seo.title.length >= 30 && page.seo.title.length <= 60 ? 'text-green-600' : 'text-red-600'}`}>
                        {page.seo.title.length}/60 characters
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description <span className="text-gray-500">(120-160 characters)</span>
                      </label>
                      <textarea
                        defaultValue={page.seo.description}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        maxLength={160}
                      />
                      <div className={`text-sm mt-1 ${page.seo.description.length >= 120 && page.seo.description.length <= 160 ? 'text-green-600' : 'text-red-600'}`}>
                        {page.seo.description.length}/160 characters
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Focus Keyword</label>
                      <input
                        type="text"
                        defaultValue={page.seo.focusKeyword}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      SEO Analysis
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Title length optimal</span>
                        <span className={`text-sm ${page.seo.title.length >= 30 && page.seo.title.length <= 60 ? 'text-green-600' : 'text-red-600'}`}>
                          {page.seo.title.length >= 30 && page.seo.title.length <= 60 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Description length optimal</span>
                        <span className={`text-sm ${page.seo.description.length >= 120 && page.seo.description.length <= 160 ? 'text-green-600' : 'text-red-600'}`}>
                          {page.seo.description.length >= 120 && page.seo.description.length <= 160 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Focus keyword in title</span>
                        <span className={`text-sm ${page.seo.title.toLowerCase().includes(page.seo.focusKeyword?.toLowerCase() || '') ? 'text-green-600' : 'text-red-600'}`}>
                          {page.seo.title.toLowerCase().includes(page.seo.focusKeyword?.toLowerCase() || '') ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Sufficient keywords</span>
                        <span className={`text-sm ${page.seo.keywords.split(',').length >= 3 ? 'text-green-600' : 'text-red-600'}`}>
                          {page.seo.keywords.split(',').length >= 3 ? '✓' : '✗'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => handlePageSave(page.id, page)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save SEO Settings
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">SEO Title:</span>
                    <p className="text-gray-900">{page.seo.title}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Meta Description:</span>
                    <p className="text-gray-600 text-sm">{page.seo.description}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Focus Keyword:</span>
                    <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">{page.seo.focusKeyword}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Quick Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Keywords:</span>
                      <span className="font-medium">{page.seo.keywords.split(',').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last updated:</span>
                      <span className="font-medium">{page.lastModified}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(page.status)}`}>
                        {page.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Analytics & Rankings</h2>
          <p className="text-gray-600 mt-1">Track your website performance and SEO rankings</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Traffic Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">{contentData.analytics.traffic.totalVisits.toLocaleString()}</div>
              <div className="text-blue-100">Total Visits</div>
            </div>
            <Users className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{contentData.analytics.traffic.uniqueVisitors.toLocaleString()}</div>
              <div className="text-gray-600">Unique Visitors</div>
            </div>
            <Eye className="w-6 h-6 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{contentData.analytics.traffic.pageViews.toLocaleString()}</div>
              <div className="text-gray-600">Page Views</div>
            </div>
            <FileText className="w-6 h-6 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{contentData.analytics.traffic.bounceRate}%</div>
              <div className="text-gray-600">Bounce Rate</div>
            </div>
            <Activity className="w-6 h-6 text-orange-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900">{contentData.analytics.traffic.avgSessionDuration}</div>
              <div className="text-gray-600">Avg Session</div>
            </div>
            <Clock className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </div>

      {/* Keyword Rankings */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            Keyword Rankings
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Keyword</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Position</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Change</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Volume</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contentData.analytics.seoRankings.map((ranking, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{ranking.keyword}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      ranking.position <= 3 ? 'bg-green-100 text-green-800' :
                      ranking.position <= 10 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      #{ranking.position}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center text-sm font-medium ${
                      ranking.change.startsWith('+') ? 'text-green-600' :
                      ranking.change.startsWith('-') ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {ranking.change.startsWith('+') && <TrendingUp className="w-4 h-4 mr-1" />}
                      {ranking.change.startsWith('-') && <TrendingUp className="w-4 h-4 mr-1 rotate-180" />}
                      {ranking.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {ranking.volume.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      ranking.difficulty === 'High' ? 'bg-red-100 text-red-800' :
                      ranking.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {ranking.difficulty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Pages Performance */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
            Top Pages Performance
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Page</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Visits</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Conversions</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Conv. Rate</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Bounce Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contentData.analytics.topPages.map((page, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{page.page}</div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {page.visits.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {page.conversions}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      parseFloat(page.conversionRate) >= 1.0 ? 'bg-green-100 text-green-800' :
                      parseFloat(page.conversionRate) >= 0.5 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {page.conversionRate}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {page.bounceRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600 mt-1">Configure your website settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="w-5 h-5 mr-2 text-blue-600" />
            General Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website Title</label>
              <input
                type="text"
                defaultValue="Planet Wealth Financial Advisory"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website Description</label>
              <textarea
                defaultValue="Melbourne's trusted financial advisory firm"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>English (Australia)</option>
                <option>English (US)</option>
                <option>English (UK)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-600" />
            Contact Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                defaultValue="1300 004 254"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                defaultValue="info@planetwealth.com.au"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Office Address</label>
              <textarea
                defaultValue="921 High Street Road, Glen Waverley VIC 3150"
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-purple-600" />
          Business Hours
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Monday - Friday</span>
              <input
                type="text"
                defaultValue="9:00 AM - 5:30 PM"
                className="px-3 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Saturday</span>
              <input
                type="text"
                defaultValue="9:00 AM - 2:00 PM"
                className="px-3 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Sunday</span>
              <input
                type="text"
                defaultValue="Closed"
                className="px-3 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Additional Notes</h4>
            <textarea
              placeholder="Evening appointments available by request..."
              rows={4}
              className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
          <Save className="w-5 h-5 mr-2" />
          Save All Settings
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'pages':
        return renderPageManagement();
      case 'seo':
        return renderSEOPack();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Planet Wealth CMS</h1>
                <p className="text-sm text-gray-600">Content Management System</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <div className={`p-1 rounded-lg mr-3 ${activeTab === item.id ? 'bg-white bg-opacity-20' : item.color}`}>
                        <div className={activeTab === item.id ? 'text-white' : 'text-white'}>
                          {item.icon}
                        </div>
                      </div>
                      <span className="font-medium">{item.label}</span>
                      {activeTab === item.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSDashboard;