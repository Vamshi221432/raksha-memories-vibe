import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FloatingEmojis } from '@/components/FloatingEmojis';
import { Upload, X, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface ImageBox {
  id: number;
  image: string | null;
}
const Memories = () => {
  const navigate = useNavigate();
  const [imageBoxes, setImageBoxes] = useState<ImageBox[]>(Array.from({
    length: 9
  }, (_, i) => ({
    id: i,
    image: null
  })));
  const handleImageUpload = (boxId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const imageUrl = e.target?.result as string;
        setImageBoxes(prev => prev.map(box => box.id === boxId ? {
          ...box,
          image: imageUrl
        } : box));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageRemove = (boxId: number) => {
    setImageBoxes(prev => prev.map(box => box.id === boxId ? {
      ...box,
      image: null
    } : box));
  };
  return <div className="min-h-screen relative overflow-hidden">
      <FloatingEmojis />
      
      {/* Moving Border Effect */}
      <div className="absolute inset-2 moving-border rounded-3xl pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="text-accent animate-pulse-glow" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Precious Memories
            </h1>
            <Heart className="text-accent animate-pulse-glow" size={32} />
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Upload and cherish your beautiful Raksha Bandhan moments
          </p>
          <Button onClick={() => navigate('/')} variant="outline" className="btn-memories">
            ← Back to Welcome
          </Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {imageBoxes.map(box => <div key={box.id} className="flex justify-center mx-[100px]">
              <div className={`upload-box ${box.image ? 'has-image' : ''}`}>
                {box.image ?
            // Image Display Mode
            <div className="relative w-full h-full">
                    <img src={box.image} alt={`Memory ${box.id + 1}`} className="w-full h-full object-cover rounded-lg" />
                    <Button onClick={() => handleImageRemove(box.id)} size="sm" variant="destructive" className="absolute top-2 right-2 w-8 h-8 p-0 rounded-full opacity-80 hover:opacity-100">
                      <X size={16} />
                    </Button>
                  </div> :
            // Upload Mode
            <label htmlFor={`file-input-${box.id}`} className="w-full h-full flex flex-col items-center justify-center cursor-pointer mx-0 py-0 px-0">
                    <Upload className="text-primary mb-3" size={32} />
                    <span className="text-primary font-medium text-center px-4">
                      Add an Image
                    </span>
                    <span className="text-sm text-muted-foreground mt-2 text-center px-4">
                      Click to upload a memory
                    </span>
                    <input id={`file-input-${box.id}`} type="file" accept="image/*" className="hidden" onChange={e => handleImageUpload(box.id, e)} />
                  </label>}
              </div>
            </div>)}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-2xl">
            <span className="animate-sparkle">✨</span>
            <span className="text-accent font-semibold">Happy Raksha Bandhan!</span>
            <span className="animate-sparkle">✨</span>
          </div>
        </div>
      </div>
    </div>;
};
export default Memories;