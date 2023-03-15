import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
}

export function formatDate(date) {
    const newDate = new Date(date);

    return format(newDate, 'dd/MM/yyyy');
}

export function formatWeekDay(date) {
    const newDate = new Date(date);

    const weekDay = format(newDate, 'eee', {
        locale: ptBR
    })

    return capitalizeWord(weekDay);
}

export function formatMoney(value) {
    value = value / 100;

    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export function formatDateEdit(date) {
    const newDate = new Date(date);

    return format(newDate, 'yyyy-MM-dd');
}