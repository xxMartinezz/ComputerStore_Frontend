export class ComputerPage
{
    content: Computer[];
    totalElements: number;
    totalPages: number;

    constructor(content: Computer[], totalElements: number, totalPages: number) {
        this.content = content;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
      }
}

export class Computer
{
    id: number;
    name: string;
    system: string;
    processor: string;
    graphics: string;
    memory: string;
    storageDrivers: string;
    inputs?: string;
    warranty?: string;
    price: string;
    amount: number;
    image?: string;

    constructor(name?: string, system?: string, processor?: string, graphics?: string, memory?: string, storageDrivers?: string, inputs?: string, warranty?: string, price?: string, amount?: number, image?: string)
    {
        this.name = name;
        this.system = system;
        this.processor = processor;
        this.graphics = graphics;
        this.memory = memory;
        this.storageDrivers = storageDrivers;
        this.inputs = inputs;
        this.warranty = warranty;
        this.price = price;
        this.amount = amount;
        this.image = image;
    }
}
