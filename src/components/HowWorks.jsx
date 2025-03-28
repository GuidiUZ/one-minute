import Accordion from './Accordion';

export default function HowWorks() {
  return (
    <div
      id="questions"
      className="flex w-[300px] sm:w-[450px] lg:w-[550px] min-h-screen justify-center items-center m-auto"
    >
      <div className="flex flex-col w-full justify-center gap-2">
        <Accordion
          question={'What is this?'}
          answer={
            'This is a free resource to practice your English speaking skill.'
          }
        />
        <Accordion
          question={'How does it works?'}
          answer={
            'Press the "Get a random Question" button, start the stopwatch and just answer the question out loud.'
          }
        />
        <Accordion
          question={'Is there any limit?'}
          answer={'Absolutely not. This is a free resource for all of you.'}
        />
        <Accordion
          question={'Available Questions'}
          answer={'There are 350 questions to practice.'}
        />
      </div>
    </div>
  );
}
