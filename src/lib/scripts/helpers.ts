export const randomFloat = (x : number, y : number) => Math.random() * (y - x) + x;
export const waitForSeconds = async(time : number) => await new Promise(r => setTimeout(r, time * 1000));