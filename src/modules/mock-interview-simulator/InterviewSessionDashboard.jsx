import React, { useState } from 'react';
import QuestionCategorySelector from './QuestionCategorySelector';
import QuestionPromptPanel from './QuestionPromptPanel';
import AnswerInputRecorder from './AnswerInputRecorder';
import AIImmediateFeedback from './AIImmediateFeedback';
import InterviewTimer from './InterviewTimer';
import SessionProgressTracker from './SessionProgressTracker';
import InterviewScoreSummary from './InterviewScoreSummary';
import AIResponseExamples from './AIResponseExamples';
import SavedInterviewSessions from './SavedInterviewSessions';

export default function InterviewSessionDashboard() {
  const [currentQuestion, setCurrentQuestion] = useState('Tell me about a time you showed leadership.');
  const [userAnswer, setUserAnswer] = useState('');
  const [sessionEnded, setSessionEnded] = useState(false);
  const [progress, setProgress] = useState(1);

  const handleNextQuestion = () => {
    // Dummy logic: After 3 questions, end the session
    if (progress >= 3) {
      setSessionEnded(true);
    } else {
      setCurrentQuestion('Describe a challenge you overcame at work.');
      setUserAnswer('');
      setProgress(prev => prev + 1);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Mock Interview Simulator</h1>

      <QuestionCategorySelector />

      {!sessionEnded ? (
        <>
          <SessionProgressTracker progress={progress} total={3} />
          <QuestionPromptPanel question={currentQuestion} />
          <InterviewTimer />
          <AnswerInputRecorder answer={userAnswer} onChange={setUserAnswer} />
          <AIImmediateFeedback answer={userAnswer} />
          <AIResponseExamples question={currentQuestion} />

          <button
            onClick={handleNextQuestion}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Next Question
          </button>
        </>
      ) : (
        <InterviewScoreSummary />
      )}

      <SavedInterviewSessions />
    </div>
  );
}
