import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
    return (
        <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
            {children}
        </div>
    );
};

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export const CardHeader = ({ children, className = "" }: CardHeaderProps) => {
    return <div className={`mb-4 ${className}`}>{children}</div>;
};

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export const CardTitle = ({ children, className = "" }: CardTitleProps) => {
    return <h2 className={`text-lg  font-semibold ${className}`}>{children}</h2>;
};

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export const CardContent = ({ children, className = "" }: CardContentProps) => {
    return <div className={className}>{children}</div>;
};
