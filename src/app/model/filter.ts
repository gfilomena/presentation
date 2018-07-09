export class Filter {
    id: string;
    name: string;
    enabled: boolean;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.enabled = true;
    }
}