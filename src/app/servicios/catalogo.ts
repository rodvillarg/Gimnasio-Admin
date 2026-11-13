import { computed, Service, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { API_URL } from '../config';
import { Categoria, Clase, Sobre } from '../modelos/clase';
import { mensajeDeApi } from './errores';

function leerClases(respuesta: unknown): Clase[] {
    const sobre = respuesta as Sobre<Clase[]>;
    const clases: Clase[] = [];
    for (const c of sobre.data) {
        clases.push({ ...c, imagen: API_URL + c.imagen });
    }
    return clases;
}

@Service()
export class Catalogo {
    private readonly recurso = httpResource<Clase[]>(() => API_URL + '/clases', {
        parse: leerClases,
    });

    private readonly clases = computed(() => {
        return this.recurso.hasValue() ? this.recurso.value() : [];
    });

    readonly categoria = signal<Categoria | 'todas'>("todas");

    readonly seleccionada = signal<Clase | null>(null);

    readonly cargando = this.recurso.isLoading;

    readonly error = computed(() => {
        const fallo = this.recurso.error();
        return fallo ? mensajeDeApi(fallo) : null;
    });

    // derivada
    readonly visibles = computed(() => {
        const cat = this.categoria();
        const todas = this.clases();
        return cat === "todas" ? todas: todas.filter((c) => c.categoria === cat)
    });

    readonly minutosTotales = computed(() => {
        return this.visibles().reduce((suma, c) => suma + c.duracionMin, 0)
    })

    readonly clasesLargas = computed(() => this.visibles().filter((c) => c.duracionMin >= 60).length);

    vaciar(): void {
        this.recurso.set([]);
        this.seleccionada.set(null);
    }

    restaurar(): void {
        this.recurso.reload();
    }

    filtrar(categoria: Categoria | "todas"): void {
        this.categoria.set(categoria);
        const elegida = this.seleccionada();
        if (elegida && categoria !== "todas" && elegida.categoria !== categoria) {
            this.seleccionada.set(null);
        }
    }

    seleccionar(clase: Clase): void {
        this.seleccionada.update((actual) => (actual?.id === clase.id ? null : clase)) 
    }
}
