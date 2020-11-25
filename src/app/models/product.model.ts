export class Product {
  constructor(
    public name: string,
    // tslint:disable-next-line:variable-name
    public sale_price: number,
    public discount?: number,
    public image?: string,
    public id?: any
  ){}
}
