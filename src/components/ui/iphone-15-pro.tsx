import React from 'react';
import { cn } from '@/lib/utils';

interface IPhone15ProProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
}

export const IPhone15Pro: React.FC<IPhone15ProProps> = ({
  children,
  className,
  width = 433,
  height = 882,
  src,
  videoSrc,
  ...props
}) => {
  return (
    <div
      className={cn('relative mx-auto', className)}
      style={{ width, height }}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 433 882"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <clipPath id="screen-clip">
            <path d="M45 158C45 136.909 62.909 119 84 119H349C370.091 119 388 136.909 388 158V724C388 745.091 370.091 763 349 763H84C62.909 763 45 745.091 45 724V158Z" />
          </clipPath>
        </defs>
        
        {/* Phone Body */}
        <path
          d="M2 73C2 32.683 34.683 0 75 0H358C398.317 0 431 32.683 431 73V809C431 849.317 398.317 882 358 882H75C34.683 882 2 849.317 2 809V73Z"
          className="fill-neutral-900 dark:fill-neutral-800"
        />
        
        {/* Screen Bezel */}
        <path
          d="M45 158C45 136.909 62.909 119 84 119H349C370.091 119 388 136.909 388 158V724C388 745.091 370.091 763 349 763H84C62.909 763 45 745.091 45 724V158Z"
          className="fill-black"
        />
        
        {/* Dynamic Island */}
        <ellipse
          cx="216.5"
          cy="142"
          rx="56"
          ry="18"
          className="fill-black"
        />
        
        {/* Volume Buttons */}
        <rect
          x="0"
          y="191"
          width="4"
          height="32"
          rx="2"
          className="fill-neutral-700 dark:fill-neutral-600"
        />
        <rect
          x="0"
          y="235"
          width="4"
          height="62"
          rx="2"
          className="fill-neutral-700 dark:fill-neutral-600"
        />
        
        {/* Power Button */}
        <rect
          x="429"
          y="203"
          width="4"
          height="78"
          rx="2"
          className="fill-neutral-700 dark:fill-neutral-600"
        />
      </svg>
      
      {/* Screen Content */}
      <div
        className="absolute"
        style={{
          top: '13.5%',
          left: '10.4%',
          width: '79.2%',
          height: '68.5%',
        }}
      >
        <div className="w-full h-full overflow-hidden rounded-[22px] bg-white">
          {src && (
            <img
              src={src}
              alt="iPhone screen content"
              className="w-full h-full object-cover"
            />
          )}
          {videoSrc && (
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};