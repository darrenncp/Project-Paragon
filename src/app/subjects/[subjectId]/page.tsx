import { subjects } from '@/data/subjects';
import UnitCard from '@/components/UnitCard';
import { notFound } from 'next/navigation';

interface SubjectPageProps {
  params: Promise<{
    subjectId: string;
  }>;
}

export async function generateStaticParams() {
  return subjects.map(subject => ({
    subjectId: subject.id
  }));
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const resolvedParams = await params;
  const subject = subjects.find(s => s.id === resolvedParams.subjectId);
  
  if (!subject) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div 
          className="rounded-3xl p-12 mb-8 shadow-2xl"
          style={{ backgroundColor: subject.color }}
        >
          <h1 className="text-7xl font-bold text-black font-heading text-center">
            {subject.name}
          </h1>
          {subject.description && (
            <p className="text-xl text-black/80 mt-4 text-center max-w-3xl mx-auto">
              {subject.description}
            </p>
          )}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="space-y-8">
          {subject.units.map((unit) => (
            <UnitCard 
              key={unit.id} 
              unit={unit} 
              subjectId={subject.id}
              subjectColor={subject.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
