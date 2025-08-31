import { subjects } from '@/data/subjects';
import SubjectCard from '@/components/SubjectCard';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-white mb-12 font-heading">
          All Courses
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
}
