import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold font-display text-primary">
          {String(time.minutes).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Minutos</span>
      </div>
      <span className="text-4xl font-bold text-primary animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold font-display text-primary">
          {String(time.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Segundos</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
