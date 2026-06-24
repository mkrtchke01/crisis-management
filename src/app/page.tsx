import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  Gauge,
  Handshake,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { FinancialCheckup } from "@/components/financial-checkup";

const problems = [
  {
    icon: CircleDollarSign,
    title: "Кассовые разрывы",
    text: "Платежи срываются, поставщики давят, а план движения денег меняется каждый день.",
  },
  {
    icon: TrendingUp,
    title: "Падает маржа",
    text: "Выручка есть, но прибыль растворяется в скидках, закупках, логистике и хаотичных расходах.",
  },
  {
    icon: Gauge,
    title: "Нет управляемости",
    text: "Решения принимаются по ощущениям, отчеты запаздывают, ответственные зоны размыты.",
  },
  {
    icon: Handshake,
    title: "Давят обязательства",
    text: "Нужны переговоры с банками, кредиторами, арендодателями и ключевыми контрагентами.",
  },
];

const services = [
  "Экспресс-аудит финансов и обязательств",
  "План стабилизации cash flow на 30-90 дней",
  "Оптимизация затрат без разрушения ядра бизнеса",
  "Антикризисная управленческая отчетность",
  "Переговорная позиция для кредиторов и партнеров",
  "Сценарное планирование и контроль внедрения",
];

const steps = [
  {
    number: "01",
    title: "Диагностика",
    text: "Собираем факты: деньги, обязательства, юнит-экономика, продажи, команда, операционные узкие места.",
  },
  {
    number: "02",
    title: "Карта рисков",
    text: "Определяем критичные зоны, сроки реакции и действия, которые дают быстрый эффект без лишнего шума.",
  },
  {
    number: "03",
    title: "План стабилизации",
    text: "Формируем дорожную карту: cash flow, приоритеты платежей, переговоры, расходы, контрольные метрики.",
  },
  {
    number: "04",
    title: "Внедрение",
    text: "Подключаемся к регулярному управлению, помогаем команде держать ритм и корректировать решения по цифрам.",
  },
];

const cases = [
  {
    label: "Производственная компания",
    problem:
      "Просрочки по поставщикам, высокий складской остаток и кассовый разрыв на фоне сезонного падения спроса.",
    solution:
      "Собрали платежный календарь, пересобрали закупочный план, выделили маржинальные SKU и провели переговоры о переносе части обязательств.",
    result:
      "За 8 недель компания закрыла критичные просрочки, высвободила оборотные средства из склада и вернулась к еженедельному планированию cash flow.",
  },
  {
    label: "Сеть сервисных точек",
    problem:
      "Обороты росли, но прибыль снижалась: бонусы, аренда и фонд оплаты труда не были привязаны к экономике точек.",
    solution:
      "Ввели P&L по каждой точке, пересмотрели мотивацию, отделили постоянные расходы от управляемых и закрыли нерентабельные процессы.",
    result:
      "Через 3 месяца собственник увидел прибыльность по направлениям, убрал скрытые потери и получил понятный план масштабирования.",
  },
  {
    label: "B2B-поставщик",
    problem:
      "Крупные клиенты задерживали оплату, команда продаж давала скидки без контроля маржи, кредитная линия была почти выбрана.",
    solution:
      "Настроили правила коммерческих условий, матрицу дебиторской задолженности и сценарии переговоров с ключевыми клиентами.",
    result:
      "Сократили просроченную дебиторку, стабилизировали платежный календарь и вернули управляемость коммерческой политике.",
  },
];

