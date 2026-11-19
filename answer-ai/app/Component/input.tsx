"use client";

import { useState } from "react";
import { generateText } from "../actions/aiActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserInput = () => {
  const [tempInput, setTempInput] = useState("");
  const [genRes, setGenRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchInput = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const prompt = tempInput.trim();

    if (!prompt || loading) return;

    setLoading(true);
    setError("");
    setGenRes("");

    try {
      const result = await generateText(prompt);
      setGenRes(result);
      setTempInput("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950">
            A
          </div>
          <span className="text-lg font-semibold tracking-tight">AnswerAI</span>
        </a>

        <span className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400">
          AI Search
        </span>
      </header>

      {/* Main content */}
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 pb-52 pt-12 sm:px-8 sm:pt-20">
        {!genRes && !loading && !error ? (
          <section className="my-auto flex flex-col items-center justify-center pb-12 text-center">
            <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-7 text-zinc-200"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4M8 11h6M11 8v6" />
              </svg>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              What do you want to know?
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
              Ask a question, explore an idea, or get help understanding
              something new.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "Explain a complex topic",
                "Help me brainstorm",
                "Teach me something new",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setTempInput(suggestion)}
                  className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3.5 py-2 text-xs text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-800 sm:text-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </section>
        ) : (
          <section className="w-full" aria-live="polite">
            {loading ? (
              <div className="flex items-center gap-3 py-8 text-sm text-zinc-400">
                <span className="size-4 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />
                Thinking through your question...
              </div>
            ) : error ? (
              <div
                role="alert"
                className="rounded-xl border border-red-900/60 bg-red-950/30 p-4 text-sm text-red-300"
              >
                {error}
              </div>
            ) : (
              <article className="space-y-6">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Your question
                  </p>
                  <p className="whitespace-pre-wrap break-words text-sm leading-7 text-zinc-200">
                    {genRes && ""}
                  </p>
                </div>

                <div className="px-1 py-2 sm:px-2">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold">
                      A
                    </div>
                    <h2 className="text-sm font-semibold text-zinc-200">
                      Answer
                    </h2>
                  </div>

                  <p className="whitespace-pre-wrap break-words text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                    {genRes}
                  </p>
                </div>
              </article>
            )}
          </section>
        )}
      </main>

      {/* Fixed search composer */}
      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-zinc-800/80 bg-zinc-950/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur-xl sm:px-8 sm:pt-5">
        <div className="mx-auto w-full max-w-3xl">
          <form onSubmit={searchInput} className="flex items-center gap-2">
            <div className="flex min-w-0 flex-1 items-center rounded-2xl border border-zinc-700 bg-zinc-900 shadow-lg shadow-black/20 transition-colors focus-within:border-zinc-500">
              <Input
                className="h-12 min-w-0 flex-1 border-0 bg-transparent px-4 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:px-5 sm:text-base"
                type="text"
                placeholder="Ask anything..."
                aria-label="Ask a question"
                autoComplete="off"
                value={tempInput}
                onChange={(e) => setTempInput(e.target.value)}
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              disabled={loading || !tempInput.trim()}
              className="h-12 shrink-0 rounded-xl bg-white px-4 font-medium text-zinc-950 hover:bg-zinc-200 disabled:opacity-40 sm:h-14 sm:px-6"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="size-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-950" />
                  <span className="hidden sm:inline">Thinking</span>
                </span>
              ) : (
                "Search"
              )}
            </Button>
          </form>

          <p className="mt-3 text-center text-[11px] text-zinc-500 sm:text-xs">
            AI can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
