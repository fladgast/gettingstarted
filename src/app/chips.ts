export interface Chips {
    id: number;
    name: string;
    weight: number;
    producer: string;
    price: number;
}

export const chipsTypes: Chips[] = [
    {
        id: 1,
        name: 'Grillchips',
        weight: 40,
        producer: 'Estrella',
        price: 9.95
    },
    {
        id: 2,
        name: 'Västkustchips Havssalt',
        weight: 180,
        producer: 'Estrella',
        price: 25.95
    },
    {
        id: 3,
        name: 'Sourcream/onion',
        weight: 200,
        producer: 'Garant',
        price: 23.5
    }
]