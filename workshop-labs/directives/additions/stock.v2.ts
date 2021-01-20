export class Stock {

    favorite: boolean = false;

    constructor(public name: string,
        public code: string,
        public price: number,
        public previousPrice: number) { }

    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }


    getCategory(): string {
        if (this.price < 100)
            return 'cheap';
        else if (this.price < 300)
            return 'medium';
        else 
            return 'expensive';
    }
}
