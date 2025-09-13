type Props = {
  src: string;
  alt: string;
  className?: string;
};

function OptimizedImage({ src, alt, className }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy" // 🚀 tells browser to only load when visible
      className={className}
    />
  );
}

export default OptimizedImage;
