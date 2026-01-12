"use client";

import { useState, useEffect } from 'react';
import { Heart, ThumbsDown } from 'lucide-react';

interface BlogReactionsProps {
  postId: string;
  initialLikes: number;
  initialDislikes: number;
}

export default function BlogReactions({ postId, initialLikes, initialDislikes }: BlogReactionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load user's previous reaction from localStorage
  useEffect(() => {
    const savedReaction = localStorage.getItem(`blog-reaction-${postId}`);
    if (savedReaction === 'like' || savedReaction === 'dislike') {
      setUserReaction(savedReaction);
    }
  }, [postId]);

  const handleReaction = async (type: 'like' | 'dislike') => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let newLikes = likes;
      let newDislikes = dislikes;
      let newUserReaction: 'like' | 'dislike' | null = null;

      if (userReaction === type) {
        // User is removing their reaction
        if (type === 'like') {
          newLikes = likes - 1;
        } else {
          newDislikes = dislikes - 1;
        }
        newUserReaction = null;
      } else {
        // User is adding or changing their reaction
        if (userReaction === 'like') {
          newLikes = likes - 1;
        } else if (userReaction === 'dislike') {
          newDislikes = dislikes - 1;
        }

        if (type === 'like') {
          newLikes = newLikes + 1;
        } else {
          newDislikes = newDislikes + 1;
        }
        newUserReaction = type;
      }

      setLikes(newLikes);
      setDislikes(newDislikes);
      setUserReaction(newUserReaction);

      // Save to localStorage
      if (newUserReaction) {
        localStorage.setItem(`blog-reaction-${postId}`, newUserReaction);
      } else {
        localStorage.removeItem(`blog-reaction-${postId}`);
      }

      // In a real app, you would make an API call here
      // await fetch(`/api/blogs/${postId}/reactions`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ type: newUserReaction })
      // });

    } catch (error) {
      console.error('Failed to update reaction:', error);
      // Revert changes on error
      setLikes(likes);
      setDislikes(dislikes);
      setUserReaction(userReaction);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-6 bg-card border border-border rounded-lg">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-muted-foreground">
          Did you find this helpful?
        </span>
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleReaction('like')}
          disabled={isLoading}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-all duration-200 ${
            userReaction === 'like'
              ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
              : 'bg-background border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <Heart 
            className={`w-4 h-4 ${
              userReaction === 'like' ? 'fill-current' : ''
            }`} 
          />
          <span className="text-sm font-medium">{likes}</span>
        </button>

        <button
          onClick={() => handleReaction('dislike')}
          disabled={isLoading}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-all duration-200 ${
            userReaction === 'dislike'
              ? 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-900/20 dark:border-gray-800 dark:text-gray-400'
              : 'bg-background border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <ThumbsDown 
            className={`w-4 h-4 ${
              userReaction === 'dislike' ? 'fill-current' : ''
            }`} 
          />
          <span className="text-sm font-medium">{dislikes}</span>
        </button>
      </div>
    </div>
  );
}