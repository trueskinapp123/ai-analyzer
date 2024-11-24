import React, { useState } from 'react';
import { Scan, Shield } from 'lucide-react';
import { ImageUpload } from './components/ImageUpload';
import { Analysis } from './components/Analysis';

function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    skinType: string;
    concerns: string[];
    recommendations: string[];
  } | null>(null);

  const handleImageUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setLoading(true);

    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        skinType: "Combination",
        concerns: [
          "Mild dehydration in the cheek area",
          "Slight hyperpigmentation",
          "T-zone oiliness"
        ],
        recommendations: [
          "Use a gentle, non-foaming cleanser",
          "Apply hyaluronic acid serum to hydrate",
          "Include niacinamide for oil control",
          "Use SPF 30+ daily for protection"
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Scan className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            trueSkin.app
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced AI-powered skin analysis for personalized skincare recommendations
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Upload Your Skin Photo
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              For best results, use a clear, well-lit photo of your face without makeup. 
              Your photo will be analyzed securely and privately.
            </p>
            <ImageUpload onImageUpload={handleImageUpload} />
          </div>

          <Analysis
            imageUrl={imageUrl}
            loading={loading}
            results={results}
          />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2024 trueSkin.app • AI-Powered Skin Analysis</p>
          <p className="mt-2">
            This is a demo application. For medical concerns, please consult a dermatologist.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;