const auditPoints = [
  "оценим ликвидность и ближайшие риски",
  "найдем быстрые точки высвобождения денег",
  "дадим список действий на ближайшие 14 дней",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f4ee] text-[#17211f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[#10211d]/88 px-4 py-3 text-white backdrop-blur-md sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#d6a568] text-sm font-bold text-[#10211d]">
              АУ
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">
              Антикризисное управление
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/76 md:flex">
            <a href="#services" className="transition hover:text-white">
              Услуги
            </a>
            <a href="#steps" className="transition hover:text-white">
              Этапы
            </a>
            <a href="#cases" className="transition hover:text-white">
              Кейсы
            </a>
            <a href="#audit" className="transition hover:text-white">
              Аудит
            </a>
          </div>
          <a
            href="#checkup"
            className="inline-flex min-h-10 items-center justify-center rounded-[8px] bg-white px-4 text-sm font-semibold text-[#10211d] transition hover:bg-[#e9f1e7]"
          >
            Чек-ап
          </a>
        </nav>
      </header>

      <section className="relative min-h-[92vh] px-4 pt-28 text-white sm:px-6 lg:px-8">
        <Image
          src="/crisis-hero.png"
          alt="Стратегическая сессия по финансовой стабилизации бизнеса"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#07110f]/58" />
        <div className="relative mx-auto flex min-h-[calc(92vh-7rem)] max-w-7xl flex-col justify-between">
          <div className="max-w-3xl py-16">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-[#e5f3e8] backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Стабилизация бизнеса в кризисной фазе
            </div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Вернем контроль над деньгами, обязательствами и решениями.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Антикризисное управление для собственников: быстрая диагностика,
              план стабилизации cash flow, переговорная позиция и сопровождение
              внедрения до первых устойчивых результатов.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#audit"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[8px] bg-[#d6a568] px-6 font-semibold text-[#10211d] transition hover:bg-[#e4bb82]"
              >
                Получить бесплатный аудит
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#cases"
                className="inline-flex min-h-14 items-center justify-center rounded-[8px] border border-white/22 px-6 font-semibold text-white transition hover:bg-white/10"
              >
                Смотреть проекты
              </a>
            </div>
          </div>

          <div className="grid gap-3 pb-8 sm:grid-cols-3">
            {[
              ["30-90 дней", "горизонт стабилизации"],
              ["14 дней", "первый план действий"],
              ["без названий", "конфиденциальные кейсы"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-[8px] border border-white/14 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-white/65">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a2713a]">
                Какие проблемы решаем
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Кризис редко начинается с одной причины. Мы разбираем систему.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#53625d] lg:justify-self-end">
              Вместо общих рекомендаций фиксируем финансовую картину,
              управленческие сбои и решения, которые можно внедрить быстро.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <article
                  key={problem.title}
                  className="rounded-[8px] border border-[#d9ddd3] bg-white p-6 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-[#2f6b4f]" />
                  <h3 className="mt-5 text-xl font-semibold">
                    {problem.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5d6965]">
                    {problem.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a2713a]">
              Услуги
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Включаемся там, где бизнесу нужен не совет, а управление.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5d6965]">
              Формат подбирается после диагностики: от точечного аудита до
              временной управленческой роли внутри регулярного контура.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex min-h-24 items-start gap-3 rounded-[8px] border border-[#d9ddd3] bg-[#f8f7f2] p-5"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2f6b4f]" />
                <p className="font-semibold leading-7">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[8px] bg-[#dbe7da] p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2f6b4f]">
              <FileCheck2 className="h-4 w-4" />
              Лид-магнит
            </div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Бесплатный аудит: коротко, по цифрам, без продажи лишнего.
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {auditPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[8px] bg-white/72 p-4 font-medium leading-7 text-[#344641]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-3 rounded-[8px] bg-white p-5 shadow-lg shadow-[#7d927c]/15">
            <input
              className="min-h-12 rounded-[8px] border border-[#cfd8ce] px-4 outline-none transition focus:border-[#2f6b4f]"
              placeholder="Имя"
              name="name"
            />
            <input
              className="min-h-12 rounded-[8px] border border-[#cfd8ce] px-4 outline-none transition focus:border-[#2f6b4f]"
              placeholder="Телефон или Telegram"
              name="contact"
            />
            <select
              className="min-h-12 rounded-[8px] border border-[#cfd8ce] px-4 outline-none transition focus:border-[#2f6b4f]"
              name="request"
              defaultValue=""
            >
              <option value="" disabled>
                Что нужно проверить?
              </option>
              <option>Деньги и платежный календарь</option>
              <option>Прибыльность и расходы</option>
              <option>Долги и обязательства</option>
              <option>Вся система управления</option>
            </select>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-[#2f6b4f] px-5 font-semibold text-white transition hover:bg-[#255a42]"
            >
              Запросить аудит
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section id="steps" className="bg-[#17211f] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d6a568]">
              Этапы работы
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Прозрачный процесс, чтобы собственник понимал, что происходит
              каждую неделю.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[8px] border border-white/12 bg-white/7 p-6"
              >
                <span className="text-sm font-semibold text-[#d6a568]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/68">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinancialCheckup />

      <section id="cases" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a2713a]">
                Кейсы / проекты
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Проекты, которые говорят сами за себя.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#5d6965]">
              Названия компаний не раскрываются: в кризисных проектах
              конфиденциальность важнее маркетингового шума.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.label}
                className="rounded-[8px] border border-[#d9ddd3] bg-white p-6 shadow-sm"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eef6ef] px-3 py-1.5 text-sm font-semibold text-[#2f6b4f]">
                  <BriefcaseBusiness className="h-4 w-4" />
                  {item.label}
                </div>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-semibold text-[#a2713a]">Проблема</h3>
                    <p className="mt-2 leading-7 text-[#5d6965]">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2f6b4f]">Решение</h3>
                    <p className="mt-2 leading-7 text-[#5d6965]">
                      {item.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#17211f]">Результат</h3>
                    <p className="mt-2 leading-7 text-[#5d6965]">
                      {item.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            [BadgeCheck, "Собственник видит реальную картину"],
            [BarChart3, "Решения опираются на финансовые метрики"],
            [Target, "Команда получает понятный план действий"],
          ].map(([Icon, text]) => (
            <div
              key={text as string}
              className="flex items-center gap-4 rounded-[8px] border border-[#d9ddd3] bg-[#f8f7f2] p-5"
            >
              <Icon className="h-7 w-7 shrink-0 text-[#2f6b4f]" />
              <p className="text-lg font-semibold">{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#10211d] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#d6a568] font-bold text-[#10211d]">
              АУ
            </div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
              Опишите ситуацию в свободной форме. Мы разберем, подходит ли вам
              аудит, сопровождение или точечная консультация.
            </p>
          </div>

          <form className="grid gap-3 rounded-[8px] border border-white/12 bg-white/8 p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="min-h-12 rounded-[8px] border border-white/14 bg-white px-4 text-[#17211f] outline-none transition focus:border-[#d6a568]"
                placeholder="Имя"
                name="name"
              />
              <input
                className="min-h-12 rounded-[8px] border border-white/14 bg-white px-4 text-[#17211f] outline-none transition focus:border-[#d6a568]"
                placeholder="Телефон или Telegram"
                name="contact"
              />
            </div>
            <textarea
              className="min-h-32 rounded-[8px] border border-white/14 bg-white px-4 py-3 text-[#17211f] outline-none transition focus:border-[#d6a568]"
              placeholder="Кратко опишите ситуацию"
              name="message"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-[#d6a568] px-5 font-semibold text-[#10211d] transition hover:bg-[#e4bb82]"
            >
              Отправить вопрос
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs leading-5 text-white/45">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        </div>
      </footer>
    </main>
  );
}
