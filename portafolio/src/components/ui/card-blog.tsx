import Image from 'next/image';
import Link from 'next/link';

interface CardBlogProps {
  href: string;
  image: string;
  title: string;
  category: string;
  ago: string;
}

const CardBlog = ({
  href,
  image,
  title,
  category,
  ago
}: CardBlogProps) => {
  return (
    <Link href={href} className='group flex flex-col md:flex-row md:items-center gap-5'>
      <div className='relative w-40 h-24 rounded-xl mb-5 overflow-hidden'>
        <Image
          src={image}
          alt='Image'
          fill
          className='object-cover rounded-xl group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className=' space-y-1'>
        <h5 className='text-sm uppercase font-semibold tracking-widest text-gray-500'>{category}</h5>
        <h3 className='text-white text-2xl group-hover:text-primary transition-colors duration-300'>
        {title}
        </h3>
        <p className='text-sm uppercase font-semibold tracking-widest text-gray-500'>{ago}</p>
      </div>
      
    </Link>
  );
};

export default CardBlog;