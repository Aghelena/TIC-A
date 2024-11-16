interface SkeletonProps {
    className?: string;
}

export const Skeleton = ({ className = "" }: SkeletonProps) => {
    return <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>;
};
