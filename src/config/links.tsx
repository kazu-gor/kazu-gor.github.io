import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiImageAlt } from 'react-icons/bi';
import { FiTag, FiWind } from 'react-icons/fi';
import { GiHotMeal } from 'react-icons/gi';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  // { name: 'tags', href: '/tags', icon: <FiTag /> },
  // { name: 'about', href: '/about', icon: <AiOutlineInfoCircle /> },
  { name: 'sauna', href: '/saunas', icon: <FiWind /> },
  { name: 'meshi', href: '/meshis', icon: <GiHotMeal /> },
  { name: 'DALL-E', href: '/dalle', icon: <BiImageAlt /> },
];
