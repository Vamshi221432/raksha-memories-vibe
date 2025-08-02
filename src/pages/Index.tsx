// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from '@/components/ui/button';
import { FloatingEmojis } from '@/components/FloatingEmojis';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingEmojis />
      
      {/* Moving Border Effect */}
      <div className="absolute inset-4 moving-border rounded-3xl pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Greeting */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="text-accent animate-sparkle" size={40} />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Raksha Bandhan
              </h1>
              <Sparkles className="text-accent animate-sparkle" size={40} />
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="text-primary animate-pulse-glow" size={24} />
              <p className="text-xl md:text-2xl text-foreground font-medium">
                A celebration of love, protection, and precious bonds
              </p>
              <Heart className="text-primary animate-pulse-glow" size={24} />
            </div>
          </div>

          {/* Decorative Text */}
          <div className="mb-12 space-y-4">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Today we celebrate the beautiful bond between siblings, filled with love, care, and countless cherished memories.
            </p>
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-accent">
              <span>🎉</span>
              <span>Sister's love, Brother's protection</span>
              <span>🎉</span>
            </div>
          </div>

          {/* Main Action Button */}
          <div className="space-y-6">
            <Button 
              onClick={() => navigate('/memories')}
              className="btn-festive text-xl px-12 py-6 shadow-2xl"
            >
              <Heart className="mr-3" size={24} />
              Let's See Our Memories
              <Sparkles className="ml-3" size={24} />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Upload and cherish your beautiful Raksha Bandhan moments
            </p>
          </div>

          {/* Decorative Bottom Elements */}
          <div className="mt-16 space-y-4">
            <div className="flex items-center justify-center gap-4 text-3xl">
              <span className="animate-bounce">🌟</span>
              <span className="animate-pulse">❤️</span>
              <span className="animate-bounce">🌟</span>
            </div>
            <p className="text-accent font-semibold text-lg">
              Happy Raksha Bandhan 2024!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
