import HeroSection from '@/components/HeroSection';
import FeaturedSubjects from '@/components/FeaturedSubjects';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturedSubjects />
    </div>
  );
}
