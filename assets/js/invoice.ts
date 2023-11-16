class Invoice {
    name: string ="";
    quantity: number=0;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
} 


enum Unit {
    kg="kg",
    sztuka="szt.",
    metr="m"
}

enum Tax {
    t23 = 0.23,
    t8 = 0.08,
    t5 = 0.05
}
