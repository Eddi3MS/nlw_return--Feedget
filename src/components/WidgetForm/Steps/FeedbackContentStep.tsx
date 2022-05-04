import { ArrowLeft, Camera } from "phosphor-react";
import React, { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
  onFeedbackSent: () => void;
}
const FeedbackContentStep = ({
  feedbackType,
  handleRestartFeedback,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleComment = (e: any) => {
    setComment(e.target.value);
  };

  const handleFeedback = () => {
    console.log("comentário :", comment, "Screenshot :", screenshot);
    onFeedbackSent();
  };

  return (
    <>
      <header className="pb-3">
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 "
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex gap-2 items-center">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <form>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm 
          placeholder-zinc-400 text-zinc-100 border-zinc-600 
          focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 resize-none
          bg-transparent rounded-md focus:outline-none scrollbar scrollbar-thumb-zinc-700"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={handleComment}
        />
      </form>

      <footer className="flex gap-2 mt-2 mb-2 w-full">
        <ScreenshotButton
          onScreenshotTook={setScreenshot}
          screenshot={screenshot}
        />
        <button
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent 
          flex-1 flex justify-center items-center text-sm hover:bg-brand-300
          focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors
          disabled:opacity-50 disabled:hover:bg-brand-500"
          onClick={handleFeedback}
          disabled={comment.trim().length === 0}
        >
          Enviar Feedback
        </button>
      </footer>
    </>
  );
};

export default FeedbackContentStep;
