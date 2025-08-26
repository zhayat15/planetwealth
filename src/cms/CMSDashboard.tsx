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
  Plus
} from 'lucide-react';

interface CMSDashboardProps {
  onLogout: () => void;
}

const CMSDashboard: React.FC<CMSDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('content');
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock content data - in a real app, this would come from an API
  const [contentData, setContentData] = useState({
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
  });

  const menuItems = [
    { id: 'content', label: 'Content Management', icon: <FileText className="w-5 h-5" /> },
    { id: 'seo', label: 'SEO Optimization', icon: <Search className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const handleSave = (section: string, data: any) => {
    setContentData(prev => ({ ...prev, [section]: data }));
    setEditingItem(null);
    // In a real app, this would save to an API
    console.log('Saving data:', { section, data });
  };

  const renderContentManagement = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Homepage Content</h2>
          <button
            onClick={() => setEditingItem(editingItem === 'homepage' ? null : 'homepage')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            {editingItem === 'homepage' ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
            {editingItem === 'homepage' ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {editingItem === 'homepage' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
              <input
                type="text"
                value={contentData.homepage.heroTitle}
                onChange={(e) => setContentData(prev => ({
                  ...prev,
                  homepage: { ...prev.homepage, heroTitle: e.target.value }
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
              <textarea
                value={contentData.homepage.heroSubtitle}
                onChange={(e) => setContentData(prev => ({
                  ...prev,
                  homepage: { ...prev.homepage, heroSubtitle: e.target.value }
                }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Clients</label>
                <input
                  type="text"
                  value={contentData.homepage.heroStats.clients}
                  onChange={(e) => setContentData(prev => ({
                    ...prev,
                    homepage: {
                      ...prev.homepage,
                      heroStats: { ...prev.homepage.heroStats, clients: e.target.value }
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Funds Managed</label>
                <input
                  type="text"
                  value={contentData.homepage.heroStats.fundsManaged}
                  onChange={(e) => setContentData(prev => ({
                    ...prev,
                    homepage: {
                      ...prev.homepage,
                      heroStats: { ...prev.homepage.heroStats, fundsManaged: e.target.value }
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <input
                  type="text"
                  value={contentData.homepage.heroStats.experience}
                  onChange={(e) => setContentData(prev => ({
                    ...prev,
                    homepage: {
                      ...prev.homepage,
                      heroStats: { ...prev.homepage.heroStats, experience: e.target.value }
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <input
                  type="text"
                  value={contentData.homepage.heroStats.rating}
                  onChange={(e) => setContentData(prev => ({
                    ...prev,
                    homepage: {
                      ...prev.homepage,
                      heroStats: { ...prev.homepage.heroStats, rating: e.target.value }
                    }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              onClick={() => handleSave('homepage', contentData.homepage)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Hero Title</h3>
              <p className="text-gray-600">{contentData.homepage.heroTitle}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Hero Subtitle</h3>
              <p className="text-gray-600">{contentData.homepage.heroSubtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-semibold text-blue-600">{contentData.homepage.heroStats.clients}</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-semibold text-blue-600">{contentData.homepage.heroStats.fundsManaged}</div>
                <div className="text-sm text-gray-600">Funds Managed</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-semibold text-blue-600">{contentData.homepage.heroStats.experience}</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-semibold text-blue-600">{contentData.homepage.heroStats.rating}</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Services</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Service
          </button>
        </div>

        <div className="space-y-4">
          {contentData.services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                <button className="text-blue-600 hover:text-blue-700">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <div className="text-sm text-gray-500">
                Features: {service.features.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSEOOptimization = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">SEO Settings</h2>
        <button
          onClick={() => setEditingItem(editingItem === 'seo' ? null : 'seo')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          {editingItem === 'seo' ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
          {editingItem === 'seo' ? 'Cancel' : 'Edit SEO'}
        </button>
      </div>

      {editingItem === 'seo' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Page Title (60 characters max)
            </label>
            <input
              type="text"
              value={contentData.seo.title}
              onChange={(e) => setContentData(prev => ({
                ...prev,
                seo: { ...prev.seo, title: e.target.value }
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              maxLength={60}
            />
            <div className="text-sm text-gray-500 mt-1">
              {contentData.seo.title.length}/60 characters
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description (160 characters max)
            </label>
            <textarea
              value={contentData.seo.description}
              onChange={(e) => setContentData(prev => ({
                ...prev,
                seo: { ...prev.seo, description: e.target.value }
              }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              maxLength={160}
            />
            <div className="text-sm text-gray-500 mt-1">
              {contentData.seo.description.length}/160 characters
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords (comma separated)
            </label>
            <textarea
              value={contentData.seo.keywords}
              onChange={(e) => setContentData(prev => ({
                ...prev,
                seo: { ...prev.seo, keywords: e.target.value }
              }))}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="financial advisor, melbourne, financial planning"
            />
          </div>

          <button
            onClick={() => handleSave('seo', contentData.seo)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save SEO Settings
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Page Title</h3>
            <p className="text-gray-600">{contentData.seo.title}</p>
            <div className="text-sm text-gray-500">Length: {contentData.seo.title.length} characters</div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Meta Description</h3>
            <p className="text-gray-600">{contentData.seo.description}</p>
            <div className="text-sm text-gray-500">Length: {contentData.seo.description.length} characters</div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Keywords</h3>
            <p className="text-gray-600">{contentData.seo.keywords}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2,847</div>
            <div className="text-sm text-gray-600">Page Views (30 days)</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">1,234</div>
            <div className="text-sm text-gray-600">Unique Visitors</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">47</div>
            <div className="text-sm text-gray-600">Consultation Bookings</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">3.2%</div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Top Pages</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700">Homepage</span>
            <span className="text-blue-600 font-semibold">1,247 views</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700">Services</span>
            <span className="text-blue-600 font-semibold">892 views</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700">Success Stories</span>
            <span className="text-blue-600 font-semibold">634 views</span>
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
      case 'content':
        return renderContentManagement();
      case 'seo':
        return renderSEOOptimization();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderContentManagement();
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