export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      {/* Back button skeleton */}
      <div className="mb-8">
        <div className="h-4 bg-muted rounded w-24"></div>
      </div>

      {/* Header skeleton */}
      <div className="space-y-6 mb-12">
        {/* Title */}
        <div className="space-y-3">
          <div className="h-12 bg-muted rounded w-3/4"></div>
          <div className="h-12 bg-muted rounded w-1/2"></div>
        </div>
        
        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-6 bg-muted rounded w-full"></div>
          <div className="h-6 bg-muted rounded w-2/3"></div>
        </div>

        {/* Meta info */}
        <div className="flex space-x-6">
          <div className="h-4 bg-muted rounded w-20"></div>
          <div className="h-4 bg-muted rounded w-24"></div>
          <div className="h-4 bg-muted rounded w-16"></div>
        </div>

        {/* Tags */}
        <div className="flex space-x-2">
          <div className="h-6 bg-muted rounded w-16"></div>
          <div className="h-6 bg-muted rounded w-20"></div>
          <div className="h-6 bg-muted rounded w-18"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-4 mb-12">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
        
        {/* Code block skeleton */}
        <div className="h-32 bg-muted rounded-lg"></div>
        
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
      </div>

      {/* Reactions skeleton */}
      <div className="h-16 bg-muted rounded-lg mb-12"></div>

      {/* Footer skeleton */}
      <div className="border-t border-border pt-8">
        <div className="text-center">
          <div className="h-12 bg-muted rounded w-40 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}