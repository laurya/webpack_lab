interface ArriveMoon {
  spaceship: string;
  year: string;
  timeToState: string;
  team: string;
}

const arrivingToTheMoon: ArriveMoon = {
  spaceship: "Apolo 11",
  year: "1969",
  timeToState: "21 h 36 min 20 s",
  team: "Neil Armstrong - Michael Collins - Buzz Aldrin"
};

function getDataArriveToTheMoon(): string {
  const arriveToTheMoon = `First time to arrive Moon was in : ${arrivingToTheMoon.year} the SpaceShip was ${arrivingToTheMoon.spaceship}. The team was: ${arrivingToTheMoon.team}, and the have to stay in moon during ${arrivingToTheMoon.timeToState}.`;
  return arriveToTheMoon;
}

export function getDataMoon(): string {
  return getDataArriveToTheMoon();
}

// console.log(`We are in: ${process.env.NODE_ENV}`);
