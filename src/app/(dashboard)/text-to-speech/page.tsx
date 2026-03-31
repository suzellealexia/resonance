import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-view";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Text to Speech" };

function TextToSpeechPage() {
  return <TextToSpeechView />;
}

export default TextToSpeechPage;
