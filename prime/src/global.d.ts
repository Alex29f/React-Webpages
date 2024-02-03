// global.d.ts
export {};

declare global {
  interface Window {
    VANTA: any; // You can use 'any' or a more specific type if you know the structure of VANTA
  }
}
