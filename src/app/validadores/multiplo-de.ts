import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function multiploDe(n: number): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const valor= Number(control.value);

    if(control.value === null || control.value === "" ) return null;
    return valor % n === 0 ? null: {multiploDe: {n, valor}};

    
  }
}