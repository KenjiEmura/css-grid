import cls from "./index.module.scss";

export default function Home() {
  const dummyText: string[] = [];
  for (let i = 0; i < 100; i++) {
    dummyText.push(`Dummy entry #${i + 1}`);
  }

  return (
    <div className={cls.contentContainer}>
      <div className={cls.main}>
        <ul className={cls.list}>
          {dummyText.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
      <div className={cls.cardContainer}>
        <div className={cls.c1}>Card 1</div>
        <div className={cls.c2}>Card 2</div>
        <div className={cls.c3}>Card 3</div>
      </div>
    </div>
  );
}
