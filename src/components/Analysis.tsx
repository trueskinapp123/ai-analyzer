import React from 'react';
import { AlertCircle } from 'lucide-react';
import { ProductRecommendation } from './ProductRecommendation';

interface AnalysisProps {
  imageUrl: string | null;
  loading: boolean;
  results: AnalysisResults | null;
}

interface AnalysisResults {
  skinType: string;
  concerns: string[];
  recommendations: string[];
}

export function Analysis({ imageUrl, loading, results }: AnalysisProps) {
  if (!imageUrl) return null;

  return (
    <div className="w-full max-w-4xl mt-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <h3 className="text-lg font-semibold mb-4">Uploaded Image</h3>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={imageUrl}
                alt="Uploaded skin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 p-6 bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>
            
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : results ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Skin Type</h4>
                  <p className="text-lg font-medium text-gray-900">{results.skinType}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Key Concerns</h4>
                  <ul className="mt-2 space-y-2">
                    {results.concerns.map((concern, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {concern}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Recommendations</h4>
                  <ul className="mt-2 space-y-3">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm mr-2">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                <p className="text-sm text-yellow-700">
                  Analysis in progress. Please wait while we process your image.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {results && !loading && (
        <ProductRecommendation skinType={results.skinType} />
      )}
    </div>
  );
}