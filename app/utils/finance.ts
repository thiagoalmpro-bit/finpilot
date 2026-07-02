import { despesas, receitas } from "../data/finance";

export function totalReceitas() {
  return receitas.reduce((acc, item) => acc + item.valor, 0);
}

export function totalDespesas() {
  return despesas.reduce((acc, item) => acc + item.valor, 0);
}

export function saldo() {
  return totalReceitas() - totalDespesas();
}

export function dizimo() {
  return totalReceitas() * 0.10;
}

export function reserva() {
  return totalReceitas() * 0.20;
}

export function lazer() {
  return totalReceitas() * 0.05;
}

export function livreParaGastar() {
  return (
    saldo() -
    dizimo() -
    reserva() -
    lazer()
  );
}