export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div className="text-center space-y-4">
        <div className="h-12 bg-muted rounded w-32 mx-auto"></div>
        <div className="space-y-2">
          <div className="h-6 bg-muted rounded w-96 mx-auto"></div>
          <div className="h-6 bg-muted rounded w-80 mx-auto"></div>
        </div>
      </div>

      {/* Blog cards skeleton */}
      <div className="grid gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="space-y-4">
              {/* Title and excerpt */}
              <div className="space-y-2">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="space-y-1">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex space-x-2">
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-20"></div>
                <div className="h-6 bg-muted rounded w-18"></div>
              </div>

              {/* Meta info */}
              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <div className="h-4 bg-muted rounded w-20"></div>
                  <div className="h-4 bg-muted rounded w-24"></div>
                  <div className="h-4 bg-muted rounded w-16"></div>
                </div>
                <div className="flex space-x-3">
                  <div className="h-4 bg-muted rounded w-8"></div>
                  <div className="h-4 bg-muted rounded w-8"></div>
                </div>
              </div>

              {/* Read more */}
              <div className="pt-2">
                <div className="h-4 bg-muted rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}