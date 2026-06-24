"use client";

import { ArrowRight, CheckCircle2, ClipboardCheck } from "lucide-react";
import { useMemo, useState } from "react";

const questions = [
  {
    title: "Что сейчас сильнее всего давит на бизнес?",
    options: [
      "Кассовые разрывы и просрочки",
      "Падение продаж и маржинальности",
      "Конфликты с кредиторами или партнерами",
      "Нет прозрачной картины по финансам",
    ],
  },
  {
    title: "На какой срок хватает денежных резервов?",
    options: ["Меньше 2 недель", "До 1 месяца", "1-3 месяца", "Больше 3 месяцев"],
  },
  {
    title: "Что уже пробовали делать?",
    options: [
      "Сокращали расходы",
      "Переговаривались с банками",
      "Меняли продажи или цены",
      "Пока нет системного плана",
    ],
  },
];

export function FinancialCheckup() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [contactsVisible, setContactsVisible] = useState(false);

  const progress = useMemo(
    () => Math.round(((step + (contactsVisible ? 1 : 0)) / questions.length) * 100),
    [contactsVisible, step],
  );

  const current = questions[step];

  function selectAnswer(answer: string) {
    const nextAnswers = [...answers.slice(0, step), answer];
    setAnswers(nextAnswers);

    if (step === questions.length - 1) {
      setContactsVisible(true);
      return;
    }

    setStep(step + 1);
  }

  return (
    <section
      id="checkup"
      className="bg-[#10211d] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-[#d7eee0]">
            <ClipboardCheck className="h-4 w-4" />
            Финансовый чек-ап
          </div>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            3 минуты, чтобы понять критичность ситуации и следующий шаг.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
            Квиз помогает быстро квалифицировать запрос: где риск, сколько
            времени есть на маневр и какой формат аудита нужен собственнику.
          </p>
        </div>

        <div className="rounded-[8px] border border-white/12 bg-[#f6f4ee] p-5 text-[#17211f] shadow-2xl shadow-black/25 sm:p-7">
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-sm text-[#60716b]">
              <span>Готовность диагностики</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#dde3d9]">
              <div
                className="h-full rounded-full bg-[#2f6b4f] transition-all duration-300"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>

          {!contactsVisible ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a2713a]">
                Вопрос {step + 1} из {questions.length}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{current.title}</h3>
              <div className="mt-6 grid gap-3">
                {current.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(option)}
                    className="group flex min-h-14 items-center justify-between rounded-[8px] border border-[#cfd8ce] bg-white px-4 py-3 text-left font-medium transition hover:border-[#2f6b4f] hover:bg-[#eef6ef]"
                  >
                    <span>{option}</span>
                    <ArrowRight className="h-4 w-4 text-[#2f6b4f] opacity-0 transition group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <form className="grid gap-4">
              <div className="flex items-start gap-3 rounded-[8px] bg-[#e8f3eb] p-4 text-[#214335]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">
                    Риск-профиль собран
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#496058]">
                    Оставьте контакты, и мы вернемся с форматом бесплатного
                    аудита и первичными зонами внимания.
                  </p>
                </div>
              </div>
              <input
                className="min-h-12 rounded-[8px] border border-[#cfd8ce] bg-white px-4 outline-none transition focus:border-[#2f6b4f]"
                placeholder="Имя"
                name="name"
              />
              <input
                className="min-h-12 rounded-[8px] border border-[#cfd8ce] bg-white px-4 outline-none transition focus:border-[#2f6b4f]"
                placeholder="Телефон или Telegram"
                name="contact"
              />
              <textarea
                className="min-h-24 rounded-[8px] border border-[#cfd8ce] bg-white px-4 py-3 outline-none transition focus:border-[#2f6b4f]"
                placeholder={`Ответы: ${answers.join(" / ")}`}
                name="summary"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-[#2f6b4f] px-5 font-semibold text-white transition hover:bg-[#255a42]"
              >
                Получить чек-ап
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
