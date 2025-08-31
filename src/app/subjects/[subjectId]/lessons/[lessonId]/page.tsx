import { subjects } from '@/data/subjects';
import LessonPage from '@/components/LessonPage';
import { notFound } from 'next/navigation';

interface LessonPageProps {
  params: Promise<{
    subjectId: string;
    lessonId: string;
  }>;
}

export async function generateStaticParams() {
  const allParams: { subjectId: string; lessonId: string }[] = [];
  
  subjects.forEach(subject => {
    subject.units.forEach(unit => {
      unit.topics.forEach(topic => {
        allParams.push({
          subjectId: subject.id,
          lessonId: topic.id
        });
      });
    });
  });
  
  return allParams;
}

export default async function Lesson({ params }: LessonPageProps) {
  const resolvedParams = await params;
  const subject = subjects.find(s => s.id === resolvedParams.subjectId);
  
  if (!subject) {
    notFound();
  }

  // Find the topic across all units
  let foundTopic = null;
  let foundUnit = null;
  
  for (const unit of subject.units) {
    const topic = unit.topics.find(t => t.id === resolvedParams.lessonId);
    if (topic) {
      foundTopic = topic;
      foundUnit = unit;
      break;
    }
  }

  if (!foundTopic || !foundUnit) {
    notFound();
  }

  // Sample lesson content - in a real app, this would come from a database
  const sampleContent = `# ${foundTopic.name}

Welcome to this lesson on ${foundTopic.name}. This is a comprehensive guide that will help you understand the fundamental concepts and applications.

## Introduction

${foundTopic.name} is an important topic in ${subject.name}. In this lesson, we will cover:

- Basic concepts and definitions

## Key Concepts

### Mathematical Foundations
Understanding the mathematical principles is crucial. For example, the quadratic formula is:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

This formula allows us to solve equations of the form $ax^2 + bx + c = 0$.

### Core Principles
- **Principle 1**: Foundation concept that builds understanding
- **Principle 2**: Advanced application of the basic concept
- **Principle 3**: Real-world implementation strategies

## Examples

### Example 1: Basic Application
Let's solve the equation $2x^2 + 5x - 3 = 0$ using the quadratic formula:

1. Identify coefficients: $a = 2$, $b = 5$, $c = -3$
2. Substitute into formula: $x = \\frac{-5 \\pm \\sqrt{25 + 24}}{4}$
3. Simplify: $x = \\frac{-5 \\pm 7}{4}$
4. Solutions: $x = \\frac{1}{2}$ or $x = -3$

### Example 2: Advanced Concept
For more complex scenarios, we might encounter expressions like:

$$\\int_{0}^{\\pi} \\sin(x) dx = 2$$

This demonstrates the relationship between trigonometric functions and calculus.

## Practice Problems

Try these problems to test your understanding:

1. **Problem 1**: Solve $x^2 - 4x + 3 = 0$
2. **Problem 2**: Find the derivative of $f(x) = x^3 + 2x^2 - x + 1$
3. **Problem 3**: Evaluate $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$

## Interactive Elements

Use the \`practice quiz\` below to test your knowledge and earn XP points!

## Summary

In this lesson, we covered the essential aspects of **${foundTopic.name}**. Key takeaways include:

- Mathematical formulation and notation
- Practical problem-solving techniques  
- Real-world applications and examples

Make sure you understand these concepts before moving on to the next topic. Complete the practice quiz to reinforce your learning and track your progress!`;

  return (
    <LessonPage
      subjectId={resolvedParams.subjectId}
      subjectName={subject.name}
      subjectColor={subject.color}
      lessonTitle={foundTopic.name}
      topicId={resolvedParams.lessonId}
      videoUrl="dQw4w9WgXcQ" // Sample YouTube video ID
      content={sampleContent}
      breadcrumb={{
        subject: subject.name,
        unit: foundUnit.name,
        topic: foundTopic.name
      }}
    />
  );
}
