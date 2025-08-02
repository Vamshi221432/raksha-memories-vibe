import { useEffect, useState } from 'react';

const emojis = ['❤️', '🌟', '🎉', '😊', '💕', '🎈', '✨', '🌺'];

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  animationDelay: number;
  size: number;
}

export const FloatingEmojis = () => {
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generateEmojis = () => {
      const newEmojis: FloatingEmoji[] = [];
      for (let i = 0; i < 12; i++) {
        newEmojis.push({
          id: i,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          left: Math.random() * 100,
          animationDelay: Math.random() * 6,
          size: 20 + Math.random() * 20, // 20px to 40px
        });
      }
      setFloatingEmojis(newEmojis);
    };

    generateEmojis();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingEmojis.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float opacity-70"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDelay: `${item.animationDelay}s`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};